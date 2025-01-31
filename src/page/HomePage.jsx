import React from 'react'
import Fillbutton from '../models/Fillbutton'
import hero from '../assets/Photos/Home screen.png';

import Hero2 from "../assets/Photos/wallet-removebg-preview.png"
import cashback from '../assets/Photos/Reward.png'
import { GiTrophyCup } from "react-icons/gi";
import FillPe from '../components/HomePage/FillPe';
import Ourservices from '../components/HomePage/Ourservices';

import { FaStar, FaRegStar, FaLock, FaExchangeAlt } from "react-icons/fa";
import payment from '../assets/Photos/Mobile payments.mp4'

const benefits = [
  { icon: <FaStar className="text-gray-400 text-2xl" />, title: "One app All Payment service", description: "Pay bills, recharge, send money,invest and shop at your favourite stores." },
  { icon: <FaLock className="text-gray-400 text-2xl" />, title: "Provide Discount/Cashback", description: "Pay bills, recharge, send money,invest and shop at your favourite stores get up to 80% cashback." },
  { icon: <FaExchangeAlt className="text-gray-400 text-2xl" />, title: "Faster And More Secure", description: "muti-step authotication of your acccount." },
  { icon: <FaExchangeAlt className="text-gray-400 text-2xl" />, title: "Provide Wallet System", description: "Add money to app wallet and get a cashback and Withdrawal money to bank-account." },
  { icon: <FaExchangeAlt className="text-gray-400 text-2xl" />, title: "Transfor Cashback to your Bank", description: "Choose from options like UPI, the PhonePe wallet or your Debit and Credit Card." },
];

const BenefitCard = ({ icon, title, description }) => (
  <div className="flex w-fit items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md">
    <div className="p-3 bg-gray-900 rounded-full">{icon}</div>
    <div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </div>
);



const overservie = [
  {
    icon: "",
    name: "Recharge",
    points: []
  },
  {
    icon: "",
    name: "Utility Bills",
    points: []
  },
  {
    icon: "",
    name: "Booking",
    points: []
  },
  {
    icon: "",
    name: "Financial & Tax",
    points: []
  },
  {
    icon: "",
    name: "Cashback Offers",
    points: []
  },
]

const advantages = [
  {
    title: 'No management fees',
    description: 'Connect our AI to your exchange account and invest crypto automatically. Toka app works while you just live.'
  },
  {
    title: 'Personal support',
    description: 'Connect our AI to your exchange account and invest crypto automatically. Toka app works while you just live.'
  },
  {
    title: 'Saving your time',
    description: 'Connect our AI to your exchange account and invest crypto automatically. Toka app works while you just live.'
  },
  {
    title: 'Withdraw anytime',
    description: 'Connect our AI to your exchange account and invest crypto automatically. Toka app works while you just live.'
  },
  {
    title: 'Secure & insured',
    description: 'Connect our AI to your exchange account and invest crypto automatically. Toka app works while you just live.'
  },
  {
    title: 'Easy to use',
    description: 'Connect our AI to your exchange account and invest crypto automatically. Toka app works while you just live.'
  }
];

const HomePage = () => {
  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/your-app', '_blank');
  };

  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/your-app', '_blank');
  };
  return (
    <div className='mt-20 overflow-hidden'>
      <div className='w-11/12 flex flex-col mx-auto '>
        <div className='flex flex-col items-center mt-5'>
          <div className='flex flex-col mx-auto space-y-2'>
            <span className=' bg-zinc-700 text-white w-fit mx-auto  py-2 px-5 rounded-full'>easy to use and get 100% cashback</span>
            <h1 className=' lg:text-5xl text-2xl font-bold tracking-wide max-w-5xl text-center lg:leading-[3.5rem] leading-9'>Zero-Cost Payments & Cashback Rewards for Your Online Business</h1>
            <p className='text-center text-lg'>Download to get up to 50% cashback</p>
            <div className='mx-auto flex items-center w-full'>
              <Fillbutton text='Download Now' />
            </div>
          </div>

        </div>
      </div>
      <div className='lg:bg-[url(https://i.pinimg.com/736x/46/da/81/46da81f877b6521253542a5204379475.jpg)] bg-cover '>
        <div className='w-11/12 mx-auto  flex lg:flex-row flex-col max-sm:flex-col-reverse justify-between gap-x-20 mt-20 '>
          <div>
            <div className='grid lg:grid-cols-2 grid-cols-1 p-5 gap-5 mt-10'>
              {
                overservie.map((item, index) => {
                  return (
                    <div key={index} className='flex flex-col items-center shadow-md p-5 border rounded-lg'>
                      <div className='w-16 h-16 bgcolor rounded-full flex items-center  justify-center text-white'>
                        <GiTrophyCup className='w-8 h-8' />
                      </div>
                      <h3 className='text-xl font-semibold text-gray-800'>{item.name}</h3>
                      <p className=' max-w-sm text-gray-500 text-lg text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, debitis aspernatur?</p>
                      <p className='text-gray-600'>{item.points}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className=' w-[50%] max-sm:mx-auto'>
            <div className=' relative  flex w-full mx-auto  overflow-hidden p-2 '>
              <div className=' flex overflow-hidden'>
                <img
                  src={Hero2}
                  alt="Cashback"
                  className=' z-[2]'
                />
                <img src={hero} alt="" className=' absolute left-[18.5rem] top-12' />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-11/12 mx-auto  p-8 md:p-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h3 className=" uppercase font-semibold py-1 border w-fit px-2 rounded-2xl bg-gray-800 text-white">Benefits</h3>
            <h2 className="text-4xl font-bold my-4 w-fit bg-gradient-to-b from-blue-500 to-gray-900 bg-clip-text text-transparent">Simple, Fast & Secure</h2>
            <p className="text-gray-400 mb-6"> </p>
            <div className="flex flex-col gap-4">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>
          <div className="w-full  md:w-1/2 flex justify-center overflow-hidden">
            <video autoPlay="true" muted className='max-sm:w-[400px]' width={800}>
              <source src={payment} type="video/mp4" className='bg-cover' />
            </video>
          </div>
        </div>
      </div>
      <FillPe />
      <div className="flex flex-col lg:flex-row items-center justify-center w-full bg-gradient-to-b mx-auto from-gray-50  to-white p-4">
        <div className=' flex lg:flex-row flex-col items-center justify-between lg:px-20 py-5 lg:w-11/12 w-full mx-auto '>
          <div className="lg:w-1/2   flex flex-col gap-y-2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl  md:text-5xl w-full font-bold bg-gradient-to-b capitalize  from-blue-500 to-gray-900 py-2 bg-clip-text text-transparent ">
              Earn Cashback and Rewards!
            </h1>
            <p className="text-lg max-w-lg text-justify text-gray-600 mb-6">
              Pay your bills or recharge your mobile and enjoy exciting cashback and
              rewards directly in your wallet. Stay connected, save more, and enjoy
              seamless transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gray-900 hover:bg-gray-600 text-white  py-3 px-6 rounded">
                Get Cashback Now
              </button>
              <button className="bg-gray-200 hover:bg-gray-900 hover:text-white text-gray-400  py-3 px-6 rounded">
                Start Now
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/4  flex justify-center items-center">
            <div className="">
              <img
                src={cashback}
                alt="Cashback Rewards"
                className="w-full max-w-md rounded-xl"
              />
            </div>
          </div>
        </div>

      </div>
      <Ourservices />
      <div className=" text-white my-5 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          <h1 className="text-3xl  md:text-5xl font-bold bg-gradient-to-b capitalize  from-blue-500 to-gray-900 py-2 text-center bg-clip-text text-transparent mb-4">
            Main Advantages
          </h1>
          <p className="text-center text-lg text-gray-400 mb-12">
            Connect our FillPay Let's start to fill a bills and recharge and get up to 50% cashback Rewards
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg text-center flex flex-col items-center"
              >
                <div className="text-blue-400  text-3xl mb-4">
                  <FaRegStar className='fill-blue-500' />
                </div>
                <h2 className="text-xl font-semibold mb-2">{advantage.title}</h2>
                <p className="text-gray-400 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
