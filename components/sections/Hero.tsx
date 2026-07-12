import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Handshake, MapPin } from "lucide-react";

const trustItems = [
  {
    title: "Fully Insured",
    text: "$1M Liability",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Delivery",
    text: "Reliable Scheduling",
    icon: Clock,
  },
  {
    title: "Broker Ready",
    text: "Easy to Work With",
    icon: Handshake,
  },
  {
    title: "Texas Based",
    text: "Dry Van Carrier",
    icon: MapPin,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[url('/images/hero-truck.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.95)_0%,rgba(2,6,23,0.82)_42%,rgba(2,6,23,0.35)_100%)]" />
        <div className="absolute inset-0 bg-slate-950/20" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
            Texas Based Dry Van Carrier
          </p>

          <h1 className="max-w-5xl text-4xl font-black uppercase leading-[1.02] tracking-tight md:text-6xl">
            Driven by Integrity.
            <span className="block text-orange-500">
              Delivered with Excellence.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
            Reliable dry van transportation across Texas and beyond. We deliver
            every shipment with professionalism, clear communication, and a
            commitment to excellence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-orange-500 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-orange-600"
            >
              Get a Freight Quote
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/broker-setup"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/30 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-white hover:text-slate-950"
            >
              Broker Setup
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-y border-white/10 py-8 md:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <item.icon className="h-9 w-9 text-orange-400" />
              <div>
                <p className="font-black uppercase">{item.title}</p>
                <p className="mt-1 text-sm text-slate-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
