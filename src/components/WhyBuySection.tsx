import { 
  Shield, 
  MapPin, 
  Mountain, 
  Fence, 
  Route, 
  TrendingUp,
  CheckCircle
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Near CRPF Training Centre",
    description: "High-security zone with excellent infrastructure",
  },
  {
    icon: MapPin,
    title: "Nagar Parishad Zone",
    description: "Adjacent to Pilkhi Mauja, prime municipal area",
  },
  {
    icon: Mountain,
    title: "Tourist Attractions Nearby",
    description: "Close to Pandu Pokhar, Ropeway & Glass Bridge",
  },
  {
    icon: Fence,
    title: "Gated Community",
    description: "Boundary wall + secured gated entrance",
  },
  {
    icon: Route,
    title: "Wide Internal Roads",
    description: "20ft & 16ft wide roads for easy access",
  },
  {
    icon: TrendingUp,
    title: "High-Return Investment",
    description: "Residential + excellent appreciation potential",
  },
];

export function WhyBuySection() {
  return (
    <section id="why-buy" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <span className="badge-green mb-4">
            <CheckCircle className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Buy Your Plot at{" "}
            <span className="text-gradient">Kailasha Hill Valley?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Invest in a location that combines natural beauty, strategic accessibility, and exceptional growth potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-elevated group hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
