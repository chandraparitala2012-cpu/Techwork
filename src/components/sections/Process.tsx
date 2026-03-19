import { Search, PenTool, Code2, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Understand Your Data Landscape",
    description:
      "We start with a deep-dive into your existing data infrastructure, business goals, and pain points. We audit your data sources, quality, and gaps to establish a clear baseline.",
    deliverables: ["Data Audit Report", "Gap Analysis", "Opportunity Map"],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    subtitle: "Architecture & Strategy",
    description:
      "Based on the discovery findings, we design a scalable data architecture and strategic roadmap. Technology selection, timeline, and success metrics are defined collaboratively.",
    deliverables: ["Architecture Blueprint", "Tech Stack Recommendation", "Project Roadmap"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    subtitle: "Implementation & Integration",
    description:
      "Agile delivery in focused sprints. We build, test, and iterate rapidly — keeping you involved at every milestone. Full CI/CD, documentation, and knowledge transfer included.",
    deliverables: ["Working System", "Tests & Docs", "CI/CD Pipeline"],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale",
    subtitle: "Optimize & Grow",
    description:
      "Post-launch monitoring, performance optimization, and continuous improvement. As your business grows, your data platform evolves with it — with our team supporting you.",
    deliverables: ["Performance Reports", "Optimization Recommendations", "Growth Plan"],
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-brand-navy relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-4">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            A Proven Process for{" "}
            <span className="gradient-text">Reliable Results</span>
          </h2>
          <p className="mt-4 text-brand-muted text-lg max-w-2xl mx-auto">
            No surprises. No scope creep. Our structured approach ensures every
            engagement delivers on its promises.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent mx-24" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.number} delay={i * 0.1}>
                  <div className="relative flex flex-col h-full">
                    {/* Step number + icon */}
                    <div className="flex flex-col items-center lg:items-start mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center glow-blue-sm mb-3 z-10 relative">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="absolute -top-2 -right-3 text-4xl font-black text-brand-border select-none">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center lg:text-left flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-brand-cyan text-sm font-medium mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-brand-muted text-sm leading-relaxed mb-5 flex-1">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-1.5">
                        <p className="text-xs text-white font-semibold uppercase tracking-wider mb-2">
                          Deliverables
                        </p>
                        {step.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0" />
                            <span className="text-xs text-brand-muted">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
