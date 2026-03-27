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
  { label: "About",        href: "#" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process",      href: "#process" },
  { label: "Contact",      href: "#contact" },
];

const social = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Twitter",  href: "#", icon: Twitter },
  { label: "GitHub",   href: "#", icon: Github },
  { label: "Email",    href: "mailto:info@datatechz.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-brand-navy-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/I_have_this_202603271820-Photoroom.png"
                alt="DataTechZ"
                width={360}
                height={140}
                className="w-[240px] h-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Transforming data into competitive advantage for enterprises and
              startups worldwide.
            </p>
            <div className="flex items-center gap-2">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="w-9 h-9 rounded-lg border border-brand-navy-border bg-brand-navy-card flex items-center justify-center text-slate-500 hover:text-brand-teal hover:border-brand-teal/30 transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-5">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <p className="text-slate-400 text-sm">
                Ready to transform your data strategy?
              </p>
              <a
                href="mailto:info@datatechz.com"
                className="text-brand-teal text-sm font-medium hover:underline block"
              >
                info@datatechz.com
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg bg-brand-teal text-brand-navy text-sm font-bold hover:bg-cyan-300 transition-colors duration-200"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-navy-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} DataTechZ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
