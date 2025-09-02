import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesPreview from "@/components/ServicesPreview";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <ServicesPreview />
        
        {/* Final CTA Section */}
        <section className="py-16 md:py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Schedule your free consultation and discover exactly how AI automation 
                can transform your business operations and increase revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button variant="secondary" size="xl" className="group">
                  Schedule Your Free Consultation
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
                <Button variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Get Automation Assessment
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-primary-foreground/80 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-sage rounded-full"></span>
                  <span>No contracts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-sage rounded-full"></span>
                  <span>Fortune 10 experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-sage rounded-full"></span>
                  <span>Small business focused</span>
                </div>
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
