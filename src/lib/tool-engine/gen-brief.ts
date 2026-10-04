import { Generator, firstKeyword } from "./types";
import { makeRng, pick, titleCase, Rng } from "./random";

function pickN<T>(rng: Rng, arr: T[], n: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  while (copy.length && out.length < n) out.push(copy.splice(Math.floor(rng() * copy.length), 1)[0]);
  return out;
}

/* ===========================================================================
 * CONTENT BRIEF BUILDER
 * ========================================================================= */
export const contentBrief: Generator = (input, opts) => {
  const kw = firstKeyword(input);
  const T = titleCase(kw);
  const intent = (opts?.intent as string) || "informational";
  const rng = makeRng("brief:" + kw + ":" + intent);

  const intro = pick(rng, [
    `A practical, well-researched guide to ${kw} aimed at professionals who want actionable answers.`,
    `This piece explains ${kw} clearly and gives readers a repeatable process they can apply immediately.`,
  ]);

  const questions = pickN(rng, [
    `What exactly is ${kw}?`,
    `Why does ${kw} matter?`,
    `How do you get started with ${kw}?`,
    `What are the biggest mistakes to avoid?`,
    `Which tools help with ${kw}?`,
    `How do you measure success?`,
  ], 5);

  const sections = pickN(rng, [
    `Introduction: why ${kw} matters`,
    `What is ${kw}, in plain terms`,
    `A step-by-step process for ${kw}`,
    `Common mistakes to avoid`,
    `Tools and resources`,
    `How to measure results`,
    `Frequently asked questions`,
  ], 6);

  return {
    title: `Content brief: ${T}`,
    groups: [
      { heading: "Working title", lines: [`${T}: The Practical Guide`] },
      { heading: "Search intent", lines: [`${intent[0].toUpperCase() + intent.slice(1)} — the reader wants ${intent === "informational" ? "to understand the topic" : intent === "commercial" ? "to evaluate options before choosing" : "step-by-step instructions"}.`] },
      { heading: "Audience & angle", lines: [intro] },
      { heading: "Key questions to answer", lines: questions },
      { heading: "Suggested structure", lines: sections },
      { heading: "Optimization checklist", lines: [
        `Primary keyword "${kw}" appears in the H1, the first 100 words, and the meta title.`,
        "Each H2 answers one reader question; no thin or padded sections.",
        "Include at least one original example, checklist or workflow diagram.",
        "Add 3–6 internal links to related Articulary guides and tools.",
        "Write a unique meta description under 155 characters.",
      ] },
    ],
  };
};

/* ===========================================================================
 * BLOG OUTLINE GENERATOR
 * ========================================================================= */
export const blogOutline: Generator = (input, opts) => {
  const t = firstKeyword(input);
  const T = titleCase(t);
  const rng = makeRng("outline:" + t);
  const detailed = opts?.depth !== "sections";

  const h2s = pickN(rng, [
    `What Is ${T}?`,
    `Why ${T} Matters`,
    `How to Get Started With ${T}`,
    `A Step-by-Step ${T} Process`,
    `Common Mistakes to Avoid`,
    `Tools That Help With ${T}`,
    `How to Measure Success`,
    `Frequently Asked Questions`,
  ], 7);

  const h3Pool = [
    "A closer look at the basics",
    "Quick wins you can apply today",
    "What the experts recommend",
    "Example scenarios",
    "Templates and checklists",
    "Where people usually go wrong",
  ];

  return {
    title: `Blog outline: ${T}`,
    groups: [
      {
        heading: "Structure (H1 → H2)",
        lines: [`H1: ${T}: The Practical Guide`, ...h2s.map((h) => `H2: ${h}`)],
      },
      ...(detailed
        ? [{ heading: "Suggested H3s (optional)", lines: pickN(rng, h3Pool, 4).map((h) => `H3: ${h}`) }]
        : []),
    ],
  };
};

/* ===========================================================================
 * META TITLE GENERATOR
 * ========================================================================= */
export const metaTitles: Generator = (input, opts) => {
  const kw = firstKeyword(input);
  const T = titleCase(kw);
  const rng = makeRng("metatitle:" + kw);
  const brand = (opts?.brand as string) || "";

  const candidates = [
    `${T}: The Complete Guide`,
    `What Is ${T}? (2025 Guide)`,
    `${T} for Beginners`,
    `The Best ${T} Strategies`,
    `${T}: 10 Proven Tips`,
    `How to Master ${T}`,
  ];
  const clean = (s: string) => {
    const withBrand = brand ? `${s} | ${brand}` : s;
    return withBrand.slice(0, 60);
  };
  return {
    title: `Meta titles for: ${T}`,
    groups: [{ heading: "Options (target ≤ 60 chars)", lines: pickN(rng, candidates, 5).map(clean) }],
  };
};

/* ===========================================================================
 * META DESCRIPTION GENERATOR
 * ========================================================================= */
export const metaDescriptions: Generator = (input) => {
  const t = firstKeyword(input);
  const T = titleCase(t);
  const rng = makeRng("metadesc:" + t);

  const pool = [
    `Learn everything about ${t} in one practical guide. Discover proven steps, common mistakes and tools — with examples you can use today.`,
    `Master ${t} with this clear, step-by-step guide. Get the strategies, templates and checklists you need to see real results.`,
    `Curious about ${t}? This guide explains it simply, shows you how to get started, and shares the pitfalls to avoid.`,
    `Save time and get better results with ${t}. A practical resource for busy teams, with actionable advice and ready-to-use tools.`,
  ];
  const clean = (s: string) => s.slice(0, 155);

  return {
    title: `Meta descriptions for: ${T}`,
    groups: [{ heading: "Options (target ≤ 155 chars)", lines: pickN(rng, pool, 3).map(clean) }],
  };
};
