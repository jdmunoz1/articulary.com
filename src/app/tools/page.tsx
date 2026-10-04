import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/data/tools";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Free Content & AI Writing Tools",
  description:
    "A growing collection of free tools for content ideas, titles, briefs, outlines, meta descriptions, FAQs, keyword intent and more. Fast, no signup, directly reusable.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Free Tools" }]} />
      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Free AI Content Tools</h1>
        <p className="mt-3 text-lg text-[var(--ink-soft)]">
          Practical, no-signup tools for researching, planning, writing and optimizing content. Every tool is free and its output is yours to copy.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((t) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className="group flex flex-col rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:border-[var(--brand)]/40 hover:shadow-md"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--brand-soft)] text-xl">
              <span aria-hidden>{t.icon}</span>
            </div>
            <h2 className="mt-4 text-lg font-bold text-[var(--ink)] group-hover:text-[var(--brand-ink)]">{t.name}</h2>
            <p className="mt-2 line-clamp-3 flex-1 text-sm text-[var(--ink-soft)]">{t.tagline}</p>
            <div className="mt-4 border-t border-[var(--border)] pt-3 text-sm font-semibold text-[var(--brand-ink)]">Open tool →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
