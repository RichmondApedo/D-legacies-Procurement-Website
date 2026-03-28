
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have questions about our procurement services? We're here to help. Reach out through any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: <Phone />, label: "Phone", value: "0557759388", link: "tel:233557759388" },
                  { icon: <Mail />, label: "Email", value: "dlegacies75@yahoo.com", link: "mailto:dlegacies75@yahoo.com" },
                  { icon: <MapPin />, label: "Location", value: "Accra, Ghana", link: "#" },
                  { icon: <Clock />, label: "Business Hours", value: "Mon - Fri, 8AM - 5PM", link: "#" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="p-3 bg-white text-primary rounded-xl shadow-sm border border-muted">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                      {item.link !== "#" ? (
                        <a href={item.link} className="text-lg font-bold text-primary hover:text-secondary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-bold text-primary">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold w-full shadow-lg">
                  <a href="https://wa.me/233557759388" target="_blank" className="flex items-center justify-center">
                    <MessageCircle className="mr-2 h-6 w-6" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-none">
                <CardContent className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Kwame Mensah" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="kwame@example.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="General Inquiry" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="How can we help you today?" 
                        className="min-h-[150px]" 
                        required 
                      />
                    </div>
                    <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-primary hover:bg-primary/90">
                      {isSubmitting ? "Sending..." : <><Send className="mr-2 h-5 w-5" /> Send Message</>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Mockup */}
      <section className="h-[450px] bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="text-center">
             <Globe className="h-16 w-16 text-primary opacity-20 mx-auto mb-4" />
             <h3 className="text-xl font-bold text-primary">Accra Head Office</h3>
             <p className="text-muted-foreground">Interactive Map Placeholder</p>
           </div>
        </div>
      </section>
    </div>
  );
}
