import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  StudioHeader,
  StudioFooter,
} from "@/components/home/studio-navigation";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

type ArticleProps = { params: Promise<{ slug: string }> };
const base = "https://www.dynamissolution.tn";

export async function generateStaticParams() {
  return (await getAllPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author || "Dynamis Solution"],
      url: `/blog/${post.slug}`,
      images: [post.image || "/continuum.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || "/continuum.webp"],
    },
  };
}

export default async function BlogPostPage({ params }: ArticleProps) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      image: new URL(post.image || "/continuum.webp", base).href,
      author: {
        "@type": "Organization",
        name: post.author || "Dynamis Solution",
      },
      publisher: {
        "@type": "Organization",
        name: "Dynamis Solution",
        logo: { "@type": "ImageObject", url: base + "/webmobile.webp" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { name: "Home", item: base },
        { name: "Insights", item: base + "/blog" },
        { name: post.title, item: base + "/blog/" + post.slug },
      ].map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        ...item,
      })),
    },
  ];
  return (
    <div className="studio">
      <StudioHeader />
      <main id="main-content" className="light-section inner-page">
        <article className="studio-wrap">
          <header className="article-heading">
            <Link className="text-cta" href="/blog">
              <ArrowLeft size={16} /> All insights
            </Link>
            <p className="eyebrow">
              <span className="dash" />
              {post.category}
            </p>
            <h1>{post.title}</h1>
            <p className="intro">{post.excerpt}</p>
            <p className="article-meta">
              {post.author}
              {post.date && (
                <>
                  {" "}
                  ·{" "}
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                </>
              )}
              {post.readTime && <> · {post.readTime}</>}
            </p>
            {post.image && post.image !== "/webmobile.webp" && (
              <img src={post.image} alt="" className="article-cover" />
            )}
          </header>
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="article-body">
            <Link className="text-cta" href="/#lead-generation">
              Discuss your project <ArrowUpRight size={16} />
            </Link>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
          />
        </article>
      </main>
      <StudioFooter />
    </div>
  );
}
