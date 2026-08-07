import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | LexAI Guide" },
  description: "How LexAI Guide collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function Page() {
  return (
    <div className="container-page py-14 md:py-20">
      <div className="article-prose max-w-2xl">
        <p className="text-caption-mono text-ink-soft">Last updated: August 1, 2026</p>
        <h1 className="text-display-h1 mb-6 text-ink">Privacy Policy</h1>

        <p>
          LexAI Guide (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          respects your privacy. This policy explains what information we
          collect when you use lexaiguide.com (the &ldquo;Site&rdquo;), how
          we use it, who we share it with, and the choices you have.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>Information you provide.</strong> If you subscribe to
            our newsletter or fill in a template generator (like the demand
            letter tool), we process the information you type in. Template
            generators run entirely in your browser — the document text you
            enter is not sent to or stored on our servers.
          </li>
          <li>
            <strong>Usage data.</strong> Like most websites, we automatically
            collect standard analytics data — pages visited, approximate
            location by IP address, device and browser type, and referral
            source — through tools like Google Analytics.
          </li>
          <li>
            <strong>Cookies and similar technologies.</strong> We and our
            advertising partners use cookies, web beacons, and similar
            technologies for site functionality, analytics, and — where you
            have consented — ad personalization. See{" "}
            <em>Advertising &amp; Cookies</em> below.
          </li>
        </ul>

        <h2>Advertising &amp; Cookies</h2>
        <p>
          This Site displays ads served by Google AdSense and may work with
          other third-party advertising networks. Google and other
          third-party vendors use cookies to serve ads based on a
          user&rsquo;s prior visits to this and other websites. Google&rsquo;s
          use of advertising cookies enables it and its partners to serve
          ads to our visitors based on their visit to this site and/or
          other sites on the internet.
        </p>
        <p>You have choices about this:</p>
        <ul>
          <li>
            Opt out of personalized advertising through{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>
            .
          </li>
          <li>
            Opt out of many third-party vendors&rsquo; use of cookies for
            personalized advertising via{" "}
            <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">
              aboutads.info
            </a>{" "}
            or the{" "}
            <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer">
              Your Online Choices
            </a>{" "}
            page (EU visitors).
          </li>
          <li>
            If you&rsquo;re visiting from the UK, EEA, or Switzerland, we ask
            for your consent before loading advertising or non-essential
            cookies, through the consent banner shown on your first visit.
            You can change your choice at any time using the{" "}
            <span className="font-medium text-ink">
              &ldquo;Cookie Settings&rdquo;
            </span>{" "}
            link in the footer.
          </li>
        </ul>

        <h2>How We Use Information</h2>
        <p>
          We use collected information to operate and improve the Site,
          understand which content is useful, respond to inquiries, serve
          and measure advertising, and send newsletter updates to
          subscribers who opt in. We do not sell your personal information
          for money.
        </p>

        <h2>California Privacy Rights (CCPA/CPRA)</h2>
        <p>
          California residents have the right to know what personal
          information we collect, request deletion of it, and opt out of
          its &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; as those terms are
          defined under California law — which can include the use of
          advertising cookies. You can exercise the opt-out using the cookie
          controls described above, or by emailing{" "}
          <a href="mailto:privacy@lexaiguide.com">privacy@lexaiguide.com</a>.
        </p>

        <h2>Children&rsquo;s Privacy</h2>
        <p>
          This Site is not directed at children under 13, and we do not
          knowingly collect personal information from children under 13. If
          you believe a child has provided us with personal information,
          contact us and we&rsquo;ll delete it.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our articles link to third-party tools and services, some of which
          are affiliate links (see our{" "}
          <a href="/affiliate-disclosure/">Affiliate Disclosure</a>). We
          aren&rsquo;t responsible for the privacy practices of external
          sites you visit from our links.
        </p>

        <h2>Data Retention &amp; Security</h2>
        <p>
          We retain analytics and newsletter data only as long as needed for
          the purposes described above, and use industry-standard measures
          to protect it. No method of transmission over the internet is
          100% secure, so we can&rsquo;t guarantee absolute security.
        </p>

        <h2>Your Choices</h2>
        <p>
          You can disable cookies in your browser settings, unsubscribe from
          our newsletter using the link in any email, and opt out of
          personalized ads through the links above.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Material changes will
          be reflected by an updated &ldquo;Last updated&rdquo; date at the
          top of this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about this policy or your data? Email us at{" "}
          <a href="mailto:privacy@lexaiguide.com">privacy@lexaiguide.com</a>{" "}
          or visit our <a href="/contact/">Contact page</a>.
        </p>
      </div>
    </div>
  );
}
