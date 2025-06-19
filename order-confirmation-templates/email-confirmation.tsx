"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Clock, AlertTriangle, CheckCircle, Copy } from "lucide-react"
import { useState } from "react"

export default function EmailConfirmationTemplate() {
  const [copied, setCopied] = useState(false)

  const emailTemplate = `Subject: Order Confirmation - Your Amrit Achaar Order #[ORDER_NUMBER]

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation - Amrit Achaar</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #fbbf24, #f59e0b); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🥒 Amrit Achaar</h1>
        <p style="color: #fef3c7; margin: 10px 0 0 0; font-size: 16px;">Authentic Homemade Pickles</p>
    </div>
    
    <!-- Order Confirmation -->
    <div style="background: #fffbeb; padding: 30px; border-left: 4px solid #fbbf24;">
        <h2 style="color: #92400e; margin-top: 0;">✅ Order Confirmed!</h2>
        <p style="font-size: 16px; margin-bottom: 20px;">Dear [CUSTOMER_NAME],</p>
        <p>Thank you for your order! We're excited to prepare your fresh, authentic achaar using our traditional family recipes.</p>
    </div>
    
    <!-- Order Details -->
    <div style="background: white; padding: 30px; border: 1px solid #fbbf24;">
        <h3 style="color: #92400e; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">📋 Order Details</h3>
        
        <table style="width: 100%; margin-bottom: 20px;">
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Order Number:</td>
                <td style="padding: 8px 0;">[ORDER_NUMBER]</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Order Date:</td>
                <td style="padding: 8px 0;">[ORDER_DATE]</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Estimated Delivery:</td>
                <td style="padding: 8px 0;">[DELIVERY_DATE]</td>
            </tr>
        </table>
        
        <h4 style="color: #92400e; margin-bottom: 15px;">🛒 Items Ordered:</h4>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <thead>
                <tr style="background: #fef3c7;">
                    <th style="padding: 12px; text-align: left; border: 1px solid #fbbf24;">Product</th>
                    <th style="padding: 12px; text-align: center; border: 1px solid #fbbf24;">Qty</th>
                    <th style="padding: 12px; text-align: right; border: 1px solid #fbbf24;">Price</th>
                </tr>
            </thead>
            <tbody>
                <!-- Repeat this row for each item -->
                <tr>
                    <td style="padding: 12px; border: 1px solid #fbbf24;">[PRODUCT_NAME]</td>
                    <td style="padding: 12px; text-align: center; border: 1px solid #fbbf24;">[QUANTITY]</td>
                    <td style="padding: 12px; text-align: right; border: 1px solid #fbbf24;">[PRICE]</td>
                </tr>
                <!-- End repeat -->
            </tbody>
            <tfoot>
                <tr style="background: #fef3c7; font-weight: bold;">
                    <td colspan="2" style="padding: 12px; border: 1px solid #fbbf24;">Total Amount:</td>
                    <td style="padding: 12px; text-align: right; border: 1px solid #fbbf24;">[TOTAL_AMOUNT]</td>
                </tr>
            </tfoot>
        </table>
        
        <h4 style="color: #92400e; margin-bottom: 10px;">📍 Delivery Address:</h4>
        <p style="background: #f9fafb; padding: 15px; border-radius: 5px; margin-bottom: 20px;">[DELIVERY_ADDRESS]</p>
    </div>
    
    <!-- CRITICAL: Cancellation Policy -->
    <div style="background: #fef2f2; padding: 25px; border: 2px solid #ef4444; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #dc2626; margin-top: 0; display: flex; align-items: center;">
            ⏰ IMPORTANT: Cancellation Policy
        </h3>
        
        <div style="background: #fee2e2; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <p style="font-size: 18px; font-weight: bold; color: #991b1b; margin: 0;">
                🔴 You have 24 HOURS from now to cancel this order
            </p>
            <p style="color: #7f1d1d; margin: 10px 0 0 0;">
                After 24 hours, cancellation will NOT be possible as we begin preparation immediately.
            </p>
        </div>
        
        <h4 style="color: #dc2626; margin-bottom: 15px;">📞 How to Cancel:</h4>
        <ul style="color: #7f1d1d; margin-bottom: 20px;">
            <li style="margin-bottom: 8px;"><strong>WhatsApp:</strong> Message us at +91 7011070852</li>
            <li style="margin-bottom: 8px;"><strong>Email:</strong> Reply to this email with "CANCEL ORDER"</li>
            <li style="margin-bottom: 8px;"><strong>Include:</strong> Your order number and reason for cancellation</li>
        </ul>
        
        <div style="text-align: center; margin-top: 20px;">
            <a href="https://wa.me/917011070852?text=I%20need%20to%20cancel%20my%20order%20%23[ORDER_NUMBER]" 
               style="background: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                📱 Cancel via WhatsApp
            </a>
        </div>
    </div>
    
    <!-- What's Next -->
    <div style="background: #f0fdf4; padding: 25px; border-left: 4px solid #22c55e;">
        <h3 style="color: #166534; margin-top: 0;">✨ What Happens Next?</h3>
        <ul style="color: #166534;">
            <li style="margin-bottom: 10px;">We'll start preparing your fresh achaar within 24 hours</li>
            <li style="margin-bottom: 10px;">You'll receive updates on preparation progress</li>
            <li style="margin-bottom: 10px;">Delivery will be arranged as per the estimated timeline</li>
            <li style="margin-bottom: 10px;">We'll notify you when your order is ready for delivery</li>
        </ul>
    </div>
    
    <!-- Contact Information -->
    <div style="background: #fffbeb; padding: 25px; text-align: center;">
        <h3 style="color: #92400e; margin-top: 0;">📞 Need Help?</h3>
        <p style="margin-bottom: 15px;">Our customer support team is here to assist you!</p>
        
        <div style="margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>WhatsApp:</strong> +91 7011070852</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> shubhrastogi411@gmail.com</p>
            <p style="margin: 5px 0;"><strong>Business Hours:</strong> 9 AM - 8 PM (Monday - Sunday)</p>
        </div>
        
        <p style="font-size: 14px; color: #6b7280;">
            <a href="[WEBSITE_URL]/cancellation-policy" style="color: #f59e0b; text-decoration: none;">
                📋 View Full Cancellation Policy
            </a>
        </p>
    </div>
    
    <!-- Footer -->
    <div style="background: #92400e; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
        <p style="margin: 0; font-size: 16px;">🙏 Thank you for choosing Amrit Achaar!</p>
        <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Made with ❤️ for pickle lovers</p>
        <p style="margin: 15px 0 0 0; font-size: 12px; opacity: 0.7;">
            © 2024 Amrit Achaar. All rights reserved.
        </p>
    </div>
    
</body>
</html>`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailTemplate)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-yellow-200 p-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-800 mb-4">Email Order Confirmation Template</h1>
          <p className="text-gray-600">Professional HTML email template with cancellation policy information</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Template Code */}
          <div className="lg:col-span-2">
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Mail className="h-6 w-6 text-yellow-500" />
                  HTML Email Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs overflow-auto max-h-96">
                  <pre>{emailTemplate}</pre>
                </div>
                <Button onClick={copyToClipboard} className="w-full mt-4 bg-blue-500 hover:bg-blue-600">
                  <Copy className="mr-2 h-4 w-4" />
                  {copied ? "Copied!" : "Copy HTML Template"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <div className="space-y-6">
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                  Template Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>Professional HTML design</li>
                  <li>Mobile-responsive layout</li>
                  <li>Prominent cancellation policy section</li>
                  <li>Direct WhatsApp cancellation link</li>
                  <li>Complete order details table</li>
                  <li>Brand-consistent styling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  Placeholders to Replace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>[CUSTOMER_NAME]</li>
                  <li>[ORDER_NUMBER]</li>
                  <li>[ORDER_DATE]</li>
                  <li>[DELIVERY_DATE]</li>
                  <li>[PRODUCT_NAME]</li>
                  <li>[QUANTITY]</li>
                  <li>[PRICE]</li>
                  <li>[TOTAL_AMOUNT]</li>
                  <li>[DELIVERY_ADDRESS]</li>
                  <li>[WEBSITE_URL]</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  Implementation Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>Send within 30 minutes of order</li>
                  <li>Test email rendering across devices</li>
                  <li>Include order number in subject line</li>
                  <li>Set up automated email system</li>
                  <li>Keep copies for customer service</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
