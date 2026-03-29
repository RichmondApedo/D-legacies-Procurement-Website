import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none">D&apos;LEGACIES</span>
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-secondary">E-PROCUREMENT</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Providing institutional-grade procurement intelligence and global sourcing solutions for enterprises that demand precision.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-secondary hover:text-primary transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Request Service", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "")}`} className="text-sm text-white/50 hover:text-white flex items-center group transition-colors">
                    {item} <ArrowUpRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em]">Our Services</h4>
            <ul className="space-y-4">
              {["Strategic Sourcing", "Global Logistics", "Vendor Management", "Customs Clearance", "Spend Analysis"].map((item) => (
                <li key={item} className="text-sm text-white/50">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em]">Accra Office</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary group-hover:text-primary transition-colors mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="text-sm text-white/50">
                  <p className="font-bold text-white mb-1">Central Accra</p>
                  <p>Ghana Business District</p>
                </div>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:0557759388" className="text-sm text-white/50 hover:text-white transition-colors">055 775 9388</a>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:dlegacies75@yahoo.com" className="text-sm text-white/50 hover:text-white transition-colors">dlegacies75@yahoo.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/30 space-y-6 md:space-y-0">
          <p>© {currentYear} D&apos;LEGACIES E-PROCUREMENT CONSULT. AFRICA&apos;S SOURCING PARTNER.</p>
          <div className="flex space-x-10">
            <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}