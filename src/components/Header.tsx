import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-medium text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl font-medium text-foreground">Agent Alvin</h1>
              <p className="text-xs text-muted-foreground -mt-1">agentalvin.ai</p>
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
            <Link to="/my-work" className="text-foreground hover:text-primary transition-smooth font-medium">
              My Work
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:hello@agentalvin.ai" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              hello@agentalvin.ai
            </a>
            <Button variant="default" size="sm">
              Schedule Consultation
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
              <Link to="/my-work" className="text-foreground hover:text-primary transition-smooth font-medium">
                My Work
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-smooth font-medium">
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <a href="mailto:hello@agentalvin.ai" className="text-muted-foreground">
                  hello@agentalvin.ai
                </a>
                <Button variant="default" size="sm" className="self-start">
                  Schedule Consultation
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