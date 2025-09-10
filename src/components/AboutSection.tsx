import { Button } from "@/components/ui/button";
import { Workflow, Target, Coffee } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
              Hi, I'm Alvin.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Automation consultant. Product leader. Systems builder.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Bio */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I help small and mid-sized businesses scale through smart automation. After leading product teams 
                at Shift, Upwork, and Slickdeals, I now focus on building no-code systems that eliminate 
                repetitive work and free teams to focus on growth.
              </p>
            </div>

            {/* Approach */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                  <Workflow className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Automate Everything</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If it's repetitive, it should be automated. I build systems that work while you sleep.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                  <Target className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Results First</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No buzzwords or overcomplicated solutions. Focus on what actually moves your business forward.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Keep It Simple</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The best systems are the ones that just work. Clean, reliable, and maintainable.
                </p>
              </div>
            </div>

            {/* Experience Highlight */}
            <div className="bg-card border border-border rounded-2xl p-8 mt-16">
              <div className="text-center">
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Product Background
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Before focusing on automation, I led product and engineering initiatives at top companies. 
                  Shipped web and mobile platforms used by millions across marketplace, fintech, and eCommerce verticals.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <span>Shift (Mobile Commerce)</span>
                  <span>•</span>
                  <span>Upwork (Marketplace Platform)</span>
                  <span>•</span>
                  <span>Slickdeals (Community & Commerce)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;