import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Bloom Bakery",
      content: "Web Hosting Hub made it incredibly easy to get my bakery's website online. The support team was amazing and helped me every step of the way.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "Tech Consultant",
      content: "I've been hosting multiple client websites here for 3 years. The uptime is fantastic and the performance is consistently excellent.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "Artisan Jewelry",
      content: "Setting up my online store was so simple with their one-click WooCommerce install. Sales have been growing steadily since launch!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Web Hosting Hub for their online success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;