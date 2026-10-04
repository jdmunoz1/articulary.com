import type { Metadata } from "next";
import Link from "next/link";
import { CLUSTERS } from "@/lib/clusters";
import { TOOLS } from "@/data/tools";
import { SOFTWARE_CATEGORIES } from "@/data/software-categories";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Free AI Tools, Guides & Software Discovery`,
  description:
    "Articulary helps you create better content, publish smarter and grow faster — with free AI content tools, practical guides, and honest software discovery.",
};

export default function Home() {
  return (
    <div>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-soft)]/60 via-white to-[var(--accent-soft)]/40">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--violet)]/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--brand)]/10 blur-3xl" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/20 bg-white px-4 py-1.5 text-sm font-semibold text-[var(--brand-ink)]">
              <span aria-hidden>✦</span> Free AI content tools & practical guides
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[var(--ink)] sm:text-6xl">
              Create better content.
              <br />
              <span className="gradient-text">Publish smarter. Grow faster.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
              Research, plan, write and optimize content that performs — with free AI tools, honest software
              discovery, and guides that skip the fluff.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/tools" className="btn-gradient rounded-xl px-6 py-3 text-base font-semibold shadow-md">
                Try Free Tools
              </Link>
              <Link href="/guides" className="rounded-xl border border-[var(--border)] bg-white px-6 py-3 text-base font-semibold text-[var(--ink)] hover:border-[var(--brand)]/40">
                Read the Guides
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--muted)]">
              Free forever · No signup · Your output, yours to keep
            </p>
          </div>
        </div>
      </section>

      {/* ========================= WORKFLOW ========================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            A content workflow that actually works
          </h2>
          <p className="mt-3 text-[var(--ink-soft)]">
            Move from blank page to published, performing content — one clear step at a time.
          </p>
        </div>
        <div className="mt-10">
          <WorkflowDiagram
            steps={[
              { label: "Ideate", detail: "Generate article ideas & angles", icon: "💡" },
              { label: "Brief", detail: "Build a tight content brief", icon: "📋" },
              { label: "Create", detail: "Write, edit & fact-check", icon: "✍️" },
              { label: "Optimize", detail: "Titles, meta, links & refresh", icon: "🚀" },
            ]}
          />
        </div>
      </section>

      {/* ========================= CLUSTERS ========================= */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Explore by topic</h2>
              <p className="mt-3 max-w-2xl text-[var(--ink-soft)]">
                Seven focused hubs covering the full content lifecycle — each with pillar guides, supporting articles and relevant tools.
              </p>
            </div>
            <Link href="/guides" className="text-sm font-semibold text-[var(--brand-ink)] hover:underline">View all guides →</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CLUSTERS.map((c) => (
              <Link
                key={c.key}
                href={c.path}
                className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:border-[var(--brand)]/40 hover:shadow-md"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--brand-soft)] text-xl" aria-hidden>{c.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-[var(--ink)] group-hover:text-[var(--brand-ink)]">{c.label}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-[var(--ink-soft)]">{c.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.topics.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full bg-[var(--surface)] px-2.5 py-0.5 text-xs font-medium text-[var(--ink-soft)]">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= TOOLS ========================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Free tools, no signup</h2>
            <p className="mt-3 max-w-2xl text-[var(--ink-soft)]">
              Turn a topic into ideas, titles, briefs, outlines and more in seconds. Fully deterministic, no data stored.
            </p>
          </div>
          <Link href="/tools" className="text-sm font-semibold text-[var(--brand-ink)] hover:underline">All 13 tools →</Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.slice(0, 4).map((t) => (
            <Link key={t.slug} href={`/tools/${t.slug}`} className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:border-[var(--brand)]/40 hover:shadow-md">
              <div className="text-2xl" aria-hidden>{t.icon}</div>
              <h3 className="mt-3 text-base font-bold text-[var(--ink)] group-hover:text-[var(--brand-ink)]">{t.name}</h3>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">{t.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ====================== SOFTWARE ====================== */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Discover the right tools</h2>
              <p className="mt-3 max-w-2xl text-[var(--ink-soft)]">
                Software discovery and honest comparisons across the content and marketing stack.
              </p>
            </div>
            <Link href="/software" className="text-sm font-semibold text-[var(--brand-ink)] hover:underline">Browse software →</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {SOFTWARE_CATEGORIES.slice(0, 6).map((cat) => (
              <Link
                key={cat.key}
                href={`/software?category=${cat.key}`}
                className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:border-[var(--brand)]/40 hover:shadow-md"
              >
                <div className="text-2xl" aria-hidden>{cat.icon}</div>
                <h3 className="mt-3 text-lg font-bold text-[var(--ink)] group-hover:text-[var(--brand-ink)]">{cat.label}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-[var(--ink-soft)]">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================== NEWSLETTER + TRUST ================== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--brand)] to-[var(--violet)] p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">One useful content idea, weekly</h2>
            <p className="mt-3 text-indigo-100">
              Join The Articulary Brief for practical frameworks, fresh angles and honest tool picks. No spam, unsubscribe anytime.
            </p>
            <form action="/newsletter" method="get" className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="w-full rounded-xl border-0 bg-white/95 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white"
              />
              <button type="submit" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-[var(--brand)]">
                Subscribe free
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[
            { icon: "🔍", title: "Honest by default", body: "We only publish what we can stand behind — no fake reviews, no invented stats." },
            { icon: "🛠️", title: "Tools that help", body: "Free, deterministic generators built for real workflows, not gimmicks." },
            { icon: "📈", title: "Built for growth", body: "Structured data, internal links and fresh content — done right from day one." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-[var(--border)] bg-white p-6">
              <div className="text-2xl" aria-hidden>{f.icon}</div>
              <h3 className="mt-3 text-lg font-bold text-[var(--ink)]">{f.title}</h3>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
