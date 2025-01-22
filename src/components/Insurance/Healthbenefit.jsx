import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { MdPolicy } from "react-icons/md";
import { IoMdText } from "react-icons/io";
import { GiTrophyCup } from "react-icons/gi";

const Healthbenefits = [
    {
        icon:FaIndianRupeeSign,
        name: "Financial Relief",
        description: "A medical insurance policy covers your medical costs, thereby giving you financial relief from expensive bills."
    },
    {
        icon: MdHealthAndSafety,
        name: "Quality Healthcare Facilities",
        description: "You can afford quality healthcare facilities if you are insured under a Health Insurance plan."
    },
    {
        icon:MdPolicy,
        name: "Floater Policy",
        description: "You can cover your family members under a floater policy so that even if they suffer any medical contingency, the health plan pays their medical bills."
    },
    {
        icon:IoMdText,
        name: "Tax Deductions",
        description: "Premiums paid for Health Insurance policies are eligible for tax deductions."
    },
    {
        icon:GiTrophyCup,
        name: "Rewared And Cashback",
        description: "A medical insurance policy covers your medical costs, thereby giving you financial relief from expensive bills."
    },
]

const Healthbenefit = () => {
    return (
        <div>
            <div className='w-11/12 flex flex-col mx-auto my-10 '>
                <div className=' space-y-8'>
                    <h1 className='text-5xl mx-auto text-center font-bold tracking-wide'>The benefits of a <span className='text-blue-500'>Health Insurance plan</span></h1>
                    <p className='text-lg text-center'>There are various benefits that Health Insurance plans offer. These benefits include the following</p>
                    <div className=' grid grid-cols-3 gap-8'>
                        {
                            Healthbenefits.map((list) => (
                                <div className='flex flex-col gap-y-3 py-7 shadow-inner w-fit border px-7'>
                                    <span><list.icon size={45} /></span>
                                    <h5 className=' text-2xl font-bold text-blue-500'>{list.name}</h5>
                                    <p className=' text-lg tracking-wide text-gray-500 max-w-lg'>{list.description}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Healthbenefit
