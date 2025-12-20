import { Button } from "@/components/ui/button";
import { Phone, Mountain } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Mountain className="w-8 h-8 text-primary" />
            <div>
              <h1 className="font-bold text-foreground leading-tight text-sm sm:text-base">Kailasha Hill Valley</h1>
              <p className="text-xs text-muted-foreground">Rajgir</p>
            </div>
          </a>
          
          {/* Call Button */}
          <Button 
            variant="call"
            size="sm" 
            onClick={() => window.open("tel:+916203434328", "_self")}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+91 6203434328</span>
            <span className="sm:hidden">Call Now</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
