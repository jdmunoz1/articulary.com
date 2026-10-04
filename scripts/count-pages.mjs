// Route/content inventory built from the actual data modules.
// Usage: npm run count
import { CLUSTERS } from "../src/lib/clusters.ts";
import { ALL_GUIDES } from "../src/data/guides/index.ts";
import { TOOLS } from "../src/data/tools.tsx";
import { SOFTWARE } from "../src/data/software.ts";
import { COMPARISONS } from "../src/data/comparisons.ts";
import { SOFTWARE_CATEGORIES } from "../src/data/software-categories.ts";

const STATIC = [
  "/", "/guides", "/tools", "/software", "/compare", "/search", "/newsletter",
  "/about", "/contact", "/editorial-policy", "/affiliate-disclosure",
  "/privacy", "/terms", "/sitemap.xml", "/robots.txt",
];

const groups = [
  { label: "Static pages", urls: STATIC },
  { label: "Topic hubs", urls: CLUSTERS.map((c) => c.path) },
  { label: "Guides", urls: ALL_GUIDES.map((g) => `/guides/${g.slug}`) },
  { label: "Tools", urls: TOOLS.map((t) => `/tools/${t.slug}`) },
  { label: "Software", urls: SOFTWARE.flatMap((s) => [`/software/${s.slug}`, `/software/${s.slug}/alternatives`]) },
  { label: "Comparisons", urls: COMPARISONS.map((c) => `/compare/${c.slug}`) },
  { label: "Software categories", urls: SOFTWARE_CATEGORIES.map((c) => `/software?category=${c.key}`) },
];

let total = 0;
for (const g of groups) {
  console.log(`${String(g.urls.length).padStart(3)}  ${g.label}`);
  total += g.urls.length;
}
console.log("---");
console.log(`${String(total).padStart(3)}  Total URLs`);

// Data-quality quick checks
const dupSlugs = (arr, field) => arr.filter((x, i) => arr.findIndex((y) => y[field] === x[field]) !== i).map((x) => x[field]);
const dupGuides = dupSlugs(ALL_GUIDES, "slug");
const dupTools = dupSlugs(TOOLS, "slug");
const dupSoftware = dupSlugs(SOFTWARE, "slug");
if (dupGuides.length) console.warn(`Warning: duplicate guide slugs -> ${dupGuides.join(", ")}`);
if (dupTools.length) console.warn(`Warning: duplicate tool slugs -> ${dupTools.join(", ")}`);
if (dupSoftware.length) console.warn(`Warning: duplicate software slugs -> ${dupSoftware.join(", ")}`);
const orphanGuides = ALL_GUIDES.filter((g) => !CLUSTERS.some((c) => c.key === g.cluster));
if (orphanGuides.length) console.warn(`Warning: guides with unknown cluster -> ${orphanGuides.map((g) => g.slug).join(", ")}`);

// Guides by cluster
console.log("\nGuides per cluster:");
for (const c of CLUSTERS) {
  const n = ALL_GUIDES.filter((g) => g.cluster === c.key).length;
  console.log(`  ${String(n).padStart(2)}  ${c.label}`);
}
