import type { Metadata } from "next";
import Link from "next/link";
import { SOFTWARE } from "@/data/software";
import { SOFTWARE_CATEGORIES } from "@/data/software-categories";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Software Discovery & Comparisons",
  description:
    "Honest, structured overviews of content and marketing software — capabilities, pricing, ideal users and trade-offs. Editorial, not hype.",
};

export default async function SoftwareIndex({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const cat = category ? SOFTWARE_CATEGORIES.find((c) => c.key === category) : undefined;
  const entries = cat ? SOFTWARE.filter((s) => s.category === cat.key) : SOFTWARE;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Software" }]} />
      <header className="mb-8 max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Software discovery</h1>
        <p className="mt-3 text-lg text-[var(--ink-soft)]">
          Structured, honest overviews of content and marketing tools. Editorial based on public info — we don&apos;t claim to have tested tools we haven&apos;t.
        </p>
      </header>

      {/* Categories */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Link href="/software" className={`rounded-full px-3 py-1.5 text-sm font-semibold ${!cat ? "bg-[var(--brand)] text-white" : "bg-[var(--surface)] text-[var(--ink-soft)] hover:bg-[var(--border)]"}`}>
          All
        </Link>
        {SOFTWARE_CATEGORIES.map((c) => (
          <Link key={c.key} href={`/software?category=${c.key}`} className={`rounded-full px-3 py-1.5 text-sm font-semibold ${cat?.key === c.key ? "bg-[var(--brand)] text-white" : "bg-[var(--surface)] text-[var(--ink-soft)] hover:bg-[var(--border)]"}`}>
            <span aria-hidden>{c.icon}</span> {c.label}
          </Link>
        ))}
      </div>

      {cat && (
        <p className="mb-6 text-sm text-[var(--muted)]">
          Showing software in <strong className="text-[var(--ink)]">{cat.label}</strong>: {cat.description}
        </p>
      )}

      {entries.length === 0 && (
        <div className="rounded-2xl border border-dashed border-[var(--border)] p-8 text-center text-[var(--muted)]">
          No software listed in this category yet. Browse all categories above.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((s) => (
          <Link key={s.slug} href={`/software/${s.slug}`} className="group flex flex-col rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:border-[var(--brand)]/40 hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--brand-soft)] text-lg font-bold text-[var(--brand-ink)]">{s.logo}</div>
              <div>
                <h2 className="text-lg font-bold text-[var(--ink)] group-hover:text-[var(--brand-ink)]">{s.name}</h2>
                <span className="text-xs text-[var(--muted)]">{SOFTWARE_CATEGORIES.find((c) => c.key === s.category)?.label}</span>
              </div>
            </div>
            <p className="mt-3 line-clamp-3 flex-1 text-sm text-[var(--ink-soft)]">{s.tagline}</p>
            <div className="mt-4 border-t border-[var(--border)] pt-3 text-sm font-semibold text-[var(--brand-ink)]">Read overview →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
