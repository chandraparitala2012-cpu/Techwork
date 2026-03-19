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
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description:
      "Patient outcome prediction, clinical data pipelines, HIPAA-compliant analytics platforms.",
    tags: ["Clinical Analytics", "HIPAA Compliant", "Patient Outcomes"],
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description:
      "Customer segmentation, demand forecasting, personalization engines, and inventory optimization.",
    tags: ["Personalization", "Forecasting", "Segmentation"],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Predictive maintenance, supply chain optimization, quality control AI, and OEE dashboards.",
    tags: ["Predictive Maintenance", "Supply Chain", "OEE"],
  },
  {
    icon: Cpu,
    name: "Technology",
    description:
      "Product analytics, user behavior analysis, infrastructure monitoring, and growth metrics.",
    tags: ["Product Analytics", "User Behavior", "Growth"],
  },
  {
    icon: Truck,
    name: "Logistics",
    description:
      "Route optimization, fleet analytics, last-mile delivery intelligence, and demand sensing.",
    tags: ["Route Optimization", "Fleet Analytics", "Last-Mile"],
  },
  {
    icon: Building2,
    name: "Real Estate",
    description:
      "Property valuation models, market trend analysis, portfolio performance dashboards.",
    tags: ["Valuation Models", "Market Trends", "Portfolio"],
  },
  {
    icon: Fuel,
    name: "Energy & Utilities",
    description:
      "Grid optimization, consumption forecasting, renewable energy analytics, and ESG reporting.",
    tags: ["Grid Optimization", "ESG Reporting", "Forecasting"],
  },
];

export function Industries() {
  return (
    <section id="industries" className="section-padding bg-brand-dark relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-4">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
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
                <div className="glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-cyan" />
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
                        className="text-xs px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-cyan border border-brand-blue/20 font-medium"
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
