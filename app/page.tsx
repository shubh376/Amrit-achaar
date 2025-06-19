"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Star, ChefHatIcon, Leaf, Award, Clock, Truck } from "lucide-react"
import Link from "next/link"

export default function AchaarWebsite() {
  const products = [
    {
      id: 1,
      name: "Mango Pickle (Aam ka Achaar)",
      description:
        "Traditional homemade mango pickle made with fresh raw mangoes, aromatic spices, and mustard oil. A perfect blend of tangy and spicy flavors.",
      price: "₹250",
      image: "/placeholder.svg?height=300&width=300",
      spiceLevel: "Medium",
      weight: "500g",
      deliveryTime: "6-10 business days",
      orderType: "Standard",
    },
    {
      id: 2,
      name: "Mixed Vegetable Pickle",
      description:
        "A delightful mix of seasonal vegetables including carrots, cauliflower, and turnips, pickled with traditional spices and pure mustard oil.",
      price: "₹200",
      image: "/placeholder.svg?height=300&width=300",
      spiceLevel: "Mild",
      weight: "500g",
      deliveryTime: "6-10 business days",
      orderType: "Standard",
    },
    {
      id: 3,
      name: "Lemon Pickle (Nimbu ka Achaar)",
      description:
        "Zesty lemon pickle prepared with fresh lemons, red chili powder, turmeric, and traditional spices. Adds a tangy kick to any meal.",
      price: "₹180",
      image: "/placeholder.svg?height=300&width=300",
      spiceLevel: "Hot",
      weight: "400g",
      deliveryTime: "6-10 business days",
      orderType: "Standard",
    },
    {
      id: 4,
      name: "Garlic Pickle (Lahsun ka Achaar)",
      description:
        "Aromatic garlic pickle made with fresh garlic cloves, perfect for garlic lovers. Rich in flavor and health benefits.",
      price: "₹300",
      image: "/placeholder.svg?height=300&width=300",
      spiceLevel: "Medium",
      weight: "300g",
      deliveryTime: "8-15 business days",
      orderType: "Seasonal",
    },
    {
      id: 5,
      name: "Green Chili Pickle",
      description:
        "Spicy green chili pickle for those who love heat! Made with fresh green chilies and traditional spices.",
      price: "₹220",
      image: "/placeholder.svg?height=300&width=300",
      spiceLevel: "Very Hot",
      weight: "400g",
      deliveryTime: "8-15 business days",
      orderType: "Seasonal",
    },
    {
      id: 6,
      name: "Amla Pickle (Gooseberry)",
      description: "Healthy and tangy amla pickle packed with Vitamin C. A perfect combination of health and taste.",
      price: "₹280",
      image: "/placeholder.svg?height=300&width=300",
      spiceLevel: "Mild",
      weight: "500g",
      deliveryTime: "8-15 business days",
      orderType: "Seasonal",
    },
  ]

  const whatsappNumber = "917011070852"
  const whatsappMessage = "Hello! I'm interested in ordering your delicious achaar. Please share more details."

  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-yellow-50 shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
            <ChefHatIcon className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-orange-800">Amrit Achaar</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#products">
            Products
          </Link>
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#about">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-400 to-amber-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Authentic Homemade Achaar
                </h1>
                <p className="mx-auto max-w-[700px] text-orange-100 md:text-xl">
                  Made with love, traditional recipes, and the finest ingredients. Experience the taste of home with our
                  handcrafted pickles that bring back childhood memories.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50"
                  onClick={() =>
                    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
                  }
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Order on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-800">
                  Why Choose Our Achaar?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  We follow traditional recipes passed down through generations, using only the finest ingredients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12 shadow-xl text-yellow-300">
              <Card className="border-yellow-400 hover:shadow-lg transition-shadow bg-yellow-50">
                <CardHeader className="border-0 bg-yellow-300">
                  <Leaf className="h-10 w-10 mb-2 text-yellow-500 bg-amber-300" />
                  <CardTitle className="text-yellow-700">100% Natural</CardTitle>
                  <CardDescription>
                    Made with fresh, organic ingredients and no artificial preservatives.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-yellow-400 hover:shadow-lg transition-shadow bg-yellow-50">
                <CardHeader className="text-transparent bg-yellow-300">
                  <Award className="h-10 w-10 mb-2 text-yellow-500 bg-amber-300" />
                  <CardTitle className="text-yellow-700">Traditional Recipe</CardTitle>
                  <CardDescription>Authentic family recipes passed down through generations.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-yellow-400 hover:shadow-lg transition-shadow bg-yellow-50">
                <CardHeader className="bg-yellow-300">
                  <Clock className="h-10 w-10 mb-2 text-yellow-500 bg-yellow-400" />
                  <CardTitle className="text-yellow-700">Fresh & Hygienic</CardTitle>
                  <CardDescription>Made in small batches to ensure freshness and maintain quality.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-amber-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-800">Our Products</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Discover our range of authentic, homemade pickles made with traditional recipes and premium
                  ingredients.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-yellow-400 bg-yellow-50"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-orange-800 text-lg">{product.name}</CardTitle>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        {product.price}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Spice Level:</span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            product.spiceLevel === "Very Hot"
                              ? "border-red-500 text-red-600"
                              : product.spiceLevel === "Hot"
                                ? "border-orange-500 text-orange-600"
                                : product.spiceLevel === "Medium"
                                  ? "border-yellow-500 text-yellow-600"
                                  : "border-green-500 text-green-600"
                          }`}
                        >
                          {product.spiceLevel}
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-500">{product.weight}</span>
                    </div>

                    {/* Add delivery time information */}
                    <div className="bg-blue-50 p-3 rounded-lg mb-4 border border-blue-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Truck className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">Estimated Delivery</span>
                        </div>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                          {product.orderType}
                        </Badge>
                      </div>
                      <p className="text-sm text-blue-700 font-semibold mt-1">{product.deliveryTime}</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Fresh made to order •
                        <Link href="/tat-policy" className="text-blue-600 hover:underline ml-1">
                          View TAT Policy
                        </Link>
                      </p>
                    </div>

                    <Button
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I want to order ${product.name} (${product.price}). Estimated delivery: ${product.deliveryTime}. Please confirm availability.`)}`,
                          "_blank",
                        )
                      }
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Order via WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[rgba(255,0,0,0)]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-800">Our Story</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Started from our grandmother's kitchen, we have been preserving the authentic taste of traditional
                    Indian pickles for over three generations. Each jar is made with the same love and care that has
                    been passed down through our family.
                  </p>
                </div>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Premium quality ingredients sourced locally</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Traditional recipes with authentic taste</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Hygienic preparation and packaging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Made in small batches for freshness</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">{/* Placeholder for additional content */}</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-amber-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-800">Contact Us</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                  Ready to taste authentic homemade achaar? Contact us on WhatsApp for orders and inquiries.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                <Card className="p-6 border-yellow-400 border-none bg-amber-200">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Phone className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold text-orange-800">WhatsApp Orders</span>
                  </div>
                  <p className="text-center text-lg font-mono text-gray-700 mb-4">+91 7011070852</p>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </Card>
                <p className="text-center text-lg font-mono text-gray-700 mb-4">
                  We typically respond within 30 minutes during business hours (9 AM - 11 PM)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-yellow-50">
        <p className="text-xs text-gray-500">© 2024 Amrit Achaar. Made with love for pickle lovers.</p>
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
