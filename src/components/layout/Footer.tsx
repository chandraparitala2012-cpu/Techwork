import Image from "next/image";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const services = [
  "Data Engineering",
  "Analytics & Insights",
  "BI Dashboards",
  "ML & AI Solutions",
  "Data Consulting",
  "Cloud Migration",
];

const company = [
  { label: "About", href: "#" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const social = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "GitHub", href: "#", icon: Github },
  { label: "Email", href: "mailto:info@datatechz.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-brand-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="DataTechZ"
                width={160}
                height={38}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              Transforming data into competitive advantage for enterprises and
              startups worldwide.
            </p>
            <div className="flex items-center gap-3">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="w-9 h-9 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-blue hover:bg-brand-blue/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-brand-muted text-sm hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-brand-muted text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <p className="text-brand-muted text-sm">
                Ready to transform your data strategy?
              </p>
              <a
                href="mailto:info@datatechz.com"
                className="text-brand-cyan text-sm font-medium hover:text-white transition-colors duration-200 block"
              >
                info@datatechz.com
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-sm">
            © {new Date().getFullYear()} DataTechZ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-brand-muted text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-brand-muted text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
