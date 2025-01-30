import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full  bg-white shadow-lg z-50">
      <div className="w-11/12 mx-auto px-4  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
           
            <span className="text-2xl font-bold text-blue-600">Payment App</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden text-lg md:flex space-x-4 items-center">
            <Link
              to="/"
              className={`text-gray-600 hover:text-blue-600 ${
                location.pathname === "/" ? "text-blue-600 font-bold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className={`text-gray-600 hover:text-blue-600 ${
                location.pathname === "/aboutus" ? "text-blue-600 font-bold" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contactus"
              className={`text-gray-600 hover:text-blue-600 ${
                location.pathname === "/contactus"
                  ? "text-blue-600 font-bold"
                  : ""
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Buttons */}
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-blue-600 hover:text-blue-600 focus:outline-none"
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

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black bg-opacity-50 ${
          isMenuOpen ? "block backdrop-blur-md" : "hidden"
        }`}
        onClick={closeMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center pt-10 space-y-6">
          <Link
            to="/"
            onClick={closeMenu}
            className={`text-blue-600 hover:text-blue-600 ${
              location.pathname === "/" ? "text-blue-600 font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            onClick={closeMenu}
            className={`text-blue-600 hover:text-blue-600 ${
              location.pathname === "/aboutus" ? "text-blue-600 font-bold" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            onClick={closeMenu}
            className={`text-blue-600 hover:text-blue-600 ${
              location.pathname === "/contactus"
                ? "text-blue-600 font-bold"
                : ""
            }`}
          >
            Contact Us
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
