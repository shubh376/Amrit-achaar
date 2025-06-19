"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageCircle, Mail, FileText, Clock } from "lucide-react"
import Link from "next/link"

export default function OrderConfirmationTemplates() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-yellow-50 shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
            <FileText className="h-5 w-5 text-white" />
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
              Order Confirmation Templates
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional templates that include cancellation policy information for customer order confirmations
            </p>
          </div>

          {/* Templates Overview */}
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {/* WhatsApp Template */}
            <Card className="border-yellow-400 bg-yellow-50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                  WhatsApp Confirmation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Quick, mobile-friendly confirmation message template for WhatsApp Business with clear cancellation
                    policy information.
                  </p>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>Emoji-rich, engaging format</li>
                      <li>Clear 24-hour cancellation window</li>
                      <li>Simple "CANCEL ORDER" reply option</li>
                      <li>Order details summary</li>
                      <li>Direct contact information</li>
                    </ul>
                  </div>

                  <Link href="/order-confirmation-templates/whatsapp-confirmation">
                    <Button className="w-full bg-green-500 hover:bg-green-600">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      View WhatsApp Template
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Email Template */}
            <Card className="border-yellow-400 bg-yellow-50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Mail className="h-6 w-6 text-blue-500" />
                  Email Confirmation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Professional HTML email template with comprehensive order details and prominent cancellation policy
                    section.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>Professional HTML design</li>
                      <li>Mobile-responsive layout</li>
                      <li>Detailed order table</li>
                      <li>Prominent cancellation policy</li>
                      <li>Direct WhatsApp cancellation link</li>
                    </ul>
                  </div>

                  <Link href="/order-confirmation-templates/email-confirmation">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">
                      <Mail className="mr-2 h-4 w-4" />
                      View Email Template
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Cancellation Information */}
          <Card className="border-yellow-400 bg-yellow-50 mb-8">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Clock className="h-6 w-6 text-yellow-500" />
                Cancellation Policy Information Included
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">✅ What's Included:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Clear 24-hour cancellation window</li>
                    <li>Step-by-step cancellation process</li>
                    <li>Multiple contact methods</li>
                    <li>Direct cancellation links</li>
                    <li>Timeline expectations</li>
                    <li>Link to full policy page</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">🎯 Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Reduces customer confusion</li>
                    <li>Sets clear expectations</li>
                    <li>Provides easy cancellation path</li>
                    <li>Protects business operations</li>
                    <li>Improves customer satisfaction</li>
                    <li>Legal compliance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Guide */}
          <Card className="border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <FileText className="h-6 w-6 text-yellow-500" />
                Implementation Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold text-orange-800">📋 Steps to Implement:</h4>
                <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
                  <li>
                    <strong>Choose Your Template:</strong> Select WhatsApp for quick orders, Email for detailed
                    confirmations
                  </li>
                  <li>
                    <strong>Customize Placeholders:</strong> Replace all bracketed placeholders with actual order data
                  </li>
                  <li>
                    <strong>Set Up Automation:</strong> Integrate with your order management system
                  </li>
                  <li>
                    <strong>Test Thoroughly:</strong> Send test confirmations to verify formatting and links
                  </li>
                  <li>
                    <strong>Train Your Team:</strong> Ensure staff understand the cancellation policy
                  </li>
                  <li>
                    <strong>Monitor Response:</strong> Track cancellation requests and response times
                  </li>
                </ol>

                <div className="bg-amber-100 p-4 rounded-lg mt-6">
                  <p className="text-gray-700">
                    <strong>💡 Pro Tip:</strong> Send confirmations within 30 minutes of order placement to maximize
                    customer confidence and provide adequate cancellation time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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
