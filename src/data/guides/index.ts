import { GuideArticle } from "@/lib/types";
import { seoGuides } from "./seo";
import { aiContentGuides } from "./ai-content";
import { contentMarketingGuides } from "./content-marketing";
import { bloggingGuides } from "./blogging";
import { emailMarketingGuides } from "./email-marketing";
import { socialMediaGuides } from "./social-media";
import { aiToolsGuides } from "./ai-tools";

export const ALL_GUIDES: GuideArticle[] = [
  ...aiContentGuides,
  ...seoGuides,
  ...contentMarketingGuides,
  ...bloggingGuides,
  ...emailMarketingGuides,
  ...socialMediaGuides,
  ...aiToolsGuides,
].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));

export const GUIDES_COUNT = ALL_GUIDES.length;

export function getGuide(slug: string): GuideArticle | undefined {
  return ALL_GUIDES.find((g) => g.slug === slug);
}

export function getGuidesByCluster(cluster: string): GuideArticle[] {
  return ALL_GUIDES.filter((g) => g.cluster === cluster).sort(
    (a, b) => (b.priority ?? 0) - (a.priority ?? 0)
  );
}

export function getFeaturedGuides(count = 3): GuideArticle[] {
  return ALL_GUIDES.filter((g) => g.featured || g.tier === 1).slice(0, count);
}
