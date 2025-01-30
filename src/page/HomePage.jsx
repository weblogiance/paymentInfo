import React from 'react'
import Fillbutton from '../models/Fillbutton'
import hero from '../assets/Photos/Home screen.png';

import Hero2 from "../assets/Photos/wallet-removebg-preview.png"

import { GiTrophyCup } from "react-icons/gi";
import FillPe from '../components/HomePage/FillPe';
import Ourservices from '../components/HomePage/Ourservices';

import { FaStar, FaLock, FaExchangeAlt } from "react-icons/fa";

import payment from '../assets/Photos/Mobile payments.mp4'

const benefits = [
  { icon: <FaStar className="text-blue-400 text-2xl" />, title: "One app All Payment service", description: "Pay bills, recharge, send money,invest and shop at your favourite stores." },
  { icon: <FaLock className="text-blue-400 text-2xl" />, title: "Provide Discount/Cashback", description: "Pay bills, recharge, send money,invest and shop at your favourite stores get up to 80% cashback." },
  { icon: <FaExchangeAlt className="text-blue-400 text-2xl" />, title: "Faster And More Secure", description: "muti-step authotication of your acccount." },
  { icon: <FaExchangeAlt className="text-blue-400 text-2xl" />, title: "Provide Wallet System", description: "Add money to app wallet and get a cashback and Withdrawal money to bank-account." },
  { icon: <FaExchangeAlt className="text-blue-400 text-2xl" />, title: "Transfor Cashback to your Bank", description: "Choose from options like UPI, the PhonePe wallet or your Debit and Credit Card." },
];

const BenefitCard = ({ icon, title, description }) => (
  <div className="flex w-fit items-center gap-4 bg-blue-800 p-4 rounded-lg shadow-md">
    <div className="p-3 bg-blue-900 rounded-full">{icon}</div>
    <div>
      <h3 className="text-lg font-bold text-blue-400">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </div>
);



const overservie = [
    {
        icon:"",
        name:"Recharge",
        points:[]
    },
    {
        icon:"",
        name:"Utility Bills",
        points:[]
    },
    {
        icon:"",
        name:"Booking",
        points:[]
    },
    {
        icon:"",
        name:"Financial & Tax",
        points:[]
    },
    {
        icon:"",
        name:"Cashback Offers",
        points:[]
    },
]

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
        <div className='w-11/12 mx-auto flex lg:flex-row flex-col max-sm:flex-col-reverse justify-between gap-x-20 mt-20 '>
                     <div>
                         <div className='grid lg:grid-cols-2 grid-cols-1 p-5 gap-5 mt-10'>
                         {
                                overservie.map((item,index)=>{
                                    return(
                                        <div key={index} className='flex flex-col items-center shadow-md p-5 border rounded-lg'>
                                            <div className='w-16 h-16 bgcolor rounded-full flex items-center  justify-center text-white'>
                                                <GiTrophyCup className='w-8 h-8'/>
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
                                          <img src={hero} alt="" className=' absolute left-[18.5rem] top-12'/>

                                     </div>
                            </div>
                     </div>
                 </div>
        </div>
        <div>
        <div className="  p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2">
        <h3 className="text-blue-400 uppercase font-semibold">Benefits</h3>
        <h2 className="text-4xl font-bold my-4">Simple, Fast & Secure</h2>
        <p className="text-gray-400 mb-6"> </p>
        <div className="flex flex-col gap-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
      <div className="w-full  md:w-1/2 flex justify-center overflow-hidden">
        <video autoPlay="true" muted  className='max-sm:w-[400px]' width={800}>
            <source src={payment} type="video/mp4" className='bg-cover'/>
        </video>
      </div>
    </div>
        </div>
        <FillPe/>
        <Ourservices/>
    </div>
  )
}

export default HomePage
