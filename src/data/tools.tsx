import { ToolDef } from "@/lib/types";
import { TOOLS as P0 } from "./tools.p0";
import { TOOLS as P1 } from "./tools.p1";
import { TOOLS as P2 } from "./tools.p2";
import { TOOLS as P3 } from "./tools.p3";
import { TOOLS as P4 } from "./tools.p4";

// Content-plan targets that haven't shipped yet are remapped to real pages so
// the site never renders dead internal links. When a planned page ships, remove
// its remap entry and the raw href will start resolving on its own.
const HREF_REMAP: Record<string, string> = {
  // Planned SEO guides -> shipped pillar/nearby guides
  "/seo/search-intent": "/guides/search-intent-guide",
  "/seo/meta-titles": "/guides/meta-titles-descriptions",
  "/seo/on-page-seo": "/guides/content-seo-guide",
  "/seo/technical-seo": "/guides/content-seo-guide",
  "/seo/content-refreshing": "/guides/content-seo-guide",
  "/seo/topic-clusters": "/guides/content-seo-guide",
  "/seo/keyword-research": "/guides/content-seo-guide",
  "/seo/internal-linking": "/guides/content-seo-guide",
  // Email planned guides -> shipped guides
  "/email-marketing/newsletter-guide": "/guides/email-marketing-guide",
  "/email-marketing/subject-lines": "/guides/email-subject-lines",
  // Blogging planned guides -> shipped guides / hub
  "/blogging/blog-title-optimization": "/guides/better-blog-headlines",
  "/blogging/blog-outline-guide": "/blogging",
  // Content-marketing planned pages -> hub (pillar exists too)
  "/content-marketing/content-plan": "/content-marketing",
  "/content-marketing/content-brief": "/content-marketing",
  "/content-marketing/content-audit": "/content-marketing",
  "/content-marketing/content-ideas": "/content-marketing",
  "/content-marketing/repurposing": "/content-marketing",
  "/social-media/content-planning": "/social-media",
  // Planned/unshipped software entries -> shipped equivalents or index
  "/software/surfer": "/software/surfer-seo",
  "/software/ahrefs": "/software",
  "/software/semrush": "/software",
  "/software/frase": "/software",
  "/software/buffer": "/software",
  "/software/canva": "/software",
  "/software/convertkit": "/software",
  "/software/mailchimp": "/software",
};

const normalizeHref = (href: string): string => HREF_REMAP[href] ?? href;

export const TOOLS: ToolDef[] = [...P0, ...P1, ...P2, ...P3, ...P4].map((t) => ({
  ...t,
  relatedTools: (t.relatedTools ?? []).map((l) => ({ ...l, href: normalizeHref(l.href) })),
  relatedGuides: (t.relatedGuides ?? []).map((l) => ({ ...l, href: normalizeHref(l.href) })),
  software: (t.software ?? []).map((l) => ({ ...l, href: normalizeHref(l.href) })),
}));

export function getTool(slug: string) {
  return TOOLS.find((t) => t.slug === slug);
}

