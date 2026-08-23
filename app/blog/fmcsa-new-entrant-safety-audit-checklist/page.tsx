import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl =
  "https://www.onenesstransport.com/blog/fmcsa-new-entrant-safety-audit-checklist";
const articleImage =
  "https://www.onenesstransport.com/images/fmcsa-new-entrant-safety-audit-2026.webp";
const publishedTime = "2026-08-23T12:22:00-05:00";

export const metadata: Metadata = {
  title: "FMCSA New Entrant Safety Audit Checklist for Carriers",
  description:
    "Prepare for an FMCSA New Entrant Safety Audit with this practical checklist for driver, vehicle, ELD, insurance, drug-testing, and accident records.",
  keywords: [
    "FMCSA new entrant safety audit checklist",
    "new authority safety audit documents",
    "owner operator safety audit",
    "FMCSA new entrant program",
    "one truck carrier compliance checklist",
  ],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title: "FMCSA New Entrant Safety Audit Checklist for Small Carriers",
    description:
      "A document-by-document audit preparation guide for owner-operators and one-truck interstate carriers.",
    publishedTime,
    modifiedTime: publishedTime,
    authors: ["ONENESS TRANSPORT LLC"],
    images: [
      {
        url: articleImage,
        width: 1672,
        height: 941,
        alt: "Owner-operator organizing truck compliance records for a new entrant safety audit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCSA New Entrant Safety Audit Checklist",
    description:
      "Organize the driver, vehicle, hours-of-service, insurance, testing, and accident records FMCSA may request.",
    images: [articleImage],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "FMCSA New Entrant Safety Audit Checklist for Small Carriers",
  description:
    "A practical guide to FMCSA New Entrant Safety Audit timing, documents, automatic-failure violations, and preparation for one-truck carriers.",
  image: [articleImage],
  datePublished: publishedTime,
  dateModified: publishedTime,
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
      name: "FMCSA New Entrant Safety Audit Checklist",
      item: articleUrl,
    },
  ],
};

const linkClass =
  "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function NewEntrantSafetyAuditArticle() {
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
              Owner-Operator Compliance
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              FMCSA New Entrant Safety Audit Checklist for Small Carriers
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              What a one-truck interstate carrier should organize before FMCSA asks
              for driver, vehicle, hours-of-service, insurance, testing, and accident
              records.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>By ONENESS TRANSPORT LLC</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime="2026-08-23">August 23, 2026</time>
              <span aria-hidden="true">&middot;</span>
              <span>10 min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto -mt-8 max-w-6xl px-5">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
            <Image
              src="/images/fmcsa-new-entrant-safety-audit-2026.webp"
              alt="Owner-operator organizing truck compliance records for a new entrant safety audit"
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
              An FMCSA New Entrant Safety Audit is a review of whether a new
              interstate motor carrier has basic safety management controls—not a
              test that should be prepared for only after the notice arrives. FMCSA
              monitors a new entrant during its first 18 months and generally conducts
              the audit within the first 12 months after operations begin.
            </p>
            <p className="mt-6">
              A one-truck company is still a motor carrier and an employer when the
              owner drives the truck. That means the business must keep carrier
              records separately and be able to show how it qualifies the driver,
              monitors hours, maintains equipment, manages drug-and-alcohol
              responsibilities, and responds to defects or crashes.
            </p>

            <section className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
                New entrant timeline
              </p>
              <ul className="mt-5 space-y-3">
                <Bullet>FMCSA monitors the carrier during an initial 18-month new entrant period.</Bullet>
                <Bullet>The safety audit is generally conducted within 12 months after operations begin.</Bullet>
                <Bullet>The audit may be conducted onsite or electronically through FMCSA&apos;s New Entrant Web System.</Bullet>
                <Bullet>Roadside inspections continue to affect the carrier&apos;s safety record during the monitoring period.</Bullet>
                <Bullet>FMCSA provides written pass-or-fail notice no later than 45 days after the completed audit.</Bullet>
              </ul>
            </section>

            <ArticleSection number="1" title="Understand what the auditor is evaluating">
              <p>
                The audit reviews records and operating practices to determine whether
                the carrier has functioning controls for the Federal Motor Carrier
                Safety Regulations and any applicable hazardous-materials rules.
                FMCSA&apos;s Motor Carrier Safety Planner identifies six broad review
                areas: driver qualification and fitness, driver duty status, vehicle
                maintenance, accident records, controlled-substance and alcohol
                testing, and hazardous materials when applicable.
              </p>
              <p className="mt-5">
                Passing is not based on a polished binder alone. The documents must
                match what actually happened. Driver logs should agree with supporting
                records, maintenance files should identify the correct tractor and
                trailer, and insurance evidence should cover the period in which the
                carrier operated.
              </p>
            </ArticleSection>

            <ArticleSection number="2" title="Build one audit folder with eight sections">
              <p>
                FMCSA&apos;s official Safety Audit Resource Guide lists the records below
                as examples of what an auditor may request. The exact request can vary,
                and the auditor may ask for additional documents. Use clear filenames,
                identify the unit or driver on every record, and retain original
                records in the format required by the applicable regulation.
              </p>
              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[720px] text-left text-sm sm:text-base">
                  <caption className="sr-only">New entrant safety audit document checklist</caption>
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th scope="col" className="px-4 py-4 sm:px-6">Folder</th>
                      <th scope="col" className="px-4 py-4 sm:px-6">Records to organize</th>
                      <th scope="col" className="px-4 py-4 sm:px-6">One-truck carrier check</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <AuditRow folder="1. Driver list" records="Current drivers and employment status." check="List the owner-driver too; do not assume sole ownership removes driver requirements." />
                    <AuditRow folder="2. Driver qualification" records="License, application, motor-vehicle record, medical qualification, road test or accepted equivalent, and required inquiries." check="Check expiration dates and confirm each document belongs to the same driver." />
                    <AuditRow folder="3. Hours of service" records="Six months of records of duty status plus supporting documents and evidence of review." check="Export ELD records early and reconcile fuel, toll, dispatch, and trip documents." />
                    <AuditRow folder="4. Vehicles" records="Tractor and trailer list with unit number, VIN, plate number, and state." check="Include owned, leased, rented, and replacement equipment used in operations." />
                    <AuditRow folder="5. Maintenance" records="Annual inspections, maintenance history, defect reports, repairs, and inspector qualifications when applicable." check="Match every inspection and repair to the exact tractor or trailer." />
                    <AuditRow folder="6. Insurance" records="Evidence of required financial responsibility for the operation." check="Verify effective dates and legal carrier name; an insurance card alone may not answer every audit question." />
                    <AuditRow folder="7. Drug and alcohol" records="Testing-program enrollment, test records, random-pool documentation, Clearinghouse compliance, policies, and training records as applicable." check="An owner-operator must still be enrolled through a consortium/third-party administrator when Part 382 applies." />
                    <AuditRow folder="8. Accidents" records="Three-year accident register and qualifying supporting records—or a clearly documented empty register if no reportable crashes occurred." check="Do not omit the category simply because the company has had no crashes." />
                  </tbody>
                </table>
              </div>
            </ArticleSection>

            <ArticleSection number="3" title="Check the driver qualification file">
              <p>
                FMCSA requires a qualification file for each employed driver. The
                carrier should be able to show that the driver was properly licensed,
                physically qualified, and otherwise qualified before being dispatched.
                Review the file as a timeline: hiring date, license and medical status,
                motor-vehicle-record inquiries, road test or equivalent, and annual
                reviews where required.
              </p>
              <p className="mt-5">
                Avoid mixing records. Drug-and-alcohol testing records have their own
                confidentiality and retention rules, while the driver qualification
                file is governed by Part 391. FMCSA&apos;s{" "}
                <a
                  href="https://csa.fmcsa.dot.gov/safetyplanner/Resources/FormsLibrary.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Motor Carrier Safety Planner Forms Library
                </a>
                {" "}includes optional checklists and sample forms, but those examples
                do not replace the current regulations.
              </p>
            </ArticleSection>

            <ArticleSection number="4" title="Reconcile six months of ELD and supporting records">
              <p>
                FMCSA&apos;s audit guide states that carriers must maintain six months of
                driver records of duty status. Do more than download a single PDF.
                Verify the carrier can retrieve logs for the requested period,
                unidentified-driving events are assigned or annotated, edits are
                handled correctly, and the records can be transferred or uploaded as
                directed.
              </p>
              <p className="mt-5">
                Compare logs with fuel purchases, toll activity, bills of lading,
                dispatch records, trip sheets, and other supporting documents. A
                carrier that changed systems should preserve access to the old data.
                If the fleet recently replaced a revoked device, use the transition
                steps in our{" "}
                <Link href="/blog/fmcsa-revoked-elds-october-2026-deadline" className={linkClass}>
                  FMCSA ELD replacement guide
                </Link>
                {" "}to prevent a record gap.
              </p>
            </ArticleSection>

            <ArticleSection number="5" title="Prove that the tractor and trailer are maintained">
              <p>
                The vehicle file should show a system, not only one annual inspection.
                Organize the current annual inspection report, maintenance schedule,
                repair orders, roadside inspection reports, defect reports when
                required, and proof that safety-related defects were corrected before
                the equipment returned to service.
              </p>
              <p className="mt-5">
                Include the dry-van trailer. A rental or leased trailer used under the
                carrier&apos;s control can still be relevant to the audit. The unit number,
                VIN, plate, inspection report, and repair documentation must point to
                the same equipment. Our{" "}
                <Link href="/blog/cvsa-brake-safety-week-2026-checklist" className={linkClass}>
                  tractor-trailer brake inspection checklist
                </Link>
                {" "}shows how driver defect reporting and qualified maintenance should
                work together.
              </p>
            </ArticleSection>

            <ArticleSection number="6" title="Treat drug, alcohol, and Clearinghouse duties as carrier duties">
              <p>
                For operations subject to 49 CFR Part 382, the file should demonstrate
                an active testing program, required pre-employment testing,
                participation in a compliant random program, and proper handling of
                test results. An owner-operator cannot select themselves for a random
                test; FMCSA requires owner-operators to participate through a
                consortium/third-party administrator.
              </p>
              <p className="mt-5">
                Employers must also conduct required pre-employment and annual Drug
                and Alcohol Clearinghouse queries. The Clearinghouse describes the
                annual requirement as a rolling 12-month or 365-day obligation. Keep a
                compliance calendar and appropriate consent records rather than relying
                on memory.
              </p>
            </ArticleSection>

            <ArticleSection number="7" title="Know the automatic-failure violations">
              <p>
                A carrier can fail because its overall safety controls are inadequate.
                In addition,{" "}
                <a
                  href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-385/subpart-D/section-385.321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  49 CFR 385.321
                </a>
                {" "}lists 16 violations that trigger automatic failure. Most use a
                single-occurrence standard; the hours-of-service-record and periodic-
                inspection items use the thresholds stated in the rule.
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                <RiskCard title="Drug and alcohol">No required testing program or random program, or using a driver after specified positive, refusal, or alcohol violations.</RiskCard>
                <RiskCard title="Driver qualification">Knowingly using a driver without a valid CDL, a disqualified driver, or a physically unqualified driver.</RiskCard>
                <RiskCard title="Financial responsibility">Operating without the required minimum level of financial responsibility.</RiskCard>
                <RiskCard title="Hours of service">Failing to require records of duty status at or above the automatic-failure threshold in the regulation.</RiskCard>
                <RiskCard title="Out-of-service equipment">Operating a vehicle declared out of service before required repairs are completed.</RiskCard>
                <RiskCard title="Inspection and defects">Failing to correct specified out-of-service defects or using vehicles without periodic inspections at or above the regulatory threshold.</RiskCard>
              </ul>
              <p className="mt-5">
                This summary is not a substitute for the regulation. Compare your
                program directly with all 16 entries and their failure guidelines.
              </p>
            </ArticleSection>

            <ArticleSection number="8" title="Prepare for an offsite or onsite audit">
              <p>
                FMCSA may conduct the audit electronically or at the carrier&apos;s
                principal place of business or another agreed location. Follow the
                notice you receive. Confirm the deadline, requested sample periods,
                accepted file types, upload instructions, and the auditor&apos;s contact
                information. Do not send extra personal data that was not requested.
              </p>
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8">
                <Action number="1" title="Read the notice the same day">
                  Calendar every deadline and identify whether the review is offsite
                  or onsite. Verify messages through official FMCSA channels.
                </Action>
                <Action number="2" title="Create a request tracker">
                  List every requested item, the covered date range, filename, source,
                  and upload status. Mark anything that does not apply and explain why.
                </Action>
                <Action number="3" title="Quality-check the sample">
                  Confirm names, dates, VINs, unit numbers, and file readability. Make
                  sure the records cover the period requested rather than the easiest
                  period to export.
                </Action>
                <Action number="4" title="Keep a submission copy">
                  Retain exactly what was provided and evidence of successful upload or
                  delivery. Do not alter an original record to make it look complete.
                </Action>
                <Action number="5" title="Be ready to explain the process">
                  The carrier&apos;s safety official should understand how drivers are
                  qualified, logs are reviewed, defects are repaired, tests are
                  managed, and records are retained.
                </Action>
              </ol>
            </ArticleSection>

            <ArticleSection number="9" title="What happens after the audit">
              <p>
                FMCSA says a new entrant receives written pass-or-fail notification
                no later than 45 days after the audit is completed. A passing carrier
                remains under enhanced monitoring for the rest of the 18-month period.
                Passing does not erase later roadside violations or prevent an
                intervention if safety data indicates problems.
              </p>
              <p className="mt-5">
                If the carrier fails, FMCSA&apos;s notice identifies the deficiencies and
                the corrective action required to avoid revocation and an out-of-
                service order. Follow the instructions and deadline in that notice.
                A corrective action plan generally needs to explain why the violation
                occurred, what corrected it, and what procedure will prevent it from
                recurring. Evidence matters more than promises.
              </p>
            </ArticleSection>

            <section className="mt-12 rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                Bottom line
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Build the safety system before the audit notice
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                The strongest audit file is created during normal operations. Keep
                driver, ELD, vehicle, insurance, testing, and accident records current;
                review them monthly; and correct gaps while the underlying facts are
                still easy to verify.
              </p>
              <p className="mt-5 leading-8 text-slate-300">
                For dry-van freight service with ONENESS TRANSPORT LLC, call{" "}
                <a href="tel:+15123633649" className="font-bold text-orange-400 hover:text-orange-300">512-363-3649</a>
                {" "}or email{" "}
                <a href="mailto:dispatch@onenesstransport.com" className="font-bold text-orange-400 hover:text-orange-300">dispatch@onenesstransport.com</a>.
              </p>
            </section>

            <section className="mt-12 border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-black text-slate-950">Official sources</h2>
              <ul className="mt-5 space-y-3">
                <SourceLink href="https://www.fmcsa.dot.gov/safety/new-entrant-safety-assurance-program">FMCSA New Entrant Safety Assurance Program</SourceLink>
                <SourceLink href="https://ai.fmcsa.dot.gov/NewEntrant/MC/Overview.aspx">FMCSA Safety Audit Resource Guide</SourceLink>
                <SourceLink href="https://csa.fmcsa.dot.gov/safetyplanner/MyFiles/SubSections.aspx?ch=20&sec=53&sub=95">FMCSA Motor Carrier Safety Planner: Safety Audits</SourceLink>
                <SourceLink href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-385/subpart-D/section-385.321">eCFR: 49 CFR 385.321—Safety Audit Failure</SourceLink>
                <SourceLink href="https://clearinghouse.fmcsa.dot.gov/FAQ/Topics/queries-and-consent-requests">FMCSA Clearinghouse: Queries and Consent Requests</SourceLink>
              </ul>
              <p className="mt-7 text-sm leading-6 text-slate-500">
                This article provides general educational information, not legal,
                regulatory, insurance, or safety-certification advice. Requirements
                depend on the carrier&apos;s operation and may change. Follow the current
                regulations and the instructions in your FMCSA audit notice. ONENESS
                TRANSPORT LLC has no paid relationship with FMCSA or any source cited.
              </p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">Audit file</p>
              <ol className="mt-4 space-y-3 text-sm font-semibold text-slate-700">
                <li>Driver list and qualification</li>
                <li>Six months of RODS</li>
                <li>Tractor and trailer records</li>
                <li>Insurance evidence</li>
                <li>Drug and alcohol program</li>
                <li>Three-year accident register</li>
              </ol>
            </div>
            <div className="rounded-2xl bg-orange-600 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-100">Carrier resources</p>
              <Link href="/broker-setup" className="mt-3 block text-lg font-black leading-7 hover:text-orange-100">
                View ONENESS TRANSPORT authority and broker documents
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}

function ArticleSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">Step {number}</p>
      <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-3"><span className="font-black text-orange-600" aria-hidden="true">✓</span><span>{children}</span></li>;
}

function AuditRow({ folder, records, check }: { folder: string; records: string; check: string }) {
  return <tr className="align-top odd:bg-white even:bg-slate-50"><th scope="row" className="px-4 py-4 font-bold text-slate-950 sm:px-6">{folder}</th><td className="px-4 py-4 sm:px-6">{records}</td><td className="px-4 py-4 sm:px-6">{check}</td></tr>;
}

function RiskCard({ title, children }: { title: string; children: React.ReactNode }) {
  return <li className="rounded-2xl border border-red-200 bg-red-50 p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6">{children}</p></li>;
}

function Action({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-black text-white">{number}</span>
      <div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-1">{children}</p></div>
    </li>
  );
}

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <li><a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{children}</a></li>;
}
