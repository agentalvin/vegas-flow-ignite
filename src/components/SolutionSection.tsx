import { CheckCircle, Zap, Target, TrendingUp, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Sales Automation",
      description: "AI-powered lead scoring, CRM integration, and follow-up sequences that convert prospects while you sleep"
    },
    {
      icon: Users,
      title: "Customer Service Automation", 
      description: "AI call agents, intelligent chatbots, and ticket routing that handle 80% of customer inquiries automatically"
    },
    {
      icon: Target,
      title: "Marketing Automation",
      description: "Email campaigns, social media scheduling, and content automation that nurtures leads without manual effort"
    },
    {
      icon: DollarSign,
      title: "Payment Processing",
      description: "Subscription management, automated invoicing, and reconciliation that eliminates payment delays"
    }
  ];

  const benefits = [
    "Save 20+ hours weekly on administrative tasks",
    "Increase lead conversion rates by 40-60%", 
    "Reduce customer service costs by 70%",
    "Scale operations without proportional hiring",
    "Generate revenue even when you're not working"
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Enterprise-Level Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Transform Your Business with{" "}
            <span className="text-primary font-medium">AI Automation</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I bring the same automation strategies I've used at Fortune 10 companies 
            to small businesses—scaled appropriately for your budget and needs.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-soft border border-border hover:shadow-medium transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-sage" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="bg-card p-8 rounded-lg shadow-soft max-w-3xl mx-auto">
          <h3 className="text-xl font-medium text-foreground mb-6 text-center">
            What You Can Expect
          </h3>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="group">
              See How It Works
              <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;