import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSoftware, SOFTWARE } from "@/data/software";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSoftware(slug);
  return s ? { title: `${s.name} Alternatives — Similar Software` } : {};
}

export default async function AlternativesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSoftware(slug);
  if (!s) notFound();

  const sameCategory = SOFTWARE.filter((x) => x.slug !== s.slug && x.category === s.category);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Software", href: "/software" }, { label: s.name, href: `/software/${s.slug}` }, { label: "Alternatives" }]} />
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)]">Alternatives to {s.name}</h1>
        <p className="mt-3 text-[var(--ink-soft)]">Similar software you might consider alongside {s.name}.</p>
      </header>

      {sameCategory.length === 0 && (
        <div className="rounded-2xl border border-dashed border-[var(--border)] p-8 text-center text-[var(--muted)]">
          No alternatives listed yet in this category. <Link href="/software" className="text-[var(--brand-ink)] hover:underline">Browse all software →</Link>
        </div>
      )}

      <div className="space-y-3">
        {sameCategory.map((x) => (
          <Link key={x.slug} href={`/software/${x.slug}`} className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:border-[var(--brand)]/40">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--brand-soft)] text-lg font-bold text-[var(--brand-ink)]">{x.logo}</div>
            <div className="flex-1">
              <h2 className="font-bold text-[var(--ink)]">{x.name}</h2>
              <p className="line-clamp-2 text-sm text-[var(--ink-soft)]">{x.tagline}</p>
            </div>
            <span className="text-[var(--brand-ink)]">→</span>
          </Link>
        ))}
      </div>

      {s.alternatives.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-[var(--ink)]">Suggested by our team</h2>
          <div className="flex flex-wrap gap-2">
            {s.alternatives.map((a) => (
              <Link key={a.href} href={a.href} className="rounded-full bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--brand-ink)] hover:bg-[var(--brand-soft)]">{a.text} →</Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
