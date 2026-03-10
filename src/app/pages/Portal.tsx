import { useState } from "react";
import { User, Lock, Package, FileText, CreditCard, Settings, LogOut, Eye, Download, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function Portal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const mockShipments = [
    {
      id: "GF-2024-001",
      origin: "Shanghai, China",
      destination: "New York, USA",
      status: "In Transit",
      date: "Mar 8, 2026",
      cost: "$2,450.00",
      statusColor: "text-blue-600 bg-blue-50",
    },
    {
      id: "GF-2024-002",
      origin: "Hamburg, Germany",
      destination: "Toronto, Canada",
      status: "Delivered",
      date: "Mar 5, 2026",
      cost: "$1,820.00",
      statusColor: "text-green-600 bg-green-50",
    },
    {
      id: "GF-2024-003",
      origin: "Los Angeles, USA",
      destination: "Tokyo, Japan",
      status: "Processing",
      date: "Mar 10, 2026",
      cost: "$3,120.00",
      statusColor: "text-orange-600 bg-orange-50",
    },
  ];

  const mockInvoices = [
    { id: "INV-001", date: "Mar 1, 2026", amount: "$5,270.00", status: "Paid" },
    { id: "INV-002", date: "Feb 1, 2026", amount: "$4,890.00", status: "Paid" },
    { id: "INV-003", date: "Jan 1, 2026", amount: "$6,320.00", status: "Paid" },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center py-12 px-4">
        <Card className="max-w-md w-full backdrop-blur-md bg-white/80 border-gray-200/50 shadow-2xl">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Customer Portal</h2>
              <p className="text-gray-600">Sign in to manage your shipments</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-white mt-2"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="bg-white mt-2"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Sign up
                </a>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Demo credentials: Use any email and password to sign in
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Welcome back, John
              </h1>
              <p className="text-gray-600">Manage your shipments and account</p>
            </div>
            <Button
              onClick={() => setIsLoggedIn(false)}
              variant="outline"
              className="border-gray-300"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                label: "Active Shipments",
                value: "12",
                icon: Package,
                color: "from-blue-500 to-blue-600",
              },
              {
                label: "Delivered This Month",
                value: "34",
                icon: TrendingUp,
                color: "from-green-500 to-green-600",
              },
              {
                label: "Total Spent",
                value: "$45,230",
                icon: CreditCard,
                color: "from-purple-500 to-purple-600",
              },
              {
                label: "Pending Invoices",
                value: "2",
                icon: FileText,
                color: "from-orange-500 to-orange-600",
              },
            ].map((stat, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="shipments" className="space-y-6">
          <TabsList className="backdrop-blur-md bg-white/80 p-1 shadow-md">
            <TabsTrigger value="shipments" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Package className="w-4 h-4 mr-2" />
              My Shipments
            </TabsTrigger>
            <TabsTrigger value="invoices" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-2" />
              Invoices
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Shipments Tab */}
          <TabsContent value="shipments" className="space-y-4">
            <Card className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-xl">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Shipments</h2>
                <div className="space-y-4">
                  {mockShipments.map((shipment) => (
                    <div
                      key={shipment.id}
                      className="backdrop-blur-sm bg-gray-50/80 rounded-lg p-6 border border-gray-200/50 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="font-bold text-gray-900">{shipment.id}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${shipment.statusColor}`}>
                              {shipment.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600 mb-1">Origin</p>
                              <p className="font-semibold text-gray-900">{shipment.origin}</p>
                            </div>
                            <div>
                              <p className="text-gray-600 mb-1">Destination</p>
                              <p className="font-semibold text-gray-900">{shipment.destination}</p>
                            </div>
                            <div>
                              <p className="text-gray-600 mb-1">Date</p>
                              <p className="font-semibold text-gray-900">{shipment.date}</p>
                            </div>
                            <div>
                              <p className="text-gray-600 mb-1">Cost</p>
                              <p className="font-semibold text-gray-900">{shipment.cost}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button variant="outline" className="border-gray-300">
                            <Eye className="w-4 h-4 mr-2" />
                            Track
                          </Button>
                          <Button variant="outline" className="border-gray-300">
                            <Download className="w-4 h-4 mr-2" />
                            Invoice
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Invoices Tab */}
          <TabsContent value="invoices" className="space-y-4">
            <Card className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-xl">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing History</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">
                          Invoice ID
                        </th>
                        <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">
                          Date
                        </th>
                        <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">
                          Amount
                        </th>
                        <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">
                          Status
                        </th>
                        <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockInvoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                          <td className="py-4 px-4 font-medium text-gray-900">{invoice.id}</td>
                          <td className="py-4 px-4 text-gray-600">{invoice.date}</td>
                          <td className="py-4 px-4 font-semibold text-gray-900">{invoice.amount}</td>
                          <td className="py-4 px-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600">
                              {invoice.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-4">
            <Card className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-xl">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="John Doe" className="bg-white mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="settingsEmail">Email</Label>
                      <Input
                        id="settingsEmail"
                        type="email"
                        defaultValue="john@example.com"
                        className="bg-white mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" className="bg-white mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" defaultValue="Acme Corp" className="bg-white mt-2" />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                        <span className="text-gray-700">Email notifications for shipment updates</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                        <span className="text-gray-700">SMS notifications for delivery</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-gray-700">Marketing and promotional emails</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
