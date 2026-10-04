import { ToolDef } from "@/lib/types";

export const TOOLS: ToolDef[] = [
  {
    slug: "article-idea-generator",
    name: "Article Idea Generator",
    shortName: "Article Ideas",
    icon: "💡",
    tagline: "Generate relevant, searchable content ideas from a single topic or keyword seed.",
    description:
      "Turn a broad topic into a focused set of content ideas mapped to search intent — so every idea has a clear purpose before you write a word.",
    inputLabel: "What is your topic or keyword?",
    inputPlaceholder: "e.g. AI content marketing",
    inputHint: "A niche, product, or keyword. The more specific, the better.",
    buttonLabel: "Generate ideas",
    outputLabel: "Article ideas",
    howItWorks: [
      "Enter your topic or keyword.",
      "Choose how many ideas you want and the intent mix.",
      "We generate ideas mapped to informational, commercial and navigational intent — plus angle suggestions.",
      "Copy the results directly into your editorial calendar.",
    ],
    useCases: [
      "Brainstorming content for a specific keyword cluster",
      "Filling a topic map or editorial calendar",
      "Coming up with pillar and supporting topics for a topic cluster",
    ],
    faq: [
      { q: "Is the Article Idea Generator free?", a: "Yes, all of our tools are free to use. You can generate as many idea sets as you like and copy the results." },
      { q: "How does it map ideas to search intent?", a: "We label each idea with the search intent it targets (informational, commercial, navigational or mixed)." },
      { q: "Does Articulary use AI for tool output?", a: "These generators use a deterministic, template-driven engine so they work without an API key. An optional AI passthrough point is marked in the UI." },
    ],
    relatedTools: [
      { text: "Blog Title Generator", href: "/tools/blog-title-generator" },
      { text: "Blog Outline Generator", href: "/tools/blog-outline-generator" },
      { text: "Keyword Intent Classifier", href: "/tools/keyword-intent-classifier" },
    ],
    relatedGuides: [
      { text: "How to Build a Content Plan", href: "/content-marketing/content-plan" },
      { text: "Topic Clusters: The SEO Strategy That Works", href: "/seo/topic-clusters" },
      { text: "How to Do Keyword Research", href: "/seo/keyword-research" },
    ],
    software: [
      { text: "Ahrefs", href: "/software/ahrefs" },
      { text: "Semrush", href: "/software/semrush" },
      { text: "Jasper", href: "/software/jasper" },
    ],
    aiPowered: false,
  },
];
