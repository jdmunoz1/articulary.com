/* ---------------------------------------------------------------------------
 * CENTRALIZED AFFILIATE CONFIGURATION
 * ---------------------------------------------------------------------------
 * Single source of truth for all affiliate relationships. Never hard-code
 * affiliate URLs inside components — always resolve through this module so
 * links can be updated, paused or disclosed centrally.
 *
 * A relationship is only rendered when `active: true` AND a valid `url`
 * exists. Everything here starts inactive until a real agreement is in place.
 * ------------------------------------------------------------------------- */
export interface AffiliateLink {
  /** identifier matching a software slug */
  platform: string;
  /** network or brand program name */
  program: string;
  /** human description of the relationship */
  note?: string;
  /** the affiliate destination URL; null until a live agreement exists */
  url: string | null;
  /** whether we have a live agreement */
  active: boolean;
  /** per-program disclosure text override */
  disclosure?: string;
}

/** Placeholder — replace with real program IDs once partnerships are live. */
const AFFILIATE_LINKS: AffiliateLink[] = [
  {
    platform: "jasper",
    program: "Jasper Affiliate Program",
    note: "AI writing platform referral",
    url: null,
    active: false,
  },
  {
    platform: "surfer",
    program: "Surfer Affiliate Program",
    note: "Content optimization referral",
    url: null,
    active: false,
  },
  {
    platform: "ahrefs",
    program: "Ahrefs Affiliate Program",
    note: "SEO tool referral",
    url: null,
    active: false,
  },
  {
    platform: "semrush",
    program: "Semrush Affiliate Program",
    note: "SEO suite referral",
    url: null,
    active: false,
  },
  {
    platform: "copy-ai",
    program: "Copy.ai Affiliate Program",
    note: "AI copywriting referral",
    url: null,
    active: false,
  },
  {
    platform: "grammarly",
    program: "Grammarly Affiliate Program",
    note: "Writing assistant referral",
    url: null,
    active: false,
  },
];

export function getAffiliateUrl(platform: string): string | null {
  const link = AFFILIATE_LINKS.find((l) => l.platform === platform);
  return link && link.active && link.url ? link.url : null;
}

export function isAffiliated(platform: string): boolean {
  const link = AFFILIATE_LINKS.find((l) => l.platform === platform);
  return Boolean(link && link.active);
}

/** Global affiliate disclosure shown on pages that carry affiliate links. */
export const AFFILIATE_DISCLOSURE =
  "Some links on this page are affiliate links. If you buy through them we may earn a commission at no extra cost to you. This never affects our editorial independence or the recommendations we make.";

/** Per-program disclosure map. */
export function getDisclosure(platform: string): string {
  const link = AFFILIATE_LINKS.find((l) => l.platform === platform);
  return link?.disclosure ?? AFFILIATE_DISCLOSURE;
}
