import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const CaseStudiesSection = () => {

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Client Results
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
              Automation systems and product consulting that delivered measurable results.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automation Case Study */}
            <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                
                {/* Case Study Title */}
                <h3 className="text-xl font-medium text-foreground">
                  Service Business Automation
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Automated client onboarding, project management, and billing for a 15-person agency. 
                  Reduced admin time by 70% and eliminated manual data entry errors.
                </p>
                
                {/* Results */}
                <div className="bg-sage/5 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Time Saved</span>
                    <span className="font-medium text-foreground">20 hrs/week</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Error Reduction</span>
                    <span className="font-medium text-foreground">95%</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full">Airtable</span>
                  <span className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full">Zapier</span>
                  <span className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full">Automation</span>
                </div>
              </div>
            </div>

            {/* Product Leadership Case Study */}
            <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                {/* Company Logo Placeholder */}
                <div className="flex items-center justify-center h-12 w-20 bg-muted/30 rounded-lg">
                  <span className="text-sm font-medium text-muted-foreground">Shift</span>
                </div>
                
                {/* Case Study Title */}
                <h3 className="text-xl font-medium text-foreground">
                  Mobile Commerce Platform
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Led mobile app redesign for car buying platform. Streamlined purchase flow and improved 
                  user experience for customers buying cars entirely through mobile.
                </p>
                
                {/* Results */}
                <div className="bg-sage/5 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Mobile Conversions</span>
                    <span className="font-medium text-foreground">+25%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">User Satisfaction</span>
                    <span className="font-medium text-foreground">4.8/5</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full">Mobile</span>
                  <span className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full">eCommerce</span>
                  <span className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full">Product</span>
                </div>
              </div>
            </div>

            {/* AI Voice Agent Case Study */}
            <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                
                {/* Case Study Title */}
                <h3 className="text-xl font-medium text-foreground">
                  AI Call Center Automation
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Deployed voice AI agents for client onboarding and support routing. 
                  Handles 80% of initial calls automatically with seamless human handoff when needed.
                </p>
                
                {/* Results */}
                <div className="bg-sage/5 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Call Volume</span>
                    <span className="font-medium text-foreground">80% Automated</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-medium text-foreground">24/7</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full">AI Voice</span>
                  <span className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full">Support</span>
                  <span className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full">Automation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Background Experience */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Product Leadership Background
            </h3>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              Before focusing on automation consulting, I led product and engineering teams at top companies, 
              shipping platforms used by millions of users.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center justify-center h-16 w-24 bg-muted/30 rounded-lg">
                <span className="text-sm font-medium text-muted-foreground">Upwork</span>
              </div>
              <div className="flex items-center justify-center h-16 w-24 bg-muted/30 rounded-lg">
                <span className="text-sm font-medium text-muted-foreground">Shift</span>
              </div>
              <div className="flex items-center justify-center h-16 w-24 bg-muted/30 rounded-lg">
                <span className="text-sm font-medium text-muted-foreground">Slickdeals</span>
              </div>
            </div>

            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              Request Full Portfolio
              <ExternalLink className="ml-3 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;