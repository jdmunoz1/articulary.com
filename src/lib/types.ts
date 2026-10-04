/* ---------------------------------------------------------------------------
 * Articulary — core data types
 * A typed, render-safe content model. All content is data-driven so it can
 * later move to a database or headless CMS without rewriting the front end.
 * ------------------------------------------------------------------------- */

/* ===========================================================================
 * Content block system
 * ========================================================================= */
export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "info"; text: string }
  | { type: "tip"; text: string }
  | { type: "warning"; text: string }
  | { type: "list"; title?: string; items: string[] }
  | { type: "checklist"; title?: string; items: string[] }
  | { type: "ordered"; title?: string; items: string[] }
  | { type: "table"; title?: string; headers: string[]; rows: string[][] }
  | { type: "stat"; label: string; value: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "cta"; heading?: string; text?: string; links: { text: string; href: string }[] }
  | { type: "related"; title?: string; links: { text: string; href: string }[] }
  | { type: "affiliate_disclosure"; text?: string }
  | { type: "divider" }
  | { type: "workflow"; title?: string; steps: { label: string; detail: string }[] };

/* ===========================================================================
 * Topic hub / cluster
 * ========================================================================= */
export interface ClusterDef {
  key: string; // unique internal key, e.g. "seo"
  path: string; // URL prefix, e.g. "/seo"
  label: string; // hub page title, e.g. "SEO"
  navLabel: string; // short label for nav, e.g. "SEO"
  blurb: string; // hub description
  icon: string; // emoji / glyph
  topics: string[]; // sub-topic tags shown on hub
}

/* ===========================================================================
 * Guide article
 * ========================================================================= */
export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  cluster: string; // ClusterDef key
  subsection?: string;
  date: string; // ISO publish date (YYYY-MM-DD)
  updated?: string; // ISO last-reviewed date
  readTime: string;
  tier?: 1 | 2 | 3; // pillar / supporting / commercial
  featured?: boolean;
  priority?: number;
  related?: { text: string; href: string }[];
  content: ContentBlock[];
  faq?: { q: string; a: string }[];
}

/* ===========================================================================
 * Software listing / review
 * ========================================================================= */
export interface Software {
  slug: string; // e.g. "jasper"
  name: string;
  tagline: string;
  description: string;
  category: string; // matches a software category key
  pricing: string; // short pricing summary
  pricingDetail: string;
  logo?: string; // emoji or short label
  overview: ContentBlock[];
  idealFor: string[];
  keyFeatures: string[];
  advantages: string[];
  limitations: string[];
  integrations: string[];
  alternatives: { text: string; href: string }[];
  verdict: string;
  affiliated?: boolean;
  affiliateUrl?: string | null;
  officialUrl?: string;
  date: string;
  updated?: string;
}

/* ===========================================================================
 * Comparison page
 * ========================================================================= */
export interface Comparison {
  slug: string; // e.g. "jasper-vs-copy-ai"
  title: string;
  description: string;
  a: string; // software slug
  b: string; // software slug
  bestForA: string[];
  bestForB: string[];
  verdict: string;
  disclaimer?: string;
  sections: {
    heading: string;
    a: { label?: string; text: string };
    b: { label?: string; text: string };
    summary?: string;
  }[];
  alts: { text: string; href: string }[];
  date: string;
  updated?: string;
}

/* ===========================================================================
 * Software category
 * ========================================================================= */
export interface SoftwareCategory {
  key: string;
  label: string;
  description: string;
  icon: string;
}

/* ===========================================================================
 * Free tool definition
 * ========================================================================= */
export interface ToolDef {
  slug: string; // e.g. "blog-title-generator"
  name: string; // "Blog Title Generator"
  shortName: string; // short nav label
  icon: string;
  tagline: string;
  description: string;
  inputLabel: string;
  inputPlaceholder: string;
  inputHint?: string;
  buttonLabel: string;
  outputLabel: string;
  outputVariants?: string[];
  howItWorks: string[]; // steps
  useCases: string[];
  faq: { q: string; a: string }[];
  relatedTools: { text: string; href: string }[];
  relatedGuides: { text: string; href: string }[];
  software: { text: string; href: string }[];
  aiPowered?: boolean; // whether result may call an AI API when configured
}

/* ===========================================================================
 * Author
 * ========================================================================= */
export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  links?: { label: string; href: string }[];
}

/* ===========================================================================
 * Content refresh status
 * ========================================================================= */
export type RefreshStatus = "current" | "review-soon" | "needs-update";
