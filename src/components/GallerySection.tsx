import { Camera, MapPin } from "lucide-react";
import entranceImage from "@/assets/entrance-gate.jpg";
import ropewayImage from "@/assets/ropeway.jpg";
import panduPokharImage from "@/assets/pandu-pokhar.jpg";
import stadiumImage from "@/assets/stadium.jpg";
import templeImage from "@/assets/temple.jpg";

const galleryItems = [
  { image: entranceImage, title: "Rajgir Chowk", distance: "5 km", description: "Main town center" },
  { image: panduPokharImage, title: "Pandu Pokhar", distance: "4 km", description: "Historic pond area" },
  { image: ropewayImage, title: "Nagar Parishad", distance: "3 km", description: "Municipal office" },
  { image: stadiumImage, title: "Viraytan Hospital", distance: "3.5 km", description: "Healthcare facility" },
  { image: templeImage, title: "Nalanda University", distance: "500 m", description: "Heritage campus" },
];

const additionalLocations = [
  { title: "CRPF Camp", distance: "500 m" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <span className="badge-green mb-4">
            <Camera className="w-4 h-4" />
            Nearby Landmarks
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Prime Location with{" "}
            <span className="text-gradient">Key Amenities Nearby</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Strategically located near important landmarks and facilities
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer animate-fade-up shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Distance Badge - Always Visible */}
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {item.distance}
              </div>
              
              {/* Overlay with Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-primary-foreground font-bold text-sm md:text-base">{item.title}</h3>
                  <p className="text-primary-foreground/80 text-xs md:text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Location Badge */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-up delay-300">
          {additionalLocations.map((loc, index) => (
            <div 
              key={index}
              className="inline-flex items-center gap-2 bg-accent border border-border px-4 py-2 rounded-full"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">{loc.title}</span>
              <span className="text-primary font-bold">{loc.distance}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
