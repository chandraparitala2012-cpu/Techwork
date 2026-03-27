import Image from "next/image";
import { Database, BarChart3, LayoutDashboard, Brain, MessageSquare, Cloud } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    description:
      "Scalable, reliable pipelines and infrastructure that power your analytics and AI at any volume.",
    tags: ["ETL / ELT", "Data Lakes", "Warehousing"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    description:
      "Advanced analytics that go beyond reporting — surfacing the signals that drive real business outcomes.",
    tags: ["SQL", "Python", "dbt"],
  },
  {
    icon: LayoutDashboard,
    title: "BI Dashboards",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    description:
      "Executive dashboards and self-service reporting that put data-driven decisions in everyone's hands.",
    tags: ["Tableau", "Power BI", "Looker"],
  },
  {
    icon: Brain,
    title: "ML & AI Solutions",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    description:
      "Custom machine learning models built for your specific business problems — not generic demos.",
    tags: ["Predictive ML", "NLP", "MLOps"],
  },
  {
    icon: MessageSquare,
    title: "Data Consulting",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    description:
      "Strategic roadmaps and architecture reviews that align your data investment with your goals.",
    tags: ["Strategy", "Architecture", "Audit"],
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    description:
      "Move your data infrastructure to the cloud with zero data loss and minimal operational downtime.",
    tags: ["AWS", "GCP", "Azure"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <span className="font-mono text-xs text-brand-teal uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-fg mt-3 leading-tight">
            End-to-end data services
          </h2>
          <p className="mt-4 text-brand-muted text-lg max-w-2xl leading-relaxed">
            From raw data to real decisions — we cover every layer of the modern data stack.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={i * 0.07}>
                <div className="group rounded-xl border border-brand-border bg-white hover:border-brand-teal/40 hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-300 h-full flex flex-col overflow-hidden">

                  {/* Image */}
                  <div className="relative h-36 overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-white/80" />
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-brand-border shadow-sm group-hover:bg-brand-teal/10 group-hover:border-brand-teal/30 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-brand-teal" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-semibold text-brand-fg mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-brand-border">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-md border border-brand-border text-brand-muted bg-brand-alt"
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
