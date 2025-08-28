import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your interest!",
        description: "We'll contact you within 4 business hours to schedule your free consultation.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Get Your Free{" "}
                <span className="text-primary">Automation Audit</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Ready to see how much time and money automation could save your Las Vegas business? 
                Let's start with a free 30-minute consultation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium">No obligations</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium">Custom strategy</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium">Immediate insights</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card p-8 rounded-2xl border shadow-soft">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Schedule Your Free Consultation
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll contact you within 4 business hours to schedule your consultation.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" required placeholder="John Smith" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" required placeholder="(702) 555-0123" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business">Business Name</Label>
                        <Input id="business" name="business" placeholder="Your Business Name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select name="industry">
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="medspa">Med Spa / Wellness</SelectItem>
                            <SelectItem value="contractor">Home Services / Contractor</SelectItem>
                            <SelectItem value="fitness">Fitness / Personal Training</SelectItem>
                            <SelectItem value="professional">Professional Services</SelectItem>
                            <SelectItem value="retail">Retail / E-commerce</SelectItem>
                            <SelectItem value="automotive">Automotive Services</SelectItem>
                            <SelectItem value="restaurant">Restaurant / Food Service</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="revenue">Monthly Revenue</Label>
                        <Select name="revenue">
                          <SelectTrigger>
                            <SelectValue placeholder="Select revenue range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-50k">Under $50K</SelectItem>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                            <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                            <SelectItem value="over-500k">Over $500K</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="challenge">Biggest Challenge</Label>
                      <Select name="challenge">
                        <SelectTrigger>
                          <SelectValue placeholder="What's your biggest challenge?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lead-management">Managing and following up with leads</SelectItem>
                          <SelectItem value="scheduling">Appointment scheduling chaos</SelectItem>
                          <SelectItem value="payments">Payment processing and collections</SelectItem>
                          <SelectItem value="communication">Client communication and follow-up</SelectItem>
                          <SelectItem value="data-organization">Organizing client data and information</SelectItem>
                          <SelectItem value="time-management">Too much time on admin tasks</SelectItem>
                          <SelectItem value="growth">Scaling and growing the business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-method">Preferred Contact Method</Label>
                      <Select name="contact-method">
                        <SelectTrigger>
                          <SelectValue placeholder="How should we contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="text">Text message</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Details (Optional)</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Tell us more about your business and automation needs..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Schedule My Free Consultation"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to receive communications from Vegas Business Automation. 
                      We respect your privacy and won't spam you.
                    </p>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-card p-6 rounded-2xl border shadow-soft">
                  <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <a href="tel:(702)555-0123" className="text-muted-foreground hover:text-primary transition-smooth">
                          (702) 555-0123
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <a href="mailto:info@vegasbusinessautomation.com" className="text-muted-foreground hover:text-primary transition-smooth">
                          info@vegasbusinessautomation.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Service Area</div>
                        <div className="text-muted-foreground">
                          Las Vegas Metro Area<br />
                          Nevada
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Response Time</div>
                        <div className="text-muted-foreground">Within 4 business hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Elements */}
                <div className="bg-card p-6 rounded-2xl border shadow-soft">
                  <h3 className="text-xl font-bold text-foreground mb-6">Why Choose Us?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-foreground">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-foreground">30-Day Satisfaction Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-foreground">Local Las Vegas Business</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-foreground">No Long-Term Contracts</span>
                    </div>
                  </div>
                </div>

                {/* Call Now Button */}
                <div className="bg-gradient-to-r from-primary to-primary-dark p-6 rounded-2xl text-center text-white">
                  <h3 className="text-lg font-bold mb-2">Need to Talk Right Now?</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Call us directly for immediate assistance
                  </p>
                  <Button variant="secondary" size="lg" className="w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (702) 555-0123
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;