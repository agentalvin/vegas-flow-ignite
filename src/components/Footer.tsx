import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Vegas Business</h3>
                <p className="text-sm text-primary-foreground/80 -mt-1">Automation</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Helping Las Vegas service businesses eliminate manual processes and grow through smart automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-primary-foreground/80 hover:text-white transition-smooth">
                Home
              </a>
              <a href="/services" className="block text-primary-foreground/80 hover:text-white transition-smooth">
                Services
              </a>
              <a href="/about" className="block text-primary-foreground/80 hover:text-white transition-smooth">
                About
              </a>
              <a href="/case-studies" className="block text-primary-foreground/80 hover:text-white transition-smooth">
                Case Studies
              </a>
              <a href="/contact" className="block text-primary-foreground/80 hover:text-white transition-smooth">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              <a href="/services" className="block text-primary-foreground/80 hover:text-white transition-smooth">
                Lead Capture Systems
              </a>
              <a href="/services" className="block text-primary-foreground/80 hover:text-white transition-smooth">
                Client Communication
              </a>
              <a href="/services" className="block text-primary-foreground/80 hover:text-white transition-smooth">
                Payment Processing
              </a>
              <a href="/services" className="block text-primary-foreground/80 hover:text-white transition-smooth">
                Business Dashboards
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:(702)555-0123" className="text-primary-foreground/80 hover:text-white transition-smooth">
                  (702) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:info@vegasbusinessautomation.com" className="text-primary-foreground/80 hover:text-white transition-smooth">
                  info@vegasbusinessautomation.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">
                  Las Vegas Metro Area<br />
                  Nevada
                </span>
              </div>
            </div>
            <Button variant="secondary" size="sm" className="mt-4">
              Schedule Free Consultation
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Vegas Business Automation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-primary-foreground/60 hover:text-white text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="/terms" className="text-primary-foreground/60 hover:text-white text-sm transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;