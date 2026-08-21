import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl =
  "https://www.onenesstransport.com/blog/fmcsa-revoked-elds-october-2026-deadline";
const articleImage =
  "https://www.onenesstransport.com/images/fmcsa-revoked-elds-2026.webp";
const publishedTime = "2026-08-21T12:05:00-05:00";

export const metadata: Metadata = {
  title: "FMCSA Revoked Five ELDs: October 2026 Deadline",
  description:
    "FMCSA revoked five ELDs. See the affected devices, October 6 replacement deadline, enforcement timeline, and carrier compliance checklist.",
  keywords: [
    "FMCSA revoked ELDs 2026",
    "October 6 2026 ELD deadline",
    "revoked electronic logging devices",
    "FMCSA ELD replacement",
    "trucking hours of service compliance",
  ],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title: "FMCSA Revoked Five ELDs: What Carriers Must Do",
    description:
      "Five ELDs lost federal registration. Review the affected devices, October 6 deadline, and a practical replacement checklist.",
    publishedTime,
    modifiedTime: publishedTime,
    authors: ["ONENESS TRANSPORT LLC"],
    images: [
      {
        url: articleImage,
        width: 1672,
        height: 941,
        alt: "Dry van truck with an electronic logging device warning and compliance calendar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCSA Revoked Five ELDs: October 2026 Deadline",
    description:
      "Check the five affected ELDs and the steps carriers must complete before October 6, 2026.",
    images: [articleImage],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "FMCSA Revoked Five ELDs—What Carriers Must Do Before October 6",
  description:
    "A practical guide to FMCSA's August 2026 ELD revocations, the October 6 replacement deadline, enforcement, and carrier compliance steps.",
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
      name: "FMCSA Revoked Five ELDs",
      item: articleUrl,
    },
  ],
};

const affectedDevices = [
  { name: "MOONLIGHT ELD", model: "MRS", identifier: "MRS255" },
  { name: "HGRS ELD", model: "HGR", identifier: "HRS169" },
  { name: "HIGHEST ELD", model: "HIG4ES", identifier: "HIG385" },
  { name: "TRUCKFORD ELD", model: "TRS", identifier: "TRS263" },
  { name: "Sparkle ELD", model: "PT40SIM", identifier: "SPARK6" },
];

const linkClass =
  "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function FmcsaRevokedEldsArticle() {
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
              ELD &amp; Compliance News
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              FMCSA Revoked Five ELDs—What Carriers Must Do Before October 6
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              The affected devices, the 60-day replacement window, enforcement rules,
              and a practical checklist for protecting your hours-of-service records.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>By ONENESS TRANSPORT LLC</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime="2026-08-21">August 21, 2026</time>
              <span aria-hidden="true">&middot;</span>
              <span>8 min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto -mt-8 max-w-6xl px-5">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
            <Image
              src="/images/fmcsa-revoked-elds-2026.webp"
              alt="Dry van truck with an electronic logging device warning and compliance calendar"
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
              The Federal Motor Carrier Safety Administration removed five electronic
              logging devices from its registered-device list on August 6, 2026.
              Motor carriers using one of those ELDs have until October 6, 2026, to
              replace it with a compliant device.
            </p>
            <p className="mt-6">
              This is more than a software notice. After the transition period, a
              driver who continues using a revoked device can be treated as operating
              without an ELD. The safest approach is to identify affected vehicles,
              preserve records, select a replacement from FMCSA&apos;s current list, and
              complete the change well before the deadline.
            </p>

            <section className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
                What carriers need to know
              </p>
              <ul className="mt-5 space-y-3">
                <Bullet>Five ELDs were removed for failing to meet minimum requirements in 49 CFR Part 395.</Bullet>
                <Bullet>Affected carriers should stop using the revoked device and temporarily use paper logs or compliant logging software.</Bullet>
                <Bullet>A registered replacement must be installed before October 6, 2026.</Bullet>
                <Bullet>Beginning October 6, continued use can result in a citation and the driver being placed out of service.</Bullet>
                <Bullet>FMCSA may restore a device if its provider corrects the deficiencies, but the agency strongly encourages carriers to replace it now.</Bullet>
              </ul>
            </section>

            <ArticleSection number="1" title="Which ELDs did FMCSA revoke?">
              <p>
                FMCSA&apos;s August 6 notice lists the following device names, models,
                and identifiers. Compare all three fields with the information in your
                ELD application, fleet portal, purchase records, or device settings.
                A similar product name is not enough to confirm a match.
              </p>
              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[560px] text-left text-sm sm:text-base">
                  <caption className="sr-only">
                    Five electronic logging devices revoked by FMCSA on August 6, 2026
                  </caption>
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th scope="col" className="px-4 py-4 sm:px-6">ELD name</th>
                      <th scope="col" className="px-4 py-4 sm:px-6">Model</th>
                      <th scope="col" className="px-4 py-4 sm:px-6">Identifier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {affectedDevices.map((device, index) => (
                      <tr key={device.identifier} className={index % 2 ? "bg-slate-50" : "bg-white"}>
                        <th scope="row" className="px-4 py-4 font-bold text-slate-950 sm:px-6">
                          {device.name}
                        </th>
                        <td className="px-4 py-4 sm:px-6">{device.model}</td>
                        <td className="px-4 py-4 font-mono font-bold sm:px-6">{device.identifier}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-500">
                Source: the{" "}
                <a
                  href="https://www.fmcsa.dot.gov/newsroom/fmcsa-removes-five-devices-list-registered-electronic-logging-devices-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  official FMCSA revocation notice
                </a>
                , published August 6, 2026.
              </p>
            </ArticleSection>

            <ArticleSection number="2" title="What affected carriers should do immediately">
              <p>
                FMCSA directs motor carriers to discontinue using a revoked ELD and
                revert to paper logs or logging software to record required
                hours-of-service information. Those methods are a temporary bridge—not
                a reason to wait until the final week.
              </p>
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8">
                <Action number="1" title="Confirm whether your device is affected">
                  Match the device name, model, and identifier to the table above.
                  Check every truck because a mixed fleet may use more than one model.
                </Action>
                <Action number="2" title="Preserve your existing records">
                  Export or download driver logs, edits, supporting documents, and
                  reports before closing the old account. Confirm how drivers can
                  produce the previous seven days of records during an inspection.
                </Action>
                <Action number="3" title="Start a temporary logging process">
                  Give each affected driver paper logbooks or an approved logging
                  method, plus written instructions. Make sure the driver knows how to
                  reconstruct the current day if the device becomes unavailable.
                </Action>
                <Action number="4" title="Select a registered replacement">
                  Verify the exact product on FMCSA&apos;s live registered-device list.
                  Do not rely only on a reseller&apos;s advertisement or an old screenshot.
                </Action>
                <Action number="5" title="Install, test, and train">
                  Test vehicle connections, unidentified-driving events, log transfers,
                  annotations, and roadside display functions. Train drivers and
                  dispatch before the first live trip.
                </Action>
              </ol>
            </ArticleSection>

            <ArticleSection number="3" title="How the enforcement timeline works">
              <p>
                The 60-day period runs through October 6, 2026. During that window,
                FMCSA says safety officials are encouraged not to cite drivers under
                49 CFR 395.8(a)(1) or 395.22(a) solely for using one of the listed
                devices. Officials should request paper logs or logging-software
                records, or use the ELD display as a backup method to review hours.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <TimelineCard
                  label="Through October 6"
                  title="Transition period"
                  detail="Use paper logs or logging software, preserve prior records, and install a registered replacement. Do not assume the revoked device alone will satisfy an inspection."
                />
                <TimelineCard
                  label="Beginning October 6"
                  title="Full enforcement"
                  detail="Continued use is treated as operating without an ELD. A driver can be cited under 395.8(a)(1) and placed out of service under CVSA criteria."
                />
              </div>
              <p className="mt-5">
                A transition period reduces immediate disruption, but it does not
                extend the legal status of the device. Carriers remain responsible for
                accurate records and hours-of-service compliance throughout the change.
              </p>
            </ArticleSection>

            <ArticleSection number="4" title="How to choose a compliant replacement ELD">
              <p>
                FMCSA maintains a list of devices that manufacturers have
                self-certified and registered. Start with the{" "}
                <a
                  href="https://eld.fmcsa.dot.gov/List"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  FMCSA Registered ELDs list
                </a>
                , then evaluate the product against your actual operation.
              </p>
              <p className="mt-5">Before signing a new contract, ask the provider to demonstrate:</p>
              <ul className="mt-5 grid gap-3 rounded-2xl bg-slate-50 p-6 sm:grid-cols-2">
                <Bullet>Exact device name and registration identifier</Bullet>
                <Bullet>Roadside data transfer and display</Bullet>
                <Bullet>Engine synchronization for your truck</Bullet>
                <Bullet>Driver and administrator training</Bullet>
                <Bullet>Unidentified-driving-event workflow</Bullet>
                <Bullet>Log export and record retention</Bullet>
                <Bullet>Offline operation and cellular coverage</Bullet>
                <Bullet>Support hours and escalation process</Bullet>
              </ul>
              <p className="mt-5">
                Registration is the starting point, not a complete product review.
                Compare contract length, hardware costs, monthly fees, installation,
                support, data ownership, and cancellation terms. Keep screenshots or
                PDFs showing that the exact device was registered when selected.
              </p>
            </ArticleSection>

            <ArticleSection number="5" title="Plan the record migration before changing systems">
              <p>
                Changing ELD providers can create a recordkeeping gap if the old portal
                is shut down too early. Before canceling, ask the outgoing provider how
                long data will remain accessible and which export formats are available.
                Store required records in a secure location that the carrier can retrieve.
              </p>
              <p className="mt-5">
                Build a written cutover plan for each truck and driver. Record the old
                device&apos;s last active date, the temporary logging period, the new
                device&apos;s installation date, and who verified the test. Drivers should
                carry the required ELD information packet and understand how to present
                both recent paper records and electronic records during the transition.
              </p>
            </ArticleSection>

            <ArticleSection number="6" title="What if a revoked device is restored?">
              <p>
                FMCSA says it may move a device back to the registered list if the
                provider corrects the identified deficiencies. However, restoration is
                not guaranteed, and timing may not match a carrier&apos;s dispatch schedule.
                The agency therefore strongly encourages motor carriers to take the
                actions in its notice rather than wait.
              </p>
              <p className="mt-5">
                If a vendor says its device has been restored, verify that statement on
                FMCSA&apos;s live list before resuming use. Save the verification date and
                device identifier in your compliance records.
              </p>
            </ArticleSection>

            <ArticleSection number="7" title="Common mistakes to avoid">
              <ul className="space-y-3 rounded-2xl border border-slate-200 p-6">
                <Bullet>Checking only the brand name instead of the exact model and identifier.</Bullet>
                <Bullet>Waiting for a vendor email while the federal replacement deadline approaches.</Bullet>
                <Bullet>Canceling the old account before exporting historical logs.</Bullet>
                <Bullet>Installing new hardware without testing roadside transfer functions.</Bullet>
                <Bullet>Assuming drivers know how to use paper logs or the replacement application.</Bullet>
                <Bullet>Buying from a reseller without verifying the device on FMCSA&apos;s current list.</Bullet>
              </ul>
            </ArticleSection>

            <ArticleSection number="8" title="Why brokers and shippers should care">
              <p>
                ELD compliance is primarily the motor carrier&apos;s responsibility, but an
                avoidable roadside shutdown can still interrupt pickup and delivery
                appointments. Brokers and shippers benefit when carriers monitor federal
                notices, document system changes, and build enough time into the rollout
                to avoid service disruptions.
              </p>
              <p className="mt-5">
                When evaluating capacity, review the same fundamentals that support
                reliable operations: active authority, current insurance, appropriate
                equipment, realistic scheduling, professional communication, and a
                functioning compliance program. Our guide to{" "}
                <Link href="/blog/how-to-choose-dry-van-carrier-texas" className={linkClass}>
                  choosing a reliable dry van carrier in Texas
                </Link>{" "}
                explains those checks in more detail.
              </p>
            </ArticleSection>

            <section className="mt-14 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Bottom Line
              </p>
              <h2 className="mt-4 text-3xl font-black">
                Replace affected ELDs before the October 6 deadline
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                If your fleet uses one of the five revoked devices, confirm the exact
                model, preserve existing records, begin a temporary compliant logging
                process, and install a registered replacement. Completing the cutover
                early leaves time to resolve hardware, training, or data-transfer
                problems before full enforcement begins.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="rounded-lg bg-orange-500 px-5 py-3 font-bold text-slate-950 hover:bg-orange-400"
                >
                  View Our Services
                </Link>
                <a
                  href="mailto:dispatch@onenesstransport.com"
                  className="rounded-lg border border-slate-600 px-5 py-3 font-bold text-white hover:border-orange-400 hover:text-orange-400"
                >
                  Email Dispatch
                </a>
              </div>
            </section>

            <section className="mt-14" aria-labelledby="sources-heading">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                Official Sources
              </p>
              <h2 id="sources-heading" className="mt-3 text-3xl font-black text-slate-950">
                Verify the current requirements
              </h2>
              <ul className="mt-6 space-y-4">
                <SourceLink
                  href="https://www.fmcsa.dot.gov/newsroom/fmcsa-removes-five-devices-list-registered-electronic-logging-devices-0"
                  title="FMCSA: Five devices removed from the registered ELD list"
                  detail="The August 6, 2026 notice, affected models, carrier instructions, and enforcement timeline."
                />
                <SourceLink
                  href="https://eld.fmcsa.dot.gov/List"
                  title="FMCSA Registered Electronic Logging Devices"
                  detail="The live federal list to check when selecting or verifying a replacement device."
                />
                <SourceLink
                  href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395"
                  title="Electronic Code of Federal Regulations: 49 CFR Part 395"
                  detail="Current federal hours-of-service and electronic logging requirements."
                />
              </ul>
              <p className="mt-8 text-sm leading-6 text-slate-500">
                This article is for general information and is not legal advice. FMCSA
                can restore devices or update its instructions. Carriers should check
                the official notice and current registered-device list before making a
                compliance decision.
              </p>
            </section>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-32 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">
                Compliance Snapshot
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <SideFact label="FMCSA notice" value="August 6, 2026" />
                <SideFact label="Devices removed" value="5" />
                <SideFact label="Replacement window" value="60 days" />
                <SideFact label="Deadline" value="October 6, 2026" />
              </dl>
              <a
                href="https://eld.fmcsa.dot.gov/List"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-lg bg-slate-950 px-4 py-3 text-center font-bold text-white hover:bg-orange-500 hover:text-slate-950"
              >
                Check FMCSA&apos;s ELD List
              </a>
              <p className="mt-6 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
                Status checked August 21, 2026. Verify the live federal list because a
                device&apos;s status can change.
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

function Action({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 font-black text-orange-700">
        {number}
      </span>
      <div>
        <h3 className="font-black text-slate-950">{title}</h3>
        <p className="mt-1">{children}</p>
      </div>
    </li>
  );
}

function TimelineCard({
  label,
  title,
  detail,
}: {
  label: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
      <p className="text-sm font-bold uppercase tracking-wider text-orange-700">{label}</p>
      <h3 className="mt-2 text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{detail}</p>
    </div>
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
