import Image from "next/image";
import Link from "next/link";
import { caseStudies, caseStudyPath } from "@/lib/case-studies";
import { services, servicePath } from "@/lib/services";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Braces,
  Globe2,
  Layers3,
  Plus,
  Workflow,
} from "lucide-react";
import { StudioHeader, StudioFooter } from "./studio-navigation";
import { ContactForm } from "./contact-form";

const clients = [
  { name: "Nexus Academy", mark: "logo-nexus", style: "nexus" },
  { name: "MOUTOURI", mark: "moutouri_logo", style: "moutouri" },
  { name: "MFAI", mark: "mfai", style: "mfai" },
  { name: "Casa Pasta", mark: "casapasta-logo", style: "casa" },
  { name: "Pizzarium", mark: "pizzarium-logo", style: "pizza" },
];

const projects = [
  {
    name: "MFAI",
    category: "Web3 product design",
    description:
      "A product interface and a clearer introduction to a technical platform.",
    url: "https://www.mfai.app/",
  },
  {
    name: "Casa Pasta",
    category: "Content & growth",
    description:
      "Photography and social content that bring the restaurant’s identity to its digital channels.",
    url: "https://www.instagram.com/casapastabar/",
  },
  {
    name: "Pizzarium",
    category: "Creative direction",
    description:
      "Social campaigns for menu launches, promotions, and everyday restaurant stories.",
    url: "https://www.instagram.com/pizzariumtunisie/",
  },
  {
    name: "Tun-GPT",
    category: "AI concept",
    description:
      "An exploration of automated customer support for local businesses.",
  },
];

const expertise = {
  brand: {
    title: "Brand & creative",
    icon: Layers3,
    items: [
      ["branding-design", "Brand identity & design"],
      ["photo-modeling-sessions", "Photography & art direction"],
    ],
    description:
      "Give your business a recognisable identity, from the first impression to the smallest detail.",
  },
  web: {
    title: "Web & product",
    icon: Braces,
    items: [
      ["web-development", "Websites & e-commerce"],
      ["saas-development", "SaaS & mobile products"],
    ],
    description:
      "Turn complex ideas into fast websites and digital products your customers can use with confidence.",
  },
  automation: {
    title: "AI & automation",
    icon: Workflow,
    items: [
      ["automation-ai-workflows", "AI workflows & integrations"],
      ["business-consulting", "Operations consulting"],
    ],
    description:
      "Connect your existing tools and simplify the repetitive work behind sales, support, and delivery.",
  },
  growth: {
    title: "Marketing & growth",
    icon: AudioLines,
    items: [
      ["marketing-growth", "Acquisition & conversion"],
      ["social-media-management", "Social media management"],
    ],
    description:
      "Reach the right people with focused campaigns, original content, and clear reporting.",
  },
};

export function AgencyHomepage() {
  return (
    <div className="studio">
      <StudioHeader />
      <main id="main-content">
        <section className="studio-hero" aria-labelledby="hero-title">
          <div className="studio-wrap hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="signal" /> Independent digital agency in
                Tunisia
              </p>
              <h1 id="hero-title">
                Digital with
                <br />
                <em>an edge.</em>
              </h1>
              <p className="hero-description">
                Dynamis Solution designs brands, builds websites and digital
                products, and automates the work behind growing businesses.
              </p>
              <div className="hero-actions">
                <a className="lime-button" href="#portfolio">
                  Explore our work <ArrowDownRight size={18} />
                </a>
                <a className="text-cta" href="#lead-generation">
                  Start a project <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
            <figure
              className="hero-art"
              aria-label="Continuum, a digital form study by Dynamis"
            >
              <div className="art-grid" aria-hidden="true" />
              <Image
                src="/continuum.webp"
                alt="A sculptural loop of finely ridged chartreuse metal"
                width={1000}
                height={1000}
                priority
                sizes="(max-width: 700px) 92vw, 47vw"
              />
              <i className="register top-left" aria-hidden="true" />
              <i className="register top-right" aria-hidden="true" />
              <i className="register bottom-left" aria-hidden="true" />
              <i className="register bottom-right" aria-hidden="true" />
              <figcaption>
                <span>Continuum</span> / Form study
              </figcaption>
            </figure>
          </div>
        </section>
        <div className="client-band">
          <div className="studio-wrap client-inner">
            <span className="client-caption">
              Selected clients <br />
              &amp; collaborators
            </span>
            <ul>
              {clients.map((client) => (
                <li key={client.mark} className={`client-logo ${client.style}`}>
                  <Image
                    src={`/${client.mark}-ink.png`}
                    width={50}
                    height={38}
                    alt={client.style === "casa" ? client.name : ""}
                  />
                  {client.style !== "casa" && <span>{client.name}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section className="work-section light-section" id="portfolio">
          <div className="studio-wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">
                  <span className="dash" />
                  Portfolio
                </p>
                <h2>
                  Selected work<span>.</span>
                </h2>
              </div>
              <p>
                A closer look at the brands and digital experiences we’ve helped
                bring to life.
              </p>
            </div>
            <div className="work-grid">
              {caseStudies.map((project) => (
                <Link
                  className="work-card"
                  href={caseStudyPath(project)}
                  key={project.name}
                >
                  <div className="work-image">
                    <Image
                      src={`/project-${project.image}.webp`}
                      alt=""
                      width={1100}
                      height={550}
                      sizes="(max-width: 700px) 100vw, 48vw"
                    />
                    <div className="work-image-shade" />
                    <span className="project-wordmark">
                      <Image
                        src={`/${project.mark}-ink.png`}
                        alt=""
                        width={44}
                        height={44}
                      />
                      {project.name}
                    </span>
                  </div>
                  <div className="work-meta">
                    {project.discipline}
                    <span /> {project.industry}
                  </div>
                  <div className="project-title">
                    <h3>{project.name}</h3>
                    <ArrowRight aria-hidden="true" size={25} />
                  </div>
                  <p>{project.description}</p>
                </Link>
              ))}
            </div>
            <details className="more-work">
              <summary>
                More projects <Plus size={18} />
              </summary>
              <div className="more-grid">
                {projects.map((project) => (
                  <article key={project.name}>
                    <p className="work-meta">{project.category}</p>
                    <h3>
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noreferrer">
                          {project.name} <ArrowUpRight size={18} />
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                    <p>{project.description}</p>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>
        <section className="expertise-section" id="services">
          <div className="studio-wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">
                  <span className="dash" />
                  Expertise
                </p>
                <h2>
                  What we do<span>.</span>
                </h2>
              </div>
              <p>
                From your first brand identity to the systems behind a growing
                business.
              </p>
            </div>
            <div className="expertise-grid">
              {services.map((service) => {
                const {
                  title,
                  icon: Icon,
                  items,
                  description,
                } = expertise[service.key];
                return (
                  <article key={title}>
                    <Icon size={29} strokeWidth={1.4} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul>
                      {items.map(([id, item]) => (
                        <li id={id} key={id}>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      className="service-link"
                      href={servicePath(service.en)}
                    >
                      {service.en.label} <ArrowRight size={14} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className="approach-section light-section" id="process">
          <div className="studio-wrap approach-layout">
            <div id="why-dynamis">
              <p className="eyebrow">
                <span className="dash" />
                Our approach
              </p>
              <h2>
                One team,
                <br />
                <em>start to finish.</em>
              </h2>
              <p>
                Work directly with the people shaping your brand, designing the
                experience, and writing the code.
              </p>
              <Link className="text-cta" href="/about">
                Meet the agency <ArrowRight size={16} />
              </Link>
            </div>
            <ol>
              {[
                [
                  "Discover",
                  "We map your customers’ needs, agree on what success looks like, and define the scope together.",
                ],
                [
                  "Design & build",
                  "You see prototypes and working builds as we go, with room to test ideas and refine the details.",
                ],
                [
                  "Launch & refine",
                  "We test the release, hand over the tools, and use real customer feedback to plan what comes next.",
                ],
              ].map(([title, description], index) => (
                <li key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="contact-section" id="lead-generation">
          <div className="studio-wrap contact-layout">
            <div>
              <p className="eyebrow">
                <span className="signal" />
                Project enquiries
              </p>
              <h2>
                Let’s make
                <br />
                <em>it happen.</em>
              </h2>
              <p>
                Tell us what you’re building, what needs to change, or where
                you’d like to begin.
              </p>
              <a
                className="direct-mail"
                href="mailto:contact@dynamissolution.tn"
              >
                contact@dynamissolution.tn <ArrowUpRight size={17} />
              </a>
              <div className="contact-links">
                <a
                  href="https://calendly.com/adambhedj13/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a call <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://wa.me/21690053729"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
              <p className="location">
                <Globe2 size={15} /> Based in Tunisia
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <StudioFooter />
    </div>
  );
}
