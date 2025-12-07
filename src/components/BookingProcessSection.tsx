import { Phone, MapPin, CreditCard, Key, Shield } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Inquiry & Site Visit",
    description: "Free site visit confirmation",
  },
  {
    icon: MapPin,
    step: "02",
    title: "Plot Selection",
    description: "Choose your preferred plot + token payment",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Registry",
    description: "Immediate registry completion",
  },
  {
    icon: Key,
    step: "04",
    title: "Possession",
    description: "Instant possession given",
  },
];

export function BookingProcessSection() {
  return (
    <section id="process" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <span className="badge-gold mb-4">
            <Shield className="w-4 h-4" />
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How <span className="text-gradient">Booking Works?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple, transparent, and hassle-free process
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div 
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="card-elevated text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-bold text-secondary mb-2">STEP {item.step}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                
                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Trust Badge */}
          <div className="mt-10 text-center animate-fade-up delay-500">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent rounded-full">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">Secure & Transparent Process</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
