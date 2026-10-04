import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of Articulary.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Terms" }]} />
      <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Terms of Use</h1>
      <p className="mt-3 text-[var(--ink-soft)]">Last updated: May 2025</p>

      <div className="mt-8 space-y-8 leading-relaxed text-[var(--ink-soft)]">
        <Section title="Use of the site">
          <p>
            Articulary provides educational content and free tools. You may use them for personal and commercial
            purposes so long as you comply with these terms and applicable law. Content output from our free tools
            is yours to use and edit.
          </p>
        </Section>
        <Section title="No professional advice">
          <p>
            Our content is for general information and education. It is not professional legal, financial,
            medical or other regulated advice. You are responsible for verifying information and for how you apply
            it.
          </p>
        </Section>
        <Section title="Intellectual property">
          <p>
            All original content and branding on Articulary are ours or our licensors&apos; and are protected by
            applicable law. You may not reproduce substantial portions of our articles without permission.
          </p>
        </Section>
        <Section title="Disclaimer of warranties & liability">
          <p>
            The site and tools are provided &quot;as is&quot; without warranties of any kind. To the maximum extent
            permitted by law, Articulary is not liable for any damages arising from your use of the site or
            reliance on its content, including accuracy of tool output.
          </p>
        </Section>
        <Section title="Changes & contact">
          <p>
            We may update these terms from time to time. Continued use after changes constitutes acceptance.
            Questions? Contact us at{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-[var(--brand-ink)] hover:underline">{SITE_CONFIG.email}</a>.
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
