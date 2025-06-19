"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Last Updated:</strong> December 19, 2024
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-500" />
                  Our Commitment to Your Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  At Amrit Achaar, we are committed to protecting your privacy and ensuring the security of your
                  personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or make a purchase from us.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Database className="h-6 w-6 text-yellow-500" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Personal Information</h4>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Place an order through WhatsApp or email</li>
                      <li>Contact us for customer support</li>
                      <li>Subscribe to our newsletter or promotional communications</li>
                      <li>Provide feedback or reviews</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Types of Personal Information</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Name and contact information (phone number, email address)</li>
                      <li>Delivery address and billing information</li>
                      <li>Order history and preferences</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Automatically Collected Information</h4>
                    <p className="text-gray-700 leading-relaxed">
                      When you visit our website, we may automatically collect certain information about your device,
                      including information about your web browser, IP address, time zone, and some of the cookies that
                      are installed on your device.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Eye className="h-6 w-6 text-yellow-500" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and provide customer support</li>
                  <li>Send you promotional materials and updates (with your consent)</li>
                  <li>Improve our products and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Lock className="h-6 w-6 text-yellow-500" />
                  Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>
                      <strong>Service Providers:</strong> We may share information with trusted third-party service
                      providers who assist us in operating our business (e.g., payment processors, delivery services)
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose information when required by law or to
                      protect our rights, property, or safety
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets,
                      your information may be transferred
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-500" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However, please note
                  that no method of transmission over the internet or electronic storage is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-yellow-500" />
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this Privacy Policy, unless a longer retention period is required or permitted by law. When we no
                  longer need your personal information, we will securely delete or anonymize it.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Eye className="h-6 w-6 text-yellow-500" />
                  Your Privacy Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>
                      <strong>Access:</strong> Request access to the personal information we hold about you
                    </li>
                    <li>
                      <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your personal information
                    </li>
                    <li>
                      <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                    </li>
                    <li>
                      <strong>Data Portability:</strong> Request a copy of your data in a structured format
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    To exercise any of these rights, please contact us at <strong>shubhrastogi411@gmail.com</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Database className="h-6 w-6 text-yellow-500" />
                  Cookies and Tracking Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website
                  traffic, and understand where our visitors are coming from. You can control cookies through your
                  browser settings, but please note that disabling cookies may affect the functionality of our website.
                </p>
              </CardContent>
            </Card>

            {/* Third-Party Links */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Lock className="h-6 w-6 text-yellow-500" />
                  Third-Party Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites or services. We are not responsible for the
                  privacy practices or content of these third-party sites. We encourage you to review the privacy
                  policies of any third-party sites you visit.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-500" />
                  Children's Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not directed to children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If we become aware that we have collected personal information
                  from a child under 13, we will take steps to delete such information.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-yellow-500" />
                  Changes to This Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                  updated policy on our website with a new "Last Updated" date.
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
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
                        `mailto:shubhrastogi411@gmail.com?subject=Privacy Policy Inquiry&body=Hello, I have a question about your Privacy Policy. Please provide more information.`,
                        "_blank",
                      )
                    }
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us About Privacy
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
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
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
