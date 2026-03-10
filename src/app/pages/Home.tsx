import { ArrowRight, Globe, Shield, Clock, TrendingUp, Package, Truck, Ship, Plane, Award, Users, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { WorldMap } from "../components/WorldMap";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        {/* Animated World Map Background */}
        <div className="absolute inset-0 z-0">
          <WorldMap />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/80 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Trucks & Haulage,
              <br />
              <span className="text-blue-300">Delivered with Precision</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your trusted partner in road freight, haulage, and end-to-end logistics.
              Reliable trucks, experienced drivers, and nationwide coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl text-lg px-8 py-6">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/track">
                <Button size="lg" variant="ghost" className="border border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm text-lg px-8 py-6">
                  Track Shipment
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
            {[
              { value: "500+", label: "Trucks in Fleet" },
              { value: "50K+", label: "Deliveries/Year" },
              { value: "99.8%", label: "On-Time Delivery" },
              { value: "24/7", label: "Dispatch Support" },
            ].map((stat, index) => (
              <div key={index} className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end trucks and haulage solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Truck,
                title: "Full Truckload (FTL)",
                description: "Dedicated trucks for large shipments — direct door-to-door delivery with no stops",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Package,
                title: "Less Than Truckload (LTL)",
                description: "Cost-effective shared truck space for smaller freight that doesn't fill a full trailer",
                color: "from-cyan-500 to-cyan-600",
              },
              {
                icon: Ship,
                title: "Container Haulage",
                description: "Port-to-warehouse container transport with reliable pickup and delivery schedules",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                icon: MapPin,
                title: "Last Mile Delivery",
                description: "Final leg delivery to your customer's doorstep — fast, tracked, and reliable",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Globe,
                title: "Cross-Border Haulage",
                description: "Seamless overland freight across borders with customs clearance support",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Clock,
                title: "Express & Same-Day",
                description: "Urgent deliveries with dedicated vehicles dispatched within hours",
                color: "from-red-500 to-red-600",
              },
            ].map((service, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm" />
                
                <div className="relative p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-6 text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose M.S Logistics?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine a modern fleet with experienced drivers and smart logistics technology to keep your freight moving.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Secure & Insured",
                    description: "Full cargo insurance and GPS-tracked vehicles for every load",
                  },
                  {
                    icon: Clock,
                    title: "Real-Time Fleet Tracking",
                    description: "Monitor your truck and cargo live with our driver tracking system",
                  },
                  {
                    icon: Truck,
                    title: "Modern Fleet",
                    description: "Well-maintained trucks ranging from 1-ton to 34-ton capacity",
                  },
                  {
                    icon: TrendingUp,
                    title: "Route Optimization",
                    description: "Smart routing to reduce transit times and fuel costs",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 rounded-xl backdrop-blur-sm bg-gray-50/80 hover:bg-blue-50/80 transition-colors border border-gray-200/50">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1632517306067-b54ab4d1f98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NzMxMzAyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cargo Ship"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 backdrop-blur-md bg-white/90 rounded-xl p-6 shadow-2xl border border-gray-200/50">
                <div className="flex items-center space-x-4">
                  <Award className="w-12 h-12 text-blue-600" />
                  <div>
                    <div className="text-3xl font-bold text-gray-900">25+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Trusted by 5,000+ Businesses",
                description: "From local retailers to major distributors",
              },
              {
                icon: MapPin,
                title: "Nationwide Coverage",
                description: "Servicing all major routes and regions",
              },
              {
                icon: Award,
                title: "Industry Leaders Since 2001",
                description: "25+ years of haulage excellence",
              },
            ].map((item, index) => (
              <div key={index} className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Ship with M.S Logistics?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free quote today and experience reliable trucks and haulage you can count on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portal">
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 text-lg px-8 py-6">
                Login to Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
