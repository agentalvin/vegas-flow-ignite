import { Button } from "@/components/ui/button";
import { Coffee, Users, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
              Hi, I'm Alvin.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Principal PM. Systems builder. Food and coffee lover.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Bio */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I've led teams and shipped platforms at Upwork, Shift, Slickdeals, and beyond. 
                I specialize in building systems that balance speed, scale, and trust — whether 
                it's mobile, web, or backend infrastructure.
              </p>
            </div>

            {/* Values/Approach */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-sage/10 rounded-full mx-auto flex items-center justify-center">
                  <Zap className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Ship Fast</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Speed matters. I help you move from idea to launch without compromising quality.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-clay/20 rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Build Trust</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every system needs integrity. I focus on safety, security, and user confidence.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-beige/30 rounded-full mx-auto flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Stay Calm</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Complex problems need clear thinking. I bring order to chaos.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-12">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                Learn More About My Approach
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;