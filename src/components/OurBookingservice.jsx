import React from 'react';
import { Train, Bus, Hotel, Plane, Search, MapPin, Calendar, GiftIcon } from 'lucide-react';
import { RxMagicWand } from "react-icons/rx";

const services = [
  {
    icon: Hotel,
    title: "Hotels",
    description: "Find the perfect stay from our curated selection of hotels.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: Train,
    title: "Trains",
    description: "Book train tickets for a comfortable journey across the country.",
    imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: Bus,
    title: "Buses",
    description: "Choose from thousands of bus routes to your destination.",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: Plane,
    title: "Flights",
    description: "Find the best deals on flights to anywhere in the world.",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000"
  }
];

const features = [
  {
    icon: Search,
    title: "Best Prices",
    description: "Find the most competitive rates for your travel needs"
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Simple and fast booking process"
  },
  {
    icon: MapPin,
    title: "24/7 Support",
    description: "Round-the-clock customer service"
  },
  {
    icon:GiftIcon,
    title: "Exclusive Offers",
    description: "Special discounts and deals for loyal customers"
  },
  {
    icon:RxMagicWand,
    title: "Cashback Rewards",
    description: "Earn cashback on every booking "
  }
];

function OurBookingservice() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-11/12 mx-auto mt-10 h-[600px] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=2000" 
              alt="Luxury Hotel"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=2000" 
              alt="Flight Travel"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&q=80&w=2000" 
              alt="Train Journey"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000" 
              alt="Bus Travel"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Journey Begins Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Book your perfect trip with our comprehensive travel services
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                    <div className="h-48 overflow-hidden">
                    <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <service.icon className="w-6 h-6 text-indigo-600" />
                        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                    {/* <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                        Book Now
                    </button> */}
                    </div>
          </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg shadow-lg bg-gray-50">
                <feature.icon className="w-12 h-12 text-indigo-600 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBookingservice;