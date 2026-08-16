import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">ONENESS TRANSPORT LLC</p>
          <p className="mt-3 max-w-sm leading-7 text-slate-400">
            Driven by Integrity. Delivered with Excellence.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Carrier Information</p>
          <div className="mt-3 space-y-2 text-sm">
            <p>MC 91452779</p>
            <p>USDOT 4853711</p>
            <p>53-Foot Dry Van</p>
            <p>Austin, Texas</p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Dispatch</p>
          <div className="mt-3 space-y-2 text-sm">
            <a className="block hover:text-orange-400" href="tel:+15123633649">
              512-363-3649
            </a>
            <a
              className="block hover:text-orange-400"
              href="mailto:dispatch@onenesstransport.com"
            >
              dispatch@onenesstransport.com
            </a>
            <Link className="block hover:text-orange-400" href="/broker-setup">
              Broker Setup & Documents
            </Link>
            <Link className="block hover:text-orange-400" href="/blog">
              Freight Resources & Blog
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-5 py-5 text-center text-sm text-slate-500">
        Copyright {new Date().getFullYear()} ONENESS TRANSPORT LLC. All rights reserved.
      </div>
    </footer>
  );
}
