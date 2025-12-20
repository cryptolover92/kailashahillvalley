import { Check, MapPin, FileCheck, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";
import heroImage from "@/assets/hero-hills.jpg";
import entranceImage from "@/assets/entrance-gate.jpg";

const features = [
  { icon: MapPin, text: "Prime Nagar Parishad location" },
  { icon: FileCheck, text: "Immediate Registry & Possession" },
  { icon: Building, text: "Approved Residential Township" },
];

export function HeroSection() {
  const handleWhatsAppVisit = () => {
    const message = encodeURIComponent("Hi, I want to book a FREE site visit for Kailasha Hill Valley plots in Rajgir.");
    window.open(`https://wa.me/916203434328?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen pt-20 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Kailasha Hill Valley Rajgir" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[90vh]">
          {/* Left Content */}
          <div className="text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="animate-pulse-slow">🔥</span>
              FREE SITE VISIT AVAILABLE
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Kailasha Hill Valley
              <span className="block text-secondary mt-2">Rajgir</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-primary-foreground/90 mb-6">
              Premium Residential Plots at Just{" "}
              <span className="text-primary-foreground/60 line-through">₹1799/sqft</span>{" "}
              <span className="text-secondary font-bold">₹1599/sqft</span>
            </p>
            
            {/* Features Checklist */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <span className="text-primary-foreground/90 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* Entrance Gate Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 max-w-md animate-fade-up delay-300">
              <img 
                src={entranceImage} 
                alt="Kailasha Hill Valley Entrance Gate" 
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                <p className="text-primary-foreground text-sm font-medium">Grand Entrance Gate</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  const message = encodeURIComponent("Hi, I would like to download the brochure for Kailasha Hill Valley.");
                  window.open(`https://wa.me/916203434328?text=${message}`, "_blank");
                }}
              >
                Download Brochure PDF
              </Button>
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={handleWhatsAppVisit}
              >
                Book Free Visit Now
              </Button>
            </div>
          </div>
          
          {/* Right - Lead Form */}
          <div className="animate-fade-up delay-200">
            <LeadForm 
              title="Get Price List & Arrange Visit" 
              showBrochure={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
