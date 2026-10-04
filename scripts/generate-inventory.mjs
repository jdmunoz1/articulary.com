// Full content inventory: every URL + metadata.
// Usage: npm run inventory
import { CLUSTERS } from "../src/lib/clusters.ts";
import { ALL_GUIDES } from "../src/data/guides/index.ts";
import { TOOLS } from "../src/data/tools.tsx";
import { SOFTWARE } from "../src/data/software.ts";
import { COMPARISONS } from "../src/data/comparisons.ts";
import { SOFTWARE_CATEGORIES } from "../src/data/software-categories.ts";
import { writeFileSync } from "fs";

const STATIC = [
  { url: "/", title: "Home", type: "Static" },
  { url: "/guides", title: "Guides index", type: "Static" },
  { url: "/tools", title: "Tools index", type: "Static" },
  { url: "/software", title: "Software index", type: "Static" },
  { url: "/compare", title: "Compare index", type: "Static" },
  { url: "/search", title: "Search", type: "Static" },
  { url: "/newsletter", title: "Newsletter", type: "Static" },
  { url: "/about", title: "About", type: "Static" },
  { url: "/contact", title: "Contact", type: "Static" },
  { url: "/editorial-policy", title: "Editorial policy", type: "Static" },
  { url: "/affiliate-disclosure", title: "Affiliate disclosure", type: "Static" },
  { url: "/privacy", title: "Privacy", type: "Static" },
  { url: "/terms", title: "Terms", type: "Static" },
];

const inventory = [
  ...STATIC,
  ...CLUSTERS.map((c) => ({ url: c.path, title: c.label, type: "Hub", cluster: c.label, desc: c.blurb })),
  ...ALL_GUIDES.map((g) => ({
    url: `/guides/${g.slug}`,
    title: g.title,
    type: "Guide",
    cluster: CLUSTERS.find((c) => c.key === g.cluster)?.label ?? g.cluster,
    desc: g.description,
    date: g.date,
    updated: g.updated ?? g.date,
    tier: g.tier ?? 0,
    featured: g.featured ?? false,
  })),
  ...TOOLS.map((t) => ({
    url: `/tools/${t.slug}`,
    title: t.name,
    type: "Tool",
    desc: t.tagline,
  })),
  ...SOFTWARE.flatMap((s) => [
    { url: `/software/${s.slug}`, title: s.name, type: "Software", cluster: s.category, desc: s.tagline, date: s.date, updated: s.updated ?? s.date },
    { url: `/software/${s.slug}/alternatives`, title: `${s.name} alternatives`, type: "Software alternatives", cluster: s.category },
  ]),
  ...COMPARISONS.map((c) => ({ url: `/compare/${c.slug}`, title: c.title, type: "Comparison", date: c.date, updated: c.updated ?? c.date })),
  ...SOFTWARE_CATEGORIES.map((c) => ({ url: `/software?category=${c.key}`, title: c.label, type: "Software category", desc: c.description })),
];

writeFileSync("inventory.json", JSON.stringify(inventory, null, 2));

const byType = {};
for (const item of inventory) byType[item.type] = (byType[item.type] ?? 0) + 1;

console.log("=== URL inventory ===");
for (const item of inventory) {
  const cluster = item.cluster ? ` [${item.cluster}]` : "";
  const date = item.date ? ` (${item.date})` : "";
  console.log(`${item.url.padEnd(48)} ${item.type.padEnd(22)}${cluster}${date}`);
}
console.log("\n=== Totals by type ===");
for (const [t, n] of Object.entries(byType)) console.log(`${String(n).padStart(3)}  ${t}`);
console.log(`\n${inventory.length} URLs total -> inventory.json written`);
