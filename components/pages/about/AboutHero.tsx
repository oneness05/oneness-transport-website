import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Truck,
} from "lucide-react";

const commitments = [
  "Safety-first operations",
  "Clear, proactive communication",
  "Accountability on every load",
];

const companyFacts = [
  { value: "Austin, TX", label: "Home Base", icon: MapPin },
  { value: "Dry Van", label: "Freight Focus", icon: Truck },
  { value: "2023", label: "Modern Equipment", icon: ShieldCheck },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.18),transparent_28%),radial-gradient(circle_at_12%_90%,rgba(30,58,95,0.42),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
              <Link href="/" className="transition hover:text-orange-400">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">About</span>
            </div>

            <p className="mt-10 text-sm font-bold uppercase tracking-[0.32em] text-orange-400">
              About Oneness Transport
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.06] tracking-tight md:text-6xl">
              A Carrier Built on
              <span className="block text-orange-500">Integrity.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              ONENESS TRANSPORT LLC is a Texas-based dry van carrier committed
              to dependable service, professional communication, and the safe
              transportation of every shipment entrusted to us.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-bold transition hover:bg-orange-600"
              >
                Work With Us
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-bold transition hover:border-white hover:bg-white hover:text-slate-950"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-orange-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl backdrop-blur md:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-orange-500/20" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500">
                  <ShieldCheck className="h-8 w-8" />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                  The Oneness Standard
                </p>

                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Dependable by design.
                </h2>

                <p className="mt-5 leading-7 text-slate-300">
                  We approach every shipment as a long-term partnership—not
                  simply another load.
                </p>

                <div className="mt-8 space-y-4">
                  {commitments.map((commitment) => (
                    <div key={commitment} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-400" />
                      <span className="font-semibold text-slate-100">
                        {commitment}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-9 border-t border-white/10 pt-6 text-sm text-slate-400">
                  USDOT 4853711 <span className="mx-2 text-orange-400">•</span>
                  MC 91452779
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
          {companyFacts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-center gap-4 border-b border-white/10 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <fact.icon className="h-7 w-7 shrink-0 text-orange-400" />
              <div>
                <p className="text-lg font-black">{fact.value}</p>
                <p className="mt-1 text-sm text-slate-400">{fact.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
