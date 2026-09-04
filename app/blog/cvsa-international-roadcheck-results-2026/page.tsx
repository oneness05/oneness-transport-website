import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl = "https://www.onenesstransport.com/blog/cvsa-international-roadcheck-results-2026";
const articleImage = "https://www.onenesstransport.com/images/cvsa-roadcheck-results-2026.webp";
const publishedTime = "2026-09-04T15:47:00-05:00";

export const metadata: Metadata = {
  title: "2026 CVSA Roadcheck Results: Carrier Checklist",
  description: "CVSA's 2026 International Roadcheck results explained: vehicle and driver out-of-service rates, cargo securement, brakes, tires, ELDs, and carrier actions.",
  keywords: ["CVSA Roadcheck results 2026", "International Roadcheck 2026", "cargo securement violations", "truck inspection checklist", "commercial vehicle out of service violations"],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article", url: articleUrl,
    title: "2026 CVSA International Roadcheck Results: What Carriers Should Fix",
    description: "The newest inspection data translated into a practical preparation plan for small carriers and dry-van operators.",
    publishedTime, modifiedTime: publishedTime, authors: ["ONENESS TRANSPORT LLC"],
    images: [{ url: articleImage, width: 1672, height: 941, alt: "Dry van truck undergoing a professional roadside safety inspection with brake, tire, light, medical-card, and ELD symbols" }],
  },
  twitter: { card: "summary_large_image", title: "2026 CVSA Roadcheck Results: Carrier Checklist", description: "Vehicle and driver out-of-service findings, cargo-securement lessons, and practical carrier actions.", images: [articleImage] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "NewsArticle",
  headline: "2026 CVSA International Roadcheck Results: What Carriers Should Fix",
  description: "An evidence-based explanation of CVSA's 2026 International Roadcheck results and a practical compliance checklist for small motor carriers.",
  image: [articleImage], datePublished: publishedTime, dateModified: publishedTime,
  author: { "@type": "Organization", name: "ONENESS TRANSPORT LLC", url: "https://www.onenesstransport.com" },
  publisher: { "@type": "Organization", name: "ONENESS TRANSPORT LLC", logo: { "@type": "ImageObject", url: "https://www.onenesstransport.com/logos/logo-header.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.onenesstransport.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.onenesstransport.com/blog" },
    { "@type": "ListItem", position: 3, name: "2026 CVSA Roadcheck Results", item: articleUrl },
  ],
};

const linkClass = "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function CvsaRoadcheckResultsArticle() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="bg-slate-950 px-5 pb-16 pt-12 text-white lg:pb-20 lg:pt-16">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-400"><Link href="/" className="hover:text-orange-400">Home</Link><span className="mx-2" aria-hidden="true">/</span><Link href="/blog" className="hover:text-orange-400">Blog</Link></nav>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Inspection &amp; Compliance News</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">2026 CVSA Roadcheck Results: What Carriers Should Fix</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">The newest North American inspection data shows where trucks and drivers were placed out of service—and where a small carrier should focus next.</p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400"><span>By ONENESS TRANSPORT LLC</span><span aria-hidden="true">&middot;</span><time dateTime="2026-09-04">September 4, 2026</time><span aria-hidden="true">&middot;</span><span>11 min read</span></div>
          </div>
        </header>

        <div className="mx-auto -mt-8 max-w-6xl px-5"><div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl"><Image src="/images/cvsa-roadcheck-results-2026.webp" alt="Dry van truck undergoing a professional roadside safety inspection with brake, tire, light, medical-card, and ELD symbols" fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" /></div></div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 text-[1.0625rem] leading-8 text-slate-700">
            <p className="text-xl leading-9">CVSA released the results of its 2026 International Roadcheck on August 25. During the May 12–14 enforcement initiative, inspectors completed 54,575 inspections across the United States, Canada, and Mexico. Most inspected vehicles and drivers had no out-of-service violation, but the results identify recurring risks that carriers can address before the next roadside inspection.</p>
            <p className="mt-6">This article separates inspection counts from violation counts, explains the cargo-securement and ELD focus areas, and converts the findings into practical steps. An out-of-service order is more serious than a routine violation: the affected vehicle or driver cannot continue until the disqualifying condition is corrected or brought into compliance.</p>

            <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-slate-950 px-6 py-4 text-white"><h2 className="text-xl font-black">2026 International Roadcheck at a glance</h2></div>
              <div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-slate-100 text-slate-950"><tr><th className="px-5 py-4">Measure</th><th className="px-5 py-4">Result</th><th className="px-5 py-4">What it means</th></tr></thead><tbody className="divide-y divide-slate-200">
                <Row measure="Total inspections" result="54,575" meaning="Driver and vehicle inspections conducted across North America" />
                <Row measure="Vehicle inspections (Levels I, II and V)" result="44,047" meaning="10,350 vehicles or combinations were placed out of service: 23.5%" />
                <Row measure="Driver inspections (Levels I, II and III)" result="53,271" meaning="3,184 drivers were placed out of service: 6.0%" />
                <Row measure="CVSA decals" result="17,680" meaning="Eligible U.S. and Canadian vehicles passed without critical mechanical or OOS violations" />
                <Row measure="Cargo-securement OOS violations" result="1,724" meaning="12.4% of the 13,924 vehicle OOS violations found" />
                <Row measure="ELD-tampering OOS orders" result="146" meaning="3.7% of reported driver OOS violations; seventh-ranked driver OOS category" />
              </tbody></table></div>
              <p className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-xs leading-5 text-slate-500">A single vehicle or driver can have multiple violations. Violation-category percentages are shares of out-of-service violations—not the percentage of all trucks on the road.</p>
            </section>

            <Section title="1. The vehicle out-of-service rate deserves attention">
              <p>Among the 44,047 Level I, II, and V inspections that involved vehicles, 10,350 vehicles or combinations were placed out of service—a 23.5% rate. Inspectors recorded 13,924 vehicle out-of-service violations because one vehicle may have more than one disqualifying condition.</p>
              <p className="mt-5">This was an enforcement event, not a random scientific sample of every commercial vehicle. Inspection locations, selection practices, carrier mix, and regional operations can affect the results. A carrier should not treat 23.5% as its predicted inspection outcome. The useful lesson is that critical defects were common enough to justify disciplined pre-trip checks and documented maintenance.</p>
            </Section>

            <Section title="2. Brakes remained the largest vehicle problem">
              <p>Brake-system violations were the largest category, with 3,379 out-of-service violations, or 24.3% of all vehicle OOS violations. CVSA separately recorded 2,072 violations under the 20%-defective-brakes criterion. Together, those two brake categories represented 5,451 violations—39.1% of all vehicle OOS violations found during the event.</p>
              <p className="mt-5">For carriers, the response should extend beyond checking whether the truck stops. Inspect air lines and chambers, listen for leaks, monitor warning devices, look for contamination and missing or damaged components, and have qualified personnel verify adjustment and lining or pad condition. Trailer brakes belong in the same program as tractor brakes.</p>
              <p className="mt-5">Our <Link href="/blog/cvsa-brake-safety-week-2026-checklist" className={linkClass}>Brake Safety Week checklist</Link> gives a more detailed tractor-and-trailer workflow. Drivers should report defects promptly, and a carrier should not dispatch equipment with an unresolved condition that affects safe operation.</p>
            </Section>

            <Section title="3. Tires were the second-largest OOS category">
              <p>Inspectors identified 2,914 tire-related out-of-service violations, equal to 20.9% of vehicle OOS violations. A practical tire check includes inflation, tread, cuts, exposed cord, bulges, sidewall damage, objects, mismatched duals, valve stems, and evidence of contact or rubbing. The carrier must also confirm that tires are appropriate for their position and load.</p>
              <p className="mt-5">Inspect the inside dual and trailer tires instead of viewing only the easiest side. Heat, underinflation, and irregular wear often reveal alignment, suspension, bearing, or brake problems. Record pressure and damage trends so a repeated issue leads to diagnosis rather than another roadside replacement.</p>
            </Section>

            <Section title="4. Cargo securement was the event’s vehicle focus">
              <p>CVSA counted 1,724 cargo-securement out-of-service violations—12.4% of the 13,924 vehicle OOS violations. Cargo securement ranked fourth across North America and fifth in the United States. The category covers freight that is not adequately restrained, immobilized, locked, tied down, packed, or monitored.</p>
              <p className="mt-5">A closed dry van does not automatically make every load secure. Federal rules require cargo to be contained, immobilized, or secured so it cannot leak, spill, blow, fall, or shift enough to affect stability or maneuverability. Trailer walls, floors, anchor points, straps, bars, dunnage, and other components used as part of the securement system must be strong enough and free from damage that weakens performance.</p>
              <p className="mt-5">Before leaving, verify weight distribution, axle limits, pallet condition, void space, blocking and bracing, strap or load-bar condition, anchor-point integrity, and door closure. Commodity-specific rules may apply—for example, to certain metal coils or paper rolls—so a general pallet procedure is not enough for every load.</p>
            </Section>

            <Section title="5. The first 50 miles matter—and so do rechecks">
              <p>Under <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-392#p-392.9(b)" target="_blank" rel="noopener noreferrer" className={linkClass}>49 CFR §392.9</a>, a driver generally must inspect cargo and securement within the first 50 miles and make necessary adjustments. The driver must reexamine when changing duty status, after three hours of driving, or after 150 miles, whichever occurs first.</p>
              <p className="mt-5">The rule includes exceptions when a sealed vehicle may not be opened or cargo is loaded so inspection is impracticable. A seal does not justify guessing. The driver should document the seal number and shipper restriction, inspect what is accessible, check doors and external equipment, and report a suspected shift or safety problem through dispatch.</p>
            </Section>

            <Section title="6. Lights remain a high-frequency inspection issue">
              <p>CVSA recorded 1,659 lighting-related out-of-service violations, or 11.9% of vehicle OOS violations. Walk around the complete combination with lamps activated: tail, stop, turn, clearance, identification, side marker, license-plate, and required reflective material. Check pigtail seating, wiring, lenses, mounting, corrosion, and intermittent faults.</p>
              <p className="mt-5">A functioning light can still be noncompliant if it is obscured by dirt, cargo, equipment, or damage. Verify the trailer after coupling and again after loading because dock contact, wiring movement, and door operation can change the condition.</p>
            </Section>

            <Section title="7. Driver files caused thousands of OOS findings">
              <p>Of 53,271 Level I, II, and III driver inspections, 3,184 drivers were placed out of service. CVSA listed no medical card as the top driver OOS category, with 1,072 violations, followed by hours of service with 929 and no commercial driver&apos;s license with 620.</p>
              <p className="mt-5">Medical certification may be electronically linked to a CDL record, but drivers and carriers should still verify the state record, expiration, license status, class, endorsements, and restrictions before dispatch. Build alerts far enough ahead of expiration to allow for an examination, state processing, and correction of any mismatch.</p>
              <p className="mt-5">For a broader carrier-file review, use our <Link href="/blog/fmcsa-new-entrant-safety-audit-checklist" className={linkClass}>FMCSA New Entrant safety-audit checklist</Link>.</p>
            </Section>

            <Section title="8. ELD tampering was a focus—but not the top OOS category">
              <p>Inspectors issued 146 out-of-service orders associated with ELD tampering, falsification, or manipulation. CVSA says this represented 3.7% of driver OOS violations and ranked seventh among driver OOS categories. Hours-of-service violations and false records of duty status also appeared separately in the results.</p>
              <p className="mt-5">Do not overstate the result: 146 OOS orders do not show that 3.7% of all inspected drivers tampered with an ELD. The denominator is reported driver OOS violations, and one driver may have multiple violations.</p>
              <p className="mt-5">Carriers should train drivers to certify logs, handle edits transparently, annotate legitimate corrections, manage unassigned driving, and transfer records during an inspection. Dispatch practices must not encourage a driver to conceal driving time or exceed available hours. Also confirm that the device remains on FMCSA&apos;s registered list; see our <Link href="/blog/fmcsa-revoked-elds-october-2026-deadline" className={linkClass}>revoked-ELD replacement guide</Link>.</p>
            </Section>

            <Section title="9. What an inspector may examine">
              <p>CVSA describes a Level I inspection as a comprehensive driver-and-vehicle inspection. Depending on inspection level and applicability, items may include credentials, medical certification, record of duty status, seat belt, brakes, cargo securement, coupling devices, driveline, exhaust, frame, fuel system, lights, steering, suspension, tires, van body, wheels, rims, hubs, and wipers.</p>
              <p className="mt-5">A Level II inspection is a walk-around examination and generally covers items that can be checked without physically going under the vehicle. A Level III focuses on the driver, credentials, and administrative requirements. A Level V is a vehicle-only inspection that can occur without a driver present.</p>
              <p className="mt-5">Inspection levels help explain why the raw counts are not directly interchangeable. For example, Level III inspections do not produce a vehicle OOS rate because they do not include the mechanical vehicle inspection.</p>
            </Section>

            <Section title="10. A practical seven-step carrier response">
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8">
                <Step number="1" title="Audit recent roadside reports">Group violations by brake, tire, light, securement, driver credential, and ELD category. Look for repeat defects.</Step>
                <Step number="2" title="Inspect tractors and trailers together">A compliant tractor does not offset a defective trailer. Include leased and interchanged equipment in the dispatch check.</Step>
                <Step number="3" title="Standardize cargo questions">Before accepting, confirm commodity, packaging, weight, pallet count, dimensions, special securement, and sealed-load instructions.</Step>
                <Step number="4" title="Stock usable securement equipment">Remove cut or weakened straps, damaged bars, and unreliable dunnage. Match equipment and working-load limits to the cargo.</Step>
                <Step number="5" title="Verify driver status">Check CDL class, endorsements, restrictions, medical qualification, Clearinghouse status where required, and expiration alerts.</Step>
                <Step number="6" title="Review ELD exceptions and edits">Train with the actual device and written policy. Correct mistakes transparently rather than masking driving time.</Step>
                <Step number="7" title="Close the repair loop">Document the reported defect, qualified diagnosis, repair, return-to-service decision, and retained record. Do not rely on a verbal “fixed.”</Step>
              </ol>
            </Section>

            <Section title="Dry-van pre-dispatch checklist">
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><Check title="Trailer exterior">Lights, conspicuity tape, doors, hinges, latches, roof, walls, frame, landing gear, underride protection, plate, and visible damage.</Check><Check title="Running gear">Brakes, air lines, ABS indicator, tires, wheels, rims, hubs, suspension, axle area, and signs of leaks or heat.</Check><Check title="Coupling">Fifth wheel, kingpin engagement, locking jaws, release handle, mounting, air/electrical connections, and tug test.</Check><Check title="Cargo space">Floor, walls, roof, anchor points, odor, moisture, debris, nails, securement equipment, and load compatibility.</Check><Check title="Loaded condition">Weight distribution, axle weights, voids, pallets, straps, bars, blocking, dunnage, doors, seal, and accessible rechecks.</Check><Check title="Driver readiness">License, medical status, HOS availability, ELD function, permits, registration, insurance evidence, and inspection documents.</Check></div>
            </Section>

            <section className="mt-12 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
              <h2 className="text-2xl font-black">The bottom line for small carriers</h2>
              <p className="mt-4 leading-8 text-slate-300">The 2026 Roadcheck results do not say every truck faces the same risk. They do show that brakes, tires, cargo securement, lights, driver credentials, and hours records repeatedly produced conditions serious enough to stop operations. A short, documented inspection and repair routine protects safety, appointments, freight, and operating revenue.</p>
              <p className="mt-5 leading-8 text-slate-300">For professional dry-van freight service with ONENESS TRANSPORT LLC, call <a href="tel:+15123633649" className="font-bold text-orange-400 hover:text-orange-300">512-363-3649</a> or email <a href="mailto:dispatch@onenesstransport.com" className="font-bold text-orange-400 hover:text-orange-300">dispatch@onenesstransport.com</a>.</p>
              <p className="mt-5 text-sm leading-7 text-slate-400">CVSA published the results August 25, 2026, for inspections conducted May 12–14, 2026. Regulations and guidance were reviewed September 4, 2026. This article is general information, not legal or compliance advice. Apply the rules to the specific vehicle, cargo, jurisdiction, and operation.</p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm"><p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Top vehicle OOS findings</p><ul className="mt-4 space-y-3 text-sm text-slate-600"><li>Brake systems</li><li>Tires</li><li>20% defective brakes</li><li>Cargo securement</li><li>Lights</li></ul></div>
            <div className="rounded-2xl bg-orange-500 p-6 text-slate-950"><p className="text-sm font-bold uppercase tracking-[0.16em]">Official source</p><a href="https://cvsa.org/news/2026-roadcheck-results/" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">Read CVSA&apos;s full results</a></div>
          </aside>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) { return <section className="mt-12"><h2 className="text-3xl font-black leading-tight text-slate-950">{title}</h2><div className="mt-5">{children}</div></section>; }
function Row({ measure, result, meaning }: { measure: string; result: string; meaning: string }) { return <tr><td className="px-5 py-4 font-bold text-slate-950">{measure}</td><td className="px-5 py-4 font-black text-orange-700">{result}</td><td className="px-5 py-4">{meaning}</td></tr>; }
function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-black text-white">{number}</span><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-1">{children}</p></div></li>; }
function Check({ title, children }: { title: string; children: React.ReactNode }) { return <div className="rounded-2xl border border-slate-200 p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6">{children}</p></div>; }
