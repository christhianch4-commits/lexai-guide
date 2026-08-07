import type { Pillar } from "./types";

export const PILLARS: Pillar[] = [
  {
    slug: "ai-legal-tools",
    label: "AI Legal Tools",
    shortLabel: "AI Tools",
    icon: "🤖",
    href: "/ai-legal-tools/",
    description: "Honest, tested reviews of AI contract tools and legal services.",
  },
  {
    slug: "self-help-guides",
    label: "Self-Help Guides",
    shortLabel: "Self-Help",
    icon: "📚",
    href: "/self-help-guides/",
    description: "Step-by-step playbooks for handling legal problems yourself.",
  },
  {
    slug: "state-guides",
    label: "By State",
    shortLabel: "By State",
    icon: "🗺️",
    href: "/states/",
    description: "State-specific limits, deadlines, and tenant/worker protections.",
  },
  {
    slug: "legal-templates",
    label: "Templates",
    shortLabel: "Templates",
    icon: "📄",
    href: "/legal-templates/",
    description: "Free, customizable legal documents you can download today.",
  },
  {
    slug: "calculators",
    label: "Calculators",
    shortLabel: "Calculators",
    icon: "🧮",
    href: "/calculators/",
    description: "Instant answers on limits, deadlines, and money owed.",
  },
  {
    slug: "know-your-rights",
    label: "Know Your Rights",
    shortLabel: "Know Rights",
    icon: "⚡",
    href: "/know-your-rights/",
    description: "The protections you have as a consumer, tenant, and employee.",
  },
];

export function getPillar(slug: Pillar["slug"]): Pillar {
  const pillar = PILLARS.find((p) => p.slug === slug);
  if (!pillar) throw new Error(`Unknown pillar: ${slug}`);
  return pillar;
}
