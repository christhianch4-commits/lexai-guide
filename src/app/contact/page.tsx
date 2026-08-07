import type { Metadata } from "next";
import LegalDisclaimer from "@/components/ui/LegalDisclaimer";

export const metadata: Metadata = {
  title: { absolute: "Contact LexAI Guide" },
  description: "How to reach the LexAI Guide team — corrections, questions, and partnership inquiries.",
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  return (
    <div className="container-page py-14 md:py-20">
      <div className="article-prose max-w-2xl">
        <h1 className="text-display-h1 mb-6 text-ink">Contact Us</h1>

        <p>
          We read everything sent to us — corrections and factual errors get
          priority, since accuracy is the whole point of this site.
        </p>

        <h2>General Questions &amp; Corrections</h2>
        <p>
          Found something out of date, or think we got a state law wrong?
          Tell us at{" "}
          <a href="mailto:hello@lexaiguide.com">hello@lexaiguide.com</a>. We
          review every correction request against the current statute or
          court rule before updating an article.
        </p>

        <h2>Press &amp; Partnerships</h2>
        <p>
          For media inquiries or partnership questions, reach us at{" "}
          <a href="mailto:partnerships@lexaiguide.com">partnerships@lexaiguide.com</a>.
        </p>

        <h2>Privacy Questions</h2>
        <p>
          For anything related to your data or our{" "}
          <a href="/privacy-policy/">Privacy Policy</a>, email{" "}
          <a href="mailto:privacy@lexaiguide.com">privacy@lexaiguide.com</a>.
        </p>

        <h2>What We Can&rsquo;t Do</h2>
        <p>
          We can&rsquo;t review your specific legal situation or give
          individual legal advice by email — LexAI Guide isn&rsquo;t a law
          firm and doesn&rsquo;t have an attorney-client relationship with
          readers. If you need advice for your specific situation, your
          state or local bar association can usually point you to a free or
          low-cost legal aid clinic.
        </p>

        <div className="mt-8">
          <LegalDisclaimer compact />
        </div>
      </div>
    </div>
  );
}
