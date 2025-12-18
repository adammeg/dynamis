import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export async function getAllPosts() {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))

  const posts = await Promise.all(
    files.map(async (fileName) => {
      const fullPath = path.join(postsDirectory, fileName)
      const source = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(source)
      return {
        ...data,
        slug: data.slug || fileName.replace(/\.mdx?$/, ''),
      } as { date: string | Date; slug: string; [key: string]: any }
    })
  )

  // sort by date desc
  posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  return posts
}

export async function getPostBySlug(slug: string) {
  const possible = [
    path.join(postsDirectory, `${slug}.mdx`),
    path.join(postsDirectory, `${slug}.md`),
  ]

  const fullPath = possible.find((p) => fs.existsSync(p))
  if (!fullPath) return null

  const source = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(source)

  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()

  return {
    ...data,
    slug: data.slug || slug,
    content: contentHtml,
  }
}
