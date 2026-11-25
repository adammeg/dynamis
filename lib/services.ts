export type ServiceLanguage = "en" | "fr";

type ServiceCopy = {
  slug: string;
  title: string;
  label: string;
  description: string;
  intro: string;
  sections: [string, string][];
  example: string;
  exampleLink: string;
};

type Service = {
  key: "brand" | "web" | "automation" | "growth";
  exampleUrl: string;
} & Record<ServiceLanguage, ServiceCopy>;

export const languages: ServiceLanguage[] = ["en", "fr"];

export const services: Service[] = [
  {
    key: "brand",
    exampleUrl: "https://www.instagram.com/casapastabar/",
    en: {
      slug: "branding-design",
      title: "Brand Identity & Design Agency in Tunisia",
      label: "Brand identity & design",
      description:
        "Build a visual identity your team can use across packaging, social channels and the web. Explore brand design, photography and art direction from Dynamis.",
      intro:
        "A customer might first see your brand on a shop sign, a phone screen or a product label. We design the identity around those real encounters, so the same business is recognisable in each one.",
      sections: [
        [
          "What belongs in a brand identity?",
          "Start with the places where customers already see you. A restaurant may need a mark that reads on a delivery bag, a legible menu and a direction for food photography. A software company may need its website and product interface to feel like parts of the same service. Those decisions define the design brief.",
        ],
        [
          "What your team takes away",
          "We agree on the applications before design begins. The scope can include logo variations, colour and typography choices, photography direction, editable campaign templates and a guide showing your team how to use them.",
        ],
      ],
      example:
        "For Casa Pasta, our photography and social content brought the restaurant’s identity into its digital channels.",
      exampleLink: "See Casa Pasta on Instagram",
    },
    fr: {
      slug: "identite-visuelle",
      title: "Agence de branding et d’identité visuelle en Tunisie",
      label: "Identité visuelle et design",
      description:
        "Logo, charte graphique, photographie et direction artistique en Tunisie. Dynamis conçoit une identité utilisable sur vos supports imprimés et numériques.",
      intro:
        "Votre enseigne, vos emballages et votre site sont autant de premiers contacts possibles avec votre marque. Nous partons de ces usages concrets pour créer une identité que vos clients reconnaissent d’un support à l’autre.",
      sections: [
        [
          "Quels supports faut-il prévoir ?",
          "Pour un restaurant, le logo doit rester lisible sur un sac de livraison comme sur un menu. Pour un éditeur de logiciels, la continuité se joue entre le site commercial et l’interface du produit. Nous identifions ces situations avec vous avant de dessiner les premiers éléments.",
        ],
        [
          "Une charte que votre équipe peut utiliser",
          "Selon vos besoins, la mission comprend les déclinaisons du logo, les couleurs, la typographie, la direction photo ou des modèles de publication modifiables. Le guide d’utilisation explique comment préparer les prochains supports.",
        ],
      ],
      example:
        "Pour Casa Pasta, nos photographies et contenus sociaux prolongent l’identité du restaurant sur ses canaux numériques.",
      exampleLink: "Voir Casa Pasta sur Instagram",
    },
  },
  {
    key: "web",
    exampleUrl: "/work/nexus-academy",
    en: {
      slug: "web-development",
      title: "Web Design & Development Agency in Tunisia",
      label: "Web design & development",
      description:
        "Dynamis designs and builds business websites, online shops and custom web applications in Tunisia. Explore our development process and the Nexus Academy project.",
      intro:
        "The right website depends on what a visitor needs to do. Booking a consultation, buying a product and enrolling in a course each call for a different structure. We map that journey before choosing the technology.",
      sections: [
        [
          "Website, online shop or custom application?",
          "A service website needs clear offers, accessible enquiry forms and pages that search engines can discover. An online shop also needs a catalogue, checkout and order management. A marketplace or SaaS platform adds accounts and workflows for different users. We use these distinctions to scope your build.",
        ],
        [
          "What happens before launch?",
          "We prototype the main user journey, build the agreed pages and integrations, and test the experience on mobile and desktop. If you are replacing an existing website, bring your current URLs so we can plan which pages to preserve and where redirects belong.",
        ],
      ],
      example:
        "For Nexus Academy, Dynamis worked on the route from discovering a course to enrolment.",
      exampleLink: "Read the Nexus Academy case study",
    },
    fr: {
      slug: "creation-site-web",
      title: "Agence de création de sites web en Tunisie",
      label: "Création de sites web et e-commerce",
      description:
        "Création de sites vitrines, de boutiques en ligne et d’applications web en Tunisie. Découvrez la démarche de Dynamis et le projet Nexus Academy.",
      intro:
        "Prendre rendez-vous, acheter un produit ou s’inscrire à un cours sont trois parcours différents. Nous définissons d’abord ce que votre visiteur doit pouvoir faire, puis nous concevons les pages et les outils adaptés.",
      sections: [
        [
          "Site vitrine, boutique ou application sur mesure ?",
          "Pour une entreprise de services, la priorité est souvent de présenter ses offres et de faciliter les demandes de devis. Une boutique ajoute la gestion du catalogue, du paiement et des commandes. Une plateforme métier demande aussi des comptes et des droits adaptés à chaque utilisateur.",
        ],
        [
          "Comment préparer une création ou une refonte ?",
          "Apportez vos contenus, vos offres et les questions que vos clients posent avant de commander. En cas de refonte, la liste des adresses actuelles permet de prévoir les redirections. Nous testons ensuite les parcours essentiels sur téléphone et sur ordinateur avant la mise en ligne.",
        ],
      ],
      example:
        "Pour Nexus Academy, Dynamis a travaillé sur le parcours qui mène de la découverte d’un cours à l’inscription.",
      exampleLink: "Lire l’étude de cas Nexus Academy (en anglais)",
    },
  },
  {
    key: "automation",
    exampleUrl: "/#portfolio",
    en: {
      slug: "ai-workflow-automation",
      title: "Workflow Automation & AI Integration in Tunisia",
      label: "Workflow automation & AI",
      description:
        "Connect forms, CRM tools and team handoffs with workflow automation from Dynamis in Tunisia. Explore lead routing, support workflows and where AI fits.",
      intro:
        "If someone copies every website enquiry into a spreadsheet and then chases a colleague to follow it up, that handoff is a good place to start. We trace one real task through your tools before proposing an automation.",
      sections: [
        [
          "Which steps should be automated?",
          "A form submission can create a CRM record, assign an owner and schedule a reminder using straightforward rules. An AI step can help classify a free-text request or draft a response for review. We identify where a person needs to make the final decision.",
        ],
        [
          "How do you know the workflow works?",
          "Bring sample inputs, a list of the tools involved and examples of exceptions. Together we define what should happen to an incomplete entry, a duplicate enquiry or a failed integration. A pilot gives your team a way to compare handling time and review the errors before expanding the workflow.",
        ],
      ],
      example:
        "Tun-GPT is a concept in our portfolio exploring how automated support could help local businesses respond to customer questions.",
      exampleLink: "Explore our portfolio",
    },
    fr: {
      slug: "automatisation-ia",
      title: "Automatisation des processus et intégration IA en Tunisie",
      label: "Automatisation et intégration IA",
      description:
        "Reliez formulaires, CRM et équipes avec Dynamis en Tunisie. Découvrez comment automatiser le suivi commercial et intégrer une étape de validation humaine.",
      intro:
        "Une demande de devis arrive par formulaire, puis quelqu’un la recopie dans un tableau avant de prévenir un commercial. Nous suivons une tâche comme celle-ci de bout en bout pour identifier ce qui peut être automatisé.",
      sections: [
        [
          "Quelles tâches confier à un outil ?",
          "Des règles simples peuvent créer une fiche dans le CRM, attribuer la demande et programmer une relance. L’IA peut intervenir pour classer un message libre ou proposer un brouillon de réponse. Nous définissons avec votre équipe les décisions qui nécessitent une validation humaine.",
        ],
        [
          "Comment tester le processus ?",
          "Quelques exemples de demandes réelles, y compris les dossiers incomplets ou en double, aident à préparer le pilote. Nous précisons le traitement des exceptions et la marche à suivre si un outil est indisponible. Votre équipe peut ensuite comparer le temps de traitement et analyser les erreurs.",
        ],
      ],
      example:
        "Tun-GPT est un concept présenté dans notre portfolio qui explore l’assistance automatisée pour les entreprises locales.",
      exampleLink: "Parcourir notre portfolio",
    },
  },
  {
    key: "growth",
    exampleUrl: "https://www.instagram.com/pizzariumtunisie/",
    en: {
      slug: "digital-marketing",
      title: "Digital Marketing & Social Media Agency in Tunisia",
      label: "Digital marketing & social media",
      description:
        "Plan social content, campaigns and landing pages with Dynamis in Tunisia. See how we connect creative production to customer enquiries and orders.",
      intro:
        "A campaign starts with a customer action. For a restaurant it might be discovering a new menu. For a service business it might be requesting a quote. We use that action to shape the message, the channel and the page it leads to.",
      sections: [
        [
          "Planning content across channels",
          "We work from your offers, launch dates and the questions customers ask. A content calendar sets out what to publish, what photography or copy is needed, and where each post should send the reader.",
        ],
        [
          "What should a campaign measure?",
          "For a lead-generation campaign, follow the journey from the landing page to a submitted enquiry and a qualified conversation. For a shop, examine product views, checkout starts and orders. Agreeing on these events in advance helps your team decide which creative or page to improve next.",
        ],
      ],
      example:
        "For Pizzarium, the work included social content for menu launches, promotions and everyday restaurant stories.",
      exampleLink: "See Pizzarium’s social content",
    },
    fr: {
      slug: "marketing-digital",
      title: "Agence de marketing digital et réseaux sociaux en Tunisie",
      label: "Marketing digital et réseaux sociaux",
      description:
        "Stratégie éditoriale, gestion des réseaux sociaux et campagnes digitales en Tunisie. Dynamis relie vos contenus aux demandes de devis et aux commandes.",
      intro:
        "Faire découvrir un nouveau menu et obtenir un rendez-vous commercial demandent des campagnes différentes. Nous partons de l’action que vous attendez du client pour choisir le message, le canal et la page de destination.",
      sections: [
        [
          "Préparer un calendrier éditorial",
          "Vos offres, vos dates de lancement et les questions reçues en magasin ou en ligne servent de point de départ. Le calendrier précise les publications, les visuels à produire et la destination de chaque lien.",
        ],
        [
          "Quels résultats suivre ?",
          "Pour une activité de services, on peut suivre les visites de la page, les demandes de devis envoyées et les contacts qualifiés. Pour une boutique, les consultations de fiches produit, les passages en caisse et les commandes renseignent sur les étapes à améliorer.",
        ],
      ],
      example:
        "Pour Pizzarium, notre travail sur les réseaux sociaux a accompagné les lancements de menus, les promotions et la vie quotidienne du restaurant.",
      exampleLink: "Voir les publications de Pizzarium",
    },
  },
];

export function servicePath(copy: ServiceCopy) {
  return `/services/${copy.slug}`;
}

export function findService(slug: string) {
  for (const service of services) {
    for (const language of languages) {
      if (service[language].slug === slug)
        return { service, language, copy: service[language] };
    }
  }
}
