
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Globe, Truck, Building2, PackageCheck, Award, Target } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-consulting");
  const sourcingImg = PlaceHolderImages.find(img => img.id === "sourcing-logistics");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          {heroImg?.imageUrl && (
            <Image
              src={heroImg.imageUrl}
              alt="D'LEGACIES Consulting"
              fill
              className="object-cover opacity-40 mix-blend-overlay"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white pt-20">
          <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-black uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span>Elite Sourcing Intelligence</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95]">
              Procurement <br />
              <span className="text-secondary">Excellence</span> <br />
              In Africa.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed font-medium">
              D&apos;LEGACIES provides institutional-grade sourcing for businesses that demand precision, reliability, and strategic supply chain dominance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-black h-16 px-10 text-xl rounded-2xl shadow-2xl shadow-secondary/20">
                <Link href="/request">Initiate Request <ArrowRight className="ml-2 h-6 w-6" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 h-16 px-10 text-xl rounded-2xl backdrop-blur-md">
                <Link href="/services">Our Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="py-20 bg-background relative -mt-12 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-3xl overflow-hidden shadow-2xl border bg-white">
            {[
              { label: "Network", value: "Global", sub: "15+ Countries", icon: <Globe className="text-secondary" /> },
              { label: "Efficiency", value: "99.8%", sub: "Order Accuracy", icon: <PackageCheck className="text-secondary" /> },
              { label: "Partners", value: "250+", sub: "Vetted Suppliers", icon: <Building2 className="text-secondary" /> },
              { label: "Standard", value: "Elite", sub: "ISO Compliant", icon: <ShieldCheck className="text-secondary" /> }
            ].map((stat, i) => (
              <div key={i} className="p-12 text-center border-r last:border-r-0 hover:bg-muted/30 transition-colors">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-secondary/10 rounded-2xl">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">{stat.label}</p>
                <p className="text-4xl font-black text-primary tracking-tighter">{stat.value}</p>
                <p className="text-xs font-bold text-secondary mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantage */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-sm font-black text-secondary uppercase tracking-[0.4em]">Strategic Advantage</h2>
                <h3 className="text-5xl font-black tracking-tight text-primary leading-tight">
                  Bridging the gap between <br />
                  <span className="text-secondary">demand and market.</span>
                </h3>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                We don&apos;t just source; we engineer supply chains. Our methodology ensures every procurement action is strategic, transparent, and optimized for maximum value.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm w-fit"><Target className="text-secondary" /></div>
                  <h4 className="font-bold text-lg">Precision Sourcing</h4>
                  <p className="text-sm text-muted-foreground">Rigorous vetting of every manufacturer to ensure specification matches.</p>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm w-fit"><Award className="text-secondary" /></div>
                  <h4 className="font-bold text-lg">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground">Multi-stage inspection protocols from factory floor to final delivery.</p>
                </div>
              </div>

              <Button asChild size="lg" className="bg-primary text-white h-14 px-8 rounded-xl mt-8">
                <Link href="/about">Discover Our Methodology</Link>
              </Button>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl bg-muted">
                {sourcingImg?.imageUrl && (
                  <Image
                    src={sourcingImg.imageUrl}
                    alt="Supply Chain Strategy"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-10 rounded-3xl max-w-xs hidden md:block">
                <p className="text-2xl font-black text-primary mb-2">12%</p>
                <p className="text-sm font-bold text-muted-foreground">Average cost reduction across first-year client partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Banner */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">
              Institutional Strength. <br />
              <span className="text-secondary">Local Expertise.</span>
            </h2>
            <p className="text-xl text-white/50 font-medium max-w-2xl mx-auto">
              Ready to professionalize your procurement? Partner with Ghana&apos;s leading sourcing consultants today.
            </p>
            <div className="flex justify-center pt-4">
              <Button asChild size="lg" className="bg-secondary text-primary font-black hover:bg-secondary/90 h-16 px-14 text-xl rounded-2xl">
                <Link href="/request">Get a Strategic Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
