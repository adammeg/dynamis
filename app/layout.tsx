import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dynamissolutions.tn'),
  title: {
    default: 'Dynamis Solutions',
    template: '%s | Dynamis Solutions'
  },
  description: 'Building powerful web and mobile applications that drive business growth.',
  icons: "/dynamis-logo.png",
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: 'https://www.dynamissolutions.tn/',
    siteName: 'Dynamis Solutions',
    title: 'Dynamis Solutions',
    description: 'Building powerful web and mobile applications that drive business growth.',
    images: [
      {
        url: '/dynamis-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Dynamis Solutions Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynamis Solutions',
    description: 'Building powerful web and mobile applications that drive business growth.',
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
          // JSON-LD structured data for Organization
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Dynamis Solutions',
              url: 'https://www.dynamissolutions.tn/',
              logo: 'https://www.dynamissolutions.tn/dynamis-logo.png',
              sameAs: [
                'https://www.linkedin.com/',
                'https://twitter.com/'
              ],
              contactPoint: [{
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'contact@dynamis.com',
                telephone: '+21690053729'
              }]
            })
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
