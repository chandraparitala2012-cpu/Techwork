import {
  Banknote,
  HeartPulse,
  ShoppingCart,
  Factory,
  Cpu,
  Truck,
  Building2,
  Fuel,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const industries = [
  {
    icon: Banknote,
    name: "Financial Services",
    description:
      "Risk modeling, fraud detection, regulatory reporting, and real-time trading analytics.",
    tags: ["Fraud Detection", "Risk Analytics", "RegTech"],
    color: "text-blue-600",
    bg: "bg-blue-50",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description:
      "Patient outcome prediction, clinical data pipelines, HIPAA-compliant analytics platforms.",
    tags: ["Clinical Analytics", "HIPAA Compliant", "Patient Outcomes"],
    color: "text-rose-600",
    bg: "bg-rose-50",
    tagColor: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description:
      "Customer segmentation, demand forecasting, personalization engines, and inventory optimization.",
    tags: ["Personalization", "Forecasting", "Segmentation"],
    color: "text-orange-600",
    bg: "bg-orange-50",
    tagColor: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Predictive maintenance, supply chain optimization, quality control AI, and OEE dashboards.",
    tags: ["Predictive Maintenance", "Supply Chain", "OEE"],
    color: "text-slate-600",
    bg: "bg-slate-50",
    tagColor: "bg-slate-50 text-slate-700 border-slate-200",
  },
  {
    icon: Cpu,
    name: "Technology",
    description:
      "Product analytics, user behavior analysis, infrastructure monitoring, and growth metrics.",
    tags: ["Product Analytics", "User Behavior", "Growth"],
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    icon: Truck,
    name: "Logistics",
    description:
      "Route optimization, fleet analytics, last-mile delivery intelligence, and demand sensing.",
    tags: ["Route Optimization", "Fleet Analytics", "Last-Mile"],
    color: "text-amber-600",
    bg: "bg-amber-50",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: Building2,
    name: "Real Estate",
    description:
      "Property valuation models, market trend analysis, portfolio performance dashboards.",
    tags: ["Valuation Models", "Market Trends", "Portfolio"],
    color: "text-teal-600",
    bg: "bg-teal-50",
    tagColor: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    icon: Fuel,
    name: "Energy & Utilities",
    description:
      "Grid optimization, consumption forecasting, renewable energy analytics, and ESG reporting.",
    tags: ["Grid Optimization", "ESG Reporting", "Forecasting"],
    color: "text-green-600",
    bg: "bg-green-50",
    tagColor: "bg-green-50 text-green-700 border-green-200",
  },
];

export function Industries() {
  return (
    <section id="industries" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-widest mb-4">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Built for Your{" "}
            <span className="gradient-text">Industry</span>
          </h2>
          <p className="mt-4 text-brand-muted text-lg max-w-2xl mx-auto">
            Deep industry knowledge combined with technical excellence. We speak
            your language and understand your data challenges.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <AnimatedSection key={industry.name} delay={i * 0.06}>
                <div className="glass-card-dark glass-card-dark-hover rounded-2xl p-6 h-full flex flex-col border-brand-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-brand-navy border border-brand-border flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${industry.color}`} />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-brand-muted text-xs leading-relaxed mb-4 flex-1">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-0.5 rounded-full border border-brand-border font-medium text-brand-muted bg-brand-navy/50`}
                      >
                        {tag}
                      </span>
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
