import { Globe, Mail, Shield, ShoppingBag, Settings, Zap, HardDrive, ArrowRightLeft } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      icon: Globe,
      title: "Create My First Website",
      subtitle: "Non-Technical install for WordPress and BoldGrid."
    },
    {
      icon: Mail,
      title: "Secure Business Email",
      subtitle: "Provided with unlimited email accounts to safely run your business online."
    },
    {
      icon: Shield,
      title: "Free Domain",
      subtitle: "Choose a domain name that fits your business. Sign up today to get a free domain credit."
    },
    {
      icon: ShoppingBag,
      title: "Set Up My eCommerce Shop",
      subtitle: "A 1-Click Auto-Install will instantly create your eCommerce shop."
    },
    {
      icon: Settings,
      title: "Website Management",
      subtitle: (
        <>
          <a 
            href="https://www.webhostinghub.com/cpanel-hosting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors underline"
          >
            cPanel
          </a>
          , is the web's most trusted control panel and is already included.
        </>
      )
    },
    {
      icon: Shield,
      title: "Free SSL",
      subtitle: "Sign up today for a free SSL certificate. Show your visitors that your site is trustworthy."
    },
    {
      icon: Zap,
      title: "Quick Website Speed",
      subtitle: "Faster websites increase conversion rates and user engagement with SSDs."
    },
    {
      icon: ArrowRightLeft,
      title: "Migrate My Website For Me",
      subtitle: "Zero downtime transfers will make your migration stress-free."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to <span className="text-gradient">Succeed Online</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get all the essential tools and features to build, grow, and manage your website with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-modern p-8 text-center card-hover group">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-medium">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
