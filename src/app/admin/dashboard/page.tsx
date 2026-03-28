
"use client";

import { useState } from "react";
import { useFirestore, useCollection } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  MessageSquare, 
  Users, 
  Settings, 
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Sparkles,
  Loader2,
  ArrowRight,
  ChevronRight,
  Mail,
  Briefcase
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function AdminDashboard() {
  const db = useFirestore();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Requests Collection
  const requestsQuery = query(
    collection(db, "procurementRequests"),
    orderBy("createdAt", "desc")
  );
  const { data: requests, isLoading: requestsLoading } = useCollection(requestsQuery as any);

  // Messages Collection
  const messagesQuery = query(
    collection(db, "contactMessages"),
    orderBy("createdAt", "desc")
  );
  const { data: messages, isLoading: messagesLoading } = useCollection(messagesQuery as any);

  const filteredRequests = requests?.filter(req => 
    req.businessName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.goodsServicesType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="w-80 bg-primary text-white p-10 hidden lg:flex flex-col border-r border-white/5">
        <div className="mb-16">
          <h2 className="text-3xl font-black tracking-tighter">D&apos;LEGACIES</h2>
          <p className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mt-1">Command Console</p>
        </div>
        
        <nav className="space-y-3 flex-1">
          <NavItem icon={<LayoutDashboard size={22} />} label="Overview" active />
          <NavItem icon={<ShoppingCart size={22} />} label="Sourcing Leads" />
          <NavItem icon={<MessageSquare size={22} />} label="Inquiries" />
          <NavItem icon={<Briefcase size={22} />} label="Service Catalog" />
          <NavItem icon={<Users size={22} />} label="Clients" />
          <div className="pt-10">
            <NavItem icon={<Settings size={22} />} label="System Config" />
          </div>
        </nav>
        
        <div className="pt-10 border-t border-white/5">
          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center font-black text-primary">AD</div>
            <div>
              <p className="text-sm font-bold">Admin Console</p>
              <p className="text-[10px] text-white/40">Secure Session Active</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-16 max-w-[1600px] mx-auto w-full">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="space-y-1">
            <h1 className="text-5xl font-black text-primary tracking-tighter">Executive Dashboard</h1>
            <p className="text-muted-foreground font-medium text-lg">Central intelligence for procurement operations.</p>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-secondary text-primary font-black rounded-2xl h-14 px-8 shadow-xl shadow-secondary/20">
              Download Quarterly Report
            </Button>
          </div>
        </header>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <StatCard title="Active Inquiries" value={requests?.length.toString() || "0"} icon={<ShoppingCart />} color="bg-blue-600" />
          <StatCard title="New Messages" value={messages?.length.toString() || "0"} icon={<Mail />} color="bg-amber-500" />
          <StatCard title="Total Fulfillment" value="142" icon={<CheckCircle2 />} color="bg-emerald-600" />
        </div>

        <Tabs defaultValue="requests" className="space-y-10">
          <TabsList className="bg-white p-1 rounded-2xl border premium-shadow h-16 w-fit">
            <TabsTrigger value="requests" className="rounded-xl px-10 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Procurement Requests</TabsTrigger>
            <TabsTrigger value="messages" className="rounded-xl px-10 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">General Inquiries</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-10">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
              <div className="xl:col-span-3 space-y-8">
                <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white">
                  <div className="p-10 border-b flex items-center justify-between bg-muted/20">
                    <div className="relative w-full max-w-md">
                      <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input 
                        placeholder="Search leads by business or type..." 
                        className="pl-14 h-14 bg-white border-none rounded-2xl shadow-inner text-lg font-medium" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  {requestsLoading ? (
                    <div className="p-32 text-center space-y-4">
                      <Loader2 className="h-12 w-12 animate-spin text-secondary mx-auto" />
                      <p className="font-bold text-primary/40 uppercase tracking-widest text-xs">Authenticating Vault Data...</p>
                    </div>
                  ) : (
                    <Table>
                      <TableHeader className="bg-muted/10">
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="py-8 pl-10 font-black uppercase text-[10px] tracking-widest">Client & Business</TableHead>
                          <TableHead className="font-black uppercase text-[10px] tracking-widest">Requirement</TableHead>
                          <TableHead className="font-black uppercase text-[10px] tracking-widest">Submitted</TableHead>
                          <TableHead className="font-black uppercase text-[10px] tracking-widest">Status</TableHead>
                          <TableHead className="text-right pr-10 font-black uppercase text-[10px] tracking-widest">Operation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredRequests?.map((req) => (
                          <TableRow key={req.id} className="hover:bg-muted/30 transition-all group">
                            <TableCell className="py-8 pl-10">
                              <div className="font-black text-primary text-lg">{req.businessName}</div>
                              <div className="text-sm text-muted-foreground font-bold">{req.contactPersonName}</div>
                            </TableCell>
                            <TableCell>
                              <div className="font-bold text-primary/80 text-md truncate max-w-[280px]">{req.goodsServicesType}</div>
                              <div className="text-[10px] font-black text-secondary bg-secondary/5 px-2 py-1 rounded-lg w-fit mt-2 uppercase tracking-tighter">Timeline: {req.timeline}</div>
                            </TableCell>
                            <TableCell className="text-sm font-bold text-primary/40">
                              {req.createdAt ? format(req.createdAt.toDate(), "MMM dd, HH:mm") : "N/A"}
                            </TableCell>
                            <TableCell>
                              <Badge className={cn(
                                "rounded-xl font-black px-4 py-1.5 uppercase tracking-tighter text-[10px]",
                                req.status === "New" ? "bg-amber-500/10 text-amber-600 border-amber-200" : "bg-emerald-500/10 text-emerald-600 border-emerald-200"
                              )}>
                                {req.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right pr-10">
                              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl hover:bg-secondary hover:text-primary transition-all">
                                <ArrowRight size={24} />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </Card>
              </div>

              {/* Sidebar AI/Insights */}
              <div className="xl:col-span-1 space-y-10">
                <Card className="border-none shadow-2xl bg-primary text-white rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 -mr-16 -mt-16 rounded-full"></div>
                  <CardHeader className="p-10 pb-0 border-b border-white/5">
                    <CardTitle className="text-2xl flex items-center font-black tracking-tighter">
                      <Sparkles className="mr-4 h-8 w-8 text-secondary animate-pulse" />
                      Sourcing AI
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 space-y-8">
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                      <p className="text-xs font-black text-secondary uppercase tracking-[0.2em]">Strategy Insight</p>
                      <p className="text-md text-white/80 leading-relaxed font-medium italic">
                        &quot;Consolidating high-end electronic leads from the last 72 hours could reduce logistics costs by 18%.&quot;
                      </p>
                    </div>
                    <Button className="w-full bg-secondary text-primary font-black rounded-2xl h-14 hover:bg-secondary/90 shadow-xl shadow-secondary/20">
                      Run Full Analysis
                    </Button>
                  </CardContent>
                </Card>

                <div className="bg-white rounded-[2.5rem] p-10 premium-shadow border">
                  <h3 className="text-xl font-black text-primary mb-8 tracking-tighter">System Pulse</h3>
                  <div className="space-y-8">
                    {[
                      { icon: <Clock size={16} />, action: "Ledger Synced", time: "Just now" },
                      { icon: <Users size={16} />, action: "New Lead Ingested", time: "14 mins ago" },
                      { icon: <MessageSquare size={16} />, action: "Message Routed", time: "1 hr ago" }
                    ].map((log, i) => (
                      <div key={i} className="flex items-start space-x-5">
                        <div className="p-3 bg-muted/50 rounded-xl text-primary/40">{log.icon}</div>
                        <div>
                          <p className="text-sm font-bold text-primary leading-none mb-1">{log.action}</p>
                          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{log.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white">
              {messagesLoading ? (
                <div className="p-32 text-center">
                  <Loader2 className="h-12 w-12 animate-spin text-secondary mx-auto" />
                </div>
              ) : (
                <Table>
                  <TableHeader className="bg-muted/10">
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="py-8 pl-10 font-black uppercase text-[10px] tracking-widest">Sender</TableHead>
                      <TableHead className="font-black uppercase text-[10px] tracking-widest">Subject</TableHead>
                      <TableHead className="font-black uppercase text-[10px] tracking-widest">Received</TableHead>
                      <TableHead className="text-right pr-10 font-black uppercase text-[10px] tracking-widest">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {messages?.map((msg) => (
                      <TableRow key={msg.id} className="hover:bg-muted/30 transition-all">
                        <TableCell className="py-8 pl-10">
                          <div className="font-black text-primary text-lg">{msg.senderName}</div>
                          <div className="text-sm text-muted-foreground font-bold">{msg.senderEmail}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-bold text-primary/80 text-md truncate max-w-[400px]">{msg.subject}</div>
                        </TableCell>
                        <TableCell className="text-sm font-bold text-primary/40">
                          {msg.createdAt ? format(msg.createdAt.toDate(), "MMM dd, HH:mm") : "N/A"}
                        </TableCell>
                        <TableCell className="text-right pr-10">
                          <Button variant="outline" className="rounded-xl font-bold">Read Message</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {messages?.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="py-32 text-center text-muted-foreground font-black uppercase tracking-widest opacity-20">No incoming messages in the encrypted vault.</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={cn(
      "flex items-center space-x-5 w-full p-5 rounded-2xl transition-all duration-500 font-bold",
      active 
        ? "bg-secondary text-primary shadow-xl shadow-secondary/10" 
        : "text-white/40 hover:text-white hover:bg-white/5"
    )}>
      <span className={cn(active ? "text-primary" : "text-white/40")}>{icon}</span>
      <span className="text-md tracking-tight">{label}</span>
      {active && <ChevronRight className="ml-auto h-4 w-4" />}
    </button>
  );
}

function StatCard({ title, value, icon, color }: { title: string, value: string, icon: React.ReactNode, color: string }) {
  return (
    <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white">
      <CardContent className="p-10 flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{title}</p>
          <p className="text-5xl font-black text-primary tracking-tighter leading-none">{value}</p>
        </div>
        <div className={cn("p-6 rounded-[2rem] text-white shadow-2xl", color)}>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}
