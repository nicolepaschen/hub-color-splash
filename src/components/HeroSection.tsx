import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-businesses.jpg";

const HeroSection = () => {
  const features = [
    "No Technical Skills Required",
    "Make a Beautiful Website", 
    "Sell Your Products Online",
    "Grow Your Audience"
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-hover text-primary-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Best Website Hosting
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium opacity-90">
                Do What You Love, Leave The Rest To Us
              </h2>
            </div>

            {/* Feature List */}
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="text-sm font-bold">
                  50% OFF
                </Badge>
                <span className="text-sm opacity-80">Limited Time Offer</span>
              </div>
              
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl lg:text-4xl font-bold">$5.99</span>
                <span className="text-lg">/mo</span>
                <span className="text-lg line-through opacity-60">$11.99</span>
              </div>
              
              <p className="text-sm opacity-80">Starting price - billed annually</p>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 font-semibold"
            >
              Get Started Now
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Businesses with satisfied customers using web hosting services"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;