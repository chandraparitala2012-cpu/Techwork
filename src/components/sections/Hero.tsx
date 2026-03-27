"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

const PARTICLES = [
  { id: 0,  x: "12%",  y: "18%",  size: 3,   opacity: 0.15, duration: 22, delay: 0   },
  { id: 1,  x: "78%",  y: "12%",  size: 4,   opacity: 0.12, duration: 28, delay: 3   },
  { id: 2,  x: "65%",  y: "68%",  size: 2,   opacity: 0.18, duration: 19, delay: 6   },
  { id: 3,  x: "28%",  y: "78%",  size: 3,   opacity: 0.10, duration: 25, delay: 1.5 },
  { id: 4,  x: "48%",  y: "25%",  size: 2,   opacity: 0.13, duration: 32, delay: 8   },
  { id: 5,  x: "88%",  y: "55%",  size: 4,   opacity: 0.08, duration: 18, delay: 4   },
  { id: 6,  x: "8%",   y: "55%",  size: 2,   opacity: 0.16, duration: 26, delay: 2   },
  { id: 7,  x: "55%",  y: "88%",  size: 3,   opacity: 0.11, duration: 21, delay: 7   },
  { id: 8,  x: "35%",  y: "42%",  size: 1.5, opacity: 0.20, duration: 24, delay: 5   },
  { id: 9,  x: "92%",  y: "28%",  size: 2.5, opacity: 0.09, duration: 30, delay: 9   },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+",  label: "Enterprise Clients" },
  { value: "15+",  label: "Industries Served" },
  { value: "98%",  label: "Client Satisfaction" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-brand-navy overflow-hidden">
      {/* Subtle line grid */}
      <div className="absolute inset-0 dark-grid pointer-events-none" />
      {/* Teal radial glow top-left */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand-teal pointer-events-none"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size, opacity: p.opacity }}
          animate={{ y: [0, -24, 0], opacity: [p.opacity, p.opacity * 2.5, p.opacity] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full border border-brand-teal/25 bg-brand-teal/10"
          >
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse flex-shrink-0" />
            <span className="font-mono text-xs text-brand-teal uppercase tracking-widest">
              Data Engineering · Analytics · AI/ML
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[1.07] tracking-tight text-white"
          >
            We build data systems
            <br />
            that drive{" "}
            <span className="text-brand-teal">real business</span>
            <br />
            outcomes.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-7 text-lg text-slate-400 leading-relaxed max-w-2xl"
          >
            DataTechZ builds the data infrastructure, analytics platforms, and AI systems
            that help enterprises and startups make better decisions — faster and at scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-teal text-brand-navy font-bold text-sm rounded-lg hover:bg-cyan-300 transition-colors duration-200 cursor-pointer"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
            <button
              onClick={() =>
                document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-600 text-slate-300 font-semibold text-sm rounded-lg hover:border-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
            >
              View Our Work
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-8 border-t border-brand-navy-border grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold text-white tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-brand-teal/10">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Data analytics dashboard"
                width={800}
                height={560}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/60 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-brand-navy-card border border-brand-navy-border rounded-xl px-5 py-4 shadow-xl">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-slate-400 mt-0.5">Client Satisfaction</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-brand-teal/10 border border-brand-teal/30 rounded-xl px-5 py-4 shadow-xl">
              <div className="text-2xl font-bold text-brand-teal">150+</div>
              <div className="text-xs text-slate-400 mt-0.5">Projects Delivered</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
