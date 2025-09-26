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
        
        {/* Services Preview */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Two ways I help businesses ship faster
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fractional product leadership and intelligent automation systems designed for execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-muted/30 rounded-2xl p-8 space-y-4">
                <h3 className="text-2xl font-medium text-foreground">
                  Product Leadership
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Senior product leadership that ships. Strategy, execution, and team leadership from concept to scale.
                </p>
                <Button variant="outline" className="mt-4">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8 space-y-4">
                <h3 className="text-2xl font-medium text-foreground">
                  AI Automation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete digital systems that work around the clock. Custom AI agents and high-converting websites.
                </p>
                <Button variant="outline" className="mt-4">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                10+ years turning product vision into reality
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                I'm Alvin Lee, a data-driven product leader with experience at companies like Upwork, Shift Technologies, and Experian. I specialize in AI-powered products and scaling from concept to millions of users.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 mb-8">
                <span className="text-sm font-medium text-muted-foreground">Upwork</span>
                <span className="text-sm font-medium text-muted-foreground">Shift</span>
                <span className="text-sm font-medium text-muted-foreground">Experian</span>
              </div>

              <Button variant="outline">
                Learn More About Alvin
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
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