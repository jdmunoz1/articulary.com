# Articulary.com

Premium AI‑powered content, publishing & marketing resource site. Combines high‑quality educational guides, useful free content/AI tools, SEO‑driven topic hubs, honest software discovery, affiliate monetization (dormant), email list building, structured data, and strong internal linking.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4** — statically rendered, deployable to Vercel.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (statically renders all pages)
npm run start      # serve the production build
```

## QA & audit scripts

| Script | What it does |
|---|---|
| `npm run lint` | ESLint (Next core‑web‑vitals + TypeScript config) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run qa` | 19 data‑integrity checks (tool→generator coverage, engine round‑trips, required fields, internal link resolution, affiliate consistency, per‑cluster guide depth) |
| `npm run count` | URL counts by type + guides per cluster |
| `npm run inventory` | Full URL + metadata inventory → `inventory.json` |
| `npm run content-map` | Structured content architecture → `content-map.json` |

`content-map.json` and `inventory.json` are generated artifacts (gitignored).

## Content architecture

Everything is **data‑driven** — content lives in typed TS modules rendered by shared components:

- **Guides** — `src/data/guides/*.ts` (per hub) → typed `ContentBlock`s rendered via `ArticleShell` + `ContentRenderer` with TOC, FAQ (FAQPage JSON‑LD), related links, breadcrumbs.
- **7 topic hubs** — `src/lib/clusters.ts` (AI Content, SEO, Content Marketing, Blogging, Email Marketing, Social Media, AI Tools). Each hub page lists its guides, tools, and software.
- **13 free tools** — `src/data/tools.tsx` + deterministic engines in `src/lib/tool-engine/` (template + seeded PRNG, no external AI API). Wired for analytics via a `trackUsage` gtag hook.
- **Software database** — `src/data/software.ts` (honest editorial: "public info, not first‑party testing"). Affiliate URLs are centralized in `src/data/affiliates.ts` and **inactive** until real agreements exist.
- **Comparisons** — `src/data/comparisons.ts` → `src/app/compare/*`.

Routable files: `sitemap.ts`, `robots.ts`, `not-found.tsx`, and JSON‑LD (Article, FAQPage, SoftwareApplication) matching on‑page content.

## Deployment (Vercel)

1. Push this repo to GitHub/GitLab.
2. Import it in the [Vercel dashboard](https://vercel.com/new) — framework preset **Next.js** is auto‑detected.
3. Add env vars: `ADMIN_PASSWORD=<strong-password>` (needed for the admin login; leave unset to keep admin closed by default).
4. Deploy. Vercel handles static generation + CDN automatically.

Security headers, AVIF/WebP images, and `poweredByHeader: false` are configured in `next.config.mjs`.

## Admin

`/admin` is protected by an **httpOnly‑cookie password gate** (`/api/admin/login` sets `articulary_admin=1`, checked server‑side via `cookies()`). This is a deliberate minimal start — the code comment documents the upgrade path to **NextAuth / Auth.js** before any real administrative use. The admin page itself is a placeholder (Guides / Tools / Software / Site settings) with `robots: noindex`.

## Env

- `ADMIN_PASSWORD` — password for `/admin`. Keep `.env*.local` out of version control (gitignored).

## Roadmap

- Expand software database + comparisons (affiliate links stay dormant until agreements are signed).
- Real auth provider (Auth.js) for `/admin`.
- Paid/premium tier (architecture supports content gating).
- Newsletter provider integration.

## License / IP

© 2025 Articulary. All copy is original and written for this site; no fabricated testimonials, awards, or testing claims.
