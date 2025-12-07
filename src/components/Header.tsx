import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Mountain } from "lucide-react";

const navLinks = [
  { href: "#why-buy", label: "Why Us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#layout", label: "Layout" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Mountain className="w-8 h-8 text-primary" />
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground leading-tight">Kailasha Hill Valley</h1>
              <p className="text-xs text-muted-foreground">Rajgir</p>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              className="hidden sm:flex"
              onClick={() => window.open("tel:7978000361", "_self")}
            >
              <Phone className="w-4 h-4" />
              7978000361
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-foreground hover:bg-accent rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
