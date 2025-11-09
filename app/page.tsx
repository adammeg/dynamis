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

function ContactForm() {
  const [state, action, isPending] = useActionState(
    async (_prevState: { success: boolean; message: string } | null, formData: FormData) => {
      return await submitContactForm(formData);
    },
    null
  );

  return (
    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm text-white animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-white">Start Your Project Today</CardTitle>
        <CardDescription className="text-gray-300">
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="firstName"
              placeholder="First Name"
              required
              disabled={isPending}
              className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 transition-all duration-300"
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              required
              disabled={isPending}
              className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 transition-all duration-300"
            />
          </div>
          <Input
            name="email"
            placeholder="Email Address"
            type="email"
            required
            disabled={isPending}
            className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 transition-all duration-300"
          />
          <Input
            name="company"
            placeholder="Company Name"
            disabled={isPending}
            className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 transition-all duration-300"
          />
          <Textarea
            name="message"
            placeholder="Tell us about your project..."
            className="min-h-[100px] bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 transition-all duration-300"
            required
            disabled={isPending}
          />

          {state && (
            <div
              className={`p-4 rounded-lg animate-fade-in ${state.success
                ? "bg-green-900/30 text-green-300 border border-green-700"
                : "bg-red-900/30 text-red-300 border border-red-700"
                }`}
            >
              {state.message}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  // Development Portfolio - Web, Mobile, Blockchain projects
  const developmentProjects = [
    {
      id: 1,
      title: "Moutouri.tn",
      description: "WebApp for Moutouri.tn, a Tunisian motobikes marketplace.",
      image: "/moutouri_logo.jpg", 
      category: "Web Development",
      technologies: ["React", "Next.js", "TypeScript"],
      liveUrl: "https://moutouri.tn", 
      githubUrl: "#", 
      featured: true,
    },
    {
      id: 2,
      title: "NexusAcademy.academy",
      description: "Website for NexusAcademy.academy, a Tunisian online learning platform.",
      image: "/logo-nexus.png", 
      category: "Web Development",
      technologies: ["React", "Next.js", "TypeScript"],
      liveUrl: "https://nexusacademy.academy", 
      githubUrl: "#", 
      featured: true,
    },
    {
      id: 3,
      title: "TunGPT",
      description: "TunGPT is a Tunisian chatbot that uses the OpenAI API to answer questions and help with tasks.",
      image: "/logo-tun.png", 
      category: "AI Development",
      technologies: ["React", "Next.js", "TypeScript"],
      liveUrl: "https://tunGPT.tn", 
      githubUrl: "#", 
      featured: false,
    },

  ]

  // Marketing Portfolio - Marketing, SEO, Social Media projects
  const marketingProjects = [
    {
      id: 1,
      title: "Moutouri.tn",
      description: "WebApp for Moutouri.tn, a Tunisian motobikes marketplace.",
      image: "/moutouri_logo.jpg", 
      category: "Digital Marketing",
      technologies: ["SEO", "Content Strategy", "Social Media"],
      liveUrl: "https://moutouri.tn", 
      results: "Increased traffic by 150%", 
      featured: true,
    },
    {
      id: 2,
      title: "Pizzarium",
      description: "Content Creation for Pizzarium, a Tunisian pizza restaurant.",
      image: "/pizzarium_logo.jpg", 
      category: "Content Creation",
      technologies: ["Content Creation", "Social Media", "Analytics"],
      liveUrl: "https://www.instagram.com/pizzariumtunisie/", 
      results: "Improved rankings by 200%", 
      featured: false,
    },
    {
      id: 3,
      title: "Casapasta",
      description: "Content Creation for Casapasta, a Tunisian pasta restaurant.",
      image: "/casapasta_logo.jpg", 
      category: "Content Creation",
      technologies: ["Content Creation", "Social Media", "Analytics"],
      liveUrl: "https://www.instagram.com/casapastabar/", 
      results: "Grew followers by 300%", 
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Skip link for accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-gray-800 text-white px-3 py-2 rounded">
        Skip to content
      </a>

      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in-left">
            <div className="relative">
              <Code className="h-8 w-8 text-blue-400 animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 text-blue-400 animate-ping opacity-20">
                <Code className="h-8 w-8" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dynamis Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden md:flex items-center space-x-8 animate-fade-in">
            <Link
              href="#services"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700 animate-slide-down">
            <div className="px-4 py-4 space-y-4">
              <Link href="#services" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Portfolio
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main id="main">
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 animate-bounce-slow">
                  🚀 Transform Your Business Digital Presence
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Leading Marketing Agency & 
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    {" "}
                    Web Development Tunisia
                  </span>
                  <br />
                  Mobile & Blockchain Solutions
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Dynamis Solutions is a premier marketing agency and media agency in Tunisia, specializing in web development, mobile development, and blockchain development. We create custom web applications, mobile apps, and digital marketing strategies that drive growth for Tunisian businesses.
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
                    src="/webmobile.png"
                    alt="Marketing Agency Tunisia - Web Development and Mobile Development Services in Tunisia"
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30">
              Our Portfolio
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Showcasing Our Best Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful development and marketing projects for businesses across Tunisia.
            </p>
          </div>

          {/* Development Projects Section */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in-up">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Code className="h-8 w-8 text-blue-400" />
                Development Projects
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Web development, mobile app development, and blockchain solutions built with cutting-edge technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developmentProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`group bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm overflow-hidden animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category} project by Dynamis Solutions`}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.featured && (
                      <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                        Featured
                      </Badge>
                    )}
                    <Badge className="absolute top-3 left-3 bg-blue-600/80 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-gray-600 text-gray-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {developmentProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  Development projects will be displayed here.
                </p>
              </div>
            )}
          </div>

          {/* Marketing Projects Section */}
          <div>
            <div className="text-center mb-12 animate-fade-in-up">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <TrendingUp className="h-8 w-8 text-purple-400" />
                Marketing Projects
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Successful digital marketing campaigns, SEO strategies, and social media marketing that drive real results for Tunisian businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`group bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm overflow-hidden animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category} campaign by Dynamis Solutions`}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.featured && (
                      <Badge className="absolute top-3 right-3 bg-purple-600 text-white">
                        Featured
                      </Badge>
                    )}
                    <Badge className="absolute top-3 left-3 bg-purple-600/80 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-gray-600 text-gray-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.results && (
                      <div className="mb-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
                        <p className="text-sm text-green-300 font-semibold">
                          Results: {project.results}
                        </p>
                      </div>
                    )}
                    <div className="flex gap-3">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Case Study
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {marketingProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  Marketing projects will be displayed here.
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
              <p className="text-gray-400">Leading marketing agency and media agency in Tunisia. Expert web development, mobile development, and blockchain development services for Tunisian businesses. Serving clients across Tunisia with cutting-edge digital solutions.</p>
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