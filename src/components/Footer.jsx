// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 w-full pt-10">
      <div className="w-11/12 mx-auto px-4 py-20 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="text-3xl text-blue-500 font-bold">Payment App</div>
            </div>
            <p className="mt-4">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-facebook-f">🔗</i>
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-instagram">🔥</i>
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-github">🔥</i>
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-youtube">🔥</i>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white text-lg font-semibold tracking-wide uppercase">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold tracking-wide uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-2 ">
              <li>
                <a href="#" className="hover:text-white">
                  Submit ticket
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold tracking-wide uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2 ">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold tracking-wide uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 ">
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
