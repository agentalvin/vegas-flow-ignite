import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              What I Do
            </h2>
            <div className="w-24 h-0.5 bg-sage mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Fractional Product Consulting */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-6">
                  Fractional Product Consulting
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>• Product strategy and roadmap definition</p>
                  <p>• Mobile app leadership (iOS/Android – native and hybrid platforms)</p>
                  <p>• Web product development — not just internal tools, but external-facing experiences for marketplaces, fintech, eCommerce, and more</p>
                  <p>• AI/ML-powered features (risk scoring, personalization, agent flows)</p>
                  <p>• Trust & safety and platform integrity</p>
                  <p>• IAM and permissions architecture</p>
                </div>
              </div>
              
              <div className="space-y-4 p-6 bg-sage/5 rounded-2xl border border-sage/10">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">
                    I've built and launched full-scale mobile and web platforms — from 0 to launch — for companies across multiple verticals.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">
                    I work with a trusted network of world-class engineers and designers to help you ship fast and confidently.
                  </p>
                </div>
              </div>
            </div>

            {/* Automation Systems */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-6">
                  Automation Systems
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>• Airtable-based CRM and ops backends</p>
                  <p>• Zapier integrations and automations</p>
                  <p>• Framer websites and embedded forms</p>
                  <p>• Voice AI agents for call routing and customer support</p>
                  <p>• Modular, repeatable automation for lean ops or service businesses</p>
                </div>
              </div>
              
              <div className="p-6 bg-clay/10 rounded-2xl border border-clay/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">
                    This stack is based on my internal system — the same one I use to run AgentAlvin.ai.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button size="lg" className="text-lg px-8 py-4 h-auto">
              Discuss Your Project
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;