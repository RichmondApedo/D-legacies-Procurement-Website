import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Truck,
  TrendingUp,
  BarChart3,
  Building2,
  PackageCheck
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 skew-x-[-12deg] translate-x-1/4 z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-secondary text-xs font-bold uppercase tracking-[0.2em] animate-in fade-in slide-in-from-left-4 duration-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span>Excellence in E-Procurement</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
              ELITE <br />
              <span className="text-secondary">SOURCING</span> <br />
              PARTNER.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left-4 duration-1000 delay-400">
              D&apos;LEGACIES provides institutional-grade procurement consulting and global sourcing solutions for enterprises that demand precision and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-6 animate-in fade-in slide-in-from-left-4 duration-1000 delay-500">
              <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-black h-16 px-12 text-lg shadow-2xl shadow-secondary/20 rounded-none">
                <Link href="/request">Initiate Request <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/5 backdrop-blur-sm h-16 px-12 text-lg rounded-none">
                <Link href="/services">Our Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-4">
          <p className="text-center text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.5em] mb-12">Global Strategic Alliances</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
            <span className="text-xl font-black tracking-tighter">GHANA PORTS</span>
            <span className="text-xl font-black tracking-tighter">ACCRA LOGISTICS</span>
            <span className="text-xl font-black tracking-tighter">GLOBAL TRADE</span>
            <span className="text-xl font-black tracking-tighter">SINO-TRANS</span>
          </div>
        </div>
      </section>

      {/* Core Values / Stats */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { label: "Sourcing Network", value: "Global", icon: <Globe className="w-6 h-6" /> },
              { label: "Fulfillment Rate", value: "99.9%", icon: <PackageCheck className="w-6 h-6" /> },
              { label: "Managed Clients", value: "250+", icon: <Building2 className="w-6 h-6" /> },
              { label: "Consultancy", icon: <BarChart3 className="w-6 h-6" />, value: "Certified" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-12 group hover:bg-primary transition-all duration-500 hover:text-white">
                <div className="p-3 bg-accent rounded-sm w-fit mb-8 text-secondary group-hover:bg-white/10 group-hover:text-secondary transition-all">
                  {stat.icon}
                </div>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest group-hover:text-white/60">{stat.label}</p>
                <p className="text-4xl font-black mt-2 tracking-tighter">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="space-y-6 mb-20">
              <h2 className="text-xs font-black text-secondary uppercase tracking-[0.4em]">The D&apos;LEGACIES Protocol</h2>
              <h3 className="text-5xl md:text-7xl font-black text-primary leading-[0.9] tracking-tighter">
                Redefining the supply chain <br />
                <span className="text-secondary/40">through precision.</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl pt-6 leading-relaxed">
                We bridge the gap between complex requirements and global markets. Our methodology ensures every procurement action is strategic, transparent, and optimized for maximum enterprise value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t">
              {[
                { title: "Direct Sourcing", icon: <Globe />, desc: "Unfiltered access to global primary manufacturers." },
                { title: "Risk Mitigation", icon: <ShieldCheck />, desc: "Rigorous vetting and multi-stage quality assurance." },
                { title: "Logistics", icon: <Truck />, desc: "End-to-end freight and customs management." },
                { title: "Strategy", icon: <TrendingUp />, desc: "Data-driven procurement auditing and workflows." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-secondary/10 text-secondary">{item.icon}</div>
                    <span className="text-xl font-black text-primary uppercase tracking-tighter">{item.title}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-10">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Ready to <br />
              <span className="text-secondary">Transform</span> <br />
              Your Enterprise?
            </h2>
            <p className="text-xl text-white/50 max-w-xl">
              Partner with D&apos;LEGACIES and experience the power of institutional-grade procurement expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button asChild size="lg" className="bg-secondary text-primary font-black hover:bg-secondary/90 h-16 px-12 text-lg rounded-none">
                <Link href="/request">Secure A Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/20 h-16 px-12 text-lg rounded-none hover:bg-white/5">
                <Link href="/contact">Inquire More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
