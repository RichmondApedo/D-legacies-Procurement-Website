"use client";

import { useState } from "react";
import { useFirestore } from "@/firebase";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { processSubmissionNotification } from "@/app/actions/submissions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { collection, serverTimestamp } from "firebase/firestore";
import { ShoppingCart, Send, Loader2, ShieldCheck, Globe, Upload } from "lucide-react";

export default function RequestServicePage() {
  const db = useFirestore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestType, setRequestType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      businessName: formData.get("businessName") as string,
      contactPersonName: formData.get("contactName") as string,
      contactEmail: formData.get("email") as string,
      contactPhone: formData.get("phone") as string,
      goodsServicesType: requestType || (formData.get("goodsNeeded") as string),
      description: formData.get("description") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
      status: "New",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    try {
      const colRef = collection(db, "procurementRequests");
      
      // 1. Save to Database (Non-blocking)
      addDocumentNonBlocking(colRef, data);
      
      // 2. Trigger Email Notification (Server Action)
      const notificationResult = await processSubmissionNotification('procurement_request', data);
      
      toast({
        title: "Inquiry Transmitted Successfully",
        description: notificationResult.success 
          ? `Requirement logged and sent to dlegacies75@yahoo.com.`
          : `Requirement logged in vault. Notification pending.`,
      });
      
      (e.target as HTMLFormElement).reset();
      setRequestType("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Transmission Error",
        description: "Encountered a protocols error during submission. Please retry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-40 pb-32 bg-muted/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
        
        {/* Header Branding */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20 space-y-6 md:space-y-8">
          <div className="inline-flex items-center space-x-3 md:space-x-4 px-4 md:px-6 py-2 md:py-3 bg-secondary/10 border border-secondary/30 rounded-3xl text-secondary text-xs md:text-sm font-black uppercase tracking-[0.3em]">
            <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
            <span>Institutional Procurement Portal</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-primary tracking-tighter leading-tight text-balance">
            Initiate Sourcing <br />
            <span className="text-secondary">Requirement.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed font-medium">
            Deploy our global sourcing network. Submissions are routed directly to our executive team at <span className="text-primary font-bold">dlegacies75@yahoo.com</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white">
              <div className="h-3 bg-secondary w-full"></div>
              <CardHeader className="p-6 md:p-12 pb-4 md:pb-6">
                <CardTitle className="text-2xl md:text-3xl font-black tracking-tight">Requirement Manifest</CardTitle>
                <CardDescription className="text-base md:text-lg font-medium">Technical specifications for our consultants.</CardDescription>
              </CardHeader>
              
              <form onSubmit={handleSubmit}>
                <CardContent className="p-6 md:p-12 space-y-8 md:space-y-12">
                  <div className="space-y-8">
                    <h3 className="text-sm font-black text-secondary uppercase tracking-[0.2em] border-b pb-4">Business Identification</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <Label htmlFor="businessName" className="font-black text-primary uppercase text-[10px] tracking-widest">Legal Entity Name</Label>
                        <Input name="businessName" id="businessName" placeholder="Elite Enterprises Ltd." required className="h-14 bg-muted/30 border-none rounded-2xl focus:bg-white transition-all text-lg" />
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="contactName" className="font-black text-primary uppercase text-[10px] tracking-widest">Authorized Representative</Label>
                        <Input name="contactName" id="contactName" placeholder="Full Name" required className="h-14 bg-muted/30 border-none rounded-2xl focus:bg-white transition-all text-lg" />
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="email" className="font-black text-primary uppercase text-[10px] tracking-widest">Corporate Email</Label>
                        <Input name="email" id="email" type="email" placeholder="representative@business.com" required className="h-14 bg-muted/30 border-none rounded-2xl focus:bg-white transition-all text-lg" />
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="phone" className="font-black text-primary uppercase text-[10px] tracking-widest">Direct Contact Line</Label>
                        <Input name="phone" id="phone" placeholder="+233 --- --- ----" required className="h-14 bg-muted/30 border-none rounded-2xl focus:bg-white transition-all text-lg" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h3 className="text-sm font-black text-secondary uppercase tracking-[0.2em] border-b pb-4">Technical Requirement</h3>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Label className="font-black text-primary uppercase text-[10px] tracking-widest">Procurement Category</Label>
                        <Select onValueChange={setRequestType} required>
                          <SelectTrigger className="h-14 bg-muted/30 border-none rounded-2xl text-lg font-medium">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent className="rounded-2xl border-none shadow-2xl">
                            <SelectItem value="Raw Materials" className="py-4">Raw Materials / Industrial Input</SelectItem>
                            <SelectItem value="IT Infrastructure" className="py-4">IT Infrastructure & Hardware</SelectItem>
                            <SelectItem value="Logistics Equipment" className="py-4">Logistics & Heavy Machinery</SelectItem>
                            <SelectItem value="Corporate Branded" className="py-4">Branded Assets & Marketing</SelectItem>
                            <SelectItem value="General Sourcing" className="py-4">General Sourcing Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="description" className="font-black text-primary uppercase text-[10px] tracking-widest">Detailed Specifications</Label>
                        <Textarea 
                          name="description"
                          id="description" 
                          placeholder="quantities, technical standards, specific models, and manufacturer requirements..." 
                          className="min-h-[220px] bg-muted/30 border-none rounded-2xl focus:bg-white transition-all text-lg"
                          required 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <Label htmlFor="budget" className="font-black text-primary uppercase text-[10px] tracking-widest">Allocated Budget (USD/GHS)</Label>
                      <Input name="budget" id="budget" placeholder="Project Range" required className="h-14 bg-muted/30 border-none rounded-2xl focus:bg-white transition-all text-lg" />
                    </div>
                    <div className="space-y-4">
                      <Label htmlFor="timeline" className="font-black text-primary uppercase text-[10px] tracking-widest">Delivery Timeline</Label>
                      <Input name="timeline" id="timeline" placeholder="Expected fulfillment date" required className="h-14 bg-muted/30 border-none rounded-2xl focus:bg-white transition-all text-lg" />
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="bg-muted/10 p-12 border-t">
                  <Button type="submit" disabled={isSubmitting} className="w-full h-20 bg-primary text-white font-black text-2xl rounded-2xl shadow-3xl shadow-primary/30 active:scale-95 transition-all">
                    {isSubmitting ? (
                      <div className="flex items-center space-x-4">
                        <Loader2 className="h-8 w-8 animate-spin" /> 
                        <span>Routing to dlegacies75@yahoo.com...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <Send className="h-8 w-8" /> 
                        <span>Submit Strategic Inquiry</span>
                      </div>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>

          {/* Sidebar Trust Badges */}
          <div className="lg:col-span-1 space-y-12">
            <div className="bg-white p-12 rounded-[3rem] shadow-2xl space-y-10">
              <h4 className="text-xl font-black text-primary tracking-tight">Secure Protocols</h4>
              
              <div className="space-y-8">
                {[
                  { icon: <ShieldCheck className="text-secondary" />, title: "Instant Notification", desc: "Your requirement is automatically emailed to our executive officers for priority review." },
                  { icon: <Globe className="text-secondary" />, title: "Direct Routing", desc: "Submissions go directly to dlegacies75@yahoo.com to minimize communication lag." },
                  { icon: <Loader2 className="text-secondary" />, title: "Secure Vault", desc: "A persistent record is kept in our encrypted database for project tracking." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="p-3 bg-secondary/5 rounded-2xl mt-1">{item.icon}</div>
                    <div>
                      <p className="font-black text-primary leading-none mb-2">{item.title}</p>
                      <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
