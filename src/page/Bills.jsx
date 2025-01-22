import React from 'react';
import { Zap, Phone, Droplet, Flame, Cast as Gas, ChevronRight, Clock, Shield, Wallet, Receipt, Search, HelpCircle } from 'lucide-react';
import { GiRevolt } from 'react-icons/gi';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

function Bills() {
  const utilityServices = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electricity Bill",
      description: "Pay electricity bills for 100+ providers across India",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2400",
      providers: ["State Electricity Boards", "BSES", "Tata Power", "Adani Electricity"],
      steps: [
        "Select your electricity board",
        "Enter your consumer number",
        "View bill details and pay securely"
      ]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Broadband / Landline",
      description: "Pay bills for internet and landline services",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2400",
      providers: ["Airtel", "BSNL", "ACT Fibernet", "Jio Fiber"],
      steps: [
        "Choose your service provider",
        "Enter your account/phone number",
        "Verify details and make payment"
      ]
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Water Bill",
      description: "Pay your water utility bills hassle-free",
      image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&q=80&w=2400",
      providers: ["Municipal Corporation", "Water Authority", "City Water Board"],
      steps: [
        "Select your city water board",
        "Enter your connection ID",
        "Review and pay bill amount"
      ]
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Gas Cylinder",
      description: "Book and pay for LPG gas cylinders",
      image: "https://media.istockphoto.com/id/611328502/photo/set-of-different-industrial-liquefied-gas-containers.jpg?s=612x612&w=0&k=20&c=yKgR81By_ylDd6Hbm4OKmaAGe-uSkO9eAg1gAF_i72k=",
      providers: ["Indane", "HP Gas", "Bharat Gas"],
      steps: [
        "Select your gas provider",
        "Enter your LPG ID/mobile number",
        "Book cylinder and pay online"
      ]
    },
    {
      icon: <Gas className="w-8 h-8" />,
      title: "Piped Gas",
      description: "Pay for your piped natural gas connection",
      image: "https://media.istockphoto.com/id/1453346581/photo/generic-domestic-residential-home-lpg-natural-gas-meters-in-a-row.jpg?s=612x612&w=0&k=20&c=RMJUw0O4WS949pui2x5gOJIC9QvFmrMznsxNeIEzZTg=",
      providers: ["Mahanagar Gas", "Indraprastha Gas", "Gujarat Gas"],
      steps: [
        "Choose your gas provider",
        "Enter your customer ID",
        "View bill and make payment"
      ]
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Bill Payments",
      description: "Pay your bills anytime, anywhere"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Transactions",
      description: "Bank-grade security for all payments"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Instant Receipts",
      description: "Get payment confirmation instantly"
    },
    {
        icon: <GiRevolt className="w-6 h-6" />,
        title: "Up to 20% Cashback",
        description: "First time pay-bills geting a 20% cashback of your wallet."
      }
  ];

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-10 pattern-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pay All Your Utility Bills in One Place
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Quick, secure, and hassle-free bill payments for all your utility services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className=" flex items-center gap-x-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Sign Up <IoArrowForward/>
              </button>
              <button className="flex items-center gap-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                Pay Bills Now <IoArrowForward/>
              </button>
            </div>
          </div>
       </div>
      </section>


      {/* Services Section */}
      <section className="py-20">
        <div className=" w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          {utilityServices.map((service, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Supported Providers</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {service.providers.map((provider, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-600" />
                          <span>{provider}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Pay</h3>
                    <div className="space-y-4">
                      {service.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start  gap-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                            {idx + 1}
                          </div>
                          <p className="flex items-center mt-1 text-gray-600">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Bill Payment Service?
            </h2>
            <p className="text-xl text-blue-100">
              Experience the convenience of paying all your utility bills in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bills;