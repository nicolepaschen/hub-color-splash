import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = {
    "Products & Solutions": [
      "Shared Hosting",
      "WordPress Hosting", 
      "VPS Hosting",
      "Dedicated Servers",
      "Domain Names",
      "Website Builder",
      "SSL Certificates"
    ],
    "Applications Hosting": [
      "WordPress",
      "Joomla",
      "Drupal", 
      "Magento",
      "WooCommerce",
      "PrestaShop",
      "Custom Applications"
    ],
    "Support & Community": [
      "24/7 Live Chat",
      "Phone Support",
      "Help Center",
      "Video Tutorials",
      "Community Forum",
      "Knowledge Base",
      "System Status"
    ],
    "About Company": [
      "About Us",
      "Our Story",
      "Data Centers",
      "Careers",
      "Press Room",
      "Partners",
      "Affiliates"
    ]
  };

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Contact Information */}
        <div className="mb-8">
          <div className="text-2xl font-bold text-primary mb-4">Web Hosting Hub</div>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>1-800-555-0123</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>123 Web Street, Internet City, IC 12345</span>
            </div>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Footer */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Web Hosting Hub. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;