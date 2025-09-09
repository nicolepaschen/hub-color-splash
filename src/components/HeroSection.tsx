import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-businesses.jpg";

const HeroSection = () => {
  const features = [
    "No Technical Skills Required",
    "Make a Beautiful Website", 
    "Sell Your Products",
    "Grow Your Audience"
  ];

  return (
    <section className="relative gradient-hero text-white py-24 overflow-hidden">
      {/* Modern decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Best Website <span className="text-secondary">Hosting</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white/90">
                Do What You Love, Leave The Rest To Us
              </h2>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 inline-block border border-white/20 shadow-modern-xl">
              <div className="flex items-center space-x-4 mb-6">
                <Badge variant="secondary" className="text-sm font-bold px-4 py-2 shadow-lg">
                  🎉 50% OFF
                </Badge>
                <span className="text-white/70 text-sm">Limited Time Offer</span>
              </div>
              
              <div className="flex items-baseline space-x-3 mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-secondary">$5.99</span>
                <span className="text-xl">/mo</span>
                <span className="text-xl line-through opacity-60">$11.99</span>
              </div>
              
              <p className="text-white/80 mb-6">Starting price - billed annually</p>

              <Button 
                size="lg" 
                className="gradient-secondary hover:shadow-glow text-white px-10 py-4 text-xl font-bold btn-modern w-full"
              >
                Get Started Now 🚀
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl"></div>
            <img 
              src={heroImage} 
              alt="Businesses with satisfied customers using web hosting services"
              className="relative w-full h-auto rounded-2xl shadow-modern-xl border-4 border-white/30"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white px-6 py-3 rounded-2xl font-bold shadow-modern-lg">
              ⭐ 99.9% Uptime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;