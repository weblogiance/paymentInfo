import React from 'react'
import { GoDot } from "react-icons/go";

const policy = ["Medical expenses incurred before hospitalisation", "Medical expenses incurred after being discharged", "Ambulance costs", "Daycare treatments that do not require 24-hour hospitalisation", "COVID-19 hospitalisation", "Modern and advanced treatments", "Non-allopathic, alternative treatments that include Ayurveda, Unani, Siddha, and Homeopathy (AYUSH)"]

const plans = ["Illnesses or injuries suffered due to war or nuclear radiation", "Cosmetic treatments are not covered under Health Insurance", "Congenital disabilities are not covered under Health Insurance", "Experimental and unproven treatments", "Maternity-related expenses, unless specifically covered", "Sexually transmitted illnesses and venereal diseases", "Injuries and illnesses suffered due to participation in criminal or hazardous activities", "Treatments for alcohol or drug addiction"]

const hospitalisation = ["Room rent", "ICU charges", "Doctor's fees", "Operation theatre charges", "Medicines", "Diagnostic tests", "Pre and post-hospitalisation expenses", "Ambulance charges", "Daycare treatments", "Modern treatments", "AYUSH treatments"]

const Healthpolicy = () => {
    return (
        <div>
            <div className='w-11/12 flex flex-col mx-auto py-10'>
                <div className='flex flex-col gap-y-10'>
                    <h1 className='text-5xl text-center font-bold tracking-wide'>
                        Coverage under Health <span className='text-blue-500 underline underline-offset-8'>Insurance policies</span>
                    </h1>
                    <p className='text-lg max-w-2xl mx-auto text-center'>
                        Indemnity-based health plans cover the actual medical bills that you incur in a medical emergency. Here are the basic medical expenses that are covered under basic indemnity-based Health Insurance plans:
                    </p>
                    <div className='grid grid-cols-1 mx-auto sm:grid-cols-2  lg:grid-cols-3 gap-x-5 gap-y-5'>
                        {policy.map((p, index) => (
                            <div key={index} className=' flex items-center p-2 gap-x-5 text-gray-600 max-w-2xl'>
                                <GoDot size={30} />{p}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='py-10'>
                    <h1 className='text-center text-lg text-blue-500 mb-5'>Inpatient hospitalisation that includes:</h1>
                    <div className='grid grid-cols-1 mx-auto sm:grid-cols-2  lg:grid-cols-3 gap-x-5 gap-y-5'>
                        {hospitalisation.map((p, index) => (
                            <div key={index} className=' flex items-center p-2 gap-x-5 text-gray-600 max-w-2xl'>
                                <GoDot size={30} />{p}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-gray-50 py-10'>
                <div className='w-11/12 flex flex-col mx-auto'>
                    <div className='flex flex-col gap-y-10'>
                        <h1 className=' text-5xl text-center font-bold tracking-wide'>What don't Health Insurance <span className='text-blue-500 underline underline-offset-8'>plans cover?</span> </h1>
                        <p className=' text-lg max-w-2xl mx-auto text-center'>Despite the broad scope of coverage, there are certain instances that health plans don't cover. Such models are called policy exclusions. Standard exclusions include the following:</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-5'>
                            {
                                plans.map((p, index) => (
                                    <div key={index} className='  flex items-center p-2 gap-x-5 text-gray-600 max-w-2xl'><GoDot size={30} className='w-fit' /><span>{p}</span></div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-11/12 flex flex-col mx-auto py-10'>
                    <h1 className='text-5xl text-center font-bold tracking-wide'>The concept of the waiting period in <span className='text-blue-500 '>Health Insurance </span></h1>
                    <div className='flex flex-col gap-y-5 py-10'>
                        <p className='text-sm max-w-2xl mx-auto text-center'>Almost every Health Insurance policy has a waiting period clause. A waiting period is a period when you don’t get coverage. Once the waiting period is over, coverage is allowed.
                        </p>
                        <p className='text-sm max-w-2xl mx-auto text-center'>The waiting period is applicable in several instances. The most important one is the waiting period for pre-existing illness. If you have any illness when taking an insurance policy, like diabetes or hypertension, medical complications from such illnesses would be covered after the waiting period.</p>
                        <p className='text-sm max-w-2xl mx-auto text-center'>Other waiting periods that you would find would be:</p>
                    </div>
                    <div className='flex flex-col lg:flex-row mx-auto gap-x-10 p-5 gap-y-10'>
                            <div className='space-y-5 border-r-2 pr-10'>
                                <h1 className='text-lg text-blue-500'>Initial waiting period</h1>
                                <p className='text-gray-600 max-w-sm'>The waiting period is applicable for all illnesses except accidental injuries. The waiting period is usually 30 days.</p>
                            </div>
                            <div className='space-y-5  border-r-2 pr-10'>
                                <h1 className='text-lg text-blue-500'>Specific Specific illnesses</h1>
                                <p className='text-gray-600 max-w-sm'>Waiting period for specific illnesses like hernia, fistula, tonsillectomy, cataract, etc.</p>
                            </div>
                            <div className='space-y-5'>
                                <h1 className='text-lg text-blue-500 pr-10'>Maternity cover</h1>
                                <p className='text-gray-600 max-w-sm'>Waiting period for maternity cover</p>
                            </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-11/12 flex flex-col mx-auto py-10'>
                    <h1 className='text-5xl text-center font-bold tracking-wide'>Health Insurance<span className='text-blue-500'>and tax benefits</span></h1>
                    <p className=' text-center text-md my-5 max-w-5xl mx-auto'>Health plans give distinct tax advantages. The premium that you pay for the policy is allowed as a deduction from your taxable income. The deduction is available under Section 80D. The limit of deduction is as follows:</p>
                    <div className='flex flex-col gap-y-5'>
                        <h1 className='text-2xl text-center font-medium text-blue-500 p-2'>For spouse and dependents</h1>
                        <p className=' text-xl text-center'>If you take a policy for yourself, your spouse, and dependent children, the deduction is Rs. 25,000 if you are below 60 years of age.</p>
                        <table className='w-fit mx-auto'>
                            <thead className='text-center border'>
                                <tr className=''>
                                    <th className='text-blue-500'>Age of the insured</th>
                                    <th className='text-blue-500'>Maximum deduction</th>
                                </tr>
                            </thead>
                            <thead className='text-center border'>
                                <tr className='border p-4'>
                                    <td>Below 60 years</td>
                                    <td>Rs. 25,000</td>
                                </tr>
                                <tr className='border p-4'>
                                    <td>Between 60 and 80 years</td>
                                    <td>Rs. 50,000</td>
                                </tr>
                                <tr className='border p-4'>
                                    <td>Above 80 years</td>
                                    <td>Rs. 1,00,000</td>
                                </tr>
                            </thead>
                        </table>
                        <div className='flex flex-col gap-y-5 text-center text-pink-500'>
                             <p>So, you can claim a deduction of up to Rs.75,000* through medical insurance premiums if you take insurance policy for yourself and your parents, and both of them are senior citizens.</p>
                             <p className=' text-red-500'>*Tax benefits are subject to change in tax laws</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Healthpolicy
