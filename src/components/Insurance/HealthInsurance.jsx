import React from 'react'
import Fillbutton from '../../models/Fillbutton'
import Healthbenefit from './Healthbenefit'
import HealthInsuranceStep from './HealthInsuranceStep'
import { FaRupeeSign, FaRegFileAlt, FaStar, FaBalanceScale, FaMobileAlt } from "react-icons/fa";
import { IndianRupee, ChevronFirst as FirstAid, ClipboardCheck, Receipt } from 'lucide-react';
import { MdOutlineHealthAndSafety, MdAccessTime, MdSecurity } from 'react-icons/md';

import Healthpolicy from './Healthpolicy';
import HealthFaq from './HealthFaq';

function BenefitCard({ icon, title, description, iconColor, iconBgColor }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className={`${iconBgColor} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
        <div className={`${iconColor}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-purple-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

const FeatureCard = ({ text, color, icon, className = '', isLarge = false }) => (
  <div className="relative">
    {/* Background decorative shapes */}
    <div className={`absolute inset-0 ${color} opacity-20 transform rotate-3 rounded-2xl`}></div>
    <div className={`absolute inset-0 ${color} opacity-30 transform -rotate-2 rounded-2xl`}></div>
    
    <div 
      className={`
        relative
        ${color} 
        ${isLarge ? 'p-8' : 'p-6'} 
        rounded-2xl flex items-center justify-center 
        shadow-lg transform transition-all duration-300 
        hover:scale-105 hover:shadow-xl
        ${className}
        ${isLarge ? 'min-h-[280px]' : 'min-h-[220px]'}
        backdrop-blur-sm bg-opacity-80
      `}
    >
      <div className="text-center space-y-4">
        {icon && (
          <div className={`
            relative
            text-blue-900 flex justify-center 
            ${isLarge ? 'text-4xl' : 'text-3xl'}
          `}>
            <div className="absolute -inset-4 bg-white rounded-full opacity-50 blur-sm"></div>
            {icon}
          </div>
        )}
        <p className={`
          relative
          text-blue-900 font-medium leading-tight 
          ${isLarge ? 'text-lg' : 'text-base'}
        `}>
          {text}
        </p>
      </div>
    </div>
  </div>
);


const HealthInsurance = () => {
  const tips = [
    {
      title: "Always opt for an optimal sum insured",
      description:
        "Medical costs have touched the roof, so you need a high sum insured to cover your medical bills sufficiently.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
      icon: <FaRupeeSign className="text-4xl" />,
    },
    {
      title: "Parents to opt for an independent plan",
      description:
        "Adding parents to floater coverage may increase the premium and impose coverage restrictions.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      icon: <FaRegFileAlt className="text-4xl" />,
    },
    {
      title: "Look for the coverage benefits of the plan",
      description:
        "Choose a plan that offers comprehensive coverage. Ensure the benefits meet your needs.",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
      icon: <FaStar className="text-4xl" />,
    },
    {
      title: "Always compare",
      description:
        "Comparison helps you choose a plan offering inclusive coverage at the most affordable premium.",
      bgColor: "bg-pink-100",
      textColor: "text-pink-700",
      icon: <FaBalanceScale className="text-4xl" />,
    },
    {
      title: "Get the policy online",
      description:
        "Getting the policy online is quicker, more convenient, and cost-effective.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      icon: <FaMobileAlt className="text-4xl" />,
    },
  ];

  const benefits = [
    {
      icon: <IndianRupee size={24} />,
      title: "Financial Relief",
      description: "A medical insurance policy covers your medical costs, thereby giving you financial relief from expensive bills.",
      iconColor: "text-blue-500",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: <FirstAid size={24} />,
      title: "Quality Healthcare Facilities",
      description: "You can afford quality healthcare facilities if you are insured under a Health Insurance plan.",
      iconColor: "text-indigo-500",
      iconBgColor: "bg-indigo-100",
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Floater Policy",
      description: "You can cover your family members under a floater policy so that even if they suffer any medical contingency, the health plan pays their medical bills.",
      iconColor: "text-pink-500",
      iconBgColor: "bg-pink-100",
    },
    {
      icon: <Receipt size={24} />,
      title: "Tax Deductions",
      description: "Premiums paid for Health Insurance policies are eligible for tax deductions.",
      iconColor: "text-orange-500",
      iconBgColor: "bg-orange-100",
    },
  ];
  return (
    <div className='mt-16'>
      <div className=' flex flex-col'>
        <div className=' relative flex justify-between'>
          <div className=' absolute top-[50%] z-[2] flex flex-col gap-y-3 left-[30%] -translate-x-[50%] -translate-y-[50%]'>
            <h1 className=' text-4xl max-w-2xl font-bold leading-12 text-blue-50'>Protect Your Health with Comprehensive Health Insurance Coverage</h1>
            <p className=' text-gray-700 tracking-wide '>PhonePe offers Health Insurance Policy online at affordable premiums.</p>
            <Fillbutton text="Insure Now" />
          </div>
          <div className=' w-full grayscale hover:grayscale-0 '>
            <img src="https://img.freepik.com/free-vector/medical-healthcare-protection-shield-banner-with-cross-design_1017-50356.jpg?t=st=1737453793~exp=1737457393~hmac=94e74ec005143c3275aa1e163ee169d99717734c9f605dd561d36d9e55bd5f58&w=1380" alt="" className='w-full' />
          </div>
        </div>
        <div className=' max-w-2xl my-10 text-center mx-auto text-lg text-zinc-700'>
          Critical illnesses and diseases are some things that most people do not worry about on a daily basis. However, with most of us leading a sedentary lifestyle, common lifestyle illnesses like diabetes, hypertension, stress, and mental health have become common causes of concern. Add to this, the ever-rising cost of treatments and medical emergencies and it becomes a financially challenging affair. So, to help you meet such challenges, a Health Insurance policy comes into the picture.
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-50 to-zinc-50 py-12 px-5 md:px-20">
        <div className="flex w-11/12 mx-auto flex-col md:flex-row items-center justify-center md:items-start">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-pink-600 text-4xl  md:text-8xl max-w-xl font-bold mb-4 leading-tight">
              Health Insurance:<br /> the meaning
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mt-5 text-3xl max-w-xl text-justify leading-tight  tracking-wide items-center mb-4">
              A Health Insurance policy covers the medical costs that you suffer in a medical contingency. Health Insurance plans cover specific medical expenses and treatments.
            </p>
            <a href="#" className="text-purple-600 font-semibold hover:underline">
              READ MORE
            </a>
          </div>
        </div>
      </div>
     
      <div className=" bg-gradient-to-br from-gray-50 to-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Health Insurance Benefits
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the advantages of having a comprehensive health insurance plan for you and your family.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              iconColor={benefit.iconColor}
              iconBgColor={benefit.iconBgColor}
            />
          ))}
        </div>
      </div>
    </div>
     {/* features of fillpy health insurance  */}
     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          {/* Decorative background elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-200 rounded-tr-[4rem] rotate-12 opacity-20"></div>
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-200 rounded-bl-[3rem] -rotate-12 opacity-20"></div>
          
          <h1 className="relative text-3xl sm:text-4xl font-bold text-blue-500 mb-4">
            Health Insurance through<br />PhonePe - the key features
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You can fulfil your Health Insurance needs through PhonePe that offers you a standard, comprehensive Health Insurance plan.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Here are some key features of the Health Insurance policies available on PhonePe's platform:
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Background decorative shapes */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-pink-100 rounded-br-[6rem] rotate-12 opacity-20"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-100 rounded-tl-[6rem] -rotate-12 opacity-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Left Column */}
            <div className="space-y-8">
              <FeatureCard 
                text="Hassle-free services"
                color="bg-blue-100"
                icon={<MdOutlineHealthAndSafety />}
              />
              <FeatureCard 
                text="Online insurance through PhonePe are entirely safe and secure"
                color="bg-purple-100"
                icon={<MdSecurity />}
              />
            </div>

            {/* Center Column */}
            <div className="md:translate-y-12">
              <FeatureCard 
                text="Get a plan within minutes with just a few clicks without any medical test or physical documentation"
                color="bg-pink-100"
                icon={<MdAccessTime />}
                isLarge={true}
                className="h-full"
              />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <FeatureCard 
                text="Access your policy details on PhonePe's mobile app whenever you want to"
                color="bg-orange-100"
                icon={<FaMobileAlt />}
              />
              <div className="h-[220px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-30 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 opacity-30 rounded-2xl transform -rotate-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
      <Healthbenefit />
      <Healthpolicy/>
      <div className=" bg-gray-50 py-10 px-5">
        <div className=' w-11/12 flex mx-auto flex-col'>
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-700 mb-8">
            Things to Check When Getting Health Insurance
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Make an informed decision when choosing a health insurance policy. Here are some essential tips:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className={`p-6 border-4 border-dashed border-gray-200 ${tip.bgColor} rounded-lg shadow-md`}
              >
                <div className={`flex items-center justify-center ${tip.textColor} mb-4`}>
                  {tip.icon}
                </div>
                <h2 className={`font-bold text-lg ${tip.textColor} mb-2 text-center`}>{tip.title}</h2>
                <p className="text-gray-600 text-sm text-center">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <HealthInsuranceStep />
      <HealthFaq/>
    </div>
  )
}

export default HealthInsurance
