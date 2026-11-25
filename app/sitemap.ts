import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { languages, servicePath, services } from "@/lib/services";
import { siteOrigin } from "@/lib/site-metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const paths = [
    "/",
    "/about",
    "/blog",
    ...services.flatMap((service) =>
      languages.map((lang) => servicePath(service[lang])),
    ),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];
  return paths.map((path) => ({ url: siteOrigin + path }));
}
