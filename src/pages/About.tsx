import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
                About Alvin
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
                Principal Product Manager with experience shipping platforms at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Main About Content */}
        <AboutSection />

        {/* Extended Bio Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Photo Placeholder */}
                <div className="order-2 lg:order-1">
                  <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Photo of Alvin</span>
                  </div>
                </div>

                {/* Extended Bio */}
                <div className="order-1 lg:order-2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                    Building systems that work
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      My career has been focused on one thing: building systems that balance speed, scale, and trust. 
                      From marketplace integrity at Upwork to mobile commerce at Shift, I've learned that the best 
                      products are the ones that users can rely on.
                    </p>
                    
                    <p>
                      I specialize in the intersection of product strategy and technical execution. This means I can 
                      help you define what to build and how to build it, working with engineering and design teams 
                      to ship real products that solve real problems.
                    </p>
                    
                    <p>
                      When I'm not building products, you'll find me exploring new coffee shops, cooking, or 
                      experimenting with the latest automation tools to make my own workflows more efficient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 gradient-sage">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Let's work together
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in hearing about challenging product problems and automation opportunities.
              </p>
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Get in Touch
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

export default About;