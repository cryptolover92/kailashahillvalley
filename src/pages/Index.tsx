import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyBuySection } from "@/components/WhyBuySection";
import { PriceSection } from "@/components/PriceSection";
import { LayoutMapSection } from "@/components/LayoutMapSection";
import { GallerySection } from "@/components/GallerySection";
import { BookingProcessSection } from "@/components/BookingProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
<main>
        <HeroSection />
        <AboutSection />
        <WhyBuySection />
        <PriceSection />
        <LayoutMapSection />
        <GallerySection />
        <BookingProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
