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
  MoreVertical,
  CheckCircle2,
  Clock,
  Sparkles,
  Loader2,
  ArrowRight
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
import { format } from "date-fns";

export default function AdminDashboard() {
  const db = useFirestore();
  const [searchTerm, setSearchTerm] = useState("");
  
  const requestsQuery = query(
    collection(db, "procurementRequests"),
    orderBy("createdAt", "desc")
  );
  
  const { data: requests, isLoading } = useCollection(requestsQuery as any);

  const filteredRequests = requests?.filter(req => 
    req.businessName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.goodsServicesType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar - Static */}
      <aside className="w-72 bg-primary text-white p-8 hidden lg:flex flex-col">
        <div className="mb-12">
          <h2 className="text-2xl font-black tracking-tighter">D&apos;LEGACIES</h2>
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em]">Command Center</p>
        </div>
        <nav className="space-y-2 flex-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Overview" active />
          <NavItem icon={<ShoppingCart size={20} />} label="Procurement Leads" />
          <NavItem icon={<MessageSquare size={20} />} label="Support Inbox" />
          <NavItem icon={<Users size={20} />} label="Client Directory" />
          <NavItem icon={<Settings size={20} />} label="Platform Config" />
        </nav>
        <div className="pt-8 border-t border-white/10 text-white/40 text-xs">
          © 2024 D&apos;LEGACIES Admin
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-primary tracking-tight">Procurement Console</h1>
            <p className="text-muted-foreground mt-1 font-medium">Monitoring and processing active sourcing requests.</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="bg-white rounded-xl shadow-sm border-none font-bold">
              <Filter className="mr-2 h-4 w-4" /> Filter Views
            </Button>
            <Button className="bg-secondary text-primary font-black rounded-xl shadow-lg shadow-secondary/20">
              Generate Report
            </Button>
          </div>
        </header>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard title="Total Leads" value={requests?.length.toString() || "0"} icon={<ShoppingCart />} color="bg-blue-600" />
          <StatCard title="Pending Review" value={requests?.filter(r => r.status === "New").length.toString() || "0"} icon={<Clock />} color="bg-amber-500" />
          <StatCard title="Successful Fulfillment" value="28" icon={<CheckCircle2 />} color="bg-emerald-600" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          {/* Requests Main Panel */}
          <div className="xl:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 border-none overflow-hidden">
              <div className="p-8 border-b flex items-center justify-between">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search by business or requirement..." 
                    className="pl-12 h-12 bg-muted/40 border-none rounded-2xl focus:bg-white transition-all" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {isLoading ? (
                <div className="p-24 text-center">
                  <Loader2 className="h-10 w-10 animate-spin text-secondary mx-auto mb-4" />
                  <p className="font-bold text-primary/60">Synchronizing with Secure Database...</p>
                </div>
              ) : (
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="py-6 pl-8 font-black uppercase text-[10px] tracking-widest">Business/Client</TableHead>
                      <TableHead className="font-black uppercase text-[10px] tracking-widest">Requirement</TableHead>
                      <TableHead className="font-black uppercase text-[10px] tracking-widest">Received</TableHead>
                      <TableHead className="font-black uppercase text-[10px] tracking-widest">Status</TableHead>
                      <TableHead className="text-right pr-8 font-black uppercase text-[10px] tracking-widest">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRequests?.map((req) => (
                      <TableRow key={req.id} className="hover:bg-muted/10 transition-colors">
                        <TableCell className="py-6 pl-8">
                          <div className="font-bold text-primary">{req.businessName}</div>
                          <div className="text-xs text-muted-foreground font-medium">{req.contactPersonName}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-semibold text-primary/80 max-w-[240px] truncate">{req.goodsServicesType}</div>
                          <div className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded w-fit mt-1">Timeline: {req.timeline}</div>
                        </TableCell>
                        <TableCell className="text-sm font-medium text-primary/60">
                          {req.createdAt ? format(req.createdAt.toDate(), "MMM dd, HH:mm") : "N/A"}
                        </TableCell>
                        <TableCell>
                          <Badge className={cn(
                            "rounded-lg font-bold px-3 py-1",
                            req.status === "New" ? "bg-amber-500/10 text-amber-600 border-amber-200" : "bg-emerald-500/10 text-emerald-600 border-emerald-200"
                          )}>
                            {req.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right pr-8">
                          <Button variant="ghost" size="icon" className="hover:bg-secondary/20 hover:text-primary transition-colors">
                            <ArrowRight size={20} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {filteredRequests?.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="py-24 text-center text-muted-foreground font-bold italic">
                          No matching procurement requests found in the current ledger.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>

          {/* AI Insights Sidebar */}
          <div className="xl:col-span-1 space-y-8">
            <Card className="border-none shadow-xl shadow-secondary/10 bg-gradient-to-br from-primary to-primary/95 text-white rounded-3xl overflow-hidden">
              <CardHeader className="pb-4 border-b border-white/10">
                <CardTitle className="text-xl flex items-center">
                  <Sparkles className="mr-3 h-6 w-6 text-secondary" />
                  Sourcing AI
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8 space-y-6">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-secondary mb-3">Strategy Insight</h4>
                  <p className="text-sm text-white/80 leading-relaxed italic">
                    &quot;Consolidating high-end laptop requests from the past 7 days could yield a 12% reduction in logistics overhead via unified freight.&quot;
                  </p>
                </div>
                <Button className="w-full bg-secondary text-primary font-black rounded-xl h-12 hover:bg-secondary/90">
                  Analyze All Requirements
                </Button>
              </CardContent>
            </Card>

            <div className="bg-white rounded-3xl p-8 premium-shadow border">
              <h3 className="text-lg font-bold text-primary mb-6">Recent System Activity</h3>
              <div className="space-y-6">
                {[
                  { user: "System", action: "Database Synced", time: "2 min ago" },
                  { user: "Admin", action: "Updated REQ-928", time: "1 hr ago" },
                  { user: "Lead", action: "New Inquiry Recieved", time: "3 hrs ago" }
                ].map((log, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0"></div>
                    <div>
                      <p className="text-sm font-bold text-primary">{log.action}</p>
                      <p className="text-xs text-muted-foreground font-medium">{log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={cn(
      "flex items-center space-x-4 w-full p-4 rounded-2xl transition-all duration-300 font-bold",
      active 
        ? "bg-secondary text-primary shadow-lg shadow-secondary/10" 
        : "text-white/60 hover:text-white hover:bg-white/5"
    )}>
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}

function StatCard({ title, value, icon, color }: { title: string, value: string, icon: React.ReactNode, color: string }) {
  return (
    <Card className="border-none premium-shadow rounded-3xl overflow-hidden">
      <CardContent className="p-8 flex items-center justify-between">
        <div>
          <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">{title}</p>
          <p className="text-4xl font-black text-primary tracking-tighter">{value}</p>
        </div>
        <div className={cn("p-5 rounded-2xl text-white shadow-xl", color)}>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}