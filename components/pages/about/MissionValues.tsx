import {
  BadgeCheck,
  ClipboardCheck,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    description:
      "We communicate honestly, honor our commitments, and do what is right—even when no one is watching.",
    icon: ShieldCheck,
    number: "01",
  },
  {
    title: "Safety",
    description:
      "We protect every shipment through disciplined operations, maintained equipment, and careful planning.",
    icon: BadgeCheck,
    number: "02",
  },
  {
    title: "Communication",
    description:
      "We keep partners informed with direct, proactive updates from dispatch through final delivery.",
    icon: MessageSquareText,
    number: "03",
  },
  {
    title: "Accountability",
    description:
      "We take ownership of every load, respond quickly, and follow through on the details that matter.",
    icon: ClipboardCheck,
    number: "04",
  },
];

export default function MissionValues() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 md:py-28">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Mission &amp; Values
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight text-slate-950 md:text-5xl">
              The principles behind
              <span className="block text-orange-500">every mile.</span>
            </h2>
          </div>

          <div className="border-l-4 border-orange-500 bg-white px-7 py-6 shadow-sm md:px-9">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-slate-500">
              Our Mission
            </p>
            <p className="mt-3 text-xl font-semibold leading-8 text-slate-800">
              To move freight safely and dependably while giving every customer
              the clear communication, personal attention, and professional
              service their business deserves.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
            >
              <span className="absolute right-6 top-5 text-5xl font-black text-slate-100 transition group-hover:text-orange-50">
                {value.number}
              </span>

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                <value.icon className="h-7 w-7" />
              </div>

              <h3 className="relative mt-8 text-2xl font-black text-slate-950">
                {value.title}
              </h3>
              <p className="relative mt-4 leading-7 text-slate-600">
                {value.description}
              </p>

              <div className="mt-7 h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
