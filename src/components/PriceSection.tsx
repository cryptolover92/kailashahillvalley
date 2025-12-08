import { Button } from "@/components/ui/button";
import { Download, AlertTriangle, Check } from "lucide-react";

const pricingData = [
  { size: "820 sq.ft", pricePerSqft: "₹1,599", total: "₹13,11,180" },
  { size: "920 sq.ft", pricePerSqft: "₹1,599", total: "₹14,71,080" },
  { size: "1000 sq.ft", pricePerSqft: "₹1,599", total: "₹15,99,000" },
  { size: "1040 sq.ft", pricePerSqft: "₹1,599", total: "₹16,62,960" },
  { size: "1100 sq.ft", pricePerSqft: "₹1,599", total: "₹17,58,900" },
  { size: "1300 sq.ft", pricePerSqft: "₹1,599", total: "₹20,78,700" },
  { size: "1458 sq.ft", pricePerSqft: "₹1,599", total: "₹23,31,342" },
  { size: "1749 sq.ft", pricePerSqft: "₹1,599", total: "₹27,96,651" },
];

export function PriceSection() {
  const handleDownloadPrice = () => {
    const message = encodeURIComponent("Hi, I would like to get the updated price sheet for Kailasha Hill Valley plots.");
    window.open(`https://wa.me/7978000361?text=${message}`, "_blank");
  };

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <span className="badge-gold mb-4">
            <AlertTriangle className="w-4 h-4" />
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Best Price <span className="text-gradient">Guaranteed</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Premium plots at unbeatable prices – Starting at just ₹1599/sq.ft
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-fade-up delay-100">
          <div className="card-elevated overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-primary text-primary-foreground font-semibold text-center py-4">
              <div className="px-4">Plot Size</div>
              <div className="px-4">Price/sq.ft</div>
              <div className="px-4">Total Price</div>
            </div>
            
            {/* Table Body */}
            {pricingData.map((item, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 text-center py-4 border-b border-border last:border-b-0 hover:bg-accent transition-colors ${
                  index % 2 === 0 ? "bg-muted/50" : "bg-background"
                }`}
              >
                <div className="px-4 font-medium text-foreground flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-primary hidden md:block" />
                  {item.size}
                </div>
                <div className="px-4 text-muted-foreground">{item.pricePerSqft}</div>
                <div className="px-4 font-bold text-primary">{item.total}</div>
              </div>
            ))}
          </div>
          
          {/* Warning Note */}
          <div className="mt-6 p-4 bg-secondary/10 border border-secondary/30 rounded-xl flex items-start gap-3 animate-fade-up delay-200">
            <AlertTriangle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Prices increasing soon!</p>
              <p className="text-muted-foreground text-sm">Book at current rates to secure the best deal. Limited plots available.</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-8 text-center animate-fade-up delay-300">
            <Button variant="secondary" size="lg" onClick={handleDownloadPrice}>
              <Download className="w-5 h-5" />
              Download Updated Price Sheet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
