import Link from "next/link";
import { ArrowRight, Quote, Route } from "lucide-react";

export default function CompanyStory() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Our Story
          </p>

          <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight text-slate-950 md:text-5xl">
            Built for dependable
            <span className="block text-orange-500">partnerships.</span>
          </h2>

          <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-slate-600">
            <p>
              ONENESS TRANSPORT was built around a straightforward belief:
              dependable transportation begins with integrity. Freight partners
              deserve a carrier that communicates clearly, plans carefully, and
              follows through on every commitment.
            </p>

            <p>
              As a focused dry van carrier, we keep communication direct and
              service personal. From pickup through delivery, our goal is to
              provide the professionalism, visibility, and accountability that
              create lasting business relationships.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 font-bold text-slate-950 transition hover:text-orange-600"
          >
            Start a Conversation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl md:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-orange-500/20" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500">
                <Quote className="h-7 w-7" />
              </div>

              <Route className="h-10 w-10 text-orange-400" />
            </div>

            <blockquote className="mt-10 text-3xl font-black leading-tight md:text-4xl">
              “Every load represents a promise—and every promise deserves our
              best.”
            </blockquote>

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                One Standard. Every Shipment.
              </p>
              <p className="mt-3 leading-7 text-slate-300">
                Driven by integrity, supported by clear communication, and
                delivered with excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
