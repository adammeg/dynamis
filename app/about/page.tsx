import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  StudioFooter,
  StudioHeader,
} from "@/components/home/studio-navigation";

import { services, servicePath } from "@/lib/services";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata(
  "Dynamis, agence tunisienne de développement et de marketing",
  "Découvrez notre équipe à Mégrine, en Tunisie : développement web et logiciel, shooting photo, automatisation marketing et intégration IA.",
  "/about",
  "fr",
);

export default function AboutPage() {
  return (
    <div className="studio">
      <StudioHeader />
      <main id="main-content" lang="fr" className="light-section inner-page">
        <div className="studio-wrap">
          <p className="eyebrow">
            <span className="dash" />
            L’agence
          </p>
          <h1>
            À propos de <em>Dynamis.</em>
          </h1>
          <p className="intro">
            Dynamis Solution est une agence de développement et de marketing
            basée à Mégrine, dans le gouvernorat de Ben Arous. Nous développons
            des sites et des applications, réalisons des shootings photo et
            intégrons l’automatisation et l’IA aux outils de nos clients.
          </p>
          <div className="journal-list">
            <div className="article-body" style={{ marginLeft: 0 }}>
              <h2>De l’identité au produit</h2>
              <p>
                Nous accompagnons les startups, les PME et les grandes
                entreprises dans la création de leur identité visuelle, de leurs
                sites vitrines, de leurs boutiques en ligne et de leurs
                applications sur mesure.
              </p>
              <h2>Du lancement à la croissance</h2>
              <p>
                Pour un lancement, nous préparons les images de campagne, les
                pages et les publications. Lorsqu’une demande arrive, un
                formulaire connecté au CRM peut attribuer le prospect à un
                commercial. Une intégration IA peut aussi aider un conseiller à
                classer les questions et à préparer ses réponses.
              </p>
              <h2>Nos services en Tunisie</h2>
              <ul>
                {services.map((service) => (
                  <li key={service.key}>
                    <Link href={servicePath(service.fr)}>
                      {service.fr.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href="/#lead-generation" className="text-cta">
            Parlons de votre projet <ArrowUpRight size={17} />
          </Link>
        </div>
      </main>
      <StudioFooter />
    </div>
  );
}
