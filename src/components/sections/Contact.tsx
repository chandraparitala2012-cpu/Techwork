"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@datatechz.com",
    href: "mailto:info@datatechz.com",
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
    name: "", email: "", company: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Replace YOUR_FORM_ID below with your Formspree form ID from https://formspree.io
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError("Something went wrong. Please try emailing us directly at info@datatechz.com");
      }
    } catch {
      setFormError("Network error. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-fg placeholder:text-slate-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors duration-200 text-sm";
  const labelClass =
    "block font-mono text-[10px] text-brand-muted uppercase tracking-widest mb-2";

  return (
    <section id="contact" className="section-padding bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <span className="font-mono text-xs text-brand-teal uppercase tracking-widest">
            Contact
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-fg mt-3 leading-tight">
            Let&apos;s build something
            <br />
            exceptional together
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left info */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-alt border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-brand-teal" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-brand-muted uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-brand-fg font-medium text-sm hover:text-brand-teal transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-brand-fg font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* What to expect */}
              <div className="mt-8 p-6 rounded-xl border border-brand-border bg-brand-alt">
                <h4 className="font-display font-semibold text-brand-fg text-sm mb-4">
                  What to Expect
                </h4>
                <ul className="space-y-3">
                  {[
                    "Free 30-min discovery call",
                    "No pushy sales tactics",
                    "Honest capability assessment",
                    "Clear proposal within 5 days",
                    "NDA available before any discussion",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-brand-muted">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
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
              <div className="rounded-xl border border-brand-border bg-brand-alt p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center mb-6">
                  <CheckCircle className="w-7 h-7 text-brand-teal" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-fg mb-3">
                  Message Received
                </h3>
                <p className="text-brand-muted text-sm max-w-sm">
                  Thanks for reaching out. We&apos;ll review your message and
                  get back to you within 24 business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-brand-border bg-brand-alt p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name <span className="text-brand-teal">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Jane Smith" className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Work Email <span className="text-brand-teal">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="jane@company.com" className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className={labelClass}>Company</label>
                    <input
                      id="company" name="company" type="text"
                      value={form.company} onChange={handleChange}
                      placeholder="Acme Corp" className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className={labelClass}>Service of Interest</label>
                    <select
                      id="service" name="service"
                      value={form.service} onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Tell Us About Your Challenge{" "}
                    <span className="text-brand-teal">*</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Describe your data challenge, current stack, or what you're trying to achieve..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {formError && (
                  <p className="text-red-500 text-xs text-center">{formError}</p>
                )}

                <button
                  type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-brand-navy text-white font-bold text-sm hover:bg-slate-800 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-brand-muted">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-brand-teal hover:underline">Privacy Policy</a>.
                  We never share your data.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
