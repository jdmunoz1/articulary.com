import { ToolDef } from "@/lib/types";

export const TOOLS: ToolDef[] = [
  {
    slug: "internal-link-suggestion",
    name: "Internal Link Suggestion Tool",
    shortName: "Internal Links",
    icon: "🔗",
    tagline: "Find natural internal links to connect and strengthen your content.",
    description: "Internal links spread authority and help readers navigate. This tool suggests linking opportunities between your pages based on topic overlap.",
    inputLabel: "What page are you linking from?",
    inputPlaceholder: "e.g. /seo/on-page-seo",
    inputHint: "The URL or topic of the page you want to link out from.",
    buttonLabel: "Suggest links",
    outputLabel: "Internal link suggestions",
    howItWorks: [
      "Enter the page you are linking from.",
      "Optionally add a list of your other pages.",
      "We suggest a mix of anchor-text styles and target pages based on topic relevance.",
      "Apply a sensible, natural link on your source page.",
    ],
    useCases: [
      "Adding internal links to a new article",
      "Building a topic cluster's link web",
      "Finding orphan pages that need links",
    ],
    faq: [
      { q: "How many internal links should a page have?", a: "There is no magic number. Add links where they genuinely help the reader — usually 3-8 relevant links per article is a sensible range." },
      { q: "What anchor text should I use?", a: "Use descriptive, natural anchor text that tells readers what they will find. Avoid repeating the same exact anchor over and over." },
    ],
    relatedTools: [
      { text: "Article Idea Generator", href: "/tools/article-idea-generator" },
      { text: "Content Brief Builder", href: "/tools/content-brief-builder" },
    ],
    relatedGuides: [
      { text: "Internal Linking: The Complete Guide", href: "/seo/internal-linking" },
      { text: "Topic Clusters: The SEO Strategy That Works", href: "/seo/topic-clusters" },
    ],
    software: [
      { text: "Ahrefs", href: "/software/ahrefs" },
      { text: "Semrush", href: "/software/semrush" },
    ],
    aiPowered: false,
  },
  {
    slug: "social-post-generator",
    name: "Social Post Generator",
    shortName: "Social Posts",
    icon: "📣",
    tagline: "Turn long-form content into ready-to-post social captions.",
    description: "Repurposing is how one piece of content reaches many platforms. This tool crafts platform-ready social posts with hooks, captions and CTAs.",
    inputLabel: "Paste your article intro, summary or key points",
    inputPlaceholder: "Paste a few key points or a summary of your content...",
    inputHint: "A summary of the content you want to promote.",
    buttonLabel: "Generate posts",
    outputLabel: "Social posts",
    howItWorks: [
      "Paste your key points, a summary, or a few lines from the article.",
      "Choose the platforms or post styles you want.",
      "We craft a hook, body and CTA for each platform.",
      "Copy each post to its platform.",
    ],
    useCases: [
      "Promoting new blog posts",
      "Building a social repurposing workflow",
      "Keeping a consistent posting cadence",
    ],
    faq: [
      { q: "How do I promote one article across platforms?", a: "Repurpose, don't repeat. A long-form article becomes a short-form clip, a thread, a post and a caption — each adapted to the platform." },
      { q: "Should social posts include the article link?", a: "Lead with the value of your point, then offer the link as the natural next step. Contextual links outperform link-first posts." },
    ],
    relatedTools: [
      { text: "Content Angle Generator", href: "/tools/content-angle-generator" },
      { text: "Blog Title Generator", href: "/tools/blog-title-generator" },
    ],
    relatedGuides: [
      { text: "Content Repurposing: Get More From Every Post", href: "/content-marketing/repurposing" },
      { text: "Social Media Content Planning", href: "/social-media/content-planning" },
    ],
    software: [
      { text: "Buffer", href: "/software/buffer" },
      { text: "Canva", href: "/software/canva" },
    ],
    aiPowered: false,
  },
  {
    slug: "newsletter-idea-generator",
    name: "Newsletter Idea Generator",
    shortName: "Newsletter Ideas",
    icon: "📬",
    tagline: "Generate newsletter topics and subject lines that get opened.",
    description: "A great newsletter starts with a great idea. This tool suggests newsletter topics, angles and subject lines to keep your list engaged.",
    inputLabel: "What is your newsletter about?",
    inputPlaceholder: "e.g. AI tools for creators",
    buttonLabel: "Generate ideas",
    outputLabel: "Newsletter ideas and subject lines",
    howItWorks: [
      "Enter your newsletter topic or niche.",
      "Choose the issue types you like (curated, how-to, story, opinion).",
      "We generate topics plus matching subject lines.",
      "Copy your favorites into your newsletter calendar.",
    ],
    useCases: [
      "Never staring at a blank newsletter draft",
      "Planning a month of issues in advance",
      "Improving open rates with better subject lines",
    ],
    faq: [
      { q: "How often should I send a newsletter?", a: "Consistency beats frequency. Even a reliable weekly or bi-weekly issue builds a habit — irregular sending trains subscribers to ignore you." },
      { q: "What makes a good subject line?", a: "Clear, specific and honest. Vague or clickbait subject lines hurt trust and, eventually, your deliverability." },
    ],
    relatedTools: [
      { text: "Article Idea Generator", href: "/tools/article-idea-generator" },
      { text: "Social Post Generator", href: "/tools/social-post-generator" },
    ],
    relatedGuides: [
      { text: "How to Start a Newsletter", href: "/email-marketing/newsletter-guide" },
      { text: "Email Subject Lines: The Complete Guide", href: "/email-marketing/subject-lines" },
    ],
    software: [
      { text: "ConvertKit", href: "/software/convertkit" },
      { text: "Mailchimp", href: "/software/mailchimp" },
    ],
    aiPowered: false,
  },
];
