import Link from "next/link";
import { ContentBlock } from "@/lib/types";
import { WorkflowDiagram } from "./WorkflowDiagram";

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} id={block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")} className="mt-10 scroll-mt-24 text-2xl font-bold tracking-tight text-[var(--ink)] first:mt-0">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 text-xl font-semibold tracking-tight text-[var(--ink)]">
                {block.text}
              </h3>
            );
          case "p":
            return <p key={i} className="text-[16px] leading-relaxed text-[var(--ink-soft)]">{block.text}</p>;
          case "lead":
            return <p key={i} className="text-lg leading-relaxed text-[var(--ink)]">{block.text}</p>;
          case "info":
            return <Callout key={i} tone="info" text={block.text} />;
          case "tip":
            return <Callout key={i} tone="tip" text={block.text} />;
          case "warning":
            return <Callout key={i} tone="warning" text={block.text} />;
          case "list":
            return (
              <div key={i}>
                {block.title && <h3 className="mb-2 text-base font-semibold text-[var(--ink)]">{block.title}</h3>}
                <ul className="list-disc space-y-2 pl-5 text-[var(--ink-soft)]">
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          case "checklist":
            return (
              <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                {block.title && <h3 className="mb-3 text-base font-semibold text-[var(--ink)]">{block.title}</h3>}
                <ul className="space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[var(--ink-soft)]">
                      <span className="mt-1 text-[var(--brand)]" aria-hidden>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "ordered":
            return (
              <div key={i}>
                {block.title && <h3 className="mb-2 text-base font-semibold text-[var(--ink)]">{block.title}</h3>}
                <ol className="list-decimal space-y-2 pl-5 text-[var(--ink-soft)]">
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ol>
              </div>
            );
          case "table":
            return <DataTable key={i} title={block.title} headers={block.headers} rows={block.rows} />;
          case "stat":
            return (
              <div key={i} className="rounded-xl border border-[var(--border)] bg-white p-5 shadow-sm">
                <div className="text-3xl font-bold text-[var(--brand)]">{block.value}</div>
                <div className="mt-1 text-sm text-[var(--ink-soft)]">{block.label}</div>
              </div>
            );
          case "quote":
            return (
              <blockquote key={i} className="border-l-4 border-[var(--brand)] bg-[var(--brand-soft)] px-5 py-4 text-[var(--ink)]">
                <p className="font-medium">“{block.text}”</p>
                {block.cite && <cite className="mt-2 block text-sm not-italic text-[var(--ink-soft)]">— {block.cite}</cite>}
              </blockquote>
            );
          case "cta":
            return (
              <div key={i} className="rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand-soft)] p-6">
                {block.heading && <h3 className="mb-2 text-lg font-bold text-[var(--ink)]">{block.heading}</h3>}
                {block.text && <p className="mb-4 text-[var(--ink-soft)]">{block.text}</p>}
                <div className="flex flex-wrap gap-3">
                  {block.links.map((l, j) => (
                    <Link key={j} href={l.href} className="btn-gradient rounded-lg px-4 py-2.5 text-sm font-semibold">
                      {l.text}
                    </Link>
                  ))}
                </div>
              </div>
            );
          case "related":
            return (
              <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <h3 className="mb-3 text-base font-semibold text-[var(--ink)]">{block.title || "Related reading"}</h3>
                <ul className="space-y-2">
                  {block.links.map((l, j) => (
                    <li key={j}>
                      <Link href={l.href} className="text-sm font-medium text-[var(--brand-ink)] hover:underline">
                        {l.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "affiliate_disclosure":
            return (
              <p key={i} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-xs text-[var(--muted)]">
                {block.text || "Some links on this page are affiliate links. If you buy through them we may earn a commission at no extra cost to you. This never affects our editorial independence."}
              </p>
            );
          case "workflow":
            return <WorkflowDiagram key={i} title={block.title} steps={block.steps} />;
          case "divider":
            return <hr key={i} className="my-8 border-[var(--border)]" />;
          default:
            return null;
        }
      })}
    </div>
  );
}

function Callout({ tone, text }: { tone: "info" | "tip" | "warning"; text: string }) {
  const styles: Record<typeof tone, { box: string; label: string; icon: string }> = {
    info: { box: "border-[var(--brand)]/25 bg-[var(--brand-soft)]", label: "text-[var(--brand-ink)]", icon: "ℹ️" },
    tip: { box: "border-emerald-300 bg-emerald-50", label: "text-emerald-800", icon: "💡" },
    warning: { box: "border-amber-300 bg-amber-50", label: "text-amber-800", icon: "⚠️" },
  };
  const s = styles[tone];
  const label = tone === "info" ? "Note" : tone === "tip" ? "Tip" : "Important";
  return (
    <div className={`rounded-xl border px-5 py-4 ${s.box}`}>
      <p className={`text-sm font-semibold ${s.label}`}>
        <span className="mr-1" aria-hidden>{s.icon}</span>{label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">{text}</p>
    </div>
  );
}

function DataTable({ title, headers, rows }: { title?: string; headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
      {title && (
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--ink)]">
          {title}
        </div>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 font-semibold text-[var(--ink)]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[var(--border)] last:border-0">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 align-top text-[var(--ink-soft)] ${j === 0 ? "font-medium text-[var(--ink)]" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
