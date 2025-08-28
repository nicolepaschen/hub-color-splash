import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X } from "lucide-react";

const PlansAndPricing = () => {
  const plans = [
    {
      name: "Spark",
      subtitle: "Beginner",
      description: "Great Starter Plan - Quick Setup",
      originalPrice: "$11.99",
      price: "$5.99",
      discount: "50%",
      popular: false,
      websites: "2",
      databases: "10",
      performance: "Standard",
      dataCenter: false,
      support: "Live Chat"
    },
    {
      name: "Nitro", 
      subtitle: "Best Value",
      description: "Small Business Hosting - Better Performance",
      originalPrice: "$15.49",
      price: "$7.99", 
      discount: "48%",
      popular: true,
      websites: "Unlimited",
      databases: "Unlimited", 
      performance: "2X",
      dataCenter: true,
      support: "Live Chat & Phone"
    },
    {
      name: "Dynamo",
      subtitle: "More Speed", 
      description: "Built for Highly Dynamic Sites - Most Resources",
      originalPrice: "$20.49",
      price: "$9.99",
      discount: "51%", 
      popular: false,
      websites: "Unlimited",
      databases: "Unlimited",
      performance: "4X", 
      dataCenter: true,
      support: "Live Chat & Phone"
    }
  ];

  const commonFeatures = [
    "Free Domain (1 Year)",
    "Free SSL Certificate", 
    "Free SSD Storage (20x Faster)",
    "Unlimited Storage & Bandwidth",
    "Unlimited Email Accounts",
    "$150 Free Advertising Credits",
    "Free Website Builder (BoldGrid)", 
    "400+ One-Click Apps",
    "Auto-Install WordPress & PrestaShop",
    "SSH Access",
    "Free Website Transfer (3 sites)",
    "90-Day Money-Back Guarantee"
  ];

  const comparisonFeatures = [
    { name: "Websites", spark: "2", nitro: "Unlimited", dynamo: "Unlimited" },
    { name: "MySQL & PostgreSQL Databases", spark: "10", nitro: "Unlimited", dynamo: "Unlimited" },
    { name: "Performance & Speed", spark: "Standard", nitro: "2X", dynamo: "4X" },
    { name: "Parked Domains", spark: "5", nitro: "Unlimited", dynamo: "Unlimited" },
    { name: "Sub Domains", spark: "25", nitro: "Unlimited", dynamo: "Unlimited" },
    { name: "Choice of Data Center", spark: false, nitro: true, dynamo: true },
    { name: "24/7/365 Support", spark: "Live Chat", nitro: "Live Chat & Phone", dynamo: "Live Chat & Phone" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Web Hosting Plans
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Powerful, Scalable and Affordable Shared Hosting
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pick a hosting plan to get started. All plans include everything you need with up to 51% off.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative flex flex-col h-full ${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary">
                      Most Popular
                    </Badge>
                  )}
                  
                  <Badge variant="secondary" className="absolute top-4 right-4 text-xs">
                    {plan.discount} OFF
                  </Badge>
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{plan.subtitle}</p>
                    <p className="text-xs text-muted-foreground mt-1">{plan.description}</p>
                    
                    <div className="mt-6">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-lg text-muted-foreground">/mo</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 mt-1">
                        <span className="text-sm line-through text-muted-foreground">{plan.originalPrice}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-3 mb-6 flex-1">
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>Websites:</span>
                          <span className="font-medium">{plan.websites}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Databases:</span>
                          <span className="font-medium">{plan.databases}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Performance:</span>
                          <span className="font-medium">{plan.performance}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Support:</span>
                          <span className="font-medium">{plan.support}</span>
                        </div>
                      </div>
                    </div>

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

        {/* Common Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                All Plans Include
              </h2>
              <p className="text-lg text-muted-foreground">
                Every hosting plan comes with these powerful features at no extra cost
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {commonFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-sm">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Detailed Plan Comparison
              </h2>
              <p className="text-lg text-muted-foreground">
                Compare all features across our hosting plans
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block max-w-6xl mx-auto">
              <table className="w-full border-collapse bg-background rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Spark</th>
                    <th className="text-center p-4 font-semibold bg-primary/5">Nitro</th>
                    <th className="text-center p-4 font-semibold">Dynamo</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="p-4 font-medium">{feature.name}</td>
                      <td className="p-4 text-center">
                        {typeof feature.spark === 'boolean' ? (
                          feature.spark ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-red-500 mx-auto" />
                        ) : (
                          feature.spark
                        )}
                      </td>
                      <td className="p-4 text-center bg-primary/5">
                        {typeof feature.nitro === 'boolean' ? (
                          feature.nitro ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-red-500 mx-auto" />
                        ) : (
                          feature.nitro
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof feature.dynamo === 'boolean' ? (
                          feature.dynamo ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-red-500 mx-auto" />
                        ) : (
                          feature.dynamo
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Accordion */}
            <div className="lg:hidden max-w-2xl mx-auto">
              <Accordion type="multiple" className="w-full">
                {comparisonFeatures.map((feature, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg mb-4">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline">
                      <span className="font-medium text-left">{feature.name}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-border">
                          <span className="font-medium">Spark</span>
                          <span className="flex items-center">
                            {typeof feature.spark === 'boolean' ? (
                              feature.spark ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />
                            ) : (
                              feature.spark
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border bg-primary/5 -mx-4 px-4 rounded">
                          <span className="font-medium">Nitro</span>
                          <span className="flex items-center">
                            {typeof feature.nitro === 'boolean' ? (
                              feature.nitro ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />
                            ) : (
                              feature.nitro
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="font-medium">Dynamo</span>
                          <span className="flex items-center">
                            {typeof feature.dynamo === 'boolean' ? (
                              feature.dynamo ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />
                            ) : (
                              feature.dynamo
                            )}
                          </span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers with our reliable web hosting. 
              90-day money-back guarantee on all plans.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Choose Your Plan
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlansAndPricing;