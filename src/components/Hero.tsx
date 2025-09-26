import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight tracking-tight">
            Build smarter. Operate leaner.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
            Fractional product leadership and AI-driven systems to help your business scale efficiently. From intelligent automation to strategic product delivery, I help you move fast and ship with clarity.
          </p>
          
          {/* CTA Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 h-auto">
              Book a Free Discovery Call
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