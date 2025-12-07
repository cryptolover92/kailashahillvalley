import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send, Download, CheckCircle } from "lucide-react";

interface LeadFormProps {
  variant?: "hero" | "compact" | "full";
  showBrochure?: boolean;
  title?: string;
}

const plotSizes = ["1000 sq.ft", "1100 sq.ft", "1300 sq.ft", "1458 sq.ft", "1749 sq.ft"];

export function LeadForm({ variant = "hero", showBrochure = true, title }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    plotSize: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile) {
      toast({
        title: "Please fill all fields",
        description: "Name and mobile number are required",
        variant: "destructive",
      });
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      toast({
        title: "Invalid mobile number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      const whatsappMessage = encodeURIComponent(
        `Hi, I'm interested in Kailasha Hill Valley plots.\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nPreferred Plot Size: ${formData.plotSize || "Not specified"}`
      );
      window.open(`https://wa.me/7978000361?text=${whatsappMessage}`, "_blank");
      
      toast({
        title: "Request Submitted!",
        description: "Our team will contact you shortly.",
      });
      
      setIsSubmitting(false);
      setFormData({ name: "", mobile: "", plotSize: "" });
    }, 500);
  };

  const handleBrochureDownload = () => {
    const whatsappMessage = encodeURIComponent(
      "Hi, I would like to download the brochure for Kailasha Hill Valley plots."
    );
    window.open(`https://wa.me/7978000361?text=${whatsappMessage}`, "_blank");
    toast({
      title: "Brochure Request Sent",
      description: "You'll receive the brochure on WhatsApp shortly!",
    });
  };

  return (
    <div className={`bg-card rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_-4px_hsl(152_69%_31%_/_0.15)] ${variant === "compact" ? "max-w-md" : ""}`}>
      {title && (
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{title}</h3>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="h-12 border-border bg-background focus:border-primary"
          />
        </div>
        
        <div>
          <Input
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })}
            className="h-12 border-border bg-background focus:border-primary"
          />
        </div>
        
        <div>
          <select
            value={formData.plotSize}
            onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
            className="w-full h-12 px-3 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select Plot Size</option>
            {plotSizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        
        <Button 
          type="submit" 
          className="w-full" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              <Send className="w-5 h-5" />
              Get Price List & Arrange Visit
            </>
          )}
        </Button>
        
        {showBrochure && (
          <Button 
            type="button"
            variant="secondary" 
            className="w-full" 
            size="lg"
            onClick={handleBrochureDownload}
          >
            <Download className="w-5 h-5" />
            Download Brochure PDF
          </Button>
        )}
      </form>
      
      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <CheckCircle className="w-4 h-4 text-primary" />
        <span>100% Free, No Spam</span>
      </div>
    </div>
  );
}
