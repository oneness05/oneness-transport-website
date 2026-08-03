import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broker Setup",
  description: "Carrier information, insurance limits, equipment details, and onboarding documents for ONENESS TRANSPORT LLC.",
};

const documents = [
  {
    title: "W-9 Form",
    description: "Taxpayer identification form for carrier onboarding.",
    href: "/documents/oneness-transport-w9.pdf",
  },
  {
    title: "Certificate of Insurance",
    description: "Current liability and cargo insurance certificate.",
    href: "/documents/oneness-transport-coi.pdf",
  },
  {
    title: "Operating Authority",
    description: "Federal motor carrier operating authority documentation.",
    href: "/documents/oneness-transport-authority.pdf",
  },
];

export default function BrokerSetupPage() {
  return (
    <main>
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Carrier Onboarding
          </p>
          <h1 className="mt-4 text-5xl font-black">Broker Setup</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Review the carrier information and documents needed to onboard
            ONENESS TRANSPORT LLC.
          </p>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Info label="Legal Name" value="ONENESS TRANSPORT LLC" />
            <Info label="MC Number" value="MC 91452779" />
            <Info label="USDOT Number" value="USDOT 4853711" />
            <Info label="Equipment" value="53-Foot Dry Van" />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-3xl bg-slate-950 p-8 text-white">
              <h2 className="text-3xl font-black">Operating profile</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Profile label="Primary Service" value="Full Truckload" />
                <Profile label="Home Base" value="Austin, Texas" />
                <Profile label="Auto Liability" value="$1,000,000" />
                <Profile label="Cargo Coverage" value="$100,000" />
                <Profile label="Power Unit" value="2023 Kenworth T680" />
                <Profile label="Trailer Type" value="53-Foot Dry Van" />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Dispatch Contact
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Need onboarding assistance?
              </h2>
              <div className="mt-6 space-y-4">
                <a
                  href="tel:+15863828025"
                  className="block rounded-xl bg-slate-950 px-5 py-3.5 text-center font-bold text-white"
                >
                  Call 586-382-8025
                </a>
                <a
                  href="mailto:dispatch@onenesstransport.com"
                  className="block rounded-xl bg-orange-500 px-5 py-3.5 text-center font-bold text-slate-950"
                >
                  Email Dispatch
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Carrier Documents
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Download onboarding documents
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {documents.map((document) => (
                <article
                  key={document.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-sm font-black text-orange-700">
  PDF
</div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {document.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {document.description}
                  </p>
                  <a
                    href={document.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 rounded-lg bg-slate-950 px-5 py-3 text-center font-bold text-white hover:bg-orange-600"
                  >
                    View Document
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-bold text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-black text-slate-950">{value}</p>
    </div>
  );
}

function Profile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 font-bold text-white">{value}</p>
    </div>
  );
}
