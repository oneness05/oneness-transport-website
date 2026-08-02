import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ONENESS TRANSPORT LLC dispatch for load opportunities, onboarding, and transportation support.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Contact
          </p>
          <h1 className="mt-4 text-5xl font-black">Contact dispatch</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Reach out for load opportunities, broker onboarding, insurance
            requests, or additional carrier documentation.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-slate-950">
              Dispatch information
            </h2>
            <div className="mt-8 space-y-6">
              <ContactItem
                label="Phone"
                value="586-382-8025"
                href="tel:+15863828025"
              />
              <ContactItem
                label="Email"
                value="dispatch@onenesstransport.com"
                href="mailto:dispatch@onenesstransport.com"
              />
              <ContactItem label="Location" value="Austin, Texas" />
              <ContactItem label="Equipment" value="53â€² Dry Van" />
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
              Load Opportunities
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Send your load details directly to dispatch
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Include the pickup location, delivery location, commodity,
              weight, appointment times, and offered rate.
            </p>
            <a
              href="mailto:dispatch@onenesstransport.com?subject=Load Opportunity for ONENESS TRANSPORT"
              className="mt-8 inline-flex rounded-lg bg-orange-500 px-6 py-3.5 font-bold text-slate-950"
            >
              Email Load Details
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="mt-2 block text-lg font-bold text-slate-950 hover:text-orange-600"
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 text-lg font-bold text-slate-950">{value}</p>
      )}
    </div>
  );
}
