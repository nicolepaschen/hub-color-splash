import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingTable = () => {
  const plans = [
    {
      name: "Spark",
      price: "$5.99",
      originalPrice: "$11.99",
      period: "/mo",
      popular: false,
      features: [
        "1 Website",
        "Unmetered Bandwidth", 
        "100 GB SSD Storage",
        "Free Domain (1 Year)",
        "Free SSL Certificate",
        "cPanel Control Panel"
      ]
    },
    {
      name: "Nitro", 
      price: "$7.99",
      originalPrice: "$15.99",
      period: "/mo",
      popular: true,
      features: [
        "Unlimited Websites",
        "Unmetered Bandwidth",
        "Unlimited SSD Storage", 
        "Free Domain (1 Year)",
        "Free SSL Certificate",
        "Free Business Email",
        "Advanced Security"
      ]
    },
    {
      name: "Dynamo",
      price: "$12.99", 
      originalPrice: "$25.99",
      period: "/mo",
      popular: false,
      features: [
        "Unlimited Websites",
        "Unmetered Bandwidth",
        "Unlimited SSD Storage",
        "Free Domain (1 Year)", 
        "Free SSL Certificate",
        "Free Business Email",
        "Priority Support",
        "Advanced Performance"
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect Hosting Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All plans include everything you need to get started, with 50% off your first year.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative flex flex-col h-full ${plan.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary">
                  Most Popular
                </Badge>
              )}
              
              <Badge variant="secondary" className="absolute top-4 right-4 text-xs">
                50% OFF
              </Badge>
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mt-1">
                    <span className="text-sm line-through text-muted-foreground">{plan.originalPrice}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full mt-auto" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;