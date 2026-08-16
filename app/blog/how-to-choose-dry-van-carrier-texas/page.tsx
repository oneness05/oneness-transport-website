import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articleUrl =
  "https://www.onenesstransport.com/blog/how-to-choose-dry-van-carrier-texas";
const articleImage =
  "https://www.onenesstransport.com/images/texas-dry-van-carrier.webp";

export const metadata: Metadata = {
  title: "How to Choose a Reliable Dry Van Carrier in Texas",
  description:
    "Learn how brokers and shippers can evaluate a Texas dry van carrier's authority, insurance, equipment, safety, scheduling, and communication.",
  keywords: [
    "dry van carrier in Texas",
    "Texas dry van trucking company",
    "reliable freight carrier",
    "full truckload dry van service",
    "Austin dry van carrier",
  ],
  authors: [{ name: "ONENESS TRANSPORT LLC" }],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    type: "article",
    url: articleUrl,
    title: "How to Choose a Reliable Dry Van Carrier in Texas",
    description:
      "A practical seven-point carrier-selection checklist for freight brokers and shippers.",
    publishedTime: "2026-08-16T12:00:00-05:00",
    authors: ["ONENESS TRANSPORT LLC"],
    images: [
      {
        url: articleImage,
        width: 1400,
        height: 788,
        alt: "Modern dry van carrier serving Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Reliable Dry Van Carrier in Texas",
    description:
      "Seven checks brokers and shippers should complete before tendering a dry van load.",
    images: [articleImage],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose a Reliable Dry Van Carrier in Texas",
  description:
    "A practical carrier-selection checklist covering authority, insurance, equipment, safety, scheduling, and communication.",
  image: [articleImage],
  datePublished: "2026-08-16T12:00:00-05:00",
  dateModified: "2026-08-16T12:00:00-05:00",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": articleUrl,
  },
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
      name: "How to Choose a Reliable Dry Van Carrier in Texas",
      item: articleUrl,
    },
  ],
};

export default function TexasDryVanCarrierArticle() {
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
              Carrier Selection Guide
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              How to Choose a Reliable Dry Van Carrier in Texas
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              Seven important checks for brokers and shippers before tendering a
              full-truckload dry van shipment.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>By ONENESS TRANSPORT LLC</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime="2026-08-16">August 16, 2026</time>
              <span aria-hidden="true">&middot;</span>
              <span>7 min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto -mt-8 max-w-6xl px-5">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
            <Image
              src="/images/texas-dry-van-carrier.webp"
              alt="Modern navy semi-truck pulling a 53-foot dry van near Austin, Texas"
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
              Choosing the right dry van carrier affects far more than transportation
              cost. A dependable carrier helps protect pickup appointments, delivery
              schedules, customer relationships, and freight condition.
            </p>
            <p className="mt-6">
              Brokers and shippers should evaluate a carrier&apos;s operating authority,
              insurance, equipment, communication, and ability to handle the lane
              before tendering a load. Here are seven important checks to make when
              selecting a dry van carrier in Texas.
            </p>

            <ArticleSection number="1" title="Verify the carrier's FMCSA record">
              <p>
                Begin by confirming the carrier&apos;s legal name, USDOT number, and
                operating authority through the Federal Motor Carrier Safety
                Administration. The FMCSA SAFER Company Snapshot can show the USDOT
                status, legal company name, MC number, equipment count, inspection
                information, and any out-of-service status.
              </p>
              <p className="mt-5">
                For interstate, for-hire freight, verify that the carrier&apos;s USDOT
                status is active and its operating authority is authorized for the
                required operation. Brokers can review the official{" "}
                <a
                  href="https://safer.fmcsa.dot.gov/query.asp?query_param=USDOT&query_string=4853711&query_type=queryCarrierSnapshot&searchtype=ANY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600"
                >
                  ONENESS TRANSPORT FMCSA record
                </a>
                .
              </p>
            </ArticleSection>

            <ArticleSection number="2" title="Confirm the equipment matches the freight">
              <p>
                A 53-foot dry van is commonly used for palletized, packaged, and
                non-temperature-controlled freight. Before booking, provide accurate
                commodity, weight, pallet count, dimensions, loading method, and any
                special handling or securement instructions.
              </p>
              <ul className="mt-5 grid gap-3 rounded-2xl bg-slate-50 p-6 sm:grid-cols-2">
                {[
                  "Commodity and total weight",
                  "Pallet or piece count",
                  "Freight dimensions",
                  "Pickup and delivery requirements",
                  "Loading method",
                  "Special securement instructions",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-black text-orange-600" aria-hidden="true">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                Dry vans protect freight from weather and road exposure, but they are
                not designed for products requiring controlled temperatures. Clear
                load information helps prevent equipment problems, delays, and rejected
                shipments. Learn more about our{" "}
                <Link href="/services" className="font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600">
                  full-truckload dry van services
                </Link>
                .
              </p>
            </ArticleSection>

            <ArticleSection number="3" title="Review current insurance coverage">
              <p>
                Request a current Certificate of Insurance before tendering freight.
                Confirm the carrier&apos;s legal name, commercial auto liability, motor
                truck cargo coverage, policy limits, and expiration dates.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Highlight label="Auto Liability" value="$1,000,000" />
                <Highlight label="Cargo Coverage" value="$100,000" />
              </div>
              <p className="mt-5">
                Sensitive insurance and tax documents should be exchanged only after
                the requesting broker and company email are verified. Use our{" "}
                <Link href="/broker-setup" className="font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-600">
                  secure broker setup page
                </Link>{" "}
                to request current documents.
              </p>
            </ArticleSection>

            <ArticleSection number="4" title="Evaluate dispatch communication">
              <p>
                Professional communication is one of the clearest signs of a dependable
                carrier. Before assigning the load, establish expectations for driver
                dispatch, shipper arrival, loaded confirmation, in-transit updates,
                delays, receiver arrival, delivery confirmation, and proof of delivery.
              </p>
              <p className="mt-5">
                Unexpected events can happen in transportation. What matters is whether
                the carrier communicates quickly, honestly, and professionally when
                circumstances change.
              </p>
            </ArticleSection>

            <ArticleSection number="5" title="Confirm the schedule is realistic">
              <p>
                Texas freight lanes can involve long distances, congested metropolitan
                areas, and strict facility appointments. A responsible carrier should
                review deadhead distance, pickup windows, transit time, delivery
                appointments, driver hours of service, expected traffic, weather, and
                facility-specific requirements.
              </p>
              <p className="mt-5">
                A realistic schedule protects the broker, shipper, driver, and receiver.
                Promising an impossible delivery time creates unnecessary risk throughout
                the shipment.
              </p>
            </ArticleSection>

            <ArticleSection number="6" title="Look for safety-focused operations">
              <p>
                A low rate should never replace proper safety and compliance. A
                professional carrier should maintain its equipment, follow hours-of-service
                requirements, use qualified drivers, and confirm that it is not operating
                under an out-of-service order.
              </p>
            </ArticleSection>

            <ArticleSection number="7" title="Choose a carrier that protects your customer relationship">
              <p>
                The driver and carrier represent the broker or shipper when arriving at
                a customer&apos;s facility. Professional conduct includes arriving prepared,
                following facility instructions, handling freight carefully, reporting
                discrepancies promptly, and returning paperwork without unnecessary delay.
              </p>
              <p className="mt-5">
                Reliable service helps brokers retain customers and gives shippers
                confidence that their freight is being handled professionally.
              </p>
            </ArticleSection>

            <section className="mt-14 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Work With ONENESS TRANSPORT
              </p>
              <h2 className="mt-4 text-3xl font-black">
                Dependable dry van service from Austin, Texas
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                ONENESS TRANSPORT LLC is an interstate motor carrier providing
                professional full-truckload dry van transportation with clear dispatch
                communication, safe freight handling, and dependable service.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="tel:+15123633649" className="rounded-lg bg-orange-500 px-5 py-3 font-bold text-slate-950 hover:bg-orange-400">
                  Call 512-363-3649
                </a>
                <a href="mailto:dispatch@onenesstransport.com" className="rounded-lg border border-slate-600 px-5 py-3 font-bold text-white hover:border-orange-400 hover:text-orange-400">
                  Email Dispatch
                </a>
              </div>
            </section>

            <section className="mt-14" aria-labelledby="article-faqs">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                Frequently Asked Questions
              </p>
              <h2 id="article-faqs" className="mt-3 text-3xl font-black text-slate-950">
                Texas dry van carrier FAQs
              </h2>
              <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
                <Faq
                  question="What types of freight can travel in a dry van?"
                  answer="Dry vans commonly transport palletized, packaged, and non-temperature-controlled products. Dimensions, weight, and special handling requirements should always be confirmed before booking."
                />
                <Faq
                  question="How can a broker verify a motor carrier?"
                  answer="Use the FMCSA SAFER Company Snapshot to review the carrier's legal name, USDOT status, authority, identification information, and available safety data."
                />
                <Faq
                  question="What documents should a broker request?"
                  answer="Common onboarding documents include a W-9, Certificate of Insurance, operating-authority information, and a completed carrier packet."
                />
                <Faq
                  question="Does ONENESS TRANSPORT provide full-truckload service?"
                  answer="Yes. ONENESS TRANSPORT provides professional full-truckload transportation using 53-foot dry van equipment."
                />
              </div>
            </section>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-32 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">
                Carrier Information
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <SideFact label="USDOT" value="4853711" />
                <SideFact label="MC" value="91452779" />
                <SideFact label="Equipment" value="53-foot Dry Van" />
                <SideFact label="Home Base" value="Austin, Texas" />
              </dl>
              <Link href="/broker-setup" className="mt-6 block rounded-lg bg-slate-950 px-4 py-3 text-center font-bold text-white hover:bg-orange-500 hover:text-slate-950">
                View Broker Setup
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}

function ArticleSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-black text-orange-700">
          {number}
        </span>
        <h2 className="pt-1 text-2xl font-black text-slate-950 sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Highlight({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
      <p className="text-sm font-bold uppercase tracking-wider text-orange-700">{label}</p>
      <p className="mt-2 text-2xl font-black text-slate-950">{value}</p>
    </div>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="py-6">
      <h3 className="text-lg font-bold text-slate-950">{question}</h3>
      <p className="mt-3 leading-8 text-slate-600">{answer}</p>
    </div>
  );
}

function SideFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-semibold text-slate-500">{label}</dt>
      <dd className="mt-1 font-black text-slate-950">{value}</dd>
    </div>
  );
}
