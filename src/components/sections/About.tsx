import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-16 bg-gray-100">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              About Us
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              At Socialisthan, we are a team of dedicated digital marketers
              helping businesses succeed in the digital space. With years of
              experience and proven success, we are committed to delivering
              innovative solutions that exceed expectations.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Whether it’s enhancing your online presence or creating impactful
              campaigns, our goal is to empower your business for long-term
              success.
            </p>
          </div>

          {/* Image Content */}
          <div className="flex justify-center">
            <Image
              src="/images/about-banner.png" // Replace with your actual image path
              alt="About Us"
              width={550}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
