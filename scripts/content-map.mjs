// Content map — all pages grouped by topic hub.
// Usage: npm run content-map
import { CLUSTERS } from "../src/lib/clusters.ts";
import { ALL_GUIDES } from "../src/data/guides/index.ts";
import { TOOLS } from "../src/data/tools.tsx";
import { SOFTWARE } from "../src/data/software.ts";
import { HUB_TOOLS } from "../src/lib/hub-maps.ts";
import { SOFTWARE_CATEGORIES } from "../src/data/software-categories.ts";
import { writeFileSync } from "fs";

const wordCount = (blocks) => blocks.reduce((n, b) => {
  if (b.type === "lead" || b.type === "p") return n + b.text.split(/\s+/).length;
  if (b.type === "h2" || b.type === "h3") return n + b.text.split(/\s+/).length;
  if (b.type === "list" || b.type === "checklist" || b.type === "ordered")
    return n + b.items.reduce((m, x) => m + x.split(/\s+/).length, 0);
  return n;
}, 0);

const map = {
  generated: new Date().toISOString(),
  clusters: CLUSTERS.map((c) => ({
    key: c.key,
    label: c.label,
    path: c.path,
    icon: c.icon,
    blurb: c.blurb,
    topics: c.topics,
    guideCount: ALL_GUIDES.filter((g) => g.cluster === c.key).length,
    toolCount: (HUB_TOOLS[c.key] ?? []).length,
    guides: ALL_GUIDES
      .filter((g) => g.cluster === c.key)
      .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
      .map((g) => ({
        slug: g.slug,
        title: g.title,
        description: g.description,
        tier: g.tier,
        priority: g.priority ?? 0,
        readTime: g.readTime,
        wordCount: wordCount(g.content ?? []),
        hasFaq: Boolean(g.faq?.length),
        hasRelated: Boolean(g.related?.length),
        featured: g.featured ?? false,
        updated: g.updated ?? g.date,
      })),
    tools: (HUB_TOOLS[c.key] ?? []).map((s) => TOOLS.find((t) => t.slug === s)).filter(Boolean).map((t) => ({
      slug: t.slug,
      name: t.name,
      tagline: t.tagline,
    })),
  })),
  software: SOFTWARE.map((s) => ({ slug: s.slug, name: s.name, category: s.category, pricing: s.pricing })),
  softwareCategories: SOFTWARE_CATEGORIES.map((c) => ({ key: c.key, label: c.label, count: SOFTWARE.filter((s) => s.category === c.key).length })),
};

writeFileSync("content-map.json", JSON.stringify(map, null, 2));
console.log("content-map.json written\n");

for (const c of map.clusters) {
  console.log(`${c.icon} ${c.label} (${c.path})`);
  console.log(`  Guides: ${c.guides.length}  Tools: ${c.tools.length}`);
  for (const g of c.guides) {
    const star = g.featured ? "*" : "";
    const updated = g.updated !== g.readTime ? ` [${g.updated}]` : "";
    console.log(`  ${g.tier ? `[tier${g.tier}]` : "       "} ${g.slug}${star}${updated}`);
  }
  console.log(`  Tools: ${c.tools.map((t) => t.name).join(", ")}`);
  console.log();
}
