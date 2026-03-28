import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Truck,
  MessageSquare,
  Zap,
  TrendingUp,
  Shield
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-procurement");
  const sourcingImg = PlaceHolderImages.find(img => img.id === "sourcing-service");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg?.imageUrl || ""}
            alt={heroImg?.description || ""}
            fill
            className="object-cover opacity-50"
            priority
            data-ai-hint={heroImg?.imageHint}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Expert Procurement Solutions in Ghana
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl">
              Reliable sourcing and supply chain management for businesses and organizations across West Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/request">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-muted py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center gap-8 opacity-50">
            <span className="text-2xl font-bold">GHANA PORTS</span>
            <span className="text-2xl font-bold">ACCRA LOGISTICS</span>
            <span className="text-2xl font-bold">GLOBAL TRADE</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <Image
                src={sourcingImg?.imageUrl || ""}
                alt={sourcingImg?.description || ""}
                fill
                className="object-cover"
                data-ai-hint={sourcingImg?.imageHint}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Reliable Global Sourcing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide a seamless bridge between international suppliers and local operational requirements, ensuring quality and transparency at every step.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Direct Sourcing", icon: <Globe className="text-primary" /> },
                  { title: "Risk Management", icon: <ShieldCheck className="text-primary" /> },
                  { title: "Logistics", icon: <Truck className="text-primary" /> },
                  { title: "Consulting", icon: <TrendingUp className="text-primary" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">{item.icon}</div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-4">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}