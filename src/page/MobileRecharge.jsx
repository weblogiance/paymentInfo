import React from 'react'
import { FcMultipleSmartphones } from "react-icons/fc";
import { RxLapTimer } from "react-icons/rx";
import { GiSpeedometer } from "react-icons/gi";
import { GoVerified } from "react-icons/go";
import { MdNotifications } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { BsBrightnessHigh } from "react-icons/bs";

import { FaHandPointRight } from "react-icons/fa";
import { ArrowRight, Wallet, Coins, Tag } from 'lucide-react';

import jio from '../assets/Photos/jio-removebg-preview.png'
import vi from '../assets/Photos/vi-removebg-preview.png'
import airtel from '../assets/Photos/airtel-removebg-preview.png'
import BSNL from '../assets/Photos/BSNL-removebg-preview.png'

const features = [
    {
        name: "Variety of plans",
        icon: FcMultipleSmartphones,
        Description: "Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs"
    },
    {
        name: "Bill payment reminders",
        icon: RxLapTimer,
        Description: "Sends reminders to pay bills.Offers a range of plans to suit different budgets and needsOffers a range of plans to suit different budgets and needsOffers a range of plans to suit different budgets and needs"
    },
    {
        name: "Instant recharge",
        icon: GiSpeedometer,
        Description: "Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs"
    },
    {
        name: "Plan validation:",
        icon: GoVerified,
        Description: "Automatically validates the selected plan before payment.Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs"
    },
    {
        name: "Plan notifications",
        icon: MdNotifications,
        Description: "Sends notifications if an invalid plan is selected."
    },
    {
        name: "24/7 availability",
        icon: Ri24HoursFill,
        Description: "Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs.Offers a range of plans to suit different budgets and needs"
    }
]

const cashbackOffers = [
    {
        title: "10% Cashback",
        description: "On your first recharge",
        image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80&w=400&h=300",
        tag: "NEW USER"
    },
    {
        title: "₹50 Extra",
        description: "On recharges above ₹500",
        image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80&w=400&h=300",
        tag: "SPECIAL"
    },
    {
        title: "5% Extra Data",
        description: "On all data recharges",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400&h=300",
        tag: "LIMITED TIME"
    }
];

const simcard = [
    {
        image: jio,
        tab: "Jio"
    },
    {
        image: vi,
        tab: "Vi"
    },
    {
        image: airtel,
        tab: "Airtel"
    },
    {
        image: BSNL,
        tab: "BSNL"
    }
]
const MobileRecharge = () => {
    return (
        <div>
            <main className=' w-11/12 mx-auto  flex justify-between items-center mt-20 px-5'>
                <div className='flex flex-col gap-y-2'>
                    <span className=' text-xs bg-black/50 px-3 w-fit rounded-2xl text-white tracking-wide p-1.5'>Payment app Mobile Recharge service</span>
                    <h1 className=' text-5xl max-w-xl font-bold leading-tight  tracking-wide'>Easy To Use And Get up to <span className=' text-blue-500'>80% Cashback</span> </h1>
                    <p className=' text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, necessitatibus omnis.</p>
                    <div className='flex gap-x-3 items-center mt-5'>
                        <button className='py-2 px-5 rounded-xl bg-[#155CD1] text-white font-bold'>Sign up Now</button>
                        <span>Recharge Now </span>
                    </div>
                </div>
                <div className=' h-[60vh] w-[40vw] '>
                    <img src="https://benjanews.com/wp-content/uploads/2021/07/Recharge-Mobile-Online.png" alt="" className=' w-full' />
                </div>
            </main>
            <section className=' w-11/12 mx-auto my-20 px-5 text-justify'>
                <div>
                    <h1 className='font-bold text-6xl max-w-5xl leading-tight mx-auto text-center mb-20'>Six powerful reasons to choose Mobile Recharge service</h1>
                    <div className=' grid grid-cols-4 gap-5'>
                        {
                            features.map((keys) => (
                                <div className='flex flex-col gap-y-2 p-5 shadow-xl border rounded-lg'>
                                    <span className='flex w-20 h-20 items-center justify-center rounded-full bg-[#00BFFF]/10 text-[#00BFFF]'><keys.icon size={30} /></span>
                                    <h1 className=' tracking-wide text-2xl text-[#0D1B2A] font-bold'>{keys.name}</h1>
                                    <p className=' text-gray-500 mt-5'>{keys.Description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <div className=' bg-gray-50 py-20'>
                <div>
                    <h1 className=' text-5xl font-bold max-w-5xl text-center leading-tight mx-auto'>Go live instantly <span className=' text-blue-500'>with payment plugins for</span>  your existing systems</h1>
                    <div className='w-11/12 mx-auto'>
                        <div className='flex mx-auto w-full justify-center gap-x-32 mt-20'>
                            <div className=' bg-blue-500/20 rounded-lg p-8'>
                                <div className='flex justify-between items-center text-xl  font-semibold tracking-wide'>
                                    <span>Mobile Recharge Platfroms</span>
                                    <span>view More</span>
                                </div>
                                <div >
                                    <div className='flex gap-x-10'>
                                        {
                                            simcard.map((com) => (
                                                <div className='flex text-center mt-10 justify-between gap-y-3 flex-col w-[100px] overflow-hidden  p-2'>
                                                    <div className=' max-w-lg h-[70px] overflow-hidden'>
                                                          <img src={com.image} alt="" className='w-full'/>
                                                    </div>
                                                    <strong>{com.tab}</strong>
                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>
                            </div>
                            <div>
                                <h1 className=' text-2xl max-w-lg font-semibold mb-5 tracking-wide text-red-500'>Leverage tie-ups with over 30+ popular platforms to get started instantly</h1>
                                <strong className='text-lg px-5'>1. Enable all payment sources</strong>
                                <ul className='px-10 mt-2 flex flex-col gap-y-1 '>
                                    <li className='flex items-center gap-x-2'><BsBrightnessHigh/>All UPI Apps</li>
                                    <li className='flex items-center gap-x-2'><BsBrightnessHigh/>Netbanking </li>
                                    <li className='flex items-center gap-x-2'><BsBrightnessHigh/>Easy EMI</li>
                                    <li className='flex items-center gap-x-2'><BsBrightnessHigh/>Credit & Debit Card</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' relative mt-20'>
                <div className='p-20 w-9/12 flex mx-auto bg-blue-800 text-white h-[70vh] rounded-2xl'>
                    <div className=' space-y-10'>
                        <h2 className=' text-5xl leading-tight font-bold tracking-wide max-w-xl'>A powerful dashboard to help you stay on top of your business</h2>
                        <ul className='flex flex-col gap-y-2'>
                            <li className='flex items-center gap-x-2 text-lg px-3'><FaHandPointRight />Get real-time analytics and customisable reports</li>
                            <li className='flex items-center gap-x-2 text-lg px-3'><FaHandPointRight />Create payment links to accept payments</li>
                            <li className='flex items-center gap-x-2 text-lg px-3'><FaHandPointRight />Create offers and no-cost EMI options</li>
                            <li className='flex items-center gap-x-2 text-lg px-3'><FaHandPointRight />View and manage your settlements</li>
                            <li className='flex items-center gap-x-2 text-lg px-3'><FaHandPointRight />Manage and initiate refunds</li>
                        </ul>
                    </div>
                    <div className=' absolute top-10 right-[5%]'>
                        <img src="https://paytmpayments.com/s3assets/images/pg929/pg-overview/dashboard-image.webp?version=1736962827" alt="" className='w-full' />
                    </div>
                </div>
            </div>
          
            {/* offer sections  */}
            <div className=" my-20 bg-gradient-to-b from-blue-50 to-white">
                <section className=" bg-white">
                    <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 ">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Earn While You Recharge
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Get amazing cashback and rewards on every recharge. The more you recharge, the more you earn!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {cashbackOffers.map((offer, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl "
                                >
                                    <div className="relative h-[300px] overflow-hidden text-white">
                                        <img
                                            src={offer.image}
                                            alt={offer.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-blue-600  text-sm font-medium rounded-full">
                                                {offer.tag}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                            {offer.title}
                                        </h3>
                                        <p className="text-gray-200">
                                            {offer.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Rewards Summary */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-xl">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                    <Wallet className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Instant Cashback</h4>
                                    <p className="text-gray-600">Credited directly to wallet</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-xl">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Reward Points</h4>
                                    <p className="text-gray-600">Convert points to money</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-xl">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                    <Tag className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Special Offers</h4>
                                    <p className="text-gray-600">Exclusive deals & discounts</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-12 animate-on-scroll ">
                            <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                View All Offers <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>


                </section>
            </div>

        </div>
    )
}

export default MobileRecharge


