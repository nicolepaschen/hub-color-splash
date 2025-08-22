import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, ArrowRight } from "lucide-react";

const SupportSection = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our expert support team"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call us anytime at 1-800-555-0123"
    },
    {
      icon: Mail,
      title: "Tickets",
      description: "Submit a support ticket for detailed assistance"
    }
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get Your Questions Answered Quickly with 24/7 Expert Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated support team is here to help you succeed, whenever you need assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <option.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{option.title}</h3>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="default" className="text-lg px-8 py-6">
            See How We're Different
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;