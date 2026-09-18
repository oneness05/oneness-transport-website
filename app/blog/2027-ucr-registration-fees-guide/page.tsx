import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl = "https://www.onenesstransport.com/blog/2027-ucr-registration-fees-guide";
const articleImage = "https://www.onenesstransport.com/images/2027-ucr-registration-fees-guide.webp";
const publishedTime = "2026-09-18T15:08:00-05:00";

export const metadata: Metadata = {
  title: "2027 UCR Registration Fees: Small-Carrier Guide",
  description: "Prepare for 2027 Unified Carrier Registration: October 1 opening date, new FMCSA fees, fleet-count rules, filing steps, and records to save.",
  keywords: ["2027 UCR registration", "2027 UCR fees", "Unified Carrier Registration 2027", "UCR fee increase", "UCR registration deadline", "Texas UCR registration"],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article", url: articleUrl,
    title: "2027 UCR Registration Fees: Small-Carrier Guide",
    description: "The official portal opens October 1, 2026. Review the new fee brackets, determine who must register, and prepare an audit-ready filing.",
    publishedTime, modifiedTime: publishedTime, authors: ["ONENESS TRANSPORT LLC"],
    images: [{ url: articleImage, width: 1672, height: 941, alt: "Owner-operator reviewing annual registration paperwork beside a dark blue tractor and white dry van at a Texas yard" }],
  },
  twitter: { card: "summary_large_image", title: "2027 UCR Registration Fees and Filing Guide", description: "New fees take effect October 1. See every bracket and a practical filing checklist for small carriers.", images: [articleImage] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "NewsArticle",
  headline: "2027 UCR Registration Fees: Small-Carrier Guide",
  description: "A practical guide to the 2027 Unified Carrier Registration opening date, fee brackets, fleet count, filing, and recordkeeping.",
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
    { "@type": "ListItem", position: 3, name: "2027 UCR Registration Guide", item: articleUrl },
  ],
};

const sourceClass = "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

const fees = [
  { fleet: "0–2", oldFee: "$46", newFee: "$55", increase: "$9" },
  { fleet: "3–5", oldFee: "$138", newFee: "$167", increase: "$29" },
  { fleet: "6–20", oldFee: "$276", newFee: "$333", increase: "$57" },
  { fleet: "21–100", oldFee: "$963", newFee: "$1,163", increase: "$200" },
  { fleet: "101–1,000", oldFee: "$4,592", newFee: "$5,548", increase: "$956" },
  { fleet: "1,001+", oldFee: "$44,836", newFee: "$54,165", increase: "$9,329" },
];

export default function UcrRegistrationArticle() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="bg-slate-950 px-5 pb-16 pt-12 text-white lg:pb-20 lg:pt-16"><div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400"><Link href="/" className="hover:text-orange-400">Home</Link><span className="mx-2" aria-hidden="true">/</span><Link href="/blog" className="hover:text-orange-400">Blog</Link></nav>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Federal Carrier Registration</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">2027 UCR Registration Fees: Small-Carrier Guide</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">The official 2027 UCR portal opens October 1, 2026, with higher fees for every fleet bracket. Here is what interstate carriers should verify before filing.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400"><span>By ONENESS TRANSPORT LLC</span><span aria-hidden="true">&middot;</span><time dateTime="2026-09-18">September 18, 2026</time><span aria-hidden="true">&middot;</span><span>11 min read</span></div>
        </div></header>

        <div className="mx-auto -mt-8 max-w-6xl px-5"><div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl"><Image src="/images/2027-ucr-registration-fees-guide.webp" alt="Owner-operator reviewing annual registration paperwork beside a dark blue tractor and white dry van at a Texas yard" fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" /></div></div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 text-[1.0625rem] leading-8 text-slate-700">
            <p className="text-xl leading-9">FMCSA published its final 2027 Unified Carrier Registration fee rule on September 1, 2026. The rule becomes effective October 1, the same date the UCR Plan says the 2027 National Registration System portal will open.</p>
            <p className="mt-6">For a one-truck carrier, the annual fee rises from $46 for registration year 2026 to $55 for 2027. The dollar change is small compared with fuel or insurance, but a missed or incorrect filing can create an avoidable compliance problem. The practical goal is to identify the right entity, count the fleet correctly, pay through the official system, and preserve the receipt.</p>

            <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200"><div className="bg-slate-950 px-6 py-4 text-white"><h2 className="text-xl font-black">2027 UCR fee schedule</h2></div><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-100 text-slate-950"><tr><th className="px-5 py-4">Commercial motor vehicles</th><th className="px-5 py-4">2025–2026 fee</th><th className="px-5 py-4">2027 fee</th><th className="px-5 py-4">Dollar increase</th></tr></thead><tbody className="divide-y divide-slate-200">{fees.map((fee) => <tr key={fee.fleet}><th className="px-5 py-4 font-black text-slate-950">{fee.fleet}</th><td className="px-5 py-4">{fee.oldFee}</td><td className="px-5 py-4 font-black text-orange-700">{fee.newFee}</td><td className="px-5 py-4">{fee.increase}</td></tr>)}</tbody></table></div></section>
            <p className="mt-4 text-sm text-slate-500">Brokers and leasing companies pay the smallest-bracket fee of $55. A freight forwarder that operates commercial motor vehicles uses the applicable fleet bracket.</p>

            <Section title="What changed for registration year 2027">
              <p>FMCSA adopted an average 20 percent increase over the fee structure used for 2025 and 2026. The dollar increases range from $9 in the smallest bracket to $9,329 in the largest. The agency stated that the adjustment is intended to address a projected shortfall in the revenue distributed to participating states and used for UCR administration.</p>
              <p className="mt-5">This is one fee adjustment, not an automatic 20 percent increase every year. The final rule says the 2027 schedule remains in effect for later registration years unless a future rulemaking changes it. FMCSA also noted that the 2027 fees remain below the amounts charged from 2019 through 2022.</p>
            </Section>

            <Section title="Who generally must register">
              <p>UCR generally applies to entities engaged in interstate or international commerce as motor carriers, motor private carriers of property, brokers, freight forwarders, and leasing companies. A for-hire dry-van carrier crossing state lines is the straightforward example. The UCR Plan&apos;s eligibility wizard says an entity operating solely in intrastate commerce is not required under UCR, although separate state requirements may still apply.</p>
              <p className="mt-5">The program&apos;s commercial-motor-vehicle definition includes a self-propelled highway vehicle used principally to transport cargo or passengers when it meets the weight, hazardous-material, or passenger thresholds. For weight, the FAQ uses at least 10,001 pounds GVWR or gross vehicle weight, or at least 10,001 pounds combined when connected to trailing equipment.</p>
              <p className="mt-5">Do not decide eligibility only by looking at the truck&apos;s current location or whether a particular state participates. The UCR FAQ explains that fees depend on engagement in interstate commerce, not how many states the carrier enters. When the facts are unusual—such as inactive authority, only intrastate work, lightweight vehicles, or mixed brokerage and carrier operations—use the official <a href="https://plan.ucr.gov/do-i-need-to-register/" target="_blank" rel="noopener noreferrer" className={sourceClass}>UCR eligibility wizard</a> or the carrier&apos;s state UCR agency.</p>
            </Section>

            <Section title="How to count vehicles for the correct bracket">
              <p>For motor carriers and private carriers of property, the fee bracket is based on the number of commercial motor vehicles operated during the preceding year. The UCR FAQ says fleet changes during the registration year do not require a supplemental report or extra fee; they are reflected in the following year.</p>
              <p className="mt-5">Before filing, compare the number you intend to report with your most recent MCS-150 and business records. Include qualifying vehicles owned or operated under the UCR rules rather than relying on the number physically parked in the yard on filing day. A carrier that recently added, sold, leased, or stopped using equipment should preserve the records supporting its count.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><Check title="Power-unit records">Review tractors and other qualifying self-propelled commercial vehicles operated during the relevant period.</Check><Check title="Lease records">Confirm equipment operated under lease and the responsible carrier entity.</Check><Check title="MCS-150 data">Compare the federal carrier profile with the company&apos;s current operation and update it when required.</Check><Check title="Entity identity">File under the correct legal name and USDOT number; do not combine separate businesses casually.</Check></div>
            </Section>

            <Section title="Texas carriers and the base-state rule">
              <p>UCR is a base-state system. A registrant pays once through its base state on behalf of all participating states. The official FAQ lists Texas as a participating state and says a carrier whose principal place of business is in Texas must use Texas as its base state.</p>
              <p className="mt-5">The fee does not change with the base state. It also does not replace apportioned registration, IFTA, vehicle registration, insurance filings, the Heavy Vehicle Use Tax, operating authority, the Clearinghouse, or a biennial MCS-150 update. Treat UCR as one annual item in the carrier&apos;s broader compliance calendar.</p>
              <p className="mt-5">For fuel-tax filing, see the <Link href="/blog/texas-ifta-filing-recordkeeping-guide-2026" className={sourceClass}>Texas IFTA filing and recordkeeping guide</Link>. New authorities can use the <Link href="/blog/fmcsa-new-entrant-safety-audit-checklist" className={sourceClass}>FMCSA New Entrant safety-audit checklist</Link> to organize the rest of the compliance file.</p>
            </Section>

            <Section title="A clean filing workflow for October 1">
              <ol className="mt-6 space-y-5 rounded-2xl border border-slate-200 p-6 sm:p-8"><Step number="1" title="Verify the official opening date">The UCR Plan says 2027 registration through the National Registration System opens October 1, 2026.</Step><Step number="2" title="Confirm the carrier identity">Match the legal name, DBA if applicable, USDOT number, MC number, business address, email, and base state.</Step><Step number="3" title="Determine the fleet bracket">Use the applicable preceding-year commercial-motor-vehicle count and retain support for it.</Step><Step number="4" title="Use the official portal">Start from <a href="https://www.ucr.gov" target="_blank" rel="noopener noreferrer" className={sourceClass}>UCR.gov</a>. Avoid unsolicited registration services unless you intentionally choose and verify a third party.</Step><Step number="5" title="Review before paying">Confirm the registration year says 2027, the USDOT number is correct, and the displayed fee matches the official bracket.</Step><Step number="6" title="Save the record">Download the receipt or confirmation and store it in the annual compliance folder with the fleet-count support.</Step></ol>
              <p className="mt-5">Complete the 2027 filing before operating in the new registration year. Do not wait for a roadside question, broker compliance request, or renewal solicitation to discover that the wrong year or USDOT number was used.</p>
            </Section>

            <Section title="Avoid third-party solicitation mistakes">
              <p>UCR renewal mail, email, and phone solicitations can look official even when they come from a private filing company charging an additional service fee. A third party may provide a legitimate service, but it is not the government merely because its notice uses urgent language or displays public carrier data.</p>
              <ul className="mt-6 space-y-4 rounded-2xl border border-slate-200 p-6 sm:p-8"><Item>Type UCR.gov directly or follow the link from the official UCR Plan website.</Item><Item>Verify that the filing year is 2027—not an amendment or duplicate payment for 2026.</Item><Item>Do not disclose portal credentials or payment information in response to an unexpected call.</Item><Item>Compare any quoted amount with the official fee table and identify any separate service charge.</Item><Item>Search the USDOT number in the official system before paying to prevent duplicate registration.</Item><Item>Keep the confirmation number and receipt; record who completed the filing and when.</Item></ul>
            </Section>

            <Section title="What to keep—and what does not have to ride in the truck">
              <p>The UCR FAQ states that there is no UCR credential requirement and that proof of compliance does not have to be carried in the vehicle. A carrier may carry the payment receipt if it chooses. Enforcement personnel and business partners can check registration electronically.</p>
              <p className="mt-5">Operationally, keeping a digital copy accessible to the owner, dispatcher, and compliance contact is still useful. Store the receipt with the filing inputs, fleet worksheet, and any correction correspondence. If a broker&apos;s onboarding system shows an outdated status, provide the official receipt while the database refreshes rather than paying a second time.</p>
            </Section>

            <Section title="2027 UCR preparation checklist">
              <ul className="mt-6 space-y-4 rounded-2xl border border-slate-200 p-6 sm:p-8"><Item>Calendar October 1, 2026, as the official portal opening date.</Item><Item>Confirm whether the entity operates in interstate or international commerce.</Item><Item>Verify the legal name, USDOT number, authority, address, and base state.</Item><Item>Document the preceding-year commercial-motor-vehicle count.</Item><Item>Select the correct fee bracket and compare it with the final-rule table.</Item><Item>File for registration year 2027 through the official portal.</Item><Item>Review the payment screen before submitting.</Item><Item>Download the receipt and store it in the 2027 compliance folder.</Item><Item>Check the public registration status after processing.</Item><Item>Keep UCR separate from IRP, IFTA, HVUT, MCS-150, insurance, and authority renewals.</Item></ul>
              <p className="mt-5">For a small carrier, the filing should be simple. The risk comes from using the wrong entity, year, fleet count, or website. Prepare those details now, file through the official system when it opens, and keep an audit-ready record.</p>
            </Section>

            <Section title="Official sources">
              <ul className="mt-5 space-y-3"><li><a href="https://www.federalregister.gov/documents/2026/09/01/2026-17893/fees-for-the-unified-carrier-registration-plan-and-agreement" target="_blank" rel="noopener noreferrer" className={sourceClass}>FMCSA final rule, 91 FR 56063</a> — published September 1, 2026; effective October 1, 2026; official fee schedule.</li><li><a href="https://plan.ucr.gov/" target="_blank" rel="noopener noreferrer" className={sourceClass}>Unified Carrier Registration Plan</a> — October 1 portal-opening announcement and registration support.</li><li><a href="https://plan.ucr.gov/frequently-asked-questions/" target="_blank" rel="noopener noreferrer" className={sourceClass}>UCR Frequently Asked Questions</a> — vehicle definitions, base-state rules, fleet counting, and credential guidance.</li><li><a href="https://plan.ucr.gov/do-i-need-to-register/" target="_blank" rel="noopener noreferrer" className={sourceClass}>UCR eligibility wizard</a> — official guided check for common entity and operation types.</li></ul>
              <p className="mt-5 text-sm text-slate-500">Sources reviewed September 18, 2026. This article is general information, not legal advice or an eligibility determination. Verify the current official portal, rules, and facts for the specific entity before filing.</p>
            </Section>
          </div>

          <aside className="h-fit space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-slate-950 p-6 text-white"><p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-400">Dry van capacity</p><h2 className="mt-3 text-2xl font-black">Need a reliable Texas carrier?</h2><p className="mt-4 leading-7 text-slate-300">ONENESS TRANSPORT LLC supports brokers and shippers with clear communication and practical load planning.</p><a href="tel:+15123633649" className="mt-6 block rounded-xl bg-orange-500 px-4 py-3 text-center font-black text-slate-950 hover:bg-orange-400">Call 512-363-3649</a><a href="mailto:dispatch@onenesstransport.com" className="mt-3 block break-all text-center font-bold text-orange-400 hover:text-orange-300">dispatch@onenesstransport.com</a></div>
            <div className="rounded-2xl border border-slate-200 p-6"><h2 className="font-black text-slate-950">Key date</h2><p className="mt-3 text-sm leading-7 text-slate-600">The official 2027 National Registration System portal opens October 1, 2026.</p></div>
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
