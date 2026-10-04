"use client";

import { useState } from "react";
import { ToolDef } from "@/lib/types";
import { generateForTool, getGenerator } from "@/lib/tool-engine";
import { ToolResult } from "@/lib/tool-engine/types";

function trackUsage(slug: string, event: "start" | "complete") {
  // Extensible analytics hook: GA/Plausible/Vercel events wired here later.
  if (typeof window !== "undefined") {
    const w = window as unknown as { gtag?: (x: string, y: string, o: Record<string, string>) => void };
    w.gtag?.("event", `tool_${event}`, { tool: slug });
  }
}

export function ToolWidget({ tool }: { tool: ToolDef }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  // Variants UI is planned; keep values as state (read in generate) without unused setters.
  const [variants] = useState<string[]>(tool.outputVariants ?? []);
  const [variantMode] = useState<"all" | "custom">("all");

  const generate = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!getGenerator(tool.slug)) return;
    trackUsage(tool.slug, "start");
    const opts: Record<string, unknown> = {
      // Placeholder for variant options passed by the client.
    };
    if (tool.slug === "blog-title-generator") {
      if (variantMode === "all" || variants.length === 0) opts.styles = ["seo", "curious", "pro", "list", "howto"];
      else opts.styles = variants;
    }
    setResult(generateForTool(tool.slug, input || tool.inputPlaceholder, opts));
    trackUsage(tool.slug, "complete");
    requestAnimationFrame(() => {
      document.getElementById("tool-output")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6">
      <form onSubmit={generate}>
        <label htmlFor="tool-input" className="block text-sm font-semibold text-[var(--ink)]">
          {tool.inputLabel}
        </label>
        <textarea
          id="tool-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={tool.inputPlaceholder}
          rows={2}
          className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/30"
          aria-label={tool.inputLabel}
        />
        {tool.inputHint && <p className="mt-1 text-xs text-[var(--muted)]">{tool.inputHint}</p>}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button type="submit" className="btn-gradient rounded-lg px-5 py-2.5 text-sm font-semibold">
            {tool.buttonLabel}
          </button>
          <button type="button" onClick={() => setInput("")} className="text-sm font-medium text-[var(--muted)] hover:text-[var(--ink)]">
            Clear
          </button>
        </div>
      </form>
      {result && (
        <div id="tool-output" className="mt-6 space-y-5 border-t border-[var(--border)] pt-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--brand-ink)]">{result.title}</h2>
          {result.groups.map((g, gi) => (
            <div key={gi} className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/60">
              {g.heading && (
                <div className="flex items-center justify-between rounded-t-xl border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2.5">
                  <h3 className="text-sm font-bold text-[var(--ink)]">{g.heading}</h3>
                  <CopyButton text={g.lines.join("\n\n")} label="Copy group" />
                </div>
              )}
              <div className="space-y-1.5 px-4 py-3 text-sm text-[var(--ink-soft)]">
                {g.lines.map((line, li) => (
                  <pre key={li} className="whitespace-pre-wrap font-sans text-[15px] leading-relaxed text-[var(--ink-soft)]">{line}</pre>
                ))}
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <CopyButton text={result.groups.map((g) => (g.heading ? `## ${g.heading}\n\n${g.lines.join("\n\n")}` : g.lines.join("\n\n"))).join("\n\n")} label="Copy all results" />
          </div>
        </div>
      )}
    </div>
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard unavailable; ignore */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--brand-ink)] hover:bg-[var(--brand-soft)]"
      aria-label={label}
    >
      {copied ? "Copied ✓" : label}
    </button>
  );
}
