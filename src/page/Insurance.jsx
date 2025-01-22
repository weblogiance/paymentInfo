import React from 'react'
import Allinsurance from '../components/Insurance/Allinsurance'
import { FaClipboardList, FaClock, FaMapMarkedAlt, FaLock } from 'react-icons/fa';

const benefits = [
  {
    id: 1,
    icon: <FaClipboardList className="text-purple-600 text-4xl mx-auto" />, 
    title: "Curated Offerings",
    description: "You can find the best insurance plans that offer the most comprehensive coverage benefits for maximum protection."
  },
  {
    id: 2,
    icon: <FaClock className="text-pink-500 text-4xl mx-auto " />, 
    title: "Quick Insurance",
    description: "Did you know you can get insurance in a few clicks? Get covered instantly without any hassles!"
  },
  {
    id: 3,
    icon: <FaMapMarkedAlt className="text-orange-500 text-4xl mx-auto " />, 
    title: "Easy Access",
    description: "All your insurance purchase related details are stored safely, making it easy for you to access your insurance document anytime, anywhere."
  },
  {
    id: 4,
    icon: <FaLock className="text-teal-500 text-4xl mx-auto " />, 
    title: "Safety",
    description: "You no longer need to worry about security risks when getting insurance. An encrypted and completely safe platform ensures that you get the policy securely."
  }
];

const offerings = [
  {
    id: 1,
    title: "Claim Assistance",
    description: "Just like getting or renewing an insurance plan is simple, claiming insurance is also a hassle-free process. You just need to initiate your claim process with the intermediary."
  },
  {
    id: 2,
    title: "Policy Servicing",
    description: "As your insurance requirements grow over time, you will be required to maintain it. Get your policy serviced at regular intervals in a hassle-free manner."
  },
  {
    id: 3,
    title: "Dedicated Assistance",
    description: "If you have queries related to your insurance, simply contact us and assistance will be provided to you."
  },
  {
    id: 4,
    title: "Insurer Comparison",
    description: "Make an informed decision with the choice of multiple insurers."
  }
];

const Insurance = () => {
  return (
    <div className='mt-16'>
      <div className=' relative'>
        <div className='w-full h-[80vh] overflow-hidden'>
          <img src="https://www.phonepe.com/webstatic/8548/static/2d3c954a570dacefb989ba2f8b110501/e1e73/insurancehero-desktop-2x.png" alt="" className=' w-full h-[90vh] bg-cover' />
        </div>
        <div className=' absolute bottom-2 left-[40%] flex flex-col w-fit gap-y-2'>
          <h1 className=' text-7xl font-bold text-center tracking-wide text-blue-500'>Insurance</h1>
          <span className=' text-center text-5xl text-pink-500 font-bold '>The need of the hour</span>
          <button className='py-2 px-5 text-white bg-blue-500 w-fit mx-auto rounded-md font-medium tracking-wide mt-8'>Download the app</button>
        </div>
      </div>
      <div className='w-11/12 flex flex-col mx-auto px-5'>
        <div className='flex justify-between items-center gap-10'>
          <div>
            <img src="https://www.phonepe.com/webstatic/8548/static/db10f008d3c7ea057bcf079c71b024ee/ac974/insurance-hb-desktop-2x.png" alt="" />
          </div>
          <div className='flex flex-col gap-y-8 text-lg max-w-4xl text-justify text-gray-500'>
            <p className=' max-w-3xl'>Life is full of uncertainties. You may get married, find an amazing job, and start a new life. However, you might also contract an illness. Your house might be damaged in an earthquake or a flood. Your vehicle may be involved in an accident. Instances are many and, yet, the result always has a financial repercussion.</p>
            <p>While you can take measures to control or limit the financial losses suffered in a contingency, you cannot avoid them altogether. So what do you do?</p>
            <button className='flex text-blue-500 font-medium'>Read More</button>
          </div>
        </div>
      </div>
      <Allinsurance />
      <div className="bg-gray-50 py-10 px-5 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-500 mb-8">
          Why insure with us?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Here are some benefits of getting insured with us:
        </p>

        <div className="flex flex-col">
          {benefits.map((benefit) => (
            <div key={benefit.id} className=" p-6  text-center">
              <div className='mx-auto bg-blue-500/5 w-24 h-24 rounded-full  flex items-center justify-center'>
                  {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-500 max-w-lg mx-auto">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* offers section  */}
      <div className="bg-gradient-to-b from-blue-500 to-white py-10 px-5 md:px-20">
      <h2 className="text-center text-xl font-bold text-blue-50 uppercase mb-4">PhonePe Insurance Offerings</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">What we offer</h3>
      <p className="text-center text-gray-600 mb-12">Here’s a brief look at what we offer:</p>

      <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-3">
        {offerings.map((offering) => (
          <div key={offering.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-pink-600 text-2xl font-bold mb-3">{offering.title}</h3>
            <p className="text-gray-500 max-w-md text-justify">{offering.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700">
          Download the app
        </button>
      </div>
    </div>
    </div>
  )
}

export default Insurance
