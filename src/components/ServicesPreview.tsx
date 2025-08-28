import { Button } from "@/components/ui/button";
import { 
  Magnet, 
  MessageSquare, 
  CreditCard, 
  BarChart3,
  ArrowRight,
  Check
} from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Magnet,
      title: "Lead Capture System",
      subtitle: "Never miss another potential customer",
      description: "Automatically capture leads from your website, social media, referrals, and walk-ins. Every prospect gets into your system instantly.",
      features: [
        "Website forms & chat widgets",
        "Social media lead capture",
        "Referral tracking system",
        "Lead scoring & qualification"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: MessageSquare,
      title: "Client Communication",
      subtitle: "Automated follow-up that converts",
      description: "Smart email and text sequences that nurture leads, confirm appointments, and keep clients engaged 24/7.",
      features: [
        "Automated email sequences",
        "SMS appointment reminders",
        "Follow-up campaigns",
        "Customer satisfaction surveys"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      subtitle: "Get paid faster with less effort",
      description: "Automated invoicing, payment reminders, and online payment processing that improves your cash flow.",
      features: [
        "Automatic invoice generation",
        "Payment reminder sequences",
        "Online payment processing",
        "Late payment notifications"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: BarChart3,
      title: "Business Dashboard",
      subtitle: "See your business performance in real-time",
      description: "Comprehensive dashboard showing leads, sales, client satisfaction, and key metrics that matter to your business.",
      features: [
        "Real-time performance metrics",
        "Lead conversion tracking",
        "Revenue & profit analysis",
        "Client lifetime value"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Build{" "}
            <span className="text-primary">For You</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just give you software – we build complete automation systems 
            tailored specifically for your Las Vegas service business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-large transition-smooth hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 ${service.bgColor} ${service.borderColor} border-2 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-secondary mb-3">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-primary hover:text-primary-dark transition-smooth cursor-pointer group/link">
                  <span className="font-medium text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Preview */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Simple 4-Week Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We handle everything from strategy to implementation, so you can focus on running your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { week: "Week 1", title: "Strategy & Foundation", description: "Audit your current processes and design your custom automation system" },
              { week: "Week 2", title: "Core System Build", description: "Set up your CRM, payment processing, and communication workflows" },
              { week: "Week 3", title: "Integration & Testing", description: "Connect all systems and test every automation to ensure perfection" },
              { week: "Week 4", title: "Launch & Training", description: "Go live with your new system and train your team on everything" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 gradient-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <div className="text-sm font-medium text-secondary mb-2">{step.week}</div>
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="cta" size="xl" className="group">
            See How This Works For Your Business
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Free consultation • No obligations • Custom strategy session
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;