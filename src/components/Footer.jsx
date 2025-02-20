// src/components/Footer.jsx
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Android from '../assets/Photos/Android.svg';
import Apple from '../assets/Photos/Apple.svg';

const Footer = () => {
  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/your-app', '_blank');
  };

  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/your-app', '_blank');
  };
  return (
    <footer className="bg-gray-900 text-gray-400 w-full lg:pt-10">
      <div className="w-11/12 mx-auto px-4 sm:py-20 py-10 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1 max-sm:col-span-2 mx-auto">
            <div className="flex items-center max-sm:justify-center  space-x-2">
              <div className="text-3xl text-blue-500 font-bold">Payment App</div>
            </div>
            <p className="mt-4 max-sm:text-center">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-4 mt-4 max-sm:justify-center">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                 <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                 <RiInstagramFill size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                  <FaYoutube size={20} /> 
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                  <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white text-lg font-semibold tracking-wide uppercase">
              Service
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/#Recharge" className="hover:text-white">
                   Recharge
                </a>
              </li>
              <li>
                <a href="/#Recharge" className="hover:text-white">
                  Bill Payments
                </a>
              </li>
              <li>
                <a href="/#Cashback" className="hover:text-white">
                  Cashback Offers
                </a>
              </li>
              <li>
                <a href="/#Insurance" className="hover:text-white">
                  Financial & Tax
                </a>
              </li>
              <li>
                <a href="/#Journey" className="hover:text-white">
                  Booking
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
                <a href="/aboutus" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contactus" className="hover:text-white">
                  Contact-us
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
      <div className="flex justify-between bg-gray-800 py-4">
       <div className="w-11/12 mx-auto flex lg:flex-row flex-col  justify-center items-center lg:justify-between">
        <div className="text-center flex items-center text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
          </div>
          <div className="flex lg:flex max-sm:flex-col gap-y-2 mt-3 justify-center items-center gap-x-5">
              <h3 className="text-white text-lg font-semibold tracking-wide uppercase">
                Download  App 
              </h3>
              <ul className=" flex lg:flex lg:flex-row flex-col gap-5">
                <li>
                  <a href="#" className="hover:text-white" onClick={handlePlayStoreClick}>
                    <img src={Android} alt="" width={100}/>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white" onClick={handleAppStoreClick}>
                    <img src={Apple} alt="" width={100}/>
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
