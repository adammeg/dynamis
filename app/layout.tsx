import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@/components/analytics";
import "./globals.css";
import "./studio.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dynamissolution.tn"),
  title: {
    default: "Dynamis Solution | Premium Digital Transformation Agency",
    template: "%s | Dynamis Solution",
  },
  description:
    "Dynamis Solution is a premium digital transformation agency delivering websites, SaaS products, automation systems, branding, growth strategy, and consulting for ambitious companies.",
  keywords: [
    "digital transformation agency Tunisia",
    "web development agency Tunisia",
    "automation agency Tunisia",
    "AI workflows Tunisia",
    "SaaS development agency",
    "branding agency Tunisia",
    "social media management Tunisia",
    "marketing growth agency Tunisia",
    "business consulting Tunisia",
    "premium web design Tunisia",
  ],
  category: "technology",
  icons: {
    icon: "/dynamis-mark.png",
    apple: "/webmobile.webp",
  },
  openGraph: {
    type: "website",
    url: "https://www.dynamissolution.tn/",
    siteName: "Dynamis Solution",
    title: "Dynamis Solution | Premium Digital Transformation Agency",
    description:
      "Premium websites, SaaS products, automation systems, growth infrastructure, and brand experiences built to attract high-value clients.",
    locale: "en_US",
    images: [
      {
        url: "/webmobile1.webp",
        width: 1200,
        height: 630,
        alt: "Dynamis Solution premium agency site preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamis Solution | Premium Digital Transformation Agency",
    description:
      "Web, product, automation, branding, and growth systems for ambitious companies.",
    images: ["/webmobile1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.dynamissolution.tn/#organization",
  name: "Dynamis Solution",
  alternateName: "Dynamis Solutions",
  url: "https://www.dynamissolution.tn/",
  logo: "https://www.dynamissolution.tn/webmobile.webp",
  image: "https://www.dynamissolution.tn/webmobile1.webp",
  description:
    "Premium digital transformation agency delivering websites, SaaS products, AI workflows, branding, marketing systems, and consulting.",
  email: "contact@dynamissolution.tn",
  telephone: "+21690053729",
  areaServed: ["TN", "FR", "EU"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@dynamissolution.tn",
      telephone: "+21690053729",
      areaServed: "TN",
      availableLanguage: ["English", "French", "Arabic"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.dynamissolution.tn/#website",
  url: "https://www.dynamissolution.tn/",
  name: "Dynamis Solution",
  description:
    "Premium digital transformation agency website for automation, web development, SaaS, branding, and growth services.",
  publisher: { "@id": "https://www.dynamissolution.tn/#organization" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="BFT7sOLB_7cvXTwCc5hPbi29Mtk-zdscHoY0bRwv2oA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
