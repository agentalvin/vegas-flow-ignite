import { Button } from "@/components/ui/button";
import { Mail, Calendar, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-sage">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Let's Talk
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              Reach out if you're ready to automate your operations or need strategic product guidance.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                <Mail className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-medium text-foreground">Email</h3>
              <p className="text-muted-foreground text-sm">
                hello@agentalvin.ai
              </p>
            </div>

            {/* Calendar */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                <Calendar className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-medium text-foreground">Call</h3>
              <p className="text-muted-foreground text-sm">
                Book a strategy session
              </p>
            </div>

            {/* Form */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sage/10 rounded-2xl mx-auto flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-medium text-foreground">Form</h3>
              <p className="text-muted-foreground text-sm">
                Quick project brief
              </p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Ready to streamline your business?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Most automation projects pay for themselves within 3 months. Let's discuss what's slowing down your team 
              and build a system that works while you focus on growth.
            </p>
            
            <div className="space-y-6">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Get Started
              </Button>
              
              <div className="bg-muted/30 rounded-lg p-6 text-muted-foreground">
                <p className="text-sm mb-2">
                  [Tally form will be embedded here]
                </p>
                <p className="text-xs opacity-60">
                  Quick assessment to understand your automation needs
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Info */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Usually respond within 24 hours • Free initial consultation
            </p>
            
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              Whether you need complete automation overhaul or strategic product guidance for your web/mobile platform, 
              I'm here to help you ship faster and scale smarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;