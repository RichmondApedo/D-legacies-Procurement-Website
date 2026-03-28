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
  MessageSquare,
  Award,
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
      <section className="relative min-h-[95vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg?.imageUrl || ""}
            alt={heroImg?.description || ""}
            fill
            className="object-cover opacity-40 scale-105"
            priority
            data-ai-hint={heroImg?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-secondary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-10 animate-in fade-in slide-in-from-left-4 duration-1000">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_12px_rgba(204,169,38,0.8)]"></span>
              <span>Premier Sourcing Solutions</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Redefining <br />
              <span className="text-secondary italic font-serif">Procurement</span> Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-14 max-w-xl leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              Strategically bridging global markets with the Ghanaian corporate landscape through integrity, precision, and world-class logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
              <Button asChild size="lg" className="h-16 px-12 bg-secondary hover:bg-secondary/90 text-primary font-bold text-xl rounded-full transition-all hover:scale-105 shadow-2xl hover:shadow-secondary/20">
                <Link href="/request" className="flex items-center">
                  Get a Quote <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-12 border-white/40 text-white hover:bg-white/10 rounded-full text-xl backdrop-blur-md">
                <Link href="/services">Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y py-14">
        <div className="container-custom">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-10">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-3xl font-bold text-primary tracking-tighter">GHANA PORTS</span>
            <span className="text-3xl font-bold text-primary tracking-tighter">ACCRA LOGISTICS</span>
            <span className="text-3xl font-bold text-primary tracking-tighter">GLOBAL TRADE</span>
            <span className="text-3xl font-bold text-primary tracking-tighter">TECH CONNECT</span>
            <span className="text-3xl font-bold text-primary tracking-tighter">METRO CORP</span>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-premium aspect-[4/5]">
                <Image
                  src={sourcingImg?.imageUrl || ""}
                  alt={sourcingImg?.description || ""}
                  fill
                  className="object-cover"
                  data-ai-hint={sourcingImg?.imageHint}
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[2rem] shadow-2xl border border-primary/5 max-w-[320px]">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-2xl"><Shield className="h-6 w-6" /></div>
                  <p className="font-bold text-primary text-xl tracking-tight">Vetted Quality</p>
                </div>
                <p className="text-muted-foreground leading-relaxed italic text-base">
                  &quot;We don't just source goods; we secure your brand's reputation with every shipment.&quot;
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-secondary font-bold tracking-[0.3em] uppercase text-sm">The D&apos;LEGACIES Edge</h2>
                <h3 className="text-5xl md:text-6xl font-bold text-primary leading-[1.15]">Uncompromising Standards. <br /><span className="text-muted-foreground/40 font-serif italic">Global Reach.</span></h3>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
                  Our consultancy provides a seamless bridge between complex international manufacturing and local operational requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { title: "Direct Sourcing", desc: "Straight from the source to ensure price transparency.", icon: <Globe className="text-secondary" /> },
                  { title: "Risk Mitigation", desc: "Rigorous vetting of every global supplier partner.", icon: <ShieldCheck className="text-secondary" /> },
                  { title: "Agile Logistics", desc: "Precision-timed delivery schedules.", icon: <Truck className="text-secondary" /> },
                  { title: "Local Insight", desc: "Navigating Ghanaian customs with expert precision.", icon: <TrendingUp className="text-secondary" /> }
                ].map((item, i) => (
                  <div key={i} className="group space-y-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild size="lg" variant="ghost" className="text-primary font-bold hover:bg-primary/5 px-0 text-lg group">
                <Link href="/about" className="flex items-center">
                  Our Methodology <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] border border-white rounded-full"></div>
           <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] border border-white rounded-full"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Successful Deliveries", value: "5,000+" },
              { label: "Client Partners", value: "250+" },
              { label: "Global Suppliers", value: "85+" },
              { label: "Years of Service", value: "15" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-5xl md:text-7xl font-bold text-secondary tracking-tighter">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="bg-muted rounded-[3rem] p-12 md:p-24 text-center space-y-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-20 opacity-5">
              <Globe className="h-64 w-64 text-primary" />
            </div>
            <div className="max-w-3xl mx-auto space-y-8 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold text-primary tracking-tight leading-tight">Elevate Your <span className="text-secondary italic font-serif">Supply Chain</span> Today.</h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Connect with Accra's premier procurement consultants for a strategic assessment of your sourcing needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                <Button asChild size="lg" className="h-16 px-14 bg-primary text-white font-bold hover:bg-primary/90 rounded-full text-xl shadow-xl">
                  <Link href="/request">Initiate Request</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-16 px-14 border-primary/20 text-primary hover:bg-primary/5 rounded-full text-xl">
                  <Link href="/contact" className="flex items-center">
                    <MessageSquare className="mr-3 h-6 w-6" /> Speak with Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}