import Link from "next/link";
import { Truck, Route, Handshake } from "lucide-react";

const services = [
  {
    title: "Dry Van Freight",
    description:
      "Safe and dependable transportation for general dry freight with on-time delivery.",
    icon: Truck,
  },
  {
    title: "Regional & Long Haul",
    description:
      "Serving Texas and interstate lanes with reliable scheduling and communication.",
    icon: Route,
  },
  {
    title: "Broker Partnerships",
    description:
      "Fast onboarding, responsive communication, and dependable service for brokers.",
    icon: Handshake,
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Reliable Freight Solutions
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              ONENESS TRANSPORT delivers dependable transportation services with
              professionalism, integrity, and customer-focused communication.
            </p>
          </div>

          <Link
            href="/services"
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            View All Services
          </Link>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100">
             <service.icon className="h-7 w-7 text-orange-600" />
             </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-8 font-semibold text-orange-500 transition group-hover:translate-x-2">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}