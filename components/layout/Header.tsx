"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Area", href: "/service-area" },
  { label: "Broker Setup", href: "/broker-setup" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="flex items-center">
    <Image
    src="/logos/logo-header.png"
    alt="ONENESS TRANSPORT"
    width={420}
    height={90}
    priority
    className="h-16 w-auto lg:h-18"
    />
    </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/90 lg:flex">
          {navLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-orange-400"
            >
                {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600 lg:inline-block"
        >
          Get Quote
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-slate-950 px-6 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-5 text-sm font-semibold text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-orange-400"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="rounded-full bg-orange-500 px-6 py-3 text-center font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
