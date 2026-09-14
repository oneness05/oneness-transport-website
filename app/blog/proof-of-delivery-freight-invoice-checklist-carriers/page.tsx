import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl = "https://www.onenesstransport.com/blog/proof-of-delivery-freight-invoice-checklist-carriers";
const articleImage = "https://www.onenesstransport.com/images/proof-of-delivery-freight-invoice-checklist-2026.webp";
const publishedTime = "2026-09-14T15:24:00-05:00";

export const metadata: Metadata = {
  title: "Proof of Delivery & Freight Invoice Checklist for Carriers",
  description: "Build a complete carrier billing packet with the rate confirmation, BOL, POD, invoice, receipts, accessorial approvals, and submission proof.",
  keywords: ["proof of delivery trucking", "freight invoice checklist", "carrier billing packet", "bill of lading proof of delivery", "trucking invoice documents", "POD submission"],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article", url: articleUrl,
    title: "Proof of Delivery and Freight Invoice Checklist for Carriers",
    description: "A practical workflow for collecting, checking, and submitting the documents behind a clean freight invoice.",
    publishedTime, modifiedTime: publishedTime, authors: ["ONENESS TRANSPORT LLC"],
    images: [{ url: articleImage, width: 1672, height: 941, alt: "Driver and dispatcher reviewing proof-of-delivery and freight billing documents beside a dry van" }],
  },
  twitter: { card: "summary_large_image", title: "POD and Freight Invoice Checklist", description: "Organize rate confirmations, BOLs, PODs, invoices, receipts, approvals, and submission records.", images: [articleImage] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Proof of Delivery and Freight Invoice Checklist for Motor Carriers",
  description: "A practical guide for small motor carriers on building and submitting complete freight billing packets.",
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
    { "@type": "ListItem", position: 3, name: "POD and Invoice Checklist", item: articleUrl },
  ],
};

const sourceClass = "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function PodInvoiceChecklistArticle() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="bg-slate-950 px-5 pb-16 pt-12 text-white lg:pb-20 lg:pt-16"><div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400"><Link href="/" className="hover:text-orange-400">Home</Link><span className="mx-2" aria-hidden="true">/</span><Link href="/blog" className="hover:text-orange-400">Blog</Link></nav>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Carrier Billing &amp; Documentation</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Proof of Delivery and Freight Invoice Checklist for Carriers</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">A profitable load is not finished when the trailer is empty. It is finished when the carrier submits the correct documents, supports every charge, and preserves a usable record.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400"><span>By ONENESS TRANSPORT LLC</span><span aria-hidden="true">&middot;</span><time dateTime="2026-09-14">September 14, 2026</time><span aria-hidden="true">&middot;</span><span>11 min read</span></div>
        </div></header>

        <div className="mx-auto -mt-8 max-w-6xl px-5"><div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl"><Image src="/images/proof-of-delivery-freight-invoice-checklist-2026.webp" alt="Driver and dispatcher reviewing proof-of-delivery and freight billing documents beside a dry van" fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" /></div></div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 text-[1.0625rem] leading-8 text-slate-700">
            <p className="text-xl leading-9">A carrier billing packet connects the work performed to the amount invoiced. Missing signatures, unreadable pages, an old rate confirmation, or an unsupported accessorial can cause a broker or factoring company to place the invoice on hold. A repeatable document workflow reduces preventable back-and-forth and gives the carrier a better record if questions arise.</p>
            <p className="mt-6">No single packet works for every customer. The broker-carrier agreement, rate confirmation, customer portal, factoring notice, and shipment type may impose different requirements. Read them before pickup and treat the strictest applicable deadline as part of the load plan.</p>

            <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200"><div className="bg-slate-950 px-6 py-4 text-white"><h2 className="text-xl font-black">Core carrier billing packet</h2></div><div className="overflow-x-auto"><table className="w-full min-w-[820px] text-left text-sm"><thead className="bg-slate-100 text-slate-950"><tr><th className="px-5 py-4">Document</th><th className="px-5 py-4">What to verify</th><th className="px-5 py-4">Common problem</th></tr></thead><tbody className="divide-y divide-slate-200">
              <Row document="Carrier invoice" verify="Legal carrier name, invoice and load numbers, dates, charges, remittance details" problem="Wrong payer, duplicate number, or total does not match support" />
              <Row document="Final rate confirmation" verify="Latest signed version and every approved added charge" problem="Submitting the original rate after a rate or service change" />
              <Row document="Bill of lading" verify="Shipper, consignee, origin, destination, freight description, count, and weight when applicable" problem="Missing page, number mismatch, or unreported pickup exception" />
              <Row document="Proof of delivery" verify="Delivery date, receiver identity or signature, and condition exceptions" problem="Unreadable signature, no date, or image cuts off remarks" />
              <Row document="Accessorial support" verify="Written approval, timestamps, receipts, revised rate confirmation" problem="Invoice adds a charge without the required notice or proof" />
              <Row document="Submission receipt" verify="Portal confirmation, sent email, upload time, and attachment list" problem="No evidence that a complete packet was delivered" />
            </tbody></table></div></section>

            <Section title="1. Start with the rate confirmation">
              <p>The rate confirmation is the billing roadmap. Confirm the broker&apos;s legal identity, load number, equipment, pickup and delivery locations, appointment terms, linehaul, fuel surcharge, stops, special services, accessorial rules, paperwork deadline, and submission method. Compare it with the broader broker-carrier agreement instead of reading it alone.</p>
              <p className="mt-5">If the rate, route, stops, dates, commodity, or service changes, request an updated written confirmation before performing the added work whenever possible. Save every version, but mark the final approved version clearly so an older total is not invoiced by mistake.</p>
              <p className="mt-5">Verify the broker before moving the load or sharing tax and insurance documents. Our <Link href="/blog/how-to-verify-freight-broker-before-booking-load-2026" className={sourceClass}>freight broker verification guide</Link> explains authority, financial security, contact identity, and payment-risk checks.</p>
            </Section>

            <Section title="2. Check the bill of lading at pickup">
              <p>The bill of lading, or BOL, identifies the shipment accepted for transportation. Under <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-373" target="_blank" rel="noopener noreferrer" className={sourceClass}>49 CFR Part 373</a>, covered for-hire motor carriers must issue a receipt or bill of lading for property tendered in interstate or foreign commerce. Section 373.101 lists the consignor and consignee, origin and destination, package count, freight description, and weight, volume, or measurement when applicable to rating.</p>
              <p className="mt-5">Before leaving the shipper, compare the paperwork with the rate confirmation and the freight presented. Confirm that all pages are present, load and purchase-order numbers are legible, the destination is correct, seals are recorded when required, and any shipper-loaded-and-counted notation is understood.</p>
              <p className="mt-5">Do not sign for a count or condition the driver could not reasonably verify without noting the applicable limitation. If the paperwork, weight, commodity, count, seal, or visible condition conflicts with the tender, pause and contact the carrier and broker. Keep the original document secure and create a clear scan or photo before travel.</p>
            </Section>

            <Section title="3. Build a usable proof of delivery">
              <p>A proof of delivery, or POD, is usually the delivery copy of the BOL or another receiver-signed delivery record. Broker requirements vary, but a usable POD commonly shows the load or BOL number, delivery location, delivery date, receiver&apos;s printed name or identifiable signature, and any shortage, overage, or visible damage remarks.</p>
              <p className="mt-5">At delivery, ask the receiver to complete every required field. Review the page before leaving. If a signature is only a line or initials, request a printed name when permitted. Make sure handwritten remarks are readable and no part of the page is hidden by a fold, clipboard, finger, shadow, or camera crop.</p>
              <p className="mt-5">Never alter a customer&apos;s signature or remarks. If a genuine error must be corrected, follow the facility&apos;s and broker&apos;s process and preserve the original. A delivery exception can involve cargo-claim consequences, so report it immediately and follow the carrier&apos;s insurer and claims instructions rather than offering a legal conclusion at the dock.</p>
            </Section>

            <Section title="4. Document accessorials while they happen">
              <p>Detention, layover, truck ordered not used, extra stops, driver assist, redelivery, and lumper reimbursement require more than a line on the invoice. The agreement may require notice before free time expires, written authorization, facility timestamps, tracking history, an itemized receipt, or a revised rate confirmation.</p>
              <p className="mt-5">Maintain a timeline showing arrival, check-in, dock assignment, loading or unloading start, completion, paperwork release, and departure. Save written messages and the name of the person contacted. For lumper service, preserve authorization, the receipt, payment evidence, facility, amount, and load number.</p>
              <p className="mt-5">Use our <Link href="/blog/trucking-accessorial-fees-detention-layover-tonu-guide" className={sourceClass}>accessorial-fees guide</Link> to define each trigger, amount, cap, notice deadline, and proof requirement before dispatch.</p>
            </Section>

            <Section title="5. Prepare an invoice that can be matched quickly">
              <p>The invoice should use the carrier&apos;s exact legal name and remittance details required by the payer or notice of assignment. Include a unique invoice number, invoice date, broker name, load number, BOL or purchase-order reference, pickup and delivery dates, origin, destination, and an itemized total.</p>
              <p className="mt-5">Separate linehaul, fuel surcharge, stops, detention, lumper reimbursement, and other approved charges instead of presenting one unexplained amount. The total should match the final rate confirmation and attached support. Do not add a fee merely because the carrier incurred a cost; it must be authorized under the applicable agreement.</p>
              <p className="mt-5">Federal expense-bill provisions in <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-373" target="_blank" rel="noopener noreferrer" className={sourceClass}>49 CFR §373.103</a> identify information for covered for-hire, non-exempt carrier freight bills, including shipment parties, date, origin and destination, freight description, rates, total charges including special services, and a remittance address. Applicability and contractual billing requirements should be evaluated for the specific operation.</p>
            </Section>

            <Section title="6. Follow the exact submission instructions">
              <p>Some brokers accept email, while others require a carrier portal, transportation-management system, electronic data interchange, or factoring platform. Use the stated channel and file type. A document sent to the broker representative is not necessarily submitted to accounts payable.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><Check title="Use predictable filenames">Include the load number and document type instead of generic names such as “scan” or “image.”</Check><Check title="Combine pages carefully">Put documents in the requested order and confirm the file opens after conversion.</Check><Check title="Check image quality">Use full-page, color-readable scans with no blur, glare, shadows, or cut edges.</Check><Check title="Protect sensitive data">Send only required documents through the verified portal or official company channel.</Check><Check title="Save submission proof">Retain the portal confirmation, upload ID, or sent email with its attachment list.</Check><Check title="Record the due date">Track the contractual payment date and the date a complete packet was accepted.</Check></div>
              <p className="mt-5">Before pressing submit, open the final PDF on a phone and computer. Confirm every page is upright, readable, complete, and assigned to the same load.</p>
            </Section>

            <Section title="7. Coordinate correctly with a factoring company">
              <p>If the carrier factors invoices, the factoring agreement and notice of assignment affect where the broker should remit payment. Confirm that the broker is approved, the notice is current, the invoice displays the correct remittance instruction, and the factor receives every required document.</p>
              <p className="mt-5">Ask how the factor treats accessorial reimbursements, reserves, chargebacks, short pays, duplicates, and missing-document holds. Do not send competing payment instructions to the broker and factor. Our <Link href="/blog/freight-factoring-comparison-owner-operators-2026" className={sourceClass}>freight factoring comparison</Link> lists the contract questions a small carrier should review.</p>
            </Section>

            <Section title="8. Preserve a searchable carrier record">
              <p>Store one digital folder per load, using a consistent naming pattern. Include the tender, final rate confirmation, BOL, POD, invoice, accessorial proof, receipts, tracking or communication needed for billing, submission confirmation, remittance advice, and payment reconciliation.</p>
              <p className="mt-5">Federal retention rules do not replace longer contract, tax, insurance, cargo-claim, or state requirements. <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-371/subpart-A/section-371.3" target="_blank" rel="noopener noreferrer" className={sourceClass}>49 CFR §371.3</a> separately requires brokers to keep a record of each transaction for three years. The record includes the consignor, originating motor carrier, BOL or freight-bill number, brokerage compensation, certain service compensation, freight charges collected, and carrier-payment date; each party to the brokered transaction has the stated right to review the required transaction record.</p>
              <p className="mt-5">Back up carrier records in an access-controlled system and use multifactor authentication. Limit employee access according to job need. A public website folder or public repository is not an appropriate place for signed BOLs, invoices, banking instructions, W-9s, or insurance documents.</p>
            </Section>

            <Section title="9. Resolve a rejected or short-paid invoice systematically">
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8"><Step number="1" title="Get the exact reason">Ask whether the problem is missing, unreadable, mismatched, unauthorized, duplicate, or sent through the wrong channel.</Step><Step number="2" title="Compare the final rate">Confirm the invoice total and charge descriptions match the latest approved rate confirmation.</Step><Step number="3" title="Audit every page">Check load numbers, dates, signatures, remarks, receipts, and required supporting evidence.</Step><Step number="4" title="Correct without altering history">Issue a revised invoice or rescan the original record; never modify a signature or customer notation.</Step><Step number="5" title="Resubmit through the required channel">Include the complete packet and reference the original submission or rejection ticket.</Step><Step number="6" title="Track acceptance and payment">Record who confirmed the correction, the new acceptance date, and the expected payment date.</Step></ol>
            </Section>

            <Section title="Final pre-submission checklist">
              <ul className="mt-6 space-y-4 rounded-2xl border border-slate-200 p-6 sm:p-8"><Item>Final signed rate confirmation is included.</Item><Item>Invoice identity, load number, dates, itemized charges, total, and remittance details are correct.</Item><Item>Every BOL and POD page is complete, upright, and readable.</Item><Item>Delivery signature or receiver identification and date meet the customer&apos;s instructions.</Item><Item>Exceptions and accessorials were reported and supported without altering original records.</Item><Item>Lumper and other receipts match the correct load and amount.</Item><Item>Packet follows the required file order, format, channel, and deadline.</Item><Item>Submission confirmation is saved in the load folder.</Item><Item>Invoice is entered once in the carrier&apos;s receivables tracker.</Item></ul>
            </Section>

            <section className="mt-12 rounded-3xl bg-slate-950 p-7 text-white sm:p-9"><h2 className="text-2xl font-black">The bottom line</h2><p className="mt-4 leading-8 text-slate-300">Treat paperwork as part of transportation—not an afterthought. Verify the rate before pickup, protect the BOL, obtain a usable POD, document every approved extra charge, build an accurate invoice, submit through the required channel, and preserve proof of delivery and submission.</p><p className="mt-5 leading-8 text-slate-300">For professional full-truckload dry-van service with ONENESS TRANSPORT LLC, call <a href="tel:+15123633649" className="font-bold text-orange-400 hover:text-orange-300">512-363-3649</a> or email <a href="mailto:dispatch@onenesstransport.com" className="font-bold text-orange-400 hover:text-orange-300">dispatch@onenesstransport.com</a>.</p><p className="mt-5 text-sm leading-7 text-slate-400">Federal sources were reviewed September 14, 2026. This guide provides general operational information, not legal, tax, accounting, insurance, cargo-claim, or contract advice. Confirm the rules and agreement requirements applicable to the specific shipment.</p></section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start"><div className="rounded-2xl border border-slate-200 p-6 shadow-sm"><p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Six essentials</p><ul className="mt-4 space-y-3 text-sm text-slate-600"><li>Accurate invoice</li><li>Final rate confirmation</li><li>Complete BOL</li><li>Readable POD</li><li>Accessorial support</li><li>Submission receipt</li></ul></div><div className="rounded-2xl bg-orange-500 p-6 text-slate-950"><p className="text-sm font-bold uppercase tracking-[0.16em]">Federal references</p><a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-373" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">49 CFR Part 373</a><a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-371/subpart-A/section-371.3" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">49 CFR §371.3</a></div><div className="rounded-2xl border border-slate-200 p-6"><p className="font-black text-slate-950">Carrier onboarding</p><p className="mt-3 text-sm leading-6 text-slate-600">Request current Oneness Transport carrier documents through our secure setup page.</p><Link href="/broker-setup" className="mt-4 inline-flex font-bold text-orange-600 hover:text-orange-700">Broker Setup &rarr;</Link></div></aside>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) { return <section className="mt-12"><h2 className="text-3xl font-black tracking-tight text-slate-950">{title}</h2><div className="mt-5">{children}</div></section>; }
function Row({ document, verify, problem }: { document: string; verify: string; problem: string }) { return <tr className="align-top"><th className="px-5 py-4 font-black text-slate-950">{document}</th><td className="px-5 py-4 text-slate-600">{verify}</td><td className="px-5 py-4 text-slate-600">{problem}</td></tr>; }
function Check({ title, children }: { title: string; children: React.ReactNode }) { return <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{children}</p></div>; }
function Item({ children }: { children: React.ReactNode }) { return <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" aria-hidden="true" /><span>{children}</span></li>; }
function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <li className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-black text-slate-950">{number}</span><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-1 text-slate-600">{children}</p></div></li>; }
