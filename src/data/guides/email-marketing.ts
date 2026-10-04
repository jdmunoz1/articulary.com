import { GuideArticle } from "@/lib/types";

export const emailMarketingGuides: GuideArticle[] = [
  {
    slug: "email-marketing-guide",
    title: "Email Marketing: The Practical Guide for Content Teams",
    description:
      "How to build an email list, write emails people open and read, and turn your newsletter into a growth channel.",
    cluster: "email-marketing",
    date: "2025-03-30",
    updated: "2025-05-18",
    readTime: "11 min read",
    tier: 1,
    featured: true,
    priority: 80,
    related: [
      { text: "Newsletter idea generator", href: "/tools/newsletter-idea-generator" },
      { text: "Content marketing strategy", href: "/guides/content-marketing-strategy" },
      { text: "Start a blog that matters", href: "/guides/start-blog-that-matters" },
    ],
    content: [
      { type: "lead", text: "Email is one of the only channels you own. It's stable, measurable, and readers give you their attention by choice. This guide covers the essentials of building and growing an email list." },
      { type: "h2", text: "Give people a reason to subscribe" },
      { type: "p", text: "The strongest lead magnets solve a real problem: a template, a checklist, a short course, or a genuinely useful weekly digest. The promise should match the email you actually send." },
      { type: "h2", text: "Grow your list the honest way" },
      { type: "list", title: "Proven, spam-safe tactics:", items: ["Inline signup forms at natural points in your content.", "A compelling incentive that matches your niche.", "Calls to action in your best-performing posts.", "Content sharing on channels where your audience lives."] },
      { type: "h2", text: "Write emails people open" },
      { type: "p", text: "Subject lines earn the open; the value earns the click and the future opens. Be specific and honest, avoid clickbait, and always deliver what the subject line promises." },
      { type: "cta", heading: "Beat the blank page", text: "Generate newsletter angles and subject lines instantly.", links: [{ text: "Newsletter idea generator →", href: "/tools/newsletter-idea-generator" }] },
      { type: "h2", text: "Segment and personalize" },
      { type: "p", text: "As your list grows, segment readers by interest and behavior so the right people get the right emails. Relevance drives both engagement and deliverability." },
      { type: "h2", text: "Measure what matters" },
      { type: "table", title: "Key email metrics", headers: ["Metric", "What it reveals", "Good rule of thumb"], rows: [["Open rate", "Subject line + deliverability", "20–40%"], ["Click rate", "Relevance + content quality", "2–5%"], ["Unsubscribe", "Whether expectations match reality", "Keep it low"], ["List growth", "Whether you're adding value", "Net positive monthly"]] },
      { type: "p", text: "Where open rates are hard to compare fairly, focus on the trends in your own data over time." },
      { type: "h2", text: "Keep deliverability healthy" },
      { type: "p", text: "Use a consistent sending identity, keep complaints low, and remove inactive subscribers periodically. A smaller, engaged list beats a huge list nobody opens." },
    ],
  },
  {
    slug: "email-subject-lines",
    title: "Email Subject Lines: How to Get More Opens",
    description:
      "Frameworks for subject lines that earn opens without resorting to clickbait — plus what to test and track.",
    cluster: "email-marketing",
    date: "2025-05-04",
    readTime: "6 min read",
    tier: 2,
    priority: 50,
    related: [{ text: "Email marketing guide", href: "/guides/email-marketing-guide" }, { text: "Newsletter idea generator", href: "/tools/newsletter-idea-generator" }],
    content: [
      { type: "h2", text: "The job of a subject line" },
      { type: "p", text: "Your subject line earns the open, but the email earns the relationship. The best ones are specific, honest and written for the reader, not the marketer." },
      { type: "list", title: "Patterns that tend to work:", items: ["The specific number or fact.", "A clear benefit to the reader.", "Curiosity that the email actually satisfies.", "A first-person, personal voice."] },
      { type: "h2", text: "Test and track" },
      { type: "p", text: "A/B test subject lines and watch your own open-rate trends. What works for one audience won't necessarily work for yours — so measure, learn and iterate." },
    ],
  },
];
