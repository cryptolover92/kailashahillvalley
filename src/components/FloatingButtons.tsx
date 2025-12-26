import { MessageCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingButtons() {
  const handleDownloadBrochure = () => {
    // For now, open WhatsApp to request brochure - can be updated later with actual PDF
    window.open("https://wa.me/916203434328?text=Please+send+me+the+brochure+for+Kailasha+Hill+Valley", "_blank");
  };

  return (
    <div className="fixed bottom-[52px] left-0 right-0 z-40 bg-card border-t border-border p-3">
      <div className="flex gap-2 max-w-4xl mx-auto">
        <Button 
          variant="whatsapp" 
          className="flex-1"
          onClick={() => window.open("https://wa.me/916203434328?text=Interested+in+Plot+at+Kailasha+Hill+Valley", "_blank")}
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 bg-amber-500 hover:bg-amber-600 text-white border-amber-500 hover:border-amber-600"
          onClick={handleDownloadBrochure}
        >
          <Download className="w-5 h-5" />
          <span className="hidden sm:inline">Download Brochure</span>
          <span className="sm:hidden">Brochure</span>
        </Button>
      </div>
    </div>
  );
}
