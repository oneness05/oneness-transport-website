import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl =
  "https://www.onenesstransport.com/blog/owner-operator-preventive-maintenance-checklist-2026";
const articleImage =
  "https://www.onenesstransport.com/images/owner-operator-preventive-maintenance-checklist-2026.webp";
const publishedTime = "2026-09-08T15:39:00-05:00";

export const metadata: Metadata = {
  title: "Owner-Operator Preventive Maintenance Checklist (2026)",
  description:
    "Build a practical preventive maintenance schedule for a semi truck and dry van trailer, with daily, weekly, mileage-based, annual, and recordkeeping checks.",
  keywords: [
    "owner operator preventive maintenance checklist",
    "semi truck maintenance schedule",
    "dry van trailer maintenance checklist",
    "DOT maintenance records",
    "truck preventive maintenance program",
  ],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title: "Owner-Operator Preventive Maintenance Checklist for Truck and Dry Van",
    description:
      "A practical maintenance system for one-truck carriers: daily observations, scheduled shop work, defect follow-up, annual inspections, and records.",
    publishedTime,
    modifiedTime: publishedTime,
    authors: ["ONENESS TRANSPORT LLC"],
    images: [
      {
        url: articleImage,
        width: 1672,
        height: 941,
        alt: "Dark blue semi truck and white dry van trailer in a maintenance bay with tire, brake, fluid, light, battery, and service-record symbols",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Owner-Operator Preventive Maintenance Checklist (2026)",
    description:
      "Organize truck and trailer maintenance before small defects become roadside failures.",
    images: [articleImage],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Owner-Operator Preventive Maintenance Checklist for Truck and Dry Van",
  description:
    "A practical guide to systematic inspection, preventive maintenance scheduling, annual inspections, defect follow-up, and maintenance records for a one-truck carrier.",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.onenesstransport.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.onenesstransport.com/blog" },
    { "@type": "ListItem", position: 3, name: "Preventive Maintenance Checklist", item: articleUrl },
  ],
};

const sourceClass =
  "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function PreventiveMaintenanceArticle() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
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
              Maintenance &amp; Owner-Operator Operations
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Owner-Operator Preventive Maintenance Checklist for Truck and Dry Van
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              A practical system for finding defects early, scheduling shop work, protecting uptime,
              and keeping the maintenance records a small carrier needs.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>By ONENESS TRANSPORT LLC</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime="2026-09-08">September 8, 2026</time>
              <span aria-hidden="true">&middot;</span>
              <span>12 min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto -mt-8 max-w-6xl px-5">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
            <Image
              src="/images/owner-operator-preventive-maintenance-checklist-2026.webp"
              alt="Dark blue semi truck and white dry van trailer in a maintenance bay with tire, brake, fluid, light, battery, and service-record symbols"
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
              Preventive maintenance is not one oil change interval or an annual inspection sticker.
              It is a repeatable system that connects driver observations, mileage and time triggers,
              shop inspections, completed repairs, and usable records. For a one-truck carrier, that
              system protects both safety and revenue: when the only tractor is down unexpectedly,
              the business has no spare unit producing income.
            </p>
            <p className="mt-6">
              Federal rules require motor carriers to systematically inspect, repair, and maintain
              vehicles under their control, but they do not create one universal service interval for
              every engine, axle, tire, or duty cycle. The carrier should combine the applicable rules
              with the truck, engine, transmission, axle, and trailer manufacturers&apos; current manuals.
            </p>

            <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-slate-950 px-6 py-4 text-white">
                <h2 className="text-xl font-black">A workable maintenance rhythm</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-slate-100 text-slate-950">
                    <tr><th className="px-5 py-4">Trigger</th><th className="px-5 py-4">Main purpose</th><th className="px-5 py-4">Typical actions</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <Row trigger="Before and during trips" purpose="Catch immediate safety defects" actions="Walk-around, warning lights, tires, brakes, coupling, lamps, leaks, doors" />
                    <Row trigger="Weekly" purpose="Find wear trends" actions="Pressure and tread log, fluid review, battery and air-system observations, trailer condition" />
                    <Row trigger="Mileage or engine hours" purpose="Complete planned service" actions="OEM-required lubrication, filters, fluid analysis or changes, chassis and aftertreatment checks" />
                    <Row trigger="Seasonal or duty-cycle review" purpose="Prepare for operating conditions" actions="Cooling, HVAC, batteries, wipers, freeze protection, corrosion, tire strategy" />
                    <Row trigger="At least every 12 months" purpose="Meet periodic inspection rule" actions="Qualified inspection of tractor and trailer; carry required documentation" />
                  </tbody>
                </table>
              </div>
              <p className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-xs leading-5 text-slate-500">
                This is an operating framework, not a manufacturer service schedule. Use the shortest
                applicable OEM, component, warranty, regulatory, and severe-duty interval.
              </p>
            </section>

            <Section title="1. Start with the federal maintenance baseline">
              <p>
                <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396/section-396.3" target="_blank" rel="noopener noreferrer" className={sourceClass}>49 CFR §396.3</a>{" "}
                requires every motor carrier to systematically inspect, repair, and maintain controlled
                vehicles. Parts and accessories must remain in safe and proper operating condition,
                including frames, suspension, axles, wheels, rims, and steering components—not only
                the engine items covered by a routine service package.
              </p>
              <p className="mt-5">
                A carrier must also maintain a record for each covered vehicle it controls for 30
                consecutive days. The record identifies the vehicle, indicates the nature and due date
                of inspections and maintenance, and records the date and nature of completed work.
                Those records must generally be kept where the vehicle is housed or maintained for one
                year and for six months after it leaves the carrier&apos;s control.
              </p>
            </Section>

            <Section title="2. Turn every trip inspection into maintenance information">
              <p>
                A driver&apos;s walk-around should feed the maintenance system. Before driving, confirm
                that the vehicle is in safe operating condition and review unresolved defects that
                could affect operation. During the trip, pay attention to new warning lamps, pressure
                loss, pulling, vibration, abnormal tire heat, fluid odors, air leaks, lighting failures,
                and trailer-door or suspension changes.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Check title="Tractor front">Headlamps, marker lamps, windshield and wipers, mirrors, steering tires, wheel hardware, visible leaks, and steering components.</Check>
                <Check title="Tractor sides and rear">Fuel and DEF caps, tanks and mounts, steps, drive tires, air lines, electrical cable, catwalk, frame, suspension, and lamps.</Check>
                <Check title="Coupling area">Fifth-wheel mounting and lock, kingpin engagement, release handle, platform gap, sliding mechanism, air and electrical connections.</Check>
                <Check title="Dry van trailer">Landing gear, frame and crossmembers, slider pins, suspension, tires and wheels, brakes, ABS lamp, lamps, roof/walls/floor, doors and seals.</Check>
              </div>
              <p className="mt-5">
                A defect note should identify the unit, date, mileage, location, symptom, urgency, and
                person notified. “Noise from rear” is difficult to act on; “right-rear tractor area,
                rhythmic vibration beginning near 55 mph after loading” gives the shop a useful lead.
              </p>
            </Section>

            <Section title="3. Build the schedule around the correct triggers">
              <p>
                Put every recurring task into one calendar or maintenance system. Some work is driven
                by odometer miles, some by engine hours, some by calendar time, and some by condition.
                Tracking only miles can miss a time-limited inspection, a low-mileage component aging
                in place, or high-idle engine hours. Tracking only calendar dates can stretch a service
                too far during a high-mileage month.
              </p>
              <p className="mt-5">
                Record the exact source for each interval—current OEM manual, component supplier,
                warranty requirement, shop recommendation, inspection finding, or regulation. Do not
                copy a generic internet interval into the schedule without confirming that it applies
                to the specific model, lubricant, vocation, idle time, weight, climate, and warranty.
              </p>
            </Section>

            <Section title="4. Give tires and wheels their own program">
              <p>
                Tire pressure, irregular wear, alignment, wheel-end condition, and load all interact.
                Inspect cold pressure with a reliable gauge on a defined cadence, compare it with the
                tire and vehicle requirements, and investigate repeat air loss rather than repeatedly
                topping off the tire. Log tread depth and wear by wheel position so feathering, cupping,
                shoulder wear, or a fast-changing dual mismatch becomes visible before the next trip.
              </p>
              <p className="mt-5">
                Include valve stems and caps, embedded objects, sidewall damage, exposed material,
                dual spacing, wheel cracks, lug condition, hub leaks, and loose or missing hardware.
                The federal annual-inspection standards include tires, wheels, and rims, but passing an
                annual inspection does not replace condition monitoring throughout the year.
              </p>
            </Section>

            <Section title="5. Inspect brakes as a complete system">
              <p>
                Brake maintenance is more than adjusting a slack adjuster. Look for air leaks, damaged
                hoses and tubing, chamber mounting problems, contaminated or worn friction material,
                cracked or damaged drums and rotors, ABS faults, and the underlying cause of excessive
                pushrod travel. Automatic brake adjusters should not be manually adjusted as a routine
                substitute for diagnosing the condition that allowed the brake to move out of range.
              </p>
              <p className="mt-5">
                The minimum periodic inspection criteria in{" "}
                <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396/appendix-Appendix%20A%20to%20Part%20396" target="_blank" rel="noopener noreferrer" className={sourceClass}>Appendix A to Part 396</a>{" "}
                cover service and parking brakes, drums and rotors, hoses and tubing, warning devices,
                ABS components, and other systems. Brake measurements and repairs should be completed
                by people qualified for the work and documented by wheel position.
              </p>
            </Section>

            <Section title="6. Maintain the tractor beyond oil and filters">
              <p>
                Use the current manufacturer schedules for engine oil and filters, fuel filtration,
                coolant, belts, hoses, crankcase ventilation, air intake, valve adjustment where
                applicable, aftertreatment, transmission, differentials, steering, chassis lubrication,
                HVAC, batteries, and electrical connections. Capture oil or coolant consumption trends;
                a small repeated change can be more informative than one isolated reading.
              </p>
              <p className="mt-5">
                After each shop visit, confirm the actual mileage and engine hours, parts and fluids
                used, specifications, fault codes addressed, measurements taken, technician findings,
                and next due point. A paid invoice that only says “PM service” may be insufficient for
                managing the next interval or proving what was inspected.
              </p>
            </Section>

            <Section title="7. Do not let the dry van become the forgotten asset">
              <p>
                A trailer may travel fewer miles than the tractor yet still create a roadside failure.
                Track its annual-inspection expiration, brake and ABS condition, tires and wheel ends,
                suspension and air bags, slider rails and locking pins, landing gear, frame and
                crossmembers, lights and wiring, mudflaps, roof, sidewalls, floor, rear frame, door
                hardware, seals, and water intrusion.
              </p>
              <p className="mt-5">
                Match trailer repairs to the trailer number—not the tractor that happened to pull it.
                Photograph developing roof, wall, floor, or door damage and recheck it on a defined date.
                For food-grade or high-value loads, cleanliness and weather resistance can affect load
                acceptance even when the defect is not an out-of-service condition.
              </p>
            </Section>

            <Section title="8. Treat the annual inspection as a checkpoint, not the program">
              <p>
                Under{" "}
                <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396/section-396.17" target="_blank" rel="noopener noreferrer" className={sourceClass}>49 CFR §396.17</a>, each commercial motor vehicle—including each vehicle in a
                combination—must pass the required periodic inspection at least once during the
                preceding 12 months. For a tractor-trailer operation, the tractor and semitrailer each
                need qualifying inspection coverage and the required documentation must be on the vehicle.
              </p>
              <p className="mt-5">
                The inspection must cover at least the components listed in Appendix A and be performed
                through an accepted program by a qualified inspector. Schedule it early enough to repair
                findings before expiration. An annual sticker confirms a point-in-time inspection; it
                does not excuse a carrier from repairing a safety defect found the following day.
              </p>
            </Section>

            <Section title="9. Close the loop on every defect">
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8">
                <Step number="1" title="Capture">Record the unit, date, mileage or hours, location, symptom, warning lamp, and supporting photo.</Step>
                <Step number="2" title="Triage">Decide whether the vehicle must stop, can move only for repair, or can operate while a monitored repair is scheduled.</Step>
                <Step number="3" title="Diagnose and authorize">Give the shop enough information and define who may approve additional work or cost.</Step>
                <Step number="4" title="Verify completion">Review measurements, parts, labor, fault status, road test, and the technician&apos;s explanation of the cause.</Step>
                <Step number="5" title="Update the record">Close the defect, attach the invoice or work order, and reset the correct next-due trigger.</Step>
              </ol>
              <p className="mt-5">
                If a temporary repair is used, label it clearly and create a dated permanent-repair task.
                Open defects should appear on one list with an owner and due date, not remain scattered
                through text messages, paper notes, and shop invoices.
              </p>
            </Section>

            <Section title="10. Budget maintenance without confusing the reserve with the schedule">
              <p>
                A cents-per-mile maintenance reserve helps protect cash flow, but it does not determine
                when a component is safe to run. Keep the financial reserve and the mechanical schedule
                as linked but separate systems. The reserve answers “Can the business pay?”; the
                maintenance program answers “What is due, what is defective, and can the equipment run?”
              </p>
              <p className="mt-5">
                Review maintenance cost per mile monthly using all truck and trailer repair, service,
                tire, towing, and diagnostic expenses. Compare actual spending with the reserve and
                upcoming major work. Our{" "}
                <Link href="/blog/how-to-calculate-trucking-cost-per-mile-owner-operators" className={sourceClass}>trucking cost-per-mile guide</Link>{" "}
                explains how to include maintenance reserves in load-profit decisions.
              </p>
            </Section>

            <section className="mt-12 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
              <h2 className="text-2xl font-black">The bottom line</h2>
              <p className="mt-4 leading-8 text-slate-300">
                A strong one-truck maintenance program is simple enough to use every week and detailed
                enough to show what is due, what was found, what was repaired, and who completed the work.
                Combine driver observations with the exact OEM schedules for your equipment, act on
                defects promptly, and keep tractor and trailer records separate and complete.
              </p>
              <p className="mt-5 leading-8 text-slate-300">
                For professional dry-van freight service with ONENESS TRANSPORT LLC, call{" "}
                <a href="tel:+15123633649" className="font-bold text-orange-400 hover:text-orange-300">512-363-3649</a>{" "}
                or email{" "}
                <a href="mailto:dispatch@onenesstransport.com" className="font-bold text-orange-400 hover:text-orange-300">dispatch@onenesstransport.com</a>.
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Official regulations were reviewed September 8, 2026. This article provides general
                information, not legal, engineering, warranty, or repair advice. Use the current rules,
                manufacturer manuals, service bulletins, and qualified technicians for your exact equipment.
              </p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Program essentials</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>Daily driver observations</li><li>Time, mileage, hour, and condition triggers</li>
                <li>Separate tractor and trailer records</li><li>Closed-loop defect repairs</li>
                <li>Annual inspection tracking</li><li>Monthly cost review</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-orange-500 p-6 text-slate-950">
              <p className="text-sm font-bold uppercase tracking-[0.16em]">Official references</p>
              <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396/section-396.3" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">49 CFR §396.3</a>
              <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396/section-396.17" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">49 CFR §396.17</a>
              <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396/appendix-Appendix%20A%20to%20Part%20396" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">Appendix A inspection standards</a>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 text-sm leading-7 text-slate-600">
              Preparing for roadside inspections? Review the{" "}
              <Link href="/blog/cvsa-international-roadcheck-results-2026" className={sourceClass}>2026 Roadcheck findings and dry-van checklist</Link>.
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-12"><h2 className="text-3xl font-black leading-tight text-slate-950">{title}</h2><div className="mt-5">{children}</div></section>;
}

function Row({ trigger, purpose, actions }: { trigger: string; purpose: string; actions: string }) {
  return <tr><td className="px-5 py-4 font-black text-orange-700">{trigger}</td><td className="px-5 py-4 font-bold text-slate-950">{purpose}</td><td className="px-5 py-4">{actions}</td></tr>;
}

function Check({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="rounded-2xl border border-slate-200 p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6">{children}</p></div>;
}

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-black text-white">{number}</span><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-1">{children}</p></div></li>;
}
