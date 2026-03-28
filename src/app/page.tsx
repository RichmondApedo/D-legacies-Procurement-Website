import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Truck,
  TrendingUp,
  BarChart3,
  Building2,
  PackageCheck
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-procurement");
  const sourcingImg = PlaceHolderImages.find(img => img.id === "sourcing-service");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-[-12deg] translate-x-1/4 z-0"></div>
        
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg?.imageUrl || ""}
            alt={heroImg?.description || ""}
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
            data-ai-hint={heroImg?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-secondary text-sm font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left-4 duration-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span>Trusted Partner in Procurement</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
              STRATEGIC <br />
              <span className="text-secondary">SOURCING</span> <br />
              EXCELLENCE.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left-4 duration-1000 delay-400">
              Elevate your supply chain with D&apos;LEGACIES. We provide world-class procurement consulting and reliable sourcing for modern enterprises across West Africa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4 animate-in fade-in slide-in-from-left-4 duration-1000 delay-500">
              <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-black h-14 px-10 text-lg shadow-2xl shadow-secondary/20">
                <Link href="/request">Initiate Request <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm h-14 px-10 text-lg">
                <Link href="/services">View Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-secondary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Client Trust Section */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-10">Strategic Alliances & Partnerships</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            <span className="text-2xl font-black text-primary">GHANA PORTS</span>
            <span className="text-2xl font-black text-primary">ACCRA LOGISTICS</span>
            <span className="text-2xl font-black text-primary">GLOBAL TRADE</span>
            <span className="text-2xl font-black text-primary">SINO-TRANS</span>
          </div>
        </div>
      </section>

      {/* Key Stats / Why Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Sourcing Network", value: "Global", icon: <Globe className="w-8 h-8" /> },
              { label: "Delivery Success", value: "99.9%", icon: <PackageCheck className="w-8 h-8" /> },
              { label: "Corporate Clients", value: "250+", icon: <Building2 className="w-8 h-8" /> },
              { label: "Strategic Advice", icon: <BarChart3 className="w-8 h-8" />, value: "Certified" }
            ].map((stat, i) => (
              <div key={i} className="premium-card p-8 group hover:border-secondary transition-colors">
                <div className="p-3 bg-accent rounded-2xl w-fit mb-6 text-secondary group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                <p className="text-4xl font-black text-primary mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed About Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] aspect-square lg:aspect-video">
                <Image
                  src={sourcingImg?.imageUrl || ""}
                  alt={sourcingImg?.description || ""}
                  fill
                  className="object-cover"
                  data-ai-hint={sourcingImg?.imageHint}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-2xl shadow-2xl text-white hidden md:block">
                <p className="text-4xl font-black text-secondary">10+</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-70">Years of Experience</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-black text-secondary uppercase tracking-[0.3em]">Institutional Grade Sourcing</h2>
                <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                  Navigating Global Markets with <span className="text-secondary">Precision.</span>
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-secondary pl-6">
                "We don't just find products; we engineer supply chain solutions that provide our clients with a distinct competitive advantage."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Direct Sourcing", icon: <Globe />, desc: "Global manufacturer access." },
                  { title: "Risk Mitigation", icon: <ShieldCheck />, desc: "Verified supplier vetting." },
                  { title: "Logistics Optimization", icon: <Truck />, desc: "Streamlined freight handling." },
                  { title: "Strategic Consulting", icon: <TrendingUp />, desc: "Efficiency auditing." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-accent rounded-lg text-secondary">{item.icon}</div>
                      <span className="font-black text-primary">{item.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-8">
                  <Link href="/about">Discover Our Methodology</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready to <span className="text-secondary">Transform</span> Your Procurement?
            </h2>
            <p className="text-xl text-white/60">
              Join leading organizations in West Africa who trust D&apos;LEGACIES for their strategic sourcing needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-primary font-black hover:bg-secondary/90 h-14 px-12 text-lg">
                <Link href="/request">Request a Quote Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/20 h-14 px-12 text-lg hover:bg-white/5">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}