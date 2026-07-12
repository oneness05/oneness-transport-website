import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Area", href: "/service-area" },
  { label: "Broker Setup", href: "/broker-setup" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="text-xl font-black tracking-tight">
              <span className="text-orange-500">ONENESS</span>{" "}
              <span>TRANSPORT</span>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Texas based dry van carrier driven by integrity and committed to
              dependable freight service.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <div className="mt-5 grid gap-3 text-slate-400">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-orange-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>
            <div className="mt-5 space-y-3 text-slate-400">
              <p>ONENESS TRANSPORT LLC</p>
              <p>Austin, Texas</p>
              <p>USDOT 4853711 · MC 91452779</p>
              <a
                href="tel:+15863828025"
                className="block transition hover:text-orange-400"
              >
                586-382-8025
              </a>
              <a
                href="mailto:dispatch@onenesstransport.com"
                className="block transition hover:text-orange-400"
              >
                dispatch@onenesstransport.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} ONENESS TRANSPORT LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
