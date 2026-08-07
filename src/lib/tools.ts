import type { ToolReview } from "./types";

/**
 * Editorial ratings reflect LexAI Guide's own testing criteria (ease of use,
 * price transparency, breadth of documents, customer support). Prices are
 * approximate and change frequently — always confirm on the provider's site
 * before purchasing. Outbound links below point to each provider's official
 * site; swap in your affiliate tracking parameters at deploy time.
 */
export const TOOLS: ToolReview[] = [
  {
    slug: "legalzoom",
    name: "LegalZoom",
    category: "Full-Service Legal Documents",
    rating: 4.3,
    priceLabel: "From $0 + filing fees",
    bestFor: "First-time LLC formation and simple estate documents",
    pros: [
      "Largest library of state-specific templates",
      "Optional attorney review add-on",
      "Established brand with 20+ years in business",
    ],
    cons: [
      "Upsells can push the final price well above the advertised rate",
      "Customer support quality varies by state",
    ],
    href: "https://www.legalzoom.com",
    logoLetter: "L",
  },
  {
    slug: "rocket-lawyer",
    name: "Rocket Lawyer",
    category: "Subscription Legal Service",
    rating: 4.1,
    priceLabel: "~$39.99/mo membership",
    bestFor: "Ongoing access to a real attorney for quick questions",
    pros: [
      "Membership includes unlimited document edits",
      "Live attorney consultations included in most plans",
      "Strong small-business contract library",
    ],
    cons: [
      "Subscription model costs more if you only need one document",
      "Free trial auto-renews unless canceled manually",
    ],
    href: "https://www.rocketlawyer.com",
    logoLetter: "R",
  },
  {
    slug: "donotpay",
    name: "DoNotPay",
    category: "AI Consumer-Rights Bot",
    rating: 3.4,
    priceLabel: "~$36/mo subscription",
    bestFor: "Disputing bills, canceling subscriptions, fighting fees",
    pros: [
      "Automates repetitive consumer disputes end to end",
      "Broad catalog of scripted use cases",
    ],
    cons: [
      "Not a substitute for an attorney on anything contested",
      "Regulatory scrutiny has narrowed some advertised claims",
    ],
    href: "https://donotpay.com",
    logoLetter: "D",
  },
  {
    slug: "doola",
    name: "Doola",
    category: "LLC Formation + Compliance",
    rating: 4.4,
    priceLabel: "From $297/yr + state fees",
    bestFor: "Non-US founders forming a US LLC remotely",
    pros: [
      "Built specifically for international founders",
      "Bundles EIN, registered agent, and bookkeeping",
      "Responsive chat support",
    ],
    cons: [
      "Pricier than bare-bones formation services",
      "Some add-ons are necessary, not optional, for full compliance",
    ],
    href: "https://www.doola.com",
    logoLetter: "d",
  },
  {
    slug: "northwest-registered-agent",
    name: "Northwest Registered Agent",
    category: "Registered Agent + Formation",
    rating: 4.7,
    priceLabel: "$39 formation + $125/yr agent",
    bestFor: "Privacy-focused founders who want a human to call",
    pros: [
      "No upsell-heavy checkout flow",
      "Real people answer support calls",
      "Free registered-agent year with new formations",
    ],
    cons: [
      "Fewer add-on legal documents than LegalZoom",
      "No live attorney chat feature",
    ],
    href: "https://www.northwestregisteredagent.com",
    logoLetter: "N",
  },
  {
    slug: "zenbusiness",
    name: "ZenBusiness",
    category: "LLC Formation Bundle",
    rating: 4.2,
    priceLabel: "$0 + state fees (paid tiers add features)",
    bestFor: "Budget formations with an easy-to-use dashboard",
    pros: [
      "Genuinely free base formation tier",
      "Clean dashboard for tracking compliance deadlines",
    ],
    cons: [
      "Registered agent service is a recurring add-on cost",
      "Support is primarily chat/email, not phone-first",
    ],
    href: "https://www.zenbusiness.com",
    logoLetter: "Z",
  },
];

export function getToolBySlug(slug: string): ToolReview | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
