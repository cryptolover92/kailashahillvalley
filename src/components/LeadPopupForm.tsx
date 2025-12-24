import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, X, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const plotSizes = ["1000 sq.ft", "1200 sq.ft", "1800 sq.ft", "2400 sq.ft"];

export function LeadPopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    plotSize: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasSeenPopup = sessionStorage.getItem("leadPopupShown");
    
    if (!hasSeenPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("leadPopupShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.mobile.trim()) {
      toast({
        title: "Please fill required fields",
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
    
    try {
      const { error } = await supabase.from("leads").insert({
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        plot_size: formData.plotSize || null,
        message: formData.message.trim() || null,
        source: "popup_form",
      });

      if (error) throw error;

      toast({
        title: "Thank you!",
        description: "Our team will contact you shortly.",
      });
      
      setIsOpen(false);
      setFormData({ name: "", mobile: "", plotSize: "", message: "" });
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            🏡 Get Exclusive Offers!
          </DialogTitle>
        </DialogHeader>
        
        <p className="text-center text-muted-foreground text-sm mb-4">
          Fill the form below and get instant callback with best prices
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 border-border bg-background focus:border-primary"
            />
          </div>
          
          <div>
            <Input
              type="tel"
              placeholder="Mobile Number *"
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
              <option value="">Select Plot Size (Optional)</option>
              {plotSizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          
          <div>
            <Textarea
              placeholder="Your Message (Optional)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="border-border bg-background focus:border-primary resize-none"
              rows={3}
            />
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
                Get Callback Now
              </>
            )}
          </Button>
        </form>
        
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <CheckCircle className="w-4 h-4 text-primary" />
          <span>100% Free, No Spam</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
