import React from 'react'
import hInsurance from '../../assets/Photos/h-insurance.jpg'
import bInsurance from '../../assets/Photos/b-insurance.jpg'
import cInsurance from '../../assets/Photos/c-insurance.jpg'
import { TbArrowNarrowRightDashed } from "react-icons/tb";

import { MdOutlineSecurity } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineSavings } from "react-icons/md";
import { VscCoverage } from "react-icons/vsc";
import { TbBasketDiscount } from "react-icons/tb";

const insurange = [
    {
        title: "Health Insurance",
        description: "Health insurance plans cover medical emergencies. So, if you suffer from an illness or an injury and you are hospitalized, health insurance plans would help pay the medical bills",
        component: [
            {
                subtitle: "Health + covid-19",
                explane: "Get cashless insurance cover upto Rs. 20 lakh",
                imge: hInsurance
            }
        ]
    },
    {
        title: "Vehicle Insurance",
        description: "If you own a vehicle, a Motor Insurance Cover is a must to protect it against unforeseen damages. In India, it is compulsory by law to have a third-party insurance cover for your vehicle.",
        component: [
            {
                subtitle: "Bike Insurance",
                explane: "Buy or renew policy instantly in under 2 mins",
                imge: bInsurance
            },
            {
                subtitle: "Car Insurance",
                explane: "protect your car with comprehensive plans",
                imge: cInsurance
            }
        ]
    }
]

const benefits = [
    {
        icon: MdOutlineSecurity,
        name: "Financial security",
        summary: "Insurance plans compensate for the financial risks that you suffer in unforeseen contingencies and provide financial security."
    },
    {
        icon: MdOutlineSavings,
        name: "Safety of your financial savings",
        summary: "If you insure your losses, the insurance policy shoulders the financial burden of such losses, whenever they may occur. This safeguards your savings, allowing you to use them for their intended purposes, i.e., meeting your financial goals."
    },
    {
        icon: AiFillSafetyCertificate,
        name: "Financial security",
        summary: "Insurance plans compensate for the financial risks that you suffer in unforeseen contingencies and provide financial security."
    },
    {
        icon: VscCoverage,
        name: "Coverage for a rainy day",
        summary: "Sometimes you might suffer an unforeseen loss. Insurance plans act as an umbrella during such times and protect you financially."
    },
    {
        icon: TbBasketDiscount,
        name: "Attractive tax benefits",
        summary: "Lastly, let’s not forget about the tax advantages of insurance plans. Life and health insurance policies have tax-saving benefits that lower your tax outgo, and that too, considerably!"
    }
]
const Allinsurance = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto flex flex-col gap-y-20'>
                <div>
                    <h1 className='text-5xl  gap-x-3 capitalize font-bold tracking-wide mx-auto flex w-full justify-center space-x-2'>Types of<span className='text-blue-500'> Insurance Plans</span></h1>
                    {
                        insurange.map((list) => (
                            <div>

                                <div className='mt-10 flex  flex-col  gap-y-2 py-5'>
                                    <h1 className=' text-3xl text-center font-semibold tracking-wide'>{list.title}</h1>
                                    <p className=' max-w-2xl text-center mx-auto text-gray-500'>{list.description}</p>
                                    <span className=' mx-auto font-semibold text-lg text-blue-500 '>Explore More</span>
                                </div>
                                <div className='flex mx-auto  justify-center gap-x-20 mt-5'>
                                    {
                                        list.component.map((sublist) => (
                                            <div className='w-fit   border p-5 rounded-md shadow-md'>
                                                <div className=' w-[400px] h-[400px] mx-auto overflow-hidden'>
                                                    <img src={sublist.imge} alt="" className='w-full' />
                                                </div>
                                                <div className='mt-2 space-y-2'>
                                                    <h1 className=' text-lg font-medium'>{sublist.subtitle}</h1>
                                                    <p className=' text-sm text-gray-500 flex items-center gap-x-3 justify-between'>{sublist.explane}<span className='text-blue-500 cursor-pointer'><TbArrowNarrowRightDashed size={30} /></span> </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className='flex flex-col gap-y-2'>
                        <h1 className='text-5xl font-bold tracking-wide text-center my-10'>Benefits of Buying Insurance <span className='text-blue-500'>Plans  from PhonePe</span> </h1>
                        <span className='text-2xl text-center mx-auto  font-medium tracking-wide'>Buying insurance can be a rewarding experience</span>
                        <p className='text-center max-w-md mx-auto text-gray-500'>There are various benefits of buying insurance plans covering the different types of financial risks that you can face. Do you know what these benefits are? Let’s have a look:</p>
                    </div>
                    <div className='grid grid-cols-3 gap-10 mt-10'>
                        {
                            benefits.map((list) => (
                                <div className='flex flex-col gap-y-3 px-8 py-5 shadow-lg hover:shadow-gray-500 transition-all duration-200 ease-linear rounded-md border'>
                                    <span className=' text-blue-500'><list.icon size={70} /></span>
                                    <h2 className='text-2xl font-medium'>{list.name}</h2>
                                    <p className=' max-w-lg text-justify text-gray-500'>{list.summary}</p>
                                </div>
                            ))
                        }

                    </div>
                    <button className='py-2 px-5 text-white flex bg-blue-500 w-fit mx-auto rounded-md font-medium tracking-wide my-5'>Download the app</button>
                </div>
            </div>
        </div>
    )
}

export default Allinsurance
