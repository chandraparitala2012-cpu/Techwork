import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://datatechz.com"),
  title: "DataTechZ | Transform Your Data Into Competitive Advantage",
  description:
    "DataTechZ helps enterprises and startups unlock the full potential of their data through end-to-end data engineering, advanced analytics, BI dashboards, and cutting-edge AI/ML solutions.",
  keywords: [
    "data engineering",
    "data analytics",
    "BI dashboards",
    "machine learning",
    "AI solutions",
    "data consulting",
    "cloud migration",
    "DataTechZ",
    "data infrastructure",
    "ETL pipelines",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "DataTechZ | Transform Your Data Into Competitive Advantage",
    description:
      "End-to-end data engineering, analytics, BI dashboards, and AI/ML solutions for enterprises and startups.",
    type: "website",
    url: "https://datatechz.com",
    siteName: "DataTechZ",
    images: [
      {
        url: "/I_have_this_202603271820-Photoroom.png",
        width: 1200,
        height: 630,
        alt: "DataTechZ - Data Engineering & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataTechZ | Transform Your Data Into Competitive Advantage",
    description:
      "End-to-end data engineering, analytics, BI dashboards, and AI/ML solutions.",
    images: ["/I_have_this_202603271820-Photoroom.png"],
  },
  alternates: {
    canonical: "https://datatechz.com",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-bg text-brand-fg antialiased">{children}</body>
    </html>
  );
}
