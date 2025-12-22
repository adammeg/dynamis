# Dynamis Solutions Website

Modern, professional website for Dynamis Solutions - a leading marketing agency and web development company in Tunisia. Featuring a powerful blog with MDX support, admin panel, and enterprise-grade SEO optimization.

## Features

- ✅ **SEO Optimized**: Meta tags, OpenGraph, Twitter cards, JSON-LD structured data, dynamic sitemaps
- ✅ **Performance**: Image optimization, lazy loading, code splitting, static generation
- ✅ **Blog System**: Full MDX-powered blog with admin panel for creating/editing posts without coding
- ✅ **Admin Panel**: Password-protected editor at `/admin` to publish blog posts instantly
- ✅ **Accessibility**: ARIA labels, keyboard navigation, focus states, reduced motion support
- ✅ **Analytics**: Google Analytics 4 integration ready
- ✅ **Responsive**: Mobile-first design, works on all devices
- ✅ **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Content**: MDX with frontmatter (gray-matter + remark + remark-html)
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel / Netlify

## Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone and install:
```bash
git clone <repository-url>
cd dev-agency-website
npm install --legacy-peer-deps
```

2. Create `.env.local`:
```bash
cat > .env.local << EOF
NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-password
ADMIN_PASSWORD=your-secure-password
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EOF
```

3. Start dev server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) and visit `/admin` to create your first blog post!

## Project Structure

```
├── app/
│   ├── blog/                 # Blog pages
│   │   ├── page.tsx          # Blog listing with all posts
│   │   └── [slug]/page.tsx   # Individual blog post pages
│   ├── admin/                # Admin editor (password-protected)
│   │   └── page.tsx          # Blog post creation/editing UI
│   ├── layout.tsx            # Root layout with SEO metadata
│   └── page.tsx              # Homepage
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── seo-meta.tsx          # Reusable SEO schema components
│   └── analytics.tsx         # Google Analytics wrapper
├── content/
│   └── blog/                 # MDX blog posts
│       ├── future-of-web-development-tunisia.mdx
│       ├── mobile-app-development-best-practices.mdx
│       └── blockchain-solutions-tunisia.mdx
├── lib/
│   ├── mdx.ts                # MDX file loading & parsing (gray-matter + remark)
│   ├── markdown.ts           # Markdown utilities
│   └── utils.ts              # Helper functions
├── pages/
│   └── api/admin/save.ts     # API endpoint for saving blog posts
└── public/                   # Static assets (images, logos)
```

## Blog Admin Panel Guide

### Accessing the Admin Panel
- Navigate to `/admin` on your site
- Enter the password from `NEXT_PUBLIC_ADMIN_PASSWORD` (set in `.env.local`)

### Creating a Blog Post
1. Fill in **Title**, **Slug**, **Category**, and **Excerpt**
2. Write content in Markdown format (preview available)
3. Click **Save & Publish** — the MDX file is created and post goes live instantly
4. Post appears at `/blog/{slug}` immediately with full SEO metadata

### Markdown Support
```markdown
# Heading 1
## Heading 2
**Bold** and *Italic*
[Link](https://example.com)
- Bullet points
- More items
```

For detailed admin setup instructions, see [ADMIN_SETUP.md](./ADMIN_SETUP.md).

## SEO Features

### Built-in SEO Optimizations
- **Meta Tags**: Title, description, keywords, viewport, charset
- **OpenGraph**: Social media sharing cards (Facebook, LinkedIn)
- **Twitter Cards**: Tweet-optimized images and descriptions
- **JSON-LD Schemas**:
  - Organization (company info)
  - WebSite (search action)
  - Article (blog posts)
  - BreadcrumbList (navigation paths)
  - FAQPage (FAQ sections)
- **Canonical URLs**: Duplicate content prevention
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: All pages include rich snippets

### SEO Checklist
- ✅ Unique meta titles per page
- ✅ Descriptive meta descriptions
- ✅ Optimized keyword targeting (Tunisia-focused)
- ✅ Mobile-first responsive design
- ✅ Fast page load times (< 2.5s LCP)
- ✅ Image optimization with alt text
- ✅ Internal linking strategy
- ✅ Sitemap and robots.txt
- ✅ Google Search Console ready

## Performance Optimization

### Image Optimization
- Next.js Image component for automatic optimization
- WebP/AVIF format support
- Lazy loading by default
- Responsive srcsets

### Code Optimization
- Code splitting per route
- Tree shaking of unused code
- CSS optimization with Tailwind
- Zero external fonts (system fonts)

### Build Optimization
- Static generation for blog posts
- Incremental static regeneration
- CSS minification
- JavaScript minification

## Accessibility Features

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`)
- ARIA labels and roles
- Keyboard navigation (Tab, Enter, Escape)
- Focus indicators
- Skip to content link
- Reduced motion support (`prefers-reduced-motion`)
- Proper heading hierarchy
- Alt text for all images

## Deployment Guide

### Deploy to Vercel (Recommended)

```bash
# 1. Push code to GitHub
git push origin main

# 2. Go to vercel.com and import your repository

# 3. Add environment variables in Vercel dashboard:
# NEXT_PUBLIC_ADMIN_PASSWORD
# ADMIN_PASSWORD
# NEXT_PUBLIC_GA_ID

# 4. Deploy! (Auto-deploys on every push to main)
```

### Deploy to Netlify

```bash
# Configure in netlify.toml or Netlify dashboard:
# Build command: npm run build
# Publish directory: .next

# Add same environment variables in Netlify Settings
```

### Environment Variables for Production
```env
# Admin authentication (keep ADMIN_PASSWORD secret!)
NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-password
ADMIN_PASSWORD=your-secure-password

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Performance Metrics & Lighthouse Goals

Run Lighthouse audit:
```bash
npm run build
npm run start
# Then use Chrome DevTools Lighthouse tab
```

### Target Metrics
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Mobile Lighthouse Score**: > 90
- **Desktop Lighthouse Score**: > 95

## File Handling for Blog Posts

### Adding Posts via Admin Panel
1. Visit `/admin`
2. Enter password
3. Fill form and save
4. Post appears immediately

### Adding Posts Manually
Create `.mdx` files in `content/blog/`:
```
content/blog/my-post-title.mdx
```

With frontmatter:
```yaml
---
title: "My Post Title"
excerpt: "Short summary"
date: "2025-01-20"
category: "Web Development"
image: "/webmobile.webp"
image: "/webmobile.webp"
readTime: "5 min read"
author: "Your Name"
slug: "my-post-title"
---

# My Post Title

Markdown content here...
```

## Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Production Checklist

- [ ] Set strong admin password in production
- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Add Google Analytics tracking ID
- [ ] Submit sitemap to Google Search Console
- [ ] Add site to Bing Webmaster Tools
- [ ] Configure DNS and SSL certificate
- [ ] Test email functionality (contact form)
- [ ] Run Lighthouse audit and optimize
- [ ] Monitor Core Web Vitals
- [ ] Set up error tracking (Sentry optional)
- [ ] Configure automated backups
- [ ] Test admin panel functionality
- [ ] Document admin access for team members

## Troubleshooting

### Admin Panel Won't Load
- Check `.env.local` exists in project root
- Verify `NEXT_PUBLIC_ADMIN_PASSWORD` is set
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

### Blog Posts Not Showing
- Verify `.mdx` files are in `content/blog/`
- Check frontmatter format (must have `---` before and after)
- Restart dev server for file changes to be detected

### Build Errors
```bash
# Clear Next.js cache and reinstall
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Module Not Found Error
```bash
npm install --legacy-peer-deps
npm run dev
```

## Security Best Practices

1. **Admin Password**: Use 15+ character random string
2. **Environment Variables**: Never commit `.env.local` to git
3. **HTTPS**: Always use HTTPS in production
4. **Rate Limiting**: Add to `/api/admin/save` for production (not included by default)
5. **Backups**: Regularly backup `content/blog/` directory
6. **Access Control**: Only share admin URL and password with authorized users

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Schema.org Documentation](https://schema.org/)

## License

This project is proprietary and confidential.

## Support

For questions or issues:
1. Check this README and [ADMIN_SETUP.md](./ADMIN_SETUP.md)
2. Review error logs in the terminal
3. Check Next.js/MDX documentation links above

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Dynamis Solutions. All rights reserved.

## Contact

- Website: https://www.dynamissolution.tn
- Email: contact@dynamis.com
- Phone: +216 90 053 729

