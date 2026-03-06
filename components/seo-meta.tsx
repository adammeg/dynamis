export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Dynamis Solution",
          url: "https://www.dynamissolution.tn",
          logo: "https://www.dynamissolution.tn/webmobile.webp",
          description:
            "Premium digital transformation agency delivering websites, SaaS products, automation systems, branding, growth strategy, and consulting.",
          sameAs: [
            "https://www.linkedin.com/",
            "https://www.instagram.com/",
            "https://www.facebook.com/",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: "+21690053729",
            email: "contact@dynamissolution.tn",
            areaServed: "TN",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tunis",
            addressCountry: "TN",
          },
        }),
      }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Dynamis Solution",
          url: "https://www.dynamissolution.tn",
          description:
            "Premium digital transformation agency site for automation, web development, SaaS, branding, and growth services.",
        }),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }),
      }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      }}
    />
  );
}
