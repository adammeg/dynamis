"use client";

import Script from "next/script";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      name: "generate_lead",
      params: { form_name: string },
    ) => void;
  }
}

export function trackProjectEnquiry() {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  try {
    window.gtag?.("event", "generate_lead", { form_name: "project_enquiry" });
  } catch {
    // Analytics must never change the outcome of a delivered enquiry.
  }
}

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}
