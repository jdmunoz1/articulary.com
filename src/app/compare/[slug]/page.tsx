import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getComparison } from "@/data/comparisons";
import { getSoftware } from "@/data/software";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateStaticParams() {
  const { COMPARISONS } = await import("@/data/comparisons");
  return COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getComparison(slug);
  return c ? { title: c.title, description: c.description } : {};
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) notFound();

  const a = getSoftware(c.a);
  const b = getSoftware(c.b);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Comparisons", href: "/compare" }, { label: c.title }]} />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">{c.title}</h1>
        <p className="mt-3 text-[var(--ink-soft)]">{c.description}</p>
      </header>

      {/* Best-for cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <BestForCard name={a?.name ?? c.a} logo={a?.logo} items={c.bestForA} accent="brand" />
        <BestForCard name={b?.name ?? c.b} logo={b?.logo} items={c.bestForB} accent="violet" />
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {c.sections.map((sec, i) => (
          <div key={i} className="rounded-2xl border border-[var(--border)] bg-white p-6">
            <h2 className="mb-4 text-lg font-bold text-[var(--ink)]">{sec.heading}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><div className="mb-1 text-sm font-bold text-[var(--brand)]">{a?.name ?? c.a}</div><p className="text-sm text-[var(--ink-soft)]">{sec.a.text}</p></div>
              <div><div className="mb-1 text-sm font-bold text-[var(--violet)]">{b?.name ?? c.b}</div><p className="text-sm text-[var(--ink-soft)]">{sec.b.text}</p></div>
            </div>
            {sec.summary && <p className="mt-4 border-t border-[var(--border)] pt-3 text-sm font-medium text-[var(--ink)]">{sec.summary}</p>}
          </div>
        ))}
      </div>

      {/* Verdict + disclaimer */}
      <section className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--brand-soft)]/40 p-6">
        <h2 className="text-xl font-bold text-[var(--ink)]">Our verdict</h2>
        <p className="mt-2 leading-relaxed text-[var(--ink-soft)]">{c.verdict}</p>
      </section>
      {c.disclaimer && <p className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--muted)]">{c.disclaimer}</p>}

      {c.alts.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {c.alts.map((alt) => (
            <a key={alt.href} href={alt.href} className="rounded-full bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--brand-ink)] hover:bg-[var(--brand-soft)]">{alt.text} →</a>
          ))}
        </div>
      )}
    </div>
  );
}

function BestForCard({ name, logo, items, accent }: { name: string; logo?: string; items: string[]; accent: "brand" | "violet" }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--brand-soft)] text-base font-bold text-[var(--brand-ink)]">{logo ?? name[0]}</div>
        <h2 className={`text-lg font-bold ${accent === "brand" ? "text-[var(--brand)]" : "text-[var(--violet)]"}`}>Best for {name}</h2>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[var(--ink-soft)]"><span className="mt-1 text-[var(--brand)]" aria-hidden>•</span>{it}</li>
        ))}
      </ul>
    </div>
  );
}
