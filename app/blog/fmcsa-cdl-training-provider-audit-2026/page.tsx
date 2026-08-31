import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl = "https://www.onenesstransport.com/blog/fmcsa-cdl-training-provider-audit-2026";
const articleImage = "https://www.onenesstransport.com/images/fmcsa-cdl-training-audit-2026.webp";
const publishedTime = "2026-08-31T15:12:00-05:00";

export const metadata: Metadata = {
  title: "FMCSA CDL Training Crackdown: What Carriers Should Know",
  description: "FMCSA announced removals of 110 CDL schools, 160 proposed removals, and a nationwide skills-tester audit. See what drivers and carriers should verify.",
  keywords: ["FMCSA CDL training crackdown", "CDL school audit 2026", "Training Provider Registry removal", "ELDT provider verification", "third party CDL skills tester audit"],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title: "FMCSA CDL Training Crackdown: What Carriers Should Know",
    description: "A factual guide to the August 31 federal CDL-training enforcement announcement and the practical checks drivers and small carriers can make now.",
    publishedTime,
    modifiedTime: publishedTime,
    authors: ["ONENESS TRANSPORT LLC"],
    images: [{ url: articleImage, width: 1672, height: 941, alt: "Dry van truck, CDL card, compliance checklist, and nationwide training-provider audit map" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCSA CDL Training Crackdown: What Carriers Should Know",
    description: "What the new training-provider removals and skills-tester audit mean—and what the announcement does not establish.",
    images: [articleImage],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "FMCSA CDL Training Crackdown: What Carriers Should Know",
  description: "A point-by-point guide to FMCSA's August 31, 2026 CDL training-provider removals, proposed removals, and third-party skills-tester audit.",
  image: [articleImage],
  datePublished: publishedTime,
  dateModified: publishedTime,
  author: { "@type": "Organization", name: "ONENESS TRANSPORT LLC", url: "https://www.onenesstransport.com" },
  publisher: { "@type": "Organization", name: "ONENESS TRANSPORT LLC", logo: { "@type": "ImageObject", url: "https://www.onenesstransport.com/logos/logo-header.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.onenesstransport.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.onenesstransport.com/blog" },
    { "@type": "ListItem", position: 3, name: "FMCSA CDL Training Crackdown", item: articleUrl },
  ],
};

const linkClass = "font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600";

export default function FmcsaCdlTrainingAuditArticle() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="bg-slate-950 px-5 pb-16 pt-12 text-white lg:pb-20 lg:pt-16">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-400"><Link href="/" className="hover:text-orange-400">Home</Link><span className="mx-2" aria-hidden="true">/</span><Link href="/blog" className="hover:text-orange-400">Blog</Link></nav>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">CDL Training &amp; Compliance News</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">FMCSA CDL Training Crackdown: What Carriers Should Know</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">Federal agencies announced training-school removals, new investigations, and a nationwide audit of third-party CDL skills testers. Here is what is confirmed—and what drivers should verify.</p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400"><span>By ONENESS TRANSPORT LLC</span><span aria-hidden="true">&middot;</span><time dateTime="2026-08-31">August 31, 2026</time><span aria-hidden="true">&middot;</span><span>10 min read</span></div>
          </div>
        </header>

        <div className="mx-auto -mt-8 max-w-6xl px-5">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
            <Image src="/images/fmcsa-cdl-training-audit-2026.webp" alt="Dry van truck, CDL card, compliance checklist, and nationwide training-provider audit map" fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 text-[1.0625rem] leading-8 text-slate-700">
            <p className="text-xl leading-9">On August 31, 2026, the Federal Motor Carrier Safety Administration announced a broad enforcement effort aimed at fraud and noncompliance in commercial driver training and testing. The announcement combines immediate regulatory action, proposed removals, audits, and criminal investigations. Those are different stages and should not be treated as interchangeable.</p>
            <p className="mt-6">For drivers and small carriers, the practical lesson is straightforward: verify a school in FMCSA&apos;s Training Provider Registry before paying, confirm that training was reported to the correct driver record, preserve the documents, and never assume that a provider&apos;s advertising proves federal or state approval.</p>

            <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-slate-950 px-6 py-4 text-white"><h2 className="text-xl font-black">What FMCSA announced on August 31</h2></div>
              <div className="overflow-x-auto"><table className="w-full min-w-[650px] text-left text-sm"><thead className="bg-slate-100 text-slate-950"><tr><th className="px-5 py-4">Action</th><th className="px-5 py-4">Reported scale</th><th className="px-5 py-4">What that status means</th></tr></thead><tbody className="divide-y divide-slate-200"><Row action="Emergency provider removals" scale="More than 110 ELDT providers" meaning="FMCSA says the providers must immediately stop operating as training providers." /><Row action="Proposed removals" scale="More than 160 notices" meaning="The providers have received proposed action; this is not the same as a final removal." /><Row action="Provider investigations" scale="Nearly 400 investigations in 40 states" meaning="FMCSA reported reviews of facilities, instructors, assessments, and records." /><Row action="Third-party tester audit" scale="Nationwide" meaning="FMCSA will examine CDL skills testers and state oversight of those testers." /><Row action="Federal inspection surge" scale="More than 200 schools across 23 states" meaning="DHS said notices of inspection would be served on August 31; a notice is not itself a finding of guilt." /></tbody></table></div>
            </section>

            <Section title="1. Emergency removals are the most immediate action">
              <p>FMCSA said it would execute emergency removal of more than 110 Entry-Level Driver Training providers from the Training Provider Registry, or TPR. According to the agency, the action followed a comparison of roadside English-language-proficiency violations with TPR certification data.</p>
              <p className="mt-5">Under <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-380/subpart-G/section-380.723" target="_blank" rel="noopener noreferrer" className={linkClass}>49 CFR § 380.723</a>, FMCSA may use emergency removal in cases involving fraud, criminal behavior, willful disregard of ELDT regulations, or when public health, interest, or safety requires it. The ordinary proposed-removal process does not apply to an emergency removal.</p>
              <p className="mt-5">The regulations also state that training conducted after a provider&apos;s removal date is invalid. That makes the date important. A driver should not continue training merely because classes remain open or because payment has already been made.</p>
            </Section>

            <Section title="2. Proposed removal is not final removal">
              <p>FMCSA separately reported more than 160 notices of proposed removal after nearly 400 investigations in 40 states. The agency listed alleged problems such as inadequate space for required maneuvers, instructors without the correct license, missing assessment records, and questionable training facilities.</p>
              <p className="mt-5">A proposed-removal notice starts a process; it is not a final adjudication. FMCSA&apos;s TPR page explains that providers on the proposed-removal list must notify current and scheduled trainees. Drivers can review both the <a href="https://tpr.fmcsa.dot.gov/provider/inreview" target="_blank" rel="noopener noreferrer" className={linkClass}>providers under review</a> and the separate <a href="https://tpr.fmcsa.dot.gov/provider/removed" target="_blank" rel="noopener noreferrer" className={linkClass}>removed-provider list</a>.</p>
              <p className="mt-5">The federal announcement also says drivers certified by the 160-plus providers are linked to 239 commercial-motor-vehicle-related fatalities. That association does not, by itself, establish that training caused each crash or that every driver trained by those providers was unqualified. The underlying methodology was not included in the announcement, so the number should be reported with that limitation.</p>
            </Section>

            <Section title="3. A nationwide third-party skills-tester audit is beginning">
              <p>FMCSA announced a nationwide audit of third-party CDL skills testers and state oversight programs. Third-party testing can expand access to testing, but states remain responsible for administering compliant CDL programs. FMCSA said it will examine whether testers follow federal requirements and whether states provide effective oversight.</p>
              <p className="mt-5">The announcement describes a graduated state-compliance process: annual program review, a preliminary finding when deficiencies are identified, a 30-day period to develop a corrective action plan, and possible final consequences if deficiencies remain. Severe cases can lead to decertification, under which a state cannot issue, renew, transfer, or upgrade CDLs.</p>
              <p className="mt-5">The audit announcement does not mean every third-party tester is suspect, nor does it automatically invalidate every previously issued CDL. Drivers should rely on direct notices from their state licensing agency or FMCSA rather than social-media claims.</p>
            </Section>

            <Section title="4. Federal law-enforcement activity is separate from TPR administration">
              <p>The same announcement describes coordinated Department of Homeland Security inspections and Department of Justice investigations involving alleged identity-document fraud, unauthorized employment, medical-certification fraud, financial crimes, and labor exploitation. DHS said it planned to serve notices of inspection at more than 200 schools across 23 states on August 31.</p>
              <p className="mt-5">A regulatory removal, a notice of inspection, an investigation, an arrest, and a conviction are legally different events. Responsible reporting should not describe a person, carrier, school, or driver as guilty solely because an inspection or investigation exists. The public announcement provides aggregate figures but does not name every affected business or resolve every case.</p>
            </Section>

            <Section title="5. What a current or recent CDL student should do">
              <ol className="mt-6 space-y-5 rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
                <Step number="1" title="Check the provider&apos;s exact location">Search the official <a href="https://tpr.fmcsa.dot.gov/search" target="_blank" rel="noopener noreferrer" className={linkClass}>TPR provider directory</a>. Match the provider name, city, state, training type, and physical or online location—not just a similar business name.</Step>
                <Step number="2" title="Review both status lists">Check the proposed-removal and removed-provider pages. Save the date and a screenshot or PDF of the result for your records.</Step>
                <Step number="3" title="Check the driver record">Use FMCSA&apos;s secure <a href="https://tpr.fmcsa.dot.gov/check" target="_blank" rel="noopener noreferrer" className={linkClass}>driver-record check</a> and enter information exactly as it appears on the CLP or CDL. Confirm both theory and behind-the-wheel certifications where applicable.</Step>
                <Step number="4" title="Preserve proof">Keep enrollment documents, receipts, curriculum, attendance records, instructor information, range dates, completion documents, and communications. Do not alter or recreate missing records.</Step>
                <Step number="5" title="Pause when status changes">If a location has been removed, do not continue required ELDT there. Contact the TPR team and the state driver licensing agency for instructions specific to the training date and credential.</Step>
              </ol>
            </Section>

            <Section title="6. What a small motor carrier should verify before hiring">
              <p>Employers should not treat a diploma or school advertisement as the entire qualification file. Confirm the driver holds the required, valid license and endorsements; complete the motor-vehicle-record, Clearinghouse, prior-employer, medical, road-test or equivalent, and other qualification checks that apply to the position; and document the hiring decision.</p>
              <p className="mt-5">The TPR is designed so state licensing agencies can verify required ELDT before the applicable test. A carrier generally should not attempt to substitute its own conclusion for the state&apos;s issuance decision. If a driver receives a direct notice that training or a license is affected, place the matter with the appropriate state or federal agency before dispatch.</p>
              <p className="mt-5">Carriers operating under new authority can combine these hiring checks with our <Link href="/blog/fmcsa-new-entrant-safety-audit-checklist" className={linkClass}>FMCSA New Entrant Safety Audit checklist</Link>. A clean driver-qualification workflow is more useful than collecting documents only after an audit notice arrives.</p>
            </Section>

            <Section title="7. How to choose a CDL school without relying on marketing">
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                <Check title="Registry status">Verify the exact training location and each training type in TPR on the day of enrollment.</Check>
                <Check title="State authorization">Confirm any separate state licensing or approval requirement with the state agency.</Check>
                <Check title="Written scope">Get the price, refund policy, theory hours, behind-the-wheel plan, equipment, testing arrangement, and expected timeline in writing.</Check>
                <Check title="Instructor credentials">Ask how the provider verifies instructor eligibility and maintains required records.</Check>
                <Check title="No guaranteed CDL">Avoid anyone promising a license, a passing score, altered attendance, or a shortcut around required testing.</Check>
                <Check title="Record reporting">Ask when training certifications are submitted and then verify them in the driver record.</Check>
              </ul>
              <p className="mt-5">FMCSA&apos;s TPR FAQ says only listed providers can provide training required by the ELDT regulations. Theory and behind-the-wheel training may come from separate providers, but both must be listed and each must report the applicable completion information.</p>
            </Section>

            <section className="mt-12 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
              <h2 className="text-2xl font-black">The practical takeaway</h2>
              <p className="mt-4 leading-8 text-slate-300">Today&apos;s announcement is significant, but the status of a specific provider, driver, or credential must be checked in the official systems. Drivers should verify before paying and again before testing. Carriers should maintain a complete qualification process and respond to direct agency notices—not rumors.</p>
              <p className="mt-5 leading-8 text-slate-300">Read the complete <a href="https://www.fmcsa.dot.gov/newsroom/us-transportation-secretary-duffy-us-homeland-security-secretary-mullin-white-house-fraud" target="_blank" rel="noopener noreferrer" className="font-bold text-orange-400 underline hover:text-orange-300">August 31 FMCSA announcement</a> and current <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-380" target="_blank" rel="noopener noreferrer" className="font-bold text-orange-400 underline hover:text-orange-300">49 CFR Part 380</a> before acting.</p>
              <p className="mt-5 leading-8 text-slate-300">For dry-van freight service with ONENESS TRANSPORT LLC, call <a href="tel:+15123633649" className="font-bold text-orange-400 hover:text-orange-300">512-363-3649</a> or email <a href="mailto:dispatch@onenesstransport.com" className="font-bold text-orange-400 hover:text-orange-300">dispatch@onenesstransport.com</a>.</p>
              <p className="mt-5 text-sm leading-7 text-slate-400">This article is general information, not legal, licensing, employment, or regulatory advice. Federal and state requirements can change, and individual notices or cases require review of the actual documents.</p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm"><p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Verify now</p><ul className="mt-4 space-y-3 text-sm text-slate-600"><li>Search the exact TPR location</li><li>Review proposed removals</li><li>Review final removals</li><li>Check the driver record</li><li>Save dated documentation</li></ul></div>
            <div className="rounded-2xl bg-orange-500 p-6 text-slate-950"><p className="text-sm font-bold uppercase tracking-[0.16em]">Official source</p><a href="https://tpr.fmcsa.dot.gov/" target="_blank" rel="noopener noreferrer" className="mt-3 block font-black underline">Open FMCSA&apos;s Training Provider Registry</a></div>
          </aside>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-12"><h2 className="text-3xl font-black leading-tight text-slate-950">{title}</h2><div className="mt-5">{children}</div></section>;
}

function Row({ action, scale, meaning }: { action: string; scale: string; meaning: string }) {
  return <tr><td className="px-5 py-4 font-bold text-slate-950">{action}</td><td className="px-5 py-4">{scale}</td><td className="px-5 py-4">{meaning}</td></tr>;
}

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-black text-white">{number}</span><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-1">{children}</p></div></li>;
}

function Check({ title, children }: { title: string; children: React.ReactNode }) {
  return <li className="rounded-2xl border border-slate-200 p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6">{children}</p></li>;
}
