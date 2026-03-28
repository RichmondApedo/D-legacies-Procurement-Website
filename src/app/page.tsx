import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Globe, Truck, TrendingUp, BarChart3, Building2, PackageCheck } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-consulting");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={heroImg?.imageUrl || ""}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-xs font-bold uppercase tracking-widest">
              <span>Premier Procurement Consultancy</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]">
              Strategic <span className="text-secondary">Sourcing</span> Solutions for Modern Enterprises.
            </h1>
            
            <p className="text-xl text-white/70 max-w-xl leading-relaxed">
              D&apos;LEGACIES provides institutional-grade procurement consulting and global sourcing for businesses that demand precision, reliability, and excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold h-14 px-8 text-lg rounded-xl">
                <Link href="/request">Initiate Request <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 h-14 px-8 text-lg rounded-xl backdrop-blur-sm">
                <Link href="/services">View Our Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Sourcing Network", value: "Global", icon: <Globe className="text-secondary" /> },
              { label: "Client Satisfaction", value: "99%", icon: <PackageCheck className="text-secondary" /> },
              { label: "Active Partners", value: "150+", icon: <Building2 className="text-secondary" /> },
              { label: "Expert Consultancy", value: "Certified", icon: <BarChart3 className="text-secondary" /> }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-white border rounded-2xl premium-shadow hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-secondary/10 rounded-xl w-fit mb-6">
                  {stat.icon}
                </div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black mt-2 tracking-tighter text-primary">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-xs font-black text-secondary uppercase tracking-[0.3em]">The D&apos;LEGACIES Advantage</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                Redefining the supply chain <span className="text-secondary">through precision.</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bridge the gap between complex business requirements and global manufacturing markets. Our methodology ensures every procurement action is strategic, transparent, and optimized for maximum value.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { icon: <ShieldCheck className="text-secondary" />, text: "Rigorous supplier vetting and multi-stage quality assurance." },
                  { icon: <Globe className="text-secondary" />, text: "Unfiltered access to primary global manufacturers." },
                  { icon: <Truck className="text-secondary" />, text: "End-to-end logistics and customs management." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="mt-1">{item.icon}</div>
                    <span className="font-medium text-primary/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={PlaceHolderImages.find(img => img.id === "sourcing-logistics")?.imageUrl || ""}
                  alt="Sourcing Network"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Ready to Optimize Your <span className="text-secondary">Procurement?</span>
            </h2>
            <p className="text-xl text-white/60">
              Partner with D&apos;LEGACIES and experience the power of professional sourcing expertise.
            </p>
            <div className="pt-6">
              <Button asChild size="lg" className="bg-secondary text-primary font-bold hover:bg-secondary/90 h-16 px-12 text-lg rounded-xl">
                <Link href="/request">Get a Custom Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}