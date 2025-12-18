import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dynamissolution.tn'
  const now = new Date()

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/future-of-web-development-tunisia`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/mobile-app-development-best-practices`,
      lastModified: new Date('2025-01-10'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/blockchain-solutions-tunisia`,
      lastModified: new Date('2025-01-05'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}


