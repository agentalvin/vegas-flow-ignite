import { Button } from "@/components/ui/button";
import { Database, Zap, Headphones, BarChart3 } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Automation Systems
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
              Complete no-code solutions to streamline your operations and free your team to focus on growth.
            </p>
          </div>

          {/* Primary Service - Automation */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Airtable Systems */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                  <Database className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Airtable CRM</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Custom databases, client management, and operational backends that scale with your business.
                </p>
              </div>

              {/* Zapier Automation */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                  <Zap className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Zapier Workflows</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Connect your tools and automate repetitive tasks. Email sequences, form processing, data sync.
                </p>
              </div>

              {/* AI Voice Agents */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-lg font-medium text-foreground">AI Call Agents</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Voice AI for client onboarding, call routing, and customer support that works 24/7.
                </p>
              </div>

              {/* Analytics & Reporting */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-lg font-medium text-foreground">Dashboards</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Real-time reporting and analytics to track performance and make data-driven decisions.
                </p>
              </div>
            </div>
          </div>

          {/* The Stack */}
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
                The AgentAlvin Stack
              </h3>
              <p className="text-lg text-muted-foreground">
                This is the exact system I use to run my own consultancy. Proven, modular, and ready to deploy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-medium text-foreground mb-2">Operations</h4>
                <p className="text-sm text-muted-foreground">Airtable • Zapier • Calendly • Stripe</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Communication</h4>
                <p className="text-sm text-muted-foreground">AI Agents • Email Automation • Slack Integration</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Analytics</h4>
                <p className="text-sm text-muted-foreground">Custom Dashboards • Performance Tracking • ROI Reports</p>
              </div>
            </div>
          </div>

          {/* Secondary Service - Fractional Consulting */}
          <div className="border-t border-border pt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
                Fractional Product Consulting
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Strategic product leadership for web and mobile platforms when you need senior expertise without the full-time commitment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">What I Do</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">Product roadmap and strategy definition</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">Mobile app development leadership</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">Web platform architecture and scaling</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">Team leadership through key milestones</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">Experience</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Led product initiatives at Shift, Upwork, and Slickdeals. Shipped platforms used by millions across marketplace, fintech, and eCommerce verticals.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Work with trusted network of engineers and designers to help startups and agencies deliver complex features on time and budget.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Button size="lg" className="text-lg px-8 py-4 h-auto">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;