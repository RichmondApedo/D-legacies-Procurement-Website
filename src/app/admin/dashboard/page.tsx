
"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  MessageSquare, 
  Users, 
  Settings, 
  Search,
  Filter,
  Eye,
  MoreVertical,
  CheckCircle2,
  Clock,
  Sparkles
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
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminProcurementRequestClarifier, AdminProcurementRequestClarifierOutput } from "@/ai/flows/admin-procurement-request-clarifier";

// Mock Data
const MOCK_REQUESTS = [
  {
    id: "REQ-001",
    business: "Tech Ghana Ltd",
    client: "Kwame Mensah",
    needs: "50x Dell Latitude Laptops",
    status: "Pending",
    date: "2024-05-20",
    budget: "GHS 150,000",
    timeline: "2 Weeks",
    description: "High-performance laptops for software developers. Need i7 processor, 16GB RAM, 512GB SSD. Prefers Dell but open to Lenovo."
  },
  {
    id: "REQ-002",
    business: "Accra Logistics",
    client: "Abena Serwaa",
    needs: "Fleet Maintenance Services",
    status: "Clarifying",
    date: "2024-05-18",
    budget: "GHS 25,000/mo",
    timeline: "Immediate",
    description: "Monthly maintenance for 10 delivery vans. Includes oil changes, tire rotations, and general inspections."
  },
  {
    id: "REQ-003",
    business: "Green Growth Farm",
    client: "Kofi Owusu",
    needs: "Industrial Irrigation System",
    status: "Completed",
    date: "2024-05-15",
    budget: "GHS 85,000",
    timeline: "1 Month",
    description: "Solar-powered irrigation system for a 5-acre farm. Need high-efficiency pumps and durable piping."
  }
];

export default function AdminDashboard() {
  const [requests] = useState(MOCK_REQUESTS);
  const [selectedRequest, setSelectedRequest] = useState<typeof MOCK_REQUESTS[0] | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<AdminProcurementRequestClarifierOutput | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const runAiAnalysis = async (request: typeof MOCK_REQUESTS[0]) => {
    setIsAnalyzing(true);
    setSelectedRequest(request);
    try {
      const result = await adminProcurementRequestClarifier({
        businessName: request.business,
        contactDetails: `${request.client}, ${request.business}`,
        goodsServicesNeeded: request.needs,
        procurementDescription: request.description,
        budget: request.budget,
        timeline: request.timeline
      });
      setAiAnalysis(result);
    } catch (error) {
      console.error("AI Analysis failed", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar - Static for simplicity */}
      <aside className="w-64 bg-primary text-white p-6 hidden lg:block">
        <div className="mb-10">
          <h2 className="text-xl font-bold">D&apos;LEGACIES Admin</h2>
        </div>
        <nav className="space-y-4">
          <LinkButton icon={<LayoutDashboard size={20} />} label="Overview" active />
          <LinkButton icon={<ShoppingCart size={20} />} label="Procurement Requests" />
          <LinkButton icon={<MessageSquare size={20} />} label="General Messages" />
          <LinkButton icon={<Users size={20} />} label="Clients" />
          <LinkButton icon={<Settings size={20} />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Procurement Requests</h1>
            <p className="text-muted-foreground">Manage incoming client sourcing requests.</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="bg-white">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button className="bg-secondary text-primary font-bold">
              Export CSV
            </Button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Requests" value="48" icon={<ShoppingCart />} color="bg-blue-500" />
          <StatCard title="Active Sourcing" value="12" icon={<Clock />} color="bg-orange-500" />
          <StatCard title="Monthly Revenue" value="GHS 240k" icon={<CheckCircle2 />} color="bg-green-500" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Requests Table */}
          <div className="xl:col-span-2 space-y-4">
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-4 border-b flex items-center justify-between">
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search requests..." className="pl-10" />
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Business/Client</TableHead>
                    <TableHead>Requirement</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((req) => (
                    <TableRow key={req.id}>
                      <TableCell className="font-mono text-xs">{req.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{req.business}</div>
                        <div className="text-xs text-muted-foreground">{req.client}</div>
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate">{req.needs}</TableCell>
                      <TableCell>
                        <Badge variant={
                          req.status === "Pending" ? "outline" : 
                          req.status === "Completed" ? "default" : "secondary"
                        }>
                          {req.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon" onClick={() => runAiAnalysis(req)}>
                            <Sparkles className="h-4 w-4 text-secondary" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Update Status</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* AI Insights Panel */}
          <div className="space-y-6">
            <Card className="border-secondary border-t-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-secondary" />
                  AI Request Clarifier
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isAnalyzing ? (
                  <div className="py-12 text-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-sm text-muted-foreground">Gemini is analyzing the request details...</p>
                  </div>
                ) : aiAnalysis ? (
                  <div className="space-y-4 animate-in fade-in duration-500">
                    <div>
                      <h4 className="font-bold text-sm text-primary mb-1">Request Summary</h4>
                      <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">{aiAnalysis.summaryOfRequest}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primary mb-1">Identified Ambiguities</h4>
                      <ul className="list-disc pl-4 text-xs space-y-1 text-muted-foreground">
                        {aiAnalysis.identifiedAmbiguities.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-secondary mb-1">Suggested Follow-up</h4>
                      <div className="space-y-2">
                        {aiAnalysis.suggestedQuestions.map((q, i) => (
                          <div key={i} className="text-xs p-2 border rounded border-secondary/30 bg-secondary/5 italic">
                            &quot;{q}&quot;
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-secondary text-primary font-bold">Copy Response Draft</Button>
                  </div>
                ) : (
                  <div className="py-12 text-center border-2 border-dashed rounded-xl">
                    <ShoppingCart className="h-10 w-10 text-muted-foreground mx-auto mb-2 opacity-20" />
                    <p className="text-sm text-muted-foreground px-6">Select a request and click the sparkles icon to generate AI insights.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { user: "Admin", action: "Updated REQ-003 status", time: "2 hrs ago" },
                  { user: "System", action: "New request from Tech Ghana", time: "5 hrs ago" },
                  { user: "Admin", action: "Sent message to Kwame", time: "Yesterday" }
                ].map((act, i) => (
                  <div key={i} className="flex items-start space-x-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
                    <div>
                      <p className="font-medium">{act.action}</p>
                      <p className="text-xs text-muted-foreground">{act.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function LinkButton({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${active ? 'bg-secondary text-primary font-bold' : 'hover:bg-white/10 text-white/80'}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatCard({ title, value, icon, color }: { title: string, value: string, icon: React.ReactNode, color: string }) {
  return (
    <Card>
      <CardContent className="p-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-primary">{value}</p>
        </div>
        <div className={`p-3 rounded-xl text-white ${color}`}>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}
