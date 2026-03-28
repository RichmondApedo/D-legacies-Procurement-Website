
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">D&apos;LEGACIES</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner in e-procurement consulting. We bridge the gap between businesses and quality sourcing solutions across Ghana.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Linkedin className="h-5 w-5" /></Link>
              <Link href="https://wa.me/233557759388" target="_blank" className="hover:text-secondary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/request" className="hover:underline">Request Service</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Sourcing of Goods</li>
              <li>Brand Procurement</li>
              <li>Organizational Sourcing</li>
              <li>Procurement Consulting</li>
              <li>Logistics Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>0557759388</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span className="break-all">dlegacies75@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/60 space-y-4 md:space-y-0">
          <p>© {currentYear} D&apos;LEGACIES E-PROCUREMENT CONSULT. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/admin" className="hover:text-primary-foreground">Admin Login</Link>
            <Link href="#" className="hover:text-primary-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
