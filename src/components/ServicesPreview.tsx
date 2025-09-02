import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, MessageSquare, Database, CreditCard, Globe, Phone } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Custom automation using Claude/ChatGPT for intelligent customer interactions, predictive analytics, and process optimization"
    },
    {
      icon: Database,
      title: "Business Operations",
      description: "Airtable-powered databases, workflow automation, and data management systems that scale with your business"
    },
    {
      icon: CreditCard,
      title: "Payment Systems",
      description: "Square/Stripe integration with automated invoicing, subscription management, and financial reconciliation"
    },
    {
      icon: Phone,
      title: "Voice AI Systems",
      description: "VAPI-powered call agents for customer service, appointment booking, and automated phone workflows"
    },
    {
      icon: Globe,
      title: "Web & Mobile Development",
      description: "Modern websites and apps built with Framer, optimized for conversion and user experience"
    },
    {
      icon: MessageSquare,
      title: "Customer Communication",
      description: "Automated email campaigns, chatbots, and omnichannel support that never sleeps"
    }
  ];

  const techPartners = [
    { name: "Framer", description: "Modern web development" },
    { name: "Claude AI", description: "Advanced language processing" },
    { name: "Airtable", description: "Business operations" },
    { name: "Square", description: "Payment processing" },
    { name: "VAPI", description: "AI call agents" },
    { name: "Stripe", description: "Financial automation" }
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Enterprise-Grade Tools,{" "}
            <span className="text-primary font-medium">Small Business Scale</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I leverage the same automation platforms used by Fortune 10 companies, 
            configured specifically for small business budgets and requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-soft border border-border hover:shadow-medium transition-smooth group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technology Partners */}
        <div className="bg-muted/30 p-8 rounded-lg max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-medium text-foreground mb-6 text-center">
            Technology Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {techPartners.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="font-medium text-foreground">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="group">
            Explore All Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;