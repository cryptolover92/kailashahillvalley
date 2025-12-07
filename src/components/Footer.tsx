import { MapPin, Phone, Mail, Mountain } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-secondary" />
              <div>
                <h3 className="font-bold text-lg">Kailasha Hill Valley</h3>
                <p className="text-primary-foreground/60 text-sm">Rajgir</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Premium residential plots in Rajgir's most promising location. Invest in your future today.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:7978000361" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                7978000361
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Pilkhi Mauja, Near CRPF Camp, Rajgir, Bihar</span>
              </div>
            </div>
          </div>
          
          {/* Quick Note */}
          <div>
            <h4 className="font-bold text-lg mb-4">Limited Opportunity</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Limited plots available. Best for residential & investment purposes. Book your site visit today!
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary text-sm font-medium">Plots Selling Fast</span>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Kailasha Hill Valley, Rajgir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
