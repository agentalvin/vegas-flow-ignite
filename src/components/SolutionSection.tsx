import { Check, Zap, Clock, BarChart3, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "New leads automatically captured and followed up within 5 minutes",
      description: "Never miss another potential customer. Our system captures leads from your website, social media, and referrals instantly.",
      metric: "5 min response time"
    },
    {
      icon: DollarSign,
      title: "Invoices sent instantly with automated payment reminders",
      description: "Get paid faster with professional invoices that send automatically and smart payment follow-up sequences.",
      metric: "30% faster payments"
    },
    {
      icon: Users,
      title: "Client communication handled 24/7 without your involvement",
      description: "Automated responses, appointment confirmations, and follow-ups keep clients happy around the clock.",
      metric: "24/7 availability"
    },
    {
      icon: BarChart3,
      title: "Real-time dashboard showing exactly how your business is performing",
      description: "See your key metrics, pipeline, and opportunities at a glance. Make data-driven decisions with confidence.",
      metric: "Real-time insights"
    },
    {
      icon: Clock,
      title: "15+ hours weekly freed up for growth and family time",
      description: "Reclaim your time from repetitive tasks. Focus on strategy, relationships, and what you love about your business.",
      metric: "15+ hrs saved"
    }
  ];

  return (
    <section className="py-16 md:py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Imagine Your Business{" "}
            <span className="text-primary">Running Automatically</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            While your competitors struggle with manual processes, your business operates like a well-oiled machine. 
            Here's what changes when you work with us:
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-8 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-3">
                      <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-foreground leading-tight">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-3 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                      <span className="text-secondary font-bold text-sm">
                        {benefit.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Results Section */}
        <div className="mt-16 p-8 bg-card rounded-2xl border border-border shadow-medium">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Results Speak for Themselves
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="text-4xl font-bold text-primary mb-2">15-20</div>
              <div className="text-foreground font-medium mb-2">Hours Saved Weekly</div>
              <div className="text-sm text-muted-foreground">More time for growth and family</div>
            </div>
            
            <div className="text-center p-6 bg-secondary/5 rounded-xl border border-secondary/10">
              <div className="text-4xl font-bold text-secondary mb-2">30-50%</div>
              <div className="text-foreground font-medium mb-2">Revenue Increase</div>
              <div className="text-sm text-muted-foreground">From better lead conversion</div>
            </div>
            
            <div className="text-center p-6 bg-green-500/5 rounded-xl border border-green-500/10">
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-foreground font-medium mb-2">Client Satisfaction</div>
              <div className="text-sm text-muted-foreground">Faster, more reliable service</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="cta" size="lg">
              Get Started With Your Free Audit
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              No obligations • See your automation opportunities in 30 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;