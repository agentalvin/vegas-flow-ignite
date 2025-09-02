import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 gradient-subtle"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-10">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight">
                I've worked in tech, building scalable, automated systems for{" "}
                <span className="text-primary font-medium">Fortune 10 companies</span>.
              </h1>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  I'll leverage my expertise to build enterprise-level automation in sales, customer service, 
                  marketing, payments, and more. Expect to save money, hire fewer employees, while{" "}
                  <span className="text-sage font-medium">increasing revenue by 30% or more</span>.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg shadow-soft">
                <Check className="w-5 h-5 text-sage flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">Save Money</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg shadow-soft">
                <Check className="w-5 h-5 text-sage flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">Hire Fewer Employees</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg shadow-soft">
                <Check className="w-5 h-5 text-sage flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">30%+ Revenue Increase</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Schedule Your Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg">
                Get Your Automation Assessment
              </Button>
            </div>

            {/* Company Logos */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-6">Trusted experience from</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-lg font-medium text-muted-foreground">Upwork</div>
                <div className="text-lg font-medium text-muted-foreground">Experian</div>
                <div className="text-lg font-medium text-muted-foreground">Netflix</div>
                <div className="text-lg font-medium text-muted-foreground">Toyota</div>
                <div className="text-lg font-medium text-muted-foreground">Tillamook</div>
                <div className="text-lg font-medium text-muted-foreground">Slickdeals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;