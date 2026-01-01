import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpecsSection from "@/components/SpecsSection";
import AudienceSection from "@/components/AudienceSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <SpecsSection />
        <AudienceSection />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
