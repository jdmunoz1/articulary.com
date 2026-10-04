import Link from "next/link";
import { CLUSTERS } from "@/lib/clusters";
import { SITE_CONFIG } from "@/data/site";

const EXPLORE = [
  { label: "Guides", href: "/guides" },
  { label: "Free Tools", href: "/tools" },
  { label: "Software", href: "/software" },
  { label: "Comparisons", href: "/compare" },
  { label: "Search", href: "/search" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Newsletter", href: "/newsletter" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label={`${SITE_CONFIG.name} homepage`}>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--violet)] text-sm font-black text-white">A</span>
              <span className="text-[15px] font-bold tracking-tight text-[var(--ink)]">
                Articul<span className="gradient-text">ary</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-[var(--ink-soft)]">
              Free AI tools, practical guides and software discovery to help you research, create, optimize and grow content that performs.
            </p>
          </div>
          <FooterCol title="Explore" links={EXPLORE} />
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[var(--ink)]">Topics</h3>
            <ul className="space-y-2.5">
              {CLUSTERS.map((c) => (
                <li key={c.key}>
                  <Link href={c.path} className="text-sm text-[var(--ink-soft)] hover:text-[var(--brand-ink)]">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <FooterCol title="Company" links={COMPANY} />
          <FooterCol title="Legal" links={LEGAL} />
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-white p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-[var(--ink)]">The Articulary Brief</h3>
              <p className="text-sm text-[var(--ink-soft)]">One useful content idea every week. No spam.</p>
            </div>
            <form action="/newsletter" method="get" className="flex w-full max-w-md gap-2">
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="w-full rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--brand)]"
              />
              <button type="submit" className="btn-gradient rounded-lg px-5 py-2.5 text-sm font-semibold">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-[var(--brand-ink)]">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--brand-ink)]">Terms</Link>
            <Link href="/affiliate-disclosure" className="hover:text-[var(--brand-ink)]">Disclosure</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[var(--ink)]">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-[var(--ink-soft)] hover:text-[var(--brand-ink)]">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
