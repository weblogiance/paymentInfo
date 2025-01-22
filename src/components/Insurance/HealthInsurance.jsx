import React from 'react'
import Fillbutton from '../../models/Fillbutton'
import Healthbenefit from './Healthbenefit'

const HealthInsurance = () => {
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
        <div className="bg-gray-50 py-12 px-5 md:px-20">
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
       <Healthbenefit/>
    </div>
  )
}

export default HealthInsurance
