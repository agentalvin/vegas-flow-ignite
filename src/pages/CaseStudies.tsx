import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign, Users, Star } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "Serenity Med Spa",
      industry: "Healthcare & Wellness",
      location: "Summerlin, Las Vegas",
      challenge: "Manual appointment booking was causing double bookings and losing 30% of potential clients who called outside business hours.",
      solution: [
        "Automated online booking system with real-time availability",
        "24/7 lead capture with instant follow-up sequences", 
        "Automated appointment reminders and confirmations",
        "Client retention campaigns for repeat bookings"
      ],
      results: {
        timeSaved: "25 hours weekly",
        revenueIncrease: "45%",
        leadIncrease: "60%",
        clientSatisfaction: "98%"
      },
      quote: "Vegas Business Automation transformed our entire operation. We went from losing leads to having a waitlist. Our team can now focus on what matters most - our clients.",
      clientName: "Sarah Chen, Owner",
      image: "/placeholder.svg"
    },
    {
      client: "Desert Home Contractors", 
      industry: "Home Services",
      location: "Henderson, Las Vegas",
      challenge: "Spending 15+ hours weekly on estimates, follow-ups, and project management. Missing opportunities due to slow response times.",
      solution: [
        "Automated lead qualification and instant response system",
        "Dynamic proposal generation with e-signature integration",
        "Project milestone tracking and client communication",
        "Automated invoicing and payment collection"
      ],
      results: {
        timeSaved: "20 hours weekly", 
        revenueIncrease: "35%",
        leadIncrease: "40%",
        clientSatisfaction: "95%"
      },
      quote: "I was skeptical about automation, but now I can't imagine running my business without it. We're closing more deals and my stress levels have dropped dramatically.",
      clientName: "Mike Rodriguez, Founder",
      image: "/placeholder.svg"
    },
    {
      client: "Mindful Wellness Center",
      industry: "Professional Services", 
      location: "Downtown Las Vegas",
      challenge: "Complex scheduling for multiple practitioners, manual billing, and inconsistent client follow-up were limiting growth.",
      solution: [
        "Multi-practitioner scheduling system with automated coordination",
        "Integrated billing and insurance processing",
        "Personalized client journey automation", 
        "Outcome tracking and progress reporting"
      ],
      results: {
        timeSaved: "18 hours weekly",
        revenueIncrease: "50%", 
        leadIncrease: "55%",
        clientSatisfaction: "97%"
      },
      quote: "The automation system has allowed us to scale from 2 to 6 practitioners while actually reducing our administrative overhead. It's been transformational.",
      clientName: "Dr. Lisa Thompson, Director",
      image: "/placeholder.svg"
    },
    {
      client: "Vegas Boutique Retail",
      industry: "Retail & E-commerce",
      location: "The Strip, Las Vegas", 
      challenge: "Managing inventory across multiple channels, manual customer service, and inconsistent marketing campaigns.",
      solution: [
        "Multi-channel inventory sync and management",
        "Automated customer service chatbot with live chat escalation",
        "Behavior-triggered email marketing campaigns",
        "Loyalty program automation with personalized rewards"
      ],
      results: {
        timeSaved: "22 hours weekly",
        revenueIncrease: "40%",
        leadIncrease: "65%", 
        clientSatisfaction: "96%"
      },
      quote: "Our customer experience is now consistent 24/7, and our repeat purchase rate has doubled. The ROI was clear within the first month.",
      clientName: "Amanda Foster, Owner",
      image: "/placeholder.svg"
    }
  ];

  const ResultCard = ({ icon: Icon, label, value, description }: any) => (
    <div className="bg-accent/50 rounded-lg p-4 text-center">
      <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-sm font-medium text-foreground">{label}</div>
      <div className="text-xs text-muted-foreground mt-1">{description}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Real Results from Real Las Vegas Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              See how local businesses have transformed their operations and dramatically increased revenue with our automation solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary" />
                <span>Average 40% revenue increase</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>20+ hours saved weekly</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <span>50+ businesses served</span>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {caseStudies.map((study, index) => (
              <div key={index} className={`mb-20 ${index !== caseStudies.length - 1 ? 'border-b border-border pb-20' : ''}`}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Client Info & Challenge */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src={study.image} 
                        alt={study.client}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{study.client}</h2>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline">{study.industry}</Badge>
                          <span className="text-sm text-muted-foreground">{study.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-3">The Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Our Solution</h3>
                      <ul className="space-y-2">
                        {study.solution.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-lg">"</span>
                          </div>
                          <div>
                            <p className="text-foreground italic mb-3 leading-relaxed">"{study.quote}"</p>
                            <div className="font-semibold text-foreground">{study.clientName}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Results Achieved</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <ResultCard 
                        icon={Clock}
                        label="Time Saved"
                        value={study.results.timeSaved}
                        description="Freed up for growth"
                      />
                      <ResultCard 
                        icon={TrendingUp}
                        label="Revenue Increase"
                        value={study.results.revenueIncrease}
                        description="Within 6 months"
                      />
                      <ResultCard 
                        icon={Users}
                        label="Lead Increase"
                        value={study.results.leadIncrease}
                        description="Higher quality leads"
                      />
                      <ResultCard 
                        icon={Star}
                        label="Client Satisfaction"
                        value={study.results.clientSatisfaction}
                        description="Based on surveys"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stats */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proven Track Record Across Las Vegas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These results speak for themselves - local businesses are thriving with automation.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-foreground font-medium">Businesses Served</div>
                <div className="text-sm text-muted-foreground">Across Las Vegas Valley</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
                <div className="text-foreground font-medium">Revenue Generated</div>
                <div className="text-sm text-muted-foreground">For our clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
                <div className="text-foreground font-medium">Hours Saved</div>
                <div className="text-sm text-muted-foreground">Every month</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-foreground font-medium">Client Retention</div>
                <div className="text-sm text-muted-foreground">Long-term partnerships</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join These Success Stories?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get your free automation audit and discover exactly how much time and money you could be saving.
            </p>
            <Button variant="secondary" size="xl" className="group">
              Schedule Your Free Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;