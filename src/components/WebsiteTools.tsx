import { Code, Layers, ShoppingCart, Store } from "lucide-react";

const WebsiteTools = () => {
  const tools = [
    {
      icon: Code,
      name: "WordPress",
      description: "Get your site started instantly with our WordPress auto-install."
    },
    {
      icon: Layers,
      name: "Joomla",
      description: "Install Joomla!, the award-winning and powerful CMS, with just one click."
    },
    {
      icon: ShoppingCart,
      name: "WooCommerce", 
      description: "Add the popular WooCommerce eCommerce platform to your site easily."
    },
    {
      icon: Store,
      name: "PrestaShop",
      description: "Select PrestaShop upon checkout to have your e-Store created automatically."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Popular Website Tools & Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Install powerful content management systems and eCommerce platforms with just one click.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <tool.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{tool.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteTools;