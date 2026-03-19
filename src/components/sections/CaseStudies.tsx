import { ArrowUpRight, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const caseStudies = [
  {
    category: "E-commerce & Retail",
    categoryColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    title: "Unified Customer Analytics Platform",
    client: "Global Retail Brand",
    description:
      "Designed and built a real-time customer data platform consolidating 15 data sources across web, mobile, CRM, and POS. Enabled personalization at scale and dramatically improved marketing ROI.",
    metrics: [
      { label: "Increase in conversion rate", value: "+40%" },
      { label: "Reduction in data latency", value: "90%" },
      { label: "Marketing ROI improvement", value: "3.2x" },
    ],
    tags: ["Data Engineering", "Real-time Analytics", "ML"],
    gradient: "from-cyan-500/10 to-blue-500/10",
    border: "border-cyan-500/20",
  },
  {
    category: "Financial Services",
    categoryColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    title: "Real-Time Risk & Compliance Dashboard",
    client: "Regional Investment Bank",
    description:
      "Replaced legacy batch reporting with a streaming data pipeline and live compliance dashboard. Regulators and executives now have real-time visibility into risk exposure across all portfolios.",
    metrics: [
      { label: "Reduction in reporting time", value: "80%" },
      { label: "Compliance incidents caught early", value: "100%" },
      { label: "Analyst hours saved per week", value: "120hrs" },
    ],
    tags: ["BI Dashboards", "Streaming", "Compliance"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    border: "border-blue-500/20",
  },
  {
    category: "Manufacturing",
    categoryColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    title: "Predictive Maintenance ML System",
    client: "Tier-1 Auto Manufacturer",
    description:
      "Deployed an ML-powered predictive maintenance system across 200+ machines in 3 factories. The model detects equipment failure 72 hours in advance, enabling proactive intervention and preventing costly downtime.",
    metrics: [
      { label: "Reduction in unplanned downtime", value: "68%" },
      { label: "Annual cost savings", value: "$2.4M" },
      { label: "Prediction accuracy", value: "94%" },
    ],
    tags: ["ML/AI", "IoT Data", "Predictive Analytics"],
    gradient: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-brand-dark relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Real Projects,{" "}
            <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="mt-4 text-brand-muted text-lg max-w-2xl mx-auto">
            See how we've helped companies across industries unlock the power of
            their data.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={study.title} delay={i * 0.1}>
              <div
                className={`relative glass-card rounded-2xl overflow-hidden h-full flex flex-col group cursor-pointer border ${study.border} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 bg-gradient-to-br ${study.gradient}`}
              >
                {/* Header */}
                <div className="p-7 pb-5">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${study.categoryColor}`}
                    >
                      {study.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors duration-200">
                      <ArrowUpRight className="w-4 h-4 text-brand-muted group-hover:text-white transition-colors duration-200" />
                    </div>
                  </div>

                  <p className="text-xs text-brand-muted font-medium mb-2">
                    {study.client}
                  </p>
                  <h3 className="text-lg font-bold text-white leading-snug mb-4">
                    {study.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="border-t border-brand-border/50 p-7 pt-5 mt-auto">
                  <div className="flex items-center gap-1.5 mb-4">
                    <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">
                      Results
                    </span>
                  </div>
                  <div className="space-y-3">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between gap-4">
                        <span className="text-xs text-brand-muted">{metric.label}</span>
                        <span className="text-sm font-bold text-white flex-shrink-0">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-brand-muted border border-brand-border/50"
                      >
                        {tag}
                      </span>
                    ))}
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
