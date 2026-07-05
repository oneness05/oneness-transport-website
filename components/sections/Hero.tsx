import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_35%),linear-gradient(135deg,#020617_0%,#020617_55%,#111827_100%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-orange-400">
            Texas Based Dry Van Carrier
          </p>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Driven by Integrity. Delivered with Excellence.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ONENESS TRANSPORT LLC provides dependable dry van freight solutions
            with professional service, clear communication, and a commitment to
            on-time delivery.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/broker-setup"
              className="rounded-full bg-orange-500 px-8 py-4 text-center text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Broker Setup
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {["Dry Van", "Texas Based", "Broker Ready", "Reliable Freight"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
                >
                  <p className="text-sm font-bold text-white">{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}