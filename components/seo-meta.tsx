// Reusable SEO metadata component for common structured data
export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Dynamis Solutions',
          url: 'https://www.dynamissolution.tn',
          logo: 'https://www.dynamissolution.tn/dynamis-logo.png',
          description: 'Dynamis Solutions — agence digitale Tunisie spécialisée en création de site web, marketing digital, SEO et solutions blockchain. Nous aidons les entreprises tunisiennes avec des services professionnels en création site vitrine, e-commerce, développement web sur mesure et stratégie marketing digitale.',
          sameAs: [
            'https://facebook.com/dynamissolutions',
            'https://twitter.com/dynamissolutions',
            'https://instagram.com/dynamissolutions',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            telephone: '+216-XX-XXX-XXX',
            email: 'contact@dynamissolution.tn',
            areaServed: 'TN',
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Tunisia',
            addressLocality: 'Tunis',
            postalCode: '',
            addressCountry: 'TN',
          },
        }),
      }}
    />
  )
}

export function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Dynamis Solutions',
          url: 'https://www.dynamissolution.tn',
          description: 'Dynamis Solutions - agence digitale Tunisie : création site web, SEO, marketing digital, gestion réseaux sociaux et solutions web3 pour entreprises tunisiennes.',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.dynamissolution.tn/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        }),
      }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: item.name,
            item: item.url,
          })),
        }),
      }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }),
      }}
    />
  )
}
