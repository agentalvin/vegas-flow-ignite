import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
                Real projects, measurable results. Here's how I've helped companies build and scale their products.
              </p>
            </div>
          </div>
        </section>

        {/* Main Case Studies Content */}
        <CaseStudiesSection />

        {/* Process Section */}
        <section className="py-20 md:py-32 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                  My Approach
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Every project is different, but my process stays consistent.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Discovery */}
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-sage font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-medium text-foreground">Discovery</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Deep dive into your business, users, and technical constraints to understand the real problem.
                  </p>
                </div>

                {/* Strategy */}
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-clay/20 rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-charcoal font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-medium text-foreground">Strategy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Define clear objectives, success metrics, and a roadmap that balances ambition with reality.
                  </p>
                </div>

                {/* Execution */}
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-beige/30 rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-charcoal font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-medium text-foreground">Execution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Work with your team to ship iteratively, measure results, and adapt based on real user feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Ready for your own case study?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your project and see how I can help you achieve similar results.
              </p>
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Start Your Project
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

export default CaseStudies;