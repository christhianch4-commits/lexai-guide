import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Editorial Policy | LexAI Guide" },
  description:
    "How LexAI Guide researches, writes, reviews, and updates its legal guides and AI tool reviews.",
  alternates: { canonical: "/editorial-policy/" },
};

export default function Page() {
  return (
    <div className="container-page py-14 md:py-20">
      <div className="article-prose max-w-2xl">
        <p className="text-caption-mono text-ink-soft">Last updated: August 1, 2026</p>
        <h1 className="text-display-h1 mb-6 text-ink">Editorial Policy</h1>

        <p>
          Legal content is high-stakes: get a deadline wrong and someone
          misses their window to file. Here&rsquo;s exactly how we try to
          make sure that doesn&rsquo;t happen — how articles get written,
          checked, and kept current.
        </p>

        <h2>Where Our Information Comes From</h2>
        <p>
          State-specific figures — small claims limits, security deposit
          deadlines, statutes of limitations, notice periods — are compiled
          from published state statutes and official court self-help
          resources. Every article draws from primary sources first
          (statute text, court rules) and treats secondary summaries as a
          starting point to verify, not a source to copy.
        </p>

        <h2>How We Review AI Tools</h2>
        <p>
          Our AI Legal Tools reviews are based on hands-on testing, not
          marketing copy. For formation services, we run an actual
          formation through the live checkout flow and record every fee
          presented before payment. For document and contract tools, we run
          the same test document through each platform to compare what gets
          flagged. Ratings reflect that testing, not compensation — see our{" "}
          <a href="/affiliate-disclosure/">Affiliate Disclosure</a> for how
          we&rsquo;re funded.
        </p>

        <h2>The Review Process</h2>
        <ul>
          <li>
            <strong>Drafting.</strong> Articles are written to explain the
            underlying law in plain English, not to reproduce statute
            language verbatim.
          </li>
          <li>
            <strong>Legal accuracy check.</strong> Every state-specific
            claim is checked against the current statute or court rule
            before publication.
          </li>
          <li>
            <strong>Plain-language check.</strong> If a paragraph needs a
            law degree to parse, it gets rewritten.
          </li>
        </ul>

        <h2>How Often We Update</h2>
        <p>
          Laws change every legislative session. We recheck state-specific
          figures at least annually, and sooner when we&rsquo;re notified of
          a change — see the &ldquo;Last updated&rdquo; date at the top of
          every article. If you spot something outdated,{" "}
          <a href="/contact/">tell us</a> — corrections get priority over
          new content.
        </p>

        <h2>What This Site Is Not</h2>
        <p>
          Nothing on LexAI Guide is a substitute for advice from a licensed
          attorney about your specific situation. We aim to get you far
          enough to solve a straightforward problem yourself, or to know
          precisely what to bring to an attorney when you need one.
        </p>
      </div>
    </div>
  );
}
