"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft, Shield, Clock, FileText } from "lucide-react"
import Link from "next/link"

export default function RefundPolicy() {
  const whatsappNumber = "917011070852"
  const supportMessage = "Hello! I need assistance with a refund request. Please help me with the process."

  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-yellow-50 shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
            <Shield className="h-5 w-5 text-white" />
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
              Refund Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your satisfaction is our priority. Please review our refund policy below to understand how we handle
              refund requests.
            </p>
          </div>

          {/* Policy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-500" />
                  Our Commitment to You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We want you to be completely satisfied with your experience. If you need to request a refund, please
                  review our policy below to understand the process and requirements.
                </p>
              </CardContent>
            </Card>

            {/* Refund Eligibility */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-yellow-500" />
                  Refund Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To be eligible for a refund, you must meet the following requirement:
                </p>
                <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-gray-700 font-medium">
                    📄 <strong>Proof of Purchase Required:</strong> You must provide proof of purchase, such as your
                    order confirmation email or a receipt.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Refund Process */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  Refund Process & Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Once we receive your refund request and verify your proof of purchase, we will process your refund
                    according to the following timeline:
                  </p>

                  <div className="bg-amber-100 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-5 w-5 text-amber-600" />
                      <span className="font-semibold text-amber-800">Processing Time</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>4-5 business days</strong> for the refund to be credited back to your original payment
                      method.
                    </p>
                  </div>

                  <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> The exact timing may vary depending on your bank or payment provider's
                      processing times.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Request */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-yellow-500" />
                  How to Request a Refund
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    To initiate a refund, please contact our customer support team. When reaching out, please include:
                  </p>

                  <div className="bg-yellow-100 p-4 rounded-lg space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">1.</span>
                      <span className="text-gray-700">Your order number</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">2.</span>
                      <span className="text-gray-700">Proof of purchase (order confirmation email or receipt)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">3.</span>
                      <span className="text-gray-700">A brief explanation for your refund request</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(supportMessage)}`,
                          "_blank",
                        )
                      }
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Contact Support via WhatsApp
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-2">WhatsApp: +91 7011070852</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <h3 className="text-lg font-semibold text-orange-800">Need Help?</h3>
                  <p className="text-gray-600">
                    Our customer support team is here to assist you with any questions about our refund policy.
                  </p>
                  <p className="text-sm text-gray-500">
                    We typically respond within 30 minutes during business hours (9 AM - 8 PM)
                  </p>
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
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
