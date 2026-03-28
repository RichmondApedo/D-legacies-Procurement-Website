"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b p-8 space-y-6 shadow-2xl animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-2xl font-black transition-colors",
                pathname === link.href ? "text-secondary" : "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 space-y-4">
            <Button asChild className="w-full bg-primary text-white font-bold h-14 rounded-xl text-lg">
              <Link href="/request" onClick={() => setIsOpen(false)}>Secure a Quote</Link>
            </Button>
            <div className="flex items-center justify-center space-x-2 text-primary/60 font-bold">
              <Phone className="h-4 w-4" />
              <span>055 775 9388</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}