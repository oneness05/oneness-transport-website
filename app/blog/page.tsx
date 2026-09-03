import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trucking News, Freight Resources & Dry Van Insights",
  description:
    "Trucking regulation news and practical dry van transportation resources for drivers, carriers, freight brokers, and shippers.",
  alternates: {
    canonical: "https://www.onenesstransport.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main>
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Freight Resources
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight">
            Trucking news and freight insights
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Clear reporting on trucking regulations plus practical resources for
            drivers, carriers, brokers, and shippers.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8">
          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link href="/blog/how-to-calculate-trucking-cost-per-mile-owner-operators" className="relative block min-h-80 overflow-hidden" aria-label="Read How to Calculate Trucking Cost Per Mile">
              <Image src="/images/trucking-cost-per-mile-owner-operator-2026.webp" alt="Dry van truck beside a calculator and operating-cost worksheet for cost-per-mile planning" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover transition duration-500 hover:scale-[1.02]" />
            </Link>
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500"><span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">Owner-Operator Business</span><time dateTime="2026-09-03">September 3, 2026</time><span aria-hidden="true">&middot;</span><span>12 min read</span></div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950"><Link href="/blog/how-to-calculate-trucking-cost-per-mile-owner-operators" className="transition hover:text-orange-600">How to Calculate Trucking Cost Per Mile</Link></h2>
              <p className="mt-5 leading-8 text-slate-600">Calculate fixed and variable costs, deadhead, owner pay, reserves, loaded-mile break-even, and the minimum rate your truck needs.</p>
              <Link href="/blog/how-to-calculate-trucking-cost-per-mile-owner-operators" className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700">Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span></Link>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link href="/blog/freight-factoring-comparison-owner-operators-2026" className="relative block min-h-80 overflow-hidden" aria-label="Read Outgo vs RTS vs OTR vs Triumph freight factoring comparison">
              <Image src="/images/freight-factoring-comparison-2026.webp" alt="Dry van carrier comparing four unlabeled freight factoring offers, funding timelines, and invoice costs" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover transition duration-500 hover:scale-[1.02]" />
            </Link>
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500"><span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">Factoring &amp; Carrier Cash Flow</span><time dateTime="2026-09-02">September 2, 2026</time><span aria-hidden="true">&middot;</span><span>11 min read</span></div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950"><Link href="/blog/freight-factoring-comparison-owner-operators-2026" className="transition hover:text-orange-600">Outgo vs RTS vs OTR vs Triumph: Freight Factoring Comparison</Link></h2>
              <p className="mt-5 leading-8 text-slate-600">Compare current public rates, funding claims, recourse language, reserves, transfer fees, and contract terms before assigning your invoices.</p>
              <Link href="/blog/freight-factoring-comparison-owner-operators-2026" className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700">Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span></Link>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link href="/blog/trucking-insurance-coverage-comparison-owner-operators" className="relative block min-h-80 overflow-hidden" aria-label="Read Trucking Insurance Coverage Comparison for Owner-Operators">
              <Image src="/images/trucking-insurance-coverage-comparison-2026.webp" alt="Dry van truck surrounded by symbols for liability, cargo, equipment, trailer, and off-duty insurance protection" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover transition duration-500 hover:scale-[1.02]" />
            </Link>
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">Insurance &amp; Owner-Operator Business</span>
                <time dateTime="2026-09-01">September 1, 2026</time><span aria-hidden="true">&middot;</span><span>11 min read</span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950"><Link href="/blog/trucking-insurance-coverage-comparison-owner-operators" className="transition hover:text-orange-600">Trucking Insurance Coverage Comparison for Owner-Operators</Link></h2>
              <p className="mt-5 leading-8 text-slate-600">Compare primary liability, cargo, physical damage, bobtail, non-trucking liability, general liability, and trailer interchange—plus the gaps to review before binding.</p>
              <Link href="/blog/trucking-insurance-coverage-comparison-owner-operators" className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700">Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span></Link>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link
              href="/blog/fmcsa-cdl-training-provider-audit-2026"
              className="relative block min-h-80 overflow-hidden"
              aria-label="Read FMCSA CDL Training Crackdown: What Carriers Should Know"
            >
              <Image
                src="/images/fmcsa-cdl-training-audit-2026.webp"
                alt="Dry van truck, CDL card, compliance checklist, and nationwide training-provider audit map"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition duration-500 hover:scale-[1.02]"
              />
            </Link>
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
                  CDL Training &amp; Compliance News
                </span>
                <time dateTime="2026-08-31">August 31, 2026</time>
                <span aria-hidden="true">&middot;</span>
                <span>10 min read</span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">
                <Link href="/blog/fmcsa-cdl-training-provider-audit-2026" className="transition hover:text-orange-600">
                  FMCSA CDL Training Crackdown: What Carriers Should Know
                </Link>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Understand the 110 emergency school removals, 160-plus proposed removals,
                nationwide skills-tester audit, and the verification steps drivers can take now.
              </p>
              <Link href="/blog/fmcsa-cdl-training-provider-audit-2026" className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700">
                Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link
              href="/blog/freight-broker-packet-checklist-new-carriers"
              className="relative block min-h-80 overflow-hidden"
              aria-label="Read Freight Broker Packet Checklist for New Carriers"
            >
              <Image
                src="/images/freight-broker-packet-checklist-2026.webp"
                alt="Owner-operator organizing a freight broker onboarding packet in a trucking office"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition duration-500 hover:scale-[1.02]"
              />
            </Link>
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
                  Broker Onboarding &amp; Carrier Operations
                </span>
                <time dateTime="2026-08-25">August 25, 2026</time>
                <span aria-hidden="true">&middot;</span>
                <span>10 min read</span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">
                <Link href="/blog/freight-broker-packet-checklist-new-carriers" className="transition hover:text-orange-600">
                  Freight Broker Packet Checklist for New Carriers
                </Link>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Organize authority, insurance, W-9, payment, equipment, and contact
                records—then verify the broker before sharing sensitive documents.
              </p>
              <Link href="/blog/freight-broker-packet-checklist-new-carriers" className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700">
                Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link
              href="/blog/owner-operator-fuel-card-comparison-2026"
              className="relative block min-h-80 overflow-hidden"
              aria-label="Read AtoB vs Mudflap vs RTS: Fuel Cards for Owner-Operators in 2026"
            >
              <Image
                src="/images/owner-operator-fuel-card-comparison-2026.webp"
                alt="Owner-operator comparing three unbranded fuel-card options beside a dry van truck"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition duration-500 hover:scale-[1.02]"
              />
            </Link>

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
                  Fuel Cards &amp; Owner-Operator Costs
                </span>
                <time dateTime="2026-08-24">August 24, 2026</time>
                <span aria-hidden="true">&middot;</span>
                <span>10 min read</span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">
                <Link
                  href="/blog/owner-operator-fuel-card-comparison-2026"
                  className="transition hover:text-orange-600"
                >
                  AtoB vs Mudflap vs RTS: Fuel Cards for Owner-Operators in 2026
                </Link>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Compare current public fees, prepaid and credit choices, discount
                networks, limitations, and a seven-day lane test for one-truck carriers.
              </p>
              <Link
                href="/blog/owner-operator-fuel-card-comparison-2026"
                className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700"
              >
                Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link
              href="/blog/fmcsa-new-entrant-safety-audit-checklist"
              className="relative block min-h-80 overflow-hidden"
              aria-label="Read FMCSA New Entrant Safety Audit Checklist for Small Carriers"
            >
              <Image
                src="/images/fmcsa-new-entrant-safety-audit-2026.webp"
                alt="Owner-operator organizing truck compliance records for a new entrant safety audit"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition duration-500 hover:scale-[1.02]"
              />
            </Link>

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
                  Owner-Operator Compliance
                </span>
                <time dateTime="2026-08-23">August 23, 2026</time>
                <span aria-hidden="true">&middot;</span>
                <span>10 min read</span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">
                <Link
                  href="/blog/fmcsa-new-entrant-safety-audit-checklist"
                  className="transition hover:text-orange-600"
                >
                  FMCSA New Entrant Safety Audit Checklist for Small Carriers
                </Link>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Organize driver, ELD, vehicle, insurance, drug-testing, and accident
                records before FMCSA requests them—and understand the automatic-
                failure risks.
              </p>
              <Link
                href="/blog/fmcsa-new-entrant-safety-audit-checklist"
                className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700"
              >
                Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link
              href="/blog/cvsa-brake-safety-week-2026-checklist"
              className="relative block min-h-80 overflow-hidden"
              aria-label="Read CVSA Brake Safety Week 2026: A Practical Inspection Checklist"
            >
              <Image
                src="/images/cvsa-brake-safety-week-2026.webp"
                alt="Diesel technician inspecting a heavy-truck brake rotor before Brake Safety Week"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition duration-500 hover:scale-[1.02]"
              />
            </Link>

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
                  Maintenance &amp; Compliance News
                </span>
                <time dateTime="2026-08-22">August 22, 2026</time>
                <span aria-hidden="true">&middot;</span>
                <span>9 min read</span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">
                <Link
                  href="/blog/cvsa-brake-safety-week-2026-checklist"
                  className="transition hover:text-orange-600"
                >
                  CVSA Brake Safety Week 2026: A Practical Inspection Checklist
                </Link>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Prepare for the August 23-29 inspection initiative with the 2026
                drum-and-rotor focus, tractor-trailer checks, repair documentation,
                and roadside report deadlines.
              </p>
              <Link
                href="/blog/cvsa-brake-safety-week-2026-checklist"
                className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700"
              >
                Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link
              href="/blog/fmcsa-revoked-elds-october-2026-deadline"
              className="relative block min-h-80 overflow-hidden"
              aria-label="Read FMCSA Revoked Five ELDs—What Carriers Must Do Before October 6"
            >
              <Image
                src="/images/fmcsa-revoked-elds-2026.webp"
                alt="Dry van truck with an electronic logging device warning and compliance calendar"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition duration-500 hover:scale-[1.02]"
              />
            </Link>

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
                  ELD &amp; Compliance News
                </span>
                <time dateTime="2026-08-21">August 21, 2026</time>
                <span aria-hidden="true">&middot;</span>
                <span>8 min read</span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">
                <Link
                  href="/blog/fmcsa-revoked-elds-october-2026-deadline"
                  className="transition hover:text-orange-600"
                >
                  FMCSA Revoked Five ELDs—What Carriers Must Do Before October 6
                </Link>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Check the five affected devices, the October 6 replacement deadline,
                enforcement timeline, and practical steps for preserving driver logs
                and completing a compliant cutover.
              </p>
              <Link
                href="/blog/fmcsa-revoked-elds-october-2026-deadline"
                className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700"
              >
                Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link
              href="/blog/california-non-domiciled-cdl-crash-data"
              className="relative block min-h-80 overflow-hidden"
              aria-label="Read California Says Non-Domiciled CDL Holders Had Lower Crash Rates"
            >
              <Image
                src="/images/california-non-domiciled-cdl-court-case.png"
                alt="Editorial illustration of a dry van truck, California, crash data, a CDL card, and courthouse scales"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition duration-500 hover:scale-[1.02]"
              />
            </Link>

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
                  Trucking Regulation News
                </span>
                <time dateTime="2026-08-16">August 16, 2026</time>
                <span aria-hidden="true">&middot;</span>
                <span>9 min read</span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">
                <Link
                  href="/blog/california-non-domiciled-cdl-crash-data"
                  className="transition hover:text-orange-600"
                >
                  California Says Non-Domiciled CDL Holders Had Lower Crash Rates
                </Link>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                A point-by-point review of California&apos;s 2022–2024 crash figures,
                the study&apos;s limits, FMCSA&apos;s final rule, and the pending federal
                court challenge.
              </p>
              <Link
                href="/blog/california-non-domiciled-cdl-crash-data"
                className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700"
              >
                Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link
              href="/blog/how-to-choose-dry-van-carrier-texas"
              className="relative block min-h-80 overflow-hidden"
              aria-label="Read How to Choose a Reliable Dry Van Carrier in Texas"
            >
              <Image
                src="/images/texas-dry-van-carrier.webp"
                alt="Modern navy semi-truck pulling a 53-foot dry van near Austin, Texas"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition duration-500 hover:scale-[1.02]"
              />
            </Link>

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
                  Carrier Selection
                </span>
                <time dateTime="2026-08-16">August 16, 2026</time>
                <span aria-hidden="true">&middot;</span>
                <span>7 min read</span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">
                <Link
                  href="/blog/how-to-choose-dry-van-carrier-texas"
                  className="transition hover:text-orange-600"
                >
                  How to Choose a Reliable Dry Van Carrier in Texas
                </Link>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Seven important checks for evaluating a carrier&apos;s authority,
                insurance, equipment, safety practices, schedule, and communication
                before tendering a load.
              </p>
              <Link
                href="/blog/how-to-choose-dry-van-carrier-texas"
                className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700"
              >
                Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
