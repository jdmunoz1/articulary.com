import { SoftwareCategory } from "@/lib/types";

export const SOFTWARE_CATEGORIES: SoftwareCategory[] = [
  {
    key: "ai-writing",
    label: "AI Writing Tools",
    description: "AI writers, assistants and copilots for drafting and editing content.",
    icon: "✍️",
  },
  {
    key: "seo",
    label: "SEO Software",
    description: "All-in-one SEO and site-position platforms.",
    icon: "📈",
  },
  {
    key: "keyword-research",
    label: "Keyword Research",
    description: "Find and prioritize the keywords worth targeting.",
    icon: "🔍",
  },
  {
    key: "content-optimization",
    label: "Content Optimization",
    description: "Improve briefs, on-page SEO and existing content.",
    icon: "🎯",
  },
  {
    key: "email-marketing",
    label: "Email Marketing",
    description: "Run newsletters and automated email campaigns.",
    icon: "📬",
  },
  {
    key: "social-media",
    label: "Social Media Management",
    description: "Schedule, plan and grow social content.",
    icon: "📣",
  },
  {
    key: "automation",
    label: "Automation",
    description: "Connect tools and automate repetitive workflows.",
    icon: "⚙️",
  },
  {
    key: "productivity",
    label: "Productivity",
    description: "Notes, docs and tools to keep projects moving.",
    icon: "⚡",
  },
  {
    key: "analytics",
    label: "Analytics",
    description: "Understand traffic and performance.",
    icon: "📊",
  },
  {
    key: "research",
    label: "Research & AI Assistants",
    description: "AI assistants for research and analysis.",
    icon: "🧠",
  },
];

export function getCategory(key: string): SoftwareCategory | undefined {
  return SOFTWARE_CATEGORIES.find((c) => c.key === key);
}
