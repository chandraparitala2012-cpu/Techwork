import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const caseStudies = [
  {
    category: "E-commerce & Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    title: "Unified Customer Analytics Platform",
    client: "Global Retail Brand",
    description:
      "Built a real-time customer data platform consolidating 15 data sources across web, mobile, CRM, and POS. Enabled personalization at scale and dramatically improved marketing ROI.",
    metrics: [
      { label: "Increase in conversion rate", value: "+40%" },
      { label: "Reduction in data latency",   value: "90%" },
      { label: "Marketing ROI improvement",   value: "3.2×" },
    ],
    tags: ["Data Engineering", "Real-time Analytics", "ML"],
  },
  {
    category: "Financial Services",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    title: "Real-Time Risk & Compliance Dashboard",
    client: "Regional Investment Bank",
    description:
      "Replaced legacy batch reporting with a streaming data pipeline and live compliance dashboard. Regulators and executives now have real-time visibility into risk exposure across all portfolios.",
    metrics: [
      { label: "Reduction in reporting time",         value: "80%" },
      { label: "Compliance incidents caught early",   value: "100%" },
      { label: "Analyst hours saved per week",        value: "120 hrs" },
    ],
    tags: ["BI Dashboards", "Streaming", "Compliance"],
  },
  {
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    title: "Predictive Maintenance ML System",
    client: "Tier-1 Auto Manufacturer",
    description:
      "Deployed an ML-powered predictive maintenance system across 200+ machines in 3 factories. The model detects equipment failure 72 hours in advance, enabling proactive intervention.",
    metrics: [
      { label: "Reduction in unplanned downtime", value: "68%" },
      { label: "Annual cost savings",             value: "$2.4M" },
      { label: "Prediction accuracy",             value: "94%" },
    ],
    tags: ["ML/AI", "IoT Data", "Predictive Analytics"],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-10 border-b border-brand-border">
            <div>
              <span className="font-mono text-xs text-brand-teal uppercase tracking-widest">
                Case Studies
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-fg mt-3 leading-tight">
                Real projects,
                <br />
                real impact
              </h2>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs sm:text-right sm:pb-1">
              How we&apos;ve helped companies across industries unlock the power of their data.
            </p>
          </div>
        </AnimatedSection>

        {/* Stacked rows */}
        <div className="space-y-4">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={study.title} delay={i * 0.08}>
              <div className="group rounded-xl border border-brand-border bg-brand-alt hover:border-brand-teal/30 hover:bg-white hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-300 overflow-hidden cursor-default">
                {/* Banner image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.category}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-alt/90" />
                </div>
                <div className="p-7 lg:p-10">
                <div className="grid lg:grid-cols-5 gap-8">

                  {/* Narrative */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest border border-brand-teal/30 px-2.5 py-1 rounded-md bg-brand-teal/5">
                        {study.category}
                      </span>
                      <span className="text-xs text-brand-muted">{study.client}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-brand-fg mb-3 leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed mb-5">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] px-2 py-0.5 rounded border border-brand-border text-brand-muted bg-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="lg:col-span-2 lg:border-l lg:border-brand-border lg:pl-10 grid grid-cols-3 lg:grid-cols-1 gap-5">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="font-display text-3xl lg:text-4xl font-bold text-brand-fg tabular-nums">
                          {metric.value}
                        </div>
                        <div className="text-xs text-brand-muted mt-1 leading-snug">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
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
