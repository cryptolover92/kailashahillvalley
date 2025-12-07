import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text + Buttons */}
          <div className="text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              FREE SITE VISIT
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Book Your Free{" "}
              <span className="text-secondary">Site Visit Now!</span>
            </h2>
            
            <p className="text-primary-foreground/80 text-lg mb-8">
              Don't miss this opportunity to own a premium plot in Rajgir's fastest-growing township. Limited plots available at current prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  const message = encodeURIComponent("Hi, I would like to get the brochure for Kailasha Hill Valley plots.");
                  window.open(`https://wa.me/7978000361?text=${message}`, "_blank");
                }}
              >
                Get Brochure Instantly
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open("tel:7978000361", "_self")}
              >
                <Phone className="w-5 h-5" />
                Call: 7978000361
              </Button>
            </div>
            
            <div className="mt-6">
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={() => {
                  const message = encodeURIComponent("Hi, I'm interested in Kailasha Hill Valley plots. Please share details.");
                  window.open(`https://wa.me/7978000361?text=${message}`, "_blank");
                }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
          
          {/* Right - Lead Form */}
          <div className="animate-fade-up delay-200">
            <LeadForm 
              title="Get Instant Callback" 
              showBrochure={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
