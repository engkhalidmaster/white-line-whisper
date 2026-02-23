import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DistrictsSection from "@/components/DistrictsSection";
import ServicesSection from "@/components/ServicesSection";
import NewsSection from "@/components/NewsSection";
import CitizenEngagement from "@/components/CitizenEngagement";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DistrictsSection />
        <ServicesSection />
        <NewsSection />
        <CitizenEngagement />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
