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
  Zap
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-procurement");
  const sourcingImg = PlaceHolderImages.find(img => img.id === "sourcing-service");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg?.imageUrl || ""}
            alt={heroImg?.description || ""}
            fill
            className="object-cover opacity-30 grayscale-[20%]"
            priority
            data-ai-hint={heroImg?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/90 to-primary/40"></div>
        </div>

        <div className="container-custom relative z-10 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/30 text-secondary px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-left-4 duration-1000">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span>Excellence in Global Procurement</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Strategic Sourcing for <br />
              <span className="text-secondary">Modern Enterprises</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-400">
              D&apos;LEGACIES Connect bridges the gap between premium global manufacturers and businesses in Ghana with integrity and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-600">
              <Button asChild size="lg" className="h-14 px-10 bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg rounded-full transition-all hover:scale-105 shadow-premium">
                <Link href="/request" className="flex items-center">
                  Start Your Request <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 border-white/30 text-white hover:bg-white/10 rounded-full text-lg backdrop-blur-sm">
                <Link href="/services">Our Expertise</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-secondary/5 to-transparent rounded-tl-full blur-3xl -z-10"></div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b py-10">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            <span className="text-2xl font-bold text-primary">GHANA PORTS</span>
            <span className="text-2xl font-bold text-primary">ACCRA LOGISTICS</span>
            <span className="text-2xl font-bold text-primary">GLOBAL TRADE</span>
            <span className="text-2xl font-bold text-primary">TECH CONNECT</span>
          </div>
        </div>
      </section>

      {/* Stats Section - Premium Grid */}
      <section className="py-20 bg-background overflow-visible">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-20">
            {[
              { label: "Goods Sourced", value: "5k+", icon: <Truck className="h-5 w-5" /> },
              { label: "Corporate Clients", value: "200+", icon: <Briefcase className="h-5 w-5" /> },
              { label: "International Partners", value: "50+", icon: <Globe className="h-5 w-5" /> },
              { label: "Industry Awards", value: "12", icon: <Award className="h-5 w-5" /> },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-premium border border-primary/5 transition-transform hover:-translate-y-2 duration-300">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-primary mb-2 tracking-tight">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features: The D'LEGACIES Difference */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-10">
              <div>
                <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4">Why D&apos;LEGACIES?</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight">Professionalism in Every Transaction.</h3>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We eliminate the risks associated with international sourcing through rigorous vetting and transparent communication.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Verified Suppliers", desc: "Rigorous quality audits." },
                  { title: "Price Optimization", desc: "Competitive cost management." },
                  { title: "Expert Logistics", desc: "Seamless cross-border flow." },
                  { title: "Local Presence", desc: "Based in the heart of Accra." }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90">
                <Link href="/about">Discover Our Values</Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full -z-10"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/5]">
                  <Image
                    src={sourcingImg?.imageUrl || ""}
                    alt={sourcingImg?.description || ""}
                    fill
                    className="object-cover"
                    data-ai-hint={sourcingImg?.imageHint}
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-2xl shadow-premium border border-primary/5 max-w-[280px]">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-secondary/10 text-secondary rounded-lg"><Zap className="h-5 w-5" /></div>
                    <p className="font-bold text-primary">Rapid Sourcing</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &quot;Our average response time for complex quotes is under 24 hours.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4">Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8">End-to-End Solutions</h3>
            <p className="text-lg text-muted-foreground">
              From identification to delivery, our consultants manage the entire procurement lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Briefcase className="h-10 w-10" />,
                title: "Business Sourcing",
                desc: "Strategic acquisition of corporate equipment and professional services."
              },
              {
                icon: <Truck className="h-10 w-10" />,
                title: "Global Logistics",
                desc: "Complex supply chain management from factory to final destination."
              },
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Market Analysis",
                desc: "In-depth research to find the highest value-to-cost ratio globally."
              }
            ].map((service, i) => (
              <Card key={i} className="border-none shadow-premium hover:shadow-premium-hover transition-all duration-500 rounded-3xl group overflow-hidden bg-white">
                <CardContent className="p-12">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-5">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    {service.desc}
                  </p>
                  <Link href="/services" className="inline-flex items-center text-secondary font-bold hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 skew-x-12 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white">Scale Your Procurement <br /><span className="text-secondary">With Confidence</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Join leading organizations in Accra who trust D&apos;LEGACIES Connect for their critical sourcing needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Button asChild size="lg" className="h-14 px-12 bg-secondary text-primary font-bold hover:bg-secondary/90 rounded-full text-lg">
                <Link href="/request">Submit Request</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-12 border-white/20 text-white hover:bg-white/10 rounded-full text-lg">
                <Link href="/contact" className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" /> Speak with a Consultant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
