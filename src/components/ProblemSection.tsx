import { AlertTriangle, Clock, DollarSign, Users, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Drowning in Manual Tasks",
      description: "Spending hours on repetitive admin work instead of growing your business"
    },
    {
      icon: DollarSign,
      title: "Revenue Leaking Everywhere", 
      description: "Lost leads, delayed follow-ups, and inefficient processes costing you money daily"
    },
    {
      icon: Users,
      title: "Can't Scale Your Team",
      description: "Every new hire creates more complexity instead of solving problems"
    },
    {
      icon: TrendingDown,
      title: "Stuck in the Day-to-Day",
      description: "Working IN your business instead of ON your business strategy and growth"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>The Hidden Cost of Manual Processes</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Are You Losing Money to{" "}
            <span className="text-primary font-medium">Inefficient Operations</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most small businesses waste thousands monthly on processes that Fortune 10 companies 
            automated years ago. Here's what's probably costing you right now:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-soft border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-card rounded-lg shadow-soft max-w-2xl mx-auto">
          <p className="text-foreground font-medium mb-2">
            These inefficiencies typically cost small businesses
          </p>
          <div className="text-2xl font-light text-destructive">
            $50,000 - $200,000 annually
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            in lost revenue, wasted time, and unnecessary overhead
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;