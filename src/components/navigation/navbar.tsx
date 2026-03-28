"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
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
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur shadow-md py-2" : "bg-white py-4"
    )}>
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tighter text-primary leading-none">
                  D&apos;LEGACIES
                </span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-secondary uppercase leading-none mt-1 transition-all group-hover:tracking-[0.5em]">
                  E-PROCUREMENT
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all hover:text-primary relative py-1",
                  pathname === link.href 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary" 
                    : "text-muted-foreground/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 rounded-full shadow-premium transition-transform hover:scale-105">
              <Link href="/request" className="flex items-center">
                Get Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-primary hover:bg-muted focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b absolute top-full left-0 w-full animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="px-4 pt-4 pb-10 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-4 rounded-xl text-lg font-bold tracking-tight",
                  pathname === link.href ? "bg-primary/5 text-primary" : "text-muted-foreground hover:bg-muted/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 px-4">
              <Button asChild className="w-full bg-primary h-14 rounded-xl font-bold text-lg">
                <Link href="/request" onClick={() => setIsOpen(false)}>Start Sourcing Request</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
