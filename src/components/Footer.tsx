import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const companyLogos = [
    "Upwork", "Shift Technologies", "Experian", "Slickdeals", "Netflix", "Toyota", "Tillamook"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Company Logos Section */}
        <div className="text-center mb-12 pb-8 border-b border-background/20">
          <p className="text-sm text-background/60 mb-4">Trusted Experience From</p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-background/40">
            {companyLogos.map((company, index) => (
              <span key={index}>{company}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                <span className="text-foreground font-medium text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-medium">Agent Alvin</h3>
                <p className="text-sm text-background/60 -mt-1">agentalvin.ai</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed text-sm">
              Enterprise-level AI automation for small businesses. 10+ years Fortune 10 experience 
              building scalable systems that save money and increase revenue.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Navigation</h4>
            <div className="space-y-2">
              <a href="/" className="block text-background/80 hover:text-background transition-smooth text-sm">
                Home
              </a>
              <a href="/services" className="block text-background/80 hover:text-background transition-smooth text-sm">
                Services
              </a>
              <a href="/about" className="block text-background/80 hover:text-background transition-smooth text-sm">
                About
              </a>
              <a href="/case-studies" className="block text-background/80 hover:text-background transition-smooth text-sm">
                Case Studies
              </a>
              <a href="/contact" className="block text-background/80 hover:text-background transition-smooth text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Automation Services</h4>
            <div className="space-y-2">
              <a href="/services" className="block text-background/80 hover:text-background transition-smooth text-sm">
                Sales Automation
              </a>
              <a href="/services" className="block text-background/80 hover:text-background transition-smooth text-sm">
                Customer Service AI
              </a>
              <a href="/services" className="block text-background/80 hover:text-background transition-smooth text-sm">
                Marketing Automation
              </a>
              <a href="/services" className="block text-background/80 hover:text-background transition-smooth text-sm">
                Payment Processing
              </a>
              <a href="/services" className="block text-background/80 hover:text-background transition-smooth text-sm">
                Web & App Development
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Get Started</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-background/60" />
                <a href="mailto:hello@agentalvin.ai" className="text-background/80 hover:text-background transition-smooth text-sm">
                  hello@agentalvin.ai
                </a>
              </div>
              <p className="text-background/60 text-sm">
                Enterprise automation for small business budgets
              </p>
            </div>
            <Button variant="secondary" size="sm" className="mt-4">
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Agent Alvin. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-background/60 hover:text-background text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="/terms" className="text-background/60 hover:text-background text-sm transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;