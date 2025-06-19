"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Package, Truck, AlertTriangle, CheckCircle, MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

export default function TATPolicy() {
  const whatsappNumber = "917011070852"
  const tatMessage = "Hello! I have a question about the delivery timeline for my order. Please provide an update."

  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-yellow-50 shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
            <Clock className="h-5 w-5 text-white" />
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
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-800 mb-4">
              Turnaround Time (TAT) Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understand our order processing and delivery timeframes to plan your achaar orders effectively.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Last Updated:</strong> December 19, 2024
            </p>
          </div>

          {/* TAT Content */}
          <div className="space-y-8">
            {/* Overview */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  TAT Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Our Turnaround Time (TAT) policy outlines the expected timeframes for order processing and delivery.
                    Since all our achaar products are made fresh to order using traditional methods, we follow a
                    structured timeline to ensure quality and freshness.
                  </p>

                  <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-500">
                    <h4 className="font-semibold text-amber-800 mb-2">Standard TAT Summary:</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="bg-white p-3 rounded">
                        <div className="text-2xl font-bold text-orange-600">5-10</div>
                        <div className="text-sm text-gray-600">Business Days</div>
                        <div className="text-xs text-gray-500">Total Processing</div>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <div className="text-2xl font-bold text-green-600">1-3</div>
                        <div className="text-sm text-gray-600">Business Days</div>
                        <div className="text-xs text-gray-500">Delivery Time</div>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <div className="text-2xl font-bold text-blue-600">6-13</div>
                        <div className="text-sm text-gray-600">Business Days</div>
                        <div className="text-xs text-gray-500">Total Timeline</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Processing Timeline */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Package className="h-6 w-6 text-yellow-500" />
                  Order Processing Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Our order processing follows a systematic approach to ensure quality and freshness:
                  </p>

                  <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Order Confirmation</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>Timeline:</strong> Within 2-4 hours of order placement
                        </p>
                        <p className="text-gray-600 text-sm">
                          Order details verified, payment confirmed, and production scheduled.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-800">Ingredient Sourcing</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>Timeline:</strong> 1-2 business days
                        </p>
                        <p className="text-gray-600 text-sm">
                          Fresh ingredients sourced from trusted suppliers, quality checked and prepared.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-800">Production & Preparation</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>Timeline:</strong> 3-6 business days
                        </p>
                        <p className="text-gray-600 text-sm">
                          Traditional achaar preparation using family recipes, proper fermentation and quality testing.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800">Packaging & Quality Check</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>Timeline:</strong> 1-2 business days
                        </p>
                        <p className="text-gray-600 text-sm">
                          Final quality inspection, hygienic packaging, labeling and preparation for dispatch.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-100 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      <strong>Total Processing Time:</strong> 5-10 business days (depending on order complexity and
                      seasonal availability)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Types & TAT */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Package className="h-6 w-6 text-yellow-500" />
                  TAT by Order Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Different order types have varying processing times based on complexity and requirements:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Standard Orders */}
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Standard Orders
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processing:</span>
                          <span className="font-semibold text-green-700">5-7 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery:</span>
                          <span className="font-semibold text-green-700">1-3 business days</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-gray-600">Total TAT:</span>
                          <span className="font-bold text-green-800">6-10 business days</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Regular achaar varieties (1-3 items, standard quantities)
                      </p>
                    </div>

                    {/* Bulk Orders */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                        <Package className="h-5 w-5" />
                        Bulk Orders
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processing:</span>
                          <span className="font-semibold text-blue-700">7-10 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery:</span>
                          <span className="font-semibold text-blue-700">2-3 business days</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-gray-600">Total TAT:</span>
                          <span className="font-bold text-blue-800">9-13 business days</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">Large quantities (5+ items or 10+ jars total)</p>
                    </div>

                    {/* Seasonal/Special Orders */}
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Seasonal/Special Orders
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processing:</span>
                          <span className="font-semibold text-purple-700">7-12 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery:</span>
                          <span className="font-semibold text-purple-700">1-3 business days</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-gray-600">Total TAT:</span>
                          <span className="font-bold text-purple-800">8-15 business days</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Seasonal varieties or special ingredient requirements
                      </p>
                    </div>

                    {/* Custom Orders */}
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Custom Orders
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processing:</span>
                          <span className="font-semibold text-orange-700">10-15 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery:</span>
                          <span className="font-semibold text-orange-700">1-3 business days</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-gray-600">Total TAT:</span>
                          <span className="font-bold text-orange-800">11-18 business days</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Special recipes, custom spice levels, or unique requirements
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Options */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Truck className="h-6 w-6 text-yellow-500" />
                  Delivery Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Once your order is ready for dispatch, delivery times depend on your location and chosen method:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                      <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-green-800">Local Delivery</h4>
                      <p className="text-2xl font-bold text-green-600 my-2">1-2 Days</p>
                      <p className="text-xs text-gray-600">Within city limits</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                      <Truck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-blue-800">Regional Delivery</h4>
                      <p className="text-2xl font-bold text-blue-600 my-2">2-3 Days</p>
                      <p className="text-xs text-gray-600">Within state/nearby states</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
                      <Truck className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-purple-800">National Delivery</h4>
                      <p className="text-2xl font-bold text-purple-600 my-2">3-5 Days</p>
                      <p className="text-xs text-gray-600">Pan-India delivery</p>
                    </div>
                  </div>

                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Delivery Partners:</h4>
                    <p className="text-gray-700 text-sm">
                      We work with reliable courier services and logistics partners to ensure safe and timely delivery.
                      Tracking information will be provided once your order is dispatched.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Factors Affecting TAT */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  Factors That May Affect TAT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Several factors may influence our standard TAT. We strive to communicate any potential delays
                    proactively:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-3">Internal Factors:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            <strong>Order Complexity:</strong> Multiple varieties or large quantities
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            <strong>Ingredient Availability:</strong> Seasonal or specialty ingredients
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            <strong>Production Capacity:</strong> High demand periods
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            <strong>Quality Standards:</strong> Additional testing or preparation time
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            <strong>Custom Requirements:</strong> Special recipes or packaging
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-orange-800 mb-3">External Factors:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            <strong>Weather Conditions:</strong> Monsoon or extreme weather
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            <strong>Courier Delays:</strong> Logistics partner schedules
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            <strong>Festival Seasons:</strong> High demand during festivals
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            <strong>Public Holidays:</strong> Non-working days affecting processing
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            <strong>Force Majeure:</strong> Unforeseen circumstances beyond control
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Communication & Updates */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-yellow-500" />
                  Communication & Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We believe in transparent communication throughout your order journey:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-3">Regular Updates:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✅ Order confirmation within 2-4 hours</li>
                        <li>✅ Production start notification</li>
                        <li>✅ Quality check completion update</li>
                        <li>✅ Dispatch notification with tracking</li>
                        <li>✅ Delivery confirmation</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-3">Delay Communication:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>⚠️ Immediate notification of any delays</li>
                        <li>⚠️ Revised timeline with explanation</li>
                        <li>⚠️ Regular progress updates</li>
                        <li>⚠️ Compensation options if applicable</li>
                        <li>⚠️ Direct contact for concerns</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">How We Communicate:</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <MessageCircle className="h-6 w-6 text-green-600 mx-auto mb-1" />
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-gray-600">Real-time updates</div>
                      </div>
                      <div className="text-center">
                        <Mail className="h-6 w-6 text-green-600 mx-auto mb-1" />
                        <div className="font-semibold">Email</div>
                        <div className="text-gray-600">Detailed notifications</div>
                      </div>
                      <div className="text-center">
                        <Clock className="h-6 w-6 text-green-600 mx-auto mb-1" />
                        <div className="font-semibold">Proactive</div>
                        <div className="text-gray-600">Before you ask</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mitigation Steps */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                  Delay Mitigation Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    When delays occur, we take immediate action to minimize impact and keep you informed:
                  </p>

                  <div className="space-y-3">
                    <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-800">Immediate Assessment</h5>
                        <p className="text-sm text-gray-700">
                          Identify the cause and impact of delay within 2 hours of detection
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h5 className="font-semibold text-yellow-800">Customer Notification</h5>
                        <p className="text-sm text-gray-700">
                          Contact customer within 4 hours with revised timeline and explanation
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-800">Alternative Solutions</h5>
                        <p className="text-sm text-gray-700">
                          Explore expedited processing, alternative ingredients, or priority scheduling
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-800">Compensation Options</h5>
                        <p className="text-sm text-gray-700">
                          Offer discounts, complimentary items, or expedited delivery for significant delays
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Our Commitment:</h4>
                    <p className="text-gray-700 text-sm">
                      We understand that delays can be inconvenient. Our goal is to minimize disruptions and maintain
                      your trust through transparent communication and fair compensation when delays are unavoidable.
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
                  TAT Inquiries & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Have questions about your order timeline or need updates? We're here to help:
                  </p>
                  <div className="bg-yellow-100 p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-gray-700">
                        <strong>WhatsApp (Fastest):</strong> +91 7011070852
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-orange-600" />
                      <span className="text-gray-700">
                        <strong>Email:</strong> shubhrastogi411@gmail.com
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-orange-600 mt-1" />
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
                        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tatMessage)}`, "_blank")
                      }
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Check Order Status
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-orange-400 text-orange-700 hover:bg-orange-50"
                      onClick={() =>
                        window.open(
                          `mailto:shubhrastogi411@gmail.com?subject=TAT Inquiry&body=Hello, I would like to inquire about the delivery timeline for my order. Please provide an update.%0D%0A%0D%0AOrder Details: %0D%0AOrder Date: %0D%0AContact Information: %0D%0A%0D%0AThank you.`,
                          "_blank",
                        )
                      }
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Email Inquiry
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
        </nav>
      </footer>
    </div>
  )
}
