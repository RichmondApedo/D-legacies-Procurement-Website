"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md border-b shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col group">
          <span className={cn(
            "text-2xl font-black tracking-tighter leading-none transition-colors",
            scrolled ? "text-primary" : "text-primary md:text-white"
          )}>
            D&apos;LEGACIES
          </span>
          <span className={cn(
            "text-[9px] font-bold tracking-[0.3em] uppercase transition-colors",
            scrolled ? "text-muted-foreground" : "text-muted-foreground md:text-white/70"
          )}>
            E-PROCUREMENT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-all hover:text-secondary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all hover:after:w-full",
                scrolled ? "text-primary" : "text-white",
                pathname === link.href && (scrolled ? "text-secondary after:w-full" : "text-secondary after:w-full")
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-secondary text-primary font-bold hover:bg-secondary/90 shadow-lg shadow-secondary/20">
            <Link href="/request">Get Quote</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden p-2 rounded-lg", scrolled ? "text-primary" : "text-white")} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b p-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg font-bold p-2 transition-colors",
                pathname === link.href ? "text-secondary" : "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full bg-primary text-white font-bold h-12">
            <Link href="/request" onClick={() => setIsOpen(false)}>Get Quote</Link>
          </Button>
        </div>
      )}
    </header>
  );
}