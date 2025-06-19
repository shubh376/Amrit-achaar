"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MessageCircle, AlertTriangle, CheckCircle, Copy } from "lucide-react"
import { useState } from "react"

export default function WhatsAppConfirmationTemplate() {
  const [copied, setCopied] = useState(false)

  // Sample order data - replace with actual order details
  const orderData = {
    customerName: "[Customer Name]",
    orderNumber: "[Order #]",
    orderDate: "[Date & Time]",
    items: [{ name: "[Product Name]", quantity: "[Qty]", price: "[Price]" }],
    totalAmount: "[Total Amount]",
    deliveryAddress: "[Delivery Address]",
    estimatedDelivery: "[Delivery Date]",
  }

  const whatsappMessage = `🥒 *AMRIT ACHAAR - ORDER CONFIRMATION* 🥒

Dear ${orderData.customerName},

✅ Your order has been confirmed!

📋 *ORDER DETAILS:*
Order Number: ${orderData.orderNumber}
Date: ${orderData.orderDate}

🛒 *ITEMS ORDERED:*
${orderData.items.map((item) => `• ${item.name} - Qty: ${item.quantity} - ${item.price}`).join("\n")}

💰 *Total Amount:* ${orderData.totalAmount}
📍 *Delivery Address:* ${orderData.deliveryAddress}
🚚 *Estimated Delivery:* ${orderData.estimatedDelivery}

⏰ *IMPORTANT - CANCELLATION POLICY:*
🔴 You have *24 HOURS* from now to cancel this order
🔴 After 24 hours, cancellation will NOT be possible
🔴 To cancel, reply to this message immediately with "CANCEL ORDER"

📞 *NEED TO CANCEL?*
Reply: "CANCEL ORDER + Your reason"
Or call: +91 7011070852

✨ *WHAT'S NEXT?*
• We'll start preparing your fresh achaar within 24 hours
• You'll receive updates on preparation progress
• Delivery will be arranged as per schedule

🙏 Thank you for choosing Amrit Achaar!
Made with love for pickle lovers ❤️

---
For questions: shubhrastogi411@gmail.com
Cancellation Policy: www.amritachaar.com/cancellation-policy`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(whatsappMessage)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-yellow-200 p-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-800 mb-4">WhatsApp Order Confirmation Template</h1>
          <p className="text-gray-600">Copy this template and customize it for each order confirmation</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Template Preview */}
          <Card className="border-yellow-400 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-yellow-500" />
                WhatsApp Message Template
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 font-mono text-sm whitespace-pre-line">
                {whatsappMessage}
              </div>
              <Button onClick={copyToClipboard} className="w-full mt-4 bg-green-500 hover:bg-green-600">
                <Copy className="mr-2 h-4 w-4" />
                {copied ? "Copied!" : "Copy Template"}
              </Button>
            </CardContent>
          </Card>

          {/* Instructions */}
          <div className="space-y-6">
            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                  How to Use This Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Copy the template above</li>
                  <li>Replace all bracketed placeholders with actual order details</li>
                  <li>Send via WhatsApp to customer immediately after order placement</li>
                  <li>Save the message as a template in WhatsApp Business</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  Key Cancellation Information Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Clear 24-hour cancellation window</li>
                  <li>Simple cancellation process ("CANCEL ORDER")</li>
                  <li>Contact information for cancellations</li>
                  <li>Link to full cancellation policy</li>
                  <li>Timeline expectations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  Important Reminders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Send confirmation within 30 minutes of order</li>
                  <li>Always include order number for tracking</li>
                  <li>Customize delivery timeline based on actual preparation time</li>
                  <li>Keep a copy of sent confirmations for records</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
