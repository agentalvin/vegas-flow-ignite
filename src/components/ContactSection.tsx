import { Button } from "@/components/ui/button";
import { Mail, Calendar, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-32 gradient-sage">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              Reach out if you're building something hard and need a trusted product partner.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sage/10 rounded-full mx-auto flex items-center justify-center">
                <Mail className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-medium text-foreground">Email</h3>
              <p className="text-muted-foreground text-sm">
                hello@agentalvin.ai
              </p>
            </div>

            {/* Calendar */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-clay/20 rounded-full mx-auto flex items-center justify-center">
                <Calendar className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-lg font-medium text-foreground">Schedule</h3>
              <p className="text-muted-foreground text-sm">
                Book a consultation call
              </p>
            </div>

            {/* Form */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-beige/30 rounded-full mx-auto flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-lg font-medium text-foreground">Form</h3>
              <p className="text-muted-foreground text-sm">
                Project brief submission
              </p>
            </div>
          </div>

          {/* Tally Form Placeholder */}
          <div className="bg-card border border-border rounded-2xl p-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground mb-8">
                Tell me about your project
              </h3>
              
              <div className="bg-muted/30 rounded-lg p-8 text-muted-foreground">
                <p className="text-sm">
                  [Tally form will be embedded here]
                </p>
                <p className="text-xs mt-2 opacity-60">
                  Brief project questionnaire for initial assessment
                </p>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="space-y-6">
            <Button size="lg" className="text-lg px-8 py-4 h-auto">
              Schedule Your Consultation
            </Button>
            
            <p className="text-muted-foreground text-sm">
              Usually respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;