import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Articulary team — feedback, corrections, partnerships or tool suggestions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Contact us</h1>
      <p className="mt-3 text-[var(--ink-soft)]">We read everything. Use the form or email us directly.</p>

      <form action={`mailto:${SITE_CONFIG.email}`} method="get" encType="text/plain" className="mt-8 space-y-4">
        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-semibold text-[var(--ink)]">Subject</label>
          <input id="subject" name="subject" required placeholder="What's this about?" className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-[var(--brand)]" />
        </div>
        <div>
          <label htmlFor="body" className="mb-1 block text-sm font-semibold text-[var(--ink)]">Message</label>
          <textarea id="body" name="body" required rows={6} placeholder="Write your message…" className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-[var(--brand)]" />
        </div>
        <button type="submit" className="btn-gradient rounded-xl px-6 py-3 text-sm font-semibold">Send via email</button>
        <p className="text-xs text-[var(--muted)]">This opens your email app with the message pre-filled. You can also write to{" "}
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-[var(--brand-ink)] hover:underline">{SITE_CONFIG.email}</a> directly.
        </p>
      </form>
    </div>
  );
}
