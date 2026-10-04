/* ---------------------------------------------------------------------------
 * Main navigation
 * ------------------------------------------------------------------------- */
export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "Guides",
    href: "/guides",
    children: [
      { label: "Free AI Tools", href: "/tools", description: "Article ideas, titles, outlines, meta and more" },
      { label: "AI Content", href: "/ai-content", description: "AI writing, prompting, workflows and editing" },
      { label: "SEO", href: "/seo", description: "Keyword research, on-page SEO, topic clusters" },
      { label: "Content Marketing", href: "/content-marketing", description: "Strategy, calendars, funnels and distribution" },
      { label: "Blogging", href: "/blogging", description: "Start and grow a blog that performs" },
      { label: "Email Marketing", href: "/email-marketing", description: "Newsletters, subject lines and automation" },
      { label: "Social Media", href: "/social-media", description: "Planning, repurposing and short-form content" },
    ],
  },
  {
    label: "AI Tools",
    href: "/ai-tools",
    children: [
      { label: "AI Writing", href: "/software?category=ai-writing", description: "AI writers and assistants" },
      { label: "SEO Software", href: "/software?category=seo", description: "Rank tracking and optimization" },
      { label: "Keyword Research", href: "/software?category=keyword-research", description: "Find content opportunities" },
      { label: "Content Optimization", href: "/software?category=content-optimization", description: "Improve what you publish" },
    ],
  },
  {
    label: "SEO",
    href: "/seo",
    children: [
      { label: "Keyword Research", href: "/seo#keyword-research", description: "Find the right terms" },
      { label: "On-Page SEO", href: "/seo#on-page", description: "Optimize titles, structure, content" },
      { label: "Internal Linking", href: "/seo#internal-linking", description: "Build topic authority" },
      { label: "Topic Clusters", href: "/seo#topic-clusters", description: "Organize content that ranks" },
    ],
  },
  {
    label: "Software",
    href: "/software",
    children: [
      { label: "AI Writing", href: "/software?category=ai-writing", description: "AI content and writing tools" },
      { label: "SEO", href: "/software?category=seo", description: "SEO platforms and tools" },
      { label: "Email Marketing", href: "/software?category=email-marketing", description: "Newsletter and automation" },
      { label: "Content Optimization", href: "/software?category=content-optimization", description: "On-page and brief tools" },
      { label: "Comparisons", href: "/compare", description: "Tool A vs Tool B" },
    ],
  },
  {
    label: "Free Tools",
    href: "/tools",
    children: [
      { label: "Article Idea Generator", href: "/tools/article-idea-generator" },
      { label: "Blog Title Generator", href: "/tools/blog-title-generator" },
      { label: "Content Brief Builder", href: "/tools/content-brief-builder" },
      { label: "Blog Outline Generator", href: "/tools/blog-outline-generator" },
      { label: "Meta Title Generator", href: "/tools/meta-title-generator" },
      { label: "Meta Description Generator", href: "/tools/meta-description-generator" },
      { label: "View all tools", href: "/tools" },
    ],
  },
];
