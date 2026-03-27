import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "DataTechZ transformed our entire data infrastructure in under 3 months. What would have taken our internal team a year, they delivered with better quality and full documentation. Our data team can now move 10x faster.",
    author: "James Whitfield",
    role: "CTO",
    company: "FinanceX Group",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
  },
  {
    quote:
      "We brought DataTechZ in to build our analytics platform from scratch. They didn't just write code — they challenged our thinking, caught design flaws early, and delivered a system that's been rock-solid for two years.",
    author: "Priya Sharma",
    role: "VP of Data & Analytics",
    company: "RetailFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
  },
  {
    quote:
      "The predictive maintenance model they built saves us millions each year. What impressed me most was how they took the time to understand our manufacturing processes before writing a single line of code.",
    author: "Michael Chen",
    role: "Head of Operations",
    company: "Apex Manufacturing",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    quote:
      "As a startup, we needed a data foundation that could scale fast without burning our runway. DataTechZ delivered a modern data stack in weeks that we're still running on at 50x our original volume.",
    author: "Sarah Okonkwo",
    role: "CEO & Co-founder",
    company: "HealthBridge AI",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-brand-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <span className="font-mono text-xs text-brand-teal uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-fg mt-3 leading-tight">
            Trusted by teams that
            <br />
            run on data
          </h2>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.author} delay={i * 0.08}>
              <div className="bg-white rounded-xl border border-brand-border p-8 h-full flex flex-col hover:border-brand-teal/30 hover:shadow-lg transition-all duration-200">

                {/* Stars */}
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-brand-fg text-base leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-brand-border">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-brand-border">
                    <Image src={t.avatar} alt={t.author} width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-brand-fg text-sm">{t.author}</p>
                    <p className="text-brand-muted text-xs">{t.role} · {t.company}</p>
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
