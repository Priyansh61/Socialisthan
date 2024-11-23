import Image from "next/image";
import hero_banner from "../../assets/hero_banner.png"

const Hero: React.FC = () => {
  return (
    <section
      className="section hero bg-gray-100 py-12 md:py-24"
      id="home"
      aria-label="hero"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Hero Content */}
          <div className="hero-content text-center md:text-left">
            <p className="text-lg text-sky-500 font-semibold">Socialisthan</p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Empowering Brands in the Digital World
            </h1>

            {/* Uncomment below for additional text */}
            {/* <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporthem incididunt ut labore et dolore magna aliqua.
            </p> */}

            <a
               href="https://wa.me/7597842278?text=Hello!%20I%20would%20like%20to%20chat%20with%20you."
               target="_blank"
              className="btn btn-primary mt-6 inline-block bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600"
            >
              Get Started 
            </a>
          </div>

          {/* Hero Image */}
          <figure className="hero-banner">
            <Image
              src="/hero_banner.png" // Update the path to your image
              width={720}
              height={673}
              alt="Hero Banner"
              className="w-full object-cover rounded-lg"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
