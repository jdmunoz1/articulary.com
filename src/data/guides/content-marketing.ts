import { GuideArticle } from "@/lib/types";

export const contentMarketingGuides: GuideArticle[] = [
  {
    slug: "content-marketing-strategy",
    title: "Content Marketing Strategy: The Complete Guide",
    description:
      "How to build a content marketing strategy that drives real business results — defining goals, audience, content pillars, distribution and measurement.",
    cluster: "content-marketing",
    date: "2025-03-18",
    updated: "2025-05-06",
    readTime: "12 min read",
    tier: 1,
    featured: true,
    priority: 90,
    related: [
      { text: "Build a content calendar", href: "/guides/content-calendar-guide" },
      { text: "Content SEO guide", href: "/guides/content-seo-guide" },
      { text: "Generate article ideas", href: "/tools/article-idea-generator" },
    ],
    content: [
      { type: "lead", text: "A content marketing strategy answers one question: how does content move your business forward? This guide walks through the decisions that turn content from a chore into a channel." },
      { type: "h2", text: "Start with goals" },
      { type: "p", text: "Every strategy needs a measurable goal — more organic traffic, more email subscribers, more qualified leads. Write it down. Everything else follows." },
      { type: "list", title: "Good goals look like:", items: ["Increase organic sessions by 30% in 6 months.", "Grow email list to 5,000 subscribers.", "Generate 50 qualified leads/month from gated content.", "Rank for 40 high-intent keywords in niche."] },
      { type: "h2", text: "Know your audience" },
      { type: "p", text: "You can't create resonant content for everyone. Define one or two primary audiences, their questions and pain points, and the stages of their journey you'll serve. Content for a beginner and content for a buyer look completely different." },
      { type: "h2", text: "Pick your content pillars" },
      { type: "p", text: "Pillars are the big themes you own — typically three to five. They become your topic hubs, and each pillar supports a range of related articles. Focus beats sprinkling thin content everywhere." },
      { type: "cta", heading: "Map your pillars", text: "Start a hub with pillar guides, supporting articles and tools.", links: [{ text: "Explore our topic hubs →", href: "/guides" }] },
      { type: "h2", text: "Create a content calendar" },
      { type: "p", text: "A calendar turns strategy into execution. Plan what you'll publish, where, and why. Include time for revision and promotion — not just writing." },
      { type: "h2", text: "Distribution matters" },
      { type: "p", text: "Writing great content is only half the job. Share it on the channels where your audience lives, include it in your newsletter, and find communities where it's genuinely useful (not spam)." },
      { type: "h2", text: "Measure and iterate" },
      { type: "table", title: "Performance dashboard", headers: ["Metric", "Source", "Review cadence"], rows: [["Organic traffic", "Google Search Console", "Monthly"], ["Engagement time", "Analytics", "Monthly"], ["Email signups", "Analytics / ESP", "Monthly"], ["Leads & conversions", "CRM / Analytics", "Quarterly"]] },
      { type: "p", text: "Review what's working and double down. Every quarter, evaluate your pillars and prune what doesn't serve the strategy." },
    ],
    faq: [
      { q: "How much content do I need?", a: "Better to publish a little, consistently and with clear intent, than a lot sporadically. Quality and coherence beat volume." },
      { q: "How long until content marketing shows results?", a: "Usually 3–6 months for early traction, longer for compounding organic growth. Consistency matters more than any single post." },
    ],
  },
  {
    slug: "content-calendar-guide",
    title: "How to Build a Content Calendar That Doesn't Fall Apart",
    description:
      "A practical system for planning and executing a content calendar — including the promotion and review time most calendars forget.",
    cluster: "content-marketing",
    date: "2025-04-25",
    readTime: "7 min read",
    tier: 2,
    priority: 60,
    related: [{ text: "Content marketing strategy", href: "/guides/content-marketing-strategy" }, { text: "Newsletter ideas", href: "/tools/newsletter-idea-generator" }],
    content: [
      { type: "h2", text: "Plan in three horizons" },
      { type: "list", title: "Avoid the trap of planning only week-to-week:", items: ["Quarterly: themes, pillars and big pushes.", "Monthly: which pieces actually get made.", "Weekly: the execution slot where work happens."] },
      { type: "h2", text: "Include non-publishing work" },
      { type: "p", text: "A calendar that only tracks publish dates breaks fast. Block time for promotion, visuals, internal linking and review of existing content." },
      { type: "tip", text: "Try our content refresh assistant to schedule recurring improvement work on your best pages." },
    ],
  },
];
