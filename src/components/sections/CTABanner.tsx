"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTABanner() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-blue/25 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-purple/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-cyan text-sm font-medium mb-8">
            <Calendar className="w-3.5 h-3.5" />
            Book a free 30-minute strategy call
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Ready to Unlock the{" "}
            <span className="gradient-text">Full Potential</span>
            <br />
            of Your Data?
          </h2>

          <p className="mt-6 text-lg text-brand-muted max-w-xl mx-auto leading-relaxed">
            Join 80+ companies that trust DataTechZ to build their data
            foundations, accelerate insights, and drive measurable growth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-base glow-blue hover:opacity-90 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Start the Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-brand-border text-white font-semibold text-base hover:border-brand-blue hover:bg-brand-blue/10 transition-all duration-200 text-center"
            >
              See Our Work
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-brand-muted">
            <span className="flex items-center gap-2">
              <span className="w-4 h-px bg-brand-blue" />
              No commitment required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-px bg-brand-cyan" />
              NDA available on request
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-px bg-brand-purple" />
              Response within 24 hours
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
