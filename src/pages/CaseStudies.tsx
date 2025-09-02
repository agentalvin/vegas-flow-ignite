import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign, Users, Star, Bot, Zap, Phone } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "TechStart Solutions",
      industry: "Professional Services",
      challenge: "Customer onboarding took 2+ weeks with manual processes, causing 40% drop-off rate and overwhelming the small team with administrative work.",
      solution: [
        "AI-powered onboarding system using Claude for intelligent form completion",
        "Automated document verification and processing workflows",
        "Real-time progress tracking and communication automation",
        "Predictive analytics to identify and prevent customer drop-offs"
      ],
      results: {
        timeSaved: "35 hours weekly",
        revenueIncrease: "45%",
        efficiencyGain: "85% faster onboarding",
        customerSatisfaction: "98%"
      },
      quote: "The AI onboarding system transformed our business. We went from losing nearly half our customers during setup to a 98% completion rate. It's like having a dedicated team working 24/7.",
      clientName: "Sarah Chen, Founder",
      icon: Bot,
      color: "primary"
    },
    {
      client: "GrowthCorp Marketing",
      industry: "Digital Marketing", 
      challenge: "Sales conversion rates were stuck at 12% despite high traffic. Manual lead qualification and follow-up processes caused delays and missed opportunities.",
      solution: [
        "AI-powered lead scoring using predictive analytics",
        "Automated sales funnel optimization with A/B testing",
        "Intelligent chatbot for instant lead qualification", 
        "Automated follow-up sequences based on lead behavior"
      ],
      results: {
        timeSaved: "28 hours weekly",
        revenueIncrease: "65%", 
        efficiencyGain: "3x conversion rate",
        customerSatisfaction: "96%"
      },
      quote: "We tripled our conversion rates within 3 months. The AI system identifies our best prospects instantly and nurtures them perfectly. Our revenue has never been higher.",
      clientName: "Mike Rodriguez, CEO",
      icon: TrendingUp,
      color: "secondary"
    },
    {
      client: "ServicePro Connect",
      industry: "Customer Service",
      challenge: "24/7 customer support was impossible with limited staff. Response times averaged 4+ hours, leading to customer frustration and churn.",
      solution: [
        "AI call agents using VAPI for voice support automation",
        "Intelligent ticket routing and priority classification",
        "Automated response system with escalation protocols",
        "Real-time sentiment analysis and intervention alerts"
      ],
      results: {
        timeSaved: "40+ hours weekly", 
        revenueIncrease: "35%",
        efficiencyGain: "24/7 availability",
        customerSatisfaction: "94%"
      },
      quote: "Having AI agents handle our customer calls was a game-changer. We now provide instant, consistent support around the clock, and customer satisfaction scores have never been better.",
      clientName: "Dr. Lisa Thompson, Director",
      icon: Phone,
      color: "green"
    },
    {
      client: "RetailFlow Systems",
      industry: "E-commerce & Payments",
      challenge: "Complex subscription management and payment processing required constant manual intervention, leading to billing errors and customer complaints.",
      solution: [
        "Automated subscription lifecycle management",
        "Smart payment retry logic with failure prediction",
        "AI-powered fraud detection and prevention", 
        "Automated billing reconciliation and reporting"
      ],
      results: {
        timeSaved: "30 hours weekly",
        revenueIncrease: "50%",
        efficiencyGain: "99% billing accuracy", 
        customerSatisfaction: "97%"
      },
      quote: "The payment automation eliminated our billing headaches completely. Revenue recovery improved by 50% and we can focus on growth instead of chasing payment issues.",
      clientName: "Amanda Foster, Owner",
      icon: DollarSign,
      color: "blue"
    },
    {
      client: "WebApp Innovations", 
      industry: "Technology Development",
      challenge: "Mobile app user engagement was declining with 70% users abandoning after first session. Manual user journey optimization was too slow to respond to user behavior.",
      solution: [
        "AI-powered user behavior analysis and prediction",
        "Automated personalization engine for app experiences",
        "Real-time engagement optimization algorithms",
        "Predictive user lifetime value modeling"
      ],
      results: {
        timeSaved: "25 hours weekly",
        revenueIncrease: "80%",
        efficiencyGain: "85% user retention",
        customerSatisfaction: "95%"
      },
      quote: "User retention increased from 30% to 85% in just 2 months. The AI system predicts user behavior and personalizes experiences in real-time. It's like having a dedicated data science team.",
      clientName: "James Park, CTO",
      icon: Zap,
      color: "purple"
    }
  ];

  const ResultCard = ({ icon: Icon, label, value, description, color }: any) => (
    <div className={`bg-${color}-500/10 rounded-lg p-4 text-center border border-${color}-500/20`}>
      <Icon className={`w-8 h-8 text-${color}-600 mx-auto mb-2`} />
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
              Enterprise AI Results for Small Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              See how businesses transformed their operations using Fortune 10-level AI automation systems, 
              achieving dramatic efficiency gains and revenue growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary" />
                <span>Average 50% revenue increase</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>30+ hours saved weekly</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-primary" />
                <span>24/7 AI automation</span>
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
                      <div className={`w-16 h-16 bg-${study.color}/10 rounded-full flex items-center justify-center`}>
                        <study.icon className={`w-8 h-8 text-${study.color}`} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{study.client}</h2>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline">{study.industry}</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-3">The Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-3">AI Automation Solution</h3>
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
                    <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Enterprise-Level Results</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/10 rounded-lg p-4 text-center border border-primary/20">
                        <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{study.results.timeSaved}</div>
                        <div className="text-sm font-medium text-foreground">Time Saved</div>
                        <div className="text-xs text-muted-foreground mt-1">Weekly automation</div>
                      </div>
                      <div className="bg-secondary/10 rounded-lg p-4 text-center border border-secondary/20">
                        <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{study.results.revenueIncrease}</div>
                        <div className="text-sm font-medium text-foreground">Revenue Growth</div>
                        <div className="text-xs text-muted-foreground mt-1">Within 6 months</div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-4 text-center border border-green-500/20">
                        <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{study.results.efficiencyGain}</div>
                        <div className="text-sm font-medium text-foreground">Efficiency Gain</div>
                        <div className="text-xs text-muted-foreground mt-1">Process improvement</div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-4 text-center border border-blue-500/20">
                        <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{study.results.customerSatisfaction}</div>
                        <div className="text-sm font-medium text-foreground">Satisfaction</div>
                        <div className="text-xs text-muted-foreground mt-1">Client feedback</div>
                      </div>
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
                Proven AI Automation Results
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enterprise-level AI automation delivering measurable business transformation
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50%+</div>
                <div className="text-foreground font-medium">Average Revenue Growth</div>
                <div className="text-sm text-muted-foreground">Within 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-foreground font-medium">Hours Saved Weekly</div>
                <div className="text-sm text-muted-foreground">Per business</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-foreground font-medium">AI Systems Running</div>
                <div className="text-sm text-muted-foreground">Continuous automation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">96%+</div>
                <div className="text-foreground font-medium">Client Satisfaction</div>
                <div className="text-sm text-muted-foreground">Consistent results</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Your AI Transformation?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get your free AI automation assessment and discover exactly how enterprise-level 
              systems can transform your business operations and drive growth.
            </p>
            <Button variant="secondary" size="xl" className="group">
              Schedule Your Free AI Consultation
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