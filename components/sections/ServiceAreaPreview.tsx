import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Route,
  Truck,
} from "lucide-react";

const servicePoints = [
  "Texas regional freight",
  "Interstate dry van transportation",
  "Regional and long-haul availability",
  "Flexible scheduling",
  "Responsive broker communication",
];

const cities = [
  { name: "Dallas", position: "left-[58%] top-[18%]" },
  { name: "Austin", position: "left-[42%] top-[53%]" },
  { name: "Houston", position: "left-[70%] top-[58%]" },
  { name: "San Antonio", position: "left-[35%] top-[72%]" },
];

export default function ServiceAreaPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Service Area
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
              Texas-Based.
              <span className="block text-orange-500">
                Nationwide Reach.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              ONENESS TRANSPORT operates from the Austin, Texas area and
              provides dependable dry van transportation throughout Texas and
              across interstate lanes.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Whether the shipment is regional or long haul, our focus remains
              the same: professional communication, safe transportation, and
              dependable delivery.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {servicePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <span className="font-medium text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/service-area"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Explore Service Area
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-7 py-4 font-bold text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl md:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-orange-500/20" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                    Primary Operations
                  </p>
                  <h3 className="mt-3 text-3xl font-black">
                    Texas Freight Network
                  </h3>
                </div>

                <div className="rounded-2xl bg-orange-500 p-4">
                  <Route className="h-8 w-8" />
                </div>
              </div>

              <div className="relative mx-auto mt-10 aspect-[4/3] max-w-xl">
                {/* Simplified Texas-style map shape */}
                <svg
                  viewBox="0 0 500 390"
                  className="h-full w-full"
                  role="img"
                  aria-label="Stylized Texas service area map"
                >
                  <path
                    d="M78 52 L287 52 L299 84 L348 96 L366 150 L418 162
                       L389 209 L390 266 L328 292 L280 347 L229 329
                       L184 344 L155 304 L115 287 L99 229 L64 207
                       L75 153 L48 114 Z"
                    fill="#111c31"
                    stroke="#f97316"
                    strokeWidth="5"
                  />

                  <path
                    d="M210 220 C245 185 278 149 310 112"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="4"
                    strokeDasharray="10 10"
                  />

                  <path
                    d="M210 220 C266 231 318 230 360 219"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="4"
                    strokeDasharray="10 10"
                  />

                  <path
                    d="M210 220 C198 255 180 281 164 302"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="4"
                    strokeDasharray="10 10"
                  />

                  <circle cx="210" cy="220" r="10" fill="#f97316" />
                  <circle cx="310" cy="112" r="9" fill="#ffffff" />
                  <circle cx="360" cy="219" r="9" fill="#ffffff" />
                  <circle cx="164" cy="302" r="9" fill="#ffffff" />
                </svg>

                {cities.map((city) => (
                  <div
                    key={city.name}
                    className={`absolute ${city.position} -translate-x-1/2 -translate-y-1/2`}
                  >
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/90 px-3 py-2 text-sm font-bold shadow-lg backdrop-blur">
                      <MapPin className="h-4 w-4 text-orange-400" />
                      {city.name}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Truck className="h-7 w-7 text-orange-400" />
                  <p className="mt-3 font-bold">Dry Van Freight</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Regional and interstate service
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <MapPin className="h-7 w-7 text-orange-400" />
                  <p className="mt-3 font-bold">Austin Area Base</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Serving Texas and beyond
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}