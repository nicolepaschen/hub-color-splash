import { Globe, Mail, Shield, ShoppingBag, Settings, Zap, HardDrive, ArrowRightLeft } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      icon: Globe,
      title: "Create My First Website",
      subtitle: "WordPress / BoldGrid"
    },
    {
      icon: Mail,
      title: "Secure Business Email",
      subtitle: "unlimited"
    },
    {
      icon: Shield,
      title: "FREE Domain",
      subtitle: "with purchase"
    },
    {
      icon: ShoppingBag,
      title: "Set Up My eCommerce Shop",
      subtitle: "1-Click Auto-Install"
    },
    {
      icon: Settings,
      title: "Website Management",
      subtitle: "cPanel"
    },
    {
      icon: Shield,
      title: "FREE SSL",
      subtitle: "security included"
    },
    {
      icon: Zap,
      title: "Quick Website Speed",
      subtitle: "SSD"
    },
    {
      icon: ArrowRightLeft,
      title: "Migrate My Website For Me",
      subtitle: "zero-downtime"
    }
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get all the essential tools and features to build, grow, and manage your website with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;