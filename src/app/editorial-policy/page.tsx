import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Articulary sources, reviews, corrects and keeps its content honest.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Editorial Policy" }]} />
      <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Editorial Policy</h1>
      <p className="mt-3 text-[var(--ink-soft)]">Transparency about how we create, source, review and maintain our content.</p>

      <div className="mt-8 space-y-8 leading-relaxed text-[var(--ink-soft)]">
        <Section title="Sourcing & accuracy">
          <p>Where content relies on factual claims, statistics or product capabilities, we cite reliable sources and aim to reflect what they actually say. We distinguish:</p>
          <ul className="mt-3 space-y-2">
            <li><strong className="text-[var(--ink)]">Verified facts</strong> — supported by a reliable source.</li>
            <li><strong className="text-[var(--ink)]">Editorial opinion</strong> — clearly our judgment.</li>
            <li><strong className="text-[var(--ink)]">Vendor claims</strong> — what a company says about itself, labeled as such.</li>
          </ul>
        </Section>

        <Section title="Software reviews">
          <p>We do not claim to have tested software we have not personally tested. When our overviews reflect public information rather than hands-on testing, we say so explicitly. Reviews describe capabilities, ideal users and trade-offs rather than inventing performance claims.</p>
        </Section>

        <Section title="Corrections">
          <p>If we get something wrong, we fix it promptly and note the correction where it matters. To report an error, use our <a href="/contact" className="text-[var(--brand-ink)] hover:underline">contact page</a>.</p>
        </Section>

        <Section title="Freshness">
          <p>We update pages when they&apos;re genuinely improved — new information, corrected facts or materially better content. We do not change published dates merely to make content look recent.</p>
        </Section>

        <Section title="Monetization">
          <p>Any affiliate or commercial relationship is always disclosed. It never dictates what we publish or our verdicts. See our <a href="/affiliate-disclosure" className="text-[var(--brand-ink)] hover:underline">affiliate disclosure</a>.</p>
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
