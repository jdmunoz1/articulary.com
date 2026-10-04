import type { Metadata } from "next";
import Link from "next/link";
import { ALL_GUIDES, GUIDES_COUNT } from "@/data/guides";
import { CLUSTERS } from "@/lib/clusters";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Guides & Research",
  description:
    "Practical, well-researched guides on AI content, SEO, content marketing, blogging, email, social media and choosing the right tools.",
};

export default function GuidesIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Guides" }]} />
      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Guides & Research</h1>
        <p className="mt-3 text-lg text-[var(--ink-soft)]">
          {GUIDES_COUNT} practical guides across {CLUSTERS.length} topic hubs. No fluff — just processes you can apply.
        </p>
      </header>

      <div className="space-y-12">
        {CLUSTERS.map((cluster) => {
          const clusterGuides = ALL_GUIDES.filter((g) => g.cluster === cluster.key);
          if (!clusterGuides.length) return null;
          return (
            <section key={cluster.key}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-xl font-bold text-[var(--ink)]">
                  <span aria-hidden>{cluster.icon}</span> {cluster.label}
                </h2>
                <Link href={cluster.path} className="text-sm font-semibold text-[var(--brand-ink)] hover:underline">
                  Open hub →
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {clusterGuides.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="group flex flex-col rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:border-[var(--brand)]/40 hover:shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      {g.tier === 1 && <span className="rounded-full bg-[var(--brand-soft)] px-2.5 py-0.5 text-xs font-bold text-[var(--brand-ink)]">Guide</span>}
                      {g.featured && <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-bold text-[var(--ink)]">Featured</span>}
                    </div>
                    <h3 className="mt-3 text-base font-bold text-[var(--ink)] group-hover:text-[var(--brand-ink)]">{g.title}</h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm text-[var(--ink-soft)]">{g.description}</p>
                    <div className="mt-3 text-xs text-[var(--muted)]">{g.readTime}</div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
