import { ToolResult, Generator, cleanKeywords } from "./types";
import { articleIdeas, blogTitles, contentAngles } from "./gen-content";
import { contentBrief, blogOutline, metaTitles, metaDescriptions } from "./gen-brief";
import { faqGenerator, intentClassifier, contentRefresh } from "./gen-seo";
import { socialPosts, newsletterIdeas, internalLinks } from "./gen-social";

const GENERATORS: Record<string, Generator> = {
  "article-idea-generator": articleIdeas,
  "blog-title-generator": blogTitles,
  "content-brief-builder": contentBrief,
  "blog-outline-generator": blogOutline,
  "meta-title-generator": metaTitles,
  "meta-description-generator": metaDescriptions,
  "faq-generator": faqGenerator,
  "content-refresh-assistant": contentRefresh,
  "keyword-intent-classifier": intentClassifier,
  "content-angle-generator": contentAngles,
  "internal-link-suggestion": internalLinks,
  "social-post-generator": socialPosts,
  "newsletter-idea-generator": newsletterIdeas,
};

export function getGenerator(slug: string): Generator | undefined {
  return GENERATORS[slug];
}

export function generateForTool(slug: string, input: string, opts?: Record<string, unknown>): ToolResult | null {
  const gen = GENERATORS[slug];
  if (!gen) return null;
  return gen(input && input.trim() ? input : "", opts);
}

export { cleanKeywords };
