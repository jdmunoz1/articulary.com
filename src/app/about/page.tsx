import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Articulary",
  description: "What Articulary is, what we build and the editorial principles we hold ourselves to.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "About" }]} />
      <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">About Articulary</h1>

      <div className="mt-6 space-y-6 leading-relaxed text-[var(--ink-soft)]">
        <p>
          Articulary helps anyone who creates content — writers, marketers, founders and solopreneurs — do it
          better. We combine <strong className="text-[var(--ink)]">free AI tools</strong>,{" "}
          <strong className="text-[var(--ink)]">practical guides</strong> and{" "}
          <strong className="text-[var(--ink)]">honest software discovery</strong> into one place.
        </p>
        <p>
          The content-churning AI era has flooded the web with generic pages. We believe the answer isn&apos;t more
          volume — it&apos;s better process: knowing intent, briefing properly, writing with a real point of view,
          and optimizing honestly.
        </p>

        <h2 className="pt-2 text-2xl font-bold text-[var(--ink)]">What we build</h2>
        <ul className="space-y-3">
          <li><strong className="text-[var(--ink)]">Free content tools.</strong> Fast, no-signup generators built for real workflows. Output is yours to use.</li>
          <li><strong className="text-[var(--ink)]">Practical guides.</strong> Editorial content that earns its place with usefulness, not fluff.</li>
          <li><strong className="text-[var(--ink)]">Software discovery.</strong> Structured, honest overviews and comparisons of the tools in your stack.</li>
        </ul>

        <h2 className="pt-2 text-2xl font-bold text-[var(--ink)]">Our editorial principles</h2>
        <ul className="space-y-3">
          <li><strong className="text-[var(--ink)]">Honest by default.</strong> We don&apos;t publish fake reviews, invented stats or fabricated awards.</li>
          <li><strong className="text-[var(--ink)]">Clear sourcing.</strong> We separate verified facts, editorial opinion and vendor claims, and only cite reliable sources.</li>
          <li><strong className="text-[var(--ink)]">Freshness over faking.</strong> We update pages because they&apos;ve been genuinely improved — never just to look new.</li>
          <li><strong className="text-[var(--ink)]">Disclosed monetization.</strong> Affiliate relationships, when they exist, are always disclosed and never change our verdict.</li>
        </ul>

        <p>
          Articulary was founded in 2025 with a focus on
          sustainable growth through genuine usefulness. Questions or feedback?{" "}
          <a href="/contact" className="text-[var(--brand-ink)] hover:underline">Get in touch</a>.
        </p>
      </div>
    </div>
  );
}
