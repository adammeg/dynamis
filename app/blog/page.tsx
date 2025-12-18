import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30">
              Our Blog
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Insights & Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends in web development, mobile apps, blockchain, and digital marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden h-full">
                  <div className="relative overflow-hidden bg-gray-800">
                    <div className="aspect-video w-full relative">
                      <Image
                        src={post.image || '/webmobile.png'}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        quality={90}
                      />
                    </div>
                    <Badge className="absolute top-4 left-4 bg-purple-600/90 text-white backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      {post.date && (
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      )}
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

