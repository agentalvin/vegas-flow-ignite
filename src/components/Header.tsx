import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Vegas Business</h1>
              <p className="text-sm text-muted-foreground -mt-1">Automation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </Link>
            <Link to="/case-studies" className="text-foreground hover:text-primary transition-smooth font-medium">
              Case Studies
            </Link>
            <Link to="/resources" className="text-foreground hover:text-primary transition-smooth font-medium">
              Resources
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:(702)555-0123" className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-smooth">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(702) 555-0123</span>
            </a>
            <Button variant="hero" size="sm">
              Free Audit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-primary-dark transition-smooth"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-foreground hover:text-primary transition-smooth font-medium">
                Home
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-smooth font-medium">
                Services
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-smooth font-medium">
                About
              </Link>
              <Link to="/case-studies" className="text-foreground hover:text-primary transition-smooth font-medium">
                Case Studies
              </Link>
              <Link to="/resources" className="text-foreground hover:text-primary transition-smooth font-medium">
                Resources
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-smooth font-medium">
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <a href="tel:(702)555-0123" className="flex items-center space-x-2 text-primary">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(702) 555-0123</span>
                </a>
                <Button variant="hero" size="sm" className="self-start">
                  Free Audit
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;