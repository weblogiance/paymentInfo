import React from 'react'
import { MdOutlineElectricBolt } from "react-icons/md";

const Overservices = () => {
     const services = [
          {
               service: "Recharge",
               listofservice: [
                    { name: "Mobile Recharge", icon: "" },
                    { name: "OTT Recharge", icon: "" },
                    { name: "DTH/Cable Tv", icon: "" },
                    { name: "FASTag Recharge", icon: "" },
                    { name: "Metro Card Recharge", icon: "" }
               ],
               bannerImage: ""
          },
          {
               service: "Utility Bills",
               listofservice: [
                    { name: "Electricity", icon: "" },
                    { name: "Broadband / Landline", icon: "" },
                    { name: "Water ", icon: "" },
                    { name: "Gas cylinder", icon: "" },
                    { name: "Piped Gas", icon: "" }
               ],
               bannerImage: ""
          },
          {
               service: "Booking ",
               listofservice: [
                    { name: "Bus Booking", icon: "" },
                    { name: "Flight Booking", icon: "" },
                    { name: "DTH/Cable Tv", icon: "" },
                    { name: "Hotel Booking", icon: "" },
                    { name: "Movie ticket", icon: "" }
               ],
               bannerImage: ""
          },
          {
               service: "Financial & Tax",
               listofservice: [
                    { name: " Vehicle insurance", icon: "" },
                    { name: "Health insurance", icon: "" },
                    { name: "Loan EMI payment", icon: "" },
                    { name: "Municipality Tax", icon: "" },
                    { name: "LIC of India", icon: "" },
                    { name: "Credit card payment", icon: "" }
               ],
               bannerImage: ""
          }
     ]
     return (
          <div className='relative w-full my-10'>
               <div className='  w-11/12 flex flex-col items-center mx-auto'>
                    {
                         services.map((list, index) => (
                              <>
                                   <h1 className='text-5xl font-bold tracking-wide my-12 underline underline-offset-[18px]'>{list.service}</h1>
                                   <div className={`flex justify-between items-center ${index % 2 === 0 && "flex-row-reverse"}  w-full mx-auto`}>
                                        <div className={`flex flex-col`}>

                                             <div className='grid grid-cols-2  z-[1] rounded-xl p-5 gap-2'>
                                                  {
                                                       list.listofservice.map((ser) => (
                                                            <div className='flex flex-col p-2 gap-y-1'>
                                                                 <span className=' text-blue-400'><MdOutlineElectricBolt size={55} /></span>
                                                                 <h1 className=' text-xl font-semibold tracking-wide'>{ser.name}</h1>
                                                                 <p className=" text-justify max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consectetur temporibus quisquam quam dignissimos eligendi exercitationem non vel sint fuga ab, excepturi neque quis numquam itaque quaerat. Reprehenderit, sit nisi!</p>
                                                            </div>
                                                       ))
                                                  }
                                             </div>
                                        </div>
                                        <div className={`absolute ${index % 2 === 0 ? "left-12" : "right-10"} flex`}>
                                             <img src="https://paytmpayments.com/s3assets/images/bank-offer/Group121169.webp?version=1736962791" alt="" className=' w-full bg-cover' />
                                        </div>
                                   </div>
                              </>
                         ))
                    }
               </div>
          </div>
     )
}

export default Overservices
