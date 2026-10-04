import { ALL_GUIDES } from "../src/data/guides/index.ts";
import { TOOLS } from "../src/data/tools.tsx";
import { SOFTWARE } from "../src/data/software.ts";
import { COMPARISONS } from "../src/data/comparisons.ts";
import { CLUSTERS } from "../src/lib/clusters.ts";

const validPaths = new Set([
  "/", "/guides", "/tools", "/software", "/compare", "/search", "/newsletter",
  "/about", "/contact", "/editorial-policy", "/affiliate-disclosure", "/privacy", "/terms",
  ...CLUSTERS.map((c) => c.path),
  ...ALL_GUIDES.map((g) => `/guides/${g.slug}`),
  ...TOOLS.map((t) => `/tools/${t.slug}`),
  ...SOFTWARE.flatMap((s) => [`/software/${s.slug}`, `/software/${s.slug}/alternatives`]),
  ...COMPARISONS.map((c) => `/compare/${c.slug}`),
]);
const out = [];
for (const t of TOOLS) {
  for (const l of [...t.relatedTools, ...t.relatedGuides, ...t.software]) {
    if (l.href.startsWith("/") && !validPaths.has(l.href)) out.push(`${t.slug}: ${l.href}`);
  }
}
for (const s of SOFTWARE) {
  for (const l of s.alternatives ?? []) if (l.href.startsWith("/") && !validPaths.has(l.href)) out.push(`${s.slug}: ${l.href}`);
}
console.log(out.sort().join("\n"));
console.log(`\n${out.length} broken internal links`);
