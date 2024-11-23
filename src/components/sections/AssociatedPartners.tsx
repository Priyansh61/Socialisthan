import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const partners = [
  { name: "TechCorp", logo: "/images/partner-11.png" },
  { name: "InnovateSoft", logo: "/images/partner-2.png" },
  { name: "GlobalMedia", logo: "/images/partner-3.jpeg" },
  { name: "DataDynamics", logo: "/images/partner-6.png" },
  { name: "CreativeEdge", logo: "/images/partner-5.png" },
  { name: "MarketPro", logo: "/images/partner1.png" },
]

const trustIndicators = [
  "3+ Years of Excellence",
  "50+ Successful Projects",
  "98% Client Satisfaction",
  "Award-Winning Agency",
]

export default function AssociatedPartnersAndTrust() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional results for our clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 h-6 w-6 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}