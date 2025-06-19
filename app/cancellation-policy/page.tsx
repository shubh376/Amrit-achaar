"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Clock, AlertTriangle, CheckCircle, XCircle, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function CancellationPolicy() {
  const whatsappNumber = "917011070852"
  const cancellationMessage = "Hello! I need to cancel my recent order. Please help me with the cancellation process."

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
              Order Cancellation Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please review our cancellation policy to understand the process and timeframes for canceling your achaar
              orders.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Last Updated:</strong> December 19, 2024
            </p>
          </div>

          {/* Policy Content */}
          <div className="space-y-8">
            {/* 24-Hour Window */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  24-Hour Cancellation Window
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-amber-100 p-6 rounded-lg border-l-4 border-amber-500">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-6 w-6 text-amber-600" />
                      <span className="text-xl font-bold text-amber-800">Important: 24-Hour Rule</span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      All order cancellations must be initiated within <strong>24 hours</strong> from the time your
                      order was placed and confirmed.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    This policy ensures we can efficiently manage our production schedule while maintaining the
                    freshness and quality of our handmade achaar products. Since our products are made fresh to order,
                    we begin preparation shortly after receiving your order.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How to Cancel */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                  How to Cancel Your Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    To cancel your order within the 24-hour window, please follow these simple steps:
                  </p>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Step-by-Step Cancellation Process:
                    </h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
                      <li>
                        <strong>Contact us immediately</strong> via WhatsApp (+91 7011070852) or email
                        (shubhrastogi411@gmail.com)
                      </li>
                      <li>
                        <strong>Provide your order details:</strong>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                          <li>Order confirmation number (if available)</li>
                          <li>Date and time when order was placed</li>
                          <li>Products ordered and quantities</li>
                          <li>Your name and contact information</li>
                        </ul>
                      </li>
                      <li>
                        <strong>State your cancellation request clearly</strong> in your message
                      </li>
                      <li>
                        <strong>Wait for confirmation</strong> - We will respond with cancellation confirmation within
                        2-4 hours during business hours
                      </li>
                    </ol>
                  </div>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(cancellationMessage)}`,
                          "_blank",
                        )
                      }
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Cancel Order via WhatsApp
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-2">
                      Available 9 AM - 8 PM | Response within 2-4 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After 24 Hours */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <XCircle className="h-6 w-6 text-red-500" />
                  After the 24-Hour Window
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <span className="font-semibold text-red-800">Important Notice</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Orders <strong>cannot be cancelled</strong> after the 24-hour window has passed.
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Once the 24-hour cancellation period expires, the following consequences apply:
                  </p>

                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>
                      <strong>Order Processing:</strong> Your order will be processed and preparation will begin
                      immediately
                    </li>
                    <li>
                      <strong>No Refunds:</strong> The order cannot be cancelled and no refund will be provided for
                      change of mind
                    </li>
                    <li>
                      <strong>Production Schedule:</strong> Ingredients will be allocated and production scheduled
                    </li>
                    <li>
                      <strong>Delivery Commitment:</strong> We will proceed with packaging and delivery as planned
                    </li>
                  </ul>

                  <div className="bg-amber-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Why This Policy Exists:</strong> Our achaar products are made fresh to order using premium
                      ingredients. Once we begin preparation, ingredients are committed and cannot be reused for other
                      orders, ensuring every customer receives the freshest possible product.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exceptions */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-500" />
                  Exceptions to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    While our 24-hour cancellation policy is firm, we recognize that certain circumstances warrant
                    exceptions. The following situations are exempt from the standard cancellation timeframe:
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3">Valid Exceptions:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>
                        <strong>Damaged Products:</strong> Products that arrive with damaged packaging or compromised
                        seals
                      </li>
                      <li>
                        <strong>Spoiled Products:</strong> Products that show signs of spoilage, unusual odor, or
                        contamination upon delivery
                      </li>
                      <li>
                        <strong>Incorrect Orders:</strong> When we deliver products different from what was ordered
                      </li>
                      <li>
                        <strong>Quality Issues:</strong> Products that do not meet our standard quality expectations
                      </li>
                      <li>
                        <strong>Delivery Problems:</strong> Significant delays beyond our estimated delivery timeframe
                        (more than 3 days late)
                      </li>
                      <li>
                        <strong>Health & Safety Concerns:</strong> Any food safety issues identified upon receipt
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Reporting Exceptions:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      For any of the above exceptions, please contact us <strong>within 24 hours of delivery</strong>{" "}
                      with photos and a detailed description of the issue. We will investigate promptly and provide
                      appropriate resolution, including full refund or replacement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  Business Hours & Response Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-amber-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Business Hours:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>
                          <strong>Monday - Sunday:</strong> 9:00 AM - 8:00 PM
                        </li>
                        <li>
                          <strong>Response Time:</strong> Within 2-4 hours
                        </li>
                        <li>
                          <strong>Emergency:</strong> WhatsApp preferred
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Quick Contact:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>
                          <strong>WhatsApp:</strong> +91 7011070852
                        </li>
                        <li>
                          <strong>Email:</strong> shubhrastogi411@gmail.com
                        </li>
                        <li>
                          <strong>Best Method:</strong> WhatsApp for urgent cancellations
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* New TAT Section */}
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Turnaround Time (TAT) for Cancellation Requests
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-blue-700 mb-2">📱 WhatsApp Cancellations:</h5>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>
                            • <strong>Immediate Response:</strong> 15-30 minutes
                          </li>
                          <li>
                            • <strong>Confirmation:</strong> Within 1-2 hours
                          </li>
                          <li>
                            • <strong>Refund Processing:</strong> 2-3 business days
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 mb-2">📧 Email Cancellations:</h5>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>
                            • <strong>Acknowledgment:</strong> Within 2-4 hours
                          </li>
                          <li>
                            • <strong>Confirmation:</strong> Within 4-6 hours
                          </li>
                          <li>
                            • <strong>Refund Processing:</strong> 3-4 business days
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 bg-white p-4 rounded-lg border border-blue-300">
                      <h5 className="font-semibold text-blue-800 mb-2">Complete Cancellation TAT:</h5>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Request Received</span>
                        <span className="text-blue-600">→</span>
                        <span className="text-gray-600">Confirmation</span>
                        <span className="text-blue-600">→</span>
                        <span className="text-gray-600">Refund Processed</span>
                        <span className="text-blue-600">→</span>
                        <span className="text-green-600 font-semibold">Complete</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                        <span>0 hours</span>
                        <span>1-6 hours</span>
                        <span>2-4 days</span>
                        <span>Total: 2-4 days</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Important:</strong> The 24-hour cancellation window is calculated from the time of order
                      confirmation, not from our business hours. However, our response to your cancellation request will
                      be provided during business hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Policies */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-500" />
                  Related Policies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    This Cancellation Policy works in conjunction with our other policies:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Link href="/refund-policy" className="block">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                        <h4 className="font-semibold text-blue-800 mb-2">Refund Policy</h4>
                        <p className="text-sm text-gray-600">
                          Learn about our refund process and eligibility requirements
                        </p>
                      </div>
                    </Link>

                    <Link href="/terms-of-service" className="block">
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">
                        <h4 className="font-semibold text-purple-800 mb-2">Terms of Service</h4>
                        <p className="text-sm text-gray-600">Review our complete terms and conditions</p>
                      </div>
                    </Link>

                    <Link href="/privacy-policy" className="block">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
                        <h4 className="font-semibold text-green-800 mb-2">Privacy Policy</h4>
                        <p className="text-sm text-gray-600">Understand how we protect your personal information</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Mail className="h-6 w-6 text-yellow-500" />
                  Need Help with Cancellation?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If you have questions about our cancellation policy or need assistance with canceling your order,
                    please contact us:
                  </p>
                  <div className="bg-yellow-100 p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-gray-700">
                        <strong>WhatsApp (Recommended):</strong> +91 7011070852
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
                        <strong>Business Hours:</strong> 9 AM - 8 PM (Monday - Sunday)
                      </span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button
                      size="lg"
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(cancellationMessage)}`,
                          "_blank",
                        )
                      }
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Support
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-orange-400 text-orange-700 hover:bg-orange-50"
                      onClick={() =>
                        window.open(
                          `mailto:shubhrastogi411@gmail.com?subject=Order Cancellation Request&body=Hello, I need to cancel my recent order. Please find my order details below:%0D%0A%0D%0AOrder Date: %0D%0AProducts Ordered: %0D%0AContact Information: %0D%0A%0D%0AThank you.`,
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
        </nav>
      </footer>
    </div>
  )
}
