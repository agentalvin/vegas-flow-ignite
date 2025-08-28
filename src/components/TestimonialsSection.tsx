import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Martinez",
      business: "Serenity Med Spa",
      industry: "Wellness",
      image: "https://images.unsplash.com/photo-1494790108755-2616b86a3aac?w=100&h=100&fit=crop&crop=face",
      quote: "Vegas Business Automation completely transformed how we handle appointments and follow-ups. We went from losing 30% of leads to converting 85%. I got my evenings back and my revenue increased by 40%.",
      result: "40% revenue increase",
      timeframe: "Within 3 months"
    },
    {
      name: "Mike Thompson",
      business: "Thompson HVAC",
      industry: "Home Services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "The automated quote system and payment reminders have been game-changers. My team spends 20 hours less per week on admin work, and we're collecting payments 60% faster. Best investment I've made.",
      result: "20 hours saved weekly",
      timeframe: "Immediate impact"
    },
    {
      name: "Lisa Chen",
      business: "Elite Fitness Studio",
      industry: "Fitness",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "I was drowning in membership management and class bookings. Now everything runs automatically - from lead capture to payment processing. My studio grew by 50% while I work fewer hours.",
      result: "50% business growth",
      timeframe: "Within 6 months"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Local Las Vegas Businesses Are Already{" "}
            <span className="text-primary">Saving Hours Daily</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what your fellow Las Vegas business owners 
            are saying about their automation results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-large transition-smooth hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-primary/30" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Results */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <span className="text-sm font-medium text-foreground">Result:</span>
                  <span className="text-sm font-bold text-secondary">{testimonial.result}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="text-sm font-medium text-foreground">Timeline:</span>
                  <span className="text-sm font-bold text-primary">{testimonial.timeframe}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-border">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.industry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 p-6 bg-card rounded-2xl border border-border shadow-soft">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Client Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Businesses Automated</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Local Las Vegas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;