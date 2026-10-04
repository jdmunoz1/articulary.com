/* Central mapping from topic hubs to the tools and software categories that
 * best support them. Kept out of the hub components so routes stay thin. */

export const HUB_TOOLS: Record<string, string[]> = {
  "ai-content": ["article-idea-generator", "content-brief-builder", "blog-outline-generator", "content-angle-generator"],
  seo: ["keyword-intent-classifier", "meta-title-generator", "meta-description-generator", "faq-generator", "content-refresh-assistant"],
  "content-marketing": ["article-idea-generator", "content-brief-builder", "newsletter-idea-generator"],
  blogging: ["blog-title-generator", "blog-outline-generator", "article-idea-generator", "content-brief-builder"],
  "email-marketing": ["newsletter-idea-generator", "social-post-generator"],
  "social-media": ["social-post-generator", "newsletter-idea-generator"],
  "ai-tools": ["content-brief-builder", "content-refresh-assistant", "keyword-intent-classifier"],
};
