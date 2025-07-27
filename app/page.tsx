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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

// Import the action
import { submitContactForm } from "./actions/contact"

function ContactForm() {
  // Fix: useActionState expects a reducer function, not an action.
  // We'll define a reducer that calls submitContactForm with the form data.
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

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
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in">
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
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 animate-bounce-slow">
                  🚀 Transform Your Business Digital Presence
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Build Powerful
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    {" "}
                    Web & Mobile Apps
                  </span>
                  <br />
                  That Drive Results
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We create custom web applications and mobile apps that boost your business growth with robust
                  marketing strategies. From concept to launch, we deliver solutions that convert visitors into
                  customers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  View Our Work
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
                    src="/webmobile.png?height=400&width=500"
                    alt="Web and Mobile Development"
                    width={500}
                    height={400}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Complete Digital Solutions for Your Business</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From web development to mobile apps and marketing strategies, we provide end-to-end solutions that drive
              growth and engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Web Application Development",
                description: "Custom web applications built with modern technologies like React, Next.js, and Node.js",
                features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure & Scalable"],
                delay: "0",
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications for iOS and Android",
                features: ["iOS & Android", "React Native", "App Store Deployment", "Push Notifications"],
                delay: "200",
              },
              {
                icon: TrendingUp,
                title: "Digital Marketing Strategy",
                description: "Comprehensive marketing strategies to boost your online presence and drive conversions",
                features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
                delay: "400",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Speed up your applications and improve user experience with our optimization services",
                features: ["Speed Optimization", "Database Tuning", "CDN Integration", "Monitoring Setup"],
                delay: "600",
              },
              {
                icon: Shield,
                title: "Security & Maintenance",
                description: "Keep your applications secure and up-to-date with our maintenance services",
                features: ["Security Audits", "Regular Updates", "Backup Solutions", "24/7 Monitoring"],
                delay: "800",
              },
              {
                icon: Target,
                title: "Consultation & Strategy",
                description: "Strategic guidance to help you make the right technology decisions for your business",
                features: ["Technology Assessment", "Project Planning", "Architecture Design", "Growth Strategy"],
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Your Success is Our Priority</h2>
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

      {/* Testimonials Section */}
      <section id="portfolio" className="py-20 bg-gray-800/30 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonials data */}
            {[
              {
                name: "Dar Blockchain",
                role: "Blockchain Company",
                content:
                  "DevCraft Solutions transformed our business with an amazing web application. Our sales increased by 150% within 3 months!",
                image: "/darblockahin.png",
                color: "bg-blue-600",
                delay: "0",
              },
            ].map((client, idx) => (
              <div key={idx} className={`rounded-xl p-6 shadow-lg ${client.color} animate-fade-in-up`} style={{ animationDelay: `${client.delay}ms` }}>
                <img src={client.image} alt={client.name} className="h-16 w-16 rounded-full mx-auto mb-4 object-cover" />
                <div className="text-xl font-semibold text-white text-center">{client.name}</div>
                <div className="text-blue-200 text-center mb-2">{client.role}</div>
                <div className="text-gray-100 text-center italic">"{client.content}"</div>
              </div>
            ))}
            // (The following is a fixed and integrated testimonials carousel example)

            {/* Example clients data for carousel */}
            {/*
            const clients = [
              {
                name: "Acme Corp",
                logo: "/acme-logo.png",
                description: "Acme Corp saw a 200% increase in efficiency after working with us.",
              },
              {
                name: "Globex Inc.",
                logo: "/globex-logo.png",
                description: "Globex Inc. loved our fast turnaround and quality results.",
              },
              // Add more clients as needed
            ];
            */}

            {/* Carousel of client logos and testimonials */}
            <Carousel>
              {[
                {
                  name: "Acme Corp",
                  logo: "/acme-logo.png",
                  description: "Acme Corp saw a 200% increase in efficiency after working with us.",
                },
                {
                  name: "Globex Inc.",
                  logo: "/globex-logo.png",
                  description: "Globex Inc. loved our fast turnaround and quality results.",
                },
                // Add more clients as needed
              ].map((client, idx) => (
                <div key={idx} className="flex flex-col items-center p-6">
                  <img src={client.logo} alt={client.name} className="h-20 w-20 object-contain mb-4" />
                  <div className="text-lg font-semibold text-white">{client.name}</div>
                  <div className="text-gray-300 text-center mt-2">{client.description}</div>
                </div>
              ))}
            </Carousel>

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
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-gray-300 text-lg">
                  Let's discuss your project and create a solution that drives real results for your business.
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
              <p className="text-gray-400">Building powerful web and mobile applications that drive business growth.</p>
            </div>

            {[
              {
                title: "Services",
                links: ["Web Development", "Mobile Apps", "Digital Marketing", "Consulting"],
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
    </div>
  )
}
