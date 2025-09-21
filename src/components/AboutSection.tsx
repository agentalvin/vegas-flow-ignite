import { Button } from "@/components/ui/button";
import { Workflow, Target, Coffee } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Product execution meets systems thinking
            </h2>
          </div>

          {/* Main Bio */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Alvin, a product leader, strategist, and builder with over a decade of experience shipping web, mobile, and AI-powered products. I've worked at companies like Upwork, Experian, and Toyota, helping them solve hard problems and launch features that scale.
              </p>
              
              <p>
                My focus is simple: build systems that work. Whether you need product leadership or scalable automation, I bring clarity, technical fluency, and an eye for execution.
              </p>
            </div>
          </div>

          {/* What I Help With */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium text-foreground mb-4">
                Today, I help companies:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                "Lead and scale product teams",
                "Launch new apps and platforms", 
                "Automate manual workflows with AI agents",
                "Build smarter, leaner businesses"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Touch */}
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Outside of work, I love finding new coffee spots, cooking, and testing the limits of my own automation stack.
            </p>
          </div>

          {/* Background */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium text-foreground mb-4">
                Previous Experience
              </h3>
            </div>

            {/* Company logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-muted-foreground text-sm font-medium">UPWORK</div>
              <div className="text-muted-foreground text-sm font-medium">EXPERIAN</div>
              <div className="text-muted-foreground text-sm font-medium">TOYOTA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;