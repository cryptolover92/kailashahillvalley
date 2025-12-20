import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916203434328?text=Interested+in+Plot+at+Kailasha+Hill+Valley"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white animate-float"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </a>
      
      {/* Sticky Bottom Bar - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border p-3 md:hidden">
        <div className="flex gap-3">
          <Button 
            variant="whatsapp" 
            className="flex-1"
            onClick={() => window.open("https://wa.me/916203434328?text=Interested+in+Plot+at+Kailasha+Hill+Valley", "_blank")}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </Button>
          <Button 
            variant="call" 
            className="flex-1"
            onClick={() => window.open("tel:+916203434328", "_self")}
          >
            <Phone className="w-5 h-5" />
            Call Now
          </Button>
        </div>
      </div>
    </>
  );
}
