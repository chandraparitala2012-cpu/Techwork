import { Search, PenTool, Code2, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Understand Your Landscape",
    description:
      "Deep-dive into your data infrastructure, business goals, and pain points. We audit your sources, quality, and gaps to establish a clear baseline.",
    deliverables: ["Data Audit Report", "Gap Analysis", "Opportunity Map"],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    subtitle: "Architecture & Strategy",
    description:
      "We design a scalable data architecture and strategic roadmap. Technology selection, timeline, and success metrics defined collaboratively.",
    deliverables: ["Architecture Blueprint", "Tech Stack Recommendation", "Project Roadmap"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    subtitle: "Implementation & Integration",
    description:
      "Agile delivery in focused sprints. We build, test, and iterate rapidly — keeping you involved at every milestone with full CI/CD and documentation.",
    deliverables: ["Working System", "Tests & Docs", "CI/CD Pipeline"],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale",
    subtitle: "Optimize & Grow",
    description:
      "Post-launch monitoring, performance optimization, and continuous improvement. Your data platform evolves as your business grows.",
    deliverables: ["Performance Reports", "Optimization Plan", "Growth Roadmap"],
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-brand-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-brand-teal uppercase tracking-widest">
                How We Work
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-fg mt-3 leading-tight">
                A proven process
                <br />
                for reliable results
              </h2>
            </div>
            <p className="text-brand-muted text-base leading-relaxed max-w-sm lg:pb-1">
              No surprises. No scope creep. Our structured approach ensures every
              engagement delivers on its promises.
            </p>
          </div>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.number} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-brand-border p-7 h-full flex flex-col hover:border-brand-teal/30 hover:shadow-lg transition-all duration-200">

                  {/* Step header */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-5xl font-bold text-brand-border leading-none select-none">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-alt flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-brand-teal" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-brand-fg mb-1">
                    {step.title}
                  </h3>
                  <p className="font-mono text-[10px] text-brand-teal uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-1">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-5 border-t border-brand-border space-y-2">
                    {step.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                        <span className="text-xs text-brand-muted">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
