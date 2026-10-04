import { Software } from "@/lib/types";

/* All software entries follow the same honesty rules:
 * - affiliateUrl is null until a real agreement exists (see affiliates.ts).
 * - Editorial overviews distinguish platform capabilities (public info) from
 *   our opinion ("editorial") and vendor claims ("claimed"). We do not claim
 *   to have tested products we have not personally tested.
 */
export const SOFTWARE: Software[] = [
  {
    slug: "jasper",
    name: "Jasper",
    tagline: "AI platform for marketing teams producing on-brand content at scale.",
    description:
      "Jasper is an AI writing and marketing platform aimed at teams that want consistent, on-brand content production. The editorial notes below reflect publicly available information, not first-party testing.",
    category: "ai-writing",
    pricing: "From $39/month (creator plan, annual)",
    pricingDetail:
      "Jasper lists creator, pro and business tiers with different feature limits. Pricing as publicly listed; verify on the official site.",
    logo: "J",
    overview: [
      { type: "lead", text: "Jasper positions itself as an enterprise-friendly AI content platform for marketing and brand teams — with brand voice controls, templates and campaign tools." },
      { type: "h3", text: "Capabilities (as publicly described)" },
      { type: "list", title: "Reported capabilities include:", items: ["Brand voice and style settings for consistency.", "A variety of templates for ads, emails, blogs and more.", "Campaign and document features for longer-form work.", "Integrations with common marketing and SEO tools.", "Team collaboration and workflow features on higher tiers."] },
      { type: "info", text: "These reflect Jasper's public product descriptions. We have not independently tested the tool as part of this review." },
    ],
    idealFor: ["Marketing teams that need consistent on-brand content", "Teams producing high volumes of marketing copy", "Users who want templates and workflow management"],
    keyFeatures: ["Brand voice controls", "Marketing templates", "Campaign & document tools", "Marketing integrations", "Team workspaces"],
    advantages: ["Strong brand-consistency focus", "Broad template library", "Enterprise features and support", "Integration ecosystem"],
    limitations: ["Pricier than some alternatives", "May be overkill for simple drafting", "Can be complex for solo users"],
    integrations: ["Surfer SEO", "Grammarly", "HubSpot", "Google Docs", "Webhooks"],
    alternatives: [
      { text: "Copy.ai", href: "/software/copy-ai" },
      { text: "See all software", href: "/software" },
    ],
    verdict: "A solid choice for marketing teams prioritizing brand consistency and workflow, though the pricing may be more than a solo creator needs for straightforward drafting.",
    affiliated: false,
    affiliateUrl: null,
    officialUrl: "https://www.jasper.ai",
    date: "2025-03-12",
    updated: "2025-05-01",
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    tagline: "AI-powered platform for go-to-market copy and workflow automation.",
    description:
      "Copy.ai is an AI copywriting and workflow platform aimed at go-to-market teams. Notes below reflect public information, not first-party testing.",
    category: "ai-writing",
    pricing: "Free tier; paid plans as publicly listed",
    pricingDetail: "Copy.ai offers a free plan and several paid tiers. Verify current pricing on the official site.",
    logo: "C",
    overview: [
      { type: "lead", text: "Copy.ai has evolved from a copywriting tool into a broader GTM platform, with copy generation plus workflow automation." },
      { type: "list", title: "Reported capabilities:", items: ["Copy generation across many content types.", "Workflow automation to move copy into other tools.", "Templates for ads, emails, social and more.", "Brand voice and memory features."] },
      { type: "info", text: "These reflect Copy.ai's public product descriptions. We have not independently tested the tool as part of this review." },
    ],
    idealFor: ["Marketing and sales teams", "Users who want workflow automation", "Teams that want to start with a free plan"],
    keyFeatures: ["Copy templates", "Workflow automation", "GTM focus", "Free tier", "Brand voice"],
    advantages: ["Generous free tier", "Automation beyond just writing", "Good for GTM workflows"],
    limitations: ["Output quality varies by use case", "Workflow features may be a lot for pure copywriting", "Pricing can scale with usage"],
    integrations: ["Zapier", "HubSpot", "Google Sheets", "Webhooks"],
    alternatives: [
      { text: "Jasper", href: "/software/jasper" },
      { text: "See all software", href: "/software" },
    ],
    verdict: "A strong option if you want copy plus workflow automation and a free way to get started — especially for GTM teams.",
    affiliated: false,
    affiliateUrl: null,
    officialUrl: "https://www.copy.ai",
    date: "2025-03-15",
    updated: "2025-05-01",
  },
  {
    slug: "surfer-seo",
    name: "Surfer SEO",
    tagline: "Content optimization tool that guides on-page SEO against live SERP data.",
    description:
      "Surfer SEO is a content optimization and SEO platform. Notes below reflect public information, not first-party testing.",
    category: "seo",
    pricing: "Paid plans starting as publicly listed",
    pricingDetail: "Surfer SEO sells subscription plans. Verify current pricing on the official site.",
    logo: "S",
    overview: [
      { type: "lead", text: "Surfer SEO helps writers optimize content against live search results — with guidance on terms, structure and on-page factors." },
      { type: "list", title: "Reported capabilities:", items: ["Content editor with real-time optimization score.", "SERP-based recommendations for terms and structure.", "Keyword research and content planning tools.", "Audit tools for existing pages.", "Integrations with writers and publishing workflows."] },
      { type: "info", text: "These reflect Surfer SEO's public product descriptions. We have not independently tested the tool as part of this review." },
    ],
    idealFor: ["Content teams doing on-page SEO optimization", "Writers who want real-time guidance", "SEO-focused agencies and marketers"],
    keyFeatures: ["Content editor", "SERP analysis", "Keyword research", "Content audit", "Integrations"],
    advantages: ["Data-driven guidance", "Integrates into writing workflows", "Useful for content teams"],
    limitations: ["Subscription cost", "May not replace experienced SEO judgment", "Recommendations need human review"],
    integrations: ["Google Docs", "WordPress", "Notion", "Semrush"],
    alternatives: [{ text: "See all software", href: "/software" }],
    verdict: "A practical choice for teams that want structured, SERP-aware optimization guidance built into the writing process.",
    affiliated: false,
    affiliateUrl: null,
    officialUrl: "https://surferseo.com",
    date: "2025-03-20",
    updated: "2025-05-01",
  },
];
export function getSoftware(slug: string): Software | undefined {
  return SOFTWARE.find((s) => s.slug === slug);
}

export function getSoftwareByCategory(category: string): Software[] {
  return SOFTWARE.filter((s) => s.category === category);
}
