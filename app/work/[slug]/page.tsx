import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  StudioHeader,
  StudioFooter,
} from "@/components/home/studio-navigation";
import { caseStudies, caseStudyPath } from "@/lib/case-studies";
import { pageMetadata, siteOrigin } from "@/lib/site-metadata";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

function getProject(slug: string) {
  return caseStudies.find((project) => project.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const project = getProject((await params).slug);
  const meta = pageMetadata(
    project.title,
    project.introduction,
    caseStudyPath(project),
  );
  const images = [`/project-${project.image}.webp`];
  return {
    ...meta,
    openGraph: { ...meta.openGraph, images },
    twitter: { ...meta.twitter, images },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const project = getProject((await params).slug);
  const url = siteOrigin + caseStudyPath(project);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: url,
    headline: project.title,
    description: project.introduction,
    inLanguage: "en",
    image: siteOrigin + "/project-" + project.image + ".webp",
    author: { "@id": siteOrigin + "/#organization" },
    publisher: { "@id": siteOrigin + "/#organization" },
  };
  return (
    <div className="studio">
      <StudioHeader />
      <main id="main-content" className="light-section inner-page">
        <article className="studio-wrap">
          <header className="article-heading">
            <Link className="text-cta" href="/#portfolio">
              <ArrowLeft size={16} /> Selected work
            </Link>
            <p className="eyebrow">
              <span className="dash" />
              Case study · {project.industry}
            </p>
            <h1>{project.title}</h1>
            <p className="intro">{project.introduction}</p>
            <Image
              src={`/project-${project.image}.webp`}
              alt=""
              width={1100}
              height={550}
              sizes="(max-width: 950px) 90vw, 850px"
              className="case-cover"
            />
            <p className="article-meta">
              {project.discipline} · {project.technologies.join(" / ")}
            </p>
          </header>
          <div className="article-body">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.link && (
                  <a href={section.link.href}>{section.link.label}</a>
                )}
              </section>
            ))}
            <p>
              <Link href="/services/web-development">
                Explore web design and development at Dynamis
              </Link>
            </p>
            <Link className="text-cta" href="/#lead-generation">
              Discuss a similar project <ArrowUpRight size={16} />
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
