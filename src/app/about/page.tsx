import type { Metadata } from "next";
import LegalDisclaimer from "@/components/ui/LegalDisclaimer";

export const metadata: Metadata = {
  title: { absolute: "About LexAI Guide" },
  description:
    "LexAI Guide explains the American legal system in plain English, with practical tools to solve problems without a lawyer — or know when you need one.",
  alternates: { canonical: "/about/" },
};

export default function Page() {
  return (
    <div className="container-page py-14 md:py-20">
      <div className="article-prose max-w-2xl">
        <h1 className="text-display-h1 mb-6 text-ink">About LexAI Guide</h1>

        <p>
          Most legal problems aren&rsquo;t complicated — they&rsquo;re just
          unfamiliar. A withheld security deposit, an unpaid invoice, a
          confusing termination. The law usually has a clear answer; the
          hard part is knowing where to look and whether you actually need
          to pay someone $300 an hour to find out.
        </p>
        <p>
          LexAI Guide exists to close that gap. We publish plain-English
          guides, test the AI legal tools flooding the market, and build
          free calculators and templates so you can handle routine legal
          problems yourself — and recognize quickly when a situation has
          outgrown what a template can handle.
        </p>

        <h2>How We Work</h2>
        <ul>
          <li>
            <strong>We test what we recommend.</strong> Our AI tool reviews
            are based on running the same tasks through every platform we
            cover, checkout flow included.
          </li>
          <li>
            <strong>We cite real sources.</strong> State-specific figures —
            small claims limits, deposit deadlines, statutes of limitations
            — are compiled from published court and statutory information,
            reviewed on a regular basis.
          </li>
          <li>
            <strong>We tell you when to stop reading and call a lawyer.</strong>{" "}
            Every guide includes guidance on when a situation is too
            high-stakes or contested for a DIY approach.
          </li>
        </ul>

        <h2>What We&rsquo;re Not</h2>
        <p>
          LexAI Guide is not a law firm, and nothing on this site is legal
          advice. We don&rsquo;t represent you, file documents on your
          behalf, or form an attorney-client relationship with anyone who
          reads our content. Think of us as the research assistant who
          gets you 90% of the way there — and tells you honestly when you
          need the other 10% from a licensed attorney.
        </p>
        <p>
          For the specifics of how we research and fact-check every guide,
          see our <a href="/editorial-policy/">Editorial Policy</a>. Spot
          something wrong? <a href="/contact/">Let us know</a>.
        </p>

        <div className="mt-8">
          <LegalDisclaimer />
        </div>
      </div>
    </div>
  );
}
