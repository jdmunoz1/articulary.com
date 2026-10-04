import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { ALL_GUIDES } from "@/data/guides";
import { TOOLS } from "@/data/tools";
import { SOFTWARE } from "@/data/software";
import { COMPARISONS } from "@/data/comparisons";
import { CLUSTERS } from "@/lib/clusters";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();

  const staticRoutes = [
    "/", "/guides", "/tools", "/software", "/compare", "/search",
    "/newsletter", "/about", "/contact", "/editorial-policy",
    "/affiliate-disclosure", "/privacy", "/terms",
    ...CLUSTERS.map((c) => c.path),
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const guideRoutes = ALL_GUIDES.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: g.updated ? new Date(g.updated) : new Date(g.date),
    changeFrequency: "monthly" as const,
    priority: g.tier === 1 ? 0.9 : 0.6,
  }));

  const toolRoutes = TOOLS.map((t) => ({
    url: `${base}/tools/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const softwareRoutes = SOFTWARE.flatMap((s) => [
    { url: `${base}/software/${s.slug}`, lastModified: s.updated ? new Date(s.updated) : new Date(s.date), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/software/${s.slug}/alternatives`, lastModified: s.updated ? new Date(s.updated) : new Date(s.date), changeFrequency: "monthly" as const, priority: 0.4 },
  ]);

  const compareRoutes = COMPARISONS.map((c) => ({
    url: `${base}/compare/${c.slug}`,
    lastModified: c.updated ? new Date(c.updated) : new Date(c.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...guideRoutes, ...toolRoutes, ...softwareRoutes, ...compareRoutes];
}
