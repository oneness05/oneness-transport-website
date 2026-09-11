import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl = "https://www.onenesstransport.com/blog/fmcsa-hours-of-service-guide-property-drivers-2026";
const articleImage = "https://www.onenesstransport.com/images/fmcsa-hours-of-service-guide-property-drivers-2026.webp";
const publishedTime = "2026-09-11T15:15:00-05:00";

export const metadata: Metadata = {
  title: "FMCSA Hours of Service Guide for Truck Drivers (2026)",
  description: "Understand the 11-hour, 14-hour, 30-minute, 60/70-hour, restart, sleeper-berth, adverse-driving, and short-haul HOS rules.",
  keywords: ["FMCSA hours of service 2026", "truck driver 11 hour 14 hour rule", "30 minute break rule trucking", "34 hour restart", "split sleeper berth rule"],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article", url: articleUrl,
    title: "FMCSA Hours of Service Guide for Property-Carrying Drivers",
    description: "A practical guide to daily clocks, weekly limits, sleeper splits, exceptions, and trip planning for dry-van carriers.",
    publishedTime, modifiedTime: publishedTime, authors: ["ONENESS TRANSPORT LLC"],
    images: [{ url: articleImage, width: 1672, height: 941, alt: "Dry van driver planning an electronic log timeline beside a dark blue truck at sunrise" }],
  },
  twitter: { card: "summary_large_image", title: "FMCSA Hours of Service Guide for Truck Drivers", description: "Plan the 11-hour, 14-hour, break, cycle, restart, and sleeper-berth rules correctly.", images: [articleImage] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "FMCSA Hours of Service Guide for Property-Carrying Truck Drivers in 2026",
  description: "A practical guide to the federal hours-of-service limits, sleeper-berth provision, short-haul exception, and trip-planning practices for property-carrying drivers.",
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
    { "@type": "ListItem", position: 3, name: "Hours of Service Guide", item: articleUrl },
  ],
};

const sourceClass = "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function HoursOfServiceArticle() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="bg-slate-950 px-5 pb-16 pt-12 text-white lg:pb-20 lg:pt-16"><div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400"><Link href="/" className="hover:text-orange-400">Home</Link><span className="mx-2" aria-hidden="true">/</span><Link href="/blog" className="hover:text-orange-400">Blog</Link></nav>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Hours of Service &amp; Trip Planning</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">FMCSA Hours of Service Guide for Property-Carrying Drivers</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">Understand how the daily clocks, weekly cycle, sleeper-berth provision, and major exceptions work together before accepting a dry-van schedule.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400"><span>By ONENESS TRANSPORT LLC</span><span aria-hidden="true">&middot;</span><time dateTime="2026-09-11">September 11, 2026</time><span aria-hidden="true">&middot;</span><span>11 min read</span></div>
        </div></header>

        <div className="mx-auto -mt-8 max-w-6xl px-5"><div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl"><Image src="/images/fmcsa-hours-of-service-guide-property-drivers-2026.webp" alt="Dry van driver planning an electronic log timeline beside a dark blue truck at sunrise" fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" /></div></div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 text-[1.0625rem] leading-8 text-slate-700">
            <p className="text-xl leading-9">A legal trip plan must fit several clocks at the same time. The driver can have driving time remaining but no time left in the 14-hour window, or daily time available but insufficient hours on the 60/70-hour cycle. Dispatch should check every applicable limit before promising an appointment.</p>
            <p className="mt-6">This guide summarizes the federal rules for property-carrying commercial motor vehicles. It does not cover every exemption, state-only operation, passenger carrier, agricultural movement, oilfield provision, emergency declaration, or special operation. Start with the current regulation and confirm which rules apply to the specific driver and load.</p>

            <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200"><div className="bg-slate-950 px-6 py-4 text-white"><h2 className="text-xl font-black">Core property-carrier HOS limits</h2></div><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-100 text-slate-950"><tr><th className="px-5 py-4">Rule</th><th className="px-5 py-4">Federal baseline</th><th className="px-5 py-4">Planning meaning</th></tr></thead><tbody className="divide-y divide-slate-200">
              <Row rule="10 consecutive hours off" baseline="Required before a new standard work shift" meaning="Restores eligibility to begin the next 11/14-hour calculation" />
              <Row rule="11-hour driving limit" baseline="Maximum driving after 10 consecutive hours off" meaning="Only driving status consumes this clock" />
              <Row rule="14-hour window" baseline="No driving after the 14th consecutive hour after coming on duty" meaning="Most off-duty, waiting, and break time does not pause the window" />
              <Row rule="30-minute break" baseline="Required after 8 cumulative driving hours without a 30-minute interruption" meaning="Any consecutive 30 minutes in a non-driving status can satisfy it" />
              <Row rule="60/70-hour limit" baseline="No driving after 60 on-duty hours in 7 days or 70 in 8 days" meaning="Driving and other on-duty work consume the cycle" />
              <Row rule="34-hour restart" baseline="34 or more consecutive hours off duty" meaning="May restart the applicable 7/8-day period; it is not mandatory" />
            </tbody></table></div></section>

            <Section title="1. The 11-hour driving limit">
              <p>Under <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-A/section-395.3" target="_blank" rel="noopener noreferrer" className={sourceClass}>49 CFR §395.3</a>, a property-carrying driver may drive up to 11 total hours after taking at least 10 consecutive hours off duty. Driving time is the time spent at the controls of the commercial motor vehicle. Fueling, inspections, loading work, paperwork, and waiting while responsible for the vehicle can be on-duty time, but they do not themselves subtract from the 11-hour driving clock.</p>
              <p className="mt-5">That distinction does not make non-driving work “free.” It consumes the 14-hour window and the weekly cycle. A driver who spends four hours at a shipper may still show substantial driving time but lack enough window to use it legally.</p>
            </Section>

            <Section title="2. The 14-hour driving window">
              <p>After the driver comes on duty following 10 consecutive hours off, a 14-consecutive-hour window begins. The driver may not drive after that window closes. Unlike a bank of work hours, the clock generally continues through meals, detention, loading, fueling, and other off-duty or on-duty periods.</p>
              <p className="mt-5">The driver may perform non-driving work after the 14th hour if otherwise lawful, but cannot drive a commercial motor vehicle again until obtaining the required qualifying off-duty time. Dispatch should therefore plan from the start of the duty window—not only from the first highway mile.</p>
            </Section>

            <Section title="3. The 30-minute interruption in driving">
              <p>A driver cannot continue driving after accumulating eight hours of driving without at least 30 consecutive minutes in a non-driving status. The break can be off duty, sleeper berth, on-duty not driving, or a consecutive combination of those statuses. A properly logged fuel stop or customer wait may satisfy the rule if it creates a full 30-minute interruption in driving.</p>
              <p className="mt-5">The trigger is eight cumulative driving hours since the last qualifying interruption—not simply eight hours since coming on duty. The 30 minutes does not normally extend the 14-hour window, so waiting until the final part of the window can leave the driver compliant with the break rule but unable to complete the drive.</p>
            </Section>

            <Section title="4. The 60/70-hour rolling cycle">
              <p>A carrier that does not operate commercial vehicles every day of the week generally uses the 60-hour/7-day limit. A carrier operating commercial vehicles every day may use the 70-hour/8-day limit. After reaching the applicable on-duty total, the driver may not drive until enough older hours fall outside the rolling period or a valid restart is completed.</p>
              <p className="mt-5">This clock includes all on-duty time, not only driving for the current carrier. Work for another motor carrier and compensated non-motor-carrier work can affect availability. Before using a driver for the first time or intermittently, obtain the preceding duty-time information required by the rules.</p>
              <p className="mt-5">A 34-hour restart may reset the applicable 7/8-day calculation, but it is optional. Sometimes a driver can regain enough recap hours sooner by waiting for older on-duty time to roll off. Compare the hours returned, appointment needs, parking, and revenue rather than assuming every week requires a restart.</p>
            </Section>

            <Section title="5. Split sleeper berth: useful, but easy to miscalculate">
              <p>The property-carrier sleeper provision in <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-A/section-395.1" target="_blank" rel="noopener noreferrer" className={sourceClass}>49 CFR §395.1(g)</a> permits two qualifying rest periods. One must be at least seven consecutive hours in the sleeper berth. The other must be at least two consecutive hours, in or out of the sleeper berth. Together they must total at least 10 hours, and neither period can be shorter than two hours.</p>
              <p className="mt-5">When the two periods qualify as a pair, neither counts against the 14-hour window, and the driving and duty-window calculations are made from the end of the first qualifying period. The pairing must still keep total driving at or below 11 hours and driving inside the recalculated 14-hour limit.</p>
              <p className="mt-5">Do not improvise a split after the schedule fails. Drivers and dispatchers should understand which period is the first qualifying break, which period completes the pair, and how the ELD displays available time. If the intended second period is interrupted or too short, the earlier calculation may no longer work.</p>
            </Section>

            <Section title="6. Adverse driving conditions are not a routine scheduling tool">
              <p>The adverse-driving provision can extend the 11-hour driving limit and 14-hour driving window by up to two hours when qualifying adverse conditions are encountered. The rule is intended for conditions that could not reasonably have been known to the driver immediately before the duty day—or to the carrier immediately before dispatch.</p>
              <p className="mt-5">Normal rush-hour traffic, a predictable construction zone, or weather already known when the trip was planned should not be treated automatically as adverse conditions. The extension does not erase fatigue or guarantee that movement is safe. Document what occurred, when it became known, and why the additional time was needed to complete the run or reach a safe place.</p>
            </Section>

            <Section title="7. The 150-air-mile short-haul exception">
              <p>A qualifying driver may be exempt from the standard record-of-duty-status and ELD requirements when operating within a 150-air-mile radius—172.6 statute miles—of the normal work reporting location, returning there and being released within 14 consecutive hours, and meeting the required off-duty conditions. The carrier must maintain accurate time records for six months, including report time, release time, and total daily on-duty hours.</p>
              <p className="mt-5">This is not a general exemption from hours of service. The driver must stay inside every condition on each day it is used. A load leaving the radius or a duty day exceeding the return-and-release limit can require a standard log, subject to the applicable rules. Confirm the exact operation and any limited ELD exception before dispatch.</p>
            </Section>

            <Section title="8. Plan the load backward from the delivery appointment">
              <p>A workable dispatch plan includes more than map mileage divided by highway speed. Begin with the delivery appointment, then build backward using realistic drive segments, fuel, inspections, congestion, weather, shipper time, receiver time, parking availability, and the driver&apos;s current cycle.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><Check title="Before accepting">Check current driving, 14-hour, and cycle clocks; last qualifying rest; pickup readiness; delivery window; total and deadhead miles; and parking near both facilities.</Check><Check title="At pickup">Record arrival, status, seal and paperwork; update dispatch when loading threatens the schedule; do not hide detention by using an inaccurate duty status.</Check><Check title="During transit">Recalculate after traffic, loading delay, weather, or route change. Protect a parking buffer instead of planning to the final legal minute.</Check><Check title="Before delivery">Confirm appointment and entrance instructions, remaining clocks, receiver parking, unload expectations, and the next safe rest location.</Check></div>
              <p className="mt-5">A legal plan is not necessarily a safe plan. FMCSA limits are maximums, not a requirement to drive until the clock reaches zero. A fatigued driver must not continue merely because the ELD shows time remaining.</p>
            </Section>

            <Section title="9. Common HOS planning mistakes">
              <ul className="mt-5 space-y-4 rounded-2xl border border-slate-200 p-6 sm:p-8"><Item>Counting the 14-hour window as 14 hours of work that pauses during ordinary off-duty time.</Item><Item>Watching only the 11-hour drive clock while ignoring the weekly cycle.</Item><Item>Assuming any two sleeper periods create a valid split.</Item><Item>Logging loading, fueling, inspections, or compensated work as off duty when the status does not fit.</Item><Item>Using the adverse-driving exception for congestion or weather known before dispatch.</Item><Item>Calling a run “short haul” without meeting the radius, return, release, rest, and time-record conditions.</Item><Item>Planning arrival at the exact end of available time with no parking or delay buffer.</Item></ul>
            </Section>

            <Section title="A practical pre-dispatch checklist">
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8"><Step number="1" title="Read the current clocks">Confirm drive, duty-window, break, and cycle availability directly from the driver&apos;s record.</Step><Step number="2" title="Confirm the prior rest">Identify the qualifying 10-hour rest, restart, or sleeper pairing supporting the calculation.</Step><Step number="3" title="Build realistic time">Include deadhead, inspections, loading, traffic, fuel, delivery, and parking.</Step><Step number="4" title="Test every limit">The same plan must fit the 11-hour, 14-hour, 30-minute, and 60/70-hour rules.</Step><Step number="5" title="Set update points">Recalculate after loading delay, route changes, weather, or appointment changes.</Step><Step number="6" title="Protect a safe buffer">Do not make compliance depend on perfect traffic or the last available parking space.</Step></ol>
            </Section>

            <section className="mt-12 rounded-3xl bg-slate-950 p-7 text-white sm:p-9"><h2 className="text-2xl font-black">The bottom line</h2><p className="mt-4 leading-8 text-slate-300">The 11-hour driving limit is only one part of a legal dry-van schedule. Dispatch must also protect the 14-hour window, 30-minute interruption, rolling 60/70-hour cycle, and required rest. Use sleeper and short-haul provisions only when every condition is met, update the plan when reality changes, and preserve enough time for safe parking.</p><p className="mt-5 leading-8 text-slate-300">For professional dry-van freight service with ONENESS TRANSPORT LLC, call <a href="tel:+15123633649" className="font-bold text-orange-400 hover:text-orange-300">512-363-3649</a> or email <a href="mailto:dispatch@onenesstransport.com" className="font-bold text-orange-400 hover:text-orange-300">dispatch@onenesstransport.com</a>.</p><p className="mt-5 text-sm leading-7 text-slate-400">Federal sources were reviewed September 11, 2026. This guide provides general information, not legal or compliance advice. Verify the current regulations, exceptions, declarations, and guidance applicable to the exact driver and operation.</p></section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start"><div className="rounded-2xl border border-slate-200 p-6 shadow-sm"><p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Check all four clocks</p><ul className="mt-4 space-y-3 text-sm text-slate-600"><li>11-hour driving limit</li><li>14-hour driving window</li><li>30-minute interruption</li><li>60/70-hour cycle</li></ul></div><div className="rounded-2xl bg-orange-500 p-6 text-slate-950"><p className="text-sm font-bold uppercase tracking-[0.16em]">Official references</p><a href="https://www.fmcsa.dot.gov/regulations/hours-service/summary-hours-service-regulations" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">FMCSA HOS summary</a><a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-A/section-395.3" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">49 CFR §395.3</a><a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-A/section-395.1" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">49 CFR §395.1</a></div><div className="rounded-2xl border border-slate-200 p-6 text-sm leading-7 text-slate-600">Choosing an electronic log? Read our <Link href="/blog/motive-vs-samsara-vs-garmin-eld-comparison-2026" className={sourceClass}>owner-operator ELD comparison</Link>.</div></aside>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) { return <section className="mt-12"><h2 className="text-3xl font-black leading-tight text-slate-950">{title}</h2><div className="mt-5">{children}</div></section>; }
function Row({ rule, baseline, meaning }: { rule: string; baseline: string; meaning: string }) { return <tr><td className="px-5 py-4 font-black text-orange-700">{rule}</td><td className="px-5 py-4">{baseline}</td><td className="px-5 py-4">{meaning}</td></tr>; }
function Check({ title, children }: { title: string; children: React.ReactNode }) { return <div className="rounded-2xl border border-slate-200 p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6">{children}</p></div>; }
function Item({ children }: { children: React.ReactNode }) { return <li className="flex gap-3"><span className="font-black text-orange-600" aria-hidden="true">✓</span><span>{children}</span></li>; }
function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-black text-white">{number}</span><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-1">{children}</p></div></li>; }
