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
        
        {/* Fractional Product Leadership */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-light text-foreground">
                    Product leadership without the overhead
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I help startups and growing teams align roadmaps, execution, and outcomes. Whether you're building a mobile app, web platform, or AI-powered product, I bring clarity, speed, and experience to your product delivery.
                  </p>
                </div>
                
                <Button className="text-base">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* AI-Powered Business Systems */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-light text-foreground">
                    Automate the tedious. Scale the meaningful.
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I design and implement AI-driven workflows that handle lead capture, appointment scheduling, customer follow-ups, and more. These agents act like real team members, helping you reduce busywork and focus on what matters.
                  </p>
                </div>

                <Button className="text-base">
                  View Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Experience */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-muted-foreground text-sm mb-8">
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
                  <span className="text-sm font-medium text-muted-foreground">Slickdeals</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-gradient-neutral">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Ready to scale your operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Most automation systems pay for themselves within 3 months. Let's discuss what's 
                slowing down your team and build something that works.
              </p>
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Let's Talk
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;