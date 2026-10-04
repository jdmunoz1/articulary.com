import type { Metadata } from "next";
import Link from "next/link";
import { ClusterDef } from "@/lib/types";
import { getGuidesByCluster } from "@/data/guides";
import { getTool } from "@/data/tools";
import { TOOLS } from "@/data/tools";
import { HUB_TOOLS } from "@/lib/hub-maps";
import { Breadcrumbs } from "./Breadcrumbs";

export function clusterMetadata(cluster: ClusterDef): Metadata {
  return {
    title: `${cluster.label} — Guides, Tools & Software`,
    description: cluster.blurb,
  };
}

export function ClusterHub({ cluster }: { cluster: ClusterDef }) {
  const guides = getGuidesByCluster(cluster.key);
  const toolSlugs = HUB_TOOLS[cluster.key] ?? [];
  const tools = toolSlugs.map((s) => getTool(s)).filter(Boolean);
  const fallbackTools = TOOLS.filter((t) => tools.some((x) => x && x.slug === t.slug));

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: cluster.label }]} />

      {/* Hero */}
      <header className="mb-10 rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--brand-soft)]/60 to-white p-8">
        <div className="flex items-start gap-4">
          <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--violet)] text-2xl" aria-hidden>
            {cluster.icon}
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">{cluster.label}</h1>
            <p className="mt-2 max-w-2xl text-lg text-[var(--ink-soft)]">{cluster.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cluster.topics.map((t) => (
                <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--ink-soft)]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Guides */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--ink)]">Guides</h2>
          <Link href="/guides" className="text-sm font-semibold text-[var(--brand-ink)] hover:underline">All guides →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="group flex flex-col rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:border-[var(--brand)]/40 hover:shadow-md">
              {g.tier === 1 && <span className="mb-2 self-start rounded-full bg-[var(--brand-soft)] px-2.5 py-0.5 text-xs font-bold text-[var(--brand-ink)]">Pillar guide</span>}
              <h3 className="text-base font-bold text-[var(--ink)] group-hover:text-[var(--brand-ink)]">{g.title}</h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-[var(--ink-soft)]">{g.description}</p>
              <div className="mt-3 text-xs text-[var(--muted)]">{g.readTime}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured tools */}
      {fallbackTools.length > 0 && (
        <section className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[var(--ink)]">Free tools for {cluster.label.toLowerCase()}</h2>
            <Link href="/tools" className="text-sm font-semibold text-[var(--brand-ink)] hover:underline">All tools →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fallbackTools.map((t) => (
              <Link key={t.slug} href={`/tools/${t.slug}`} className="group rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:border-[var(--brand)]/40 hover:shadow-md">
                <div className="text-2xl" aria-hidden>{t.icon}</div>
                <h3 className="mt-2 text-sm font-bold text-[var(--ink)] group-hover:text-[var(--brand-ink)]">{t.name}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-[var(--ink-soft)]">{t.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
