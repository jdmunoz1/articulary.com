import { Generator, firstKeyword, cleanKeywords } from "./types";
import { makeRng, Rng, titleCase } from "./random";

function pickN<T>(rng: Rng, arr: T[], n: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  while (copy.length && out.length < n) out.push(copy.splice(Math.floor(rng() * copy.length), 1)[0]);
  return out;
}

/* ===========================================================================
 * FAQ GENERATOR
 * ========================================================================= */
export const faqGenerator: Generator = (input) => {
  const t = firstKeyword(input);
  const T = titleCase(t);
  const rng = makeRng("faq:" + t);

  const qa = [
    { q: `What is ${t}?`, a: `${T} is a practical process and set of techniques for achieving a specific, measurable marketing goal. This guide walks through it in simple terms.` },
    { q: `Why does ${t} matter?`, a: `Because it directly affects how efficiently your content performs — from reach and engagement to conversions. Getting it right compounds over time.` },
    { q: `How do I get started with ${t}?`, a: `Start small: pick one concrete goal, follow a clear process, and measure the result before scaling. Use our free tools to generate ideas, titles and briefs as a starting point.` },
    { q: `What are common ${t} mistakes?`, a: `The most common are ignoring search intent, writing without a brief, and skipping measurement. Each one quietly drags down results.` },
    { q: `Are there tools to help with ${t}?`, a: `Yes — a growing ecosystem. We review the leading options in our software directory and offer free generators to get you started.` },
  ];

  return {
    title: `FAQs about: ${T}`,
    groups: [
      { heading: "Questions & answers", lines: pickN(rng, qa, 5).map((f) => `Q: ${f.q}\nA: ${f.a}`) },
    ],
  };
};

/* ===========================================================================
 * KEYWORD INTENT CLASSIFIER
 * ========================================================================= */
export const intentClassifier: Generator = (input) => {
  const kws = cleanKeywords(input).length ? cleanKeywords(input) : [firstKeyword(input)];

  const classify = (kw: string): string => {
    const k = kw.toLowerCase();
    if (/login|sign in|pricing|download|official/.test(k)) return "Navigational";
    if (/buy|price|cost|cheap|discount|for sale|order/.test(k)) return "Transactional";
    if (/best|vs|comparison|review|alternative|top \d+/.test(k)) return "Commercial";
    if (/what is|how to|guide|tutorial|why|when|examples?/.test(k)) return "Informational";
    if (/\?$/.test(k) || k.split(/\s+/).length <= 2) return "Informational";
    if (/software|tool|app|platform/.test(k)) return "Commercial";
    return "Informational";
  };

  return {
    title: "Keyword intent classification",
    groups: [{ heading: "Keyword → search intent", lines: kws.map((k) => `${k} → ${classify(k)}`) }],
  };
};

/* ===========================================================================
 * CONTENT REFRESH ASSISTANT
 * ========================================================================= */
export const contentRefresh: Generator = (input) => {
  const t = firstKeyword(input) || "this page";
  return {
    title: "Content refresh plan",
    groups: [
      { heading: "Review these first", lines: [
        "Confirm the page still matches current search intent for its main keyword.",
        `Re-read the intro of "${t}" — is the promise still accurate?`,
        "Check the title and meta description still fit (≤60 / ≤155 chars).",
        "Verify stats, dates and examples are still current; update anything stale.",
      ] },
      { heading: "Then improve", lines: [
        "Break up any walls of text with headings, lists and a workflow diagram.",
        "Add or refresh internal links to newer guides and tools.",
        "Add a short FAQ section with real reader questions.",
        "Improve any weak sections rather than padding the whole article.",
      ] },
      { heading: "Only when truly needed", lines: [
        "Update the publish date ONLY if you made a material change.",
        "If nothing requires updating, leave the page alone — freshness honesty matters.",
      ] },
    ],
  };
};
