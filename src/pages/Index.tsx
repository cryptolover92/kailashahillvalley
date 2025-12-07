import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyBuySection } from "@/components/WhyBuySection";
import { PriceSection } from "@/components/PriceSection";
import { LayoutMapSection } from "@/components/LayoutMapSection";
import { GallerySection } from "@/components/GallerySection";
import { BookingProcessSection } from "@/components/BookingProcessSection";
import { CTASection } from "@/components/CTASection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyBuySection />
        <PriceSection />
        <LayoutMapSection />
        <GallerySection />
        <BookingProcessSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
