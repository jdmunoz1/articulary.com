import { Generator, cleanKeywords, firstKeyword } from "./types";
import { makeRng, pick, titleCase, Rng } from "./random";

function pickN<T>(rng: Rng, arr: T[], n: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  while (copy.length && out.length < n) {
    out.push(copy.splice(Math.floor(rng() * copy.length), 1)[0]);
  }
  return out;
}

/* ===========================================================================
 * ARTICLE IDEA GENERATOR
 * ========================================================================= */
export const articleIdeas: Generator = (input) => {
  const kw = cleanKeywords(input).join(" ") || firstKeyword(input);
  const rng = makeRng("ideas:" + kw);
  const t = kw;
  const T = titleCase(t);

  const informational = [
    `What is ${t} and why does it matter in 2025`,
    `${T}: a complete beginner's guide`,
    `The definitive guide to ${t} for content teams`,
    `How ${t} actually works (with examples)`,
    `Common ${t} mistakes and how to avoid them`,
    `${T} trends worth paying attention to`,
  ];
  const howto = [
    `How to get started with ${t} (step by step)`,
    `10 practical ways to improve your ${t} workflow`,
    `The simple ${t} framework anyone can follow`,
    `How to build a ${t} strategy from scratch`,
    `5 ${t} templates you can copy today`,
  ];
  const commercial = [
    `Best tools for ${t} in 2025 (tested)`,
    `${T} vs ${titleCase(pick(rng, ["manual writing", "full outsourcing", "template-based work"]))}: which is better`,
    `How much does ${t} really cost`,
    `The best ${t} software compared`,
  ];

  const groups = [
    { heading: "Informational angle (guides & explainers)", lines: pickN(rng, informational, 3) },
    { heading: "How-to angle (actionable tutorials)", lines: pickN(rng, howto, 3) },
    { heading: "Commercial angle (buyer-intent)", lines: pickN(rng, commercial, 3) },
  ];

  return { title: `${T} — article ideas`, groups };
};

/* ===========================================================================
 * BLOG TITLE GENERATOR
 * ========================================================================= */
export const blogTitles: Generator = (input, opts) => {
  const t = firstKeyword(input);
  const T = titleCase(t);
  const rng = makeRng("titles:" + t + ":" + JSON.stringify(opts));

  const seo = [
    `${T}: The Complete Guide (2025)`,
    `What Is ${T}? A Practical Explanation`,
    `${T} for Beginners: Everything You Need`,
    `The Ultimate Guide to ${T}`,
  ];
  const curious = [
    `Why Most ${T} Efforts Fail (and What Works)`,
    `The ${T} Strategy Nobody Talks About`,
    `What I Learned After 100 Hours of ${T}`,
    `The Surprising Truth About ${T}`,
  ];
  const pro = [
    `A Strategic Approach to ${T}`,
    `${T}: A Field Guide for Marketing Teams`,
    `Making the Business Case for ${T}`,
    `How We Operationalize ${T}`,
  ];
  const list = [
    `10 ${T} Tips That Actually Work`,
    `7 Proven ${T} Strategies for 2025`,
    `5 Everyday ${T} Mistakes to Avoid`,
    `12 ${T} Examples Worth Stealing`,
  ];
  const howto = [
    `How to Do ${T} (Step by Step)`,
    `How to Get Started With ${T} Today`,
    `How to Build a ${T} Workflow`,
    `A Simple Process for ${T}`,
  ];

  const wanted = Array.isArray(opts?.styles) && opts.styles.length ? opts.styles : ["seo", "curious", "pro", "list", "howto"];
  const groups: { heading: string; lines: string[] }[] = [];

  if (wanted.includes("seo")) groups.push({ heading: "SEO-focused", lines: pickN(rng, seo, 3) });
  if (wanted.includes("curious")) groups.push({ heading: "Curiosity", lines: pickN(rng, curious, 3) });
  if (wanted.includes("pro")) groups.push({ heading: "Professional", lines: pickN(rng, pro, 3) });
  if (wanted.includes("list")) groups.push({ heading: "List-style", lines: pickN(rng, list, 3) });
  if (wanted.includes("howto")) groups.push({ heading: "How-to", lines: pickN(rng, howto, 3) });

  return { title: `Blog titles for: ${T}`, groups };
};

/* ===========================================================================
 * CONTENT ANGLE GENERATOR
 * ========================================================================= */
export const contentAngles: Generator = (input) => {
  const t = firstKeyword(input);
  const T = titleCase(t);
  const rng = makeRng("angles:" + t);

  const groups = [
    { heading: "Beginner", lines: pickN(rng, [`Start here: ${t} explained simply`, `The ${t} primer for complete beginners`], 1) },
    { heading: "Expert / advanced", lines: pickN(rng, [`Advanced ${t}: beyond the fundamentals`, `The ${t} playbook for experienced teams`], 1) },
    { heading: "Data-led", lines: pickN(rng, [`What the data says about ${t}`, `${T}: numbers, benchmarks and takeaways`], 1) },
    { heading: "Contrarian", lines: pickN(rng, [`Why the usual advice about ${t} is wrong`, `Rethinking ${t}: a contrarian view`], 1) },
    { heading: "Checklist / toolkit", lines: pickN(rng, [`The complete ${t} checklist`, `${T}: a ready-to-use toolkit`], 1) },
    { heading: "Case-study", lines: pickN(rng, [`How we improved ${t} (a real example)`, `${T}: a practical case study`], 1) },
  ];

  return { title: `Fresh angles for: ${T}`, groups };
};
