import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle } from "lucide-react";
import layoutImage from "@/assets/project-layout.jpg";

export function LayoutMapSection() {
  const handleReservePlot = () => {
    const message = encodeURIComponent("Hi, I want to select and reserve a plot at Kailasha Hill Valley. Please share available options.");
    window.open(`https://wa.me/7488883287?text=${message}`, "_blank");
  };

  return (
    <section id="layout" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <span className="badge-green mb-4">
            <MapPin className="w-4 h-4" />
            Project Layout
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            View Complete <span className="text-gradient">Township Map</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select your preferred unit — corner, park-facing, entrance-side
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto animate-fade-up delay-100">
          <div className="card-elevated p-4 md:p-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={layoutImage} 
                alt="Kailasha Hill Valley Project Layout Map" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {["Corner Plots", "Park-Facing", "Entrance-Side"].map((type, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{type}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center animate-fade-up delay-200">
            <Button size="lg" onClick={handleReservePlot}>
              <MapPin className="w-5 h-5" />
              Choose Your Plot & Reserve Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
