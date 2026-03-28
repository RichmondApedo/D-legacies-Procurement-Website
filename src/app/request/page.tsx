"use client";

import { useState } from "react";
import { useFirestore } from "@/firebase";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { collection, serverTimestamp } from "firebase/firestore";
import { ShoppingCart, Send, Loader2 } from "lucide-react";

export default function RequestServicePage() {
  const db = useFirestore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      businessName: formData.get("businessName") as string,
      contactPersonName: formData.get("contactName") as string,
      contactEmail: formData.get("email") as string,
      contactPhone: formData.get("phone") as string,
      goodsServicesType: formData.get("goodsNeeded") as string,
      description: formData.get("description") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
      status: "New",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    try {
      const colRef = collection(db, "procurementRequests");
      await addDocumentNonBlocking(colRef, data);
      
      toast({
        title: "Request Successfully Submitted",
        description: "Your procurement inquiry has been logged. Our team will contact you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-muted/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-2xl mb-6">
            <ShoppingCart className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4 tracking-tight">Request Sourcing Solutions</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Provide the details of your procurement needs, and our consultants will provide a tailored strategy and quote.
          </p>
        </div>

        <Card className="border-none premium-shadow overflow-hidden">
          <div className="h-2 bg-secondary w-full"></div>
          <CardHeader className="pb-8">
            <CardTitle className="text-2xl font-bold">Inquiry Details</CardTitle>
            <CardDescription>All fields are required for a complete analysis of your request.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="businessName" className="font-bold text-primary/80">Business Name</Label>
                  <Input name="businessName" id="businessName" placeholder="Elite Logistics Ltd" required className="h-12 bg-muted/30 focus:bg-white transition-all" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="contactName" className="font-bold text-primary/80">Contact Person</Label>
                  <Input name="contactName" id="contactName" placeholder="Kwame Mensah" required className="h-12 bg-muted/30 focus:bg-white transition-all" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="font-bold text-primary/80">Business Email</Label>
                  <Input name="email" id="email" type="email" placeholder="kwame@elitelogistics.com" required className="h-12 bg-muted/30 focus:bg-white transition-all" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="font-bold text-primary/80">Phone Number</Label>
                  <Input name="phone" id="phone" placeholder="+233 55 775 9388" required className="h-12 bg-muted/30 focus:bg-white transition-all" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="goodsNeeded" className="font-bold text-primary/80">Requirement Type</Label>
                <Input name="goodsNeeded" id="goodsNeeded" placeholder="e.g. IT Equipment, Raw Materials, Construction Sourcing" required className="h-12 bg-muted/30 focus:bg-white transition-all" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="description" className="font-bold text-primary/80">Detailed Specifications</Label>
                <Textarea 
                  name="description"
                  id="description" 
                  placeholder="Please specify quantities, models, quality standards, and any preferred manufacturers..." 
                  className="min-h-[160px] bg-muted/30 focus:bg-white transition-all"
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="budget" className="font-bold text-primary/80">Estimated Budget (GHS/USD)</Label>
                  <Input name="budget" id="budget" placeholder="Flexible or Specific Range" required className="h-12 bg-muted/30 focus:bg-white transition-all" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="timeline" className="font-bold text-primary/80">Desired Timeline</Label>
                  <Input name="timeline" id="timeline" placeholder="e.g. 1 Month, Immediate, Q4 2024" required className="h-12 bg-muted/30 focus:bg-white transition-all" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/10 p-8 border-t">
              <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-primary text-white font-bold text-lg rounded-xl shadow-xl shadow-primary/20">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing Request...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" /> Submit Procurement Inquiry
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}