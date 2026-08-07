import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { STATES } from "@/lib/states";
import { PILLARS } from "@/lib/pillars";
import { SITE_URL } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...PILLARS.map((p) => ({
      url: `${SITE_URL}${p.href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  const utilityRoutes: MetadataRoute.Sitemap = [
    "/about/",
    "/editorial-policy/",
    "/contact/",
    "/privacy-policy/",
    "/terms-of-use/",
    "/affiliate-disclosure/",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.filter(
    (a) => a.status === "published"
  ).map((a) => ({
    url: `${SITE_URL}${a.href}`,
    lastModified: new Date(a.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Non-priority states are set to noindex on the page itself (see
  // state-guide/[state]/page.tsx) since they share a thinner template —
  // Google explicitly recommends not listing noindexed URLs in a
  // sitemap, so only the 10 fully-indexed priority states appear here.
  const stateRoutes: MetadataRoute.Sitemap = STATES.filter((s) => s.priority).map((s) => ({
    url: `${SITE_URL}/${s.slug}-legal-guide/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...utilityRoutes, ...articleRoutes, ...stateRoutes];
}
