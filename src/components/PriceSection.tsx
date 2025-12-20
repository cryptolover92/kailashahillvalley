import { Button } from "@/components/ui/button";
import { Download, AlertTriangle, Check } from "lucide-react";

const pricingData = [
  { size: "820 sq.ft", oldPrice: "₹1,799", pricePerSqft: "₹1,599", total: "₹13,11,180", status: "booked" },
  { size: "920 sq.ft", oldPrice: "₹1,799", pricePerSqft: "₹1,599", total: "₹14,71,080", status: "booked" },
  { size: "1000 sq.ft", oldPrice: "₹1,799", pricePerSqft: "₹1,599", total: "₹15,99,000", status: "available" },
  { size: "1040 sq.ft", oldPrice: "₹1,799", pricePerSqft: "₹1,599", total: "₹16,62,960", status: "booked" },
  { size: "1100 sq.ft", oldPrice: "₹1,799", pricePerSqft: "₹1,599", total: "₹17,58,900", status: "available" },
  { size: "1300 sq.ft", oldPrice: "₹1,799", pricePerSqft: "₹1,599", total: "₹20,78,700", status: "booked" },
  { size: "1458 sq.ft", oldPrice: "₹1,799", pricePerSqft: "₹1,599", total: "₹23,31,342", status: "booked" },
  { size: "1749 sq.ft", oldPrice: "₹1,799", pricePerSqft: "₹1,599", total: "₹27,96,651", status: "available" },
  { size: "2400 sq.ft", oldPrice: "₹1,799", pricePerSqft: "₹1,599", total: "₹38,37,600", status: "available" },
];

export function PriceSection() {
  const handleDownloadPrice = () => {
    const message = encodeURIComponent("Hi, I would like to get the updated price sheet for Kailasha Hill Valley plots.");
    window.open(`https://wa.me/916203434328?text=${message}`, "_blank");
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
          <div className="card-elevated overflow-hidden overflow-x-auto">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-primary text-primary-foreground font-semibold text-center py-4 text-xs sm:text-sm md:text-base min-w-[400px]">
              <div className="px-2 md:px-4">Plot Size</div>
              <div className="px-2 md:px-4">Price/sq.ft</div>
              <div className="px-2 md:px-4">Total Price</div>
              <div className="px-2 md:px-4">Status</div>
            </div>
            
            {/* Table Body */}
            {pricingData.map((item, index) => (
              <div 
                key={index}
                className={`grid grid-cols-4 text-center py-3 md:py-4 border-b border-border last:border-b-0 hover:bg-accent transition-colors text-xs sm:text-sm md:text-base min-w-[400px] ${
                  index % 2 === 0 ? "bg-muted/50" : "bg-background"
                }`}
              >
                <div className="px-2 md:px-4 font-medium text-foreground flex items-center justify-center gap-1">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-primary hidden sm:block flex-shrink-0" />
                  <span className="truncate">{item.size}</span>
                </div>
                <div className="px-2 md:px-4 text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-1">
                  <span className="line-through text-muted-foreground/60 text-[10px] sm:text-xs md:text-sm">{item.oldPrice}</span>
                  <span className="text-primary font-medium text-xs sm:text-sm md:text-base">{item.pricePerSqft}</span>
                </div>
                <div className="px-2 md:px-4 font-bold text-primary text-xs sm:text-sm md:text-base truncate">{item.total}</div>
                <div className="px-2 md:px-4 flex items-center justify-center">
                  {item.status === "available" ? (
                    <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
                      <span className="hidden sm:inline text-xs md:text-sm">Available</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
                      <span className="hidden sm:inline text-xs md:text-sm">Booked</span>
                    </span>
                  )}
                </div>
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
