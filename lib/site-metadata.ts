import type { Metadata } from "next";

export const siteOrigin = "https://www.dynamissolution.tn";

export const agencyTitle =
  "Development, Marketing Automation & AI Agency in Tunisia";
export const agencyDescription =
  "Dynamis Solution is a Tunisian development and marketing agency. We build web applications, produce campaign photography and integrate CRM automation and AI.";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  locale = "en",
): Metadata {
  const socialTitle = `${title} | Dynamis Solution`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Dynamis Solution",
      title: socialTitle,
      description,
      url: path,
      locale: locale === "fr" ? "fr_TN" : "en_US",
      images: ["/continuum.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/continuum.webp"],
    },
  };
}
