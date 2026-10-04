import type { Metadata } from "next";
import Link from "next/link";
import { COMPARISONS } from "@/data/comparisons";
import { getSoftware } from "@/data/software";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Software Comparisons",
  description: "Honest, side-by-side comparisons of content and marketing software — editorial, based on public information.",
};

export default function CompareIndex() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Comparisons" }]} />
      <header className="mb-8 max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Software comparisons</h1>
        <p className="mt-3 text-lg text-[var(--ink-soft)]">Side-by-side takes on software choices — editorial and honest, never paid placement.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {COMPARISONS.map((c) => {
          const a = getSoftware(c.a);
          const b = getSoftware(c.b);
          return (
            <Link key={c.slug} href={`/compare/${c.slug}`} className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:border-[var(--brand)]/40 hover:shadow-md">
              <div className="flex items-center justify-center gap-3 text-center">
                <NameBadge logo={a?.logo} name={a?.name ?? c.a} />
                <span className="font-bold text-[var(--muted)]">vs</span>
                <NameBadge logo={b?.logo} name={b?.name ?? c.b} />
              </div>
              <h2 className="mt-4 text-center text-lg font-bold text-[var(--ink)] group-hover:text-[var(--brand-ink)]">{c.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-[var(--ink-soft)]">{c.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function NameBadge({ logo, name }: { logo?: string; name: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand-soft)] text-lg font-bold text-[var(--brand-ink)]">{logo ?? name[0]}</div>
      <span className="mt-2 text-sm font-semibold text-[var(--ink)]">{name}</span>
    </div>
  );
}
