$ErrorActionPreference = "Stop"

Write-Host "Creating ONENESS TRANSPORT main website pages..." -ForegroundColor Cyan

$folders = @(
  "app/about",
  "app/services",
  "app/broker-setup",
  "app/contact",
  "components",
  "public/documents"
)

foreach ($folder in $folders) {
  New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

@'
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://onenesstransport.com"),
  title: {
    default: "ONENESS TRANSPORT LLC | Professional Dry Van Carrier",
    template: "%s | ONENESS TRANSPORT LLC",
  },
  description:
    "Texas-based dry van carrier providing professional full truckload transportation with reliable communication and modern equipment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
'@ | Set-Content -Encoding utf8 "app/layout.tsx"

@'
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #0f172a;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}

::selection {
  background: #fed7aa;
  color: #0f172a;
}
'@ | Set-Content -Encoding utf8 "app/globals.css"

@'
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/broker-setup", label: "Broker Setup" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-black text-slate-950">
            OT
          </div>
          <div>
            <p className="font-bold tracking-wide">ONENESS TRANSPORT</p>
            <p className="text-xs text-slate-400">Professional Dry Van Carrier</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-orange-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+15863828025"
          className="rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-orange-400"
        >
          Call Dispatch
        </a>
      </div>

      <nav className="flex gap-4 overflow-x-auto border-t border-slate-800 px-5 py-3 lg:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-semibold text-slate-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
'@ | Set-Content -Encoding utf8 "components/SiteHeader.tsx"

@'
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">ONENESS TRANSPORT LLC</p>
          <p className="mt-3 max-w-sm leading-7 text-slate-400">
            Driven by Integrity. Delivered with Excellence.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Carrier Information</p>
          <div className="mt-3 space-y-2 text-sm">
            <p>MC 91452779</p>
            <p>USDOT 4853711</p>
            <p>53′ Dry Van</p>
            <p>Austin, Texas</p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Dispatch</p>
          <div className="mt-3 space-y-2 text-sm">
            <a className="block hover:text-orange-400" href="tel:+15863828025">
              586-382-8025
            </a>
            <a
              className="block hover:text-orange-400"
              href="mailto:dispatch@onenesstransport.com"
            >
              dispatch@onenesstransport.com
            </a>
            <Link className="block hover:text-orange-400" href="/broker-setup">
              Broker Setup & Documents
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-5 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} ONENESS TRANSPORT LLC. All rights reserved.
      </div>
    </footer>
  );
}
'@ | Set-Content -Encoding utf8 "components/SiteFooter.tsx"

@'
import Link from "next/link";

const trustItems = [
  "Active interstate carrier",
  "$1,000,000 auto liability",
  "$100,000 cargo coverage",
  "Modern 2023 Kenworth T680",
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-400">
              Texas-Based Dry Van Carrier
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Driven by Integrity.
              <span className="block text-orange-500">
                Delivered with Excellence.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              ONENESS TRANSPORT LLC provides dependable full truckload dry van
              service with professional communication, modern equipment, and a
              commitment to safe, on-time delivery.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/broker-setup"
                className="rounded-lg bg-orange-500 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-orange-400"
              >
                View Broker Setup
              </Link>
              <a
                href="mailto:dispatch@onenesstransport.com"
                className="rounded-lg border border-slate-600 px-6 py-3.5 font-bold text-white transition hover:border-orange-400 hover:text-orange-400"
              >
                Email Dispatch
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
              Carrier Snapshot
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <Snapshot label="Legal Name" value="ONENESS TRANSPORT LLC" />
              <Snapshot label="Equipment" value="53′ Dry Van" />
              <Snapshot label="MC Number" value="91452779" />
              <Snapshot label="USDOT Number" value="4853711" />
              <Snapshot label="Home Base" value="Austin, Texas" />
              <Snapshot label="Dispatch" value="586-382-8025" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="text-2xl text-orange-500">✓</div>
                <p className="mt-3 font-bold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Services
          </p>
          <h2 className="mt-3 text-4xl font-black text-slate-950">
            Reliable capacity for your freight
          </h2>
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Full Truckload"
              text="Dedicated dry van capacity for point-to-point freight movements."
            />
            <ServiceCard
              title="Regional Freight"
              text="Professional service throughout Texas and surrounding markets."
            />
            <ServiceCard
              title="Dedicated Support"
              text="Responsive dispatch communication from pickup through delivery."
            />
          </div>
          <Link
            href="/services"
            className="mt-8 inline-block font-bold text-orange-600 hover:text-orange-700"
          >
            Explore all services →
          </Link>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Why ONENESS TRANSPORT
            </p>
            <h2 className="mt-3 text-4xl font-black text-slate-950">
              Built around trust, safety, and communication
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              We understand that reliable freight transportation depends on
              more than equipment. Brokers and shippers need clear updates,
              dependable appointments, professional conduct, and careful freight
              handling.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Feature title="Professional Communication" />
            <Feature title="Safety-First Operations" />
            <Feature title="Modern Equipment" />
            <Feature title="On-Time Performance" />
          </div>
        </div>
      </section>

      <section className="bg-orange-500 px-5 py-16 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              Ready to work together?
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Contact dispatch about your next load.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+15863828025"
              className="rounded-lg bg-slate-950 px-6 py-3.5 font-bold text-white"
            >
              Call 586-382-8025
            </a>
            <a
              href="mailto:dispatch@onenesstransport.com"
              className="rounded-lg border-2 border-slate-950 px-6 py-3 font-bold"
            >
              Email Dispatch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Snapshot({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-2 font-bold text-white">{value}</p>
    </div>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
        🚛
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function Feature({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="text-xl text-orange-500">✓</div>
      <p className="mt-3 font-bold text-slate-950">{title}</p>
    </div>
  );
}
'@ | Set-Content -Encoding utf8 "app/page.tsx"

@'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ONENESS TRANSPORT LLC and our commitment to safe, dependable dry van freight transportation.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            About Us
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black">
            A dependable carrier built on integrity
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ONENESS TRANSPORT LLC is a Texas-based motor carrier focused on
            professional dry van transportation, responsive communication, and
            safe freight handling.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black text-slate-950">Our mission</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Our mission is to provide brokers and shippers with reliable
              capacity and the confidence that every shipment will be handled
              professionally from pickup through delivery.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              We operate with a simple standard: communicate clearly, honor
              commitments, protect the freight, and represent every customer
              professionally.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Value title="Integrity" text="We do what we say and communicate honestly." />
            <Value title="Safety" text="Safe operations guide every decision we make." />
            <Value title="Reliability" text="Appointments and commitments are taken seriously." />
            <Value title="Professionalism" text="We represent brokers and shippers with care." />
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black text-slate-950">Our equipment</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Stat label="Power Unit" value="2023 Kenworth T680" />
            <Stat label="Trailer" value="53′ Dry Van" />
            <Stat label="Home Base" value="Austin, Texas" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Value({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-7 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
        {label}
      </p>
      <p className="mt-2 text-xl font-black text-slate-950">{value}</p>
    </div>
  );
}
'@ | Set-Content -Encoding utf8 "app/about/page.tsx"

@'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Dry van full truckload and regional freight transportation services from ONENESS TRANSPORT LLC.",
};

const services = [
  {
    title: "Dry Van Full Truckload",
    text: "Dedicated 53-foot dry van capacity for general freight requiring secure, enclosed transportation.",
  },
  {
    title: "Regional Freight",
    text: "Flexible service throughout Texas and surrounding markets with a focus on reliable transit and communication.",
  },
  {
    title: "Broker Freight Support",
    text: "Professional carrier support with timely updates, document availability, and responsive dispatch communication.",
  },
  {
    title: "Dedicated Transportation",
    text: "Consistent capacity solutions for recurring lanes and ongoing shipper or broker relationships.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black">
            Professional dry van transportation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Reliable capacity, clear communication, and careful freight handling
            for brokers and shippers.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="text-3xl">🚚</div>
              <h2 className="mt-5 text-2xl font-black text-slate-950">
                {service.title}
              </h2>
              <p className="mt-4 leading-8 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 p-9 text-white">
          <h2 className="text-3xl font-black">Equipment profile</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <Profile label="Truck" value="2023 Kenworth T680" />
            <Profile label="Trailer" value="53′ Dry Van" />
            <Profile label="Primary Service" value="Full Truckload" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Profile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 font-bold">{value}</p>
    </div>
  );
}
'@ | Set-Content -Encoding utf8 "app/services/page.tsx"

@'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broker Setup",
  description: "Carrier information, insurance limits, equipment details, and onboarding documents for ONENESS TRANSPORT LLC.",
};

const documents = [
  {
    title: "W-9 Form",
    description: "Taxpayer identification form for carrier onboarding.",
    href: "/documents/oneness-transport-w9.pdf",
  },
  {
    title: "Certificate of Insurance",
    description: "Current liability and cargo insurance certificate.",
    href: "/documents/oneness-transport-coi.pdf",
  },
  {
    title: "Operating Authority",
    description: "Federal motor carrier operating authority documentation.",
    href: "/documents/oneness-transport-authority.pdf",
  },
];

export default function BrokerSetupPage() {
  return (
    <main>
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Carrier Onboarding
          </p>
          <h1 className="mt-4 text-5xl font-black">Broker Setup</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Review the carrier information and documents needed to onboard
            ONENESS TRANSPORT LLC.
          </p>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Info label="Legal Name" value="ONENESS TRANSPORT LLC" />
            <Info label="MC Number" value="MC 91452779" />
            <Info label="USDOT Number" value="USDOT 4853711" />
            <Info label="Equipment" value="53′ Dry Van" />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-3xl bg-slate-950 p-8 text-white">
              <h2 className="text-3xl font-black">Operating profile</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Profile label="Primary Service" value="Full Truckload" />
                <Profile label="Home Base" value="Austin, Texas" />
                <Profile label="Auto Liability" value="$1,000,000" />
                <Profile label="Cargo Coverage" value="$100,000" />
                <Profile label="Power Unit" value="2023 Kenworth T680" />
                <Profile label="Trailer Type" value="53′ Dry Van" />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Dispatch Contact
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Need onboarding assistance?
              </h2>
              <div className="mt-6 space-y-4">
                <a
                  href="tel:+15863828025"
                  className="block rounded-xl bg-slate-950 px-5 py-3.5 text-center font-bold text-white"
                >
                  Call 586-382-8025
                </a>
                <a
                  href="mailto:dispatch@onenesstransport.com"
                  className="block rounded-xl bg-orange-500 px-5 py-3.5 text-center font-bold text-slate-950"
                >
                  Email Dispatch
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Carrier Documents
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Download onboarding documents
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Place the matching PDF files in the public/documents folder to
              activate these links.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {documents.map((document) => (
                <article
                  key={document.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-sm font-black text-orange-700">
  PDF
</div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {document.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {document.description}
                  </p>
                  <a
                    href={document.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 rounded-lg bg-slate-950 px-5 py-3 text-center font-bold text-white hover:bg-orange-600"
                  >
                    View Document
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-bold text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-black text-slate-950">{value}</p>
    </div>
  );
}

function Profile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 font-bold text-white">{value}</p>
    </div>
  );
}
'@ | Set-Content -Encoding utf8 "app/broker-setup/page.tsx"

@'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ONENESS TRANSPORT LLC dispatch for load opportunities, onboarding, and transportation support.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Contact
          </p>
          <h1 className="mt-4 text-5xl font-black">Contact dispatch</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Reach out for load opportunities, broker onboarding, insurance
            requests, or additional carrier documentation.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-slate-950">
              Dispatch information
            </h2>
            <div className="mt-8 space-y-6">
              <ContactItem
                label="Phone"
                value="586-382-8025"
                href="tel:+15863828025"
              />
              <ContactItem
                label="Email"
                value="dispatch@onenesstransport.com"
                href="mailto:dispatch@onenesstransport.com"
              />
              <ContactItem label="Location" value="Austin, Texas" />
              <ContactItem label="Equipment" value="53′ Dry Van" />
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
              Load Opportunities
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Send your load details directly to dispatch
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Include the pickup location, delivery location, commodity,
              weight, appointment times, and offered rate.
            </p>
            <a
              href="mailto:dispatch@onenesstransport.com?subject=Load Opportunity for ONENESS TRANSPORT"
              className="mt-8 inline-flex rounded-lg bg-orange-500 px-6 py-3.5 font-bold text-slate-950"
            >
              Email Load Details
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="mt-2 block text-lg font-bold text-slate-950 hover:text-orange-600"
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 text-lg font-bold text-slate-950">{value}</p>
      )}
    </div>
  );
}
'@ | Set-Content -Encoding utf8 "app/contact/page.tsx"

@'
Place your broker PDFs in this folder using these exact filenames:

oneness-transport-w9.pdf
oneness-transport-coi.pdf
oneness-transport-authority.pdf
'@ | Set-Content -Encoding utf8 "public/documents/README.txt"

Write-Host ""
Write-Host "Website pages created successfully." -ForegroundColor Green
Write-Host "Next run: npm run dev" -ForegroundColor Yellow
Write-Host "Open: http://localhost:3000" -ForegroundColor Yellow
