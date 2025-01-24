import React from 'react';
import { Shield, Heart, Car, Home, Umbrella, Phone, Download, CheckCircle2, ArrowRight, Smartphone, Star } from 'lucide-react';

const insuranceTypes = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
  },
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Protect your vehicle with our comprehensive coverage",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2000"
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "Secure your home and belongings with our protection plans",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000"
  },
  {
    icon: Umbrella,
    title: "Life Insurance",
    description: "Ensure your family's future with our life insurance plans",
    imageUrl: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&q=80&w=2000"
  }
];

const benefits = [
  "24/7 Customer Support",
  "Quick Claim Settlement",
  "Flexible Payment Options",
  "Wide Network Coverage",
  "Digital Policy Management",
  "No Paperwork Required",
  "Customizable Plans",
  "Get rewards on every insurance"
];

export function Insurance() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[600px] w-11/12 mx-auto my-10 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
          {insuranceTypes.map((type, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img 
                src={type.imageUrl} 
                alt={type.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Protect What Matters Most
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
              Comprehensive insurance solutions for every aspect of your life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                <Phone className="w-5 h-5" />
                Get a Quote
              </button>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                <Shield className="w-5 h-5" />
                View Plans
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Types */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Insurance Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insuranceTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img src={type.imageUrl} alt={type.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <type.icon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">{type.title}</h3>
                </div>
                <p className="text-gray-600">{type.description}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Insurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
              <p className="text-blue-100 mb-8">
                Get instant access to your insurance policies, file claims, and track your benefits right from your phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors">
                  <Download className="w-5 h-5" />
                  Download for iOS
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors">
                  <Download className="w-5 h-5" />
                  Download for Android
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="app-preview-container rounded-lg shadow-2xl max-w-sm mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Mobile App"
                  className="rounded-lg w-full"
                />
                <div className="app-preview-overlay">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-semibold">Key Features</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>Instant Policy Access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>Quick Claim Filing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>24/7 Customer Support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>Policy Document Scanner</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}