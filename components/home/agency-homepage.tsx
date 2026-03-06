"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  Globe,
  LayoutDashboard,
  Layers3,
  Menu,
  MessageCircle,
  MessageSquare,
  Orbit,
  Palette,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Star,
  TrendingUp,
  Workflow,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/home/contact-form";
import { Reveal, SectionIntro, WaveDivider } from "@/components/home/reveal";
import { cn } from "@/lib/utils";

const HeroScene = dynamic(
  () => import("@/components/home/hero-scene").then((module) => module.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(87,199,255,0.14),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(126,92,255,0.16),_transparent_30%)]" />
    ),
  },
);

const bookingLink = "https://calendly.com/adambhedj13/30min";
const whatsappLink = "https://wa.me/21690053729";

type Service = {
  id: string;
  title: string;
  shortLabel: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  outcomes: string[];
  statLabel: string;
  statValue: string;
  gradient: string;
  tint: string;
  chipClass: string;
};

const services: Service[] = [
  {
    id: "automation-ai-workflows",
    title: "Automation & AI Workflows",
    shortLabel: "AI Systems",
    icon: Bot,
    description:
      "We design AI-assisted workflows, internal copilots, and operational automations that remove repetitive work and speed up decision-making.",
    benefits: [
      "Automated lead routing, qualification, and follow-up",
      "AI copilots for support, sales, and operations",
      "Workflow orchestration across your existing stack",
    ],
    outcomes: ["Operational leverage", "Lower manual overhead", "Faster response cycles"],
    statLabel: "hours saved per month",
    statValue: "120+",
    gradient: "from-cyan-400/25 via-sky-400/10 to-transparent",
    tint: "shadow-cyan-500/20",
    chipClass: "border-cyan-400/20 bg-cyan-400/10 text-cyan-100",
  },
  {
    id: "web-development",
    title: "Web Development",
    shortLabel: "Web Platforms",
    icon: Globe,
    description:
      "High-converting marketing sites, custom web apps, and performance-first digital experiences engineered for trust and conversion.",
    benefits: [
      "Premium interfaces tuned for lead generation",
      "Fast, SEO-ready builds on modern frontend architecture",
      "CMS, analytics, and CRM integrations built in",
    ],
    outcomes: ["Stronger conversion", "Sharper positioning", "Scalable frontend foundation"],
    statLabel: "core pages optimized",
    statValue: "30+",
    gradient: "from-violet-400/25 via-fuchsia-400/10 to-transparent",
    tint: "shadow-violet-500/20",
    chipClass: "border-violet-400/20 bg-violet-400/10 text-violet-100",
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    shortLabel: "Product Build",
    icon: LayoutDashboard,
    description:
      "We take SaaS products from concept to launch with clear system architecture, polished dashboards, and a roadmap that supports growth.",
    benefits: [
      "Multi-tenant architecture and secure access design",
      "Admin panels, usage flows, billing, and dashboards",
      "Roadmaps focused on launch speed and retention",
    ],
    outcomes: ["Faster launch cycles", "Investor-ready product", "Clear product roadmap"],
    statLabel: "launch systems delivered",
    statValue: "12",
    gradient: "from-sky-400/25 via-blue-400/10 to-transparent",
    tint: "shadow-sky-500/20",
    chipClass: "border-sky-400/20 bg-sky-400/10 text-sky-100",
  },
  {
    id: "marketing-growth",
    title: "Marketing & Growth",
    shortLabel: "Growth Engine",
    icon: TrendingUp,
    description:
      "We align acquisition, conversion, and retention around a measurable growth system, not isolated campaigns.",
    benefits: [
      "Growth funnels with CRO-focused landing pages",
      "Campaign systems tied to real business KPIs",
      "Reporting dashboards for visibility and iteration",
    ],
    outcomes: ["Qualified pipeline", "Cleaner CAC tracking", "Better conversion velocity"],
    statLabel: "funnels reworked",
    statValue: "25+",
    gradient: "from-emerald-400/25 via-lime-400/10 to-transparent",
    tint: "shadow-emerald-500/20",
    chipClass: "border-emerald-400/20 bg-emerald-400/10 text-emerald-100",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    shortLabel: "Social Systems",
    icon: MessageSquare,
    description:
      "Content systems, monthly planning, and channel execution built to keep brand presence sharp and consistent.",
    benefits: [
      "Editorial calendars and content pillars",
      "Creative formats tuned for reach and engagement",
      "Coordination between paid, organic, and website touchpoints",
    ],
    outcomes: ["Consistent publishing", "Better engagement", "Clear content pipeline"],
    statLabel: "monthly assets coordinated",
    statValue: "80+",
    gradient: "from-pink-400/25 via-rose-400/10 to-transparent",
    tint: "shadow-pink-500/20",
    chipClass: "border-pink-400/20 bg-pink-400/10 text-pink-100",
  },
  {
    id: "branding-design",
    title: "Branding & Design",
    shortLabel: "Brand System",
    icon: Palette,
    description:
      "Identity systems, interface design, and visual direction that make your company feel credible at premium price points.",
    benefits: [
      "Positioning-led visual identity and messaging",
      "Design systems for product and marketing consistency",
      "Launch kits for decks, pages, and campaigns",
    ],
    outcomes: ["Clearer premium positioning", "Reusable design system", "Stronger trust signals"],
    statLabel: "brand systems created",
    statValue: "18",
    gradient: "from-amber-300/25 via-orange-400/10 to-transparent",
    tint: "shadow-orange-500/20",
    chipClass: "border-orange-300/20 bg-orange-300/10 text-orange-100",
  },
  {
    id: "photo-modeling-sessions",
    title: "Photo & Modeling Sessions",
    shortLabel: "Content Production",
    icon: Camera,
    description:
      "Campaign-ready studio sessions and product imagery that elevate launches, ads, and social content with premium visual polish.",
    benefits: [
      "Creative direction for commercial and social assets",
      "Shot planning aligned with campaigns and offers",
      "Edited assets prepared for web, ads, and print",
    ],
    outcomes: ["Sharper campaign assets", "Faster launch preparation", "More premium presentation"],
    statLabel: "campaign visuals produced",
    statValue: "300+",
    gradient: "from-fuchsia-300/25 via-purple-400/10 to-transparent",
    tint: "shadow-fuchsia-500/20",
    chipClass: "border-fuchsia-300/20 bg-fuchsia-300/10 text-fuchsia-100",
  },
  {
    id: "business-consulting",
    title: "Business Consulting",
    shortLabel: "Strategic Advisory",
    icon: BriefcaseBusiness,
    description:
      "We translate strategy into execution plans across process design, digital transformation, and service packaging.",
    benefits: [
      "Offer refinement and delivery model optimization",
      "Digital transformation roadmaps across teams",
      "Operational systems for sales, service, and reporting",
    ],
    outcomes: ["Clearer execution plan", "Better operational structure", "Sharper strategic focus"],
    statLabel: "growth roadmaps shipped",
    statValue: "20+",
    gradient: "from-blue-300/25 via-slate-300/10 to-transparent",
    tint: "shadow-blue-500/20",
    chipClass: "border-blue-300/20 bg-blue-300/10 text-blue-100",
  },
];

const projects = [
  {
    title: "Nexus Academy",
    category: "Web Development",
    image: "/logo-nexus.webp",
    summary:
      "A modern learning platform designed to improve trust, navigation, and conversion for a Tunisian education brand.",
    results: "Sharper product positioning and a faster sign-up journey.",
    href: "https://nexusacademy.academy",
    tags: ["Next.js", "Conversion UX", "Platform Design"],
  },
  {
    title: "Moutouri",
    category: "Marketplace Experience",
    image: "/moutouri_logo.webp",
    summary:
      "A marketplace presence for motorbike discovery with a cleaner mobile flow and stronger commercial credibility.",
    results: "Improved mobile browsing and a more polished acquisition surface.",
    href: "https://moutouri.tn",
    tags: ["Marketplace", "Responsive UI", "Lead Flow"],
  },
  {
    title: "MFAI",
    category: "Product Platform",
    image: "/mfai.webp",
    summary:
      "A product-facing experience for a web3 company that required a modern interface and clearer technical story.",
    results: "A stronger product narrative for prospects and partners.",
    href: "https://www.mfai.app/",
    tags: ["SaaS UX", "Modern Frontend", "Technical Branding"],
  },
  {
    title: "Casa Pasta",
    category: "Content & Growth",
    image: "/casapasta-logo.webp",
    summary:
      "Content production and social execution built to increase visibility for a hospitality brand.",
    results: "Higher engagement and more consistent campaign assets.",
    href: "https://www.instagram.com/casapastabar/",
    tags: ["Content Strategy", "Social Media", "Brand Presence"],
  },
  {
    title: "Pizzarium",
    category: "Content & Social",
    image: "/pizzarium-logo.webp",
    summary:
      "A content system tailored to restaurant launches, promotions, and evergreen social storytelling.",
    results: "Improved consistency across social touchpoints and promotional pushes.",
    href: "https://www.instagram.com/pizzariumtunisie/",
    tags: ["Creative Direction", "Social Assets", "Retention"],
  },
  {
    title: "Tun-GPT",
    category: "AI Experience",
    image: "/logo-tun.webp",
    summary:
      "An AI-first concept focused on always-on support and automation opportunities for local businesses.",
    results: "Clearer use-case communication for AI adoption conversations.",
    href: "#lead-generation",
    tags: ["AI Workflows", "UX Strategy", "Automation"],
  },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "We audit your market, goals, current stack, and customer journey to identify leverage points.",
    icon: Orbit,
  },
  {
    title: "Strategy",
    description:
      "We define the offer, positioning, scope, and roadmap so execution is tied to measurable outcomes.",
    icon: BrainCircuit,
  },
  {
    title: "Development",
    description:
      "Design, systems, content, and engineering move in parallel through a focused delivery process.",
    icon: Workflow,
  },
  {
    title: "Launch",
    description:
      "We ship with analytics, QA, handoff documentation, and launch support already integrated.",
    icon: Rocket,
  },
  {
    title: "Growth",
    description:
      "Post-launch, we iterate based on performance signals, automation opportunities, and new experiments.",
    icon: BarChart3,
  },
];

const stats = [
  { value: 48, suffix: "+", label: "projects delivered" },
  { value: 32, suffix: "+", label: "clients served" },
  { value: 1400, suffix: "+", label: "automation hours saved" },
];

const valueProps = [
  {
    title: "Strategy and execution in one team",
    description:
      "You are not coordinating separate freelancers for branding, product, website, content, and automation.",
    icon: Layers3,
  },
  {
    title: "Built for premium conversion",
    description:
      "Every section is designed to reduce friction, frame value clearly, and push qualified leads into conversation.",
    icon: BadgeCheck,
  },
  {
    title: "Modern stack, practical delivery",
    description:
      "We use current tools where they create leverage and stay disciplined about performance, maintainability, and clarity.",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    quote:
      "Dynamis gave our brand the level of polish we needed to speak to bigger clients with confidence.",
    author: "Hospitality Brand Founder",
    role: "Content & Growth",
  },
  {
    quote:
      "The team moved fast, clarified the scope, and shipped something that immediately felt more credible than our old site.",
    author: "Startup Operator",
    role: "Web Platform",
  },
  {
    quote:
      "They understood both the business angle and the technical delivery, which made decision-making much easier.",
    author: "SaaS Co-Founder",
    role: "Product Build",
  },
  {
    quote:
      "What stood out was the systems thinking. It was not just design, it was how the whole acquisition flow worked together.",
    author: "Growth Lead",
    role: "Marketing & Automation",
  },
];

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Why Dynamis", href: "#why-dynamis" },
  { label: "Contact", href: "#lead-generation" },
];

function AnimatedCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.55 });
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (reduceMotion) {
      setDisplayValue(value);
      return;
    }

    let frame = 0;
    const duration = 1200;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [isInView, reduceMotion, value]);

  return (
    <div ref={ref} className="glass-panel p-6">
      <div className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
        {displayValue}
        {suffix}
      </div>
      <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
    </div>
  );
}

function ServiceVisual({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ rotateX: -2, rotateY: index % 2 === 0 ? 4 : -4, y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "glass-panel relative overflow-hidden p-6 shadow-2xl shadow-black/30 sm:p-8",
        service.tint,
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-100", service.gradient)} />
      <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="relative space-y-6">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-xs uppercase tracking-[0.24em]",
              service.chipClass,
            )}
          >
            {service.shortLabel}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 p-3 text-white">
            <Icon className="h-5 w-5" />
          </span>
        </div>

        <div className="grid gap-3">
          {service.benefits.map((benefit, benefitIndex) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0.45, x: 0 }}
              animate={{ opacity: [0.55, 1, 0.55], x: [0, 10, 0] }}
              transition={{
                duration: 5 + benefitIndex,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
            >
              {benefit}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {service.outcomes.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center text-xs uppercase tracking-[0.18em] text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{service.statLabel}</p>
          <div className="mt-2 flex items-end justify-between">
            <strong className="text-3xl font-semibold tracking-[-0.05em] text-white">
              {service.statValue}
            </strong>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <TrendingUp className="h-4 w-4 text-emerald-300" />
              system uplift
            </div>
          </div>
          <div className="mt-4 h-24 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3">
            <svg viewBox="0 0 260 80" className="h-full w-full">
              <defs>
                <linearGradient id={`service-line-${service.id}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7dd3fc" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
              <path
                d="M0 62C24 60 35 42 55 40C75 38 84 58 108 55C132 52 140 18 164 17C188 16 196 50 218 48C235 46 242 30 260 8"
                fill="none"
                stroke={`url(#service-line-${service.id})`}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="164" cy="17" r="6" fill="#7dd3fc" />
              <circle cx="260" cy="8" r="6" fill="#a78bfa" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FloatingBadge({
  icon: Icon,
  title,
  text,
  className,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn("glass-panel w-full max-w-xs p-4", className)}
    >
      <div className="flex items-center gap-3">
        <span className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-cyan-200">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="text-sm text-slate-400">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

function BrandLockup({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_12px_40px_rgba(2,6,23,0.35)]",
          compact ? "h-11 w-11" : "h-12 w-12",
        )}
      >
        <Image
          src="/webmobile.webp"
          alt="Dynamis logo"
          fill
          sizes={compact ? "44px" : "48px"}
          className="object-cover"
          priority
        />
      </div>
      <div className="min-w-0 leading-tight">
        <span className="block text-sm uppercase tracking-[0.3em] text-slate-400">
          Dynamis
        </span>
        <span className="block text-base font-semibold tracking-[0.04em] text-white">
          Solution
        </span>
      </div>
    </div>
  );
}

export function AgencyHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const duplicatedTestimonials = useMemo(() => [...testimonials, ...testimonials], []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.13),_transparent_28%),radial-gradient(circle_at_20%_30%,_rgba(168,85,247,0.12),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.08),_transparent_25%),linear-gradient(180deg,_#07101f_0%,_#050816_48%,_#02040b_100%)]" />
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[18rem] h-72 w-72 rounded-full bg-violet-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sky-500/10 blur-[150px]" />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition duration-300",
            scrolled
              ? "border-white/12 bg-slate-950/70 shadow-[0_18px_60px_rgba(2,6,23,0.5)] backdrop-blur-xl"
              : "border-white/[0.08] bg-white/5 backdrop-blur-md",
          )}
        >
          <Link href="/" className="shrink-0">
            <BrandLockup compact />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              asChild
              variant="ghost"
              className="rounded-full border border-white/10 bg-white/5 px-5 text-white hover:bg-white/10"
            >
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 px-5 text-slate-950 hover:opacity-95"
            >
              <a href={bookingLink} target="_blank" rel="noreferrer">
                Book a Call
              </a>
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl border border-white/[0.06] bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-100"
              >
                Book a strategy call
              </a>
            </div>
          </motion.div>
        ) : null}
      </header>

      <main id="main-content">
        <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-32 lg:pt-36">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative z-10">
              <Reveal className="space-y-8">
<br></br>
                <div className="space-y-6">
                  <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                    Dynamis Solution builds premium digital systems that turn attention
                    into revenue.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                    We combine automation, product development, growth strategy, and
                    premium design to help companies modernize faster and sell with
                    more authority.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 px-7 text-base text-slate-950 hover:shadow-[0_0_40px_rgba(56,189,248,0.45)]"
                  >
                    <a href={bookingLink} target="_blank" rel="noreferrer">
                      Book a Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-white/12 bg-white/5 px-7 text-base text-white hover:bg-white/10"
                  >
                    <Link href="#services">
                      See Our Services
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    "High-end visual identity",
                    "Conversion-first architecture",
                    "Automation and growth systems",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                    >
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal className="relative">
              <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
                <div className="relative aspect-[0.96] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07101f]">
                  <HeroScene />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%),linear-gradient(180deg,_transparent_0%,_rgba(2,6,23,0.22)_100%)]" />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              { icon: PhoneCall, title: "Fast qualification", text: "Book directly into a strategy call." },
              { icon: Clock3, title: "Response within 24h", text: "Clear next steps, scope fit, and timeline." },
              { icon: Star, title: "Premium positioning", text: "Designed to attract higher-value clients." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="h-full">
                <div className="glass-panel flex h-full flex-col items-start gap-4 p-5 sm:p-6">
                  <span className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-cyan-200 sm:p-4">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 space-y-2">
                    <p className="text-lg font-medium leading-tight text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <WaveDivider />
        </section>

        <section id="services" className="relative scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Services"
              title="A full-stack digital transformation offer, packaged for growth."
              description="Each service is built as a high-trust entry point into a broader system: positioning, product, marketing, automation, and long-term business leverage."
              align="center"
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal key={service.id} delay={index * 0.05}>
                    <motion.div
                      whileHover={{ y: -8, rotateX: -3, rotateY: 4 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="glass-panel relative h-full overflow-hidden p-6"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-100", service.gradient)} />
                      <div className="relative flex h-full flex-col">
                        <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white">
                          <Icon className="h-6 w-6" />
                        </span>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {service.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
                        <div className="mt-6 space-y-3">
                          {service.outcomes.map((outcome) => (
                            <div key={outcome} className="flex items-center gap-3 text-sm text-slate-200">
                              <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={`#${service.id}`}
                          className="mt-8 inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-white"
                        >
                          Explore service
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-20 space-y-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                const reversed = index % 2 === 1;

                return (
                  <section
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-28 rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8 lg:p-10"
                  >
                    <div
                      className={cn(
                        "grid gap-10 lg:grid-cols-2 lg:items-center",
                        reversed && "lg:[&>*:first-child]:order-2",
                      )}
                    >
                      <Reveal className="space-y-7">
                        <span className={cn("inline-flex rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em]", service.chipClass)}>
                          {service.shortLabel}
                        </span>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <span className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-white">
                              <Icon className="h-6 w-6" />
                            </span>
                            <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                              {service.title}
                            </h3>
                          </div>
                          <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                            {service.description}
                          </p>
                        </div>

                        <div className="grid gap-3">
                          {service.benefits.map((benefit) => (
                            <div
                              key={benefit}
                              className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-slate-950/45 px-4 py-4"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-200" />
                              <span className="text-sm leading-7 text-slate-200">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button
                            asChild
                            className="rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 px-6 text-slate-950"
                          >
                            <a href="#lead-generation">
                              Book a consultation
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          <a
                            href={bookingLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
                          >
                            Schedule call
                          </a>
                        </div>
                      </Reveal>

                      <Reveal delay={0.08}>
                        <ServiceVisual service={service} index={index} />
                      </Reveal>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
          <WaveDivider flip />
        </section>

        <section id="portfolio" className="relative scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Portfolio"
              title="Selected projects built to sharpen trust, engagement, and growth."
              description="A mix of websites, product experiences, and content systems developed for businesses that needed stronger digital positioning."
              align="center"
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.06}>
                  <motion.a
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={{ y: -8 }}
                    className="glass-panel group block overflow-hidden"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} project by Dynamis Solution`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/35 to-transparent" />
                    </div>
                    <div className="space-y-5 p-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                          {project.category}
                        </span>
                        <ExternalLink className="h-4 w-4 text-slate-500 transition group-hover:text-cyan-200" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
                      </div>
                      <p className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-3 text-sm text-cyan-100">
                        {project.results}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="relative scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Process"
              title="A delivery flow designed to keep strategy, design, and execution aligned."
              description="The process is structured to reduce ambiguity, compress decision cycles, and maintain momentum from kickoff to growth."
            />

            <div className="mt-14 grid gap-4 lg:grid-cols-5">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} delay={index * 0.08}>
                    <div className="glass-panel relative h-full p-6">
                      <div className="mb-10 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500">
                          0{index + 1}
                        </span>
                        <span className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="why-dynamis" className="relative scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-8">
                <SectionIntro
                  eyebrow="Why Dynamis"
                  title="Built to help ambitious companies look sharper and operate better."
                  description="We focus on premium presentation, measurable performance, and the systems underneath that make growth sustainable."
                />

                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {stats.map((stat) => (
                    <AnimatedCounter key={stat.label} {...stat} />
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {valueProps.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.08}>
                    <div className="glass-panel flex items-start gap-5 p-6 sm:p-7">
                      <span className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-cyan-200">
                        <item.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Testimonials"
              title="What clients value most is clarity, speed, and polish."
              description="A premium digital partner has to make things easier to understand and faster to ship. That is the standard we optimize for."
              align="center"
            />

            <div className="relative mt-14 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050816] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050816] to-transparent" />
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 26, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="flex w-[200%] gap-5"
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.author}-${index}`}
                    className="glass-panel min-h-[240px] w-full max-w-md flex-none p-6"
                  >
                    <p className="text-lg leading-8 text-white">"{testimonial.quote}"</p>
                    <div className="mt-8 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cyan-200">
                        <MessageCircle className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-medium text-white">{testimonial.author}</p>
                        <p className="text-sm text-slate-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="lead-generation" className="relative scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Lead Generation"
              title="Start Your Digital Transformation"
              description="If you want a site, system, product, or growth engine that feels premium and performs commercially, this is the right place to start."
            />

            <div className="mt-12">
              <ContactForm />
            </div>
          </div>
          <WaveDivider />
        </section>
      </main>

      <footer className="relative px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/[0.08] bg-white/[0.03] px-6 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.9fr]">
            <div className="space-y-5">
              <BrandLockup />
              <p className="max-w-md text-sm leading-7 text-slate-300">
                Premium digital transformation for companies that want stronger
                positioning, modern systems, and a cleaner path from visibility to
                conversion.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Services</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-300">
                {services.slice(0, 4).map((service) => (
                  <Link key={service.id} href={`#${service.id}`} className="transition hover:text-white">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Explore</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-300">
                <Link href="#portfolio" className="transition hover:text-white">
                  Portfolio
                </Link>
                <Link href="#process" className="transition hover:text-white">
                  Process
                </Link>
                <Link href="#why-dynamis" className="transition hover:text-white">
                  Why Dynamis
                </Link>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</p>
              <div className="space-y-3 text-sm text-slate-300">
                <a href="mailto:contact@dynamissolution.tn" className="block transition hover:text-white">
                  contact@dynamissolution.tn
                </a>
                <a href="tel:+21690053729" className="block transition hover:text-white">
                  +216 90 053 729
                </a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-200">
                  WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>(c) 2026 Dynamis Solution. All rights reserved.</p>
            <p>Built for premium lead generation, performance, and scale.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
