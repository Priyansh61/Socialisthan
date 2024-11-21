import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black-400 py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Footer Brand */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/logo1.png" // Replace with your logo path
                alt="Socialisthan Logo"
                className="w-36"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering brands with innovative digital strategies and campaigns
              to achieve remarkable success.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h5 className="text-lg font-semibold text-black-400 mb-4">
              Social
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://whatsapp.com/channel/0029VavEHHh0Qealmt5Vbd0o"
                  className="flex items-center hover:text-sky-400"
                >
                  <ion-icon name="logo-Whatsapp" class="mr-3 text-xl"></ion-icon>
                  Whatsapp
                </Link>
              </li>
              
              
              <li>
                <Link
                  href="https://www.instagram.com/socialisthan?igsh=MTlxdHU5eTBuOXVnMA=="
                  className="flex items-center hover:text-sky-400"
                >
                  <ion-icon name="logo-instagram" class="mr-3 text-xl"></ion-icon>
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold text-black-400 mb-4">
              Contact
            </h5>
            <ul className="space-y-3">
              <li>
                <p className="font-medium">Email:</p>
                <a
                  href="mailto:hello@socialisthan.com"
                  className="hover:text-sky-400 block"
                >
                  socialisthan2024@gmail.com
                </a>
              </li>
              <li>
                <p className="font-medium">Phone:</p>
                <a
                  href="tel:+123456789"
                  className="hover:text-sky-400 block"
                >
                  + 91-6377266348 ,
                  + 91-7597842278
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h5 className="text-lg font-semibold text-black-400 mb-4">
              Address
            </h5>
            <p className="text-sm leading-relaxed">
            Jaipur,Rajasthan
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center border-t border-gray-700 pt-6">
          <p className="text-sm">
            &copy; 2024 Socialisthan. Powered by{" "}
            <Link
              href="https://whatsapp.com/channel/0029VavEHHh0Qealmt5Vbd0o"
              className="text-sky-400 hover:underline"
            >
              Socialisthan Team
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Ionicons Script */}
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </footer>
  );
}
