import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dynamissolution.tn"),
  title: {
    default:
      "Dynamis Solutions - Marketing Agency & Web Development Tunisia | Media Agency Tunis",
    template: "%s | Dynamis Solutions",
  },
  description:
    "Dynamis Solutions — agence digitale Tunisie spécialisée en création site web, marketing digital et solutions web3. Nous accompagnons les entreprises tunisiennes avec des services professionnels : création de site vitrine et e-commerce, développement web sur mesure, SEO et stratégie marketing digitale.",
  keywords: [
    "agence digitale Tunisie",
    "agence marketing digital Tunisie",
    "agence web Tunisie",
    "agence communication digitale",
    "agence marketing 360",
    "agence digitale professionnelle",
    "agence digitale pour entreprises",
    "agence web & marketing Tunisie",
    "agence digitale Tunis",
    "agence marketing Tunis",
    "agence web Tunis",
    "création site web Tunisie",
    "développement site web professionnel",
    "création site vitrine",
    "création site e-commerce",
    "agence développement web Tunisie",
    "site web sur mesure",
    "développement web moderne",
    "refonte site web",
    "web design UI UX",
    "site web responsive",
    "référencement naturel Tunisie",
    "agence SEO Tunisie",
    "optimisation SEO site web",
    "audit SEO professionnel",
    "stratégie SEO",
    "référencement Google Tunisie",
    "SEO pour entreprises",
    "amélioration visibilité Google",
    "marketing digital Tunisie",
    "gestion réseaux sociaux",
    "community management Tunisie",
    "stratégie marketing digitale",
    "publicité digitale",
    "marketing de contenu",
    "branding digital",
    "marketing pour startups",
    "marketing pour PME",
    "agence web3",
    "marketing blockchain",
    "promotion projets web3",
    "communication blockchain",
    "stratégie marketing web3",
    "identité visuelle",
    "branding professionnel",
    "design graphique Tunisie",
    "création logo professionnel",
    "charte graphique",
    "digital marketing agency Tunisia",
    "web development agency Tunisia",
    "SEO agency Tunisia",
    "web3 marketing agency",
    "creative digital agency",
    "boite de communication digitale",
    "agence media Tunisia",
    "agence publicité digitale",
    "agence création site web",
    "agence développement application mobile",
    "agence référencement naturel",
    "agence gestion réseaux sociaux",
    "agence solutions blockchain",
    "agence digitale pour entreprises tunisiennes",
    "meilleure agence digitale Tunisie",
    "top agence digitale Tunisia",
    "agence event digitale Tunisie",
    "agence influenceurs Tunisie",
  ],
  icons: {
    icon: "/webmobile.webp",
    apple: "/webmobile.webp",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.dynamissolution.tn/",
    siteName: "Dynamis Solutions",
    title: "Dynamis Solutions - Marketing Agency & Web Development Tunisia",
    description:
      "Dynamis Solutions agence digitale Tunisie spécialisée en création de site web, marketing digital, SEO et solutions web3 pour entreprises tunisiennes.",
    locale: "fr_TN",
    images: [
      {
        url: "/webmobile.webp",
        width: 1200,
        height: 1200,
        alt: "Dynamis Solutions - Marketing Agency Tunisia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamis Solutions - Marketing Agency & Web Development Tunisia",
    description:
      "Dynamis Solutions — agence digitale Tunisie spécialisée en création site web, développement sur mesure, SEO et marketing digital pour entreprises tunisiennes.",
    images: ["/webmobile.webp"],
  },

  // ✅ Make indexing explicit for ALL bots (including Googlebot)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.dynamissolution.tn/#organization",
    name: "Dynamis Solutions",
    alternateName: "Dynamis Solutions - Marketing Agency Tunisia",
    url: "https://www.dynamissolution.tn/",
    logo: "https://www.dynamissolution.tn/webmobile.webp",
    image: "https://www.dynamissolution.tn/webmobile.webp",
    description:
      "Leading marketing agency and media agency in Tunisia. Expert web development, mobile development, and blockchain development services for Tunisian businesses.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TN",
      addressRegion: "Tunis",
      addressLocality: "Tunis",
    },
    telephone: "+21690053729",
    email: "contact@dynamis.com",
    sameAs: ["https://www.linkedin.com/", "https://twitter.com/"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "contact@dynamis.com",
        telephone: "+21690053729",
        areaServed: "TN",
        availableLanguage: ["French", "English", "Arabic"],
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.dynamissolution.tn/#website",
    url: "https://www.dynamissolution.tn/",
    name: "Dynamis Solutions",
    description:
      "Dynamis Solutions agence digitale Tunisie spécialisée en création site web, développement sur mesure, SEO et marketing digital pour entreprises tunisiennes.",
    publisher: { "@id": "https://www.dynamissolution.tn/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.dynamissolution.tn/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="fr" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        {/* Site verification */}
        <meta
          name="google-site-verification"
          content="BFT7sOLB_7cvXTwCc5hPbi29Mtk-zdscHoY0bRwv2oA"
        />

        {/* Structured data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>

      <body className="antialiased">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
