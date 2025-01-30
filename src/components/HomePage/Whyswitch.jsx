import React from "react";

import { FaWallet, FaLock, FaFileInvoice, FaBriefcase } from "react-icons/fa";

const Whyswitch = () => {
  const features = [
    { icon: <FaWallet className="text-blue-600 text-4xl" />, title: "Digital Wallet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: <FaLock className="text-blue-600 text-4xl" />, title: "Best Secure", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: <FaFileInvoice className="text-blue-600 text-4xl" />, title: "Invoice Details", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: <FaBriefcase className="text-blue-600 text-4xl" />, title: "Easy Payment", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];

  return (
    <div className="w-full  flex">
      <div className="  text-center mt-12">
        <h3 className="text-gray-600 text-sm">Why switch</h3>
        <h2 className="text-4xl font-bold text-gray-900">Payments & Finance</h2>
        <div className="grid w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:gap-6  mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex  flex-col items-center  p-4 gap-y-2">
              {feature.icon}
              <h4 className="font-semibold mt-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whyswitch;
