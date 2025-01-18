import React from 'react'
import Hero from '../components/HomePage/Hero'
import Overservices from '../components/HomePage/Overservices'

import { BsCreditCard2Front } from 'react-icons/bs';
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RiPercentLine } from 'react-icons/ri';
import { FaGlobeAmericas } from 'react-icons/fa';
import { TbDeviceMobile } from 'react-icons/tb';
import { IoAirplane } from 'react-icons/io5';
import { MdOutlineAccountBalance } from 'react-icons/md';
import { FaDesktop, FaFileInvoiceDollar } from 'react-icons/fa';
import { BsRocketTakeoff } from 'react-icons/bs';
import { BsFillFileEarmarkRuledFill } from "react-icons/bs";

function FeatureCard({ icon: Icon, title, className = "" }) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-blue-50">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${className}`}>
                <Icon className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
        </div>
    );
}

interface SolutionCardProps {
    icon: React.ReactNode;
    title: string;
    description: string[];
  }
  
  const SolutionCard = ({ icon, title, description }) => (
    <div className="flex flex-col justify-between bg-white p-8 w-fit rounded-lg border border-gray-100">
      <div className="text-blue-500 text-3xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">For {title}</h3>
      <ul className="space-y-2 mb-6">
        {description.map((item, index) => (
          <li key={index} className="text-gray-600 text-justify flex items-center gap-x-2"><BsFillFileEarmarkRuledFill/>{item}</li>
        ))}
      </ul>
      <button className="bg-navy-blue text-black hover:text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
        Learn More
      </button>
    </div>
  );

const Home = () => {
    const solutions = [
        {
          icon: <FaDesktop />,
          title: "BFSI",
          description: [
            "Policy Premiums",
            "Loan Repayments",
            "Investments & Credit",
            "Card Payments"
          ]
        },
        {
          icon: <BsRocketTakeoff />,
          title: "Startups",
          description: [
            "Comprehensive",
            "Payment Suite for",
            "Startups"
          ]
        },
        {
          icon: <FaFileInvoiceDollar />,
          title: "Freelancers",
          description: [
            "Payment Links",
            "Invoices & Customised",
            "Payment Pages"
          ]
        }
      ];


      
    
    return (
        <div>
            <Hero />
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <header className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                        The power of
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                        Paytm Payment Gateway
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                        Empower your business with India's most comprehensive payment solution
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                        Get Started Now
                    </button>
                </header>

                {/* Features Grid */}
                <section className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={BsCreditCard2Front}
                            title="The Widest Range of Payment Sources"
                            className="bg-blue-100"
                        />
                        <FeatureCard
                            icon={BiCodeAlt}
                            title="Robust and Easy to Integrate SDKs"
                            className="bg-green-100"
                        />
                        <FeatureCard
                            icon={AiOutlineCalendar}
                            title="Subscriptions on all Payment instruments"
                            className="bg-purple-100"
                        />
                        <FeatureCard
                            icon={RiPercentLine}
                            title="Bank Offers & No Cost EMI"
                            className="bg-yellow-100"
                        />
                        <FeatureCard
                            icon={FaGlobeAmericas}
                            title="Supports payments from 200+ Countries"
                            className="bg-red-100"
                        />
                        <FeatureCard
                            icon={TbDeviceMobile}
                            title="Robust UPI Payments Processing"
                            className="bg-indigo-100"
                        />
                        <FeatureCard
                            icon={IoAirplane}
                            title="Real Time Bank Settlements"
                            className="bg-pink-100"
                        />
                        <FeatureCard
                            icon={MdOutlineAccountBalance}
                            title="Instant Refunds for your customers"
                            className="bg-orange-100"
                        />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-blue-600 text-white py-20 mt-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Ready to get started?
                        </h2>
                        <p className="text-xl mb-12 text-blue-100">
                            Join thousands of businesses that trust Paytm Payment Gateway
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                                Contact Sales
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
                                Documentation
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <Overservices />
            <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="People using payment app"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
          <div className="flex items-center gap-2 text-green-500 mb-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="font-medium">Payment Received</span>
          </div>
          <p className="text-2xl font-bold text-green-500">₹4,323.34</p>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted Solutions for Businesses Large & Small
        </h2>
        
        <div className="flex mx-auto w-full  justify-center gap-x-12">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </div>
        </div>
    )
}

export default Home
