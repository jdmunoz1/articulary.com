import { ToolDef } from "@/lib/types";

export const TOOLS: ToolDef[] = [
  {
    slug: "blog-title-generator",
    name: "Blog Title Generator",
    shortName: "Titles",
    icon: "🏷️",
    tagline: "Generate blog titles in multiple styles — SEO, curiosity, list, how-to and more.",
    description: "Create compelling blog titles across five proven headline styles so you can test what your audience actually clicks.",
    inputLabel: "What is your article about?",
    inputPlaceholder: "e.g. How to rank with AI content",
    inputHint: "The topic or working title of your article.",
    buttonLabel: "Generate titles",
    outputLabel: "Blog titles",
    outputVariants: ["SEO-focused", "Curiosity", "Professional", "List-style", "How-to"],
    howItWorks: [
      "Enter your topic or working title.",
      "Select the styles you want (SEO, curiosity, professional, list or how-to).",
      "We generate a batch of titles per style using proven headline frameworks.",
      "Copy your favorites and test them in A/B experiments.",
    ],
    useCases: [
      "Writing a headline that earns the click",
      "Creating title variations for A/B testing",
      "Choosing the right title style for your audience",
    ],
    faq: [
      { q: "Which title style should I use?", a: "It depends on your goals. SEO titles help rankings, curiosity titles drive clicks, and professional titles build trust. Generate multiple and combine the best of each." },
      { q: "Are these titles SEO-optimized?", a: "Yes — the SEO-focused style keeps your target phrase near the front, a pattern that helps both search engines and readers." },
    ],
    relatedTools: [
      { text: "Meta Title Generator", href: "/tools/meta-title-generator" },
      { text: "Content Angle Generator", href: "/tools/content-angle-generator" },
    ],
    relatedGuides: [
      { text: "How to Write Blog Titles People Actually Click", href: "/blogging/blog-title-optimization" },
      { text: "Meta Titles: The Complete Guide", href: "/seo/meta-titles" },
    ],
    software: [
      { text: "Jasper", href: "/software/jasper" },
      { text: "Copy.ai", href: "/software/copy-ai" },
      { text: "Ahrefs", href: "/software/ahrefs" },
    ],
    aiPowered: false,
  },
  {
    slug: "content-brief-builder",
    name: "Content Brief Builder",
    shortName: "Brief Builder",
    icon: "📋",
    tagline: "Build a complete content brief from a keyword and angle in one pass.",
    description: "A content brief aligns writers, editors and AI on one goal. This tool generates the core sections a brief needs — search intent, audience, key questions and structure.",
    inputLabel: "What keyword is the content targeting?",
    inputPlaceholder: "e.g. AI content marketing strategy",
    inputHint: "The primary keyword for the article. Optionally add an angle in the settings.",
    buttonLabel: "Generate brief",
    outputLabel: "Content brief",
    howItWorks: [
      "Enter the primary keyword.",
      "Choose the search intent (informational, commercial or how-to).",
      "We assemble a structured brief with a working title, angle, questions, sections and optimization checklist.",
      "Copy the brief into your editor or share it with a writer.",
    ],
    useCases: [
      "Briefing freelance writers with a consistent format",
      "Guiding AI tools to produce on-target drafts",
      "Keeping a content team aligned on one goal",
    ],
    faq: [
      { q: "What is a content brief?", a: "A content brief tells writers and AI tools exactly what a piece should cover, who it is for, and what it must achieve. It prevents generic, off-target content." },
      { q: "Do I need a paid tool for briefs?", a: "No. Our free Content Brief Builder gives you a solid starting brief. Many teams pair it with Surfer or Frase for NLP scoring — but the brief itself is the hard part." },
    ],
    relatedTools: [
      { text: "Blog Outline Generator", href: "/tools/blog-outline-generator" },
      { text: "Meta Description Generator", href: "/tools/meta-description-generator" },
    ],
    relatedGuides: [
      { text: "How to Write a Content Brief That Improves Your SEO", href: "/content-marketing/content-brief" },
      { text: "Topic Clusters: The SEO Strategy That Works", href: "/seo/topic-clusters" },
    ],
    software: [
      { text: "Surfer", href: "/software/surfer" },
      { text: "Frase", href: "/software/frase" },
      { text: "Copy.ai", href: "/software/copy-ai" },
    ],
    aiPowered: false,
  },
];
