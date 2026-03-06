import type { Metadata } from "next";
import { AgencyHomepage } from "@/components/home/agency-homepage";

export const metadata: Metadata = {
  title: "Digital Transformation Agency for Premium Growth",
  description:
    "Dynamis Solution designs premium websites, SaaS products, automation workflows, growth systems, and brand experiences for ambitious companies in Tunisia and beyond.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dynamis Solution | Premium Digital Transformation Agency",
    description:
      "Automation, web development, SaaS delivery, branding, and growth systems built to attract high-value clients.",
    url: "https://www.dynamissolution.tn/",
    images: [
      {
        url: "/webmobile1.webp",
        width: 1200,
        height: 630,
        alt: "Dynamis Solution premium agency homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamis Solution | Premium Digital Transformation Agency",
    description:
      "Premium websites, automation systems, SaaS products, and growth strategy for ambitious brands.",
    images: ["/webmobile1.webp"],
  },
};

export default function HomePage() {
  return <AgencyHomepage />;
}
