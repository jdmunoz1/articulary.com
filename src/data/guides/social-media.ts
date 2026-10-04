import { GuideArticle } from "@/lib/types";

export const socialMediaGuides: GuideArticle[] = [
  {
    slug: "social-media-content-strategy",
    title: "Social Media Content: A Strategy That Doesn't Burn Out",
    description:
      "How to build a sustainable social content strategy — repurposing what you have, creating for the right platforms, and measuring what matters.",
    cluster: "social-media",
    date: "2025-04-08",
    readTime: "9 min read",
    tier: 1,
    featured: true,
    priority: 75,
    related: [
      { text: "Social post generator", href: "/tools/social-post-generator" },
      { text: "Content marketing strategy", href: "/guides/content-marketing-strategy" },
    ],
    content: [
      { type: "lead", text: "Posting daily is a recipe for burnout unless you have a system. The most sustainable social strategy is built on repurposing your best content for each platform." },
      { type: "h2", text: "Repurpose, don't reinvent" },
      { type: "p", text: "Your blog posts, guides and insights are raw material. Turn a strong article into a thread, a short video, a visual and a quote — each tailored to the platform's norms." },
      { type: "h2", text: "Match the platform" },
      { type: "list", title: "Each channel has its own rhythm:", items: ["LinkedIn: professional insight, longer-form text, no-fluff value.", "X: sharp observations, threads, timely takes.", "Instagram: visuals, short hooks, stories.", "YouTube: searchable, long-form, how-to."] },
      { type: "h2", text: "Hook in the first line" },
      { type: "p", text: "On short-attention platforms, the first sentence decides whether anyone reads the rest. Open with the most interesting, specific thing you have to say — lead with the value, not a vague intro." },
      { type: "cta", heading: "Start from your content", text: "Turn any article into ready-to-post social copy.", links: [{ text: "Social post generator →", href: "/tools/social-post-generator" }] },
      { type: "h2", text: "Measure meaningfully" },
      { type: "p", text: "Don't chase like counts alone. Track the metrics that map to your goals: engagement rate, clicks to your site, followers who fit your audience, and how content drives traffic or subscribers." },
      { type: "h2", text: "Stay consistent, stay human" },
      { type: "p", text: "Consistency matters, but so does relatability. A tolerant cadence and a genuine voice build more trust than perfect, inauthentic volume." },
    ],
  },
  {
    slug: "social-posts-engagement",
    title: "How to Write Social Posts People Actually Engage With",
    description:
      "The structure of a good social post — hook, insight, CTA — with examples you can adapt to your own content.",
    cluster: "social-media",
    date: "2025-05-12",
    readTime: "6 min read",
    tier: 2,
    priority: 45,
    related: [{ text: "Social media content strategy", href: "/guides/social-media-content-strategy" }, { text: "Social post generator", href: "/tools/social-post-generator" }],
    content: [
      { type: "h2", text: "The one-sentence structure" },
      { type: "list", title: "Most good posts follow a pattern:", items: ["Hook: one line that earns attention.", "Insight: the valuable idea or observation.", "Proof: a concrete example or detail.", "CTA: what you want the reader to do."] },
      { type: "p", text: "The hook is the hardest part. Write it last, when you know exactly what the post delivers — then front-load the most specific, surprising detail." },
      { type: "tip", text: "Use our social post generator to draft hooks, bodies and CTAs, then rewrite them in your own voice before posting." },
    ],
  },
];
