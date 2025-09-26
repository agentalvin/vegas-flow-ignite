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
                    Product leadership that ships
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Most consultants give you strategies. I give you working products. I bring 10+ years of product experience from companies like Upwork, Shift Technologies, and Experian to turn ideas into systems that perform. I'll work with your existing team or help you build the right one.
                  </p>
                </div>
                
                <Button className="text-base">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* AI Automation & Digital Presence */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-light text-foreground">
                    Complete digital systems that work while you sleep
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Custom AI agents, high-converting websites, and integrated systems that capture leads, nurture prospects, and handle communications around the clock. Built with elite designers and engineers who create digital experiences that drive real business results.
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
                Ready to ship faster? Let's talk.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get execution-focused product leadership and intelligent automation systems that deliver real results.
              </p>
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Schedule a consultation
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