
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Send, FileText, DollarSign, Calendar, Building2, User } from "lucide-react";

export default function RequestServicePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Submitted Successfully",
      description: "Our procurement team will review your request and contact you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Request Procurement Service</h1>
          <p className="text-muted-foreground text-lg">
            Provide the details below and our sourcing experts will find the best solutions for your business.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="shadow-2xl border-t-8 border-secondary overflow-hidden">
            <CardHeader className="bg-white pb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-primary">Procurement Details</CardTitle>
                  <CardDescription>All fields marked with * are required</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8 px-6 pb-8">
              {/* Business Info Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="flex items-center"><Building2 className="h-4 w-4 mr-2" /> Business Name *</Label>
                  <Input id="businessName" placeholder="D'LEGACIES E-PROCUREMENT" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName" className="flex items-center"><User className="h-4 w-4 mr-2" /> Contact Person *</Label>
                  <Input id="contactName" placeholder="Full Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center">Email Address *</Label>
                  <Input id="email" type="email" placeholder="email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center">Phone Number *</Label>
                  <Input id="phone" placeholder="e.g. 0557759388" required />
                </div>
              </div>

              <hr />

              {/* Requirement Section */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="goodsNeeded" className="flex items-center"><ShoppingCart className="h-4 w-4 mr-2" /> Goods/Services Needed *</Label>
                  <Input id="goodsNeeded" placeholder="e.g. 50 units of Dell XPS Laptops" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="flex items-center"><FileText className="h-4 w-4 mr-2" /> Detailed Specifications *</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Provide as much detail as possible (models, sizes, quantities, quality standards...)" 
                    className="min-h-[150px]"
                    required 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="flex items-center"><DollarSign className="h-4 w-4 mr-2" /> Estimated Budget (GHS) *</Label>
                    <Input id="budget" type="number" placeholder="e.g. 50000" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="flex items-center"><Calendar className="h-4 w-4 mr-2" /> Desired Timeline *</Label>
                    <Input id="timeline" placeholder="e.g. Within 2 weeks" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Attachments (Specifications/Images)</Label>
                  <div className="border-2 border-dashed border-muted p-8 rounded-xl text-center bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                    <input type="file" id="file" className="hidden" />
                    <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload or drag and drop your files</p>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="bg-muted/30 p-8 flex flex-col items-center">
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full md:w-auto px-12 bg-primary hover:bg-primary/90 text-lg shadow-lg">
                {isSubmitting ? (
                  "Processing..."
                ) : (
                  <>Submit Request <Send className="ml-2 h-5 w-5" /></>
                )}
              </Button>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                By submitting, you agree to our terms of service regarding procurement consultancy.
              </p>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
