import { Button } from "@/components/ui/button";
import { Workflow, Target, Coffee } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              10+ years turning product vision into reality
            </h2>
          </div>

          {/* Main Bio */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Alvin Lee, a data-driven product leader with over 10 years of experience building solutions across marketplaces, fintech, e-commerce, and automotive. I've held senior product roles at companies like Upwork, Shift Technologies, and Experian, leading AI-powered initiatives and scaling products from concept to millions of users.
              </p>
            </div>
          </div>

          {/* Quick Expertise Highlights */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium text-foreground mb-4">
                Quick expertise highlights:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "AI-First Development - I architect intelligent systems that improve personalization and reduce friction through meaningful automation",
                "Full-Stack Leadership - From strategy to delivery, I handle everything: backend systems, mobile apps, and the teams that build them", 
                "Proven Scale - Products from concept to millions of users across marketplaces, mobile apps, and SaaS platforms",
                "Elite Network - Access to top designers and engineers who've built recognized, best-in-class products"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium text-foreground mb-4">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: "How do you approach product strategy?",
                  a: "I start with business objectives and user pain points, then create execution-focused roadmaps backed by data."
                },
                {
                  q: "Do you work with startups or enterprises?",
                  a: "Both. From seed-stage MVPs to enterprise optimization and scaling."
                },
                {
                  q: "Can you join existing teams?",
                  a: "Yes, I adapt to what's needed. Integrate with your team or work independently."
                },
                {
                  q: "Do you handle design/development?",
                  a: "I work with a network of elite designers and engineers, or collaborate with your existing team."
                }
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Background */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium text-foreground mb-4">
                Previous Experience
              </h3>
            </div>

            {/* Company logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-muted-foreground text-sm font-medium">UPWORK</div>
              <div className="text-muted-foreground text-sm font-medium">SHIFT TECHNOLOGIES</div>
              <div className="text-muted-foreground text-sm font-medium">EXPERIAN</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;