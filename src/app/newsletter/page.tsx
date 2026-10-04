import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "The Articulary Brief — Newsletter",
  description: "Sign up for one useful content idea every week: frameworks, fresh angles and honest tool picks. No spam.",
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Newsletter" }]} />
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--brand)] to-[var(--violet)] p-8 text-center sm:p-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">The Articulary Brief</h1>
        <p className="mt-3 text-indigo-100">One useful content idea every week. Frameworks, fresh angles and honest tool picks — no fluff.</p>
      </div>

      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white p-6">
        <form action="/newsletter" method="get" className="flex flex-col gap-2 sm:flex-row">
          <input type="email" name="email" required placeholder="you@example.com" aria-label="Email address" className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-[var(--brand)]" />
          <button type="submit" className="btn-gradient rounded-xl px-6 py-3 text-sm font-semibold">Subscribe free</button>
        </form>
        <p className="mt-3 text-xs text-[var(--muted)]">We respect your inbox. Unsubscribe anytime with one click.</p>
      </div>

      <div className="mt-8 space-y-6">
        <h2 className="text-xl font-bold text-[var(--ink)]">What you get</h2>
        <ul className="space-y-4">
          {[
            { icon: "🧭", title: "One practical framework", body: "A reusable process or mental model you can apply that week." },
            { icon: "💡", title: "Fresh content angles", body: "New ways to approach topics you're already covering." },
            { icon: "🛠️", title: "Honest tool picks", body: "No hype. We tell you when free is enough and what's worth paying for." },
            { icon: "🔗", title: "Curated resources", body: "The few articles and ideas actually worth your time." },
          ].map((f) => (
            <li key={f.title} className="flex gap-4 rounded-xl border border-[var(--border)] bg-white p-5">
              <div className="text-2xl" aria-hidden>{f.icon}</div>
              <div>
                <h3 className="font-bold text-[var(--ink)]">{f.title}</h3>
                <p className="mt-1 text-sm text-[var(--ink-soft)]">{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-sm text-[var(--muted)]">
          Questions? Email us at{" "}
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-[var(--brand-ink)] hover:underline">{SITE_CONFIG.email}</a>.
        </p>
      </div>
    </div>
  );
}
