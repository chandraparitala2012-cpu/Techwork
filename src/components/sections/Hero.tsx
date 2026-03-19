"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Enterprise Clients" },
  { value: "15+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-dark">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-blue/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-brand-cyan/15 blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-brand-purple/20 blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-navy/60 backdrop-blur-sm text-brand-cyan text-sm font-medium mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Trusted by 80+ enterprises worldwide
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl mx-auto"
        >
          Transform Your Data Into{" "}
          <span className="gradient-text">Competitive Advantage</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed"
        >
          DataTechZ helps enterprises and startups unlock the full potential of
          their data through end-to-end engineering, advanced analytics, and
          cutting-edge AI solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-base glow-blue hover:opacity-90 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() =>
              document
                .getElementById("case-studies")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-brand-border text-white font-semibold text-base hover:border-brand-blue hover:bg-brand-blue/10 transition-all duration-200"
          >
            View Case Studies
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-extrabold gradient-text">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-brand-muted font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-muted hover:text-white transition-colors duration-200 animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
