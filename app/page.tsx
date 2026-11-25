import type { Metadata } from "next";
import { AgencyHomepage } from "@/components/home/agency-homepage";

const title = "Digital Design, Development & Automation Agency";
const description =
  "Explore branding, websites, digital products, and automation by Dynamis Solution, an independent digital agency based in Tunisia.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dynamis Solution | " + title,
    description,
    url: "/",
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
    title: "Dynamis Solution | " + title,
    description,
    images: ["/continuum.webp"],
  },
};
export default function HomePage() {
  return <AgencyHomepage />;
}
