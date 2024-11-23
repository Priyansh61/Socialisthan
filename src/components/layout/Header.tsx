import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react"; // Ensure lucide-react is installed
import {Button}  from "@/components/ui/button"; // Update path if needed
import GetQuoteModal from "../modals/GetQuote";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-sky-500">SocialiSthan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <GetQuoteModal />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-sky-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
              onClick={() => scrollToSection("home")}
              className="text-gray-600 hover:text-sky-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-sky-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-sky-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-sky-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </button>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <Button size="sm" className="w-full bg-sky-500 hover:bg-sky-600">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
