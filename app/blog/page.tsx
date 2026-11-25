import { pageMetadata } from "@/lib/site-metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  StudioFooter,
  StudioHeader,
} from "@/components/home/studio-navigation";
import { getAllPosts } from "@/lib/mdx";

export const metadata = pageMetadata(
  "Insights on Web Development & Digital Products",
  "Read practical guides from Dynamis Solution on web development, mobile apps and blockchain for businesses in Tunisia.",
  "/blog",
);

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div className="studio">
      <StudioHeader />
      <main id="main-content" className="light-section inner-page">
        <div className="studio-wrap">
          <p className="eyebrow">
            <span className="dash" />
            From the agency
          </p>
          <h1>
            Studio <em>insights.</em>
          </h1>
          <p className="intro">
            Ideas and practical guides on the technology behind your business.
          </p>
          <div className="journal-list">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                lang={post.language ?? "en"}
              >
                <span className="eyebrow">{post.category}</span>
                <div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  {post.date && (
                    <small>
                      {new Date(post.date).toLocaleDateString(
                        post.language === "fr" ? "fr-TN" : "en-GB",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          timeZone: "UTC",
                        },
                      )}{" "}
                      · {post.readTime}
                    </small>
                  )}
                </div>
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </div>
          {posts.length === 0 && <p>Our next article is on its way.</p>}
        </div>
      </main>
      <StudioFooter />
    </div>
  );
}
