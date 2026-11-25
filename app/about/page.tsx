import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  StudioFooter,
  StudioHeader,
} from "@/components/home/studio-navigation";

import { services, servicePath } from "@/lib/services";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata(
  "Agence digitale en Tunisie",
  "Découvrez notre agence digitale tunisienne, spécialisée en design, développement web, marketing et automatisation.",
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
            Basée en Tunisie, notre agence réunit stratégie, design et
            développement pour aider les entreprises à construire leur présence
            numérique.
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
                Référencement naturel, campagnes digitales, réseaux sociaux et
                automatisation font partie de notre accompagnement. Nous
                intervenons également sur des projets Web3 et blockchain.
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
