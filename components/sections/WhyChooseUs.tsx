const features = [
  {
    title: "On-Time Delivery",
    description:
      "Reliable scheduling and consistent communication from pickup to delivery.",
  },
  {
    title: "Dry Van Specialists",
    description:
      "Focused on safe, secure dry van freight transportation across Texas and beyond.",
  },
  {
    title: "Broker Ready",
    description:
      "Professional documentation, quick onboarding, and responsive support.",
  },
  {
    title: "Integrity First",
    description:
      "Every shipment is handled with honesty, professionalism, and accountability.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Trusted Transportation Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We combine dependable service, clear communication, and a commitment
            to excellence to deliver freight safely and on time.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}