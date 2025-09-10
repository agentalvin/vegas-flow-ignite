import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Freelancer Quality Score",
      company: "Upwork",
      description: "Machine learning platform for marketplace trust and quality assessment",
      type: "AI/ML Platform",
      impact: "Improved freelancer matching accuracy by 40%"
    },
    {
      title: "Mobile Commerce Redesign",
      company: "Shift",
      description: "End-to-end mobile app experience for car buying and selling",
      type: "Mobile Product",
      impact: "Increased mobile conversions by 65%"
    },
    {
      title: "Internal Risk Tool",
      company: "Slickdeals",
      description: "Platform integrity and fraud detection system",
      type: "Trust & Safety",
      impact: "Reduced fraudulent activity by 80%"
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real projects, real results. Here's how I've helped companies ship and scale.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                {/* Company Logo Placeholder */}
                <div className="w-12 h-12 bg-muted rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-muted-foreground font-medium text-sm">
                    {study.company.slice(0, 2).toUpperCase()}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Type Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-sage/10 border border-sage/20">
                    <span className="text-sage text-xs font-medium">{study.type}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-foreground leading-tight">
                    {study.title}
                  </h3>
                  
                  {/* Company */}
                  <p className="text-muted-foreground font-medium">
                    {study.company}
                  </p>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {study.description}
                  </p>
                  
                  {/* Impact */}
                  <div className="pt-2">
                    <p className="text-sage text-sm font-medium">
                      {study.impact}
                    </p>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;