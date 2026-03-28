"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
      scrolled 
        ? "bg-white/80 backdrop-blur-xl border-b border-primary/5 py-3" 
        : "bg-transparent py-6"
    )}>
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="flex flex-col">
                <span className={cn(
                  "text-3xl font-bold tracking-tighter leading-none transition-colors duration-500",
                  scrolled || pathname !== "/" ? "text-primary" : "text-white"
                )}>
                  D&apos;LEGACIES
                </span>
                <span className={cn(
                  "text-[11px] font-bold tracking-[0.5em] uppercase leading-none mt-1 transition-all group-hover:tracking-[0.6em]",
                  scrolled || pathname !== "/" ? "text-secondary" : "text-secondary/80"
                )}>
                  E-PROCUREMENT
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-secondary relative py-1",
                  pathname === link.href 
                    ? scrolled || pathname !== "/" ? "text-primary" : "text-white"
                    : scrolled || pathname !== "/" ? "text-muted-foreground/70" : "text-white/60"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary animate-in fade-in zoom-in duration-500"></span>
                )}
              </Link>
            ))}
            <Button asChild variant="default" className={cn(
              "font-bold px-10 rounded-full shadow-lg transition-all hover:scale-105",
              scrolled || pathname !== "/" 
                ? "bg-primary hover:bg-primary/90 text-white" 
                : "bg-white text-primary hover:bg-white/90"
            )}>
              <Link href="/request" className="flex items-center uppercase tracking-widest text-[10px]">
                Get Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-2xl transition-colors",
                scrolled || pathname !== "/" ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10"
              )}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-[100] animate-in slide-in-from-right duration-500">
          <div className="flex flex-col h-full p-8 pt-24 space-y-8">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 text-primary"
            >
              <X className="h-10 w-10" />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-5xl font-bold tracking-tight py-2 transition-colors",
                  pathname === link.href ? "text-secondary" : "text-primary hover:text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-12">
              <Button asChild className="w-full bg-primary h-20 rounded-3xl font-bold text-2xl shadow-2xl">
                <Link href="/request" onClick={() => setIsOpen(false)}>Initiate Request</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}