
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShieldCheck, Target, Eye, MapPin, Award, Users } from "lucide-react";

export default function AboutPage() {
  const teamImg = PlaceHolderImages.find(img => img.id === "consulting-team");

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About D&apos;LEGACIES</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A premier procurement consultancy dedicated to excellence, transparency, and strategic growth for businesses in Ghana and beyond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-square bg-muted">
                {teamImg?.imageUrl && (
                  <Image
                    src={teamImg.imageUrl}
                    alt={teamImg.description || "Our Team"}
                    fill
                    className="object-cover"
                    data-ai-hint={teamImg.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">Our Journey in Excellence</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in Accra, Ghana, D&apos;LEGACIES E-PROCUREMENT CONSULT was established to solve the complexities of modern supply chain management. We realized that many businesses struggle with finding reliable suppliers, negotiating fair prices, and ensuring timely delivery.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we serve as the bridge between global manufacturers and local enterprises, providing end-to-end sourcing solutions that save our clients time and money.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-secondary">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="h-6 w-6 text-secondary" />
                    <h3 className="font-bold text-primary">Our Mission</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">To provide world-class procurement solutions that empower businesses to operate with maximum efficiency and quality.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-primary">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                    <h3 className="font-bold text-primary">Our Vision</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">To be the most trusted and innovative procurement consulting firm in West Africa, synonymous with integrity and results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="h-12 w-12 text-primary" />,
                title: "Integrity",
                desc: "We operate with complete transparency and honesty in every transaction and negotiation."
              },
              {
                icon: <Award className="h-12 w-12 text-primary" />,
                title: "Excellence",
                desc: "We never settle for 'good enough'. We strive for the highest standards in sourcing and service."
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Partnership",
                desc: "We treat our clients' businesses as our own, fostering long-term collaborative growth."
              }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold text-primary">{value.title}</h4>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 md:p-20 text-white space-y-8">
              <h3 className="text-3xl font-bold">Visit Our Office</h3>
              <p className="text-white/70">
                We are strategically located in the heart of Accra to serve the growing Ghanaian business community.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg"><MapPin className="text-secondary" /></div>
                  <div>
                    <p className="font-bold">Accra Central</p>
                    <p className="text-sm text-white/60">Ghana Business District</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg"><Users className="text-secondary" /></div>
                  <div>
                    <p className="font-bold">Open for Consultation</p>
                    <p className="text-sm text-white/60">Mon - Fri, 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[400px]">
              {/* Google Map Placeholder */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p className="font-medium">Interactive Map Integration</p>
                  <p className="text-xs">Accra, Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
