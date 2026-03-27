"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTABanner() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 dark-grid pointer-events-none" />
      {/* Teal glow — centered */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(0,194,212,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="font-mono text-xs text-brand-teal uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 leading-[1.07]">
            Let&apos;s talk about
            <br />
            <span className="text-brand-teal">your data.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Book a free 30-minute strategy call. No commitment, no pushy sales
            tactics — just an honest conversation about your goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 w-full sm:w-auto px-8 py-4 bg-brand-teal text-brand-navy font-bold rounded-lg hover:bg-cyan-300 transition-colors duration-200 justify-center cursor-pointer"
            >
              Start the Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 border border-slate-700 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-white/5 transition-all duration-200 text-center cursor-pointer"
            >
              See Our Work
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-mono uppercase tracking-wider">
            <span>No commitment required</span>
            <span className="text-slate-700">·</span>
            <span>NDA on request</span>
            <span className="text-slate-700">·</span>
            <span>Response within 24 hrs</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
