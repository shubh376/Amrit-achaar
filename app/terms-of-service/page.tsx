"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Scale, FileText, AlertTriangle, Clock, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-yellow-50 shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
            <Scale className="h-5 w-5 text-white" />
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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please read these Terms of Service carefully before using our website or purchasing our products.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Last Updated:</strong> December 19, 2024
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Scale className="h-6 w-6 text-yellow-500" />
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service ("Terms") govern your use of the Amrit Achaar website and services. By
                  accessing our website, placing an order, or using our services, you agree to be bound by these Terms.
                  If you do not agree to these Terms, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* About Our Business */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-500" />
                  About Amrit Achaar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Amrit Achaar is a food business specializing in authentic, homemade Indian pickles (achaar). We
                    operate as an online business, taking orders through WhatsApp and email, and delivering fresh,
                    traditional pickles made with premium ingredients.
                  </p>
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Business Contact:</strong> shubhrastogi411@gmail.com | WhatsApp: +91 7011070852
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Products and Services */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-yellow-500" />
                  Products and Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We offer a variety of homemade pickles including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Mango Pickle (Aam ka Achaar)</li>
                    <li>Mixed Vegetable Pickle</li>
                    <li>Lemon Pickle (Nimbu ka Achaar)</li>
                    <li>Garlic Pickle (Lahsun ka Achaar)</li>
                    <li>Green Chili Pickle</li>
                    <li>Amla Pickle (Gooseberry)</li>
                    <li>Other seasonal and traditional varieties</li>
                  </ul>
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Important:</strong> All products are made fresh to order. Availability may vary based on
                      seasonal ingredients and production capacity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ordering Process */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Phone className="h-6 w-6 text-yellow-500" />
                  Ordering Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">Orders can be placed through the following methods:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>
                      <strong>WhatsApp:</strong> +91 7011070852 (Preferred method for quick communication)
                    </li>
                    <li>
                      <strong>Email:</strong> shubhrastogi411@gmail.com
                    </li>
                  </ul>
                  <div className="bg-yellow-100 p-4 rounded-lg space-y-2">
                    <p className="text-gray-700">
                      <strong>Order Requirements:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Specify product name and quantity</li>
                      <li>Provide complete delivery address</li>
                      <li>Share contact information for delivery coordination</li>
                      <li>Confirm payment method</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing and Payment */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-yellow-500" />
                  Pricing and Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    All prices are listed in Indian Rupees (₹) and are subject to change without notice. Prices include
                    the cost of the product but may not include delivery charges, which will be communicated at the time
                    of order confirmation.
                  </p>
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Payment Terms:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Payment is required before product preparation begins</li>
                      <li>We accept various payment methods (to be confirmed during order)</li>
                      <li>All payments must be completed in Indian Rupees</li>
                      <li>Payment confirmation will be provided via WhatsApp or email</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery and Fulfillment */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  Delivery and Fulfillment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We strive to fulfill orders promptly while maintaining our quality standards:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>
                      <strong>Preparation Time:</strong> 5-10 business days depending on product and quantity
                    </li>
                    <li>
                      <strong>Delivery:</strong> Arranged based on your location and our delivery capabilities
                    </li>
                    <li>
                      <strong>Pickup:</strong> Available by appointment for local customers
                    </li>
                  </ul>
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Important:</strong> Delivery times are estimates and may vary due to factors beyond our
                      control, including weather, ingredient availability, and local conditions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Quality and Food Safety */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-500" />
                  Product Quality and Food Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We are committed to providing high-quality, safe food products:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>All products are made in hygienic conditions following food safety practices</li>
                    <li>We use fresh, quality ingredients sourced from reliable suppliers</li>
                    <li>Products are prepared in small batches to ensure freshness</li>
                    <li>Proper packaging is used to maintain product quality during delivery</li>
                  </ul>
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Allergen Information:</strong> Our products may contain common allergens. Please inform us
                      of any allergies or dietary restrictions when placing your order.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Returns and Refunds */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  Returns and Refunds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Due to the nature of our food products, returns are limited to specific circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Product quality issues reported within 24 hours of delivery</li>
                    <li>Incorrect items delivered</li>
                    <li>Damaged packaging affecting product safety</li>
                  </ul>
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Refund Process:</strong> Please refer to our{" "}
                      <Link href="/refund-policy" className="text-orange-600 hover:underline font-semibold">
                        Refund Policy
                      </Link>{" "}
                      for detailed information about eligibility and procedures.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-yellow-500" />
                  User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">By using our services, you agree to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Provide accurate and complete information when placing orders</li>
                    <li>Make payments as agreed upon</li>
                    <li>Be available for delivery coordination</li>
                    <li>Handle products safely upon receipt</li>
                    <li>Report any issues promptly and in good faith</li>
                    <li>Respect our business hours and response times</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Scale className="h-6 w-6 text-yellow-500" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    While we strive to provide excellent products and service, our liability is limited to the purchase
                    price of the products. We are not liable for:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Delays due to circumstances beyond our control</li>
                    <li>Changes in taste preferences or expectations</li>
                    <li>Allergic reactions (when allergen information was not disclosed)</li>
                    <li>Improper storage or handling after delivery</li>
                    <li>Indirect or consequential damages</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-500" />
                  Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  All content on our website, including text, images, logos, and recipes, is the property of Amrit
                  Achaar and is protected by applicable intellectual property laws. Our traditional recipes and
                  preparation methods are proprietary to our business.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Scale className="h-6 w-6 text-yellow-500" />
                  Governing Law and Jurisdiction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service are governed by the laws of India. Any disputes arising from these terms or our
                  services will be subject to the jurisdiction of the courts in India. We will make every effort to
                  resolve disputes amicably through direct communication.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  Changes to Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective
                  immediately upon posting on our website. Continued use of our services after changes constitutes
                  acceptance of the modified terms. We recommend reviewing these terms periodically.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Mail className="h-6 w-6 text-yellow-500" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-yellow-100 p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-orange-600" />
                      <span className="text-gray-700">
                        <strong>Email:</strong> shubhrastogi411@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-orange-600" />
                      <span className="text-gray-700">
                        <strong>WhatsApp:</strong> +91 7011070852
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-orange-600 mt-1" />
                      <span className="text-gray-700">
                        <strong>Business:</strong> Amrit Achaar - Authentic Homemade Pickles
                      </span>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() =>
                      window.open(
                        `mailto:shubhrastogi411@gmail.com?subject=Terms of Service Inquiry&body=Hello, I have a question about your Terms of Service. Please provide more information.`,
                        "_blank",
                      )
                    }
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us About Terms
                  </Button>
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
        </nav>
      </footer>
    </div>
  )
}
