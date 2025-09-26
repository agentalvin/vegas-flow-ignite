import { Button } from "@/components/ui/button";
import { Database, Zap, Headphones, BarChart3, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Fractional Product Consulting */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
                Product leadership that ships
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Most consultants give you strategies. I give you working products. I bring 10+ years of product experience from companies like Upwork, Shift Technologies, and Experian to turn ideas into systems that perform. I'll work with your existing team or help you build the right one.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Key Points */}
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground">Key capabilities:</h3>
                <div className="space-y-4">
                  {[
                    "Product Strategy That Ships - Roadmaps built for execution",
                    "Full-Stack Architecture - Backend systems, APIs, and databases designed to scale", 
                    "AI Integration - LLMs and intelligent agents woven into your product",
                    "Cross-Platform Delivery - Ship on iOS, Android, and web with speed and quality",
                    "Team Leadership - Work with your developers or help you build the right team"
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
                  automotive commerce at Shift Technologies, and mobile experiences at Experian. I've shipped features 
                  used by millions of users and built product teams from the ground up.
                </p>
              </div>
            </div>
          </div>

          {/* AI Automation & Digital Presence */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
                Complete digital systems that work while you sleep
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Custom AI agents, high-converting websites, and integrated systems that capture leads, nurture prospects, and handle communications around the clock. Built with elite designers and engineers who create digital experiences that drive real business results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Key Points */}
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground">Key capabilities:</h3>
                <div className="space-y-4">
                  {[
                    "Custom AI Agents - Built for your processes, trained on your data",
                    "High-Converting Websites - Professional sites that turn visitors into customers",
                    "Lead Generation Systems - Capture, qualify, and nurture prospects automatically",
                    "Customer Communications - Follow-ups and support that run themselves",
                    "Integrated Digital Presence - Everything works together seamlessly"
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
                <h3 className="text-xl font-medium text-foreground">Tools and partnerships:</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">AI & Automation</h4>
                    <p className="text-sm text-muted-foreground">Claude, OpenAI, Airtable, Make, Zapier</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Communication</h4>
                    <p className="text-sm text-muted-foreground">Twilio, Cal.com, Slack, voice systems</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Elite Network</h4>
                    <p className="text-sm text-muted-foreground">Top designers and engineers who've built recognized, best-in-class products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12">
            <Button size="lg">
              Schedule a consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;