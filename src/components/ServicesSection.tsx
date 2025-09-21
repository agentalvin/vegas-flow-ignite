import { Button } from "@/components/ui/button";
import { Database, Zap, Headphones, BarChart3, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Fractional Product Leadership */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
                Fractional Product Leadership
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I provide senior-level product leadership to companies who need clarity and execution, not just meetings. I help you define what to build and how to build it, and I guide your team from idea to shipped feature.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* What I Offer */}
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground">What I offer:</h3>
                <div className="space-y-4">
                  {[
                    "Roadmap and strategy definition",
                    "Delivery planning and execution", 
                    "Product hiring and team mentorship",
                    "Cross-functional alignment"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground">Experience:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  10+ years leading product initiatives at scale, including marketplace platforms at Upwork, 
                  automotive commerce at Shift, and mobile experiences at Slickdeals. I've shipped features 
                  used by millions of users and built product teams from the ground up.
                </p>
              </div>
            </div>
          </div>

          {/* AI Systems and Automation */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
                AI Systems and Automation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From CRM automations to custom AI assistants, I help businesses replace repetitive work with smart, modular systems. I use tools like Airtable, Make, Claude, and Cal.com to build workflows that are tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Example Solutions */}
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground">Example solutions:</h3>
                <div className="space-y-4">
                  {[
                    "Lead nurturing and qualification workflows",
                    "Email and SMS automation",
                    "AI-powered scheduling and follow-ups",
                    "Voice agents and inbox assistants trained on your business context"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground">Tools I use:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Automation</h4>
                    <p className="text-sm text-muted-foreground">Airtable, Make, Zapier</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">AI</h4>
                    <p className="text-sm text-muted-foreground">Claude, OpenAI, Voiceflow</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Communication</h4>
                    <p className="text-sm text-muted-foreground">Twilio, Cal.com, Slack</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Analytics</h4>
                    <p className="text-sm text-muted-foreground">Mixpanel, Retool</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12">
            <Button size="lg">
              Let's Talk
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;