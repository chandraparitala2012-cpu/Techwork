import {
  Database,
  BarChart3,
  LayoutDashboard,
  Brain,
  Lightbulb,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Build robust, scalable data pipelines and infrastructure that handle billions of records. From ingestion to transformation, we architect systems that grow with your business.",
    gradient: "from-blue-600 to-blue-400",
    iconBg: "bg-blue-50",
    accent: "text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Turn raw data into actionable intelligence with advanced statistical analysis, predictive modeling, and custom reporting frameworks tailored to your KPIs.",
    gradient: "from-cyan-600 to-cyan-400",
    iconBg: "bg-cyan-50",
    accent: "text-cyan-600",
  },
  {
    icon: LayoutDashboard,
    title: "BI Dashboards",
    description:
      "Interactive, real-time dashboards that give your teams instant visibility into performance metrics. Beautiful, intuitive, and built for decision-makers.",
    gradient: "from-indigo-600 to-indigo-400",
    iconBg: "bg-indigo-50",
    accent: "text-indigo-600",
  },
  {
    icon: Brain,
    title: "ML & AI Solutions",
    description:
      "Custom machine learning models, NLP pipelines, and AI-powered automation that solve your specific business challenges — from recommendation engines to anomaly detection.",
    gradient: "from-purple-600 to-purple-400",
    iconBg: "bg-purple-50",
    accent: "text-purple-600",
  },
  {
    icon: Lightbulb,
    title: "Data Consulting",
    description:
      "Strategic data roadmaps, architecture reviews, and technology selection. We help you build the right foundation before investing in execution.",
    gradient: "from-amber-600 to-amber-400",
    iconBg: "bg-amber-50",
    accent: "text-amber-600",
  },
  {
    icon: Cloud,
    title: "Cloud Data Migration",
    description:
      "Seamlessly migrate your data infrastructure to AWS, GCP, or Azure. Zero downtime, data integrity guaranteed, and optimized for cloud-native performance.",
    gradient: "from-teal-600 to-teal-400",
    iconBg: "bg-teal-50",
    accent: "text-teal-600",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Everything You Need to Build a{" "}
            <span className="gradient-text">Data-Driven Business</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            From raw data to actionable insights, we cover the full spectrum of
            modern data capabilities under one roof.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="group glass-card glass-card-hover rounded-2xl p-8 h-full flex flex-col cursor-default">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={`bg-gradient-to-br ${service.gradient} w-full h-full rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className={`mt-6 flex items-center gap-1.5 ${service.accent} text-sm font-semibold`}>
                    Learn more
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
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
