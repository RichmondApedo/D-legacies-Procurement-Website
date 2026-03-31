import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  CheckCircle2, 
  ShoppingCart, 
  Settings, 
  Globe, 
  Truck, 
  Briefcase,
  Layers,
  Search
} from "lucide-react";

export const metadata: Metadata = {
  title: "Global Sourcing & Logistics Services",
  description: "Explore our institutional-grade procurement services: Strategic sourcing from China, global maritime logistics, and organizational supply chain consulting in Accra, Ghana.",
};

export default function ServicesPage() {
  const warehouseImg = PlaceHolderImages.find(img => img.id === "sourcing-logistics");

  const detailedServices = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Sourcing of Goods",
      desc: "Whether it's raw materials, office equipment, or industrial machinery, we locate the best suppliers worldwide.",
      features: ["Supplier verification", "Quality inspection", "Price negotiation", "Bulk ordering"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Brand Procurement",
      desc: "Helping brands source specific branded items, packaging, and marketing collateral at scale.",
      features: ["Custom packaging", "Branded merchandise", "Apparel sourcing", "Eco-friendly options"]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Organizational Sourcing",
      desc: "Procurement solutions tailored for NGOs, Government agencies, and large corporate entities.",
      features: ["Tender management", "Compliance support", "Inventory planning", "Audit trails"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Procurement Consulting",
      desc: "Expert advice on optimizing your internal procurement workflows and spending patterns.",
      features: ["Spend analysis", "Strategy development", "Process automation", "Training"]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From strategic sourcing to final delivery, we handle every step of the procurement lifecycle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {detailedServices.map((service, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-none bg-background overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-primary p-8 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform duration-500">
                  {service.icon}
                </div>
                <CardContent className="p-8 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.desc}</p>
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {service.features.map((f, j) => (
                        <div key={j} className="flex items-center space-x-2 text-sm text-primary/80">
                          <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 self-start">
                    <Link href="/request">Request Sourcing</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Sourcing Process</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We follow a rigorous methodology to ensure the highest satisfaction for our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 hidden md:block -translate-y-1/2 -z-10"></div>
            
            {[
              { icon: <Search />, label: "Analyze", desc: "Understanding your specific needs and budget constraints." },
              { icon: <Globe />, label: "Source", desc: "Identifying and vetting suitable global or local suppliers." },
              { icon: <Layers />, label: "Negotiate", desc: "Securing the best terms, prices, and quality standards." },
              { icon: <Truck />, label: "Deliver", desc: "Coordinating logistics for safe and timely arrival." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center border-t-4 border-secondary hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">{step.label}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Banner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center bg-muted">
            {warehouseImg?.imageUrl && (
              <Image
                src={warehouseImg.imageUrl}
                alt={warehouseImg.description || "Warehouse Logistics"}
                fill
                className="object-cover"
                data-ai-hint={warehouseImg.imageHint}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxIj48cmVjdCBmaWxsPSIjMDcwZTFiIiAvPjwvc3ZnPg=="
                sizes="100vw"
                quality={75}
              />
            )}
            <div className="absolute inset-0 bg-primary/80"></div>
            <div className="relative z-10 p-8 md:p-20 max-w-2xl text-white">
              <h3 className="text-3xl font-bold mb-6">Streamlined Logistics Management</h3>
              <p className="text-white/80 text-lg mb-8">
                Don't let shipping and customs clearance slow you down. We handle the paperwork and coordination, providing you with peace of mind.
              </p>
              <Button asChild size="lg" className="bg-secondary text-primary font-bold hover:bg-secondary/90">
                <Link href="/contact">Inquire About Logistics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
