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
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                  Two Ways I Help Businesses Scale
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Automation systems that eliminate manual work and strategic consulting 
                  for complex product challenges.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Primary Service - Automation */}
                <div className="bg-gradient-warm rounded-2xl p-8 md:p-12">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-sage" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                      Automation Systems
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Complete no-code solutions built on Airtable, Zapier, and AI voice agents. 
                      Eliminate repetitive tasks and free your team to focus on growth.
                    </p>
                    
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Client onboarding automation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">AI call agents and routing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Custom CRM and dashboards</span>
                      </div>
                    </div>
                    
                    <Button variant="secondary" className="mt-6">
                      Learn About Automation
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Secondary Service - Consulting */}
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center">
                      <BarChart3 className="w-8 h-8 text-sage" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                      Product Consulting
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Fractional product leadership for web and mobile platforms. Strategic guidance 
                      backed by experience shipping at Upwork, Shift, and Slickdeals.
                    </p>
                    
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Product strategy and roadmaps</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Mobile and web platform leadership</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Team guidance through key milestones</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="mt-6">
                      View Consulting Services
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
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