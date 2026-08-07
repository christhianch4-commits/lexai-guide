import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Affiliate Disclosure | LexAI Guide" },
  description: "How LexAI Guide makes money and how that affects our recommendations.",
  alternates: { canonical: "/affiliate-disclosure/" },
};

export default function Page() {
  return (
    <div className="container-page py-14 md:py-20">
      <div className="article-prose max-w-2xl">
        <p className="text-caption-mono text-ink-soft">Last updated: August 1, 2026</p>
        <h1 className="text-display-h1 mb-6 text-ink">Affiliate Disclosure</h1>

        <p>
          In accordance with FTC guidelines, here&rsquo;s how LexAI Guide
          makes money and how that affects what you read here.
        </p>

        <h2>Affiliate Links</h2>
        <p>
          Some links on this site — including tools mentioned in our AI
          Legal Tools reviews — are affiliate links. If you click one and
          make a purchase or sign up for a service, we may earn a
          commission at no extra cost to you. This is one of the ways we
          fund free access to our guides, templates, and calculators.
        </p>

        <h2>Advertising</h2>
        <p>
          This site also displays advertising, including through Google
          AdSense. Advertisers have no influence over our editorial content
          or ratings.
        </p>

        <h2>Our Editorial Standards</h2>
        <p>
          Compensation never determines our ratings or recommendations. We
          test tools using the same criteria regardless of whether they
          have an affiliate relationship with us, and we call out real
          drawbacks even for tools we recommend. If a tool isn&rsquo;t good,
          we say so — affiliate relationship or not.
        </p>

        <h2>Questions</h2>
        <p>
          If you have questions about a specific recommendation or our
          relationship with a company mentioned on this site, email{" "}
          <a href="mailto:hello@lexaiguide.com">hello@lexaiguide.com</a>.
        </p>
      </div>
    </div>
  );
}
