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
              Global Logistics,
              <br />
              <span className="text-blue-300">Delivered with Precision</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Connect your business to the world with our comprehensive logistics solutions.
              Fast, reliable, and secure shipping across 150+ countries.
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
              { value: "150+", label: "Countries Served" },
              { value: "1M+", label: "Shipments/Year" },
              { value: "99.8%", label: "On-Time Delivery" },
              { value: "24/7", label: "Customer Support" },
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
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Plane,
                title: "Air Freight",
                description: "Fast and reliable air cargo services for urgent shipments worldwide",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Ship,
                title: "Ocean Freight",
                description: "Cost-effective sea freight solutions for bulk and container shipping",
                color: "from-cyan-500 to-cyan-600",
              },
              {
                icon: Truck,
                title: "Ground Transport",
                description: "Flexible ground transportation for domestic and cross-border delivery",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                icon: Package,
                title: "Warehousing",
                description: "Secure storage and distribution with advanced inventory management",
                color: "from-purple-500 to-purple-600",
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
                We combine cutting-edge technology with decades of expertise to deliver exceptional logistics services.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Secure & Reliable",
                    description: "Advanced security measures and insurance coverage for all shipments",
                  },
                  {
                    icon: Clock,
                    title: "Real-Time Tracking",
                    description: "Monitor your shipments 24/7 with our advanced tracking system",
                  },
                  {
                    icon: Globe,
                    title: "Global Network",
                    description: "Extensive network of partners and facilities across 150+ countries",
                  },
                  {
                    icon: TrendingUp,
                    title: "Cost Optimization",
                    description: "Smart routing and consolidation to reduce shipping costs",
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
                title: "Trusted by 10,000+ Companies",
                description: "From startups to Fortune 500 companies",
              },
              {
                icon: MapPin,
                title: "Global Coverage",
                description: "500+ locations in 150+ countries",
              },
              {
                icon: Award,
                title: "Award-Winning Service",
                description: "Recognized industry leader since 2001",
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
            Get a free quote today and experience the difference of working with a trusted logistics partner.
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
