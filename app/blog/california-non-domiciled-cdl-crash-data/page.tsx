import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl =
  "https://www.onenesstransport.com/blog/california-non-domiciled-cdl-crash-data";
const articleImage =
  "https://www.onenesstransport.com/images/california-non-domiciled-cdl-court-case.png";

export const metadata: Metadata = {
  title: "California Non-Domiciled CDL Crash Data: What It Shows",
  description:
    "California reports lower 2022–2024 crash involvement among temporary-resident CDL holders. See the figures, limits, FMCSA rule, and court status.",
  keywords: [
    "California non-domiciled CDL crash data",
    "FMCSA non-domiciled CDL rule",
    "California CDL lawsuit",
    "non-domiciled CDL court case",
    "Rivera Lujan v FMCSA",
  ],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title: "California Non-Domiciled CDL Crash Data: What It Shows",
    description:
      "A point-by-point review of California's crash analysis, FMCSA's licensing concerns, and the ongoing federal court challenge.",
    publishedTime: "2026-08-16T15:00:00-05:00",
    modifiedTime: "2026-08-16T15:00:00-05:00",
    authors: ["ONENESS TRANSPORT LLC"],
    images: [
      {
        url: articleImage,
        width: 1672,
        height: 941,
        alt: "Dry van truck on an interstate highway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "California Non-Domiciled CDL Crash Data: What It Shows",
    description:
      "The numbers, their limits, FMCSA's rule, and the court case—explained point by point.",
    images: [articleImage],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "California Non-Domiciled CDL Crash Data: What It Shows",
  description:
    "A point-by-point review of California's 2022–2024 CDL crash analysis, the limits of the data, FMCSA's final rule, and the pending federal court challenge.",
  image: [articleImage],
  datePublished: "2026-08-16T15:00:00-05:00",
  dateModified: "2026-08-16T15:00:00-05:00",
  author: {
    "@type": "Organization",
    name: "ONENESS TRANSPORT LLC",
    url: "https://www.onenesstransport.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ONENESS TRANSPORT LLC",
    logo: {
      "@type": "ImageObject",
      url: "https://www.onenesstransport.com/logos/logo-header.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.onenesstransport.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.onenesstransport.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "California Non-Domiciled CDL Crash Data",
      item: articleUrl,
    },
  ],
};

const linkClass =
  "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function CaliforniaNonDomiciledCdlArticle() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <header className="bg-slate-950 px-5 pb-16 pt-12 text-white lg:pb-20 lg:pt-16">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
              <Link href="/" className="hover:text-orange-400">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/blog" className="hover:text-orange-400">Blog</Link>
            </nav>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Trucking Regulation News
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              California Says Non-Domiciled CDL Holders Had Lower Crash Rates
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              What California&apos;s 2022–2024 figures show, what they do not prove,
              why FMCSA still tightened the rules, and where the court fight stands.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>By ONENESS TRANSPORT LLC</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime="2026-08-16">August 16, 2026</time>
              <span aria-hidden="true">&middot;</span>
              <span>9 min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto -mt-8 max-w-6xl px-5">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
            <Image
              src="/images/california-non-domiciled-cdl-court-case.png"
              alt="Editorial illustration of a dry van truck, California, crash data, a CDL card, and courthouse scales"
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 text-[1.0625rem] leading-8 text-slate-700">
            <p className="text-xl leading-9 text-slate-700">
              A California DMV analysis has become a central talking point in the
              national dispute over non-domiciled commercial driver&apos;s licenses.
              California says its data shows temporary legal residents with CDLs were
              involved in fewer crashes per licensed driver than U.S. citizen CDL
              holders during the period studied.
            </p>
            <p className="mt-6">
              That is significant evidence, but it does not settle the entire policy
              debate. FMCSA says its final rule addresses the reliability of driver
              vetting and state licensing procedures, not simply a comparison of recent
              crash totals. Here is the issue point by point.
            </p>

            <section className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
                The short version
              </p>
              <ul className="mt-5 space-y-3">
                <Bullet>California&apos;s analysis covered police-reported crashes from 2022 through 2024.</Bullet>
                <Bullet>It reported about 20% fewer crashes and about 25% fewer fatal-crash involvements per licensed driver for temporary legal residents.</Bullet>
                <Bullet>The study was not adjusted for miles driven and does not by itself establish who caused each crash.</Bullet>
                <Bullet>FMCSA&apos;s final rule focuses on foreign driving-history checks, document verification, state compliance, and uniform issuance rules.</Bullet>
                <Bullet>The rule remains in effect while a federal appeals court considers a challenge; oral argument is scheduled for September 15, 2026.</Bullet>
              </ul>
            </section>

            <ArticleSection number="1" title="What California's analysis found">
              <p>
                According to a California DMV research analysis described in court
                filings, the state compared 602,257 CDL holders classified as U.S.
                citizens with 69,250 classified as temporary legal residents. The
                population included current licenses and credentials that had expired
                within the prior three years.
              </p>
              <p className="mt-5">
                Researchers matched those groups to police-reported crash records from
                2022, 2023, and 2024. The review identified 97,960 crash records
                involving 85,394 individuals. The results were calculated per 100
                licensed drivers.
              </p>
              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm sm:text-base">
                  <caption className="sr-only">
                    California DMV crash rates per 100 licensed CDL holders, 2022 to 2024
                  </caption>
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th scope="col" className="px-4 py-4 sm:px-6">Driver group</th>
                      <th scope="col" className="px-4 py-4 sm:px-6">All crashes</th>
                      <th scope="col" className="px-4 py-4 sm:px-6">Fatal crashes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <th scope="row" className="px-4 py-4 font-bold text-slate-950 sm:px-6">
                        U.S. citizen CDL holders
                      </th>
                      <td className="px-4 py-4 sm:px-6">14.8 per 100</td>
                      <td className="px-4 py-4 sm:px-6">0.12 per 100</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <th scope="row" className="px-4 py-4 font-bold text-slate-950 sm:px-6">
                        Temporary legal residents
                      </th>
                      <td className="px-4 py-4 sm:px-6">11.9 per 100</td>
                      <td className="px-4 py-4 sm:px-6">0.09 per 100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-5 text-sm text-slate-500">
                Source: California DMV analysis as reported from the court filing by{" "}
                <a
                  href="https://www.overdriveonline.com/regulations/article/15831163/california-says-nondomiciled-drivers-are-safer-than-us-citizens-court-filings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Overdrive
                </a>
                . Percentages are per licensed driver, not per mile driven.
              </p>
            </ArticleSection>

            <ArticleSection number="2" title="Why the headline needs careful wording">
              <p>
                The numbers support a precise statement: in California&apos;s dataset,
                temporary legal residents had lower crash involvement per licensed
                driver during 2022–2024. They do not establish that every non-domiciled
                driver is safer than every citizen driver, or that the same result would
                appear in every state.
              </p>
              <p className="mt-5">Several limitations matter:</p>
              <ul className="mt-5 space-y-3 rounded-2xl bg-slate-50 p-6">
                <Bullet>The calculation used licensed drivers as the denominator, not vehicle miles traveled, hours driven, routes, or type of commercial work.</Bullet>
                <Bullet>A police-reported crash record shows involvement; it does not necessarily establish fault.</Bullet>
                <Bullet>The study covers California records and a three-year period, so it is not automatically a nationwide result.</Bullet>
                <Bullet>It stops at 2024 and therefore does not include crashes that occurred in 2025 and later.</Bullet>
              </ul>
              <p className="mt-5">
                The fair conclusion is that California&apos;s data challenges a broad
                assumption that non-domiciled CDL holders, as a group, produced worse
                crash outcomes during the years analyzed. More exposure-adjusted and
                multi-state research would be needed for a broader causal claim.
              </p>
            </ArticleSection>

            <ArticleSection number="3" title="What FMCSA's final rule actually changes">
              <p>
                FMCSA published its final rule on February 13, 2026, with an effective
                date of March 16, 2026. It sharply narrows the foreign-domiciled drivers
                who can receive or renew non-domiciled CLPs and CDLs, generally limiting
                eligibility to specified H-2A, H-2B, and E-2 nonimmigrant categories,
                along with narrow circumstances described in the rule.
              </p>
              <p className="mt-5">The rule also requires state licensing agencies to:</p>
              <ul className="mt-5 space-y-3 rounded-2xl border border-slate-200 p-6">
                <Bullet>Review an unexpired foreign passport and Form I-94/I-94A.</Bullet>
                <Bullet>Verify the applicant&apos;s status through the federal SAVE system.</Bullet>
                <Bullet>Retain application documents for at least two years.</Bullet>
                <Bullet>Limit the credential to the I-94 expiration date or one year, whichever is sooner.</Bullet>
                <Bullet>Require the applicant to appear in person for renewal.</Bullet>
                <Bullet>Downgrade the credential if the state learns that the holder is no longer eligible.</Bullet>
              </ul>
              <p className="mt-5">
                Those requirements are set out in the{" "}
                <a
                  href="https://www.federalregister.gov/documents/2026/02/13/2026-02965/restoring-integrity-to-the-issuance-of-non-domiciled-commercial-drivers-licenses-cdl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  official Federal Register notice
                </a>
                .
              </p>
            </ArticleSection>

            <ArticleSection number="4" title="Why FMCSA says crash totals are not the whole issue">
              <p>
                FMCSA&apos;s stated concern is that state licensing agencies cannot
                consistently obtain a foreign applicant&apos;s historical or concurrent
                driving record. The agency says U.S.-domiciled applicants are checked
                through domestic databases, while comparable foreign records may be
                unavailable.
              </p>
              <p className="mt-5">
                FMCSA also says state program reviews uncovered widespread errors in
                legal-presence documentation and credential expiration dates. In the
                agency&apos;s view, a lower recent crash rate in one state does not resolve
                whether the national licensing system can verify each applicant&apos;s full
                driving history and issue credentials consistently.
              </p>
              <p className="mt-5">
                California&apos;s response is essentially that actual road-safety outcomes
                should carry substantial weight, especially when the available state
                data does not show greater crash involvement among the affected group.
                The disagreement is therefore about both safety evidence and how much
                preventive certainty a licensing system should require.
              </p>
            </ArticleSection>

            <ArticleSection number="5" title="Where the federal court case stands">
              <p>
                The final rule is being challenged in <em>Rivera Lujan v. FMCSA</em>,
                D.C. Circuit No. 26-1032, consolidated with{" "}
                <em>King County v. FMCSA</em>, No. 26-1046. On May 5, 2026, a divided
                panel denied emergency requests to pause the final rule and expedited
                the case.
              </p>
              <p className="mt-5">
                That decision left the rule in effect, but it was not a final decision
                on the full merits of the challenge. The D.C. Circuit&apos;s{" "}
                <a
                  href="https://media.cadc.uscourts.gov/orders/bydate/recent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  public-interest order list
                </a>{" "}
                identifies the May 5 order, and an{" "}
                <a
                  href="https://www.ag.idaho.gov/newsroom/ag-labrador-defends-rule-blocking-illegal-immigrants-from-obtaining-commercial-drivers-licenses/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  official state attorney general update
                </a>{" "}
                reports that oral argument is scheduled for September 15, 2026.
              </p>
              <p className="mt-5">
                The challengers argue, among other things, that the rule exceeds the
                agency&apos;s authority and is inadequately justified. FMCSA defends the
                rule as a permissible effort to create uniform eligibility and vetting
                standards. Until the court issues a merits decision, neither position
                should be described as the final legal outcome.
              </p>
            </ArticleSection>

            <ArticleSection number="6" title="What is happening in California now">
              <p>
                California DMV says it is not currently issuing non-domiciled CLPs or
                CDLs because of an FMCSA directive. The agency has notified some drivers
                that credentials issued with expiration dates beyond their legal-presence
                documents would be canceled.
              </p>
              <p className="mt-5">
                The DMV says an affected person may reapply, but a non-domiciled CDL
                application will be placed on hold while issuance remains paused.
                Eligible applicants may apply for a regular Class C license to continue
                driving a noncommercial vehicle. Drivers should rely on their own notice
                and the{" "}
                <a
                  href="https://www.dmv.ca.gov/portal/important-changes-to-limited-term-legal-presence-cdl-requirements/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  California DMV&apos;s current instructions
                </a>
                , not social-media summaries.
              </p>
            </ArticleSection>

            <ArticleSection number="7" title="Why the trucking industry should watch this case">
              <p>
                The outcome could affect far more than one licensing category. It may
                influence how much evidence FMCSA must produce when connecting licensing
                rules to safety, how states verify temporary lawful status, and how
                quickly carriers must replace drivers who lose eligibility to renew.
              </p>
              <p className="mt-5">
                California officials have said approximately 65,000 people in the state
                held non-domiciled CDLs before the restrictions. Nationwide, the final
                rule&apos;s regulatory analysis discusses roughly 200,000 non-domiciled
                CDL holders. The practical impact will depend on credential expiration
                dates, immigration categories, state implementation, and the court&apos;s
                eventual ruling.
              </p>
              <p className="mt-5">
                For carriers, the sensible response is compliance rather than
                speculation: verify each driver&apos;s current credential status through the
                issuing state, keep qualification files current, plan for renewals early,
                and do not assume that a headline changes a driver&apos;s legal authority to
                operate.
              </p>
            </ArticleSection>

            <section className="mt-14 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Bottom Line</p>
              <h2 className="mt-4 text-3xl font-black">The data matters—and so do the limits of the data</h2>
              <p className="mt-5 leading-8 text-slate-300">
                California&apos;s analysis is meaningful because it presents real crash
                outcomes that do not support a simple claim that temporary-resident CDL
                holders were more crash-prone during 2022–2024. FMCSA&apos;s rule, however,
                is built around a separate question: whether every applicant can be
                vetted and licensed through a uniform, verifiable process.
              </p>
              <p className="mt-5 leading-8 text-slate-300">
                The court will decide the legal dispute. Until then, the most accurate
                reading is not “California proved the issue is over” or “FMCSA proved
                these drivers are unsafe.” It is that crash data, licensing integrity,
                administrative procedure, and workforce effects are all being weighed
                in the same consequential case.
              </p>
            </section>

            <section className="mt-14" aria-labelledby="sources-heading">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                Primary and Supporting Sources
              </p>
              <h2 id="sources-heading" className="mt-3 text-3xl font-black text-slate-950">
                Read the source material
              </h2>
              <ul className="mt-6 space-y-4">
                <SourceLink
                  href="https://www.federalregister.gov/documents/2026/02/13/2026-02965/restoring-integrity-to-the-issuance-of-non-domiciled-commercial-drivers-licenses-cdl"
                  title="FMCSA final rule in the Federal Register"
                  detail="Rule text, agency rationale, eligibility categories, and compliance requirements."
                />
                <SourceLink
                  href="https://media.cadc.uscourts.gov/orders/bydate/recent"
                  title="U.S. Court of Appeals for the D.C. Circuit"
                  detail="Public-interest orders, including the May 5, 2026 order in case No. 26-1032."
                />
                <SourceLink
                  href="https://www.dmv.ca.gov/portal/important-changes-to-limited-term-legal-presence-cdl-requirements/"
                  title="California DMV: current non-domiciled CDL instructions"
                  detail="Current California issuance pause, cancellation, and reapplication information."
                />
                <SourceLink
                  href="https://oag.ca.gov/news/press-releases/attorney-general-bonta-trump-administration%E2%80%99s-plan-threatens-upend-trucking"
                  title="California Department of Justice position"
                  detail="California's stated legal, safety, and workforce objections."
                />
                <SourceLink
                  href="https://www.overdriveonline.com/regulations/article/15831163/california-says-nondomiciled-drivers-are-safer-than-us-citizens-court-filings"
                  title="Overdrive report on the California DMV analysis"
                  detail="Reported study population, crash counts, and per-license rates from the court filing."
                />
              </ul>
              <p className="mt-8 text-sm leading-6 text-slate-500">
                This article is for general information and is not legal advice. Rules,
                court schedules, and agency instructions can change. Drivers and carriers
                should verify current requirements with the issuing state and qualified
                counsel where appropriate.
              </p>
            </section>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-32 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Case Snapshot</p>
              <dl className="mt-5 space-y-4 text-sm">
                <SideFact label="Final rule published" value="February 13, 2026" />
                <SideFact label="Effective date" value="March 16, 2026" />
                <SideFact label="Court" value="D.C. Circuit" />
                <SideFact label="Lead case" value="No. 26-1032" />
                <SideFact label="Oral argument" value="September 15, 2026" />
              </dl>
              <p className="mt-6 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
                Status checked August 16, 2026. A denied emergency stay is not a final
                merits ruling.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}

function ArticleSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-black text-orange-700">
          {number}
        </span>
        <h2 className="pt-1 text-2xl font-black text-slate-950 sm:text-3xl">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="font-black text-orange-600" aria-hidden="true">&#10003;</span>
      <span>{children}</span>
    </li>
  );
}

function SourceLink({
  href,
  title,
  detail,
}: {
  href: string;
  title: string;
  detail: string;
}) {
  return (
    <li className="rounded-2xl border border-slate-200 p-5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-black text-slate-950 hover:text-orange-600"
      >
        {title} <span aria-hidden="true">&rarr;</span>
      </a>
      <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
    </li>
  );
}

function SideFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-semibold text-slate-500">{label}</dt>
      <dd className="mt-1 font-black text-slate-950">{value}</dd>
    </div>
  );
}
