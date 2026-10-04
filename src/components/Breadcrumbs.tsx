import Link from "next/link";
import { SITE_CONFIG } from "@/data/site";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, home = "Home" }: { items: Crumb[]; home?: string }) {
  const linked = items.filter((c) => c.href);
  const current = items.filter((c) => !c.href);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: home, item: SITE_CONFIG.url },
      ...linked.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.label,
        item: `${SITE_CONFIG.url}${c.href}`,
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1.5 text-[var(--muted)]">
        <li>
          <Link href="/" className="hover:text-[var(--brand-ink)]">{home}</Link>
        </li>
        {linked.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden>›</span>
            <Link href={c.href!} className="hover:text-[var(--brand-ink)]">{c.label}</Link>
          </li>
        ))}
        {current.map((c, i) => (
          <li key={`cur-${i}`} className="flex items-center gap-1.5" aria-current="page">
            <span aria-hidden>›</span>
            <span className="font-medium text-[var(--ink)]">{c.label}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
