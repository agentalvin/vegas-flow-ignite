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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Stop Losing Money to{" "}
                <span className="text-primary">Manual Processes</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We build done-for-you automation systems that eliminate admin chaos for Las Vegas service businesses. 
                <span className="text-secondary font-semibold"> Save 15+ hours weekly</span> while 
                <span className="text-secondary font-semibold"> increasing revenue 30%</span>.
              </p>

              {/* Trust Points */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="text-foreground font-medium">No contracts • Local Las Vegas company</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="text-foreground font-medium">30-day satisfaction guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="text-foreground font-medium">Fortune 500-level automation for small business</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Businesses Automated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Revenue Increase</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Professional business owner using automated dashboard"
                className="w-full h-auto object-cover"
              />
              {/* Floating Elements */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Automation Active</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-medium">
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary">+$12,500</div>
                  <div className="text-xs text-muted-foreground">Monthly Savings</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 gradient-secondary rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 gradient-primary rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;