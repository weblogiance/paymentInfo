import React, { useState } from "react";
import { FaFighterJet } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import { GiHealthCapsule } from "react-icons/gi";
import { FaShieldAlt, FaFileAlt, FaHospitalAlt, FaNotesMedical } from 'react-icons/fa';

const HealthInsuranceStep = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleStepChange = (step) => {
        setCurrentStep(step);
    };
    
    const steps = [
        {
            id: 1,
            title: "Select 'Health' Insurance",
            description:
                "Select the Insurance tab and choose a Health Insurance type",
            image: "https://www.phonepe.com/webstatic/8556/static/c04962c44b332166c1b9e9264e46b646/7f6e7/RenewHealth_Ins_Web_1%402x.png",
        },
        {
            id: 2,
            title: "Enter Details",
            description:
                "Select the persons you wish to insure, cover amount & postal code",
            image: "https://www.phonepe.com/webstatic/8556/static/a73838d472c04d69d057192e5487893b/40ffe/RenewHealth_Ins_Web_2%402x.png",
        },
        {
            id: 3,
            title: "Select Plan & Add additional details",
            description:
                "Select the plan & add additional details such as nominee details",
            image: "https://www.phonepe.com/webstatic/8556/static/1cb1e458ad2f86a7480ab63fbd89fb58/40ffe/RenewHealth_Ins_Web_4%402x.png",
        },
        {
            id: 4,
            title: "Health Declaration",
            description: "Provide a health declaration as required",
            image: "https://www.phonepe.com/webstatic/8556/static/a5eb4a085ce57fcee3071d0eb6298a95/40ffe/RenewHealth_Ins_Web_7%402x.png",
        },
        {
            id: 5,
            title: "Make Payment",
            description: "Complete the payment to finalize the insurance purchase",
            image: "https://www.phonepe.com/webstatic/8556/static/927e87b7db347f498705a17211a3a7f2/40ffe/RenewHealth_Ins_Web_8%402x.png",
        },
        {
            id: 6,
            title: "Cashback and Rewards",
            description: " after Complete the payment to finalize the insurance purchase will be get Rewards.",
            image: "https://www.phonepe.com/webstatic/8556/static/927e87b7db347f498705a17211a3a7f2/40ffe/RenewHealth_Ins_Web_8%402x.png",
        },
    ];
    return (
        <div>
             <div className=" py-20 px-5 sm:px-10 lg:px-20">
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-700 mb-8">
        Claiming from your Health Insurance Plan
      </h1>
      <p className="text-center text-gray-600 mb-10">
        When you incur a claim in your Health Insurance plan, there is a process that you should follow. Here's a look:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mb-4">
            <FaShieldAlt className="text-purple-700 text-3xl" />
          </div>
          <h2 className="font-bold text-lg mb-2">Inform the Insurance Company</h2>
          <p className="text-gray-600 text-sm">
            Inform the insurance company immediately if you incur a claim.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-pink-100 rounded-full mb-4">
            <FaFileAlt className="text-pink-700 text-3xl" />
          </div>
          <h2 className="font-bold text-lg mb-2">Submit a Pre-Authorization Claim Form</h2>
          <p className="text-gray-600 text-sm">
            If you get hospitalized in a network hospital, submit a pre-authorization form for cashless claims.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4">
            <FaHospitalAlt className="text-orange-700 text-3xl" />
          </div>
          <h2 className="font-bold text-lg mb-2">Non-Networked Hospital</h2>
          <p className="text-gray-600 text-sm">
            Pay the bills yourself and later submit them for reimbursement.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mb-4">
            <FaNotesMedical className="text-teal-700 text-3xl" />
          </div>
          <h2 className="font-bold text-lg mb-2">Submit All Medical Bills</h2>
          <p className="text-gray-600 text-sm">
            Submit all your medical bills and documents to settle the claim.
          </p>
        </div>
      </div>

      {/* Flow Line */}
      <div className="relative mt-10">
        <div className="h-1 bg-purple-300 absolute inset-x-0 top-1/2 transform -translate-y-1/2"></div>
        <div className="grid grid-cols-4 gap-10">
          <div className="w-6 h-6 bg-purple-700 rounded-full mx-auto"></div>
          <div className="w-6 h-6 bg-pink-700 rounded-full mx-auto"></div>
          <div className="w-6 h-6 bg-orange-700 rounded-full mx-auto"></div>
          <div className="w-6 h-6 bg-teal-700 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
            <div className="flex flex-col mx-auto items-center justify-center bg-gradient-to-r to-gray-500 from-inherit  ">
                <div className="w-11/12 mx-auto   p-6 bg-white rounded-lg ">
                    <div className="flex flex-col gap-y-5 mb-20">
                          <h1 className=" text-5xl mx-auto w-full text-center font-bold tracking-wide max-w-4xl leading-tight">Getting or renewing Health Insurance <span className=" text-blue-500"> the [App Name] way</span></h1>
                          <p className=" text-gray-500 text-center text-lg max-w-xl mx-auto">PhonePe offers you a convenient platform to get or renew your Health Insurance plan. Here are the steps on how you can get a Health Insurance span plan from [App Name]:</p>
                    </div>
                    <div className="flex w-10/12 mx-auto justify-between  flex-col lg:flex-row gap-24">
                        {/* Steps Navigation */}
                        <div className=" flex w-[50%] flex-col gap-4">
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
                                        Step {step.id}/6
                                    </h2>
                                    <p className="text-gray-600">{step.title}</p>
                                </button>
                            ))}
                        </div>

                        {/* Step Details */}
                        <div className="w-[50%]  items-center justify-center flex flex-col gap-6">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className={`transition-opacity duration-500 ease-in-out ${currentStep === step.id ? "opacity-100" : "opacity-0 hidden"
                                        }`}
                                >
                                    <h1 className="text-2xl font-bold text-blue-600 mb-4  mx-auto text-center">
                                        {step.title}
                                    </h1>
                                    <p className="text-gray-700 mb-6 mx-auto font-medium max-w-md flex items-center gap-x-2 px-2 text-center">{step.description}</p>
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

export default HealthInsuranceStep
