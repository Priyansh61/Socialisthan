import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "Digital Transformation for Global Tech Leader",
    description: "Complete digital overhaul resulting in 200% increase in online engagement",
    image: "/images/blog-1.jpg",
    date: "2024",
    category: "Digital Strategy"
  },
  {
    id: 2,
    title: "E-commerce Success Story: Fashion Retailer",
    description: "Implementing advanced SEO strategies leading to 150% revenue growth",
    image: "/images/blog-2.jpg",
    date: "2024",
    category: "E-commerce"
  },
  {
    id: 3,
    title: "Social Media Revolution for Food Chain",
    description: "Innovative social media campaign reaching 2M+ new customers",
    image: "/images/blog-3.jpg",
    date: "2024",
    category: "Social Media"
  },
  {
    id: 4,
    title: "Brand Redesign for Tech Startup",
    description: "Complete brand overhaul and digital presence optimization",
    image: "/images/blog-4.jpg",
    date: "2024",
    category: "Branding"
  },
  {
    id: 5,
    title: "Brand Redesign for Tech Startup",
    description: "Complete brand overhaul and digital presence optimization",
    image: "/images/blog-5.jpg",
    date: "2024",
    category: "Branding"
  }
]

export default function ClientProjectsGrid() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Client Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful digital marketing campaigns and transformative projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Project */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-500">{projects[0].date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-sm font-medium text-gray-500">{projects[0].category}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{projects[0].title}</h3>
              <p className="text-gray-600">{projects[0].description}</p>
            </div>
          </div>

          {/* Other Projects */}
          <div className="lg:col-span-1 space-y-8">
            {projects.slice(1).map((project) => (
              <div key={project.id} className="flex gap-6">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-500">{project.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-sm font-medium text-gray-500">{project.category}</span>
                  </div>
                  <h3 className="font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
