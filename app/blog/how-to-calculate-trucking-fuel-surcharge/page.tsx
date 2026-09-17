import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl = "https://www.onenesstransport.com/blog/how-to-calculate-trucking-fuel-surcharge";
const articleImage = "https://www.onenesstransport.com/images/trucking-fuel-surcharge-calculator-2026.webp";
const publishedTime = "2026-09-17T15:26:00-05:00";

export const metadata: Metadata = {
  title: "How to Calculate a Trucking Fuel Surcharge",
  description: "Calculate a trucking fuel surcharge from a diesel benchmark, base price, MPG factor, and contract miles—then compare it with your actual fuel cost.",
  keywords: ["trucking fuel surcharge calculator", "how to calculate fuel surcharge", "diesel fuel surcharge formula", "owner operator fuel surcharge", "EIA diesel price", "fuel surcharge per mile"],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article", url: articleUrl,
    title: "How to Calculate a Trucking Fuel Surcharge",
    description: "A practical guide to diesel benchmarks, base prices, MPG factors, contract miles, and actual fuel-cost reconciliation.",
    publishedTime, modifiedTime: publishedTime, authors: ["ONENESS TRANSPORT LLC"],
    images: [{ url: articleImage, width: 1672, height: 941, alt: "Owner-operator reviewing a fuel receipt and tablet beside a dark blue tractor and white dry van at a diesel island" }],
  },
  twitter: { card: "summary_large_image", title: "How to Calculate a Trucking Fuel Surcharge", description: "Use the surcharge formula correctly, document the contract inputs, and compare the result with real fuel cost.", images: [articleImage] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "How to Calculate a Trucking Fuel Surcharge",
  description: "A practical owner-operator guide to fuel surcharge formulas, diesel benchmarks, contract miles, and actual fuel-cost reconciliation.",
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
    { "@type": "ListItem", position: 3, name: "Trucking Fuel Surcharge Guide", item: articleUrl },
  ],
};

const sourceClass = "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function FuelSurchargeArticle() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="bg-slate-950 px-5 pb-16 pt-12 text-white lg:pb-20 lg:pt-16"><div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400"><Link href="/" className="hover:text-orange-400">Home</Link><span className="mx-2" aria-hidden="true">/</span><Link href="/blog" className="hover:text-orange-400">Blog</Link></nav>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Owner-Operator Rates &amp; Fuel Costs</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">How to Calculate a Trucking Fuel Surcharge</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">A fuel surcharge can adjust freight revenue when diesel changes, but only if the rate confirmation defines the benchmark, base price, MPG factor, mileage, and update date.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400"><span>By ONENESS TRANSPORT LLC</span><span aria-hidden="true">&middot;</span><time dateTime="2026-09-17">September 17, 2026</time><span aria-hidden="true">&middot;</span><span>12 min read</span></div>
        </div></header>

        <div className="mx-auto -mt-8 max-w-6xl px-5"><div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl"><Image src="/images/trucking-fuel-surcharge-calculator-2026.webp" alt="Owner-operator reviewing a fuel receipt and tablet beside a dark blue tractor and white dry van at a diesel island" fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" /></div></div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 text-[1.0625rem] leading-8 text-slate-700">
            <p className="text-xl leading-9">A fuel surcharge is a contract adjustment, not a substitute for pricing a profitable load. It can move with a published diesel benchmark while the linehaul stays fixed. The carrier still has to calculate actual fuel expense, deadhead, fixed costs, maintenance, time, and margin separately.</p>
            <p className="mt-6">The U.S. Energy Information Administration says it does not calculate, assess, regulate, or endorse a particular surcharge method. Shippers and transportation companies negotiate the terms privately, although many use EIA&apos;s weekly diesel data as an input. That makes the signed rate confirmation—not a generic online calculator—the controlling document for payment.</p>

            <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200"><div className="bg-slate-950 px-6 py-4 text-white"><h2 className="text-xl font-black">The common per-mile formula</h2></div><div className="p-6 sm:p-8">
              <div className="rounded-2xl bg-orange-50 p-5 text-center text-lg font-black text-slate-950">(Reference diesel price − Base fuel price) ÷ Assumed MPG = Fuel surcharge per mile</div>
              <p className="mt-5">Then multiply the surcharge per mile by the mileage basis stated in the contract. If the benchmark is below the base price, many schedules produce zero, but the agreement must say whether a floor, negative adjustment, or another rule applies.</p>
            </div></section>

            <Section title="1. Define all four inputs before booking">
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><Check title="Reference diesel price">The named EIA U.S., PADD regional, or other published benchmark—and the exact week used.</Check><Check title="Base fuel price">The diesel price already assumed in the linehaul rate.</Check><Check title="Assumed MPG">The contract&apos;s efficiency factor, which may differ from the truck&apos;s actual MPG.</Check><Check title="Contract miles">The mileage source and whether the surcharge applies to loaded, practical, shortest, hub, or another mileage measure.</Check></div>
              <p className="mt-5">A rate confirmation that says only “FSC included” gives the carrier no separate formula to audit. If the fuel surcharge is itemized, confirm all inputs, the effective date, rounding rule, and total before dispatch. Do not assume the broker&apos;s mileage or benchmark matches your route plan.</p>
            </Section>

            <Section title="2. Choose the diesel benchmark the contract actually names">
              <p>EIA publishes a weekly U.S. on-highway diesel price and regional Petroleum Administration for Defense District (PADD) prices. The national and Gulf Coast figures are different, so changing the reference after a load is accepted changes the result.</p>
              <p className="mt-5">For the week of September 14, 2026, EIA reported a U.S. on-highway diesel price of <strong>$6.285 per gallon</strong> and a Gulf Coast (PADD 3) price of <strong>$6.027 per gallon</strong>. The release was dated September 15, 2026. EIA&apos;s table states that these retail prices include taxes.</p>
              <p className="mt-5">Those figures are a dated benchmark, not a forecast and not the price every truck paid. Use the series, week, region, and lag written into the agreement. For example, a Monday load might reference the prior week&apos;s published figure because the new weekly release is not available until Tuesday.</p>
            </Section>

            <Section title="3. Work the formula step by step">
              <p>Assume a hypothetical agreement uses the September 14 national benchmark of $6.285, a $1.50 base price, a 6.0 MPG factor, and 1,000 contract miles:</p>
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8"><Step number="1" title="Find the price difference">$6.285 − $1.50 = $4.785 per gallon.</Step><Step number="2" title="Convert it to a per-mile surcharge">$4.785 ÷ 6.0 MPG = $0.7975 per mile.</Step><Step number="3" title="Apply the contract&apos;s rounding rule">Rounded to the nearest cent, the surcharge is $0.80 per contract mile.</Step><Step number="4" title="Calculate the total">Using the unrounded value: $0.7975 × 1,000 miles = $797.50.</Step></ol>
              <p className="mt-5">If the same hypothetical terms used the $6.027 Gulf Coast benchmark, the result would be $0.7545 per mile, or $754.50 over 1,000 miles before any contract-specific rounding. That $43 difference shows why the benchmark must be written down.</p>
              <p className="mt-5 text-sm text-slate-500">This example demonstrates arithmetic only. It is not a recommended base price, MPG factor, surcharge schedule, or freight rate.</p>
            </Section>

            <Section title="4. Keep surcharge revenue separate from actual fuel cost">
              <p>The surcharge formula estimates a contract adjustment. Actual fuel cost depends on the gallons purchased and the net price paid after discounts, fees, and taxes. For one load, use:</p>
              <div className="my-6 rounded-2xl bg-slate-950 p-6 text-center text-lg font-black text-white">Actual fuel cost = Gallons purchased × Net price per gallon</div>
              <div className="my-6 rounded-2xl bg-slate-950 p-6 text-center text-lg font-black text-white">Actual fuel cost per all mile = Total fuel expense ÷ Loaded + Deadhead miles</div>
              <p>A truck may beat the formula&apos;s assumed MPG on one trip and miss it on another because of weight, wind, grade, traffic, idle time, speed, weather, routing, or equipment condition. A fuel-card discount lowers actual expense but does not automatically change a benchmark-based surcharge unless the contract says it does.</p>
              <p className="mt-5">Track gallons and all odometer miles—not only paid miles. The <Link href="/blog/owner-operator-fuel-card-comparison-2026" className={sourceClass}>fuel-card comparison</Link> explains fees and discount structures, while the <Link href="/blog/how-to-calculate-trucking-cost-per-mile-owner-operators" className={sourceClass}>cost-per-mile guide</Link> shows how fuel fits beside fixed costs, maintenance, and owner pay.</p>
            </Section>

            <Section title="5. Calculate total load revenue without double counting">
              <p>Build the settlement from its actual components:</p>
              <div className="my-6 rounded-2xl bg-orange-50 p-6 text-center text-lg font-black text-slate-950">Gross load revenue = Linehaul + Fuel surcharge + Approved accessorials</div>
              <p>If the quote is all-in, do not add a second surcharge. If it is linehaul plus FSC, keep both lines visible. When comparing loads, divide total expected revenue by <strong>all planned truck miles</strong>, including origin deadhead and the positioning miles needed after delivery. A strong loaded-mile rate can become weak once empty miles are included.</p>
              <p className="mt-5">Detention, layover, TONU, extra stops, and lumper reimbursement are separate terms. Use the <Link href="/blog/trucking-accessorial-fees-detention-layover-tonu-guide" className={sourceClass}>accessorial-fees guide</Link> to document those charges. If invoices are factored, confirm whether the factor charges its percentage on the entire invoice, including the surcharge and accessorials.</p>
            </Section>

            <Section title="6. Audit the rate confirmation before the truck moves">
              <ul className="mt-6 space-y-4 rounded-2xl border border-slate-200 p-6 sm:p-8"><Item>Is the price all-in, or are linehaul and fuel surcharge separate?</Item><Item>Which diesel series and geography are used: U.S., PADD region, state, or another source?</Item><Item>Which publication week or effective date controls the load?</Item><Item>What base fuel price and assumed MPG are in the schedule?</Item><Item>Which mileage source and route type determine billable miles?</Item><Item>How are cents per mile and total dollars rounded?</Item><Item>Is there a floor, cap, minimum, or negative adjustment?</Item><Item>Does the surcharge apply to every stop, split shipment, or only the main lane?</Item><Item>Will the factor assess its fee on the surcharge amount?</Item><Item>Do the written line items add up to the agreed total?</Item></ul>
              <p className="mt-5">Resolve any mismatch in writing and obtain a revised rate confirmation before pickup. Save the confirmation, any surcharge schedule, benchmark screenshot or PDF, dispatch messages, invoice, BOL, POD, and settlement together. The <Link href="/blog/proof-of-delivery-freight-invoice-checklist-carriers" className={sourceClass}>freight-invoice checklist</Link> can help organize the billing packet.</p>
            </Section>

            <Section title="7. Use a weekly fuel reconciliation">
              <p>A one-truck carrier can maintain a simple worksheet with one row per load. Record the benchmark series and week, base price, MPG factor, contract miles, calculated surcharge, linehaul, actual gallons, net fuel spend, loaded miles, deadhead miles, and factoring fee.</p>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="px-5 py-4">Question</th><th className="px-5 py-4">Calculation</th><th className="px-5 py-4">Why it matters</th></tr></thead><tbody className="divide-y divide-slate-200"><Row question="Was FSC paid correctly?" calculation="Expected FSC − Paid FSC" reason="Find settlement errors quickly" /><Row question="Did FSC cover fuel variance?" calculation="FSC revenue − Fuel cost above your base assumption" reason="Measure the hedge, not total profitability" /><Row question="What was actual fuel CPM?" calculation="Net fuel spend ÷ All miles" reason="Reflect discounts and deadhead" /><Row question="What was total revenue per all mile?" calculation="All load revenue ÷ All miles" reason="Compare lanes on the same basis" /></tbody></table></div>
              <p className="mt-5">Reconcile weekly while receipts and rate terms are easy to retrieve. A surcharge can be calculated perfectly and the load can still lose money, so review it beside the truck&apos;s full break-even cost and the time consumed.</p>
            </Section>

            <Section title="Final fuel-surcharge checklist">
              <ul className="mt-6 space-y-4 rounded-2xl border border-slate-200 p-6 sm:p-8"><Item>Use the benchmark, base price, MPG factor, date, and mileage basis in the written agreement.</Item><Item>Keep the unrounded calculation until the contract&apos;s rounding step.</Item><Item>Confirm whether the price is all-in or linehaul plus surcharge.</Item><Item>Compare surcharge revenue with actual fuel spend, but do not treat them as the same number.</Item><Item>Include deadhead in profitability analysis.</Item><Item>Save benchmark evidence and the final rate confirmation with the invoice.</Item><Item>Reconcile the carrier settlement and factoring deduction.</Item><Item>Price the load using full cost per mile and required margin—not the surcharge alone.</Item></ul>
              <p className="mt-5">The safest approach is simple: define the formula before dispatch, preserve every input, calculate consistently, and compare the result with real operating costs after delivery. That turns fuel surcharge from a vague line item into an auditable part of the load.</p>
            </Section>

            <Section title="Official sources">
              <ul className="mt-5 space-y-3"><li><a href="https://www.eia.gov/tools/faqs/faq.php?id=2&t=9" target="_blank" rel="noopener noreferrer" className={sourceClass}>EIA: How do I calculate diesel fuel surcharges?</a> — explains that surcharges are privately negotiated and EIA does not calculate, regulate, or endorse a method.</li><li><a href="https://www.eia.gov/petroleum/gasdiesel/" target="_blank" rel="noopener noreferrer" className={sourceClass}>EIA Gasoline and Diesel Fuel Update</a> — current U.S. and regional on-highway diesel benchmarks and release dates.</li><li><a href="https://www.eia.gov/dnav/pet/pet_pri_gnd_dcus_nus_w.htm" target="_blank" rel="noopener noreferrer" className={sourceClass}>EIA Weekly Retail Gasoline and Diesel Prices</a> — historical weekly diesel table, including taxes.</li></ul>
              <p className="mt-5 text-sm text-slate-500">Sources and benchmark data reviewed September 17, 2026. This article is general business information, not legal, tax, accounting, or contract advice. Verify the current benchmark and the specific written agreement for every load.</p>
            </Section>
          </div>

          <aside className="h-fit space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-slate-950 p-6 text-white"><p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-400">Dry van capacity</p><h2 className="mt-3 text-2xl font-black">Need a clear freight quote?</h2><p className="mt-4 leading-7 text-slate-300">ONENESS TRANSPORT LLC serves shippers and brokers with transparent communication and practical load planning.</p><a href="tel:+15123633649" className="mt-6 block rounded-xl bg-orange-500 px-4 py-3 text-center font-black text-slate-950 hover:bg-orange-400">Call 512-363-3649</a><a href="mailto:dispatch@onenesstransport.com" className="mt-3 block break-all text-center font-bold text-orange-400 hover:text-orange-300">dispatch@onenesstransport.com</a></div>
            <div className="rounded-2xl border border-slate-200 p-6"><h2 className="font-black text-slate-950">Remember</h2><p className="mt-3 text-sm leading-7 text-slate-600">A fuel surcharge adjusts revenue under a contract. It does not prove that the load covers every cost or earns a profit.</p></div>
          </aside>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) { return <section className="mt-12"><h2 className="text-3xl font-black tracking-tight text-slate-950">{title}</h2><div className="mt-5">{children}</div></section>; }
function Check({ title, children }: { title: string; children: React.ReactNode }) { return <div className="rounded-2xl bg-slate-100 p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{children}</p></div>; }
function Item({ children }: { children: React.ReactNode }) { return <li className="flex gap-3"><span className="mt-1 font-black text-orange-600" aria-hidden="true">✓</span><span>{children}</span></li>; }
function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <li className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-black text-slate-950">{number}</span><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-1 text-slate-600">{children}</p></div></li>; }
function Row({ question, calculation, reason }: { question: string; calculation: string; reason: string }) { return <tr className="align-top"><th className="px-5 py-4 font-black text-slate-950">{question}</th><td className="px-5 py-4 font-bold text-slate-700">{calculation}</td><td className="px-5 py-4 text-slate-600">{reason}</td></tr>; }
