import { ToolDef } from "@/lib/types";

export const TOOLS: ToolDef[] = [
  {
    slug: "content-refresh-assistant",
    name: "Content Refresh Assistant",
    shortName: "Refresh",
    icon: "🔄",
    tagline: "Know what to update in a piece of content and when.",
    description: "The Content Refresh Assistant turns a URL or topic into a prioritized review checklist, so you refresh only what needs it and keep your publish dates honest.",
    inputLabel: "Paste a URL or describe the content to refresh",
    inputPlaceholder: "https://your-site.com/blog/example",
    inputHint: "A URL, or a description of an existing page.",
    buttonLabel: "Build refresh plan",
    outputLabel: "Refresh checklist",
    howItWorks: [
      "Enter a URL or describe the existing page.",
      "We build a review checklist covering title, intro, search intent, internal links, stats and structure.",
      "Use the checklist to update only what needs changing.",
      "We never fake an updated date — only real content changes justify it.",
    ],
    useCases: [
      "Revisiting older posts that have lost traffic",
      "Bringing evergreen content up to date",
      "Running a quarterly content audit",
    ],
    faq: [
      { q: "How often should I refresh content?", a: "Aim to review high-value pages every 6-12 months, or whenever the topic shifts materially. Not every page needs refreshing." },
      { q: "Should I change the publish date when I refresh?", a: "Only if you make a material update. Changing dates just to look fresh misleads readers and search engines." },
    ],
    relatedTools: [
      { text: "Content Brief Builder", href: "/tools/content-brief-builder" },
      { text: "Internal Link Suggestion Tool", href: "/tools/internal-link-suggestion" },
    ],
    relatedGuides: [
      { text: "How to Refresh Old Content Without Losing Rankings", href: "/seo/content-refreshing" },
      { text: "Content Audits: The Complete Guide", href: "/content-marketing/content-audit" },
    ],
    software: [
      { text: "Ahrefs", href: "/software/ahrefs" },
      { text: "Surfer", href: "/software/surfer" },
    ],
    aiPowered: false,
  },
  {
    slug: "keyword-intent-classifier",
    name: "Keyword Intent Classifier",
    shortName: "Intent",
    icon: "🎯",
    tagline: "Classify a keyword by search intent in seconds.",
    description: "Search intent decides the format, angle and conversion path of your content. This tool classifies keywords as informational, commercial, navigational or transactional.",
    inputLabel: "Enter one or more keywords (one per line)",
    inputPlaceholder: "best seo tools\nhow to do keyword research",
    inputHint: "Paste a list from your spreadsheet or keyword tool.",
    buttonLabel: "Classify keywords",
    outputLabel: "Intent classification",
    howItWorks: [
      "Paste one or more keywords, one per line.",
      "We analyze each against intent signals (modifiers, format words, action verbs).",
      "Each keyword is classified and labeled with the best content angle.",
      "Copy the table into your planning sheet.",
    ],
    useCases: [
      "Planning content format per keyword",
      "Aligning content and conversion paths to intent",
      "Filtering a keyword list for different campaign types",
    ],
    faq: [
      { q: "What are the four search intent types?", a: "Informational (seek knowledge), commercial (research before buying), navigational (find a specific site) and transactional (ready to act)." },
      { q: "Why does intent matter for content?", a: "A keyword's intent tells you whether users want a guide, a comparison, a signup page or a pricing page. Matching intent is the foundation of good SEO." },
    ],
    relatedTools: [
      { text: "Article Idea Generator", href: "/tools/article-idea-generator" },
      { text: "Content Brief Builder", href: "/tools/content-brief-builder" },
    ],
    relatedGuides: [
      { text: "Search Intent: The Foundation of SEO", href: "/seo/search-intent" },
      { text: "How to Do Keyword Research", href: "/seo/keyword-research" },
    ],
    software: [
      { text: "Ahrefs", href: "/software/ahrefs" },
      { text: "Semrush", href: "/software/semrush" },
    ],
    aiPowered: false,
  },
  {
    slug: "content-angle-generator",
    name: "Content Angle Generator",
    shortName: "Angles",
    icon: "🧭",
    tagline: "Find fresh angles for a topic your competitors already cover.",
    description: "Too many articles cover the same topic in the same way. This tool generates distinct angles — beginner, expert, data-led, contrarian, checklist, case-study and more.",
    inputLabel: "What topic needs a fresh angle?",
    inputPlaceholder: "e.g. email marketing for solopreneurs",
    buttonLabel: "Generate angles",
    outputLabel: "Content angles",
    howItWorks: [
      "Enter your topic.",
      "Choose the angle styles you want to explore.",
      "We produce a distinct framing for each style, each with a working title.",
      "Pick the angle that matches an audience you can actually reach.",
    ],
    useCases: [
      "Differentiating from thin me-too content",
      "Repositioning a covered topic for a specific audience",
      "Refreshing a page with a new framing",
    ],
    faq: [
      { q: "What is a content angle?", a: "An angle is the specific framing, audience or promise you bring to a topic. The same topic can serve beginners or experts, skeptics or fans." },
      { q: "How do I choose an angle?", a: "Match the angle to who you serve and where you add genuine value. A distinctive angle for a real audience beats a generic article for everyone." },
    ],
    relatedTools: [
      { text: "Article Idea Generator", href: "/tools/article-idea-generator" },
      { text: "Blog Title Generator", href: "/tools/blog-title-generator" },
      { text: "Social Post Generator", href: "/tools/social-post-generator" },
    ],
    relatedGuides: [
      { text: "How to Find Content Ideas That Stand Out", href: "/content-marketing/content-ideas" },
      { text: "Content Repurposing: Get More From Every Post", href: "/content-marketing/repurposing" },
    ],
    software: [
      { text: "Jasper", href: "/software/jasper" },
      { text: "Copy.ai", href: "/software/copy-ai" },
      { text: "Ahrefs", href: "/software/ahrefs" },
    ],
    aiPowered: false,
  },
];
