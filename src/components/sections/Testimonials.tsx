import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "DataTechZ transformed our entire data infrastructure in under 3 months. What would have taken our internal team a year, they delivered with better quality and full documentation. Our data team can now move 10x faster.",
    author: "James Whitfield",
    role: "CTO",
    company: "FinanceX Group",
    avatar: "JW",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    quote:
      "We brought DataTechZ in to build our analytics platform from scratch. They didn't just write code — they challenged our thinking, caught design flaws early, and delivered a system that's been rock-solid for two years.",
    author: "Priya Sharma",
    role: "VP of Data & Analytics",
    company: "RetailFlow Inc.",
    avatar: "PS",
    gradient: "from-purple-600 to-blue-500",
  },
  {
    quote:
      "The predictive maintenance model they built saves us millions each year. What impressed me most was how they took the time to understand our manufacturing processes before writing a single line of code.",
    author: "Michael Chen",
    role: "Head of Operations",
    company: "Apex Manufacturing",
    avatar: "MC",
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    quote:
      "As a startup, we needed a data foundation that could scale fast without burning our runway. DataTechZ delivered a modern data stack in weeks that we're still running on at 50x our original volume.",
    author: "Sarah Okonkwo",
    role: "CEO & Co-founder",
    company: "HealthBridge AI",
    avatar: "SO",
    gradient: "from-rose-600 to-pink-500",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-brand-navy relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Trusted by Teams That{" "}
            <span className="gradient-text">Run on Data</span>
          </h2>
          <p className="mt-4 text-brand-muted text-lg max-w-2xl mx-auto">
            Don't take our word for it — hear from the engineers, analysts, and
            executives who work with us.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.author} delay={i * 0.1}>
              <div className="glass-card glass-card-hover rounded-2xl p-8 h-full flex flex-col relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-7 opacity-10">
                  <Quote className="w-10 h-10 text-brand-blue" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/90 text-base leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.author}</p>
                    <p className="text-brand-muted text-xs">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
