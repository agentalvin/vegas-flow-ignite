import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 gradient-subtle"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            {/* Main Headline */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight">
                I help companies ship complex web, mobile, and AI products.
              </h1>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                  Fractional product leadership with deep experience in AI, platform integrity, and trust systems.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Work with Alvin
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>

            {/* Services Preview */}
            <div className="pt-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                    <div className="w-6 h-6 bg-sage rounded-lg"></div>
                  </div>
                  <h3 className="text-lg font-medium text-foreground">Product Consulting</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Strategy, roadmaps, and full-scale platform development
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-clay/20 rounded-2xl mx-auto flex items-center justify-center">
                    <div className="w-6 h-6 bg-clay rounded-lg"></div>
                  </div>
                  <h3 className="text-lg font-medium text-foreground">AI Automation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Modular systems for lean operations and service businesses
                  </p>
                </div>
              </div>
            </div>

            {/* Company Logos */}
            <div className="pt-12">
              <p className="text-sm text-muted-foreground mb-8 font-light">
                Trusted experience from
              </p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                <div className="text-base font-medium text-muted-foreground tracking-wide">Upwork</div>
                <div className="text-base font-medium text-muted-foreground tracking-wide">Shift</div>
                <div className="text-base font-medium text-muted-foreground tracking-wide">Slickdeals</div>
                <div className="text-base font-medium text-muted-foreground tracking-wide">Toyota</div>
                <div className="text-base font-medium text-muted-foreground tracking-wide">Netflix</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;