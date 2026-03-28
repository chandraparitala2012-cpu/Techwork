"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services",     href: "#services" },
  { label: "Industries",   href: "#industries" },
  { label: "Process",      href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact",      href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy-card border-b border-brand-navy-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/I_have_this_202603271820-Photoroom.png"
              alt="DataTechZ"
              width={300}
              height={300}
              className="h-[120px] w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-slate-400 hover:text-white font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2.5 bg-brand-teal text-brand-navy text-sm font-bold rounded-lg hover:bg-cyan-300 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-5 border-t border-brand-navy-border bg-brand-navy">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-brand-navy-card rounded-lg transition-colors duration-200 text-sm font-medium cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-3">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full px-5 py-2.5 bg-brand-teal text-brand-navy text-sm font-bold rounded-lg hover:bg-cyan-300 transition-colors cursor-pointer"
                >
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
