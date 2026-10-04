import { ClusterDef } from "@/lib/types";

export const CLUSTERS: ClusterDef[] = [
  {
    key: "ai-content",
    path: "/ai-content",
    label: "AI Content",
    navLabel: "AI Content",
    blurb:
      "Practical guidance on using AI to research, write, edit and fact-check content — with a human in the loop.",
    icon: "✨",
    topics: ["AI writing", "Prompting", "AI research", "Content workflows", "AI editing", "AI fact checking", "Human + AI"],
  },
  {
    key: "seo",
    path: "/seo",
    label: "SEO",
    navLabel: "SEO",
    blurb:
      "Search-engine optimization for content teams: keyword research, search intent, on-page SEO, topic clusters and internal linking.",
    icon: "📈",
    topics: ["Keyword research", "Search intent", "On-page SEO", "Internal linking", "Content optimization", "Topic clusters"],
  },
  {
    key: "content-marketing",
    path: "/content-marketing",
    label: "Content Marketing",
    navLabel: "Content Marketing",
    blurb:
      "Strategy, editorial calendars, content funnels, repurposing and distribution — the systems that turn content into results.",
    icon: "🧭",
    topics: ["Content strategy", "Editorial calendars", "Lead generation", "Content funnels", "Repurposing", "Distribution"],
  },
  {
    key: "blogging",
    path: "/blogging",
    label: "Blogging",
    navLabel: "Blogging",
    blurb:
      "How to start, write, edit and grow a blog that builds an audience and earns revenue.",
    icon: "✍️",
    topics: ["Starting a blog", "Blog strategy", "Writing", "Editing", "Monetization", "Traffic growth"],
  },
  {
    key: "email-marketing",
    path: "/email-marketing",
    label: "Email Marketing",
    navLabel: "Email Marketing",
    blurb:
      "Newsletters, subject lines, email copy, automation and email funnels for content businesses.",
    icon: "📬",
    topics: ["Newsletters", "Subject lines", "Email copy", "Automation", "Lead magnets", "Email funnels"],
  },
  {
    key: "social-media",
    path: "/social-media",
    label: "Social Media",
    navLabel: "Social Media",
    blurb:
      "Plan, repurpose and distribute content across social channels — captions, short-form and consistent publishing.",
    icon: "📣",
    topics: ["Content planning", "Repurposing", "Captions", "Short-form content", "Distribution"],
  },
  {
    key: "ai-tools",
    path: "/ai-tools",
    label: "AI Tools",
    navLabel: "AI Tools",
    blurb:
      "Software discovery for AI writing, SEO, marketing automation, research and editing tools.",
    icon: "🛠️",
    topics: ["AI writing tools", "SEO software", "Marketing automation", "Research tools", "Editing software", "Productivity"],
  },
];

export function getCluster(key: string): ClusterDef | undefined {
  return CLUSTERS.find((c) => c.key === key);
}

export const GUIDES_PATH = "/guides";
