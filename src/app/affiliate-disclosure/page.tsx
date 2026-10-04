import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Articulary's policy on affiliate links, advertising and how monetization never affects our content.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Affiliate Disclosure" }]} />
      <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Affiliate Disclosure</h1>

      <div className="mt-8 space-y-6 leading-relaxed text-[var(--ink-soft)]">
        <p>
          Articulary keeps its content free to read. We are transparent about how we may earn from this site.
        </p>
        <Section title="Affiliate links">
          <p>
            Some links on our site — for example, to software we discuss — may be affiliate links. If you buy
            through one of those links, we may earn a commission at no extra cost to you. Affiliate links are
            always disclosed and are never required for you to use or benefit from our content.
          </p>
        </Section>
        <Section title="Current status">
          <p>
            As of the writing and review of this page, <strong className="text-[var(--ink)]">no affiliate
            relationships are active</strong> on Articulary. We will update this page the moment that changes, and
            we will always label any affiliate links the moment they exist.
          </p>
        </Section>
        <Section title="What never changes">
          <p>
            Monetization never dictates what we publish, how we rate software, or which tools we recommend. We do
            not accept payment for rankings, reviews or placement. If we recommend a product, it&apos;s because we
            believe it genuinely deserves the mention.
          </p>
        </Section>
        <Section title="Advertising">
          <p>
            If we ever display advertising, we will not show empty ad boxes and we will clearly separate ads from
            editorial content.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold text-[var(--ink)]">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
