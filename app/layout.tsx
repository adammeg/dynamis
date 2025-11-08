import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dynamissolution.tn'),
  title: {
    default: 'Dynamis Solutions - Marketing Agency & Web Development Tunisia | Media Agency Tunis',
    template: '%s | Dynamis Solutions'
  },
  description: 'Leading marketing agency and media agency in Tunisia. Expert web development, mobile development, and blockchain development services. Digital marketing agency Tunis specializing in custom web applications, mobile apps, and digital marketing strategies for Tunisian businesses.',
  keywords: [
    'marketing agency Tunisia',
    'media agency Tunisia',
    'marketing agency Tunis',
    'media agency Tunis',
    'web development Tunisia',
    'mobile development Tunisia',
    'blockchain development Tunisia',
    'digital marketing agency Tunisia',
    'web development Tunis',
    'mobile app development Tunisia',
    'blockchain solutions Tunisia',
    'digital agency Tunisia',
    'SEO agency Tunisia',
    'social media marketing Tunisia',
    'web design Tunisia',
    'mobile app development Tunis',
    'blockchain development Tunis',
    'custom web development Tunisia',
    'React development Tunisia',
    'Next.js development Tunisia',
    'mobile app agency Tunisia'
  ],
  icons: "/dynamis-logo.png",
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: 'https://www.dynamissolution.tn/',
    siteName: 'Dynamis Solutions',
    title: 'Dynamis Solutions - Marketing Agency & Web Development Tunisia',
    description: 'Leading marketing agency and media agency in Tunisia. Expert web development, mobile development, and blockchain development services for Tunisian businesses.',
    locale: 'fr_TN',
    images: [
      {
        url: '/dynamis-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Dynamis Solutions - Marketing Agency Tunisia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynamis Solutions - Marketing Agency & Web Development Tunisia',
    description: 'Leading marketing agency and media agency in Tunisia. Expert web development, mobile development, and blockchain development services.',
    images: ['/dynamis-logo.png']
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="BFT7sOLB_7cvXTwCc5hPbi29Mtk-zdscHoY0bRwv2oA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://www.dynamissolution.tn/#organization',
              name: 'Dynamis Solutions',
              alternateName: 'Dynamis Solutions - Marketing Agency Tunisia',
              url: 'https://www.dynamissolution.tn/',
              logo: 'https://www.dynamissolution.tn/dynamis-logo.png',
              image: 'https://www.dynamissolution.tn/dynamis-logo.png',
              description: 'Leading marketing agency and media agency in Tunisia. Expert web development, mobile development, and blockchain development services for Tunisian businesses.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'TN',
                addressRegion: 'Tunis',
                addressLocality: 'Tunis'
              },
              telephone: '+21690053729',
              email: 'contact@dynamis.com',
              priceRange: '$$',
              areaServed: {
                '@type': 'Country',
                name: 'Tunisia'
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Digital Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Marketing Agency Services',
                      description: 'Digital marketing, SEO, social media marketing for Tunisian businesses'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Web Development',
                      description: 'Custom web development and web application development in Tunisia'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Mobile Development',
                      description: 'Mobile app development for iOS and Android in Tunisia'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Blockchain Development',
                      description: 'Blockchain solutions and blockchain development services in Tunisia'
                    }
                  }
                ]
              },
              sameAs: [
                'https://www.linkedin.com/',
                'https://twitter.com/'
              ],
              contactPoint: [{
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'contact@dynamis.com',
                telephone: '+21690053729',
                areaServed: 'TN',
                availableLanguage: ['French', 'English', 'Arabic']
              }]
            })
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
