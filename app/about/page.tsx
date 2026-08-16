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
            <Stat label="Trailer" value="53-foot Dry Van" />
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
