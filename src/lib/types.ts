// Shared content types for LexAI Guide.

export type PillarSlug =
  | "ai-legal-tools"
  | "self-help-guides"
  | "know-your-rights"
  | "legal-templates"
  | "calculators"
  | "state-guides";

export interface Pillar {
  slug: PillarSlug;
  label: string;
  shortLabel: string;
  icon: string;
  href: string;
  description: string;
}

export type ArticleStatus = "published" | "coming-soon";
export type SearchIntent = "informational" | "comparative" | "transactional";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleMeta {
  slug: string; // full path segment after the pillar, e.g. "best-ai-legal-tools-2026"
  pillar: PillarSlug;
  href: string; // full route
  title: string; // H1 / SEO title root
  seoTitle: string;
  metaDescription: string;
  dek: string; // one-line hook shown on cards
  intent: SearchIntent;
  keywordDifficulty: number;
  estRpm: number; // estimated RPM in USD, editorial projection
  status: ArticleStatus;
  readingTime: number; // minutes
  datePublished: string; // ISO date
  dateModified: string; // ISO date
  appliesTo: string; // "All States" | "California" | etc.
  wordCountTarget: string;
}

export interface StateData {
  slug: string; // "california"
  name: string; // "California"
  abbr: string; // "CA"
  priority: boolean;
  smallClaimsLimit: number;
  smallClaimsCourtName: string;
  securityDepositDeadlineDays: number;
  statuteOfLimitationsContractYears: number;
  atWillException: boolean; // true only for Montana
  tenantNoticeToQuitDays: number;
  summary: string;
}

export interface ToolReview {
  slug: string;
  name: string;
  category: string;
  rating: number; // out of 5
  priceLabel: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  href: string;
  logoLetter: string;
}
