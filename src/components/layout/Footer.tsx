import Link from "next/link";
import CookieSettingsLink from "@/components/layout/CookieSettingsLink";
import { PILLARS } from "@/lib/pillars";
import { PRIORITY_STATES } from "@/lib/states";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist bg-ink text-paper">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-xl font-bold text-paper">LexAI</span>
              <span className="font-body text-lg font-light text-paper/70">Guide</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
              Know Your Rights. Skip the Bill. Plain-English legal guides, AI tool
              reviews, and free templates for people who can&rsquo;t afford a
              lawyer — or don&rsquo;t need one.
            </p>
            <p className="signature-line mt-6 text-xs text-paper/50">
              <span className="text-paper/70">140+</span> guides ·{" "}
              <span className="text-paper/70">50</span> states ·{" "}
              <span className="text-paper/70">free</span> templates
            </p>
          </div>

          <div>
            <h3 className="text-caption-mono uppercase tracking-wider text-paper/45">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {PILLARS.map((pillar) => (
                <li key={pillar.slug}>
                  <Link
                    href={pillar.href}
                    className="text-sm text-paper/75 transition-colors duration-200 hover:text-paper"
                  >
                    {pillar.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-caption-mono uppercase tracking-wider text-paper/45">
              Popular States
            </h3>
            <ul className="mt-4 space-y-3">
              {PRIORITY_STATES.slice(0, 6).map((state) => (
                <li key={state.slug}>
                  <Link
                    href={`/${state.slug}-legal-guide/`}
                    className="text-sm text-paper/75 transition-colors duration-200 hover:text-paper"
                  >
                    {state.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-caption-mono uppercase tracking-wider text-paper/45">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/privacy-policy/" className="text-sm text-paper/75 transition-colors duration-200 hover:text-paper">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use/" className="text-sm text-paper/75 transition-colors duration-200 hover:text-paper">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure/" className="text-sm text-paper/75 transition-colors duration-200 hover:text-paper">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-sm text-paper/75 transition-colors duration-200 hover:text-paper">
                  About LexAI Guide
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy/" className="text-sm text-paper/75 transition-colors duration-200 hover:text-paper">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-sm text-paper/75 transition-colors duration-200 hover:text-paper">
                  Contact
                </Link>
              </li>
              <li>
                <CookieSettingsLink />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-lg border border-paper/15 bg-paper/[0.04] p-5">
          <p className="font-mono text-[14px] leading-relaxed tracking-[0.01em] text-paper/60">
            <strong className="text-paper/80">⚖ Legal Disclaimer:</strong> LexAI Guide
            provides general legal information for educational purposes only. It is
            not legal advice, and using this site does not create an
            attorney-client relationship. Laws vary by state and change over
            time — verify anything important with a licensed attorney or your
            local court before acting.
          </p>
          <p className="mt-3 font-mono text-[14px] leading-relaxed tracking-[0.01em] text-paper/60">
            <strong className="text-paper/80">Affiliate Disclosure:</strong> This
            site contains affiliate links. If you click and purchase, we may
            earn a commission at no extra cost to you. This doesn&rsquo;t
            affect our editorial independence or recommendations.
          </p>
        </div>

        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 border-t border-paper/10 pt-8 text-xs text-paper/40 sm:flex-row sm:items-center">
          <p>© {year} LexAI Guide. All rights reserved.</p>
          <p className="text-caption-mono">Not a law firm. Not a substitute for an attorney.</p>
        </div>
      </div>
    </footer>
  );
}
