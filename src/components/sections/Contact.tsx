"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@datatechz.com",
    href: "mailto:hello@datatechz.com",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "United States · Remote-First",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 business hours",
    href: null,
  },
];

const services = [
  "Data Engineering",
  "Analytics & Insights",
  "BI Dashboards",
  "ML & AI Solutions",
  "Data Consulting",
  "Cloud Migration",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — connect to your email service / API here
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-brand-navy relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="mt-4 text-brand-muted text-lg max-w-2xl mx-auto">
            Tell us about your data challenge and we&apos;ll come back with ideas,
            options, and an honest assessment.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-muted font-semibold uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white font-medium hover:text-brand-cyan transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Commitment box */}
              <div className="mt-10 p-6 rounded-2xl border border-brand-border glass-card">
                <h4 className="text-white font-bold mb-3">
                  What to Expect
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Free 30-min discovery call",
                    "No pushy sales tactics",
                    "Honest capability assessment",
                    "Clear proposal within 5 days",
                    "NDA available before any discussion",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-brand-muted">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            {submitted ? (
              <div className="glass-card rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Message Received!
                </h3>
                <p className="text-brand-muted max-w-sm">
                  Thanks for reaching out. We&apos;ll review your message and get
                  back to you within 24 business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-brand-muted mb-2"
                    >
                      Full Name <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-brand-muted mb-2"
                    >
                      Work Email <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-200 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-brand-muted mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-brand-muted mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-200 text-sm appearance-none"
                    >
                      <option value="" className="text-brand-muted">
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-muted mb-2"
                  >
                    Tell Us About Your Challenge{" "}
                    <span className="text-brand-blue">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your data challenge, current stack, or what you're trying to achieve..."
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-200 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold glow-blue-sm hover:opacity-90 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-brand-muted">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-brand-blue hover:underline">
                    Privacy Policy
                  </a>
                  . We never share your data.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
