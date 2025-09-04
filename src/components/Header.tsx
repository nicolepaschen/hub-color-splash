import { ShoppingCart, Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationLinks = [
    "Hosting Features",
    "Plans & Pricing", 
    "WordPress Hosting",
    "Domains",
    "Website Builder",
    "About"
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Upper Row - Black Background */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Left side - Phone Number */}
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4" />
              <span className="font-medium">1-800-555-0123</span>
            </div>

            {/* Right side - Help, Login, Chat, Cart */}
            <div className="flex items-center space-x-4">
              {/* Help & Login Links */}
              <div className="hidden sm:flex items-center space-x-4 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </a>
              </div>

              {/* Chat Now Button */}
              <Button variant="secondary" size="sm" className="hidden sm:flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Chat Now</span>
              </Button>

              {/* Shopping Cart */}
              <button className="text-white hover:text-gray-300 transition-colors">
                <ShoppingCart className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Row - Main Navigation */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                Web Hosting Hub
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationLinks.map((link) => (
                <a 
                  key={link}
                  href={link === "Plans & Pricing" ? "/plans-pricing" : "#"} 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a 
                  key={link}
                  href={link === "Plans & Pricing" ? "/plans-pricing" : "#"} 
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/50 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              
              {/* Mobile-only links */}
              <div className="pt-4 border-t border-border/50">
                <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
                  Help Center
                </a>
                <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
                  Login
                </a>
                <Button variant="secondary" size="sm" className="mt-2 w-full justify-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;