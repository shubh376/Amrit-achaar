"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft, Shield } from "lucide-react"
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
            {/* Introduction and Full Policy */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    We want you to be completely satisfied with your experience. If you need to request a refund, please
                    review our policy below:
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">Refund Eligibility:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To be eligible for a refund, you must provide proof of purchase, such as your order confirmation
                      email or a receipt.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">Refund Process:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Once we receive your refund request and verify your proof of purchase, we will process your
                      refund. Please note that it may take 4-5 business days for the refund to be credited back to your
                      original payment method. The exact timing may vary depending on your bank or payment provider.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">How to Request a Refund:</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      To initiate a refund, please contact our customer support team at{" "}
                      <strong>shubhrastogi411@gmail.com</strong>. Please include your order number and a brief
                      explanation for your refund request.
                    </p>

                    <Button
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={() =>
                        window.open(
                          `mailto:shubhrastogi411@gmail.com?subject=Refund Request&body=Hello, I would like to request a refund. Please find my details below:%0D%0A%0D%0AOrder Number: %0D%0AReason for refund: %0D%0A%0D%0AThank you.`,
                          "_blank",
                        )
                      }
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Send Email for Refund Request
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-2">Email: shubhrastogi411@gmail.com</p>
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
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="/refund-policy">
            Refund Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
