import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Dry van full truckload and regional freight transportation services from ONENESS TRANSPORT LLC.",
};

const services = [
  {
    title: "Dry Van Full Truckload",
    text: "Dedicated 53-foot dry van capacity for general freight requiring secure, enclosed transportation.",
  },
  {
    title: "Regional Freight",
    text: "Flexible service throughout Texas and surrounding markets with a focus on reliable transit and communication.",
  },
  {
    title: "Broker Freight Support",
    text: "Professional carrier support with timely updates, document availability, and responsive dispatch communication.",
  },
  {
    title: "Dedicated Transportation",
    text: "Consistent capacity solutions for recurring lanes and ongoing shipper or broker relationships.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black">
            Professional dry van transportation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Reliable capacity, clear communication, and careful freight handling
            for brokers and shippers.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="text-3xl">ðŸšš</div>
              <h2 className="mt-5 text-2xl font-black text-slate-950">
                {service.title}
              </h2>
              <p className="mt-4 leading-8 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 p-9 text-white">
          <h2 className="text-3xl font-black">Equipment profile</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <Profile label="Truck" value="2023 Kenworth T680" />
            <Profile label="Trailer" value="53â€² Dry Van" />
            <Profile label="Primary Service" value="Full Truckload" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Profile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 font-bold">{value}</p>
    </div>
  );
}
