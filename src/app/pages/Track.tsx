import { useState } from "react";
import { Search, Package, MapPin, Clock, CheckCircle, Truck, Ship, Plane } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";

interface TrackingEvent {
  status: string;
  location: string;
  timestamp: string;
  description: string;
  icon: typeof Package;
}

export function Track() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [trackingData, setTrackingData] = useState<{
    number: string;
    status: string;
    origin: string;
    destination: string;
    estimatedDelivery: string;
    currentLocation: string;
    events: TrackingEvent[];
  } | null>(null);

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;

    setIsTracking(true);

    // Simulate API call
    setTimeout(() => {
      setTrackingData({
        number: trackingNumber,
        status: "In Transit",
        origin: "Shanghai, China",
        destination: "Los Angeles, USA",
        estimatedDelivery: "March 15, 2026",
        currentLocation: "Honolulu, Hawaii",
        events: [
          {
            status: "In Transit",
            location: "Honolulu, Hawaii",
            timestamp: "March 12, 2026 14:30 HST",
            description: "Package in transit to next facility",
            icon: Ship,
          },
          {
            status: "Departed",
            location: "Tokyo, Japan",
            timestamp: "March 11, 2026 09:15 JST",
            description: "Departed from international hub",
            icon: Plane,
          },
          {
            status: "Arrived",
            location: "Tokyo, Japan",
            timestamp: "March 10, 2026 18:45 JST",
            description: "Arrived at sorting facility",
            icon: MapPin,
          },
          {
            status: "Picked Up",
            location: "Shanghai, China",
            timestamp: "March 10, 2026 08:00 CST",
            description: "Package picked up from shipper",
            icon: Truck,
          },
          {
            status: "Order Placed",
            location: "Shanghai, China",
            timestamp: "March 9, 2026 16:30 CST",
            description: "Shipment order created",
            icon: Package,
          },
        ],
      });
      setIsTracking(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Track Your Shipment
          </h1>
          <p className="text-xl text-gray-600">
            Enter your tracking number to view real-time shipment status
          </p>
        </div>

        {/* Search Card */}
        <Card className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-xl mb-8">
          <div className="p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter tracking number (e.g., GF123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                  className="h-14 text-lg bg-white border-gray-300"
                />
              </div>
              <Button
                onClick={handleTrack}
                disabled={isTracking || !trackingNumber.trim()}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8"
              >
                {isTracking ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Tracking...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Track
                  </>
                )}
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Try demo tracking number: <span className="font-semibold text-blue-600 cursor-pointer" onClick={() => setTrackingNumber("GF123456789")}>GF123456789</span>
            </p>
          </div>
        </Card>

        {/* Tracking Results */}
        {trackingData && (
          <div className="space-y-6">
            {/* Status Overview */}
            <Card className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-blue-100">Tracking Number</p>
                    <p className="text-2xl font-bold">{trackingData.number}</p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/20 px-4 py-2 rounded-full">
                    <p className="text-sm font-semibold">{trackingData.status}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
                    <p className="text-xs text-blue-100 mb-1">Origin</p>
                    <p className="font-semibold">{trackingData.origin}</p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
                    <p className="text-xs text-blue-100 mb-1">Destination</p>
                    <p className="font-semibold">{trackingData.destination}</p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
                    <p className="text-xs text-blue-100 mb-1">Est. Delivery</p>
                    <p className="font-semibold">{trackingData.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Current Location</p>
                    <p className="text-lg font-semibold text-gray-900">{trackingData.currentLocation}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tracking Timeline */}
            <Card className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-xl">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipment History</h2>
                
                <div className="space-y-6">
                  {trackingData.events.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4 relative">
                      {/* Timeline line */}
                      {index !== trackingData.events.length - 1 && (
                        <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-gray-300" />
                      )}
                      
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                        index === 0 
                          ? "bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg" 
                          : "bg-gradient-to-br from-gray-400 to-gray-500"
                      }`}>
                        <event.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 backdrop-blur-sm bg-gray-50/80 rounded-lg p-4 border border-gray-200/50">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{event.status}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            index === 0 ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                          }`}>
                            {index === 0 ? "Current" : "Completed"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {event.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {event.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <Card className="backdrop-blur-md bg-blue-50/80 border-blue-200/50 shadow-xl">
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Track with Confidence</h3>
                    <p className="text-sm text-gray-600">
                      Your shipment is being monitored 24/7. We'll notify you of any updates via email and SMS.
                      For questions, contact our support team at support@mslogistics.com or call +1 (555) 123-4567.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Empty State */}
        {!trackingData && (
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Enter a tracking number to get started
            </h3>
            <p className="text-gray-600">
              We'll show you the real-time location and status of your shipment
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
