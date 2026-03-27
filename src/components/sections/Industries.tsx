import Image from "next/image";
import {
  Banknote, HeartPulse, ShoppingCart, Factory,
  Cpu, Truck, Building2, Fuel,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const industries = [
  {
    icon: Banknote,
    name: "Financial Services",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
    description: "Risk modeling, fraud detection, regulatory reporting, and real-time trading analytics.",
    tags: ["Fraud Detection", "Risk Analytics", "RegTech"],
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
    description: "Patient outcome prediction, clinical data pipelines, HIPAA-compliant analytics platforms.",
    tags: ["Clinical Analytics", "HIPAA", "Patient Outcomes"],
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    description: "Customer segmentation, demand forecasting, personalization engines, and inventory optimization.",
    tags: ["Personalization", "Forecasting", "Segmentation"],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    description: "Predictive maintenance, supply chain optimization, quality control AI, and OEE dashboards.",
    tags: ["Predictive Maintenance", "Supply Chain", "OEE"],
  },
  {
    icon: Cpu,
    name: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    description: "Product analytics, user behavior analysis, infrastructure monitoring, and growth metrics.",
    tags: ["Product Analytics", "User Behavior", "Growth"],
  },
  {
    icon: Truck,
    name: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
    description: "Route optimization, fleet analytics, last-mile delivery intelligence, and demand sensing.",
    tags: ["Route Optimization", "Fleet Analytics", "Last-Mile"],
  },
  {
    icon: Building2,
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
    description: "Property valuation models, market trend analysis, and portfolio performance dashboards.",
    tags: ["Valuation Models", "Market Trends", "Portfolio"],
  },
  {
    icon: Fuel,
    name: "Energy & Utilities",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80",
    description: "Grid optimization, consumption forecasting, renewable energy analytics, and ESG reporting.",
    tags: ["Grid Optimization", "ESG Reporting", "Forecasting"],
  },
];

export function Industries() {
  return (
    <section id="industries" className="section-padding bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-teal uppercase tracking-widest">
                Industries
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-fg mt-3 leading-tight">
                Built for your industry
              </h2>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs sm:text-right sm:pb-1">
              Deep domain knowledge combined with technical excellence.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <AnimatedSection key={industry.name} delay={i * 0.05}>
                <div className="group rounded-xl border border-brand-border bg-brand-alt hover:border-brand-teal/40 hover:bg-white hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-250 h-full flex flex-col cursor-default overflow-hidden">

                  {/* Image */}
                  <div className="relative h-28 overflow-hidden flex-shrink-0">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-brand-alt/90 group-hover:to-white/90 transition-colors duration-250" />
                    <div className="absolute bottom-2.5 left-3 w-8 h-8 rounded-lg bg-white border border-brand-border flex items-center justify-center flex-shrink-0 group-hover:border-brand-teal/30 transition-colors duration-200 shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-brand-teal" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-sm font-semibold text-brand-fg mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-brand-muted text-xs leading-relaxed mb-4 flex-1">
                      {industry.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] px-2 py-0.5 rounded border border-brand-border text-brand-muted bg-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
