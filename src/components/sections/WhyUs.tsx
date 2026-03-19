import { Users, Award, Layers, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const values = [
  {
    icon: Award,
    title: "Deep Domain Expertise",
    description:
      "Our team of senior data engineers, ML scientists, and analytics consultants brings 10+ years of hands-on experience across complex enterprise environments.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
  },
  {
    icon: Layers,
    title: "End-to-End Ownership",
    description:
      "From strategy and architecture to implementation and ongoing support — we own the entire data journey so you don't have to stitch together multiple vendors.",
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10",
    border: "border-brand-cyan/20",
  },
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description:
      "Rapid delivery cycles using proven frameworks and accelerators. We ship production-ready solutions in weeks, not quarters — without cutting corners on quality.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description:
      "Every engagement is scoped around clear business outcomes. We track the metrics that matter and can demonstrate tangible value at every stage.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 aligned practices, encryption at rest and in transit, role-based access controls, and full data governance frameworks built into every solution.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We embed into your team, not just deliver a project. Knowledge transfer, documentation, and ongoing support ensure your team is empowered long after we leave.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
  },
];

export function WhyUs() {
  return (
    <section className="section-padding bg-brand-navy relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-4">
            Why DataTechZ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            The Partner That{" "}
            <span className="gradient-text">Delivers Results</span>
          </h2>
          <p className="mt-4 text-brand-muted text-lg max-w-2xl mx-auto">
            We're not just a vendor — we're a strategic data partner committed
            to your long-term success.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className={`rounded-2xl border ${value.border} ${value.bg} p-8 h-full hover:scale-[1.02] transition-transform duration-300`}>
                  <div className={`w-10 h-10 rounded-lg ${value.bg} border ${value.border} flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${value.color}`} />
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
