# LexAI Guide

"Know Your Rights. Skip the Bill." — a legal-tech content site built with
Next.js 16 (App Router) and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build + static generation
npm run start   # serve the production build
npm run lint    # ESLint
```

## What's Built

- **Design system** — `src/app/globals.css` defines the full token set
  (colors, type scale, motion, the signature vertical-line element) via
  Tailwind v4's `@theme`.
- **Content registry** — `src/lib/articles.ts` is the single source of
  truth for every article across all 6 pillars. Entries are marked
  `status: "published" | "coming-soon"`, so pillar pages and the homepage
  only ever link to real pages — nothing 404s.
- **Data** — `src/lib/states.ts` (50-state legal reference data) and
  `src/lib/tools.ts` (AI tool reviews).
- **3 full articles**, one per representative pillar:
  - `/ai-legal-tools/best-ai-legal-tools-2026/`
  - `/self-help-guides/how-to-write-demand-letter/`
  - `/know-your-rights/tenant-rights-by-state/`
- **6 pillar index pages** (`/ai-legal-tools/`, `/self-help-guides/`,
  `/know-your-rights/`, `/legal-templates/`, `/calculators/`, `/states/`).
- **Interactive US state map** — `src/components/map/USStateMap.tsx`, a
  schematic tile-grid cartogram (clickable, hover info panel, mobile
  dropdown fallback) covering all 50 states.
- **50 state guide pages** at `/[state]-legal-guide/`, statically
  generated from `src/app/state-guide/[state]/page.tsx` via a rewrite in
  `next.config.ts` (App Router can't mix a dynamic segment with a literal
  suffix in one folder name, so the public URL is rewritten internally).
- **2 working calculators** — Small Claims Limit and Overtime Pay
  (FLSA), both client components with instant results.
- **A real template generator** — `/legal-templates/demand-letter-template/`
  has a live preview and generates an actual downloadable PDF (via
  `jspdf`, lazy-loaded) plus a copy-to-clipboard button.
- **SEO** — per-page metadata, `Article` / `FAQPage` / `HowTo` /
  `WebApplication` JSON-LD schema, `sitemap.ts`, `robots.ts`.

## Extending the Content Roadmap

Every "Coming Soon" card on the site corresponds to an entry in
`src/lib/articles.ts` with `status: "coming-soon"`. To publish one:

1. Write the article at the route in its `href` field (copy the structure
   of an existing article in that pillar as a starting template).
   Reusable pieces: `ArticleHeader`, `TableOfContents`, `QuickAnswerBox`,
   `FAQAccordion`, `VerdictBox`, `AdUnit`, `RelatedArticles`.
2. Flip `status` to `"published"` in the registry.

The homepage, pillar pages, and related-article widgets pick it up
automatically — no other wiring needed.

## Before Going Live

- Set `NEXT_PUBLIC_ADSENSE_CLIENT` once you have an approved AdSense
  account — `AdUnit` renders labeled placeholders until then.
- Swap the placeholder outbound links in `src/lib/tools.ts` for real
  affiliate tracking links.
- Replace `lexaiguide.com` in `src/app/layout.tsx` / `src/lib/schema.ts`
  and the contact emails in the footer + legal pages with real details.
- Wire the newsletter form (`src/components/home/NewsletterCTA.tsx`) to
  an actual ESP — it's UI-only today.
