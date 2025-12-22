# Admin Panel Setup Guide

## Overview
The admin panel allows you to create and publish blog posts directly from the web interface at `/admin`. Posts are stored as MDX files in `content/blog/` and automatically indexed by the blog pages.

## Environment Setup

### 1. Create `.env.local`
In the root of the project, create a `.env.local` file:

```bash
# Admin password (used for authentication on the admin panel)
# Keep this secret and secure
NEXT_PUBLIC_ADMIN_PASSWORD=your-super-secure-password-here
ADMIN_PASSWORD=your-super-secure-password-here
```

**Important Security Notes:**
- `NEXT_PUBLIC_ADMIN_PASSWORD` is used for the client-side login check (visible in the frontend).
- `ADMIN_PASSWORD` is used server-side in the API to validate post saves (kept secret).
- Change the default password to something strong.
- Never commit `.env.local` to version control.

### 2. Install Dependencies
Make sure all dependencies are installed:

```bash
npm install --legacy-peer-deps
# or
pnpm install
```

## Running the Admin Panel Locally

1. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

2. Navigate to `http://localhost:3000/admin` in your browser.

3. Enter your admin password (from `.env.local`) to access the editor.

## Creating a Blog Post

### Via Admin Panel

1. **Fill in the form:**
   - **Post Title**: The headline of your article
   - **URL Slug**: The URL path (e.g., `my-awesome-post` → `/blog/my-awesome-post`)
   - **Category**: Select from Web Development, Mobile Development, Blockchain, Marketing, Design, or Other
   - **Excerpt**: A brief summary (used in blog listings)
   - **Content**: Write in Markdown format (see Markdown Tips below)

2. **Preview** your post by clicking "Show Preview" to see title, slug, and category.

3. **Save & Publish** to create the MDX file and publish immediately.

4. Your post will be available at `/blog/{slug}` immediately.

### Manual MDX File Creation

Alternatively, create `.mdx` files directly in `content/blog/`:

```markdown
---
title: "Your Post Title"
excerpt: "A short summary of the post"
date: "2025-01-20"
category: "Web Development"
image: "/webmobile.webp"
readTime: "5 min read"
author: "Your Name"
slug: "your-post-slug"
---

# Your Post Title

Start writing your content in markdown...

## Subheading

- Bullet point 1
- Bullet point 2
```

## Markdown Formatting Reference

| Markdown | Output |
|----------|--------|
| `# Heading 1` | Large heading |
| `## Heading 2` | Medium heading |
| `### Heading 3` | Small heading |
| `**bold text**` | **bold text** |
| `*italic text*` | *italic text* |
| `[Link](https://url)` | Hyperlink |
| `- Bullet` | Bullet list |
| `1. Item` | Numbered list |
| `` `code` `` | Inline code |
| `` ```js ... ``` `` | Code block |

## Publishing to Production

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" and import your repo

2. **Set Environment Variables:**
   - In Vercel Dashboard → Settings → Environment Variables
   - Add `ADMIN_PASSWORD` (server-side secret)
   - Add `NEXT_PUBLIC_ADMIN_PASSWORD` (client-side check)

3. **Deploy:**
   - Commits to `main` branch auto-deploy
   - Or manually trigger deployments in Vercel Dashboard

4. **Access Admin Panel:**
   - Visit `https://your-domain.com/admin`
   - Enter your password to access the editor

### Netlify

1. **Connect your repository:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git" and select your repo

2. **Configure Build Settings:**
   - Build command: `npm run build` (or `pnpm build`)
   - Publish directory: `.next`

3. **Set Environment Variables:**
   - Site Settings → Build & Deploy → Environment
   - Add `ADMIN_PASSWORD` and `NEXT_PUBLIC_ADMIN_PASSWORD`

4. **Deploy:**
   - Automatic deploys on push
   - Posts saved via admin panel will write to the repository (requires GitHub token for auto-commit)

## Security Best Practices

1. **Strong Password**: Use a complex, unique password (15+ characters, mix of uppercase, lowercase, numbers, symbols)
2. **HTTPS Only**: Always use HTTPS in production (Vercel/Netlify provide this by default)
3. **Rate Limiting**: Consider adding rate limiting to `/api/admin/save` in production
4. **Backups**: Regularly backup your `content/blog/` directory
5. **Access Control**: Only share the admin URL and password with authorized team members

## Troubleshooting

### "Module not found: 'remark'" Error
- Run `npm install --legacy-peer-deps` to install missing dependencies
- Clear `.next` cache: `rm -rf .next`
- Restart the dev server

### Posts not appearing in blog list
- Check that the `.mdx` file is in `content/blog/`
- Verify frontmatter is correctly formatted (YAML between `---` markers)
- Restart the dev server for changes to be detected

### Admin page not loading
- Check `.env.local` exists and contains `NEXT_PUBLIC_ADMIN_PASSWORD`
- Verify Next.js dev server is running
- Clear browser cache (Ctrl+Shift+Delete)

### Password not working
- Ensure `NEXT_PUBLIC_ADMIN_PASSWORD` in `.env.local` matches the password you're entering
- Verify `.env.local` is in the project root
- Restart dev server after changing `.env.local`

## Performance & SEO

- Blog posts are **pre-rendered at build time** (static generation) for best performance
- **Automatic SEO**: Posts include Open Graph, Twitter cards, and JSON-LD structured data
- **Blog listing**: Automatically indexed and sorted by date (newest first)
- **Sitemap**: Auto-generated at `/sitemap.xml`

## File Structure

```
content/
  blog/
    future-of-web-development-tunisia.mdx
    mobile-app-development-best-practices.mdx
    your-new-post.mdx
    (... more posts ...)

app/
  blog/
    page.tsx          (Blog listing page)
    [slug]/page.tsx   (Individual post pages)
  admin/
    page.tsx          (Admin editor panel)

pages/
  api/
    admin/
      save.ts         (API endpoint for saving posts)
```

## Next Steps

1. ✅ Create your first blog post via `/admin`
2. ✅ Customize the site title and description in `app/layout.tsx`
3. ✅ Add team member profiles and portfolio items
4. ✅ Set up Google Analytics (already configured, just add tracking ID)
5. ✅ Monitor performance with Lighthouse CI
6. ✅ Set up email notifications for new posts (optional)

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review the [Next.js documentation](https://nextjs.org/docs)
3. Check the [MDX documentation](https://mdxjs.com/)
