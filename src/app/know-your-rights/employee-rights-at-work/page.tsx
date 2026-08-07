import type { Metadata } from "next";
import Link from "next/link";
import ArticleHeader from "@/components/article/ArticleHeader";
import TableOfContents from "@/components/article/TableOfContents";
import RelatedArticles from "@/components/article/RelatedArticles";
import VerdictBox from "@/components/article/VerdictBox";
import QuickAnswerBox from "@/components/ui/QuickAnswerBox";
import AdUnit from "@/components/ui/AdUnit";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";
import { getArticle, ARTICLES } from "@/lib/articles";
import { articleSchema } from "@/lib/schema";

const article = getArticle("know-your-rights", "employee-rights-at-work")!;

export const metadata: Metadata = {
  title: { absolute: article.seoTitle },
  description: article.metaDescription,
  alternates: { canonical: article.href },
  openGraph: {
    type: "article",
    title: article.seoTitle,
    description: article.metaDescription,
    publishedTime: article.datePublished,
    modifiedTime: article.dateModified,
  },
};

const headings = [
  { id: "at-will", text: "What At-Will Actually Means" },
  { id: "discrimination", text: "Discrimination Protections" },
  { id: "wages", text: "Wage & Hour Rights" },
  { id: "breaks", text: "Break & Meal Period Rights" },
  { id: "retaliation", text: "Retaliation & Whistleblower Protections" },
  { id: "safety", text: "Workplace Safety" },
  { id: "leave", text: "Family & Medical Leave" },
  { id: "documenting", text: "What to Document" },
  { id: "faq", text: "Frequently Asked Questions" },
  { id: "bottom-line", text: "The Bottom Line" },
];

const faqs = [
  {
    question: "Can I be fired for no reason at all?",
    answer:
      "In every state except Montana, employment is \"at-will,\" meaning yes — you generally can be fired without a stated reason. What's illegal is being fired for a prohibited reason: your race, sex, religion, disability, age (40+), pregnancy, or in retaliation for reporting a violation or exercising a legal right.",
  },
  {
    question: "Is my employer required to pay overtime?",
    answer:
      "If you're a non-exempt employee (most hourly workers, and many salaried workers below the federal exemption threshold), yes — 1.5x your regular rate for hours worked beyond 40 in a week under the FLSA. Use our overtime calculator to see exactly what you're owed.",
  },
  {
    question: "Can my employer cut my pay without telling me?",
    answer:
      "Generally, an employer can change your pay rate going forward with notice, but can't retroactively reduce pay for hours already worked. Some states require advance written notice of any pay change — check your state's specific notice requirement.",
  },
  {
    question: "What counts as illegal retaliation?",
    answer:
      "If your employer punishes you — firing, demotion, cut hours, harassment — for reporting discrimination, filing a safety complaint, requesting legal leave, or discussing wages with coworkers, that's retaliation, and it's illegal even in an at-will state.",
  },
  {
    question: "Do I have the right to know why I was fired?",
    answer:
      "Not usually. Most states don't require an employer to give a reason for termination. A handful of states do require a written statement upon request. Regardless, if you suspect the real reason was discriminatory or retaliatory, you can still pursue a claim even without an official explanation.",
  },
];

export default function Page() {
  const related = ARTICLES.filter(
    (a) => a.href !== article.href && a.status === "published"
  ).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <div className="container-page">
        <ArticleHeader
          article={article}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Know Your Rights", href: "/know-your-rights/" },
            { label: article.title },
          ]}
        />

        <div className="grid gap-12 pb-20 lg:grid-cols-[220px_1fr]">
          <TableOfContents headings={headings} />

          <div className="min-w-0 max-w-3xl">
            <QuickAnswerBox
              points={[
                "At-will means you can be fired without cause — but never for an illegal reason like discrimination or retaliation.",
                "Non-exempt employees are entitled to overtime (1.5x pay past 40 hrs/week) under federal law, regardless of what your employer calls your position.",
                "Retaliation for reporting a violation, requesting leave, or discussing wages with coworkers is illegal in every state, at-will or not.",
              ]}
            />

            <AdUnit position="hero" />

            <div className="article-prose">
              <p>
                &ldquo;At-will employment&rdquo; gets treated like it means
                employers can do whatever they want. It doesn&rsquo;t. It
                means an employer doesn&rsquo;t need a <em>reason</em> to end
                the relationship — but a whole framework of federal and
                state law still restricts <em>which</em> reasons are off
                limits, and sets hard floors on pay, breaks, and safety that
                apply regardless of at-will status.
              </p>
              <p>
                Here&rsquo;s where that line actually sits, in plain
                English.
              </p>

              <h2 id="at-will">What At-Will Actually Means</h2>
              <p>
                Every state except Montana follows at-will employment by
                default: absent a contract saying otherwise, either you or
                your employer can end the relationship at any time, for
                almost any reason, or no reason. Montana is the sole
                exception — after a probationary period, its Wrongful
                Discharge from Employment Act requires &ldquo;good
                cause&rdquo; for termination.
              </p>
              <p>
                But &ldquo;almost any reason&rdquo; excludes a long list of
                protected categories. Being fired without explanation isn&rsquo;t
                automatically illegal — being fired <em>because of</em> your
                race, sex, religion, national origin, disability, age (40+),
                pregnancy, or in retaliation for a protected action, is.
              </p>

              <h2 id="discrimination">Discrimination Protections</h2>
              <p>
                Federal law — primarily Title VII of the Civil Rights Act,
                the Americans with Disabilities Act, and the Age
                Discrimination in Employment Act — prohibits employment
                discrimination based on:
              </p>
              <ul>
                <li>Race, color, or national origin</li>
                <li>Sex (including pregnancy, and sexual orientation/gender identity)</li>
                <li>Religion</li>
                <li>Disability</li>
                <li>Age, if you&rsquo;re 40 or older</li>
                <li>Genetic information</li>
              </ul>
              <p>
                Most states layer additional protected categories on top —
                marital status, source of income, and more, depending on the
                state. These protections apply to hiring, firing, pay,
                promotions, and virtually every other term of employment.
              </p>

              <h2 id="wages">Wage &amp; Hour Rights</h2>
              <p>
                The federal Fair Labor Standards Act (FLSA) sets the floor:
                minimum wage, and time-and-a-half overtime pay for
                non-exempt employees who work more than 40 hours in a
                workweek. &ldquo;Salaried&rdquo; doesn&rsquo;t automatically
                mean exempt from overtime — exemption depends on both salary
                level and actual job duties. Many states set a minimum wage
                higher than the federal rate, and the higher number always
                applies.
              </p>
              <p>
                Curious what you&rsquo;re actually owed? Run the numbers on
                our{" "}
                <Link href="/calculators/overtime-pay/">
                  Overtime Pay Calculator
                </Link>
                .
              </p>

              <AdUnit position="mid-1" />

              <h2 id="breaks">Break &amp; Meal Period Rights</h2>
              <p>
                Federal law doesn&rsquo;t require meal or rest breaks at
                all, but roughly two dozen states do — with specific rules
                about how long a shift triggers a required break, and
                whether it must be paid. Where breaks are legally required,
                employers generally can&rsquo;t require you to work through
                them without pay.
              </p>

              <h2 id="retaliation">Retaliation &amp; Whistleblower Protections</h2>
              <p>
                It is illegal in every state for an employer to punish you
                for:
              </p>
              <ul>
                <li>Reporting discrimination or harassment.</li>
                <li>Filing a workers&rsquo; compensation claim.</li>
                <li>Reporting a safety violation to OSHA.</li>
                <li>Requesting legally protected leave.</li>
                <li>
                  Discussing your wages with coworkers — protected under the
                  National Labor Relations Act for most employees, even in
                  non-union workplaces.
                </li>
                <li>Serving on a jury or voting.</li>
              </ul>
              <p>
                Retaliation claims often succeed on timing alone — adverse
                action shortly after a protected activity is strong
                circumstantial evidence, even without a &ldquo;smoking
                gun.&rdquo;
              </p>

              <AdUnit position="mid-2" />

              <h2 id="safety">Workplace Safety</h2>
              <p>
                The Occupational Safety and Health Act entitles you to a
                workplace free of recognized hazards. You have the right to
                request an OSHA inspection, and your employer cannot legally
                retaliate against you for doing so. Serious, willful safety
                violations can result in real penalties against an employer
                — this isn&rsquo;t just a formality.
              </p>

              <h2 id="leave">Family &amp; Medical Leave</h2>
              <p>
                The federal Family and Medical Leave Act (FMLA) entitles
                eligible employees at covered employers (generally 50+
                employees) to up to 12 weeks of unpaid, job-protected leave
                for a serious health condition, a new child, or to care for
                an immediate family member. Many states have their own,
                often more generous, family leave laws layered on top —
                including several with paid leave programs.
              </p>

              <h2 id="documenting">What to Document If You Think Your Rights Were Violated</h2>
              <ul>
                <li>Dates, times, and exact quotes from relevant conversations.</li>
                <li>Names of witnesses.</li>
                <li>Copies of relevant emails, texts, schedules, and pay stubs.</li>
                <li>Your performance reviews, especially if termination is framed as performance-related.</li>
                <li>Any HR complaint you filed, and the response (or lack of one).</li>
              </ul>
              <p>
                This record matters whether you end up filing an EEOC
                charge, a state labor complaint, or just negotiating an
                exit on better terms.
              </p>

              <h2 id="faq">Frequently Asked Questions</h2>
            </div>

            <FAQAccordion items={faqs} />

            <div className="mt-10">
              <VerdictBox>
                <p>
                  At-will gives your employer wide latitude on <em>how</em>{" "}
                  and <em>when</em> to end things — it never gives them
                  license to discriminate, retaliate, or ignore wage and
                  safety law. If something feels off, start documenting
                  immediately, and check{" "}
                  <Link href="/calculators/overtime-pay/">
                    what you&rsquo;re owed
                  </Link>{" "}
                  before assuming it&rsquo;s not worth pursuing.
                </p>
              </VerdictBox>
            </div>

            <AdUnit position="above-footer" />
          </div>
        </div>

        <RelatedArticles articles={related} />
      </div>
    </>
  );
}
