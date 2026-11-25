export type ServiceLanguage = "en" | "fr";

type ServiceCopy = {
  slug: string;
  title: string;
  label: string;
  description: string;
  intro: string;
  sections: [string, string][];
  exampleTitle?: string;
  example: string;
  exampleLink: string;
};

type Service = {
  key:
    | "brand"
    | "web"
    | "automation"
    | "growth"
    | "shoots"
    | "marketingAutomation";
  exampleUrl: string;
} & Record<ServiceLanguage, ServiceCopy>;

export const languages: ServiceLanguage[] = ["en", "fr"];

export const services: Service[] = [
  {
    key: "web",
    exampleUrl: "/work/nexus-academy",
    en: {
      slug: "web-development",
      title: "Web & Software Development Agency in Tunisia",
      label: "Web & software development",
      description:
        "Dynamis designs and builds business websites, online shops and custom web applications in Tunisia. Explore our development process and the Nexus Academy project.",
      intro:
        "Dynamis is a Tunisian development agency building websites, online shops and custom software. The right build starts with what a visitor needs to do. Booking a consultation, buying a product and enrolling in a course each call for a different structure. We map that journey before choosing the technology.",
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
      title: "Agence de développement web et logiciel en Tunisie",
      label: "Création de sites web et e-commerce",
      description:
        "Création de sites vitrines, de boutiques en ligne et d’applications web en Tunisie. Découvrez la démarche de Dynamis et le projet Nexus Academy.",
      intro:
        "Dynamis est une agence tunisienne de développement web et logiciel. Prendre rendez-vous, acheter un produit ou s’inscrire à un cours sont trois parcours différents. Nous définissons d’abord ce que votre visiteur doit pouvoir faire, puis nous concevons les pages et les outils adaptés.",
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
    key: "shoots",
    exampleUrl: "https://www.instagram.com/casapastabar/",
    en: {
      slug: "commercial-photography",
      title: "Commercial Photography & Marketing Shoots in Tunisia",
      label: "Commercial photography",
      description:
        "Plan a product, restaurant or brand photo shoot in Tunisia with Dynamis. See how we brief a campaign, prepare the shot list and deliver images for web and social.",
      intro:
        "Dynamis plans and produces marketing photo shoots in Tunisia. Tell us where customers will see the images: a menu, a product page, an Instagram post or a paid campaign. That choice shapes what we photograph and how we frame it.",
      sections: [
        [
          "What should the shoot cover?",
          "A restaurant launching a menu might need a close-up of each dish, a wider table scene and a portrait of the person preparing it. An online shop may need consistent product angles, details that show texture, and a separate image of the item in use. We turn the brief into a shot list you can review before the session.",
        ],
        [
          "How will the photos be used?",
          "A wide homepage banner needs room for a headline. A vertical campaign image needs a subject that still reads on a phone. Before the shoot we agree on the formats, number of edited images, intended usage and delivery date so you can plan the launch.",
        ],
        [
          "What to send for a quote",
          "Send the products or menu items, the location, your launch date and examples of the look you want. Mention any people, styling or special setups the session will need.",
        ],
      ],
      example:
        "For Casa Pasta, Dynamis produced photography and social content for the restaurant’s digital channels.",
      exampleLink: "See Casa Pasta on Instagram",
    },
    fr: {
      slug: "shooting-photo-publicitaire",
      title: "Shooting photo publicitaire et photo produit en Tunisie",
      label: "Shooting photo publicitaire",
      description:
        "Dynamis réalise vos shootings photo en Tunisie pour les restaurants, les marques et les boutiques en ligne. Préparez votre brief et les formats de diffusion.",
      intro:
        "Un visuel pour une carte de restaurant, une fiche produit et une campagne Instagram demandent des cadrages différents. Chez Dynamis, nous préparons votre shooting photo à partir des supports sur lesquels vos clients verront les images.",
      sections: [
        [
          "Quelles prises de vue prévoir ?",
          "Pour un nouveau menu, on peut prévoir un portrait du chef, une table dressée et un gros plan par plat. Pour une boutique, il faut parfois montrer la matière, l’échelle et plusieurs faces du même article. Nous établissons ensemble la liste des prises de vue avant la séance.",
        ],
        [
          "Quels fichiers pour votre campagne ?",
          "Une bannière de site peut nécessiter de l’espace pour le texte, tandis qu’une publication verticale doit rester lisible sur téléphone. Le brief précise les formats, le nombre de photos retouchées, les usages prévus et la date de livraison.",
        ],
        [
          "Comment préparer un devis ?",
          "Indiquez les produits ou les plats à photographier, le lieu, la date de lancement et vos références visuelles. Précisez si vous avez besoin de modèles, d’accessoires ou d’une mise en scène particulière.",
        ],
      ],
      example:
        "Pour Casa Pasta, Dynamis a réalisé des photographies et des contenus destinés aux réseaux sociaux du restaurant.",
      exampleLink: "Voir Casa Pasta sur Instagram",
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
  {
    key: "marketingAutomation",
    exampleUrl: "/#lead-generation",
    en: {
      slug: "marketing-automation",
      title: "Marketing Automation & CRM Integration Agency in Tunisia",
      label: "Marketing automation & CRM",
      description:
        "Connect your campaigns, forms and CRM with Dynamis in Tunisia. Plan lead routing, follow-up reminders and reporting around the way your sales team works.",
      intro:
        "Dynamis connects marketing campaigns to the people responsible for following up. We map how a lead enters your CRM, what the next action should be and when an automated sequence should hand the conversation to a person.",
      sections: [
        [
          "Where do leads get lost?",
          "Start with a recent enquiry. Follow it from its landing page through the form, the CRM and the first reply. Check who owns it, whether the campaign source survives the handoff and what happens when the same person gets in touch twice.",
        ],
        [
          "What should you measure?",
          "Agree on the events your team can verify: an enquiry received, a first response and a qualified conversation. Comparing those steps by campaign helps identify whether the bottleneck is in the landing page or in the follow-up.",
        ],
      ],
      exampleTitle: "Example quote request workflow",
      example:
        "A quote request can create or update a contact, record its campaign, assign an owner and schedule a reminder. When the owner records a reply, the reminder stops. Bring one such journey and the names of the tools you use.",
      exampleLink: "Discuss your lead follow-up workflow",
    },
    fr: {
      slug: "marketing-automation-crm",
      title: "Agence de marketing automation et intégration CRM en Tunisie",
      label: "Automatisation marketing et CRM",
      description:
        "Reliez vos campagnes, formulaires et CRM avec Dynamis en Tunisie. Organisez la distribution des prospects, les relances et le suivi des demandes de devis.",
      intro:
        "Une campagne peut générer des demandes sans que l’équipe commerciale sache qui doit rappeler. Dynamis relie les formulaires au CRM et définit avec vous les règles d’attribution, de relance et de prise en charge par un conseiller.",
      sections: [
        [
          "Où se perd une demande ?",
          "Prenez un devis récent et suivez son parcours depuis la page d’arrivée jusqu’à la première réponse. Vérifiez si la source de la campagne reste visible, qui reçoit la demande et ce qui se passe lorsqu’un prospect déjà connu remplit de nouveau le formulaire.",
        ],
        [
          "Comment suivre les résultats ?",
          "Choisissez des étapes que l’équipe peut confirmer dans ses outils : demande reçue, première réponse, échange qualifié. Comparez ces étapes par campagne pour savoir s’il faut revoir la page ou le suivi commercial.",
        ],
      ],
      exampleTitle: "Exemple de suivi d’une demande de devis",
      example:
        "Une demande de devis peut mettre à jour la fiche du prospect, conserver le nom de la campagne, attribuer un commercial et programmer un rappel. Dès que la réponse est enregistrée, le rappel s’arrête. Un parcours réel et la liste de vos outils suffisent pour démarrer la discussion.",
      exampleLink: "Échanger sur votre suivi commercial",
    },
  },
  {
    key: "automation",
    exampleUrl: "/#portfolio",
    en: {
      slug: "ai-workflow-automation",
      title: "AI Integration & Workflow Automation Agency in Tunisia",
      label: "AI integration & workflow automation",
      description:
        "Connect forms, CRM tools and team handoffs with workflow automation from Dynamis in Tunisia. Explore lead routing, support workflows and where AI fits.",
      intro:
        "If someone copies every website enquiry into a spreadsheet and then chases a colleague to follow it up, that handoff is a good place to start. We trace one real task through your tools before proposing an automation.",
      sections: [
        [
          "How can AI fit into an existing application?",
          "Choose a task with a clear input and an answer someone can check. For a support inbox, that could mean classifying a request, retrieving an approved help article and drafting a reply inside the tool the agent already uses. We agree on what information the model can access and when the request goes to a human.",
        ],
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
      title: "Agence d’intégration IA et d’automatisation en Tunisie",
      label: "Intégration IA et automatisation",
      description:
        "Reliez formulaires, CRM et équipes avec Dynamis en Tunisie. Découvrez comment automatiser le suivi commercial et intégrer une étape de validation humaine.",
      intro:
        "Une demande de devis arrive par formulaire, puis quelqu’un la recopie dans un tableau avant de prévenir un commercial. Nous suivons une tâche comme celle-ci de bout en bout pour identifier ce qui peut être automatisé.",
      sections: [
        [
          "Comment intégrer l’IA dans un logiciel existant ?",
          "Partez d’une tâche dont votre équipe peut vérifier le résultat. Dans un outil de support, l’IA peut classer une question, retrouver une fiche d’aide approuvée et proposer une réponse à un conseiller. Le cadrage précise les données accessibles et les cas à transmettre à une personne.",
        ],
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
