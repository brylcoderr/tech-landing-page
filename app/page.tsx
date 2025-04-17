import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Code, Globe, Layers, Zap, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TechLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-700"></div>
          <span className="text-xl font-bold tracking-tight">TechFlow</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="#"
            className="hidden md:inline-flex text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Button>Get Started</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                New Features Available
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-7xl/none">
                Accelerate your <span className="text-primary">digital transformation</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Empower your business with cutting-edge technology solutions designed to drive growth, efficiency, and
                innovation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="gap-1">
                Get Started
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline">Book a Demo</Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              {/* <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                  >
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${i}`}
                      alt={`Client ${i}`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div> */}
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="font-medium text-foreground">2,000+</span> companies worldwide
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="hero-image.jpg?height=600&width=600&text=Dashboard"
                width={600}
                height={600}
                alt="Product dashboard"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Core Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technology that powers innovation
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides the tools and infrastructure you need to build, deploy, and scale your digital
              products with confidence.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {[
            {
              icon: <Zap className="h-10 w-10 text-primary" />,
              title: "Lightning Fast",
              description:
                "Experience unparalleled speed with our optimized infrastructure and cutting-edge technology stack.",
            },
            {
              icon: <Globe className="h-10 w-10 text-primary" />,
              title: "Global Scale",
              description:
                "Deploy your applications worldwide with our distributed network of high-performance data centers.",
            },
            {
              icon: <Layers className="h-10 w-10 text-primary" />,
              title: "Modular Architecture",
              description: "Build with flexibility using our composable components and extensible platform.",
            },
            {
              icon: <Code className="h-10 w-10 text-primary" />,
              title: "Developer Experience",
              description:
                "Enjoy a seamless development workflow with intuitive tools and comprehensive documentation.",
            },
            {
              icon: (
                <svg
                  className="h-10 w-10 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V12L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: "Real-time Updates",
              description: "Stay synchronized with instant data updates and real-time collaboration features.",
            },
            {
              icon: (
                <svg
                  className="h-10 w-10 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: "Advanced Security",
              description: "Protect your data with enterprise-grade security features and compliance certifications.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductShowcase() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Product Showcase
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Designed for the modern workflow</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our intuitive interface and powerful features work together to help your team achieve more in less time.
              </p>
            </div>
            <ul className="grid gap-4">
              {[
                "Intuitive drag-and-drop interface",
                "Real-time collaboration tools",
                "Advanced analytics and reporting",
                "Seamless integration with your existing tools",
                "Enterprise-grade security and compliance",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-3.5 w-3.5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12L10 17L20 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button>Try it Free</Button>
              <Button variant="outline">Watch Demo</Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="relative aspect-video w-full max-w-[600px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Product+Interface"
                width={600}
                height={400}
                alt="Product interface"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Trusted by innovative teams</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our customers have to say about how our platform has transformed their businesses.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {[
            {
              quote:
                "This platform has completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementing it.",
              author: "Sarah Johnson",
              role: "CTO, TechCorp",
            },
            {
              quote:
                "The intuitive interface and powerful features have made our development process so much smoother. I can't imagine working without it now.",
              author: "Michael Chen",
              role: "Lead Developer, InnovateLabs",
            },
            {
              quote:
                "We've been able to scale our operations globally without any hiccups thanks to the robust infrastructure and excellent support team.",
              author: "Emily Rodriguez",
              role: "Operations Director, GrowthScale",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <svg
                className="mb-4 h-8 w-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.13456 9H5.37685C4.04363 9 3.37702 9 3.06342 9.47526C2.74981 9.95052 3.04778 10.5218 3.6437 11.6643L4.21547 12.7642C4.39973 13.1282 4.49186 13.3101 4.49186 13.5C4.49186 13.6899 4.39973 13.8718 4.21547 14.2358L3.6437 15.3357C3.04778 16.4782 2.74981 17.0495 3.06342 17.5247C3.37702 18 4.04363 18 5.37685 18H9.13456C10.4678 18 11.1344 18 11.448 17.5247C11.7616 17.0495 11.4636 16.4782 10.8677 15.3357L10.2959 14.2358C10.1117 13.8718 10.0195 13.6899 10.0195 13.5C10.0195 13.3101 10.1117 13.1282 10.2959 12.7642L10.8677 11.6643C11.4636 10.5218 11.7616 9.95052 11.448 9.47526C11.1344 9 10.4678 9 9.13456 9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M19.1346 9H15.3769C14.0436 9 13.377 9 13.0634 9.47526C12.7498 9.95052 13.0478 10.5218 13.6437 11.6643L14.2155 12.7642C14.3997 13.1282 14.4919 13.3101 14.4919 13.5C14.4919 13.6899 14.3997 13.8718 14.2155 14.2358L13.6437 15.3357C13.0478 16.4782 12.7498 17.0495 13.0634 17.5247C13.377 18 14.0436 18 15.3769 18H19.1346C20.4678 18 21.1344 18 21.448 17.5247C21.7616 17.0495 21.4636 16.4782 20.8677 15.3357L20.2959 14.2358C20.1117 13.8718 20.0195 13.6899 20.0195 13.5C20.0195 13.3101 20.1117 13.1282 20.2959 12.7642L20.8677 11.6643C21.4636 10.5218 21.7616 9.95052 21.448 9.47526C21.1344 9 20.4678 9 19.1346 9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <p className="mb-4 text-foreground">{testimonial.quote}</p>
              <div className="mt-auto flex items-center justify-between">
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="h-8 w-16 rounded bg-muted/70 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">LOGO</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" className="gap-2">
            View All Case Studies
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-12 sm:py-16 md:px-20 md:py-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&text=Pattern')] bg-center opacity-10 mix-blend-overlay"></div>
          <div className="relative grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                  Ready to transform your business?
                </h2>
                <p className="max-w-[600px] text-primary-foreground/90 md:text-xl/relaxed">
                  Join thousands of companies that are already leveraging our platform to drive growth and innovation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="secondary">Get Started</Button>
                <Button
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-primary-foreground">Start your free trial today</h3>
              <div className="grid gap-3">
                <Input
                  placeholder="Your name"
                  className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70"
                />
                <Input
                  placeholder="Your email"
                  className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70"
                />
                <Input
                  placeholder="Your company"
                  className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70"
                />
                <Button variant="secondary" className="w-full">
                  Start Free Trial
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/70">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-background py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-700"></div>
              <span className="text-xl font-bold tracking-tight">TechFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with cutting-edge technology solutions since 2015.
            </p>
            <div className="flex gap-4">
              {[
                { name: "twitter" },
                { name: "facebook" },
                { name: "instagram" },
                { name: "github" },
                { name: "linkedin" },
              ].map((social) => (
                <Link key={social.name} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">{social.name}</span>
                  <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-[8px] uppercase">{social.name.charAt(0)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Product</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Integrations", "Changelog", "Documentation"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Press", "Partners"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Resources</h3>
            <ul className="space-y-2">
              {["Community", "Contact", "Support", "FAQ", "Terms", "Privacy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} TechFlow, Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
