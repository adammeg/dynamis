"use client"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Carousel } from "@/components/ui/carousel"
import {
  Code,
  Smartphone,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Target,
  Menu,
  X,
  ExternalLink,
  Github,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

// Import the action
import { submitContactForm } from "./actions/contact"
import { language } from "gray-matter"

function ContactForm() {
  const [state, action, isPending] = useActionState(
    async (_prevState: { success: boolean; message: string } | null, formData: FormData) => {
      return await submitContactForm(formData);
    },
    null
  );
const navItems = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "/blog" },
]
 const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  /* Shrink + blur on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Scroll spy */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return (
    <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 border-gray-700/50 backdrop-blur-xl text-white animate-fade-in-up shadow-card-lg hover-lift">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Start Your Project Today</CardTitle>
        <CardDescription className="text-gray-400">
          Share your vision with us. We'll respond within 24 hours with a personalized plan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="firstName"
              placeholder="First Name"
              required
              disabled={isPending}
              className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 rounded-lg"
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              required
              disabled={isPending}
              className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 rounded-lg"
            />
          </div>
          <Input
            name="email"
            placeholder="Email Address"
            type="email"
            required
            disabled={isPending}
            className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 rounded-lg"
          />
          <Input
            name="company"
            placeholder="Company Name (optional)"
            disabled={isPending}
            className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 rounded-lg"
          />
          <Textarea
            name="message"
            placeholder="Tell us about your project... What are your goals and requirements?"
            className="min-h-[120px] bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 rounded-lg resize-none"
            required
            disabled={isPending}
          />

          {state && (
            <div
              className={`p-4 rounded-lg animate-scale-in ${state.success
                ? "bg-green-900/30 text-green-300 border border-green-700/50 flex items-center gap-2"
                : "bg-red-900/30 text-red-300 border border-red-700/50 flex items-center gap-2"
                }`}
            >
              {state.success ? <CheckCircle className="h-5 w-5 flex-shrink-0" /> : <></>}
              {state.message}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-smooth shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed group"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  const navItems = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  {label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  /* Shrink + blur on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Scroll spy */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  // Partners data
  const partnersData = [
    {
      name: "Dar Blockchian",
      logo: "/darblockchain.webp",
      description: ""
    },
    {
      name: "Fondative",
      logo: "/fondative.webp",
      description: ""
    },
    {
      name: "Fame Guild",
      logo: "/fameguild.webp"
    },
    {
      name: "Pantheon",
      logo: "/pantheonmining_logo.webp"
    },
    {
      name: "Trustit",
      logo: "/trusit.webp"
    },
  ]

  // Portfolio data - Your actual projects
  const portfolioItems = [
    {
      id: 1,
      title: "Casa Pasta",
      description: "Content Creation for Casa Pasta, a Tunisian pasta restaurant.",
      image: "/casapasta-logo.webp",
      category: "Content Creation",
      technologies: ["Instagram", "Facebook", "Content Creation"],
      impact: "Grew brand visibility and engagement for a fast-growing Tunisian restaurant.",
      liveUrl: "https://www.instagram.com/casapastabar/", 
      githubUrl: "#", 
      featured: true,
    },
    {
      id: 2,
      title: "Nexus",
      description: "Website for Nexus, a Tunisian online learning platform.",
      image: "/logo-nexus.webp",
      category: "Web Development",
      technologies: ["React", "Next.js", "Node.js"],
      impact: "Improved course sign-ups with a high-converting, fast web experience.",
      liveUrl: "https://nexusacademy.academy", 
      githubUrl: "#", // Add your GitHub URL if applicable
      featured: true,
    },
    {
      id: 3,
      title: "Tun-GPT",
      description: "AI Chatbot for Tunisian businesses.",
      image: "/logo-tun.webp",
      category: "AI Development",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      impact: "Enabled Tunisian businesses to provide 24/7 automated support.",
      liveUrl: "#", // Add your live project URL
      githubUrl: "#", // Add your GitHub URL if applicable
      featured: true,
    },
    {
      id: 4,
      title: "Moutouri",
      description: "Motobikes marketplace website for Moutouri.tn, a Tunisian motobikes marketplace.",
      image: "/moutouri_logo.webp",
      category: "Web Development",
      technologies: ["Next.js", "React", "TypeScript"],
      impact: "Delivered a modern, mobile-friendly marketplace for motorbike buyers.",
      liveUrl: "https://moutouri.tn", 
      githubUrl: "#", // Add your GitHub URL if applicable
      featured: false,
    },
    {
      id: 5,
      title: "Pizzarium",
      description: "Content Creation for Pizzarium, a Tunisian pizza restaurant.",
      image: "/pizzarium-logo.webp",
      category: "Content Creation",
      technologies: ["Instagram", "Facebook", "Content Creation"],
      impact: "Boosted online orders with consistent, high-quality content.",
      liveUrl: "https://www.instagram.com/pizzariumtunisie/", 
      githubUrl: "#", 
      featured: false,
    },
    {
      id: 6,
      title: "MFAI",
      description: "web3 development for MFAI, a web3 development company.",
      image: "/mfai.webp",
      category: "Web3 Development",
      technologies: [ "Next.js", "Node.js", "solana"],
      impact: "Delivered a modern, platform web3 platform for MFAI.",
      liveUrl: "https://www.mfai.app/", 
      githubUrl: "#", // Add your GitHub URL if applicable
      featured: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Animated Background - Professional Gradient Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Skip link for accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
        Skip to content
      </a>

      {/* Header */}
<header className="fixed inset-x-0 top-0 z-50 h-16">
      <div className={`mx-auto max-w-7xl px-4 lg:px-8 transition-colors duration-300 ${scrolled ? 'bg-gray-900/78 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}>
        <div className={`flex items-center justify-between h-16 transition-transform duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md transition group-hover:scale-105">
              <Code className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-semibold text-white">
                Dynamis
              </span>
              <span className="block text-[11px] uppercase tracking-widest text-gray-400">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => {
              const isActive = active === item.href.replace('#', '')
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-200 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <br />
          <div className="flex items-center gap-3">
            <Link href="#contact" className="hidden sm:block">
              <Button className="h-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-sm font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-indigo-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            {/* Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              className="lg:hidden rounded-lg p-2 text-gray-300 transition hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (slides down) */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-16 z-40 rounded-xl border border-white/10 bg-gray-900/95 backdrop-blur-sm shadow-xl transform origin-top animate-slide-down">
          <div className="p-3">
            {[...navItems, { label: 'Contact', href: '#contact' }].map(item => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>


      {/* Hero Section */}
      <br />
      <br />
      <main id="main">
      <section className="py-24 lg:py-40 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 px-4 py-2">
                  🚀 Digital Transformation in Tunisia
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  Leading 
                  <span className="block">
                    Marketing & Web
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-black">
                    Development Agency
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl">
                  We craft cutting-edge digital solutions for Tunisian businesses. From responsive websites to AI-powered applications, we transform your vision into reality.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Link href="#contact">Start Your Project</Link>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  <Link href="#portfolio">View Our Work</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center animate-fade-in-up animation-delay-200">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center animate-fade-in-up animation-delay-400">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center animate-fade-in-up animation-delay-600">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-gray-700 transform hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/webmobile.webp"
                    alt="Dynamis Solutions - Marketing and web development agency in Tunisia"
                    width={500}
                    height={400}
                    priority
                    sizes="(min-width: 1024px) 500px, 100vw"
                    className="rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full animate-float animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800/50 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Complete Digital Solutions for Tunisian Businesses</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a leading marketing agency and media agency in Tunisia, we provide comprehensive web development, mobile development, blockchain development, and digital marketing services that drive growth and engagement for businesses across Tunisia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Web Development Tunisia",
                description: "Professional web development services in Tunisia. Custom web applications built with React, Next.js, and Node.js for Tunisian businesses",
                features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure & Scalable"],
                delay: "0",
              },
              {
                icon: Smartphone,
                title: "Mobile Development Tunisia",
                description: "Expert mobile app development in Tunisia. Native and cross-platform mobile applications for iOS and Android",
                features: ["iOS & Android", "React Native", "App Store Deployment", "Push Notifications"],
                delay: "200",
              },
              {
                icon: TrendingUp,
                title: "Marketing Agency Services",
                description: "Leading marketing agency in Tunisia offering comprehensive digital marketing strategies to boost your online presence and drive conversions",
                features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
                delay: "400",
              },
              {
                icon: Code,
                title: "Blockchain Development Tunisia",
                description: "Cutting-edge blockchain development services in Tunisia. Smart contracts, DApps, and blockchain solutions for your business",
                features: ["Smart Contracts", "DApp Development", "Blockchain Consulting", "DeFi Solutions"],
                delay: "600",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Speed up your applications and improve user experience with our optimization services",
                features: ["Speed Optimization", "Database Tuning", "CDN Integration", "Monitoring Setup"],
                delay: "800",
              },
              {
                icon: Shield,
                title: "Security & Maintenance",
                description: "Keep your applications secure and up-to-date with our maintenance services",
                features: ["Security Audits", "Regular Updates", "Backup Solutions", "24/7 Monitoring"],
                delay: "1000",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm animate-fade-in-up`}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-400 mb-4 animate-pulse" />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Horizontal Right-to-Left Scrolling */}
      <section id="portfolio" className="py-24 bg-gray-900 relative">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Soft gradient shell behind the carousel */}
          <div className="absolute inset-x-0 -z-10 h-[420px] -top-10 opacity-40">
            <div className="mx-auto h-full max-w-6xl rounded-3xl bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-gray-900/20 blur-3xl" />
          </div>
          <div className="text-center space-y-3 mb-10 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30">
              Our Portfolio
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Results for Tunisian Brands & Startups
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore real projects where we combined strategy, design, and technology to create measurable business results.
            </p>
          </div>

          <div className="relative mt-4 rounded-3xl bg-gray-900/70 border border-white/5 shadow-[0_0_60px_rgba(15,23,42,0.9)] px-3 sm:px-5 py-6">
            {/* Scroll hint */}
            <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
              <span className="uppercase tracking-[0.2em] text-[10px] text-gray-500">
                Selected case studies
              </span>
              <span className="flex items-center gap-2">
                <span className="hidden sm:inline">Scroll horizontally to discover our projects</span>
                <span className="inline-flex h-6 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800/60 text-[10px] text-gray-300">
                  ← →
                </span>
              </span>
            </div>

            <div className="group/scroll relative">
              {/* Gradient fade edges for a polished carousel look */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-900 via-gray-900/60 to-transparent" />
              <div
                dir="rtl"
                className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900/60"
              >
                {portfolioItems.map((project, index) => (
                  <Card
                    key={project.id}
                    className={`relative min-w-[280px] sm:min-w-[320px] ${
                      project.featured ? 'lg:min-w-[420px]' : 'lg:min-w-[360px]'
                    } max-w-xs overflow-hidden snap-start rounded-2xl border border-gray-700/70 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-slate-900/90 shadow-xl shadow-black/40 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/80 hover:shadow-[0_25px_70px_rgba(37,99,235,0.45)]`}
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <div className="relative overflow-hidden bg-gray-800">
                      <div className="aspect-[16/10] w-full relative">
                        <Image
                          src={project.image}
                      alt={`${project.title} – ${project.category} project by Dynamis Solutions`}
                          fill
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 360px"
                          className="object-cover transition-transform duration-700 group-hover/scroll:scale-110 group-hover/scroll:rotate-[-1deg]"
                          quality={90}
                          loading={index < 3 ? "eager" : "lazy"}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                      {project.featured && (
                        <Badge className="absolute top-4 right-4 bg-blue-600 text-white shadow-lg">
                          Featured
                        </Badge>
                      )}
                      <Badge className="absolute top-4 left-4 bg-purple-600/90 text-white backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="mb-1 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-gray-500">
                        <span>{project.category}</span>
                        {project.featured && (
                          <span className="rounded-full bg-blue-600/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                            Featured case
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-xl text-white">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-sm text-gray-400 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      {project.impact && (
                        <p className="mt-3 text-sm text-blue-300 font-medium">
                          Result: <span className="text-blue-200">{project.impact}</span>
                        </p>
                      )}
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-gray-600 text-gray-400 bg-gray-800/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-2 border-t border-gray-700">
                        {project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Project
                          </a>
                        )}
                        {project.githubUrl !== "#" && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            Source Code
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {portfolioItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  Portfolio items will be displayed here. Add your projects to showcase your work.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tunisia Location Section */}
      <section className="py-16 bg-gray-800/30 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Serving Businesses Across Tunisia
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              As a leading <strong>marketing agency in Tunisia</strong> and <strong>media agency in Tunis</strong>, we specialize in <strong>web development Tunisia</strong>, <strong>mobile development Tunisia</strong>, and <strong>blockchain development Tunisia</strong>. Whether you're in Tunis, Sfax, Sousse, or anywhere across Tunisia, we deliver world-class digital solutions tailored for the Tunisian market.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                Marketing Agency Tunis
              </Badge>
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 px-4 py-2">
                Web Development Tunisia
              </Badge>
              <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                Mobile Development Tunisia
              </Badge>
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 px-4 py-2">
                Blockchain Development Tunisia
              </Badge>
              <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                Media Agency Tunisia
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Tunisia's Premier Marketing Agency & Web Development Partner</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
              As a trusted marketing agency and media agency in Tunisia, we combine expertise in web development, mobile development, and blockchain development to deliver exceptional results for Tunisian businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-left">
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  description:
                    "Our team of experienced developers and marketers brings years of expertise to every project.",
                },
                {
                  icon: Zap,
                  title: "Fast Delivery",
                  description: "We use agile methodologies to deliver high-quality solutions quickly and efficiently.",
                },
                {
                  icon: Shield,
                  title: "Quality Assurance",
                  description:
                    "Rigorous testing and quality control ensure your applications are bug-free and performant.",
                },
                {
                  icon: Target,
                  title: "Results-Driven",
                  description: "We focus on delivering measurable results that directly impact your business growth.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 animate-fade-in-left`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2 mt-1 animate-pulse">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-gray-700 animate-fade-in-right">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your project and how we can help you achieve your business goals.
              </p>
              <div className="space-y-4">
                {["Free consultation call", "Custom project proposal", "No obligation quote"].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://calendly.com/adambhedj13/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 mb-4">
                  Get In Touch
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business in Tunisia?</h2>
                <p className="text-gray-300 text-lg">
                  Whether you need web development, mobile development, blockchain development, or marketing agency services, we're here to help your Tunisian business grow. Let's discuss your project and create a solution that drives real results.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Users, text: "contact@dynamis.com" },
                  { icon: Smartphone, text: "+216 90 053 729" },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 animate-fade-in-left`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2 animate-pulse">
                      <contact.icon className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 border-t border-gray-700">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-blue-400 animate-pulse" />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Dynamis Solutions
                </span>
              </div>
              <p className="text-gray-400">Dynamis Solutions est une agence digitale Tunisie agence marketing digital Tunisie, agence web Tunisie et agence communication digitale. Nous réalisons la création site web (vitrine & e-commerce), développement web sur mesure, référencement naturel (SEO) et gestion réseaux sociaux pour entreprises et startups en Tunisie.</p>
            </div>

            {[
              {
                title: "Services",
                links: ["Web Development Tunisia", "Mobile Development Tunisia", "Blockchain Development Tunisia", "Marketing Agency Tunisia"],
              },
              {
                title: "Company",
                links: ["About Us", "Portfolio", "Careers", "Contact"],
              },
              {
                title: "Resources",
                links: ["Blog", "Case Studies", "Documentation", "Support"],
              },
            ].map((section, index) => (
              <div key={index} className={`animate-fade-in-up`} style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                <h3 className="font-semibold mb-4 text-white">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="hover:text-blue-400 transition-colors duration-300">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 animate-fade-in">
            <p>&copy; 2025 Dynamis Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  )
}