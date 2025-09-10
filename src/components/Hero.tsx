import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight tracking-tight">
            I help small businesses scale through automation.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
            No-code systems that streamline operations and free your team to focus on growth.
          </p>
          
          {/* Key Services */}
          <div className="pt-6 pb-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Airtable workflows • Zapier integrations • AI voice agents • Fractional product consulting
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-4">
            <Button size="lg" className="text-lg px-8 py-4 h-auto">
              Get Started
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;