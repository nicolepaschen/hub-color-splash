import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import PricingTable from "@/components/PricingTable";
import WebsiteTools from "@/components/WebsiteTools";
import Testimonials from "@/components/Testimonials";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeatureHighlights />
        <PricingTable />
        <WebsiteTools />
        <Testimonials />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;