import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@/components/analytics";
import {
  agencyTitle,
  agencyDescription,
  siteOrigin,
} from "@/lib/site-metadata";
import { services, servicePath } from "@/lib/services";
import "./globals.css";
import "./studio.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `Dynamis Solution | ${agencyTitle}`,
    template: "%s | Dynamis Solution",
  },
  description: agencyDescription,
  category: "technology",
  icons: {
    icon: "/dynamis-mark.png",
    apple: "/webmobile.webp",
  },
  openGraph: {
    type: "website",
    url: "https://www.dynamissolution.tn/",
    siteName: "Dynamis Solution",
    title: `Dynamis Solution | ${agencyTitle}`,
    description: agencyDescription,
    locale: "en_US",
    images: [
      {
        url: "/continuum.webp",
        width: 1000,
        height: 1000,
        alt: "Continuum, a digital form study by Dynamis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Dynamis Solution | ${agencyTitle}`,
    description: agencyDescription,
    images: ["/continuum.webp"],
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
  image: "https://www.dynamissolution.tn/continuum.webp",
  description: agencyDescription,
  sameAs: ["https://www.linkedin.com/company/dynamis-solution"],
  makesOffer: services.map(({ en }) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      "@id": siteOrigin + servicePath(en) + "#service",
      name: en.label,
      url: siteOrigin + servicePath(en),
    },
  })),
  email: "contact@dynamissolution.tn",
  telephone: "+21690053729",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Megrine",
    addressRegion: "Ben Arous",
    addressCountry: "TN",
  },
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
  description: agencyDescription,
  publisher: { "@id": "https://www.dynamissolution.tn/#organization" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="BFT7sOLB_7cvXTwCc5hPbi29Mtk-zdscHoY0bRwv2oA"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
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
