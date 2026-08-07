import type { ArticleMeta } from "./types";

// Single source of truth for the site's canonical origin — used for
// canonical tags, Open Graph, JSON-LD, sitemap.xml, and robots.txt.
// Set NEXT_PUBLIC_SITE_URL once a custom domain is live (e.g.
// https://lexaiguide.com) and every one of those updates automatically,
// no code changes needed. Until then this falls back to whatever
// Vercel/Netlify report as the current deployment's real production
// URL, so nothing ever points at a domain the site isn't actually on.
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.URL) return process.env.URL; // Netlify's production URL
  return "https://lexai-guide.vercel.app";
}

const SITE_URL = resolveSiteUrl();
const SITE_NAME = "LexAI Guide";

export function articleSchema(article: ArticleMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    url: `${SITE_URL}${article.href}`,
    author: {
      "@type": "Organization",
      name: `${SITE_NAME} Legal Team`,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${article.href}`,
    },
  };
}

export function howToSchema(name: string, steps: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step,
    })),
  };
}

export function webApplicationSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: "LegalService",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Plain-English legal guides, AI legal tool reviews, and free templates for people who can't afford a lawyer — or don't need one.",
    logo: `${SITE_URL}/logo.png`,
  };
}

export { SITE_URL, SITE_NAME };
