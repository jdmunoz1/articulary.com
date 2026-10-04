import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSoftware } from "@/data/software";
import { SOFTWARE_CATEGORIES } from "@/data/software-categories";
import { ContentRenderer } from "@/components/ContentRenderer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAffiliateUrl, isAffiliated } from "@/data/affiliates";

export async function generateStaticParams() {
  const { SOFTWARE } = await import("@/data/software");
  return SOFTWARE.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSoftware(slug);
  if (!s) return {};
  return { title: `${s.name} — Overview & Software Review`, description: s.description };
}

export default async function SoftwarePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSoftware(slug);
  if (!s) notFound();

  const category = SOFTWARE_CATEGORIES.find((c) => c.key === s.category);
  const affUrl = s.affiliateUrl ?? getAffiliateUrl(s.name.toLowerCase());
  const affiliated = s.affiliated !== false && isAffiliated(s.name.toLowerCase());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: s.name,
    applicationCategory: category?.label ?? "Software",
    description: s.description,
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: s.pricing, priceCurrency: "USD" },
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs
        items={[
          { label: "Software", href: "/software" },
          ...(category ? [{ label: category.label, href: `/software?category=${category.key}` }] : []),
          { label: s.name },
        ]}
      />

      {/* Hero */}
      <header className="mb-8 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--brand-soft)]/50 to-white p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--violet)] text-xl font-black text-white">{s.logo}</div>
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold tracking-tight text-[var(--ink)] sm:text-3xl">{s.name}</h1>
            <p className="mt-1 text-[var(--ink-soft)]">{s.tagline}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white px-3 py-1 font-semibold text-[var(--ink)]">{s.pricing}</span>
          {category && <span className="rounded-full bg-white px-3 py-1 font-semibold text-[var(--ink-soft)]">{category.label}</span>}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {affUrl && affiliated ? (
            <a href={affUrl} rel="nofollow sponsored" className="btn-gradient rounded-lg px-4 py-2 text-sm font-semibold">Visit {s.name}</a>
          ) : (
            s.officialUrl && (
              <a href={s.officialUrl} target="_blank" rel="noopener" className="rounded-lg border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:border-[var(--brand)]/40">
                Visit official site →
              </a>
            )
          )}
        </div>
      </header>

      {/* Overview */}
      <section className="mb-10">
        <div className="space-y-6"><ContentRenderer blocks={s.overview} /></div>
      </section>

      {/* Detail grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        <DetailList title="Ideal for" items={s.idealFor} />
        <DetailList title="Key features" items={s.keyFeatures} />
        <DetailList title="Advantages" items={s.advantages} />
        <DetailList title="Limitations" items={s.limitations} />
        {s.integrations.length > 0 && <DetailList title="Integrations" items={s.integrations} />}
      </div>

      {/* Alternatives */}
      {s.alternatives.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-[var(--ink)]">Alternatives & related</h2>
          <div className="flex flex-wrap gap-2">
            {s.alternatives.map((a) => (
              <Link key={a.href} href={a.href} className="rounded-full bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--brand-ink)] hover:bg-[var(--brand-soft)]">
                {a.text} →
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Verdict */}
      <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--brand-soft)]/40 p-6">
        <h2 className="text-xl font-bold text-[var(--ink)]">Verdict</h2>
        <p className="mt-2 leading-relaxed text-[var(--ink-soft)]">{s.verdict}</p>
      </section>

      {/* Disclosure */}
      <section className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--muted)]">
        <strong className="text-[var(--ink)]">How we review.</strong> Editorial based on publicly available
        information. We clearly separate platform capabilities from opinion and vendor claims, and we do not
        claim to have tested tools we have personally not tested. Affiliate links, when present, are disclosed
        and never change our verdict.
      </section>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--ink)]">{title}</h3>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[var(--ink-soft)]">
            <span className="mt-1 text-[var(--brand)]" aria-hidden>•</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
