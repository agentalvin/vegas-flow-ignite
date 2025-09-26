import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight tracking-tight">
            Ship faster without the full-time overhead
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
            Fractional product consulting and AI automation for businesses that need execution, not excuses.
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I build award-winning platforms, launch AI-powered products, and create systems that scale. Senior product leadership and intelligent automation without the overhead, backed by a team that's built recognized, best-in-class websites and apps.
          </p>
          
          {/* CTA Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 h-auto">
              Schedule a consultation
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              See Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;