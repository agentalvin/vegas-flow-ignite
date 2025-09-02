import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Award, Users, TrendingUp, Clock, Building, Code, Zap } from "lucide-react";

const About = () => {
  const companies = [
    { name: "Upwork", role: "Principal Product Manager" },
    { name: "Experian", role: "Senior Product Manager" }, 
    { name: "Netflix", role: "Consultant (via HAUS)" },
    { name: "Toyota", role: "Product Owner (via iCrossing)" },
    { name: "Tillamook", role: "Consultant (via HAUS)" },
    { name: "Slickdeals", role: "Senior Product Manager" }
  ];

  const achievements = [
    {
      title: "Revenue Generation",
      description: "Built systems that generated millions in incremental revenue through intelligent automation and AI-powered optimization",
      icon: TrendingUp
    },
    {
      title: "Operational Efficiency", 
      description: "Created AI-powered onboarding that dramatically reduced time-to-hire and multiplied customer conversion rates",
      icon: Zap
    },
    {
      title: "Scale Experience",
      description: "Managed platforms serving millions of users with enterprise-level reliability and performance standards",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Fortune 10 Experience,{" "}
                <span className="text-primary">Small Business Focus</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                After 10+ years building scalable automation systems for major tech companies, 
                I'm now dedicated to bringing enterprise-level AI automation to small businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Background */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From Enterprise Systems to Small Business Success
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I've spent over a decade as a Technical Product Leader at Fortune 10 companies, 
                      building web and mobile platforms, backend microservices, and AI automation systems 
                      that serve millions of users and generate millions in revenue.
                    </p>
                    
                    <p>
                      At Upwork, I led product initiatives that transformed how businesses connect with talent. 
                      At Experian, I built consumer financial platforms. Through consulting work, I've helped 
                      Netflix optimize their content strategies and Toyota enhance their digital experiences.
                    </p>
                    
                    <p>
                      But I realized something: small businesses face the same operational challenges that 
                      enterprise companies solve with sophisticated automation - they just don't have access 
                      to the same resources or expertise.
                    </p>
                    
                    <p className="text-primary font-medium">
                      That's why I created Agent Alvin: to be your dedicated AI automation agent, 
                      bringing Fortune 10-level systems to businesses ready to scale smart.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button variant="cta" size="lg">
                      Schedule Your Free Consultation
                    </Button>
                    <Button variant="outline" size="lg">
                      View Case Studies
                    </Button>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl border shadow-soft">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <achievement.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Experience */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-lg text-muted-foreground">
                  10+ years of technical product leadership at major companies
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border shadow-soft text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.role}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12 p-8 bg-primary/5 rounded-2xl border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Enterprise-Level Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">10+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">Millions</div>
                    <div className="text-sm text-muted-foreground">Users Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">$M+</div>
                    <div className="text-sm text-muted-foreground">Revenue Generated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Technical Expertise That Delivers Results
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        AI/ML Integration
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Custom automation systems using Claude/ChatGPT, intelligent onboarding, 
                        predictive scoring, and machine learning optimization
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Platform Development
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Modern web development with Framer, customer-facing apps serving millions, 
                        scalable backend systems and microservices
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Business Operations
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Airtable-powered databases, workflow automation, data management, 
                        and operational efficiency optimization
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Payment Systems
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Square/Stripe integration, automated invoicing, subscription management, 
                        and financial workflow automation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Voice AI Integration
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        VAPI-powered call agents, automated phone systems, voice-to-text workflows, 
                        and 24/7 customer service automation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Scale & Reliability
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Systems managing millions of users and transactions, proven enterprise 
                        reliability, and performance optimization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 md:py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Your Dedicated AI Automation Agent
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                I work as your dedicated AI automation agent, leveraging Fortune 10 experience 
                to build enterprise-level systems that save you money, reduce hiring needs, 
                and increase revenue by 30% or more. Let me handle the technology so you can 
                focus on growing your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">30%+</div>
                  <div className="text-white/80">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                  <div className="text-white/80">Years Enterprise Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-white/80">AI Automation Working</div>
                </div>
              </div>

              <div className="mt-12">
                <Button variant="secondary" size="xl">
                  Start Your AI Automation Journey
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;