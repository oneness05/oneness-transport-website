import Link from "next/link";
import {
  BadgeCheck,
  RadioTower,
  Truck,
  Wrench,
} from "lucide-react";

const equipmentFeatures = [
  {
    icon: Truck,
    title: "2023 Kenworth T680",
    description:
      "Modern, professional equipment built for dependable service.",
  },
  {
    icon: Wrench,
    title: "Cummins X15 Power",
    description:
      "Reliable performance for regional and long-haul freight.",
  },
  {
    icon: BadgeCheck,
    title: "Dry Van Equipment",
    description:
      "Clean, secure white dry van trailer for general freight.",
  },
  {
    icon: RadioTower,
    title: "Shipment Tracking",
    description:
      "Responsive updates and tracking throughout transportation.",
  },
];

export default function EquipmentPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 overflow-hidden rounded-3xl bg-slate-950 lg:grid-cols-2 lg:items-stretch">
          {/* Left panel */}
          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.25),transparent_35%),linear-gradient(145deg,#172033_0%,#020617_75%)] p-10 text-white lg:flex lg:items-center lg:p-14">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-orange-500/20" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-white/10" />

            <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
                  Our Equipment
                </p>

                <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight md:text-5xl">
                  Reliable Equipment.
                  <span className="block text-orange-500">
                    Reliable Deliveries.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                  ONENESS TRANSPORT operates modern dry van equipment maintained
                  to support safe, professional, and dependable freight service.
                </p>
            </div>
          </div>

          {/* Right panel */}
          <div className="bg-white p-8 lg:p-12">
            <div className="grid gap-6 sm:grid-cols-2">
              {equipmentFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
                >
                  <feature.icon className="h-9 w-9 text-orange-500" />

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
