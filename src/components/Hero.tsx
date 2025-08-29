import { Button } from "@/components/ui/button";
import { Play, Check } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-subtle"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="w-full h-full gradient-primary"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
                Stop Losing Money to{" "}
                <span className="text-primary font-medium">Manual Processes</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We build done-for-you automation systems that eliminate admin chaos for Las Vegas service businesses. 
                <span className="text-secondary font-medium"> Save 15+ hours weekly</span> while 
                <span className="text-secondary font-medium"> increasing revenue 30%</span>.
              </p>

              {/* Trust Points */}
              <div className="space-y-3 max-w-lg mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">No contracts • Local Las Vegas company</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">30-day satisfaction guarantee</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">Fortune 500-level automation for small business</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Get Your Free Automation Audit
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              
              <Button variant="outline" size="xl" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch How It Works
              </Button>
            </div>

            {/* Social Proof Numbers */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Businesses Automated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Revenue Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;