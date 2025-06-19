"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Truck,
  Package,
  MapPin,
  Clock,
  Calculator,
  Shield,
  CheckCircle,
  MessageCircle,
  Mail,
  Phone,
  Search,
} from "lucide-react"
import Link from "next/link"

export default function ShippingPolicy() {
  const whatsappNumber = "917011070852"
  const shippingMessage = "Hello! I have a question about shipping for my order. Please provide assistance."

  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-yellow-50 shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
            <Truck className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-orange-800">Amrit Achaar</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="/">
            <ArrowLeft className="h-4 w-4 inline mr-1" />
            Back to Home
          </Link>
        </nav>
      </header>

      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-800 mb-4">
              Shipping Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete information about our shipping methods, costs, delivery times, and tracking services for your
              achaar orders across India.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Last Updated:</strong> December 19, 2024
            </p>
          </div>

          {/* Quick Overview */}
          <Card className="border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50 mb-8">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Truck className="h-6 w-6 text-yellow-500" />
                Shipping Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">Pan-India</div>
                  <div className="text-sm text-gray-600">Delivery Available</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">₹99+</div>
                  <div className="text-sm text-gray-600">Free Shipping</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">1-5 Days</div>
                  <div className="text-sm text-gray-600">Delivery Time</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* Shipping Methods */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Package className="h-6 w-6 text-yellow-500" />
                  Available Shipping Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    We offer multiple shipping options across India to meet your delivery needs and budget preferences:
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-orange-800 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-green-600" />
                      Domestic Shipping (Within India)
                    </h3>

                    {/* Standard Delivery */}
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-green-800">Standard Delivery</h4>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Most Popular
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Time:</span>
                          <span className="font-semibold text-green-700">3-5 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Shipping Cost:</span>
                          <span className="font-semibold text-green-700">₹50 - ₹150</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Free Shipping:</span>
                          <span className="font-semibold text-green-700">Orders ≥ ₹999</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tracking:</span>
                          <span className="font-semibold text-green-700">✅ Available</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Reliable delivery through trusted courier partners across India
                      </p>
                    </div>

                    {/* Express Delivery */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-blue-800">Express Delivery</h4>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          Fast
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Time:</span>
                          <span className="font-semibold text-blue-700">1-3 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Shipping Cost:</span>
                          <span className="font-semibold text-blue-700">₹150 - ₹300</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Free Shipping:</span>
                          <span className="font-semibold text-blue-700">Orders ≥ ₹1,999</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tracking:</span>
                          <span className="font-semibold text-blue-700">✅ Real-time</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Priority handling for urgent deliveries in major cities
                      </p>
                    </div>

                    {/* Local Delivery */}
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-purple-800">Local Delivery</h4>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                          Same Day
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Time:</span>
                          <span className="font-semibold text-purple-700">Same day / Next day</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Shipping Cost:</span>
                          <span className="font-semibold text-purple-700">₹30 - ₹100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Free Shipping:</span>
                          <span className="font-semibold text-purple-700">Orders ≥ ₹599</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Coverage:</span>
                          <span className="font-semibold text-purple-700">Select cities only</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Available in Delhi NCR, Mumbai, Bangalore, Pune, and Hyderabad
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Cost Calculation */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-yellow-500" />
                  Shipping Cost Calculation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Our shipping costs are calculated based on several factors to ensure fair and transparent pricing:
                  </p>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-orange-800 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-green-600" />
                        Domestic Shipping Costs
                      </h3>

                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h5 className="font-semibold text-green-800 mb-2">📍 Location-Based Pricing</h5>
                        <div className="text-sm text-gray-700 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Local (Within City):</span>
                            <span className="font-semibold text-green-700">₹30 - ₹80</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Regional (Within State):</span>
                            <span className="font-semibold text-green-700">₹50 - ₹120</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">National (Metro to Metro):</span>
                            <span className="font-semibold text-green-700">₹80 - ₹180</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Remote (Difficult Terrain):</span>
                            <span className="font-semibold text-green-700">₹120 - ₹250</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Free Shipping Thresholds */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Free Shipping Thresholds
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="text-center bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">₹599</div>
                        <div className="text-sm text-gray-600">Local Delivery</div>
                      </div>
                      <div className="text-center bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">₹999</div>
                        <div className="text-sm text-gray-600">Standard Domestic</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estimated Delivery Times */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  Estimated Delivery Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    We strive to deliver your achaar as quickly as possible. Here's a breakdown of estimated delivery
                    times:
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-orange-800">Domestic Delivery Timeline:</h4>

                    <div className="space-y-3">
                      <div className="flex gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-800">Order Processing</h5>
                          <p className="text-sm text-gray-700">
                            1-2 business days for verification, packaging, and dispatch
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-800">Transit Time</h5>
                          <div className="text-sm text-gray-700 space-y-1">
                            <div>• Local: Same day - 1 day</div>
                            <div>• Regional: 1-2 days</div>
                            <div>• National: 2-4 days</div>
                            <div>• Remote: 3-5 days</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-800">Total Delivery Time</h5>
                          <div className="text-sm text-gray-700 space-y-1">
                            <div>• Local: 1-3 business days</div>
                            <div>• Regional: 2-4 business days</div>
                            <div>• National: 3-6 business days</div>
                            <div>• Remote: 4-7 business days</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Tracking */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Search className="h-6 w-6 text-yellow-500" />
                  Order Tracking & Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    We provide comprehensive tracking services to keep you informed about your order status throughout
                    the delivery process:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-orange-800">How to Track Your Order:</h4>

                      <div className="space-y-3">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-blue-800 mb-2">📱 WhatsApp Updates</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Automatic status updates sent to your WhatsApp</li>
                            <li>• Real-time notifications for key milestones</li>
                            <li>• Direct link to detailed tracking page</li>
                            <li>• Delivery confirmation with photo proof</li>
                          </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-green-800 mb-2">📧 Email Notifications</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Order confirmation with tracking number</li>
                            <li>• Dispatch notification with courier details</li>
                            <li>• Out for delivery alert</li>
                            <li>• Delivery confirmation receipt</li>
                          </ul>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                          <h5 className="font-semibold text-purple-800 mb-2">🔗 Direct Tracking</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Courier partner tracking links</li>
                            <li>• Real-time location updates</li>
                            <li>• Estimated delivery time</li>
                            <li>• Delivery attempt history</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-orange-800">Tracking Information Provided:</h4>

                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                        <h5 className="font-semibold text-amber-800 mb-3">📋 Order Status Updates:</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700">Order Confirmed</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <span className="text-gray-700">Processing</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-700">Packed & Ready</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <span className="text-gray-700">Dispatched</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700">In Transit</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">Out for Delivery</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                            <span className="text-gray-700">Delivered</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h5 className="font-semibold text-red-800 mb-2">🚨 Issue Resolution:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Delivery attempt notifications</li>
                          <li>• Address correction requests</li>
                          <li>• Delay explanations and new ETAs</li>
                          <li>• Alternative delivery options</li>
                          <li>• Direct contact with delivery agent</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lost or Damaged Packages */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-500" />
                  Lost or Damaged Package Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    We take full responsibility for ensuring your achaar reaches you safely. Here's what we do if
                    something goes wrong:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-orange-800">Lost Package Procedure:</h4>

                      <div className="space-y-3">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <h5 className="font-semibold text-red-800 mb-2">🔍 Investigation Process</h5>
                          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                            <li>Report missing package within 7 days</li>
                            <li>We initiate investigation with courier</li>
                            <li>24-48 hours investigation period</li>
                            <li>Resolution provided within 72 hours</li>
                          </ol>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-green-800 mb-2">✅ Resolution Options</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Full refund of order amount</li>
                            <li>• Free replacement shipment</li>
                            <li>• Store credit with bonus value</li>
                            <li>• Express replacement at no cost</li>
                          </ul>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-blue-800 mb-2">📞 How to Report</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• WhatsApp: +91 7011070852</li>
                            <li>• Email: shubhrastogi411@gmail.com</li>
                            <li>• Include order number and tracking ID</li>
                            <li>• Provide delivery address details</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-orange-800">Damaged Package Procedure:</h4>

                      <div className="space-y-3">
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                          <h5 className="font-semibold text-orange-800 mb-2">📸 Damage Documentation</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Take photos of damaged packaging</li>
                            <li>• Document product condition</li>
                            <li>• Report within 24 hours of delivery</li>
                            <li>• Keep all packaging materials</li>
                          </ul>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                          <h5 className="font-semibold text-purple-800 mb-2">🔄 Replacement Process</h5>
                          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                            <li>Submit damage report with photos</li>
                            <li>Our team reviews within 4 hours</li>
                            <li>Replacement approved and dispatched</li>
                            <li>Express delivery at no extra cost</li>
                          </ol>
                        </div>

                        <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                          <h5 className="font-semibold text-yellow-800 mb-2">💰 Compensation Policy</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• 100% refund for damaged products</li>
                            <li>• Free replacement with express shipping</li>
                            <li>• Additional discount on next order</li>
                            <li>• No questions asked policy</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Our Guarantee
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      We guarantee that you will receive your achaar in perfect condition. If anything goes wrong during
                      shipping, we will make it right immediately. Your satisfaction is our top priority, and we stand
                      behind every order with our 100% delivery guarantee.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-yellow-500" />
                  Shipping Support & Assistance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Have questions about shipping costs, delivery times, or tracking your order? Our shipping support
                    team is here to help:
                  </p>
                  <div className="bg-yellow-100 p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-gray-700">
                        <strong>WhatsApp (24/7):</strong> +91 7011070852
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-orange-600" />
                      <span className="text-gray-700">
                        <strong>Email:</strong> shubhrastogi411@gmail.com
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-orange-600 mt-1" />
                      <span className="text-gray-700">
                        <strong>Support Hours:</strong> 9 AM - 8 PM (Monday - Sunday)
                      </span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button
                      size="lg"
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(shippingMessage)}`,
                          "_blank",
                        )
                      }
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Shipping Support
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-orange-400 text-orange-700 hover:bg-orange-50"
                      onClick={() =>
                        window.open(
                          `mailto:shubhrastogi411@gmail.com?subject=Shipping Inquiry&body=Hello, I have a question about shipping for my order. Please provide assistance.%0D%0A%0D%0AOrder Details: %0D%0AShipping Address: %0D%0AContact Information: %0D%0A%0D%0AThank you.`,
                          "_blank",
                        )
                      }
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Email Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button variant="outline" size="lg" className="border-yellow-400 text-orange-700 hover:bg-yellow-100">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home Page
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-yellow-50">
        <p className="text-xs text-gray-500">© 2024 Amrit Achaar. Made with ❤️ for pickle lovers.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="/terms-of-service">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="/refund-policy">
            Refund Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="/cancellation-policy">
            Cancellation Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="/tat-policy">
            TAT Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="/shipping-policy">
            Shipping Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
