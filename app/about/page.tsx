import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  StudioFooter,
  StudioHeader,
} from "@/components/home/studio-navigation";

export const metadata = {
  title: "À propos de Dynamis Solution",
  description:
    "Découvrez notre agence digitale tunisienne, spécialisée en design, développement web, marketing et automatisation.",
};

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
