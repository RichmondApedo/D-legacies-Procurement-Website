"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Send, FileText, DollarSign, Calendar, Building2, User, Globe } from "lucide-react";

export default function RequestServicePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Transmitted",
      description: "Our procurement board has been notified. You will receive a response within 24 standard business hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center text-secondary text-xs font-bold uppercase tracking-[0.4em] bg-secondary/5 px-6 py-2 rounded-full">
            Institutional Sourcing
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tight">Initiate <span className="italic font-serif text-secondary">Sourcing</span></h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Specify your procurement requirements. Our global network will be activated immediately to locate the highest value solutions.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="shadow-premium border-none rounded-[2.5rem] overflow-hidden">
                <CardHeader className="bg-white p-10 border-b">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-primary/5 rounded-[1.25rem]">
                      <ShoppingCart className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-primary">Requirement Profile</CardTitle>
                      <CardDescription className="text-base">Detailed specifications for accuracy in sourcing.</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-12 p-10">
                  {/* Business Info Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="businessName" className="text-xs font-bold uppercase tracking-widest text-primary/60">Business Entity *</Label>
                      <Input id="businessName" placeholder="Legal Organization Name" className="h-14 bg-muted/30 border-none rounded-2xl focus:ring-secondary" required />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="contactName" className="text-xs font-bold uppercase tracking-widest text-primary/60">Authorized Representative *</Label>
                      <Input id="contactName" placeholder="Full Professional Name" className="h-14 bg-muted/30 border-none rounded-2xl focus:ring-secondary" required />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary/60">Professional Email *</Label>
                      <Input id="email" type="email" placeholder="email@organization.com" className="h-14 bg-muted/30 border-none rounded-2xl focus:ring-secondary" required />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-primary/60">Contact Terminal *</Label>
                      <Input id="phone" placeholder="+233..." className="h-14 bg-muted/30 border-none rounded-2xl focus:ring-secondary" required />
                    </div>
                  </div>

                  <div className="h-px bg-muted"></div>

                  {/* Requirement Section */}
                  <div className="space-y-10">
                    <div className="space-y-3">
                      <Label htmlFor="goodsNeeded" className="text-xs font-bold uppercase tracking-widest text-primary/60">Subject of Procurement *</Label>
                      <Input id="goodsNeeded" placeholder="e.g. Industrial Grade Hardware" className="h-14 bg-muted/30 border-none rounded-2xl focus:ring-secondary" required />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="description" className="text-xs font-bold uppercase tracking-widest text-primary/60">Detailed Technical Specifications *</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Define models, quantities, and quality standard requirements..." 
                        className="min-h-[200px] bg-muted/30 border-none rounded-[1.5rem] focus:ring-secondary p-6"
                        required 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="budget" className="text-xs font-bold uppercase tracking-widest text-primary/60">Allocated Budget (GHS) *</Label>
                        <div className="relative">
                           <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                           <Input id="budget" type="number" placeholder="0.00" className="h-14 pl-12 bg-muted/30 border-none rounded-2xl focus:ring-secondary" required />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="timeline" className="text-xs font-bold uppercase tracking-widest text-primary/60">Operational Deadline *</Label>
                        <div className="relative">
                           <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                           <Input id="timeline" placeholder="Expected Delivery Date" className="h-14 pl-12 bg-muted/30 border-none rounded-2xl focus:ring-secondary" required />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="bg-primary/5 p-10 flex flex-col items-center">
                  <Button type="submit" disabled={isSubmitting} size="lg" className="h-16 w-full md:w-auto px-16 bg-primary hover:bg-primary/90 text-lg shadow-xl rounded-full">
                    {isSubmitting ? (
                      "Transmitting Data..."
                    ) : (
                      <>Submit Protocol <Send className="ml-3 h-5 w-5" /></>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-6 text-center max-w-sm">
                    All transmissions are secure. By submitting, you authorize D'LEGACIES to initiate preliminary market assessments.
                  </p>
                </CardFooter>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="bg-primary text-white border-none rounded-[2rem] p-8 shadow-xl">
                 <div className="space-y-6">
                   <div className="p-3 bg-white/10 rounded-2xl w-fit"><Globe className="h-8 w-8 text-secondary" /></div>
                   <h4 className="text-2xl font-bold">Global Network</h4>
                   <p className="text-white/70 text-base leading-relaxed">
                     Your request will be broadcast across our Tier-1 supply chains in Asia, Europe, and the Americas for competitive bidding.
                   </p>
                   <ul className="space-y-4">
                     {[
                       "Verified Supplier Network",
                       "Direct Logistics Pipelines",
                       "Customs Compliance Hub",
                       "Quality Assurance Audits"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center space-x-3 text-sm font-medium">
                         <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
              </Card>

              <Card className="bg-secondary p-8 border-none rounded-[2rem] shadow-xl text-primary">
                 <h4 className="text-xl font-bold mb-4">Urgent Consultation?</h4>
                 <p className="text-sm font-medium mb-6 opacity-80 leading-relaxed">
                   If your procurement is mission-critical, contact our priority desk directly.
                 </p>
                 <Button variant="outline" className="w-full border-primary/20 bg-white/10 font-bold hover:bg-white/20">
                   055 775 9388
                 </Button>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}