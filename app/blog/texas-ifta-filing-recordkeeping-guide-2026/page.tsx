import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl =
  "https://www.onenesstransport.com/blog/texas-ifta-filing-recordkeeping-guide-2026";
const articleImage =
  "https://www.onenesstransport.com/images/texas-ifta-filing-guide-2026.webp";
const publishedTime = "2026-09-05T15:07:00-05:00";

export const metadata: Metadata = {
  title: "Texas IFTA Filing Guide: Q3 2026 Deadline & Records",
  description:
    "Texas IFTA guide for owner-operators: Q3 2026 deadline, required mileage and fuel records, receipt rules, Webfile steps, penalties, and audit checklist.",
  keywords: [
    "Texas IFTA filing guide",
    "Texas IFTA due date 2026",
    "IFTA recordkeeping requirements",
    "IFTA fuel receipts",
    "IFTA mileage records",
    "owner operator IFTA checklist",
  ],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title: "Texas IFTA Filing Guide: Q3 2026 Deadline and Audit-Ready Records",
    description:
      "A practical Texas carrier workflow for jurisdiction miles, fuel receipts, quarterly filing, and four-year record retention.",
    publishedTime,
    modifiedTime: publishedTime,
    authors: ["ONENESS TRANSPORT LLC"],
    images: [
      {
        url: articleImage,
        width: 1672,
        height: 941,
        alt: "Texas dry van truck beside an IFTA mileage map, fuel receipt, and quarterly filing checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas IFTA Filing Guide: Q3 2026 Deadline & Records",
    description:
      "What Texas owner-operators should save, reconcile, and file for an audit-ready IFTA quarter.",
    images: [articleImage],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Texas IFTA Filing Guide: Q3 2026 Deadline and Recordkeeping Checklist",
  description:
    "A practical guide to Texas IFTA eligibility, quarterly filing, fuel and distance records, receipt requirements, penalties, and audit preparation.",
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
      name: "Texas IFTA Filing Guide",
      item: articleUrl,
    },
  ],
};

const linkClass =
  "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function TexasIftaGuideArticle() {
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
              <Link href="/" className="hover:text-orange-400">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link href="/blog" className="hover:text-orange-400">
                Blog
              </Link>
            </nav>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Texas Carrier Compliance
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Texas IFTA Filing Guide: Q3 2026 Deadline and Recordkeeping Checklist
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              A practical system for tracking jurisdiction miles, protecting fuel-tax credits,
              reconciling a quarter, and keeping a one-truck carrier ready for an audit.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>By ONENESS TRANSPORT LLC</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime="2026-09-05">September 5, 2026</time>
              <span aria-hidden="true">&middot;</span>
              <span>11 min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto -mt-8 max-w-6xl px-5">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
            <Image
              src="/images/texas-ifta-filing-guide-2026.webp"
              alt="Texas dry van truck beside an IFTA mileage map, fuel receipt, and quarterly filing checklist"
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 text-[1.0625rem] leading-8 text-slate-700">
            <p className="text-xl leading-9">
              IFTA is easier when the carrier treats it as a weekly recordkeeping process—not a
              quarterly search for missing receipts. Texas-based interstate carriers use one return
              to report qualified-vehicle fuel and distance across member jurisdictions. The return
              reconciles where the truck traveled with where fuel tax was paid; it is not simply a
              report of how many gallons were purchased in Texas.
            </p>
            <p className="mt-6">
              For the 2026 third quarter, the reporting period ends September 30. The normal due
              date, October 31, falls on a Saturday, so the Texas Comptroller&apos;s weekend rule moves
              the deadline to the next business day: <strong>Monday, November 2, 2026</strong>.
              Filing early leaves time to correct a missing jurisdiction or unreadable receipt.
            </p>

            <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-slate-950 px-6 py-4 text-white">
                <h2 className="text-xl font-black">Texas IFTA calendar at a glance</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] text-left text-sm">
                  <thead className="bg-slate-100 text-slate-950">
                    <tr>
                      <th className="px-5 py-4">Quarter</th>
                      <th className="px-5 py-4">Activity period</th>
                      <th className="px-5 py-4">Usual deadline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <Row quarter="Q1" period="January 1–March 31" deadline="April 30" />
                    <Row quarter="Q2" period="April 1–June 30" deadline="July 31" />
                    <Row quarter="Q3" period="July 1–September 30" deadline="October 31*" />
                    <Row quarter="Q4" period="October 1–December 31" deadline="January 31*" />
                  </tbody>
                </table>
              </div>
              <p className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-xs leading-5 text-slate-500">
                *When the due date is a Saturday, Sunday, or legal holiday, Texas treats the next
                business day as the deadline. Q3 2026 is therefore due November 2, 2026.
              </p>
            </section>

            <Section title="1. Confirm whether the truck is an IFTA-qualified vehicle">
              <p>
                Under the 2026 IFTA Articles of Agreement, a commercial vehicle used to transport
                people or property is a qualified motor vehicle when it has two axles and exceeds
                26,000 pounds gross or registered gross weight, has three or more axles regardless
                of weight, or operates as a combination exceeding 26,000 pounds. The licensing
                requirement generally applies when that qualified vehicle operates in two or more
                IFTA jurisdictions.
              </p>
              <p className="mt-5">
                A typical interstate tractor-trailer qualifies. A carrier should not decide based
                only on the weight of one load; registered configuration, axle count, combined
                weight, base jurisdiction, and operating territory matter. Texas says qualifying
                commercial vehicles traveling in more than one state or Canadian province must
                report through IFTA.
              </p>
            </Section>

            <Section title="2. Understand what the return is reconciling">
              <p>
                IFTA distributes fuel-use tax among jurisdictions. The carrier reports total fleet
                distance, distance by jurisdiction, and fuel placed into qualified vehicles. The
                calculation develops a fleet fuel-consumption factor and applies each jurisdiction&apos;s
                current rate. Tax-paid fuel purchased in a jurisdiction can produce a credit against
                the tax attributable to travel there; buying fuel in one state does not erase the
                liability created by traveling in another.
              </p>
              <p className="mt-5">
                Do not estimate tax from pump price alone. Each jurisdiction sets its own rate, and
                the correct quarter&apos;s rates should be used. The Texas Comptroller links carriers to
                the official IFTA rate matrix and provides electronic filing through Webfile.
              </p>
            </Section>

            <Section title="3. Capture every mile—not only loaded miles">
              <p>
                IFTA distance is not the same as broker-paid mileage. Total distance includes the
                qualified fleet&apos;s travel during the reporting period, while jurisdiction records
                allocate those miles by state or province. Deadhead, repositioning, shop trips, and
                personal-conveyance movement do not disappear merely because a broker did not pay
                for them. Any claimed exempt distance should be documented and reported according
                to the jurisdiction&apos;s rules.
              </p>
              <p className="mt-5">For a trip-based record created without a qualifying vehicle-tracking system, retain:</p>
              <ul className="mt-5 grid gap-3 rounded-2xl border border-slate-200 p-6 sm:grid-cols-2">
                <li>Beginning and ending trip dates</li>
                <li>Origin and destination</li>
                <li>Route of travel</li>
                <li>Beginning and ending odometer or ECM readings</li>
                <li>Total trip distance</li>
                <li>Distance traveled in each jurisdiction</li>
                <li>VIN or vehicle-unit number</li>
              </ul>
              <p className="mt-5">
                Reconcile state mileage to total odometer movement. The sum of jurisdiction miles
                should equal the trip total, and the quarter&apos;s trip totals should reconcile with
                opening and closing mileage after documented adjustments.
              </p>
            </Section>

            <Section title="4. Do not assume an ELD PDF is automatically audit-ready">
              <p>
                A vehicle-tracking system can support IFTA, but the 2026 Procedures Manual sets
                specific minimum data requirements. When the engine is on, the system must create
                and retain a reading at least every 10 minutes, including date and time, latitude
                and longitude to four decimal places, ECM odometer reading, and VIN or unit number.
                If ECM mileage is unavailable, beginning and ending dashboard or hubodometer data
                may be accepted for the trip.
              </p>
              <p className="mt-5">
                Critically, the tracking data must be available in an electronic spreadsheet format
                such as XLS, XLSX, CSV, or delimited text. The manual says static PDF, JPEG, PNG,
                or Word exports are not acceptable for this vehicle-tracking dataset. Before relying
                on an ELD or telematics subscription, test the export and confirm it covers the full
                quarter—not only the last few days visible in the app.
              </p>
            </Section>

            <Section title="5. Protect every tax-paid fuel credit">
              <p>
                Keep complete fuel records for all fuel purchased, received, or used. A bank or
                fuel-card statement can help reconcile charges, but it may not contain every field
                required for tax-paid credit. The IFTA Procedures Manual allows receipts, invoices,
                seller transaction listings, credit-card receipts, and electronic or digital copies
                of original receipts when the documentation is valid.
              </p>
              <p className="mt-5">A qualifying retail record should show:</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Check title="Purchase details">Date, seller name and address or identified vendor code, fuel quantity, fuel type, and price per volume or total price.</Check>
                <Check title="Carrier and vehicle">Identification of the qualified vehicle and the purchaser name with a legal connection to the IFTA licensee.</Check>
                <Check title="Readable evidence">An unaltered, legible original or valid electronic record. An illegible or unexplained altered receipt can lose the credit.</Check>
                <Check title="Complete fuel total">Track fuel placed in the truck even when a tax-paid receipt is missing; missing proof affects the credit, not the need to account for fuel used.</Check>
              </div>
              <p className="mt-5">
                Photograph paper receipts promptly, verify the gallons and unit number, and file
                them by transaction date. Retain the detailed fuel-card export as well as the image;
                the two records make duplicate, reversed, and missing transactions easier to find.
              </p>
            </Section>

            <Section title="6. Use a monthly close instead of waiting for quarter-end">
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8">
                <Step number="1" title="Lock the mileage period">Use a consistent cutoff for fuel and distance. Record the truck&apos;s opening and closing odometer or ECM values.</Step>
                <Step number="2" title="Export jurisdiction distance">Download the ELD or telematics file in an auditable spreadsheet format and save the raw export unchanged.</Step>
                <Step number="3" title="Reconcile trips">Compare routes, dispatch records, bills of lading, toll activity, and location history. Investigate gaps and duplicate miles.</Step>
                <Step number="4" title="Reconcile fuel">Match receipts to the fuel-card statement, flag missing documents, and confirm gallons, fuel type, purchaser, and unit.</Step>
                <Step number="5" title="Create a monthly summary">Summarize fuel placed into each vehicle and distance traveled by vehicle, in total and by jurisdiction.</Step>
                <Step number="6" title="Review fleet MPG">A large change may indicate omitted gallons, duplicated miles, a wrong unit, or a boundary-allocation problem. Investigate rather than forcing the number.</Step>
              </ol>
              <p className="mt-5">
                The IFTA manual notes that monthly fleet summaries may be necessary for an efficient
                audit. For a one-truck carrier, a monthly close also prevents three months of small
                errors from becoming one large reconstruction project.
              </p>
            </Section>

            <Section title="7. File the Texas return even when no tax appears due">
              <p>
                A licensee should follow Texas filing requirements for every reporting period. A
                quarter with no operations or no net tax is not permission to ignore the return.
                In Webfile, review the reporting period, fleet fuel type, total and jurisdiction
                distance, tax-paid gallons, calculated MPG, applicable rates, credits, and amount due
                before submitting. Save the confirmation, filed return, schedules, and proof of payment.
              </p>
              <p className="mt-5">
                The Texas Comptroller states that returns are due on the last day of the month after
                each quarter. As of September 5, 2026, Texas lists a late-filing, late-payment, or
                underpayment penalty of <strong>$50 or 10% of delinquent tax, whichever is greater</strong>.
                It also lists interest at 9% annually and 0.75% per month or fraction of a month on
                delinquent tax. Verify the current figures before filing because agencies can update
                rates and procedures.
              </p>
            </Section>

            <Section title="8. Keep an audit-ready folder for four years">
              <p>
                The 2026 IFTA Procedures Manual requires records to be retained for four years after
                the return due date or filing date, whichever is later, plus any period covered by
                waivers or jeopardy assessments. Records for an audited period must remain available.
                The licensee carries the burden of proof, so an unsupported number can become an
                expensive problem even when the original trip was legitimate.
              </p>
              <p className="mt-5">A practical folder structure for each quarter includes:</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Check title="Filed return">Return, jurisdiction schedules, payment confirmation, notices, and amendments.</Check>
                <Check title="Raw mileage data">Original spreadsheet export, odometer records, trip sheets, routes, and jurisdiction summaries.</Check>
                <Check title="Fuel evidence">Receipt images, detailed vendor export, fuel-card statement, missing-receipt log, and bulk records if applicable.</Check>
                <Check title="Supporting operations">Dispatch records, rate confirmations, BOLs, PODs, toll statements, repair travel, and unit-assignment records.</Check>
              </div>
            </Section>

            <Section title="9. Avoid the mistakes that distort a one-truck return">
              <ul className="mt-6 space-y-4 rounded-2xl bg-slate-50 p-6 sm:p-8">
                <li><strong>Reporting only loaded miles:</strong> IFTA total distance is broader than billable distance.</li>
                <li><strong>Using dispatch miles as actual distance:</strong> rate-confirmation mileage may not match the route driven.</li>
                <li><strong>Leaving out fuel with no receipt:</strong> fuel still belongs in the consumption calculation even if tax-paid credit cannot be documented.</li>
                <li><strong>Keeping only screenshots:</strong> vehicle-tracking data must be exportable in the required auditable format.</li>
                <li><strong>Combining units incorrectly:</strong> mileage and fuel must remain traceable to the qualified vehicle and reporting fleet.</li>
                <li><strong>Waiting until the due date:</strong> missing state miles, unreadable receipts, and account-access problems take time to correct.</li>
              </ul>
            </Section>

            <section className="mt-12 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
              <h2 className="text-2xl font-black">The bottom line for Texas owner-operators</h2>
              <p className="mt-4 leading-8 text-slate-300">
                The best IFTA system is a repeatable chain: record every mile, preserve every gallon,
                export usable data, reconcile monthly, file on time, and retain the complete evidence.
                For Q3 2026, Texas carriers should close records through September 30 and plan to file
                by November 2, 2026.
              </p>
              <p className="mt-5 leading-8 text-slate-300">
                For professional dry-van freight service with ONENESS TRANSPORT LLC, call{" "}
                <a href="tel:+15123633649" className="font-bold text-orange-400 hover:text-orange-300">
                  512-363-3649
                </a>{" "}
                or email{" "}
                <a href="mailto:dispatch@onenesstransport.com" className="font-bold text-orange-400 hover:text-orange-300">
                  dispatch@onenesstransport.com
                </a>
                .
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Official materials were reviewed September 5, 2026. This article provides general
                information, not tax, accounting, or legal advice. Confirm the current rules, rates,
                exemptions, filing fields, and deadlines with the Texas Comptroller or a qualified
                tax professional for your operation.
              </p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">
                Q3 2026 checklist
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>Close records September 30</li>
                <li>Reconcile all jurisdiction miles</li>
                <li>Verify fuel-credit documents</li>
                <li>File by November 2</li>
                <li>Retain records four years</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-orange-500 p-6 text-slate-950">
              <p className="text-sm font-bold uppercase tracking-[0.16em]">Official resources</p>
              <a
                href="https://comptroller.texas.gov/taxes/fuels/ifta.php"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block font-black underline"
              >
                Texas Comptroller IFTA
              </a>
              <a
                href="https://www.iftach.org/manuals/2026/PM/Procedures%20Manual%20-%2001-01-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block font-black underline"
              >
                2026 Procedures Manual
              </a>
              <a
                href="https://www.iftach.org/manuals/2026/AA/Articles%20of%20Agreement%20-%2001-01-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block font-black underline"
              >
                2026 Articles of Agreement
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 text-sm leading-7 text-slate-600">
              Looking for operating-cost guidance? Read our{" "}
              <Link href="/blog/how-to-calculate-trucking-cost-per-mile-owner-operators" className={linkClass}>
                cost-per-mile guide
              </Link>
              .
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-black leading-tight text-slate-950">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Row({ quarter, period, deadline }: { quarter: string; period: string; deadline: string }) {
  return (
    <tr>
      <td className="px-5 py-4 font-black text-orange-700">{quarter}</td>
      <td className="px-5 py-4 font-bold text-slate-950">{period}</td>
      <td className="px-5 py-4">{deadline}</td>
    </tr>
  );
}

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-black text-white">
        {number}
      </span>
      <div>
        <h3 className="font-black text-slate-950">{title}</h3>
        <p className="mt-1">{children}</p>
      </div>
    </li>
  );
}

function Check({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <h3 className="font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6">{children}</p>
    </div>
  );
}
