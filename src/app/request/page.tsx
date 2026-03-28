"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Send } from "lucide-react";

export default function RequestServicePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Request Submitted",
      description: "We have received your procurement request and will be in touch shortly.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="py-20 bg-muted/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Request a Sourcing Quote</h1>
          <p className="text-muted-foreground text-lg">Provide details about your requirements and we will find the best solutions for you.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Procurement Details</CardTitle>
            <CardDescription>Fill out the form below to initiate your sourcing request.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" placeholder="Your Company Ltd" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Name</Label>
                  <Input id="contactName" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+233..." required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goodsNeeded">Goods/Services Needed</Label>
                <Input id="goodsNeeded" placeholder="e.g. 50 Office Laptops" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Specify models, quantities, and other requirements..." 
                  className="min-h-[150px]"
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget (GHS)</Label>
                  <Input id="budget" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Desired Timeline</Label>
                  <Input id="timeline" placeholder="e.g. 2 weeks" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}