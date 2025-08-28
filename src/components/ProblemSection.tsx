import { AlertTriangle, Clock, Users, FileText, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Spending hours on manual invoicing and follow-ups",
      description: "Your valuable time gets consumed by repetitive admin tasks instead of growing your business."
    },
    {
      icon: TrendingDown,
      title: "Missing leads because you can't respond fast enough",
      description: "Potential customers slip away while you're busy with other clients or tasks."
    },
    {
      icon: FileText,
      title: "Chasing payments and managing spreadsheets",
      description: "Disorganized systems lead to cash flow issues and frustrated clients."
    },
    {
      icon: Users,
      title: "Your team asking 'where's that client information?'",
      description: "Important data gets lost in emails and scattered documents."
    },
    {
      icon: AlertTriangle,
      title: "Working IN your business instead of ON your business",
      description: "You're trapped in daily operations with no time for strategic growth."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Are You Tired of These{" "}
            <span className="text-secondary">Daily Frustrations?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            If you're a Las Vegas service business owner, these challenges probably sound familiar. 
            You're not alone – and there's a better way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-destructive font-bold text-xl mr-2">✗</span>
                      <h3 className="font-semibold text-foreground leading-tight">
                        {problem.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Sound Familiar? There's a Better Way.
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Stop letting manual processes hold your business back. Our automation systems eliminate these 
            frustrations so you can focus on what matters most – growing your business and serving your clients.
          </p>
          <div className="text-sm text-secondary font-medium">
            ↓ See how we solve these problems ↓
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;