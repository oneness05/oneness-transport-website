import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freight Resources & Dry Van Trucking Blog",
  description:
    "Practical dry van transportation resources for freight brokers and shippers from ONENESS TRANSPORT LLC in Austin, Texas.",
  alternates: {
    canonical: "https://www.onenesstransport.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main>
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Freight Resources
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight">
            Dry van transportation insights
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Practical information for brokers and shippers who value safe freight
            handling, dependable capacity, and professional communication.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
            <Link
              href="/blog/how-to-choose-dry-van-carrier-texas"
              className="relative block min-h-80 overflow-hidden"
              aria-label="Read How to Choose a Reliable Dry Van Carrier in Texas"
            >
              <Image
                src="/images/texas-dry-van-carrier.webp"
                alt="Modern navy semi-truck pulling a 53-foot dry van near Austin, Texas"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition duration-500 hover:scale-[1.02]"
              />
            </Link>

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
                  Carrier Selection
                </span>
                <time dateTime="2026-08-16">August 16, 2026</time>
                <span aria-hidden="true">&middot;</span>
                <span>7 min read</span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">
                <Link
                  href="/blog/how-to-choose-dry-van-carrier-texas"
                  className="transition hover:text-orange-600"
                >
                  How to Choose a Reliable Dry Van Carrier in Texas
                </Link>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Seven important checks for evaluating a carrier&apos;s authority,
                insurance, equipment, safety practices, schedule, and communication
                before tendering a load.
              </p>
              <Link
                href="/blog/how-to-choose-dry-van-carrier-texas"
                className="mt-7 inline-flex items-center font-bold text-orange-600 hover:text-orange-700"
              >
                Read the full article <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
