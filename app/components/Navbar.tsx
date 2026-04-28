"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Counsel", href: "#counsel" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Services", href: "#services" },
  { label: "Pro Bono", href: "#probono" },
  { label: "About", href: "#about" },
  { label: "Legal Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF8F3]/97 backdrop-blur-md border-b border-[#E0D9CC] py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — compact in navbar */}
        <Link href="#top" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Vij Law Offices"
            width={220}
            height={56}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#374151]/70 hover:text-[#7A5C0A] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#0d1b2a] transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0d1b2a] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0d1b2a] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#FAF8F3]/98 backdrop-blur-md border-t border-[#E0D9CC] px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.18em] uppercase text-[#374151]/70 hover:text-[#7A5C0A] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
