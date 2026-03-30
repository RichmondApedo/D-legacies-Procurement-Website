"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Globe, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500",
      scrolled 
        ? "bg-white/95 backdrop-blur-md border-b shadow-sm py-4" 
        : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col group">
          <span className={cn(
            "text-2xl font-black tracking-tighter leading-none transition-colors",
            scrolled ? "text-primary" : "text-white"
          )}>
            D&apos;LEGACIES
          </span>
          <span className={cn(
            "text-[9px] font-bold tracking-[0.3em] uppercase transition-colors",
            scrolled ? "text-secondary" : "text-secondary"
          )}>
            E-PROCUREMENT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-bold transition-all hover:text-secondary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all hover:after:w-full",
                scrolled ? "text-primary" : "text-white/90",
                pathname === link.href && "text-secondary after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-white/20 hidden lg:block"></div>
          <Button asChild className="bg-secondary text-primary font-black hover:bg-secondary/90 rounded-xl shadow-lg shadow-secondary/20 h-11 px-6">
            <Link href="/request">Get Quote</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden p-2 rounded-xl", scrolled ? "text-primary" : "text-white")} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white animate-in slide-in-from-right duration-300 flex flex-col pt-12">
          <div className="container mx-auto px-4 flex justify-between items-center mb-16">
            <Link href="/" className="flex flex-col" onClick={() => setIsOpen(false)}>
              <span className="text-2xl font-black tracking-tighter leading-none text-primary">
                D&apos;LEGACIES
              </span>
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-secondary">
                E-PROCUREMENT
              </span>
            </Link>
            <button 
              className="p-2 rounded-xl text-primary bg-muted" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <div className="container mx-auto px-6 flex flex-col space-y-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-4xl font-black tracking-tight transition-all",
                  pathname === link.href ? "text-secondary translate-x-3" : "text-primary hover:text-secondary"
                )}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto bg-muted/30 p-10 space-y-8 border-t">
            <Button asChild size="lg" className="w-full bg-primary text-white font-black h-16 rounded-2xl text-xl shadow-2xl shadow-primary/20">
              <Link href="/request" onClick={() => setIsOpen(false)}>Secure a Quote</Link>
            </Button>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 text-primary font-bold">
                <div className="p-2 bg-white rounded-lg shadow-sm"><Phone className="h-4 w-4" /></div>
                <span>055 775 9388</span>
              </div>
              <div className="flex items-row space-x-3 pt-2">
                {/* Social placeholders for mobile */}
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border flex items-center justify-center text-primary/40"><Target className="h-4 w-4" /></div>
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border flex items-center justify-center text-primary/40"><Globe className="h-4 w-4" /></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}