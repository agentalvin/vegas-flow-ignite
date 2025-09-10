import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
                What I Do
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
                Two core offerings designed to help you ship complex products and scale operations efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Content */}
        <ServicesSection />

        {/* CTA Section */}
        <section className="py-20 md:py-32 gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Ready to start your project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss how I can help you ship your complex product or streamline your operations.
              </p>
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Schedule a Consultation
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

export default Services;