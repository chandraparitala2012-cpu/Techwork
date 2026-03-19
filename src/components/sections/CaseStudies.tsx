import { ArrowUpRight, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const caseStudies = [
  {
    category: "E-commerce & Retail",
    categoryColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
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
    accent: "border-t-cyan-400",
    metricColor: "text-cyan-600",
  },
  {
    category: "Financial Services",
    categoryColor: "bg-blue-50 text-blue-700 border-blue-200",
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
    accent: "border-t-blue-400",
    metricColor: "text-blue-600",
  },
  {
    category: "Manufacturing",
    categoryColor: "bg-purple-50 text-purple-700 border-purple-200",
    title: "Predictive Maintenance ML System",
    client: "Tier-1 Auto Manufacturer",
    description:
      "Deployed an ML-powered predictive maintenance system across 200+ machines in 3 factories. The model detects equipment failure 72 hours in advance, enabling proactive intervention.",
    metrics: [
      { label: "Reduction in unplanned downtime", value: "68%" },
      { label: "Annual cost savings", value: "$2.4M" },
      { label: "Prediction accuracy", value: "94%" },
    ],
    tags: ["ML/AI", "IoT Data", "Predictive Analytics"],
    accent: "border-t-purple-400",
    metricColor: "text-purple-600",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-widest mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Real Projects,{" "}
            <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            See how we&apos;ve helped companies across industries unlock the power of
            their data.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={study.title} delay={i * 0.1}>
              <div className={`glass-card glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col group cursor-pointer border-t-4 ${study.accent}`}>
                {/* Header */}
                <div className="p-7 pb-5">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${study.categoryColor}`}>
                      {study.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200">
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-colors duration-200" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 font-medium mb-2">{study.client}</p>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug mb-4">
                    {study.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="border-t border-slate-100 p-7 pt-5 mt-auto bg-slate-50/60">
                  <div className="flex items-center gap-1.5 mb-4">
                    <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">
                      Results
                    </span>
                  </div>
                  <div className="space-y-3">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between gap-4">
                        <span className="text-xs text-slate-500">{metric.label}</span>
                        <span className={`text-sm font-bold flex-shrink-0 ${study.metricColor}`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-500">
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
