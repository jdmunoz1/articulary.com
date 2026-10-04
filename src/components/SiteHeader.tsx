"use client";

import Link from "next/link";
import { useState } from "react";
import { MAIN_NAV } from "@/data/nav";
import { SITE_CONFIG } from "@/data/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={`${SITE_CONFIG.name} homepage`}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--violet)] text-sm font-black text-white">
            A
          </span>
          <span className="text-[15px] font-bold tracking-tight text-[var(--ink)]">
            Articul<span className="gradient-text">ary</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {MAIN_NAV.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.label)} onMouseLeave={() => setOpenMenu(null)}>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-[var(--ink-soft)] hover:bg-[var(--surface)] hover:text-[var(--ink)]"
              >
                {item.label}
                {item.children && (
                  <svg width="12" height="12" viewBox="0 0 12 12" className="text-[var(--muted)]" aria-hidden>
                    <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
              {item.children && openMenu === item.label && (
                <div className="absolute left-0 top-full w-72 rounded-xl border border-[var(--border)] bg-white p-2 shadow-lg">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block rounded-lg px-3 py-2 text-sm text-[var(--ink-soft)] hover:bg-[var(--surface)] hover:text-[var(--ink)]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={() => setSearchOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--ink-soft)] hover:bg-[var(--surface)]"
            aria-haspopup="dialog"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>Search</span>
          </button>
          <Link href="/tools" className="btn-gradient rounded-lg px-4 py-2 text-sm font-semibold">
            Try Free Tools
          </Link>
        </div>
        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--ink)] lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-[var(--border)] bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <nav className="space-y-1" aria-label="Mobile navigation">
              {MAIN_NAV.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 text-base font-semibold text-[var(--ink)] hover:bg-[var(--surface)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-3 border-l border-[var(--border)] pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-md px-3 py-2 text-sm text-[var(--ink-soft)] hover:bg-[var(--surface)]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <Link
              href="/tools"
              className="btn-gradient mt-4 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Try Free Tools
            </Link>
          </div>
        </div>
      )}

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-[12vh]" onClick={onClose} role="dialog" aria-modal="true" aria-label="Search">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <form action="/search" className="flex items-center gap-2 border-b border-[var(--border)] p-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--muted)]" aria-hidden>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            name="q"
            type="search"
            autoFocus
            placeholder="Search guides, tools, software…"
            className="w-full bg-transparent text-base outline-none placeholder:text-[var(--muted)]"
            aria-label="Search the site"
          />
          <button type="submit" className="btn-gradient rounded-lg px-4 py-2 text-sm font-semibold">Search</button>
        </form>
        <div className="p-4 text-sm text-[var(--muted)]">
          Try: <span className="text-[var(--ink-soft)]">topic clusters</span>,{" "}
          <span className="text-[var(--ink-soft)]">blog title generator</span>,{" "}
          <span className="text-[var(--ink-soft)]">Jasper review</span>
        </div>
      </div>
    </div>
  );
}
