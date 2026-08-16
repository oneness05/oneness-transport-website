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
              <Snapshot label="Equipment" value="53-foot Dry Van" />
              <Snapshot label="MC Number" value="91452779" />
              <Snapshot label="USDOT Number" value="4853711" />
              <Snapshot label="Home Base" value="Austin, Texas" />
              <Snapshot label="Dispatch" value="512-363-3649" />
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
                <div className="text-2xl text-orange-500" aria-hidden="true">
                  &#10003;
                </div>
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
            Explore all services &#8594;
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
              href="tel:+15123633649"
              className="rounded-lg bg-slate-950 px-6 py-3.5 font-bold text-white"
            >
              Call 512-363-3649
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
        &#128667;
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function Feature({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="text-xl text-orange-500" aria-hidden="true">
        &#10003;
      </div>
      <p className="mt-3 font-bold text-slate-950">{title}</p>
    </div>
  );
}
