import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl = "https://www.onenesstransport.com/blog/truck-axle-weight-limits-load-distribution-guide";
const articleImage = "https://www.onenesstransport.com/images/truck-axle-weight-limits-load-distribution-2026.webp";
const publishedTime = "2026-09-16T15:51:00-05:00";

export const metadata: Metadata = {
  title: "Truck Axle Weight Limits & Load Distribution Guide",
  description: "Understand federal truck axle limits, Bridge Formula basics, scale tickets, sliding tandems, fifth-wheel adjustments, and dry-van load distribution.",
  keywords: ["truck axle weight limits", "dry van load distribution", "steer drive trailer axle weights", "Federal Bridge Formula", "sliding trailer tandems", "truck scale ticket"],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article", url: articleUrl,
    title: "Truck Axle Weight Limits and Load Distribution Guide",
    description: "A practical guide to federal limits, scale tickets, axle spacing, tandem adjustments, and reweigh decisions for dry-van carriers.",
    publishedTime, modifiedTime: publishedTime, authors: ["ONENESS TRANSPORT LLC"],
    images: [{ url: articleImage, width: 1672, height: 941, alt: "Dark blue sleeper tractor and white dry van positioned on a multi-platform truck scale with axle-group graphics" }],
  },
  twitter: { card: "summary_large_image", title: "Truck Axle Weight and Load Distribution Guide", description: "Read a scale ticket, understand federal limits, and adjust a five-axle dry van safely.", images: [articleImage] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Truck Axle Weight Limits and Load Distribution Guide",
  description: "A practical guide for dry-van drivers and small carriers on federal weight limits, scale tickets, load distribution, and axle adjustments.",
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
    { "@type": "ListItem", position: 3, name: "Truck Axle Weight Guide", item: articleUrl },
  ],
};

const sourceClass = "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function TruckAxleWeightArticle() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="bg-slate-950 px-5 pb-16 pt-12 text-white lg:pb-20 lg:pt-16"><div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400"><Link href="/" className="hover:text-orange-400">Home</Link><span className="mx-2" aria-hidden="true">/</span><Link href="/blog" className="hover:text-orange-400">Blog</Link></nav>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Dry Van Equipment &amp; Compliance</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Truck Axle Weight Limits and Load Distribution Guide</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">An 80,000-pound gross weight does not make a load legal by itself. Every axle group, spacing measurement, equipment rating, and route restriction still matters.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400"><span>By ONENESS TRANSPORT LLC</span><span aria-hidden="true">&middot;</span><time dateTime="2026-09-16">September 16, 2026</time><span aria-hidden="true">&middot;</span><span>12 min read</span></div>
        </div></header>

        <div className="mx-auto -mt-8 max-w-6xl px-5"><div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl"><Image src="/images/truck-axle-weight-limits-load-distribution-2026.webp" alt="Dark blue sleeper tractor and white dry van positioned on a multi-platform truck scale with axle-group graphics" fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" /></div></div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 text-[1.0625rem] leading-8 text-slate-700">
            <p className="text-xl leading-9">A scale ticket separates a tractor-trailer&apos;s weight into steer, drive, and trailer axle groups. The total may look acceptable while one tandem is overweight, or the axle groups may look acceptable while axle spacing fails the Federal Bridge Formula. The reliable workflow is to know the applicable route limits, scale the complete combination, correct the distribution, secure the cargo, and reweigh.</p>
            <p className="mt-6">This article covers a common five-axle tractor and 53-foot dry van in ordinary operation. It is general information, not legal advice or a permit determination. State and local limits, posted bridges, load-zoned roads, tire and axle ratings, registration, permits, commodity exceptions, and specific equipment can impose different or lower limits.</p>

            <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200"><div className="bg-slate-950 px-6 py-4 text-white"><h2 className="text-xl font-black">Federal Interstate starting points</h2></div><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-100 text-slate-950"><tr><th className="px-5 py-4">Measure</th><th className="px-5 py-4">General federal maximum</th><th className="px-5 py-4">Important qualification</th></tr></thead><tbody className="divide-y divide-slate-200">
              <Row measure="Gross vehicle weight" limit="80,000 lb" note="Bridge Formula or another applicable rule may require less" />
              <Row measure="Single axle" limit="20,000 lb" note="Tire, axle, vehicle, registration, state, or route limits may be lower" />
              <Row measure="Tandem axle group" limit="34,000 lb" note="Applies to the federal tandem definition and does not override Bridge Formula checks" />
              <Row measure="Any group of 2+ consecutive axles" limit="Bridge Formula" note="Number of axles and distance between the outer axles control" />
            </tbody></table></div></section>

            <Section title="1. The familiar 12/34/34 pattern is not the whole law">
              <p>Drivers often describe a standard five-axle combination as 12,000 pounds on the steer, 34,000 on the drives, and 34,000 on the trailer tandems. That totals 80,000 pounds and is a useful planning pattern—but 12,000 is not a universal federal steer-axle limit.</p>
              <p className="mt-5">FHWA&apos;s current Bridge Formula guide states that the federal Interstate limits are 20,000 pounds for a single axle, 34,000 pounds for a tandem, and 80,000 pounds gross. The actual legal steer weight can still be limited by tires, wheels, axle and suspension ratings, manufacturer ratings, vehicle registration, state law, or a specific road or bridge. Never add weight to the steer axle merely because 20,000 appears in the federal rule.</p>
              <p className="mt-5">Texas publishes the same ordinary legal starting limits—80,000 gross, 20,000 on a single axle, and 34,000 on a tandem—while also directing users to its permissible-weight table. Other jurisdictions and non-Interstate routes must be checked separately.</p>
            </Section>

            <Section title="2. Understand what the Bridge Formula checks">
              <p>The Federal Bridge Formula limits how much weight can be concentrated across a given axle span. FHWA explains that spacing weight over more axles or a longer distance reduces stress on bridges. The formula is:</p>
              <div className="my-6 rounded-2xl bg-slate-950 p-6 text-center text-xl font-black text-white">W = 500 × [(L × N) ÷ (N − 1) + 12N + 36]</div>
              <p>W is the maximum weight in pounds for the axle group, L is the distance in feet between the outer axles, and N is the number of axles in the group. The calculation applies to groups of two or more consecutive axles—not only the entire truck.</p>
              <p className="mt-5">On a typical five-axle tractor-semitrailer, FHWA identifies the steer-through-drive group, the full five-axle outer bridge, and the drive-through-trailer group as commonly critical checks. FHWA also notes an exception allowing two consecutive tandem sets to carry 34,000 pounds each when the distance from the first axle of the first tandem to the last axle of the second tandem is at least 36 feet.</p>
              <p className="mt-5">Use the current <a href="https://ops.fhwa.dot.gov/Freight/publications/brdg_frm_wghts/index.htm" target="_blank" rel="noopener noreferrer" className={sourceClass}>FHWA Bridge Formula guide and table</a>, plus the rules for every jurisdiction and route. Do not assume that sliding the trailer tandems to reach 34,000 pounds automatically makes the inner and outer bridge groups legal.</p>
            </Section>

            <Section title="3. Calculate payload before the shipper loads">
              <p>Payload capacity starts with the truck&apos;s actual ready-to-load weight, not a brochure&apos;s advertised empty weight. Scale the tractor and empty trailer with the normal driver, fuel, DEF, tools, chains, dunnage, load bars, spare equipment, and other items normally carried.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><Check title="Ready-to-load tare">Actual scaled tractor, trailer, fuel, driver, and operating equipment.</Check><Check title="Theoretical gross payload">Applicable gross limit minus ready-to-load tare.</Check><Check title="Axle-limited payload">The lower capacity created by steer, drive, trailer, tire, or Bridge Formula limits.</Check><Check title="Route-limited payload">Any lower posted, state, local, bridge, or permit restriction on the planned route.</Check></div>
              <p className="mt-5">The smallest of these limits controls. A combination that weighs 33,500 pounds empty does not automatically have 46,500 pounds of usable payload: the cargo&apos;s shape and position may overload a tandem before the vehicle reaches 80,000 pounds.</p>
            </Section>

            <Section title="4. Read the scale ticket as three separate problems">
              <p>Use a certified scale that reports steer, drive, trailer, and gross weights. Position each axle group completely on the correct platform, keep the vehicle straight, set the brakes as instructed, and follow the scale operator&apos;s procedure. Compare the ticket with all applicable limits and ratings.</p>
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8"><Step number="1" title="Confirm the gross">If gross weight exceeds the applicable limit, sliding axles cannot remove weight; freight or other weight must be removed unless a valid permit or exception applies.</Step><Step number="2" title="Check each axle group">Compare steer, drives, and trailer tandems with legal limits and equipment ratings.</Step><Step number="3" title="Check axle spacing">Verify the tandem position and Bridge Formula groups for the route.</Step><Step number="4" title="Preserve the ticket">Save the original scale record with the load documents and note any adjustment and reweigh.</Step></ol>
              <p className="mt-5">Allow for changes after scaling. Additional fuel, a passenger, equipment, snow or ice accumulation, or cargo movement can alter gross or axle weights. When margins are tight, scale in the condition in which the truck will actually travel.</p>
            </Section>

            <Section title="5. Know what each adjustment changes">
              <p><strong>Sliding the trailer tandems forward</strong> generally transfers weight from the tractor drives to the trailer tandems. Sliding them rearward generally transfers weight from the trailer tandems to the drives. It also changes axle spacing, rear swing, off-tracking, and compliance with state tandem-position or bridge requirements.</p>
              <p className="mt-5"><strong>Moving a sliding fifth wheel forward</strong> generally transfers weight from the drive axles to the steer axle; moving it rearward generally transfers weight from the steer axle to the drives. Fifth-wheel position can also affect tractor-trailer clearance and handling. Adjust it only under the carrier&apos;s procedure and the equipment manufacturer&apos;s instructions.</p>
              <p className="mt-5">A commonly repeated pounds-per-hole estimate is not reliable enough for compliance. Hole spacing, suspension geometry, load position, trailer design, and equipment configuration change the result. Make one controlled adjustment, lock every pin, visually verify engagement, perform the required tug and safety checks, then reweigh.</p>
            </Section>

            <Section title="6. Treat cargo placement as the first adjustment">
              <p>A concentrated load near the trailer nose can overload the drives; a load concentrated far rearward can overload the trailer tandems and reduce tractor loading. Pallet count alone is not enough because identical-looking pallets can have very different weights.</p>
              <p className="mt-5">Before loading, provide the shipper with accurate equipment dimensions and request the total weight, individual pallet or item weights, loading sequence, and any special securement instructions. If the distribution cannot be corrected safely with normal axle adjustments, return to the dock for a reload or removal. Do not rely on driving to “settle” freight into compliance.</p>
              <p className="mt-5">After repositioning freight, restore the required blocking, bracing, straps, bars, or other securement. Under <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-392/subpart-A/section-392.9" target="_blank" rel="noopener noreferrer" className={sourceClass}>49 CFR §392.9</a>, drivers generally must inspect cargo and securement within the first 50 miles and reexamine after specified duty-status or distance/time events. Sealed or inaccessible loads have limited exceptions, but a seal does not waive weight compliance.</p>
            </Section>

            <Section title="7. Use a safe axle-adjustment workflow">
              <ul className="mt-6 space-y-4 rounded-2xl border border-slate-200 p-6 sm:p-8"><Item>Move to a level, designated adjustment area away from traffic.</Item><Item>Set brakes and follow the tractor and trailer manufacturer&apos;s procedures.</Item><Item>Confirm the trailer tandem pins are fully retracted before sliding and fully engaged afterward.</Item><Item>Check airlines, electrical cable, landing gear, mudflaps, tire clearance, and tractor-trailer clearance.</Item><Item>Do not exceed legal tandem-position, wheelbase, kingpin, bridge, or overall-length restrictions.</Item><Item>Recheck cargo securement after any meaningful movement or dock reload.</Item><Item>Reweigh the complete combination; do not estimate the final result.</Item><Item>Keep the scale and reweigh tickets with the load record.</Item></ul>
            </Section>

            <Section title="8. Resolve an overweight ticket before leaving">
              <p>If gross weight is legal but one tandem is heavy, determine whether the load can be corrected through a safe tandem or fifth-wheel adjustment within every other limit. If the adjustment would overload another axle, violate spacing, exceed equipment ratings, or create a clearance problem, the freight must be redistributed or reduced.</p>
              <p className="mt-5">If gross weight itself is over the applicable limit, contact dispatch and the broker or shipper immediately. Document the scale result and request written loading instructions. Do not accept a promise that “it always passes” or that a rate confirmation&apos;s listed weight controls over the scale.</p>
              <p className="mt-5">A reload can affect appointment time, hours of service, parking, detention, and route planning. Use the <Link href="/blog/trucking-accessorial-fees-detention-layover-tonu-guide" className={sourceClass}>accessorial-fees guide</Link> to document delay and approval requirements, and the <Link href="/blog/truck-parking-planning-guide-owner-operators-2026" className={sourceClass}>truck-parking guide</Link> to recalculate the safe stopping plan.</p>
            </Section>

            <Section title="Final pre-departure weight checklist">
              <ul className="mt-6 space-y-4 rounded-2xl border border-slate-200 p-6 sm:p-8"><Item>Commodity, total weight, pallet or item weights, and loading method match the tender.</Item><Item>Ready-to-load tare includes the driver, fuel, DEF, tools, dunnage, and operating equipment.</Item><Item>Steer, drive, trailer, and gross weights are shown on a certified scale ticket.</Item><Item>Federal, state, local, posted-route, registration, permit, and equipment limits were checked.</Item><Item>Bridge Formula and required axle spacing are satisfied.</Item><Item>Trailer tandems and fifth wheel are within approved positions and all pins are engaged.</Item><Item>Cargo is distributed and secured for braking, turning, and normal road forces.</Item><Item>Any adjustment was followed by inspection and reweigh.</Item><Item>The scale record and shipper communications are stored with the load file.</Item></ul>
              <p className="mt-5">Weight compliance is a repeatable operating process: know the route, know the tare, scale, compare, correct, secure, reweigh, and document. That process protects the equipment, schedule, freight, and carrier record better than relying on a single 80,000-pound total.</p>
            </Section>

            <Section title="Official sources">
              <ul className="mt-5 space-y-3"><li><a href="https://ops.fhwa.dot.gov/Freight/publications/brdg_frm_wghts/index.htm" target="_blank" rel="noopener noreferrer" className={sourceClass}>FHWA Bridge Formula Weights</a> — federal Interstate axle, tandem, gross, spacing, and axle-group guidance.</li><li><a href="https://www.ecfr.gov/current/title-23/chapter-I/subchapter-G/part-658/section-658.17" target="_blank" rel="noopener noreferrer" className={sourceClass}>23 CFR §658.17</a> — federal weight regulation.</li><li><a href="https://www.txdmv.gov/motor-carriers/oversize-overweight-permits/texas-size-weight-limits" target="_blank" rel="noopener noreferrer" className={sourceClass}>Texas Size and Weight Limits</a> — Texas legal limits, permissible-weight resources, permits, and exceptions.</li><li><a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-392/subpart-A/section-392.9" target="_blank" rel="noopener noreferrer" className={sourceClass}>49 CFR §392.9</a> — cargo inspection and securement responsibilities.</li></ul>
              <p className="mt-5 text-sm text-slate-500">Sources and regulations reviewed September 16, 2026. Verify current requirements for the specific vehicle, load, permit, and route before movement.</p>
            </Section>
          </div>

          <aside className="h-fit space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-slate-950 p-6 text-white"><p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-400">Dry van capacity</p><h2 className="mt-3 text-2xl font-black">Need a disciplined carrier?</h2><p className="mt-4 leading-7 text-slate-300">ONENESS TRANSPORT LLC serves shippers and brokers with clear communication and practical load planning.</p><a href="tel:+15123633649" className="mt-6 block rounded-xl bg-orange-500 px-4 py-3 text-center font-black text-slate-950 hover:bg-orange-400">Call 512-363-3649</a><a href="mailto:dispatch@onenesstransport.com" className="mt-3 block break-all text-center font-bold text-orange-400 hover:text-orange-300">dispatch@onenesstransport.com</a></div>
            <div className="rounded-2xl border border-slate-200 p-6"><h2 className="font-black text-slate-950">Remember</h2><p className="mt-3 text-sm leading-7 text-slate-600">Legal gross weight does not prove that each axle group, bridge span, tire, and route is legal.</p></div>
          </aside>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) { return <section className="mt-12"><h2 className="text-3xl font-black tracking-tight text-slate-950">{title}</h2><div className="mt-5">{children}</div></section>; }
function Row({ measure, limit, note }: { measure: string; limit: string; note: string }) { return <tr className="align-top"><th className="px-5 py-4 font-black text-slate-950">{measure}</th><td className="px-5 py-4 font-bold text-slate-700">{limit}</td><td className="px-5 py-4 text-slate-600">{note}</td></tr>; }
function Check({ title, children }: { title: string; children: React.ReactNode }) { return <div className="rounded-2xl bg-slate-100 p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{children}</p></div>; }
function Item({ children }: { children: React.ReactNode }) { return <li className="flex gap-3"><span className="mt-1 font-black text-orange-600" aria-hidden="true">✓</span><span>{children}</span></li>; }
function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <li className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-black text-slate-950">{number}</span><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-1 text-slate-600">{children}</p></div></li>; }
