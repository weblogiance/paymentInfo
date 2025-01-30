import React from 'react'


import allservice from '../../assets/Photos/allservices-removebg-preview.png'
import cashback from '../../assets/Photos/getcashback-removebg.png'
import wallet from '../../assets/Photos/wallet-removebg-preview.png'
import language from '../../assets/Photos/selectlanguage-removebg-preview.png'

const about = [
    {
        title:"One app for all your payments service.",
        description:"From utility bills, mobile & DTH recharge, sending & requesting money, to paying your credit card bill and insurance premium. You can do all this and more on the PhonePe app.",
        image:allservice
    },
    {
        title:"Your reward and cashback direct transfer to your bankaccount.",
        description:"Just link your bank account to the PhonePe app and make hassle-free, secure payments directly from your bank account 24/7. Your money is always in your bank, not locked in a wallet.",
        image:cashback
    },
    {
        title:"Multiple payment modes.",
        description:"Choose from options like UPI enabled bank account, PhonePe wallet, Debit and Credit Cards to make seamless payments daily.",
        image:wallet
    },
    {
        title:"We speak your language.",
        description:"PhonePe is multilingual. Choose from Kannada, Marathi, Bengali, English, Hindi, Tamil, Gujarati, Telugu, Malayalam, Assamese, and Odia languages to transact easily on the app.",
        image:language
    }
]
const FillPe = () => {
  return (
    <div className=''>
        <div className='w-11/12 mx-auto my-20'>
            <h1 className=' max-sm:text-2xl max-sm:leading-10 text-5xl text-center tracking-wide font-bold bg-gradient-to-t to-blue-800 from-blue-500 w-fit mx-auto text-transparent bg-clip-text'>Accept Payments at Zero Cost with FillPe</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  gap-8 lg:mt-20 mt-10'>
                {
                    about.map((item,index)=>(
                        <div
            
                        className={`flex lg:flex-row flex-col gap-y-3 justify-between  gap-x-5 relative lg:px-12  items-center   `}
                      >
                                        {/* Image Section */}
                        <div className="max-sm:w-[140px] w-[340px] overflow-hidden z-[2]">
                          <img
                            src={wallet}
                            alt=""
                            className="w-[240px]  mx-auto object-cover rounded-md"
                          />
                        </div>
                        
                        {/* Text Section */}
                        <div className="flex w-full  flex-col  bgcomponent gap-y-5 rounded-md border shadow-md p-5  ">
                          
                          <h1 className="text-blue-500 font-medium text-2xl sm:text-3xl max-w-lg">
                             {item.title}
                          </h1>
                          <p className="max-w-md text-justify text-sm sm:text-base">{item.description}</p>
                        </div>
          
          
                      </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default FillPe
