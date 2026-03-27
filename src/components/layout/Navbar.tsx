"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy/80 backdrop-blur-md border-b border-brand-border shadow-sm shadow-black/20"
          : "bg-transparent backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/logo.svg"
              alt="DataTechZ"
              width={175}
              height={42}
              className="h-10 w-auto object-contain group-hover:opacity-85 transition-opacity duration-200"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-brand-muted hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-md shadow-blue-500/20"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-brand-muted hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-brand-border mt-2 bg-brand-dark/95 backdrop-blur-md px-2 rounded-b-2xl">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-brand-muted hover:text-white hover:bg-brand-border/50 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 mx-4 px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
