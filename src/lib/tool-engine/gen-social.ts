import { Generator, firstKeyword } from "./types";
import { makeRng, pick, Rng, titleCase } from "./random";

function pickN<T>(rng: Rng, arr: T[], n: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  while (copy.length && out.length < n) out.push(copy.splice(Math.floor(rng() * copy.length), 1)[0]);
  return out;
}

/* ===========================================================================
 * SOCIAL POST GENERATOR
 * ========================================================================= */
export const socialPosts: Generator = (input, opts) => {
  const summary = firstKeyword(input) || "this article";
  const rng = makeRng("social:" + summary);
  const T = titleCase(summary);

  const hooks = [
    `Most people get ${summary} wrong. Here's what actually works.`,
    `I spent weeks studying ${summary} so you don't have to.`,
    `A practical take on ${summary} — no fluff, just process.`,
    `3 things about ${summary} that surprised me (one will change your approach).`,
  ];

  const bodies = [
    `The biggest lesson? Start with search intent, then add genuine value. Structure beats volume every time.`,
    `Instead of producing more, focus on a clear brief, the right format, and consistent measurement.`,
    `Here's the short version: know your audience, answer their real questions, and keep everything honest.`,
  ];

  const build = (platform: string) => {
    const ka = platform.toLowerCase();
    const lead = ka.includes("linkedin")
      ? "A practical note for your network — "
      : ka.includes("instagram")
      ? ""
      : ka.includes("x") || ka.includes("twitter")
      ? "Quick thread — "
      : "";
    const cta =
      ka.includes("x") || ka.includes("twitter")
        ? pick(rng, ["Save this for later.", "Repost if it's useful to someone."])
        : ka.includes("instagram")
        ? pick(rng, ["Save this post.", "Share it with a creator who needs it."])
        : pick(rng, ["Want the full breakdown? Try the free generators at articulary.com", "Follow for practical content tips every week."]);
    return `${lead}${pick(rng, hooks)}\n\n${pick(rng, bodies)}\n\n${cta}`;
  };

  const wanted = Array.isArray(opts?.platforms) && opts.platforms.length ? opts.platforms : ["X / Twitter", "LinkedIn", "Instagram"];

  return {
    title: `Social posts for: ${T}`,
    groups: wanted.map((p: string) => ({
      heading: p,
      lines: [build(String(p))],
    })),
  };
};

/* ===========================================================================
 * NEWSLETTER IDEA GENERATOR
 * ========================================================================= */
export const newsletterIdeas: Generator = (input) => {
  const topic = firstKeyword(input);
  const T = titleCase(topic);
  const rng = makeRng("newsletter:" + topic);

  const subjects = [
    `${T}: the one thing most people skip`,
    `New: a practical take on ${topic}`,
    `3 quick wins for ${topic}`,
    `${T} — what actually works in 2025`,
  ];

  const types = pickN(rng, [
    `Curated issue: ${T} resources worth your time`,
    `How-to issue: a step-by-step ${topic} walkthrough`,
    `Story issue: what happened when we applied ${topic}`,
    `Opinion issue: my honest take on ${topic}`,
  ], 4);

  return {
    title: `Newsletter ideas: ${T}`,
    groups: [
      { heading: "Subject lines", lines: pickN(rng, subjects, 4) },
      { heading: "Issue angles", lines: types },
    ],
  };
};

/* ===========================================================================
 * INTERNAL LINK SUGGESTION TOOL
 * ========================================================================= */
export const internalLinks: Generator = (input) => {
  const t = firstKeyword(input) || "your page";
  const T = titleCase(t);
  const rng = makeRng("links:" + t);

  return {
    title: `Internal link suggestions for: ${T}`,
    groups: [
      { heading: "Anchor-style suggestions", lines: pickN(rng, [
        `Link to the related pillar guide using natural anchor text like "how topic clusters work".`,
        `Add a contextual link to the relevant free tool, e.g. "try the article idea generator".`,
        `Cross-link to a sibling article that answers a follow-up question.`,
        `Link from a supported claim to a deeper guide that expands on it.`,
      ], 4) },
      { heading: "Where to place links", lines: [
        "In the intro, on the first relevant keyword or concept.",
        "Mid-article, right after the claim or step each link supports.",
        "In a short 'Related reading' box at the end.",
      ] },
    ],
  };
};
