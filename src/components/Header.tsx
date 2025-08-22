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
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
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

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Phone Number - Desktop */}
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">1-800-555-0123</span>
            </div>

            {/* Help & Login Links */}
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Login
              </a>
            </div>

            {/* Chat Now Button */}
            <Button variant="secondary" size="sm" className="hidden sm:flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>Chat Now</span>
            </Button>

            {/* Shopping Cart */}
            <Button variant="outline" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>

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