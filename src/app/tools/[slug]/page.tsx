import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TOOLS, getTool } from "@/data/tools";
import { ToolWidget } from "@/components/ToolWidget";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: tool.name,
    description: tool.description,
    openGraph: { title: tool.name, description: tool.description, type: "website" },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Free Tools", href: "/tools" },
          { label: tool.name },
        ]}
      />

      {/* Tool hero */}
      <div className="mb-8 flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white to-[var(--brand-soft)]/30 p-6">
        <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--violet)] text-2xl">
          <span aria-hidden>{tool.icon}</span>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-[var(--ink)] sm:text-3xl">{tool.name}</h1>
          <p className="mt-2 text-base text-[var(--ink-soft)]">{tool.tagline}</p>
          {tool.aiPowered && (
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-ink)]">
              <span aria-hidden>✨</span> AI-powered
            </div>
          )}
        </div>
      </div>

      {/* Tool interface */}
      <section aria-label={`${tool.name} tool interface`}>
        <ToolWidget tool={tool} />
      </section>

      {/* How it works */}
      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-[var(--ink)]">How it works</h2>
        <ol className="grid gap-3 sm:grid-cols-3">
          {["Type or paste your topic, keyword or input.", "Choose any options and press generate.", "Copy the results — they're yours to use and edit."].map((s, i) => (
            <li key={i} className="rounded-xl border border-[var(--border)] bg-white p-4">
              <div className="mb-2 grid h-7 w-7 place-items-center rounded-full bg-[var(--brand-soft)] text-sm font-bold text-[var(--brand-ink)]">{i + 1}</div>
              <p className="text-sm text-[var(--ink-soft)]">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Use cases */}
      {tool.useCases && tool.useCases.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-[var(--ink)]">Good use cases</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {tool.useCases.map((uc, i) => (
              <li key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink-soft)]">
                {uc}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ */}
      {tool.faq && tool.faq.length > 0 && (
        <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: tool.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }) }} />
          <h2 className="mb-4 text-2xl font-bold text-[var(--ink)]">Frequently asked questions</h2>
          <div className="space-y-4">
            {tool.faq.map((f, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold text-[var(--ink)]">{f.q}</h3>
                <p className="mt-1 text-[var(--ink-soft)]">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      <Related tool={tool} />
    </div>
  );
}

function Related({ tool }: { tool: (typeof TOOLS)[number] }) {
  const relatedTools = TOOLS.filter((t) => t.slug !== tool.slug).slice(0, 4);
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-bold text-[var(--ink)]">Related tools</h2>
      {relatedTools.length ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {relatedTools.map((t) => (
            <Link key={t.slug} href={`/tools/${t.slug}`} className="rounded-xl border border-[var(--border)] bg-white p-4 transition hover:border-[var(--brand)]/40">
              <div className="text-lg"><span aria-hidden>{t.icon}</span></div>
              <div className="mt-2 text-sm font-bold text-[var(--ink)]">{t.name}</div>
              <p className="text-xs text-[var(--muted)]">{t.tagline}</p>
            </Link>
          ))}
        </div>
      ) : (
        <Link href="/tools" className="text-sm font-semibold text-[var(--brand-ink)] hover:underline">Browse all free tools →</Link>
      )}
    </section>
  );
}
