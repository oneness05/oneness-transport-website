import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl = "https://www.onenesstransport.com/blog/trucking-accessorial-fees-detention-layover-tonu-guide";
const articleImage = "https://www.onenesstransport.com/images/trucking-accessorial-fees-guide-2026.webp";
const publishedTime = "2026-09-12T15:47:00-05:00";

export const metadata: Metadata = {
  title: "Trucking Accessorial Fees: Detention, Layover & TONU Guide",
  description: "Learn how carriers should quote, document, and invoice detention, layover, TONU, stop-off, driver-assist, and lumper charges.",
  keywords: ["trucking accessorial fees", "detention pay trucking", "layover pay trucking", "TONU fee", "lumper reimbursement", "truck detention documentation"],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article", url: articleUrl,
    title: "Trucking Accessorial Fees: Detention, Layover and TONU",
    description: "A practical carrier guide to negotiating, documenting, and invoicing common charges beyond linehaul.",
    publishedTime, modifiedTime: publishedTime, authors: ["ONENESS TRANSPORT LLC"],
    images: [{ url: articleImage, width: 1672, height: 941, alt: "Dry van at a loading dock with visual symbols for detention, layover, cancellation, extra stops, and receipts" }],
  },
  twitter: { card: "summary_large_image", title: "Trucking Accessorial Fees: Carrier Guide", description: "Protect detention, layover, TONU, stop, assist, and lumper charges with clear terms and proof.", images: [articleImage] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Trucking Accessorial Fees: Detention, Layover, TONU and Lumper Guide",
  description: "A practical guide for small motor carriers on negotiating, documenting, and invoicing common freight accessorial charges.",
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
    { "@type": "ListItem", position: 3, name: "Accessorial Fees Guide", item: articleUrl },
  ],
};

const sourceClass = "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function AccessorialFeesArticle() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="bg-slate-950 px-5 pb-16 pt-12 text-white lg:pb-20 lg:pt-16"><div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400"><Link href="/" className="hover:text-orange-400">Home</Link><span className="mx-2" aria-hidden="true">/</span><Link href="/blog" className="hover:text-orange-400">Blog</Link></nav>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Carrier Revenue &amp; Load Operations</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Trucking Accessorial Fees: Detention, Layover, TONU and Lumper Guide</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">A load can look profitable until unpaid waiting, an overnight delay, an extra stop, or an unexpected unload charge consumes the margin. Protect the work before the truck moves.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400"><span>By ONENESS TRANSPORT LLC</span><span aria-hidden="true">&middot;</span><time dateTime="2026-09-12">September 12, 2026</time><span aria-hidden="true">&middot;</span><span>12 min read</span></div>
        </div></header>

        <div className="mx-auto -mt-8 max-w-6xl px-5"><div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl"><Image src="/images/trucking-accessorial-fees-guide-2026.webp" alt="Dry van at a loading dock with visual symbols for detention, layover, cancellation, extra stops, and receipts" fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" /></div></div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 text-[1.0625rem] leading-8 text-slate-700">
            <p className="text-xl leading-9">Linehaul and fuel surcharge are only part of a freight transaction. Accessorial charges cover extra work or delay outside the service assumed in the original rate. Common examples include detention, layover, truck ordered not used, extra stops, driver assist, redelivery, and lumper reimbursement.</p>
            <p className="mt-6">There is no universal accessorial schedule that automatically applies to every brokered load. Payment usually depends on the rate confirmation, broker-carrier agreement, timely notice, and proof. A carrier should therefore settle the triggers, amounts, deadlines, and required documents in writing before dispatch—not after the cost has already occurred.</p>

            <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200"><div className="bg-slate-950 px-6 py-4 text-white"><h2 className="text-xl font-black">Common accessorials at a glance</h2></div><div className="overflow-x-auto"><table className="w-full min-w-[820px] text-left text-sm"><thead className="bg-slate-100 text-slate-950"><tr><th className="px-5 py-4">Charge</th><th className="px-5 py-4">Typical trigger to define</th><th className="px-5 py-4">Evidence to keep</th></tr></thead><tbody className="divide-y divide-slate-200">
              <Row charge="Detention" trigger="Loading or unloading exceeds agreed free time" proof="Appointment, arrival, check-in/out, messages, signed times" />
              <Row charge="Layover" trigger="Facility delay pushes service into another day or agreed period" proof="Delay notice, revised appointment, location and timestamps" />
              <Row charge="TONU" trigger="Confirmed truck is dispatched but load is cancelled or unavailable" proof="Rate confirmation, dispatch time, cancellation and deadhead" />
              <Row charge="Stop-off" trigger="Pickup or delivery beyond the stops included in the rate" proof="All addresses, appointment times and signed paperwork" />
              <Row charge="Driver assist" trigger="Driver performs loading, unloading or handling not included" proof="Written authorization, task details and facility signature" />
              <Row charge="Lumper" trigger="Approved third-party unloading expense" proof="Broker approval, lumper receipt and delivery documents" />
            </tbody></table></div></section>

            <Section title="1. Detention pay: define when the clock starts">
              <p>Detention is compensation for excessive time at a shipper or receiver. The rate confirmation should state how much free time is included, whether the clock begins at the appointment or actual check-in, the hourly rate after free time, billing increments, any daily cap, and whether late arrival changes eligibility.</p>
              <p className="mt-5">“Detention available” is incomplete. A workable term might identify two hours free after an on-time check-in, the amount per hour after that point, and a maximum. It should also explain the notice deadline and acceptable proof. First-come, first-served facilities require equally clear language because there may be no appointment time to anchor the claim.</p>
              <p className="mt-5">Record arrival at the property, gate check-in, dock assignment, loading completion, paperwork release, and departure. Preserve geofenced tracking, ELD location history, signed bills, facility receipts, and email or app messages. If a clerk will not sign arrival and departure times, notify dispatch and the broker immediately and document the refusal.</p>
            </Section>

            <Section title="2. Waiting time and hours of service are separate questions">
              <p>Payment terminology does not decide the driver&apos;s legal duty status. Under the current <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-A/section-395.2" target="_blank" rel="noopener noreferrer" className={sourceClass}>49 CFR §395.2 definition of on-duty time</a>, time at a shipper facility waiting to be dispatched is on duty unless the motor carrier relieves the driver from duty. Loading, unloading, supervising or assisting, attending the vehicle, remaining ready to operate, and handling shipping receipts are also listed as on-duty activities.</p>
              <p className="mt-5">Whether a specific waiting period may be logged off duty depends on what the driver is required to do and whether the driver has truly been relieved of work and responsibility. Do not change a log solely to make a delivery appointment work. Read our <Link href="/blog/fmcsa-hours-of-service-guide-property-drivers-2026" className={sourceClass}>hours-of-service guide</Link> and use the actual circumstances to select the correct status.</p>
              <p className="mt-5">The commercial impact is real even when waiting does not consume driving time. FMCSA&apos;s <a href="https://www.fmcsa.dot.gov/regulations/hours-service/summary-hours-service-regulations" target="_blank" rel="noopener noreferrer" className={sourceClass}>HOS summary</a> explains that a property driver may not drive beyond the 14th consecutive hour after coming on duty and that ordinary off-duty periods do not extend the window. Detention can therefore erase the time needed to finish the trip or reach safe parking.</p>
            </Section>

            <Section title="3. Layover pay: clarify the conversion point">
              <p>Layover commonly applies when a customer-caused delay keeps the truck overnight or into another service day. The parties should define what counts as a layover, the flat or daily amount, whether detention stops and converts to layover, when the next charge period begins, and whether the driver must remain available at the facility.</p>
              <p className="mt-5">Ask who controls the rescheduled appointment and what happens if the new time conflicts with the driver&apos;s HOS or a later committed load. A vague promise to “take care of the driver” is difficult to invoice. Get the amount and revised schedule in writing while the delay is happening.</p>
            </Section>

            <Section title="4. TONU: protect the cost of a cancelled dispatch">
              <p>Truck ordered not used, often shortened to TONU, compensates a carrier when a confirmed load is cancelled or unavailable after the truck has been committed or dispatched. Agree on the amount, cancellation cutoff, what qualifies as dispatch, and whether deadhead distance affects the charge.</p>
              <p className="mt-5">When a load disappears, capture the signed rate confirmation, acceptance time, tractor location, dispatch message, miles driven, arrival evidence if applicable, and written cancellation. Ask the broker for a revised rate confirmation showing the TONU amount. Do not rely only on a telephone promise.</p>
              <p className="mt-5">A TONU does not automatically replace every loss from a cancellation. The carrier may have declined another load, used fuel, and lost the service day. Compare the offered amount with the real commitment cost, using the method in our <Link href="/blog/how-to-calculate-trucking-cost-per-mile-owner-operators" className={sourceClass}>cost-per-mile guide</Link>, before accepting future terms from the same customer.</p>
            </Section>

            <Section title="5. Stop-off, driver-assist and redelivery charges">
              <p>A multi-stop rate must identify every scheduled pickup and delivery. State how many stops are included and the amount for each additional stop. A stop charge pays for additional service; it does not necessarily replace detention if the stop also exceeds its agreed free time. Clarify whether both charges can apply.</p>
              <p className="mt-5">Driver assist should define the physical task. Moving pallets with a pallet jack, breaking down freight, counting pieces, tailgating, sorting, and hand unloading are different services with different time, injury, and cargo risks. Confirm that the driver has the proper equipment and that the task does not conflict with company policy or facility rules.</p>
              <p className="mt-5">Redelivery and reconsignment can add mileage, appointments, handling, tolls, and time. Before moving to a different destination, obtain written instructions, the new rate, and updated paperwork. Never depend on an informal text from an unverified contact; follow the identity checks in our <Link href="/blog/how-to-verify-freight-broker-before-booking-load-2026" className={sourceClass}>freight broker verification guide</Link>.</p>
            </Section>

            <Section title="6. Lumper fees: authorization first, receipt second">
              <p>A lumper is a third party paid to load or unload freight. Before paying, ask the broker whether the charge is authorized, whether it will provide a payment code or advance, and what receipt is required. The carrier should know whether the expense is fully reimbursable, included in the rate, subject to an advance fee, or excluded under the contract.</p>
              <p className="mt-5">Keep the itemized lumper receipt, payment confirmation, bill of lading, purchase order or load number, facility name, and written broker authorization. Check that the receipt belongs to the correct load. Submit it through the required portal or email before the paperwork deadline.</p>
              <p className="mt-5">If the carrier&apos;s factoring company receives the invoice, confirm how reimbursed expenses are treated. A percentage fee charged against gross invoice value can increase the cost of fronting a lumper payment. Review the reserve, advance, deduction, and chargeback rules described in our <Link href="/blog/freight-factoring-comparison-owner-operators-2026" className={sourceClass}>factoring comparison guide</Link>.</p>
            </Section>

            <Section title="7. Put a complete accessorial schedule in writing">
              <p>Build a standard schedule for quoting, then match it to each broker&apos;s agreement. At minimum, the rate confirmation should address free time, detention rate and cap, layover rate, TONU, stop-off charges, driver assist, lumper procedure, redelivery, storage or trailer detention when relevant, tracking requirements, notice deadlines, and document-submission deadlines.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><Check title="Trigger">What exact event starts the charge, and when does it stop?</Check><Check title="Amount">Is it hourly, per occurrence, per stop, or per day? Is there a cap?</Check><Check title="Notice">Who must be contacted, through which channel, and by what deadline?</Check><Check title="Proof">Which timestamps, signatures, receipts, photos, tracking, or messages are required?</Check><Check title="Approval">Does the broker require written approval before the cost is incurred?</Check><Check title="Payment">Will the charge appear on a revised rate confirmation, and when is it due?</Check></div>
              <p className="mt-5">Read the broker-carrier agreement as well as the one-page rate confirmation. If the documents conflict, ask for a written correction. Watch for clauses that waive charges when tracking is interrupted, shorten claim deadlines, prohibit stacking detention and layover, or make a receipt mandatory.</p>
            </Section>

            <Section title="8. Use a real-time delay workflow">
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8"><Step number="1" title="Check in correctly">Arrive through the required entrance and record the appointment, gate, and check-in time.</Step><Step number="2" title="Start a timestamp log">Record dock assignment, loading or unloading start, completion, paperwork release, and departure.</Step><Step number="3" title="Notify before free time expires">Send the broker a written update before the contractual notice deadline, including the load number and facility status.</Step><Step number="4" title="Protect the delivery plan">Explain any HOS or appointment effect immediately and request revised instructions.</Step><Step number="5" title="Obtain authorization">Get written approval before a lumper, redelivery, extra handling, or route change whenever the agreement requires it.</Step><Step number="6" title="Request a revised rate confirmation">Confirm every approved amount before invoicing.</Step><Step number="7" title="Submit one complete packet">Include the invoice, revised rate confirmation, POD/BOL, receipts, timestamps, and requested supporting records.</Step></ol>
            </Section>

            <Section title="9. Audit accessorial recovery, not just revenue">
              <p>Track accessorial events by customer and facility: minutes detained, amount requested, amount approved, amount paid, reason denied, and days to payment. A high gross rate can hide a weak lane if the truck repeatedly loses hours without collecting the agreed charges.</p>
              <p className="mt-5">Use the history during negotiations. A facility that averages three hours beyond free time needs a rate and appointment plan that reflects the pattern. A broker that consistently requires correct proof but pays promptly may be manageable; one that changes requirements after delivery presents a different risk.</p>
            </Section>

            <section className="mt-12 rounded-3xl bg-slate-950 p-7 text-white sm:p-9"><h2 className="text-2xl font-black">The bottom line</h2><p className="mt-4 leading-8 text-slate-300">Accessorial revenue is protected before dispatch through specific written terms, then earned through prompt notices and clean documentation. Define each trigger and amount, log the driver&apos;s duty status truthfully, preserve timestamps and receipts, obtain revised paperwork, and audit what customers actually pay.</p><p className="mt-5 leading-8 text-slate-300">For professional dry-van freight service with ONENESS TRANSPORT LLC, call <a href="tel:+15123633649" className="font-bold text-orange-400 hover:text-orange-300">512-363-3649</a> or email <a href="mailto:dispatch@onenesstransport.com" className="font-bold text-orange-400 hover:text-orange-300">dispatch@onenesstransport.com</a>.</p><p className="mt-5 text-sm leading-7 text-slate-400">Federal sources were reviewed September 12, 2026. This article provides general operational information, not legal, tax, accounting, or contract advice. Accessorial definitions and payment rights vary by agreement, customer, facility, jurisdiction, and load.</p></section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start"><div className="rounded-2xl border border-slate-200 p-6 shadow-sm"><p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Protect every charge</p><ul className="mt-4 space-y-3 text-sm text-slate-600"><li>Define the trigger</li><li>Set the amount and cap</li><li>Send timely notice</li><li>Save objective proof</li><li>Get revised paperwork</li></ul></div><div className="rounded-2xl bg-orange-500 p-6 text-slate-950"><p className="text-sm font-bold uppercase tracking-[0.16em]">Federal references</p><a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-395/subpart-A/section-395.2" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">49 CFR §395.2</a><a href="https://www.fmcsa.dot.gov/regulations/hours-service/summary-hours-service-regulations" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">FMCSA HOS summary</a></div><div className="rounded-2xl border border-slate-200 p-6"><p className="font-black text-slate-950">Need carrier documents?</p><p className="mt-3 text-sm leading-6 text-slate-600">Use our secure broker setup page to request current onboarding information.</p><Link href="/broker-setup" className="mt-4 inline-flex font-bold text-orange-600 hover:text-orange-700">Broker Setup &rarr;</Link></div></aside>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) { return <section className="mt-12"><h2 className="text-3xl font-black tracking-tight text-slate-950">{title}</h2><div className="mt-5">{children}</div></section>; }
function Row({ charge, trigger, proof }: { charge: string; trigger: string; proof: string }) { return <tr className="align-top"><th className="px-5 py-4 font-black text-slate-950">{charge}</th><td className="px-5 py-4 text-slate-600">{trigger}</td><td className="px-5 py-4 text-slate-600">{proof}</td></tr>; }
function Check({ title, children }: { title: string; children: React.ReactNode }) { return <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{children}</p></div>; }
function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <li className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-black text-slate-950">{number}</span><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-1 text-slate-600">{children}</p></div></li>; }
