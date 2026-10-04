// Articulary data-integrity QA. Usage: npm run qa
// Validates data modules and the deterministic tool engine. Exits non-zero on failure.
import { CLUSTERS } from "../src/lib/clusters.ts";
import { ALL_GUIDES } from "../src/data/guides/index.ts";
import { TOOLS } from "../src/data/tools.tsx";
import { SOFTWARE } from "../src/data/software.ts";
import { COMPARISONS } from "../src/data/comparisons.ts";
import { getGenerator, generateForTool } from "../src/lib/tool-engine/index.ts";
import { isAffiliated } from "../src/data/affiliates.ts";

let failures = 0;
let passes = 0;
const fail = (msg) => { failures++; console.error(`  ✗ ${msg}`); };
const ok = (msg) => { passes++; console.log(`  ✓ ${msg}`); };

// valid in-site paths for link resolution
const validPaths = new Set([
  "/", "/guides", "/tools", "/software", "/compare", "/search", "/newsletter",
  "/about", "/contact", "/editorial-policy", "/affiliate-disclosure", "/privacy", "/terms",
  ...CLUSTERS.map((c) => c.path),
  ...ALL_GUIDES.map((g) => `/guides/${g.slug}`),
  ...TOOLS.map((t) => `/tools/${t.slug}`),
  ...SOFTWARE.flatMap((s) => [`/software/${s.slug}`, `/software/${s.slug}/alternatives`]),
  ...COMPARISONS.map((c) => `/compare/${c.slug}`),
]);

// 1. Tool → generator coverage
for (const t of TOOLS) {
  if (!getGenerator(t.slug)) fail(`tool "${t.slug}" has no registered generator`);
}
ok(`all ${TOOLS.length} tools have generators`);

// 2. Engine round-trip: every tool must produce output for a sample keyword
const sampleBy = {
  "article-idea-generator": "email marketing", "blog-title-generator": "content marketing",
  "content-brief-builder": "seo", "blog-outline-generator": "blogging",
  "meta-title-generator": "ai content", "meta-description-generator": "ai content",
  "faq-generator": "ai writing", "content-refresh-assistant": "email newsletter",
  "keyword-intent-classifier": "best email marketing software", "content-angle-generator": "seo",
  "internal-link-suggestion": "content strategy", "social-post-generator": "blogging",
  "newsletter-idea-generator": "seo",
};
for (const t of TOOLS) {
  const input = sampleBy[t.slug] ?? "content";
  const r = generateForTool(t.slug, input);
  if (!r) { fail(`tool "${t.slug}" returned null for "${input}"`); continue; }
  if (!r.groups.length) { fail(`tool "${t.slug}" returned empty groups`); continue; }
  const empty = r.groups.filter((g) => !g.lines.length).length;
  if (empty) fail(`tool "${t.slug}" has ${empty} empty group(s)`);
  else ok(`tool "${t.slug}" generated ${r.groups.reduce((n, g) => n + g.lines.length, 0)} lines`);
}

// 3. Required fields
for (const g of ALL_GUIDES) {
  if (!g.title || !g.description || !g.slug || !g.cluster || !g.date || !g.content?.length)
    fail(`guide "${g.slug}" missing required fields`);
  if (!CLUSTERS.some((c) => c.key === g.cluster)) fail(`guide "${g.slug}" has unknown cluster "${g.cluster}"`);
  if (g.faq) for (const f of g.faq) if (!f.q || !f.a) fail(`guide "${g.slug}" has malformed FAQ`);
}
ok(`validated ${ALL_GUIDES.length} guides`);

for (const t of TOOLS) {
  if (!t.slug || !t.name || !t.description || !t.inputLabel || !t.inputPlaceholder || !t.buttonLabel)
    fail(`tool "${t.slug ?? "?"}" missing required fields`);
}
ok(`validated ${TOOLS.length} tools`);

for (const s of SOFTWARE) {
  if (!s.slug || !s.name || !s.overview?.length || !s.verdict) fail(`software "${s.slug}" incomplete`);
  if (s.affiliated && !isAffiliated(s.slug)) fail(`software "${s.slug}" flags affiliated but no active affiliate record`);
  if (!s.affiliated && isAffiliated(s.slug)) fail(`software "${s.slug}" not flagged affiliated but affiliate record active`);
}
ok(`validated ${SOFTWARE.length} software entries`);

// 4. Comparisons reference real software
for (const c of COMPARISONS) {
  for (const slug of c.software ?? []) {
    if (!SOFTWARE.some((s) => s.slug === slug)) fail(`comparison "${c.slug}" references unknown software "${slug}"`);
  }
}
ok(`validated ${COMPARISONS.length} comparisons`);

// 5. Internal links resolve (guides + tools related arrays)
const linkErrors = [];
for (const g of ALL_GUIDES) {
  const links = g.related ?? [];
  for (const l of links) if (l.href.startsWith("/") && !validPaths.has(l.href)) linkErrors.push(`${g.slug} -> ${l.href}`);
}
for (const t of TOOLS) {
  const links = [...t.relatedTools, ...t.relatedGuides, ...t.software];
  for (const l of links) if (l.href.startsWith("/") && !validPaths.has(l.href)) linkErrors.push(`${t.slug} -> ${l.href}`);
}
if (linkErrors.length) fail(`broken internal links:\n    ${linkErrors.join("\n    ")}`);
else ok(`all internal links resolve`);

// 6. Per-cluster depth
for (const c of CLUSTERS) {
  const n = ALL_GUIDES.filter((g) => g.cluster === c.key).length;
  if (n < 1) fail(`cluster "${c.label}" has no guides`);
}

console.log(`\n${passes} checks passed, ${failures} failed`);
process.exit(failures ? 1 : 0);
