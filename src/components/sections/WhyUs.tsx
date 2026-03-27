import { Users, Award, Layers, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const values = [
  {
    icon: Award,
    title: "Deep Domain Expertise",
    description:
      "Senior data engineers, ML scientists, and analytics consultants with 10+ years across complex enterprise environments.",
  },
  {
    icon: Layers,
    title: "End-to-End Ownership",
    description:
      "From strategy to implementation to support — we own the full data journey so you never stitch vendors together.",
  },
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description:
      "Production-ready solutions in weeks, not quarters. Rapid delivery using proven frameworks and accelerators.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description:
      "Every engagement scoped around clear business outcomes. We track the metrics that matter and show value at every stage.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 aligned practices, encryption at rest and in transit, RBAC, and full data governance in every solution.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We embed into your team. Knowledge transfer, documentation, and support ensure you're empowered long after we leave.",
  },
];

export function WhyUs() {
  return (
    <section className="section-padding bg-brand-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left: claim + stats */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <span className="font-mono text-xs text-brand-teal uppercase tracking-widest">
              Why DataTechZ
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-fg mt-3 mb-6 leading-tight">
              Not a vendor.
              <br />
              A data partner.
            </h2>
            <p className="text-brand-muted leading-relaxed text-base mb-8">
              We embed into your team, own the outcomes, and leave your organization
              more capable than we found it.
            </p>

            {/* Track record card */}
            <div className="p-6 rounded-xl bg-white border border-brand-border shadow-sm">
              <p className="font-mono text-[10px] text-brand-teal uppercase tracking-widest mb-5">
                Track Record
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "150+", label: "Projects Delivered" },
                  { value: "80+",  label: "Enterprise Clients" },
                  { value: "15+",  label: "Industries" },
                  { value: "98%",  label: "Satisfaction Rate" },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-3xl font-bold text-brand-fg tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-xs text-brand-muted mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: value cards */}
          <div className="lg:col-span-3 space-y-3">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={i * 0.07}>
                  <div className="flex gap-4 p-5 bg-white rounded-xl border border-brand-border hover:border-brand-teal/30 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-brand-alt flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-brand-fg text-sm mb-1">
                        {value.title}
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed">
                        {value.description}
                      </p>
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
