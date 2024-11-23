import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you for reaching out!");
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Let's Contact With Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Feel free to reach out for any inquiries or questions. We're here to help!
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-12 bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name*"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address*"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message*"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 mt-6 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            rows={5}
          ></textarea>
          <div className="flex items-center mt-6">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              id="terms"
              required
              className="w-4 h-4 text-sky-500 border-gray-300 rounded focus:ring-sky-500"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              Accept{" "}
              <a href="#" className="text-sky-500 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-sky-500 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <div className="bg-sky-100 p-4 rounded-full">
              <ion-icon name="mail-outline" className="text-sky-500 text-2xl"></ion-icon>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Mail Here</h3>
              <a href="mailto:hello@luaz.com" className="text-gray-600 block hover:text-sky-500">
                hello@luaz.com
              </a>
              <a href="mailto:info@luaz.com" className="text-gray-600 block hover:text-sky-500">
                info@luaz.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-sky-100 p-4 rounded-full">
              <ion-icon name="map-outline" className="text-sky-500 text-2xl"></ion-icon>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Visit Here</h3>
              <p className="text-gray-600">
                27 Division St, New York, <br />
                NY 10002, USA
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-sky-100 p-4 rounded-full">
              <ion-icon name="headset-outline" className="text-sky-500 text-2xl"></ion-icon>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call Here</h3>
              <a href="tel:+1234567890" className="text-gray-600 block hover:text-sky-500">
                +123 456 7890
              </a>
              <a href="tel:+2414524526" className="text-gray-600 block hover:text-sky-500">
                +241 452 4526
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
