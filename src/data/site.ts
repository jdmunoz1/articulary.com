/* ---------------------------------------------------------------------------
 * Global site configuration — single source of truth for Articulary.
 * ------------------------------------------------------------------------- */
export const SITE_CONFIG = {
  name: "Articulary",
  domain: "articulary.com",
  url: "https://articulary.com",
  tagline: "Create better content. Publish smarter. Grow faster.",
  description:
    "Free AI tools, practical guides and software discovery to help you research, create, optimize and grow content that performs.",
  email: "hello@articulary.com",
  founded: 2025,
  locale: "en_US",
  twitter: "@articulary",
};

/* ---------------------------------------------------------------------------
 * Newsletter
 * ------------------------------------------------------------------------- */
export const NEWSLETTER_CONFIG = {
  enabled: process.env.NEXT_PUBLIC_NEWSLETTER_ENABLED === "true",
  name: "The Articulary Brief",
  description:
    "One useful content idea every week. No spam, unsubscribe anytime.",
};

/* ---------------------------------------------------------------------------
 * Analytics / tracking toggles
 * ------------------------------------------------------------------------- */
export const ANALYTICS = {
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
};
