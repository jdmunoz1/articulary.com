import Link from "next/link";
import { ContentRenderer } from "./ContentRenderer";
import { Breadcrumbs, Crumb } from "./Breadcrumbs";
import { ContentBlock } from "@/lib/types";

export interface ArticleShellProps {
  title: string;
  description: string;
  date?: string;
  updated?: string;
  readTime?: string;
  category?: { label: string; href: string };
  breadcrumbs: Crumb[];
  content: ContentBlock[];
  faq?: { q: string; a: string }[];
  showToc?: boolean;
  children?: React.ReactNode;
}

export function ArticleShell({
  title,
  description,
  date,
  updated,
  readTime,
  category,
  breadcrumbs,
  content,
  faq,
  showToc = true,
  children,
}: ArticleShellProps) {
  const tocItems = content.filter((b) => b.type === "h2").map((b) => (b as { text: string }).text);

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mb-8">
        {category && (
          <Link href={category.href} className="mb-3 inline-block rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-ink)]">
            {category.label}
          </Link>
        )}
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--ink-soft)]">{description}</p>
        {(date || readTime) && (
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--muted)]">
            {date && <time dateTime={date}>Published {date}</time>}
            {updated && updated !== date && <span>Last reviewed {updated}</span>}
            {readTime && <span>{readTime}</span>}
          </div>
        )}
      </header>
      {showToc && tocItems.length > 1 && (
        <nav className="mb-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5" aria-label="Table of contents">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--ink)]">On this page</h2>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {tocItems.map((t) => (
              <li key={t}>
                <a href={`#${t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`} className="text-sm font-medium text-[var(--brand-ink)] hover:underline">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="space-y-6">
        <ContentRenderer blocks={content} />
        {children}
      </div>

      <NewsletterInArticle />

      {faq && faq.length > 0 && <FaqSection faq={faq} />}
    </article>
  );
}

function NewsletterInArticle() {
  return (
    <section className="mt-10 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--brand-soft)] to-[var(--accent-soft)] p-6">
      <h2 className="text-xl font-bold text-[var(--ink)]">The Articulary Brief</h2>
      <p className="mt-1 text-sm text-[var(--ink-soft)]">
        One useful content idea every week. No spam, unsubscribe anytime.
      </p>
      <form action="/newsletter" method="get" className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          aria-label="Email address"
          className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--brand)]"
        />
        <button type="submit" className="btn-gradient rounded-lg px-5 py-2.5 text-sm font-semibold">
          Subscribe
        </button>
      </form>
    </section>
  );
}

function FaqSection({ faq }: { faq: { q: string; a: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 className="mb-4 text-2xl font-bold text-[var(--ink)]">Frequently asked questions</h2>
      <div className="space-y-4">
        {faq.map((item, i) => (
          <div key={i}>
            <h3 className="text-base font-semibold text-[var(--ink)]">{item.q}</h3>
            <p className="mt-1 text-[var(--ink-soft)]">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
