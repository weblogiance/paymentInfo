import React, { useState } from 'react'
import Hero from '../components/HomePage/Hero'
import { TbRecharging } from "react-icons/tb";
import { IoReceiptOutline } from "react-icons/io5";
import { LuTickets } from "react-icons/lu";
import { PiMoneyBold } from "react-icons/pi";
import { LuCreditCard } from 'react-icons/lu';
import { IoWallet } from 'react-icons/io5';
import { PiBank } from 'react-icons/pi';
import { IoGift } from 'react-icons/io5';
import { TbMobiledata } from 'react-icons/tb';
import {  FaMobileAlt, FaLightbulb,  FaSuitcase, FaTh } from "react-icons/fa"
import { FaGifts } from "react-icons/fa6";
import { LuChartColumnIncreasing } from "react-icons/lu";
import OurBookingservice from '../components/OurBookingservice';
import { Insurance } from './Insurance';
import MobileRecharge from './MobileRecharge';

import allservice from '../assets/Photos/allservices-removebg-preview.png'
import cashback from '../assets/Photos/getcashback-removebg.png'
import wallet from '../assets/Photos/wallet-removebg-preview.png'
import language from '../assets/Photos/selectlanguage-removebg-preview.png'

import home from '../assets/Photos/Slash screen.png'
import signup from '../assets/Photos/Sign up screen.png'
import login from '../assets/Photos/Log in screen.png'
import cashback1 from '../assets/Photos/Home screen.png'

import payment from '../assets/Photos/video2.mp4'
const service = [
  { icon: <FaGifts className="text-white text-4xl" />, label: "Cashback" },
  { icon: <FaMobileAlt className="text-white text-4xl" />, label: "Mobile recharge" },
  { icon: <FaLightbulb className="text-white text-4xl" />, label: "Utility bill" },
  { icon: <LuChartColumnIncreasing className="text-white text-4xl" />, label: "Finals" },
  { icon: <FaSuitcase className="text-white text-4xl" />, label: "Travel" },
  { icon: <FaTh className="text-white text-4xl" />, label: "And more" },
];

const Home = () => {

  const [currentStep, setCurrentStep] = useState(1);


  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/your-app', '_blank');
  };

  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/your-app', '_blank');
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const steps = [
    {
      id: 1,
      title: "click on app store icon",

      image:home,
    },
    {
      id: 2,
      title: "Install the app",

      image: "https://i.pinimg.com/736x/b5/2c/ae/b52cae6879e991d1683081de523c2825.jpg",
    },
    {
      id: 3,
      title: "Open the app and Sign in",

      image: signup,
    },
    {
      id: 4,
      title: "login to your account",

      image: login,
    },
    {
      id: 5,
      title: "use the app and get the cashback and rewards",

      image:cashback1,
    },
  ];

  const services = [
    {
      title: "Recharge",
      icon: TbRecharging, // Replace with SVG or image URL
      bgColor: "bg-blue-50",
    },
    {
      title: "Utility Bills",
      icon: IoReceiptOutline, // Replace with SVG or image URL
      bgColor: "bg-orange-50",
    },
    {
      title: "Booking ",
      icon: LuTickets, // Replace with SVG or image URL
      bgColor: "bg-green-50",
    },
    {
      title: "Financial & Tax ",
      icon: PiMoneyBold, // Replace with SVG or image URL
      bgColor: "bg-green-50",
    },

  ];

  const feature = [
    {
      header: "One app All Payment service",
      description: "Pay bills, recharge, send money,invest and shop at your favourite stores."
    },
    {
      header: "Provide Discount/Cashback",
      description: "Pay bills, recharge, send money,invest and shop at your favourite stores get up to 80% cashback."
    },
    {
      header: "Faster And More Secure",
      description: "muti-step authotication of your acccount."
    },
    {
      header: "Provide Wallet System",
      description: "Add money to app wallet and get a cashback and Withdrawal money to bank-account."
    },
    {
      header: "Transfor Cashback to your Bank",
      description: "Choose from options like UPI, the PhonePe wallet or your Debit and Credit Card."
    }
  ]

  const Simpleuse = [
    {
      id: "01",
      title: "One app for all your payments service.",
      description: "From utility bills, mobile & DTH recharge, sending & requesting money, to paying your credit card bill and insurance premium. You can do all this and more on the PhonePe app.",
      Photo:allservice
    },
    {
      id: "02",
      title: "Your reward and cashback direct transfer to your bankaccount.",
      description: "Just link your bank account to the PhonePe app and make hassle-free, secure payments directly from your bank account 24/7. Your money is always in your bank, not locked in a wallet.",
      Photo: cashback
    },
    {
      id: "03",
      title: "Multiple payment modes.",
      description: "Choose from options like UPI enabled bank account, PhonePe wallet, Debit and Credit Cards to make seamless payments daily.",
      Photo: wallet
    }
  ]

  const paymentMethods = [
    {
      title: 'Credit Card',
      description: 'Pay securely with your credit or debit card',
      icon: <LuCreditCard className="w-6 h-6" />,
      benefits: ['Instant processing', 'Secure encryption', 'Worldwide acceptance']
    },
    {
      title: 'Digital Wallet',
      description: 'Quick payments with your preferred digital wallet',
      icon: <IoWallet className="w-6 h-6" />,
      benefits: ['Fast checkout', 'No card required', 'Enhanced security']
    },
    {
      title: 'Bank Transfer',
      description: 'Direct transfer from your bank account',
      icon: <PiBank className="w-6 h-6" />,
      benefits: ['No additional fees', 'Secure transfer', 'Support for all major banks']
    },
    {
      title: 'Gift Cards',
      description: 'Redeem your gift cards for payment',
      icon: <IoGift className="w-6 h-6" />,
      benefits: ['Easy redemption', 'Multiple brands accepted', 'Check balance instantly']
    },
    {
      title: 'Mobile Payment',
      description: 'Pay using your mobile payment apps',
      icon: <TbMobiledata className="w-6 h-6" />,
      benefits: ['Contactless payment', 'Quick scanning', 'Wide acceptance']
    }
  ];

  return (
    <div className='flex flex-col gap-y-8'>
      <Hero />
      <div className="flex w-11/12 mx-auto mb-20  justify-center items-center p-4">

        <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col   mx-auto  items-center lg:w-72 w-full p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform hover:shadow-2xl"
            >
              <div className="text-4xl mb-4 text-blue-500">
                <service.icon size={40} />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {service.title}
              </h3>
              {/* <div className="text-purple-600 mt-2 flex items-center gap-1 cursor-pointer hover:text-purple-800">
                <span>Learn More</span>
                <span>→</span>
              </div> */}
            </div>
          ))}
        </div>

      </div>

      <div className="flex flex-col lg:flex-row w-11/12 mx-auto justify-center mb-20 items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-[50%]">
          <h1 className="text-xl text-center lg:text-left font-bold tracking-wide mb-10 text-blue-500">
            Simple, Fast & Secure
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-10 place-content-center">
            {feature.map((app, index) => (
              <div
                key={index}
                className="relative flex rounded-2xl flex-col gap-y-3 p-5 bg-blue-700 text-white shadow-inner border-dashed border"
              >
                <span className="absolute w-14 h-14 lg:-top-7 lg:-right-7 -top-7 left-[42%] rounded-full bg-blue-700 items-center justify-center flex text-white font-bold">
                  0{index + 1}
                </span>
                <h1 className="text-2xl font-bold tracking-wide">{app.header}</h1>
                <p className="max-w-sm text-yellow-500">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content (Video Section) */}
        <div className="w-full lg:w-[50%] flex justify-center">
          {/* <video
            className="rounded-lg w-full max-w-lg lg:max-w-full"
            loop
            autoPlay
            muted
          >
            <source
              src={payment}
              type="video/mp4"
            />
          </video> */}
          <img src="https://img.freepik.com/free-vector/hands-holding-credit-card-mobile-phone-with-banking-app-person-paying-with-bank-card-transferring-money-shopping-online-flat-vector-illustration-payment-finance-concept_74855-24760.jpg?t=st=1737953315~exp=1737956915~hmac=ac1e0e213dad955813e0525d06a46b417a67863e25fa2570aaabeac96d86432c&w=740" alt="" />
        </div>
      </div>

      <div className="bg-blue-700 flex flex-col items-center justify-center text-center px-6 py-10">
        {/* Title */}
        <h1 className="text-white text-2xl sm:text-4xl font-semibold mb-10 sm:mb-20">
          Make Instant Payments
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full max-w-6xl gap-6 mb-10 sm:mb-20 mx-auto">
          {service.map((service, index) => (
            <div key={index}>
              <div

                className="flex flex-col items-center gap-y-2 cursor-pointer justify-center mx-auto bg-blue-600 rounded-full w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 hover:bg-blue-500 transition duration-300"
              >
                {service.icon}
                <p className="text-white max-sm:hidden text-xs sm:text-sm lg:text-lg mt-2 font-medium tracking-tight w-[70%] sm:w-[60%] text-center">
                  {service.label}
                </p>
              </div>
              <p className="text-white mx-auto lg:hidden sm:hidden text-xs sm:text-sm lg:text-lg mt-2 font-medium tracking-tight w-[70%] sm:w-[60%] text-center">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        {/* Header */}
        <h1 className="flex w-full text-center justify-center py-3 text-2xl sm:text-3xl text-gray-500 tracking-wide font-medium">
          Keep it simple with FillPe
        </h1>

        {/* Content */}
        <div className='w-11/12 mx-auto flex flex-col gap-y-5 '>
          {Simpleuse.map((term, index) => (
            <div
              key={term.id}
              className={`flex flex-col lg:justify-between lg:flex-row items-center mt-20 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                } gap-10`}
            >
              {/* Text Section */}
              <div className="flex flex-col gap-y-5 rounded-md border shadow-md p-5  ">
                <div className="flex justify-between  items-center">
                  <h1 className="text-xl sm:text-2xl font-medium">Phase</h1>
                  <span className="text-4xl sm:text-6xl opacity-20">{term.id}</span>
                </div>
                <h1 className="text-blue-400 font-medium text-2xl sm:text-3xl max-w-lg">
                  {term.title}
                </h1>
                <p className="max-w-lg text-sm sm:text-base">{term.description}</p>
              </div>

              {/* Image Section */}
              <div className="max-sm:w-full w-[340px] ">
                <img
                  src={term.Photo}
                  alt=""
                  className="sm:w-full w-1/2 mx-auto h-auto object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* all payment method  */}
      <div className=" bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="relative h-[40vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80"
            alt="Payment Methods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Payment Method</h1>
              <p className="text-xl md:text-2xl">Secure, fast, and convenient payment options</p>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="lg:w-11/12 mx-auto lg:px-10 px-3 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold ml-4">{method.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  <ul className="space-y-2">
                    {method.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  {/* <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Select {method.title}
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Badge Section */}
        <div className=" py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold">Secure Encryption</h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold">Fraud Protection</h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold">Instant Processing</h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold">24/7 Support</h4>
              </div>
            </div>
          </div>
        </div>


      </div>
      {/* select language Page  */}
      <div className=" w-10/12 mx-auto  flex flex-col md:flex-row items-center justify-between   p-6">
        {/* Left Content Section */}
        <div className="max-w-lg md:mr-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We speak your language.
          </h1>
          <p className="text-gray-600 mb-6">
            PhonePe is multilingual. Choose from Kannada, Marathi, Bengali,
            English, Hindi, Tamil, Gujarati, Telugu, Malayalam, Assamese, and Odia languages
            to transact easily on the app.
          </p>
        </div>

        {/* Right Media Section */}
        <div className="relative w-[245px]">
          {/* Image */}
          <img
            src={language}// Replace with your image path
            alt="Language Options"
            className="w-64 md:w-96 "
          />
        </div>
      </div>

      <OurBookingservice />
      <Insurance/>
      <MobileRecharge/>
      <div className="flex w-full flex-col bg-gradient-to-t from-blue-50 to-white mx-auto items-center justify-center   ">
        <div className="w-11/12 mx-auto   p-6 rounded-lg ">
          <div className="flex flex-col gap-y-5 mb-20">
            <h1 className=" text-5xl mx-auto w-full text-center font-bold tracking-wide max-w-4xl leading-tight">How to Install App<span className=" text-blue-500"> Your Device</span></h1>
            <p className=" text-gray-500 text-center text-lg max-w-xl mx-auto">PhonePe offers you a convenient platform to get or renew your Health Insurance plan. Here are the steps on how you can get a Health Insurance span plan from [App Name]:</p>
          </div>
          <div className="flex lg:w-10/12 w-full mx-auto justify-between  flex-col lg:flex-row gap-24">
            {/* Steps Navigation */}
            <div className=" flex lg:w-[50%] w-full flex-col gap-4">
              <div className="relative h-2 bg-gray-200 rounded-full mb-6">
                <div
                  className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / steps.length) * 100}%` }}
                ></div>
              </div>
              {steps.map((step) => (
                <button
                  key={step.id}
                  className={`p-4 text-left rounded-lg border transition-all duration-300 ease-in-out ${currentStep === step.id
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                    }`}
                  onClick={() => handleStepChange(step.id)}
                >
                  <h2 className="font-semibold text-lg text-blue-600">
                    Step {step.id}/5
                  </h2>
                  <p className="text-gray-600">{step.title}</p>
                </button>
              ))}
            </div>

            {/* Step Details */}
            <div className="lg:w-[50%] w-full  items-center justify-center flex flex-col gap-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`transition-opacity w-[240px] outline outline-4 rounded-md overflow-hidden outline-offset-8 duration-500 ease-in-out ${currentStep === step.id ? "opacity-100" : "opacity-0 hidden"
                    }`}
                >

                  <img
                    src={step.image}
                    alt={`Step ${step.id}`}
                    className="w-full  max-w-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
