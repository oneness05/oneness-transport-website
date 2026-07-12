import {
  ShieldCheck,
  FileCheck2,
  Clock3,
  PhoneCall,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description:
      "$1M liability and $100K cargo coverage for peace of mind.",
  },
  {
    icon: FileCheck2,
    title: "Broker Ready",
    description:
      "Professional paperwork, quick onboarding, and responsive communication.",
  },
  {
    icon: Clock3,
    title: "On-Time Service",
    description:
      "Reliable scheduling and proactive updates from pickup to delivery.",
  },
  {
    icon: PhoneCall,
    title: "Direct Communication",
    description:
      "Work directly with the carrier for fast responses and dependable service.",
  },
];

export default function BrokerTrust() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            WHY BROKERS CHOOSE US
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Professional Service You Can Count On
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            ONENESS TRANSPORT focuses on dependable communication,
            professionalism, and safe dry van transportation across Texas
            and beyond.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
            >
              <item.icon className="mb-6 h-12 w-12 text-orange-500" />

              <h3 className="mb-4 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}