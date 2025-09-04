import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Bloom Bakery",
      content: "Web Hosting Hub made it incredibly easy to get my bakery's website online. The support team was amazing every step of the way.",
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
    },
    {
      name: "David Thompson",
      company: "Photography Studio",
      content: "The website speed is incredible! My photography portfolio loads lightning fast, and clients are impressed with the professional look.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      company: "Local Restaurant",
      content: "Moving from our old host was seamless. The migration team handled everything, and we experienced zero downtime during the transfer.",
      rating: 5
    },
    {
      name: "James Mitchell",
      company: "Fitness Coach",
      content: "The cPanel interface is so intuitive! Managing my fitness blog and client portal has never been easier. Great value for money.",
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

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Desktop arrows - hidden on mobile */}
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          {/* Mobile arrows - positioned below carousel */}
          <div className="flex justify-center space-x-4 mt-6 md:hidden">
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
