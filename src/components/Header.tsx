import { ShoppingCart, Phone, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigationLinks = [
    "Hosting Features",
    "Plans & Pricing", 
    "WordPress Hosting",
    "Domains",
    "Website Builder",
    "About"
  ];

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
              <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-800">
                <ShoppingCart className="h-4 w-4" />
              </Button>
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
              <div className="text-2xl font-bold text-primary">
                Web Hosting Hub
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationLinks.map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Mobile Menu */}
            <Button variant="outline" size="sm" className="lg:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;