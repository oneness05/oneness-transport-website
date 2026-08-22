import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl =
  "https://www.onenesstransport.com/blog/cvsa-brake-safety-week-2026-checklist";
const articleImage =
  "https://www.onenesstransport.com/images/cvsa-brake-safety-week-2026.webp";
const publishedTime = "2026-08-22T12:40:00-05:00";

export const metadata: Metadata = {
  title: "CVSA Brake Safety Week 2026: Inspection Checklist",
  description:
    "Prepare for CVSA Brake Safety Week, August 23-29, 2026. Use this tractor-trailer brake checklist and understand the drum-and-rotor focus.",
  keywords: [
    "CVSA Brake Safety Week 2026",
    "truck brake inspection checklist",
    "August 23 29 2026 truck inspections",
    "brake drum rotor inspection",
    "dry van roadside inspection preparation",
  ],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title: "CVSA Brake Safety Week 2026: A Practical Carrier Checklist",
    description:
      "What drivers and small carriers should inspect before the August 23-29 brake-safety enforcement initiative.",
    publishedTime,
    modifiedTime: publishedTime,
    authors: ["ONENESS TRANSPORT LLC"],
    images: [
      {
        url: articleImage,
        width: 1672,
        height: 941,
        alt: "Diesel technician inspecting a heavy-truck brake rotor before Brake Safety Week",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CVSA Brake Safety Week 2026: Inspection Checklist",
    description:
      "Dates, 2026 drum-and-rotor focus, tractor-trailer checks, and roadside report steps.",
    images: [articleImage],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "CVSA Brake Safety Week 2026: A Practical Inspection Checklist",
  description:
    "A practical guide for drivers and small carriers preparing for CVSA Brake Safety Week, August 23-29, 2026, with a focus on brake drums and rotors.",
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
      name: "CVSA Brake Safety Week 2026 Checklist",
      item: articleUrl,
    },
  ],
};

const linkClass =
  "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function BrakeSafetyWeekArticle() {
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
              Maintenance &amp; Compliance News
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              CVSA Brake Safety Week 2026: A Practical Inspection Checklist
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              The August 23-29 enforcement dates, this year&apos;s drum-and-rotor
              emphasis, and the checks a small carrier should complete on both the
              tractor and dry-van trailer.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>By ONENESS TRANSPORT LLC</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime="2026-08-22">August 22, 2026</time>
              <span aria-hidden="true">&middot;</span>
              <span>9 min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto -mt-8 max-w-6xl px-5">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
            <Image
              src="/images/cvsa-brake-safety-week-2026.webp"
              alt="Diesel technician inspecting a heavy-truck brake rotor before Brake Safety Week"
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
              The Commercial Vehicle Safety Alliance&apos;s 2026 Brake Safety Week runs
              from August 23 through August 29. Certified inspectors in the United
              States, Canada, and Mexico will conduct routine commercial-vehicle
              inspections with added attention on brake systems. This year&apos;s announced
              focus is the condition of brake drums and rotors.
            </p>
            <p className="mt-6">
              The week does not create a new maintenance rule or a special exemption
              for getting to a repair shop. It concentrates inspection and education
              on requirements that apply throughout the year. For an owner-operator or
              small dry-van fleet, the useful response is a documented inspection by
              qualified people—not a rushed cosmetic check at the truck stop.
            </p>

            <section className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
                Key facts for August 23-29
              </p>
              <ul className="mt-5 space-y-3">
                <Bullet>Inspectors will perform normal commercial-vehicle inspections, with brake systems receiving special attention.</Bullet>
                <Bullet>Vehicles with brake-related or other out-of-service conditions can be restricted from travel until repairs are completed.</Bullet>
                <Bullet>CVSA&apos;s 2026 focus is visible drum and rotor condition, including cracks, missing pieces, severe rust, grooves, and excessive wear.</Bullet>
                <Bullet>Both the tractor and trailer matter; a recently leased or picked-up trailer should not be assumed road-ready.</Bullet>
                <Bullet>Drivers should report defects, while brake inspection and repair responsibility belongs with properly qualified personnel.</Bullet>
              </ul>
            </section>

            <ArticleSection number="1" title="Why drums and rotors are the 2026 focus">
              <p>
                CVSA says drum and rotor problems can reduce brake efficiency, and
                broken material can separate from a moving vehicle. Its official 2026
                flyer tells drivers and operators to examine visible surfaces during
                pre- and post-trip inspections and to look for cracked or missing
                material, heavy rust across a rotor&apos;s friction surface, metal-to-metal
                grooving, and wear that exposes a rotor&apos;s center vents.
              </p>
              <p className="mt-5">
                Those observations align with federal brake rules. Under{" "}
                <a
                  href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-C/section-393.47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  49 CFR 393.47
                </a>
                , brake components must be constructed, installed, and maintained for
                safe and reliable stopping. The rule addresses actuators, slack
                adjusters, linings or pads, and drums or rotors. Section 393.48 also
                requires brakes to remain operative.
              </p>
              <p className="mt-5">
                Last year&apos;s results show why preparation matters. During the 2025
                Brake Safety Week, CVSA reported 15,175 inspections and 2,296 vehicles
                placed out of service for brake-related violations—a 15.1% rate. The
                most-cited reason was an out-of-service condition affecting 20% or more
                of a combination&apos;s service brakes. That percentage is historical
                context, not a prediction of what inspectors will find in 2026.
              </p>
            </ArticleSection>

            <ArticleSection number="2" title="Driver walk-around: visible checks before dispatch">
              <p>
                A driver&apos;s walk-around can catch warning signs, but it is not a
                substitute for a qualified brake inspection. Park on a level surface,
                secure the vehicle against movement, use appropriate lighting, and do
                not place yourself under or between equipment that is not safely
                supported and protected from movement.
              </p>
              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[640px] text-left text-sm sm:text-base">
                  <caption className="sr-only">Driver brake inspection checklist</caption>
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th scope="col" className="px-4 py-4 sm:px-6">Area</th>
                      <th scope="col" className="px-4 py-4 sm:px-6">What the driver can check</th>
                      <th scope="col" className="px-4 py-4 sm:px-6">Escalate when</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <CheckRow area="Air system" check="Listen for leaks; confirm warning devices and pressure behavior during the carrier's approved air-brake test." escalate="Pressure will not build or hold normally, a warning device fails, or an audible leak is present." />
                    <CheckRow area="Hoses and tubing" check="Look for chafing, kinks, bulges, cracks, loose routing, and contact with moving or hot parts." escalate="A hose is damaged, leaking, improperly joined, or rubbing where failure could occur." />
                    <CheckRow area="Drums and rotors" check="Use a light to view accessible surfaces for cracks, missing pieces, severe rust, grooves, or discoloration." escalate="Any broken material, crack, metal-to-metal groove, exposed vent, or uncertain condition is visible." />
                    <CheckRow area="Linings and pads" check="Observe accessible areas for obvious thinness, contamination, missing material, or uneven wear." escalate="Material appears loose, soaked with oil or grease, missing, or below an approved service limit." />
                    <CheckRow area="Brake hardware" check="Look for missing, loose, damaged, or displaced visible components and abnormal pushrod position." escalate="Hardware is missing or movement looks different side-to-side; do not make an unqualified adjustment." />
                    <CheckRow area="Trailer connection" check="Confirm gladhands are seated, seals look serviceable, lines are supported, and the trailer-brake response is normal." escalate="Connections leak, lines drag or bind, or the trailer does not respond correctly." />
                  </tbody>
                </table>
              </div>
              <p className="mt-5">
                Also note pulling, vibration, delayed release, burning odor, smoke,
                unusual heat, or a change in stopping feel. Do not continue simply
                because the truck still moves. Report the symptom and have the cause
                evaluated before the next dispatch.
              </p>
            </ArticleSection>

            <ArticleSection number="3" title="Shop checklist: inspect the whole combination">
              <p>
                Federal rules require motor carriers to systematically inspect,
                repair, and maintain vehicles under their control. For Brake Safety
                Week preparation, give the technician enough time to check the tractor
                and the trailer as one operating combination. A useful work order
                should identify the unit, date, findings, measurements where
                applicable, repairs, parts, and the person who completed or approved
                the work.
              </p>
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8">
                <Action number="1" title="Measure—not guess">
                  Have a qualified person verify lining or pad thickness, drum or rotor
                  condition, pushrod travel where applicable, and adjustment against
                  the correct specifications.
                </Action>
                <Action number="2" title="Inspect every wheel end">
                  A clean steer axle does not clear the drives or trailer. Compare
                  components across each axle and investigate uneven wear, oil or
                  grease contamination, and heat evidence.
                </Action>
                <Action number="3" title="Test the air system and protection devices">
                  Check for leakage, proper pressure buildup, warning operation,
                  tractor protection, trailer emergency function, and service-brake
                  response using an approved procedure.
                </Action>
                <Action number="4" title="Review hoses, chambers, and hardware">
                  Verify routing, securement, chamber condition, matching components
                  where required, and that no part is cracked, loose, missing, or
                  contacting another component.
                </Action>
                <Action number="5" title="Close the paperwork loop">
                  Record defects and repairs in the carrier&apos;s maintenance system. Keep
                  evidence of the qualifications required for employees responsible
                  for brake inspection, maintenance, service, or repair.
                </Action>
              </ol>
              <p className="mt-5">
                CVSA&apos;s flyer specifically says repairs should follow the brake
                manufacturer&apos;s requirements. An annual inspection sticker is useful,
                but it does not prove that a brake remained compliant after months of
                service. Current condition controls.
              </p>
            </ArticleSection>

            <ArticleSection number="4" title="Dry-van carriers: do not overlook the trailer">
              <p>
                Small carriers often focus on the tractor because they know its
                maintenance history. The trailer may have changed hands, sat for a
                period, or accumulated defects between scheduled services. Before
                accepting a rental, interchange, or unfamiliar trailer, confirm its
                current annual-inspection status and conduct a real pre-trip check.
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                <Card title="At pickup">Check air lines and seals, listen for leaks, test trailer brake response, examine accessible wheel ends, and photograph/report defects before leaving.</Card>
                <Card title="After loading">Recheck line clearance, coupling, tire and wheel condition, lights, and anything that may have changed while the equipment was moved or loaded.</Card>
                <Card title="After a repair">Obtain the repair order and verify that the reported defect—not only the symptom—was addressed before returning to service.</Card>
                <Card title="During the trip">Treat heat, odor, smoke, pulling, vibration, warning lights, or abnormal air behavior as a stop-and-investigate event.</Card>
              </ul>
            </ArticleSection>

            <ArticleSection number="5" title="What happens after a roadside inspection report">
              <p>
                If a vehicle is declared out of service, it cannot be operated until
                the required repairs are satisfactorily completed. Federal rule{" "}
                <a
                  href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396/section-396.9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  49 CFR 396.9
                </a>
                {" "}also establishes a paperwork trail. A driver must deliver or
                transmit the inspection report to the carrier after reaching the next
                terminal or facility—or within 24 hours if the driver will not reach
                one in that period.
              </p>
              <p className="mt-5">
                The carrier must examine the report and correct the noted violations
                or defects. Within 15 days, the carrier must certify that corrections
                were made and, when requested by the issuing state agency, return the
                completed form. A copy must be retained for 12 months. Build this into
                dispatch procedure now so the report does not remain in a cab pocket.
              </p>
            </ArticleSection>

            <ArticleSection number="6" title="A simple 24-hour preparation plan">
              <ol className="mt-2 space-y-5">
                <Action number="1" title="Assign each active tractor and trailer">
                  Create a unit list and name the driver or technician responsible for
                  completing the check. Include spare and recently rented equipment.
                </Action>
                <Action number="2" title="Complete the driver inspection">
                  Use the carrier&apos;s normal pre-trip procedure plus the visible drum,
                  rotor, hose, lining, connection, and air-system checks above.
                </Action>
                <Action number="3" title="Route defects to qualified maintenance">
                  Do not coach a driver to turn an automatic slack adjuster or improvise
                  a repair. Park questionable equipment and obtain a qualified
                  evaluation.
                </Action>
                <Action number="4" title="Verify repair documentation">
                  Match the repair order to the unit and defect, then retain it in the
                  maintenance file. Tell dispatch when the unit is actually cleared.
                </Action>
                <Action number="5" title="Brief the driver">
                  Confirm the driver knows how to report an inspection, who to call
                  after hours, and that an out-of-service vehicle cannot continue until
                  the cited condition is repaired.
                </Action>
              </ol>
            </ArticleSection>

            <section className="mt-12 rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                Bottom line
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Prepare the equipment, the driver, and the records
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Brake Safety Week increases attention, but safe brakes are a daily
                obligation. A careful driver walk-around, a complete tractor-trailer
                inspection by qualified personnel, prompt repair, and usable records
                are more valuable than any last-minute shortcut.
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
                <SourceLink href="https://cvsa.org/news/2026-bsw-dates/">CVSA announcement: Brake Safety Week scheduled for August 23-29, 2026</SourceLink>
                <SourceLink href="https://cvsa.org/wp-content/uploads/2026-BSW-Flyer-English.pdf">CVSA 2026 Brake Safety Week drum-and-rotor flyer</SourceLink>
                <SourceLink href="https://cvsa.org/news/2025-bsw-results/">CVSA 2025 Brake Safety Week results</SourceLink>
                <SourceLink href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-C">eCFR: 49 CFR Part 393, Subpart C—Brakes</SourceLink>
                <SourceLink href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396">eCFR: 49 CFR Part 396—Inspection, Repair, and Maintenance</SourceLink>
              </ul>
              <p className="mt-7 text-sm leading-6 text-slate-500">
                This article is general informational material, not legal, mechanical,
                insurance, or safety-certification advice. Use the current regulations,
                applicable out-of-service criteria, manufacturer instructions, and
                qualified inspection and repair professionals for your equipment.
                ONENESS TRANSPORT LLC has no paid relationship with CVSA or the agencies
                cited in this article.
              </p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">In this guide</p>
              <ol className="mt-4 space-y-3 text-sm font-semibold text-slate-700">
                <li>2026 drum-and-rotor focus</li>
                <li>Driver visible checks</li>
                <li>Qualified shop inspection</li>
                <li>Dry-van trailer risks</li>
                <li>Roadside report deadlines</li>
                <li>24-hour action plan</li>
              </ol>
            </div>
            <div className="rounded-2xl bg-orange-600 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-100">Read next</p>
              <Link href="/blog/fmcsa-revoked-elds-october-2026-deadline" className="mt-3 block text-lg font-black leading-7 hover:text-orange-100">
                FMCSA Revoked Five ELDs: October Replacement Guide
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

function Action({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-black text-white">{number}</span>
      <div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-1">{children}</p></div>
    </li>
  );
}

function CheckRow({ area, check, escalate }: { area: string; check: string; escalate: string }) {
  return <tr className="align-top odd:bg-white even:bg-slate-50"><th scope="row" className="px-4 py-4 font-bold text-slate-950 sm:px-6">{area}</th><td className="px-4 py-4 sm:px-6">{check}</td><td className="px-4 py-4 sm:px-6">{escalate}</td></tr>;
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6">{children}</p></li>;
}

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <li><a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{children}</a></li>;
}
