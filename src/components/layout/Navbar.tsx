"use client";

import { useState, useEffect } from "react";
import { Menu, X, Database } from "lucide-react";

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
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-md border-b border-brand-border/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center glow-blue-sm group-hover:scale-110 transition-transform duration-200">
              <Database className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Data<span className="gradient-text">TechZ</span>
            </span>
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
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold hover:opacity-90 glow-blue-sm transition-all duration-200 hover:scale-105"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile menu toggle */}
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
          <div className="md:hidden pb-4 border-t border-brand-border/50 mt-2">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-brand-muted hover:text-white hover:bg-brand-navy/50 rounded-lg transition-colors duration-200 text-sm font-medium"
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
