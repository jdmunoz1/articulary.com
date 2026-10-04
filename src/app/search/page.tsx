"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import { ALL_GUIDES } from "@/data/guides";
import { TOOLS } from "@/data/tools";
import { SOFTWARE } from "@/data/software";
import { CLUSTERS } from "@/lib/clusters";

type Result = { title: string; href: string; desc: string; group: "Guides" | "Tools" | "Software" | "Topics" };

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-4xl px-4 py-10">Loading search…</div>}>
      <SearchContent />
    </Suspense>
  );
}

function SearchContent() {
  const sp = useSearchParams();
  const q = (sp.get("q") ?? "").trim().toLowerCase();

  const results = useMemo<Result[]>(() => {
    if (!q) return [];
    const out: Result[] = [];
    for (const g of ALL_GUIDES) {
      if ((g.title + " " + g.description).toLowerCase().includes(q)) out.push({ title: g.title, href: `/guides/${g.slug}`, desc: g.description, group: "Guides" });
    }
    for (const t of TOOLS) {
      if ((t.name + " " + t.tagline).toLowerCase().includes(q) || t.slug.includes(q)) out.push({ title: t.name, href: `/tools/${t.slug}`, desc: t.tagline, group: "Tools" });
    }
    for (const s of SOFTWARE) {
      if ((s.name + " " + s.tagline).toLowerCase().includes(q)) out.push({ title: s.name, href: `/software/${s.slug}`, desc: s.tagline, group: "Software" });
    }
    for (const c of CLUSTERS) {
      if ((c.label + " " + c.blurb).toLowerCase().includes(q)) out.push({ title: c.label, href: c.path, desc: c.blurb, group: "Topics" });
    }
    return out.slice(0, 30);
  }, [q]);

  const groups: ("Guides" | "Tools" | "Software" | "Topics")[] = ["Guides", "Tools", "Software", "Topics"];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)]">Search</h1>
      <form action="/search" method="get" className="mt-4 flex gap-2">
        <input
          name="q"
          defaultValue={sp.get("q") ?? ""}
          type="search"
          placeholder="Search guides, tools, software…"
          className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand)]"
          aria-label="Search"
        />
        <button type="submit" className="btn-gradient rounded-xl px-5 py-3 text-sm font-semibold">Search</button>
      </form>

      {q && (
        <p className="mt-6 text-sm text-[var(--muted)]">{results.length} result{results.length === 1 ? "" : "s"} for “{q}”</p>
      )}

      {!q && (
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-bold text-[var(--ink)]">Popular searches</h2>
          <div className="flex flex-wrap gap-2">
            {["AI content", "SEO", "blog titles", "content brief", "email marketing", "Jasper", "social media", "keyword intent"].map((s) => (
              <Link key={s} href={`/search?q=${encodeURIComponent(s)}`} className="rounded-full bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--brand-ink)] hover:bg-[var(--brand-soft)]">{s}</Link>
            ))}
          </div>
        </div>
      )}

      {q && (
        <div className="mt-6 space-y-8">
          {groups.map((gname) => {
            const list = results.filter((r) => r.group === gname);
            if (!list.length) return null;
            return (
              <section key={gname}>
                <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--ink)]">{gname}</h2>
                <div className="space-y-2">
                  {list.map((r) => (
                    <Link key={r.href} href={r.href} className="block rounded-xl border border-[var(--border)] bg-white p-4 transition hover:border-[var(--brand)]/40">
                      <div className="font-bold text-[var(--ink)]">{r.title}</div>
                      <p className="mt-1 line-clamp-2 text-sm text-[var(--ink-soft)]">{r.desc}</p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
