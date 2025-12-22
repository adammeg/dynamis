import fs from 'fs'
import path from 'path'

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).end()

  const { title, slug, excerpt, category = 'Web Development', content, password } = req.body
  // Use the same env var as the admin UI (`NEXT_PUBLIC_ADMIN_PASSWORD`) so that
  // the password check is consistent between client and API.
  // NOTE: For a production setup, you should move to a true server-only secret
  // and a proper auth system, but this keeps the current lightweight flow working.
  const secret = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || 'changeme'
  if (!password || password !== secret) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!title || !slug || !content) return res.status(400).json({ error: 'Missing required fields' })

  const dir = path.join(process.cwd(), 'content', 'blog')
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const filePath = path.join(dir, `${slug}.mdx`)
  const today = new Date().toISOString().split('T')[0]
  const md = `---\ntitle: "${title}"\nexcerpt: "${excerpt || ''}"\ndate: "${today}"\ncategory: "${category}"\nimage: "/webmobile.webp"\nreadTime: "5 min read"\nauthor: "Dynamis Solutions Team"\nslug: "${slug}"\n---\n\n${content}`

  try {
    fs.writeFileSync(filePath, md, 'utf8')
    return res.status(200).json({ ok: true, slug })
  } catch (err) {
    return res.status(500).json({ error: String(err) })
  }
}
