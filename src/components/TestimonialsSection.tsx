import { Star, TrendingUp, Clock, DollarSign } from "lucide-react";

const TestimonialsSection = () => {
  const results = [
    {
      icon: Clock,
      metric: "20+ Hours",
      description: "Saved weekly through automation",
      detail: "Administrative tasks eliminated"
    },
    {
      icon: DollarSign,
      metric: "40% Increase", 
      description: "In revenue within 6 months",
      detail: "Through improved lead conversion"
    },
    {
      icon: TrendingUp,
      metric: "70% Reduction",
      description: "In customer service costs", 
      detail: "With AI-powered support"
    }
  ];

  const testimonial = {
    quote: "Working with Alvin transformed our entire business operation. The AI automation systems he built saved us thousands in operational costs while actually improving our customer experience. We went from drowning in manual processes to having systems that work around the clock.",
    author: "Sarah Chen",
    role: "CEO, TechStart Solutions",
    company: "B2B SaaS Company"
  };

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Proven Results</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Real Results from{" "}
            <span className="text-primary font-medium">Real Businesses</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            These aren't theoretical improvements—they're measurable results from businesses 
            that implemented enterprise-level automation.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {results.map((result, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-soft text-center">
              <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <result.icon className="w-6 h-6 text-sage" />
              </div>
              <div className="text-2xl font-light text-primary mb-2">
                {result.metric}
              </div>
              <div className="text-foreground font-medium mb-1">
                {result.description}
              </div>
              <div className="text-sm text-muted-foreground">
                {result.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-card p-8 rounded-lg shadow-soft max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-sage fill-current" />
            ))}
          </div>
          
          <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
            "{testimonial.quote}"
          </blockquote>
          
          <div className="text-center">
            <div className="font-medium text-foreground">{testimonial.author}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            <div className="text-xs text-muted-foreground mt-1">{testimonial.company}</div>
          </div>
        </div>

        {/* Enterprise Credentials */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-3">
            Experience from Fortune 10 Companies
          </p>
          <div className="text-xs text-muted-foreground space-x-4">
            <span>Upwork • Principal Product Manager</span>
          </div>
          <div className="text-xs text-muted-foreground space-x-4 mt-1">
            <span>Shift Technologies • Group Product Manager</span>
          </div>
          <div className="text-xs text-muted-foreground space-x-4 mt-1">
            <span>Experian • Senior Product Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;