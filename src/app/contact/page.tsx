"use client";

import { useState } from "react";
import { useFirestore } from "@/firebase";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { processSubmissionNotification } from "@/app/actions/submissions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { collection, serverTimestamp } from "firebase/firestore";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Globe, Loader2 } from "lucide-react";

export default function ContactPage() {
  const db = useFirestore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      senderName: formData.get("name") as string,
      senderEmail: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      isRead: false,
      createdAt: serverTimestamp(),
    };

    try {
      const colRef = collection(db, "contactMessages");
      
      // 1. Save to Firestore
      addDocumentNonBlocking(colRef, data);
      
      // 2. Route Email Notification
      const notificationResult = await processSubmissionNotification('contact_message', data);
      
      toast({
        title: "Message Transmitted",
        description: notificationResult.success 
          ? "Logged and routed to dlegacies75@yahoo.com."
          : "Logged in system. Executive notification pending.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Transmission Error",
        description: "We couldn't send your message at this time. Please try WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <section className="bg-primary py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Get in Touch</h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto font-medium">
            Inquiries are routed directly to <span className="text-secondary">dlegacies75@yahoo.com</span> for rapid response.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="space-y-10">
              <h2 className="text-3xl font-black text-primary tracking-tight">Corporate Contact</h2>
              <div className="space-y-8">
                {[
                  { icon: <Phone className="text-secondary" />, label: "Direct Line", value: "0557759388", link: "tel:233557759388" },
                  { icon: <Mail className="text-secondary" />, label: "Executive Email", value: "dlegacies75@yahoo.com", link: "mailto:dlegacies75@yahoo.com" },
                  { icon: <MapPin className="text-secondary" />, label: "Headquarters", value: "Accra, Ghana", link: "#" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-5">
                    <div className="p-4 bg-white rounded-2xl shadow-xl border border-muted">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-black uppercase tracking-widest mb-1">{item.label}</p>
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
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-black w-full h-16 rounded-2xl shadow-2xl shadow-[#25D366]/20 text-lg">
                  <a href="https://wa.me/233557759388" target="_blank" className="flex items-center justify-center">
                    <MessageCircle className="mr-3 h-6 w-6" /> Priority WhatsApp Chat
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-none rounded-[3rem] overflow-hidden">
                <div className="h-3 bg-secondary w-full"></div>
                <CardContent className="p-10 md:p-16">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="font-black text-primary uppercase text-[10px] tracking-[0.2em]">Full Name / Organization</Label>
                        <Input name="name" id="name" placeholder="John Doe" required className="h-14 bg-muted/30 border-none rounded-2xl focus:bg-white transition-all text-lg" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="font-black text-primary uppercase text-[10px] tracking-[0.2em]">Email Address</Label>
                        <Input name="email" id="email" type="email" placeholder="john@example.com" required className="h-14 bg-muted/30 border-none rounded-2xl focus:bg-white transition-all text-lg" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="subject" className="font-black text-primary uppercase text-[10px] tracking-[0.2em]">Subject of Inquiry</Label>
                      <Input name="subject" id="subject" placeholder="Partnership Opportunity" required className="h-14 bg-muted/30 border-none rounded-2xl focus:bg-white transition-all text-lg" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="message" className="font-black text-primary uppercase text-[10px] tracking-[0.2em]">Detailed Message</Label>
                      <Textarea 
                        name="message"
                        id="message" 
                        placeholder="Please describe your requirements..." 
                        className="min-h-[180px] bg-muted/30 border-none rounded-2xl focus:bg-white transition-all text-lg"
                        required 
                      />
                    </div>
                    <Button type="submit" disabled={isSubmitting} size="lg" className="w-full h-16 bg-primary text-white font-black rounded-2xl text-xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                      {isSubmitting ? (
                        <Loader2 className="animate-spin h-6 w-6" />
                      ) : (
                        <><Send className="mr-3 h-6 w-6" /> Transmit to Executive Team</>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
