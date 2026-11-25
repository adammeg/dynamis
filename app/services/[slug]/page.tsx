import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  StudioHeader,
  StudioFooter,
} from "@/components/home/studio-navigation";
import { findService, languages, servicePath, services } from "@/lib/services";
import { pageMetadata, siteOrigin } from "@/lib/site-metadata";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return services.flatMap((service) =>
    languages.map((lang) => ({ slug: service[lang].slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = findService((await params).slug);
  if (!entry) notFound();
  const { copy, service, language } = entry;
  const path = servicePath(copy);
  return {
    ...pageMetadata(copy.title, copy.description, path, language),
    alternates: {
      canonical: path,
      languages: { en: servicePath(service.en), fr: servicePath(service.fr) },
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const entry = findService((await params).slug);
  if (!entry) notFound();
  const { service, copy, language } = entry;
  const french = language === "fr";
  const other = french ? "en" : "fr";
  const url = siteOrigin + servicePath(copy);
  const home = french ? "Accueil" : "Home";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": url + "#service",
        url,
        name: copy.label,
        serviceType: copy.label,
        description: copy.intro,
        areaServed: { "@type": "Country", name: "Tunisia" },
        provider: { "@id": siteOrigin + "/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: home,
            item: siteOrigin + "/",
          },
          { "@type": "ListItem", position: 2, name: copy.label, item: url },
        ],
      },
    ],
  };
  return (
    <div className="studio">
      <StudioHeader />
      <main
        lang={language}
        id="main-content"
        className="light-section inner-page"
      >
        <div className="studio-wrap">
          <div className="article-heading">
            <div className="service-navigation">
              <Link className="text-cta" href="/#services">
                <ArrowLeft size={16} />
                {home} · Expertise
              </Link>
              <Link
                className="text-cta"
                href={servicePath(service[other])}
                hrefLang={other}
                lang={other}
              >
                {french ? "English" : "Français"}
              </Link>
            </div>
            <h1>{copy.title}</h1>
            <p className="intro">{copy.intro}</p>
          </div>
          <div className="article-body">
            {copy.sections.map(([heading, body]) => (
              <section key={heading}>
                <h2>{heading}</h2>
                <p>{body}</p>
              </section>
            ))}
            <section>
              <h2>
                {copy.exampleTitle ??
                  (french
                    ? "Un exemple de notre travail"
                    : "An example of our work")}
              </h2>
              <p>{copy.example}</p>
              <a href={service.exampleUrl}>{copy.exampleLink}</a>
              {service.key === "web" && (
                <p>
                  <Link href="/work/moutouri">
                    {french
                      ? "Étude de cas : la marketplace moto Moutouri (en anglais)"
                      : "Read how Dynamis launched the Moutouri motorbike marketplace"}
                  </Link>
                </p>
              )}
              {service.key === "web" && french && (
                <p>
                  <Link href="/blog/prix-site-ecommerce-tunisie">
                    Combien coûte la création d’un site e-commerce en Tunisie ?
                  </Link>
                </p>
              )}
            </section>
            <p>
              <Link href="/#lead-generation" className="text-cta">
                {french ? "Parlons de votre projet" : "Discuss your project"}{" "}
                <ArrowUpRight size={16} />
              </Link>
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
          />
        </div>
      </main>
      <StudioFooter />
    </div>
  );
}
