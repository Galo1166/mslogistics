import { useState } from "react";
import { Package, MapPin, Calendar, Weight, DollarSign, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

export function Book() {
  const [formData, setFormData] = useState({
    serviceType: "",
    pickupAddress: "",
    pickupCity: "",
    pickupCountry: "",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryCountry: "",
    shipmentDate: "",
    packageType: "",
    weight: "",
    dimensions: "",
    description: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Calculate estimated cost when relevant fields change
    if (field === "serviceType" || field === "weight") {
      calculateEstimate({ ...formData, [field]: value });
    }
  };

  const calculateEstimate = (data: typeof formData) => {
    const weight = parseFloat(data.weight) || 0;
    const baseRates: Record<string, number> = {
      ftl: 3.5,
      ltl: 2.0,
      haulage: 4.0,
      lastmile: 1.5,
      crossborder: 5.0,
      express: 8.0,
    };
    
    const rate = baseRates[data.serviceType] || 0;
    if (weight > 0 && rate > 0) {
      setEstimatedCost(weight * rate);
    } else {
      setEstimatedCost(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center py-12 px-4">
        <Card className="max-w-2xl w-full backdrop-blur-md bg-white/80 border-gray-200/50 shadow-2xl">
          <div className="p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Your shipment has been successfully booked.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <p className="text-sm text-gray-600 mb-2">Booking Reference</p>
              <p className="text-2xl font-bold text-blue-600">MS-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </div>
            <p className="text-gray-600 mb-8">
              We've sent a confirmation email to <span className="font-semibold">{formData.contactEmail}</span> with your booking details and tracking information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-gray-300"
              >
                Book Another Shipment
              </Button>
              <Button
                onClick={() => window.location.href = "/track"}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Track Shipment
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book a Shipment
          </h1>
          <p className="text-xl text-gray-600">
            Fill out the form below to get started with your shipment
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Type */}
          <Card className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-xl">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Service Selection</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ftl">Full Truckload (FTL)</SelectItem>
                      <SelectItem value="ltl">Less Than Truckload (LTL)</SelectItem>
                      <SelectItem value="haulage">Container Haulage</SelectItem>
                      <SelectItem value="lastmile">Last Mile Delivery</SelectItem>
                      <SelectItem value="crossborder">Cross-Border Haulage</SelectItem>
                      <SelectItem value="express">Express & Same-Day</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="packageType">Package Type *</Label>
                  <Select value={formData.packageType} onValueChange={(value) => handleInputChange("packageType", value)}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select package type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="document">Document</SelectItem>
                      <SelectItem value="package">Package</SelectItem>
                      <SelectItem value="pallet">Pallet</SelectItem>
                      <SelectItem value="container">Container</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Card>

          {/* Pickup Details */}
          <Card className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-xl">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Pickup Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="pickupAddress">Pickup Address *</Label>
                  <Input
                    id="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={(e) => handleInputChange("pickupAddress", e.target.value)}
                    placeholder="Street address"
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="pickupCity">City *</Label>
                  <Input
                    id="pickupCity"
                    value={formData.pickupCity}
                    onChange={(e) => handleInputChange("pickupCity", e.target.value)}
                    placeholder="City"
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="pickupCountry">Country *</Label>
                  <Input
                    id="pickupCountry"
                    value={formData.pickupCountry}
                    onChange={(e) => handleInputChange("pickupCountry", e.target.value)}
                    placeholder="Country"
                    required
                    className="bg-white"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Delivery Details */}
          <Card className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-xl">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Delivery Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="deliveryAddress">Delivery Address *</Label>
                  <Input
                    id="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={(e) => handleInputChange("deliveryAddress", e.target.value)}
                    placeholder="Street address"
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="deliveryCity">City *</Label>
                  <Input
                    id="deliveryCity"
                    value={formData.deliveryCity}
                    onChange={(e) => handleInputChange("deliveryCity", e.target.value)}
                    placeholder="City"
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="deliveryCountry">Country *</Label>
                  <Input
                    id="deliveryCountry"
                    value={formData.deliveryCountry}
                    onChange={(e) => handleInputChange("deliveryCountry", e.target.value)}
                    placeholder="Country"
                    required
                    className="bg-white"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Shipment Details */}
          <Card className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-xl">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Weight className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Shipment Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="shipmentDate">Preferred Pickup Date *</Label>
                  <Input
                    id="shipmentDate"
                    type="date"
                    value={formData.shipmentDate}
                    onChange={(e) => handleInputChange("shipmentDate", e.target.value)}
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="weight">Weight (kg) *</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                    placeholder="0.0"
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="dimensions">Dimensions (L x W x H cm)</Label>
                  <Input
                    id="dimensions"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange("dimensions", e.target.value)}
                    placeholder="e.g., 50 x 40 x 30"
                    className="bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="description">Package Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Brief description of contents"
                    rows={3}
                    className="bg-white"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="backdrop-blur-md bg-white/80 border-gray-200/50 shadow-xl">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="contactName">Full Name *</Label>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange("contactName", e.target.value)}
                    placeholder="John Doe"
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="contactEmail">Email *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="contactPhone">Phone Number *</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="bg-white"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Estimated Cost */}
          {estimatedCost !== null && (
            <Card className="backdrop-blur-md bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200/50 shadow-xl">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Estimated Cost</p>
                      <p className="text-3xl font-bold text-gray-900">
                        ${estimatedCost.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Final quote will be provided via email</p>
                </div>
              </div>
            </Card>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg"
            >
              Submit Booking Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
