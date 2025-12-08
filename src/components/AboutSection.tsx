import { Building2, Shield, FileCheck, Users } from "lucide-react";

const highlights = [
  { icon: Building2, text: "Square Acres Infra Pvt. Ltd." },
  { icon: Shield, text: "Verified & Approved Plots" },
  { icon: FileCheck, text: "Clear Documentation" },
  { icon: Users, text: "Complete Customer Support" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <span className="badge-gold mb-4">
            <Building2 className="w-4 h-4" />
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Kailasha Hill Valley <span className="text-gradient">Project</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - About Content */}
          <div className="animate-fade-up delay-100">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                <span className="font-semibold text-foreground">Kailasha Hill Valley</span> is a premium plotting project by{" "}
                <span className="font-semibold text-primary">Square Acres Infra Pvt. Ltd.</span>, a trusted real estate company in Bihar known for transparent and secure property services. The company ensures verified plots, clear documentation, and complete customer support.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                This project reflects the same values—offering approved plots at a prime Rajgir location, proper road planning, gated surroundings, and immediate registry.{" "}
                <span className="font-semibold text-foreground">Kailasha Hill Valley</span> is ideal for both residential living and future investment growth.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - YouTube Video */}
          <div className="animate-fade-up delay-200">
            <div className="card-elevated overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/acUU4HCG8Pw"
                  title="Kailasha Hill Valley Project Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-primary/5 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  🎬 Watch our project walkthrough video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
