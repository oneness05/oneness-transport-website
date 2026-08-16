import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/broker-setup", label: "Broker Setup" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          aria-label="ONENESS TRANSPORT home"
          className="relative flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-white sm:h-14 sm:w-56"
        >
          <Image
            src="/logos/logo-header.png"
            alt="ONENESS TRANSPORT"
            width={707}
            height={353}
            priority
            className="h-20 w-auto max-w-none sm:h-28"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-orange-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+15123633649"
          className="rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-orange-400"
        >
          Call Dispatch
        </a>
      </div>

      <nav className="flex gap-4 overflow-x-auto border-t border-slate-800 px-5 py-3 lg:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-semibold text-slate-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
