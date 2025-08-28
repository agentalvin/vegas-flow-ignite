import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Zap, BarChart3, Users, Settings } from "lucide-react";

const Services = () => {
  const packages = [
    {
      name: "Starter Automation Kit",
      price: "$5,000",
      description: "Perfect for businesses just starting their automation journey",
      features: [
        "Lead capture and CRM setup",
        "5 core communication workflows",
        "Basic payment processing",
        "Simple performance dashboard",
        "2 weeks implementation support"
      ],
      popular: false
    },
    {
      name: "Complete Automation System",
      price: "$10,000",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Starter Kit",
        "Advanced nurturing sequences", 
        "Client retention automation",
        "Comprehensive analytics dashboard",
        "Team productivity tracking",
        "4 weeks implementation support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Ongoing Optimization",
      price: "$500-750/month",
      description: "Continuous improvement and support",
      features: [
        "Monthly performance analysis",
        "Workflow optimization",
        "Priority support",
        "New automation opportunities",
        "Regular system updates",
        "Training for your team"
      ],
      popular: false
    }
  ];

  const processSteps = [
    {
      week: "Week 1",
      title: "Strategy & Foundation",
      description: "We analyze your current processes and design a custom automation strategy",
      icon: Users
    },
    {
      week: "Week 2", 
      title: "Core System Build",
      description: "Implementation of your lead capture, CRM, and primary workflows",
      icon: Settings
    },
    {
      week: "Week 3",
      title: "Integration & Testing", 
      description: "Connecting all systems and thorough testing to ensure everything works perfectly",
      icon: Zap
    },
    {
      week: "Week 4",
      title: "Launch & Training",
      description: "Go live with your new systems and comprehensive team training",
      icon: BarChart3
    }
  ];

  const technologies = [
    "Airtable", "Zapier", "ActiveCampaign", "Stripe", "Google Workspace", 
    "Calendly", "Typeform", "Slack", "QuickBooks", "HubSpot"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Automation Services That Transform Your Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From simple workflows to complete business transformation, we build automation systems that grow with your Las Vegas business.
            </p>
            <Button variant="hero" size="xl" className="group">
              Schedule Your Free Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Automation Package
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparent pricing with no hidden fees. Every package includes dedicated support and guaranteed results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? 'border-primary shadow-large' : 'border-border shadow-soft'} hover:shadow-medium transition-smooth`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                    <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant={pkg.popular ? "default" : "outline"} 
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our 4-Week Implementation Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that gets your automation systems up and running quickly and efficiently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm text-primary font-semibold mb-2">{step.week}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Technology Stack
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We integrate the best-in-class tools to create seamless automation workflows for your business.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="px-6 py-3 text-base font-medium">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation and discover exactly how automation can revolutionize your Las Vegas business.
            </p>
            <Button variant="secondary" size="xl" className="group">
              Get Your Free Automation Audit
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;