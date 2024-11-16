'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const clientsProjects = [
  { name: "TechInnovate", logo: "/placeholder.svg?height=80&width=200", description: "Increased online engagement by 150% through targeted digital campaigns." },
  { name: "EcoSolutions", logo: "/placeholder.svg?height=80&width=200", description: "Developed a comprehensive content strategy, resulting in a 200% increase in organic traffic." },
  { name: "GlobalFinance", logo: "/placeholder.svg?height=80&width=200", description: "Implemented SEO strategies that improved search rankings for key terms by an average of 40 positions." },
  { name: "HealthPlus", logo: "/placeholder.svg?height=80&width=200", description: "Created a social media campaign that generated 50,000 new followers across platforms." },
  { name: "FutureRetail", logo: "/placeholder.svg?height=80&width=200", description: "Optimized e-commerce funnel, increasing conversion rates by 25%." },
  { name: "SmartHomes", logo: "/placeholder.svg?height=80&width=200", description: "Launched a PPC campaign that resulted in a 300% ROI within the first quarter." }
]

export default function ClientsProjectsSection() {
  const [showAll, setShowAll] = useState(false)

  const visibleClientsProjects = showAll ? clientsProjects : clientsProjects.slice(0, 3)

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Clients & Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleClientsProjects.map((client, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200">
              <div className="flex justify-center mb-4">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{client.name}</h3>
              <p className="text-gray-600 text-center">{client.description}</p>
            </div>
          ))}
        </div>
        {clientsProjects.length > 3 && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-gray-300 text-gray-800 hover:bg-gray-100"
            >
              {showAll ? 'Show Less' : 'View More Clients'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}