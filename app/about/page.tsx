import Link from 'next/link'

export const metadata = {
  title: 'À propos Dynamis Solutions',
  description: 'Dynamis Solutions agence digitale Tunisie spécialisée en création site web, marketing digital, SEO et solutions web3 pour entreprises tunisiennes.'
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold">À propos de Dynamis Solutions</h1>
          <p className="text-gray-300 leading-relaxed">
            Dynamis Solutions est une agence digitale professionnelle basée en Tunisie. Nous accompagnons les entreprises avec des services complets :
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Création site web Tunisie sites vitrines et sites e-commerce</li>
            <li>Développement site web professionnel sur mesure</li>
            <li>Référencement naturel Tunisie (agence SEO Tunisie) et optimisation SEO site web</li>
            <li>Marketing digital Tunisie gestion réseaux sociaux et stratégie marketing digitale</li>
            <li>Solutions web3 et blockchain agence web3, marketing blockchain et web3 consulting</li>
            <li>Design & branding identité visuelle, création logo professionnel et charte graphique</li>
          </ul>

          <p className="text-gray-300">
            Nous travaillons avec des startups, PME et grandes entreprises pour améliorer visibilité Google, convertir plus de clients et construire des expériences numériques modernisées et responsive.
          </p>

          <p className="text-gray-300">Envie d'en discuter ? <Link href="#contact" className="text-blue-400 hover:underline">Contactez-nous</Link> pour une consultation gratuite.</p>
        </div>
      </div>
    </main>
  )
}
