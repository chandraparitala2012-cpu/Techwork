import { Users, Award, Layers, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const values = [
  {
    icon: Award,
    title: "Deep Domain Expertise",
    description:
      "Our team of senior data engineers, ML scientists, and analytics consultants brings 10+ years of hands-on experience across complex enterprise environments.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "border-blue-100",
    hoverBg: "hover:bg-blue-50/50",
  },
  {
    icon: Layers,
    title: "End-to-End Ownership",
    description:
      "From strategy and architecture to implementation and ongoing support — we own the entire data journey so you don't have to stitch together multiple vendors.",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    border: "border-cyan-100",
    hoverBg: "hover:bg-cyan-50/50",
  },
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description:
      "Rapid delivery cycles using proven frameworks and accelerators. We ship production-ready solutions in weeks, not quarters — without cutting corners on quality.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-100",
    hoverBg: "hover:bg-amber-50/50",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description:
      "Every engagement is scoped around clear business outcomes. We track the metrics that matter and can demonstrate tangible value at every stage.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    border: "border-green-100",
    hoverBg: "hover:bg-green-50/50",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 aligned practices, encryption at rest and in transit, role-based access controls, and full data governance frameworks built into every solution.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    border: "border-purple-100",
    hoverBg: "hover:bg-purple-50/50",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We embed into your team, not just deliver a project. Knowledge transfer, documentation, and ongoing support ensure your team is empowered long after we leave.",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    border: "border-pink-100",
    hoverBg: "hover:bg-pink-50/50",
  },
];

export function WhyUs() {
  return (
    <section className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-widest mb-4">
            Why DataTechZ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            The Partner That{" "}
            <span className="gradient-text">Delivers Results</span>
          </h2>
          <p className="mt-4 text-brand-muted text-lg max-w-2xl mx-auto">
            We&apos;re not just a vendor — we&apos;re a strategic data partner committed
            to your long-term success.
          </p>
        </AnimatedSection>

        {/* Trust metrics strip */}
        <AnimatedSection className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "80+", label: "Enterprise Clients" },
              { value: "15+", label: "Industries Served" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((metric) => (
              <div key={metric.label} className="glass-card-dark rounded-xl p-5 text-center border border-brand-border">
                <div className="text-2xl font-extrabold gradient-text mb-1">{metric.value}</div>
                <div className="text-xs text-brand-muted font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className={`rounded-2xl glass-card-dark glass-card-dark-hover p-8 h-full transition-all duration-300`}>
                  <div className="w-10 h-10 rounded-xl bg-brand-navy border border-brand-border flex items-center justify-center mb-5">
                    <Icon className={`w-5 h-5 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
