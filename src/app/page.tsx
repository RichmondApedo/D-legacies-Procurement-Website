
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  Globe, 
  ShieldCheck, 
  Truck,
  MessageSquare
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-procurement");
  const sourcingImg = PlaceHolderImages.find(img => img.id === "sourcing-service");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg?.imageUrl || ""}
            alt={heroImg?.description || ""}
            fill
            className="object-cover opacity-20"
            priority
            data-ai-hint={heroImg?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span>Premium Procurement Consulting</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Transform Your Sourcing with <br />
              <span className="text-secondary underline decoration-secondary/30 underline-offset-8">D&apos;LEGACIES Connect</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Expert sourcing of goods and services for businesses, brands, and organizations. Delivering efficiency and quality from Accra to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold shadow-xl">
                <Link href="/request" className="flex items-center">
                  Request Service <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Overview Section */}
      <section className="py-12 bg-background -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Goods Sourced", value: "5000+" },
              { label: "Happy Clients", value: "200+" },
              { label: "Global Partners", value: "50+" },
              { label: "Years Experience", value: "10+" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-secondary text-center">
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-bold text-secondary tracking-widest uppercase mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Comprehensive Sourcing Solutions</h3>
            <p className="text-muted-foreground text-lg">
              We streamline your procurement process, ensuring you get the best quality at the most competitive prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="h-10 w-10" />,
                title: "Business Sourcing",
                desc: "Strategic sourcing for corporate equipment, supplies, and professional services."
              },
              {
                icon: <Truck className="h-10 w-10" />,
                title: "Logistics & Delivery",
                desc: "End-to-end management of the supply chain from manufacturer to your doorstep."
              },
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Global Procurement",
                desc: "Connecting Ghanaian brands with international manufacturers and service providers."
              }
            ].map((service, i) => (
              <Card key={i} className="group hover:shadow-2xl transition-all duration-300 border-none bg-background shadow-md">
                <CardContent className="p-8">
                  <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src={sourcingImg?.imageUrl || ""}
                  alt={sourcingImg?.description || ""}
                  fill
                  className="object-cover"
                  data-ai-hint={sourcingImg?.imageHint}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-primary font-bold text-xl mb-1 italic">"Commitment to Excellence"</p>
                <p className="text-primary/70 text-sm">- D&apos;LEGACIES Motto</p>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-primary">Why Partner with D&apos;LEGACIES?</h3>
              <p className="text-lg text-muted-foreground">
                We are more than just a procurement firm; we are your strategic business growth partner.
              </p>
              <div className="space-y-4">
                {[
                  "Verified Network of Global Suppliers",
                  "Competitive Market Pricing Analysis",
                  "Dedicated Relationship Management",
                  "Transparent Sourcing Processes",
                  "Local Expertise in Accra, Ghana",
                  "Real-time Tracking and Communication"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="font-medium text-primary/80">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview CTA */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Scale Your Procurement?</h2>
          <p className="text-primary/80 text-lg mb-10 max-w-2xl mx-auto">
            Get a personalized quote for your sourcing needs today. Our team is standing by to help you find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-10">
              <Link href="/request">Start Your Request</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/contact" className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" /> Chat with Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
