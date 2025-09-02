import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Zap, BarChart3, Users, Settings, Bot, MessageSquare, CreditCard, Smartphone, Database, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Sales Automation",
      description: "Enterprise-level CRM integration, intelligent lead scoring, and automated follow-up sequences that multiply conversion rates",
      icon: BarChart3,
      features: [
        "AI-powered lead qualification and scoring",
        "Automated CRM integration and data sync",
        "Intelligent follow-up sequences",
        "Sales pipeline optimization",
        "Revenue forecasting automation"
      ]
    },
    {
      title: "Customer Service Automation", 
      description: "AI call agents, intelligent chatbots, and automated ticket routing for 24/7 customer support",
      icon: Bot,
      features: [
        "AI call agents with VAPI integration",
        "Intelligent chatbots using Claude/ChatGPT",
        "Automated ticket routing and escalation",
        "Customer sentiment analysis",
        "24/7 support automation"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Automated email campaigns, social media scheduling, and content management that scales with your business",
      icon: MessageSquare,
      features: [
        "Automated email campaign sequences",
        "Social media content scheduling",
        "Customer journey mapping",
        "Personalized content delivery",
        "Performance analytics and optimization"
      ]
    },
    {
      title: "Payment Processing Automation",
      description: "Streamlined subscription management, automated invoicing, and reconciliation systems",
      icon: CreditCard,
      features: [
        "Automated recurring billing",
        "Smart invoicing and collections",
        "Payment reconciliation automation",
        "Subscription management systems",
        "Financial reporting automation"
      ]
    },
    {
      title: "Website & App Development",
      description: "Modern, responsive websites and mobile applications with integrated automation systems",
      icon: Smartphone,
      features: [
        "Responsive website development with Framer",
        "Mobile app development and deployment",
        "User experience optimization",
        "Integrated automation workflows",
        "Performance monitoring and analytics"
      ]
    }
  ];

  const packages = [
    {
      name: "Starter AI Package",
      price: "$7,500",
      description: "Perfect for businesses beginning their AI automation journey",
      features: [
        "AI-powered lead qualification system",
        "Automated CRM setup with Airtable",
        "Basic chatbot integration",
        "Payment processing automation",
        "2-week implementation support"
      ],
      popular: false
    },
    {
      name: "Enterprise AI System",
      price: "$15,000", 
      description: "Comprehensive AI automation for scaling businesses",
      features: [
        "Everything in Starter Package",
        "AI call agents with VAPI",
        "Advanced Claude/ChatGPT integration",
        "Custom Framer website development",
        "Multi-channel automation workflows",
        "4-week implementation support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Ongoing AI Optimization",
      price: "$1,000-1,500/month",
      description: "Continuous AI improvement and system optimization",
      features: [
        "Monthly AI model fine-tuning",
        "Workflow optimization and updates",
        "Priority support and maintenance",
        "New automation opportunity identification",
        "Performance analytics and reporting",
        "Team training and onboarding"
      ],
      popular: false
    }
  ];

  const processSteps = [
    {
      week: "Week 1",
      title: "AI Strategy & Analysis",
      description: "Deep dive into your business processes and design custom AI automation strategy",
      icon: Users
    },
    {
      week: "Week 2", 
      title: "Core AI System Build",
      description: "Implementation of AI-powered lead capture, CRM integration, and primary workflows",
      icon: Settings
    },
    {
      week: "Week 3",
      title: "Integration & AI Training", 
      description: "Connecting all systems, AI model training, and thorough testing for optimal performance",
      icon: Zap
    },
    {
      week: "Week 4",
      title: "Launch & Team Training",
      description: "Go live with your AI systems and comprehensive team training on new workflows",
      icon: BarChart3
    }
  ];

  const technologies = [
    {
      name: "Framer",
      description: "Modern website and app development platform for responsive, high-performance sites",
      icon: Smartphone
    },
    {
      name: "Claude/ChatGPT", 
      description: "Advanced AI language models for intelligent automation and customer interactions",
      icon: Bot
    },
    {
      name: "Airtable",
      description: "Database and workflow management for comprehensive business operations",
      icon: Database
    },
    {
      name: "Square/Stripe",
      description: "Payment processing and financial automation for seamless transactions",
      icon: CreditCard
    },
    {
      name: "VAPI",
      description: "AI-powered call agents and voice automation for 24/7 customer support",
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Enterprise-Level AI Automation for Small Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Leverage Fortune 10 experience to build scalable AI automation in sales, customer service, marketing, and payments. Save money, hire fewer employees, increase revenue by 30% or more.
            </p>
            <Button variant="hero" size="xl" className="group">
              Get Your AI Automation Assessment
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                AI Automation Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade automation solutions scaled for small business success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-muted-foreground text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Automation Packages */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                AI Automation Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparent pricing with enterprise-level AI solutions scaled for small business success
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

        {/* AI Implementation Process */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                4-Week AI Implementation Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fortune 10 proven methodology that gets your AI automation systems operational quickly and efficiently
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

        {/* Technology Partners */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Enterprise Technology Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We integrate best-in-class enterprise tools to create intelligent automation workflows that scale with your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {technologies.map((tech, index) => (
                <Card key={index} className="text-center border-border shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <tech.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your AI Automation System?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation and discover exactly how enterprise-level AI automation can transform your business operations
            </p>
            <Button variant="secondary" size="xl" className="group">
              Get Your Free AI Assessment
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