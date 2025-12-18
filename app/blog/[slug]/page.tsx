import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/breadcrumb'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p: any) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Dynamis Solutions Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `https://www.dynamissolution.tn${post.image || '/dynamis-logo.png'}`,
          width: 1200,
          height: 630,
          alt: post.title || 'Dynamis Solutions',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()
  const imagePath = post.image ? (post.image.startsWith('http') ? post.image : post.image) : '/webmobile.png'
  const imageFull = imagePath.startsWith('http') ? imagePath : `https://www.dynamissolution.tn${imagePath}`
  const author = post.author || 'Dynamis Solutions Team'
  const readTime = post.readTime || '5 min read'

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <article className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <Breadcrumb
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-12">
            <div className="mb-4">
              {post.date && (
                <time dateTime={post.date} className="text-gray-400 text-sm">
                  {new Date(post.date).toLocaleDateString('fr-TN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-400 text-sm">{readTime}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <p className="text-xl text-gray-300">{post.excerpt}</p>
          </header>

          <div className="relative aspect-video w-full mb-12 rounded-lg overflow-hidden">
            <Image src={imagePath} alt={post.title || 'Article image'} fill sizes="100vw" className="object-cover" priority />
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
              prose-p:text-gray-300 prose-p:mb-4 prose-p:leading-relaxed
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-blue-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-800 prose-pre:text-gray-300 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-ul:list-disc prose-ul:list-inside prose-ul:space-y-2 prose-ul:my-4
              prose-li:text-gray-300
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content || '<p>Content not available.</p>' }}
          />

          {/* Article Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: post.title,
                description: post.excerpt,
                image: imageFull,
                datePublished: post.date,
                author: {
                  '@type': 'Organization',
                  name: author,
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'Dynamis Solutions',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.dynamissolution.tn/dynamis-logo.png',
                  },
                },
              }),
            }}
          />

          {/* Breadcrumb Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dynamissolution.tn/' },
                  { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.dynamissolution.tn/blog' },
                  { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.dynamissolution.tn/blog/${post.slug}` },
                ],
              }),
            }}
          />
        </div>
      </article>
    </main>
  )
}

