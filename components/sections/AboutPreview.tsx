import Link from "next/link";
import { ShieldCheck, Truck, MapPinned, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Honest communication and dependable service on every load.",
  },
  {
    icon: Truck,
    title: "Dry Van Experts",
    description: "Focused on safe, secure, and efficient dry van transportation.",
  },
  {
    icon: MapPinned,
    title: "Texas Based",
    description: "Proudly operating from Texas with regional and long-haul service.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Building long-term partnerships through reliability and trust.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left Side */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            About ONENESS TRANSPORT
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Built on Integrity. Driven by Excellence.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            ONENESS TRANSPORT LLC is a Texas-based dry van carrier committed to
            providing dependable freight solutions with professionalism, safety,
            and clear communication. Every shipment is handled with care, and
            every customer relationship is built on trust.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Learn More
          </Link>
        </div>

        {/* Right Side */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <feature.icon className="mb-4 h-10 w-10 text-orange-500" />

              <h3 className="text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}