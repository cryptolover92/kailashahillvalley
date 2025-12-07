import { Camera } from "lucide-react";
import entranceImage from "@/assets/entrance-gate.jpg";
import ropewayImage from "@/assets/ropeway.jpg";
import panduPokharImage from "@/assets/pandu-pokhar.jpg";
import stadiumImage from "@/assets/stadium.jpg";
import templeImage from "@/assets/temple.jpg";

const galleryItems = [
  { image: entranceImage, title: "Project Entrance", description: "Grand gated entry" },
  { image: ropewayImage, title: "Ropeway", description: "Scenic cable car views" },
  { image: panduPokharImage, title: "Pandu Pokhar", description: "Historic pond area" },
  { image: stadiumImage, title: "Stadium Zone", description: "Sports development" },
  { image: templeImage, title: "Temple Areas", description: "Spiritual landmarks" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <span className="badge-green mb-4">
            <Camera className="w-4 h-4" />
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Rajgir – A City Growing as a{" "}
            <span className="text-gradient">Tourist & Smart Zone</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the beauty and development potential of this historic location
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-primary-foreground font-bold">{item.title}</h3>
                  <p className="text-primary-foreground/80 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
