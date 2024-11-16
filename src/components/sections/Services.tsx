'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { BarChart, Globe, Megaphone, PenTool, Search, Zap } from 'lucide-react'

const services = [
  {
    title: "Digital Strategy",
    description: "Comprehensive digital strategies tailored to your business goals, ensuring a strong online presence and measurable results.",
    icon: Globe
  },
  {
    title: "SEO Optimization",
    description: "Cutting-edge techniques to improve your search engine rankings and drive organic traffic to your website.",
    icon: Search
  },
  {
    title: "Content Marketing",
    description: "Engaging, valuable content that resonates with your target audience and drives conversions.",
    icon: PenTool
  },
  {
    title: "Social Media Management",
    description: "Expert management of your social media presence, creating compelling content and fostering community engagement.",
    icon: Megaphone
  },
  {
    title: "Analytics & Reporting",
    description: "In-depth analytics and clear reporting to help you understand your digital performance and make data-driven decisions.",
    icon: BarChart
  },
  {
    title: "Conversion Rate Optimization",
    description: "Optimization of your digital assets to maximize conversions, turning visitors into customers and improving your ROI.",
    icon: Zap
  }
]

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false)

  const visibleServices = showAll ? services : services.slice(0, 3)

  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
      <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from the wide variety of services we have to offer you
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                <service.icon className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        {services.length > 3 && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-gray-300 text-gray-800 hover:bg-gray-100"
            >
              {showAll ? 'Show Less' : 'Read More'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}