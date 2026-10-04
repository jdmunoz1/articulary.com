import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Articulary handles data, analytics and cookies.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-[var(--ink-soft)]">Last updated: May 2025</p>

      <div className="mt-8 space-y-8 leading-relaxed text-[var(--ink-soft)]">
        <Section title="What we collect">
          <p>
            Articulary is a content site. We do not require an account, and we do not store personal data you give
            us on a server. The site is hosted on <strong className="text-[var(--ink)]">Vercel</strong>, which may
            process basic technical data to serve pages.
          </p>
        </Section>
        <Section title="Analytics">
          <p>
            We use privacy-respecting traffic analytics to understand which pages are useful. This includes
            anonymized, aggregate metrics — not your identity. We use it to improve the site and our content, not
            to profile individuals.
          </p>
        </Section>
        <Section title="Cookies">
          <p>
            We use only the minimum necessary cookies that our hosting and analytics providers require. We do not
            use intrusive advertising trackers. Most browsers let you block or clear cookies; the site remains
            usable if you do.
          </p>
        </Section>
        <Section title="Third parties">
          <p>
            When you click an external or affiliate link, you&apos;re leaving Articulary and the destination site&apos;s own
            privacy policy applies. We are not responsible for third-party practices.
          </p>
        </Section>
        <Section title="Your rights & contact">
          <p>
            You may request deletion or correction of any personal data attributable to you. Email us at{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-[var(--brand-ink)] hover:underline">{SITE_CONFIG.email}</a>{" "}
            and we&apos;ll help. We&apos;ll only retain data as long as needed to respond.
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
