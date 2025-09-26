import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Service 1: Fractional Product Consulting */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-light text-foreground">
                    Product leadership that ships
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Most consultants give you strategies. I give you working products. I bring 10+ years of product experience from companies like Upwork, Shift Technologies, and Experian to turn ideas into systems that perform. I'll work with your existing team or help you build the right one.
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Product Strategy That Ships - Roadmaps built for execution",
                    "Full-Stack Architecture - Backend systems, APIs, and databases designed to scale", 
                    "AI Integration - LLMs and intelligent agents woven into your product",
                    "Cross-Platform Delivery - Ship on iOS, Android, and web with speed and quality",
                    "Team Leadership - Work with your developers or help you build the right team"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service 2: AI Automation & Digital Presence */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-light text-foreground">
                    Complete digital systems that work while you sleep
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Custom AI agents, high-converting websites, and integrated systems that capture leads, nurture prospects, and handle communications around the clock. Built with elite designers and engineers who create digital experiences that drive real business results.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Custom AI Agents - Built for your processes, trained on your data",
                    "High-Converting Websites - Professional sites that turn visitors into customers",
                    "Lead Generation Systems - Capture, qualify, and nurture prospects automatically", 
                    "Customer Communications - Follow-ups and support that run themselves",
                    "Integrated Digital Presence - Everything works together seamlessly"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8">
                  10+ years turning product vision into reality
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  I'm Alvin Lee, a data-driven product leader with over 10 years of experience building solutions across marketplaces, fintech, e-commerce, and automotive. I've held senior product roles at companies like Upwork, Shift Technologies, and Experian, leading AI-powered initiatives and scaling products from concept to millions of users.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  { title: "AI-First Development", desc: "I architect intelligent systems that improve personalization and reduce friction through meaningful automation" },
                  { title: "Full-Stack Leadership", desc: "From strategy to delivery, I handle everything: backend systems, mobile apps, and the teams that build them" },
                  { title: "Proven Scale", desc: "Products from concept to millions of users across marketplaces, mobile apps, and SaaS platforms" },
                  { title: "Elite Network", desc: "Access to top designers and engineers who've built recognized, best-in-class products" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Company Experience */}
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-6">
                  Product leadership experience at companies you know
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
                  <div className="flex items-center justify-center h-12 w-24 bg-muted rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Upwork</span>
                  </div>
                  <div className="flex items-center justify-center h-12 w-24 bg-muted rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Shift</span>
                  </div>
                  <div className="flex items-center justify-center h-12 w-24 bg-muted rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Experian</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { q: "How do you approach product strategy?", a: "I start with business objectives and user pain points, then create execution-focused roadmaps backed by data." },
                  { q: "Do you work with startups or enterprises?", a: "Both. From seed-stage MVPs to enterprise optimization and scaling." },
                  { q: "Can you join existing teams?", a: "Yes, I adapt to what's needed. Integrate with your team or work independently." },
                  { q: "Do you handle design/development?", a: "I work with a network of elite designers and engineers, or collaborate with your existing team." }
                ].map((item, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-base font-medium text-foreground">{item.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-gradient-neutral">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Ready to ship faster?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss how I can help you turn your product vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-4 h-auto">
                  Let's talk
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                  See my work
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;