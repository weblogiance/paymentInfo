// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between   items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Paymet App</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#products" className="text-gray-600 hover:text-blue-600">
              Products
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-blue-600">
              Solutions
            </a>
            <a href="#partners" className="text-gray-600 hover:text-blue-600">
              For Partners
            </a>
            <a href="#tools" className="text-gray-600 hover:text-blue-600">
              Business Tools
            </a>
            <a href="#company" className="text-gray-600 hover:text-blue-600">
              Company
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </a>
          </div>
          <div className="flex gap-x-5 items-center">
        
            <a
              href="#signin"
              className="text-gray-600 hover:text-blue-600"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="#products"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            Products
          </a>
          <a
            href="#solutions"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            Solutions
          </a>
          <a
            href="#partners"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            For Partners
          </a>
          <a
            href="#tools"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            Business Tools
          </a>
          <a
            href="#company"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            Company
          </a>
          <a
            href="#pricing"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            Pricing
          </a>
          <a
            href="#signin"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
