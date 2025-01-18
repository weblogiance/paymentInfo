// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <div className="bg-white mt-12">
      {/* Hero Section */}
      <div className="w-11/12  mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="text-sm text-white font-semibold uppercase tracking-wide bg-[#1B263B] w-fit text-center mx-auto py-2 px-5 rounded-full bg-opacity-90">
          Paytm Payments Services
        </div>
        <h1 className="mt-4 text-7xl max-w-5xl  font-bold text-gray-900 tracking-wide mx-auto ">
          Unfolding a New Era in Online Payment Acceptance
        </h1>
        <p className="mt-4 text-2xl text-[#1B263B] font-semibol leading-8 max-w-2xl mx-auto">
          Grow your business with the payment gateway that powers India's
          largest brands.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="px-6 py-3 text-white bg-[#00BFFF] hover:bg-blue-700 rounded-lg text-lg shadow"
          >
            Sign Up Now →
          </a>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
      
          <div className="overflow-hidden">
            <img
              src="https://paytmpayments.com/s3assets/images/home/bnr.webp?version=1736962835"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
