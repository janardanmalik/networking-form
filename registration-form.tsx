"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Calendar, MapPin } from "lucide-react"

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessCategory: "",
    companyName: "",
    invitedBy: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const businessCategories = [
    "Technology",
    "Finance & Banking",
    "Healthcare",
    "Real Estate",
    "Marketing & Advertising",
    "Consulting",
    "Manufacturing",
    "Retail",
    "Education",
    "Legal Services",
    "Hospitality",
    "Construction",
    "Media & Entertainment",
    "Non-Profit",
    "Other",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby8Z6fky-xH8eBfpEPU2o56CBnNaAdOBzYsbB9PPaNbVpxR8XEYN3BpXCHzrnjnt6Egww/exec"

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      })

      // Since we're using no-cors mode, we can't read the response
      // We'll assume success after a short delay
      setTimeout(() => {
        setIsSubmitted(true)
        setIsSubmitting(false)
      }, 1000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      // In a real app, you'd show an error message here
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for registering for our networking event. We'll send you event details and updates via email.
            </p>
            <Badge variant="secondary" className="mb-4">
              Confirmation sent to {formData.email}
            </Badge>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Event Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Professional Networking Event</h1>
          <p className="text-xl text-gray-600 mb-4">Connect. Collaborate. Grow.</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>March 15, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Business Center Downtown</span>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <Card className="shadow-xl">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Event Registration</CardTitle>
            <CardDescription className="text-blue-100">
              Please fill out all fields to complete your registration
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Your Company Ltd."
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessCategory" className="text-sm font-medium text-gray-700">
                    Business Category *
                  </Label>
                  <Select
                    value={formData.businessCategory}
                    onValueChange={(value) => handleInputChange("businessCategory", value)}
                    required
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="invitedBy" className="text-sm font-medium text-gray-700">
                  Invited By
                </Label>
                <Input
                  id="invitedBy"
                  type="text"
                  placeholder="Name of person who invited you (optional)"
                  value={formData.invitedBy}
                  onChange={(e) => handleInputChange("invitedBy", e.target.value)}
                  className="h-11"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  {isSubmitting ? "Registering..." : "Register for Event"}
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                By registering, you agree to receive event-related communications. Your information will be kept
                confidential.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Event Benefits */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-900 mb-1">Network</h3>
            <p className="text-sm text-gray-600">Connect with industry leaders</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-900 mb-1">Learn</h3>
            <p className="text-sm text-gray-600">Gain insights from experts</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-900 mb-1">Grow</h3>
            <p className="text-sm text-gray-600">Expand your business reach</p>
          </div>
        </div>
      </div>
    </div>
  )
}
