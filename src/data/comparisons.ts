import { Comparison } from "@/lib/types";

export const COMPARISONS: Comparison[] = [
  {
    slug: "jasper-vs-copy-ai",
    title: "Jasper vs Copy.ai: Which AI Writing Tool Fits You?",
    description:
      "A buyer's comparison of Jasper and Copy.ai — positioning, pricing, ideal users and honest trade-offs. Editorial based on public information.",
    a: "jasper",
    b: "copy-ai",
    bestForA: ["Marketing teams needing brand-consistent content at scale", "Teams that want structured workflows and enterprise support"],
    bestForB: ["GTM teams wanting workflow automation", "Solopreneurs who want a free way to start"],
    verdict:
      "Choose Jasper if brand consistency and a polished enterprise platform matter most. Choose Copy.ai if you want workflow automation and a free tier to validate first.",
    disclaimer:
      "This comparison is editorial, based on publicly available product information. Neither tool has been tested by Articulary, and no affiliate relationship is active.",
    sections: [
      { heading: "Positioning", a: { text: "Enterprise-friendly marketing platform focused on brand voice and team workflows." }, b: { text: "GTM platform with copy generation plus workflow automation." }, summary: "Different emphases: brand campaigns vs go-to-market pipelines." },
      { heading: "Pricing model", a: { text: "Paid tiers (creator, pro, business) as publicly listed; higher tiers for teams." }, b: { text: "Free tier plus paid plans; cost can scale with usage." }, summary: "Copy.ai offers a free entry point; Jasper leans paid from the start." },
      { heading: "Best for", a: { text: "Marketing teams producing on-brand copy with review workflows." }, b: { text: "GTM and sales teams wanting copy plus automation." }, summary: "Match the decision to your team's primary workflow." },
      { heading: "Who might skip it", a: { text: "Solo creators needing simple, cheap drafting." }, b: { text: "Large teams wanting enterprise-grade brand governance." }, summary: "Neither is universally best; it depends on scale and needs." },
    ],
    alts: [{ text: "Browse all software", href: "/software" }],
    date: "2025-04-02",
    updated: "2025-05-05",
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}
