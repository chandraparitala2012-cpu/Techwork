import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataTechZ | Transform Your Data Into Competitive Advantage",
  description:
    "DataTechZ helps enterprises and startups unlock the full potential of their data through end-to-end data engineering, advanced analytics, BI dashboards, and cutting-edge AI/ML solutions.",
  keywords: [
    "data engineering",
    "analytics",
    "BI dashboards",
    "machine learning",
    "AI solutions",
    "data consulting",
    "DataTechZ",
  ],
  openGraph: {
    title: "DataTechZ | Transform Your Data Into Competitive Advantage",
    description:
      "End-to-end data engineering, analytics, BI dashboards, and AI/ML solutions for enterprises and startups.",
    type: "website",
    url: "https://datatechz.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataTechZ | Transform Your Data Into Competitive Advantage",
    description:
      "End-to-end data engineering, analytics, BI dashboards, and AI/ML solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050B18] text-slate-50 antialiased">{children}</body>
    </html>
  );
}
