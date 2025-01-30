import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { IoIosArrowRoundForward } from "react-icons/io";
import Whyswitch from "./Whyswitch";

import cashback from '../../assets/Photos/cashbackNow.png'
import Android from '../../assets/Photos/Android.svg';
import Apple from '../../assets/Photos/Apple.svg';

import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";



const ourdata = [
  {
    bgimage: "",
    title: "Recharge & Bills",
    services:
    {
      title: "Recharge your phone, pay bills, and more",
      description: "Choose from a variety of services to recharge your phone, pay bills, and more.",
      subservices: [
        {
          subtitle: "Electricity Bills",
          description: "Pay your electricity bills easily and securely.",
          img: "https://i.pinimg.com/736x/ac/08/73/ac0873b5009b5b23663d5e5228566903.jpg"
        },
        {
          subtitle: "Water Bills",
          description: "Quick and hassle-free water bill payments..",
          img: "https://i.pinimg.com/736x/09/40/78/094078c356b33df954bdd20fd809af19.jpg"
        },
        {
          subtitle: "Internet Bills && OTT",
          description: "Pay your internet and OTT bills with ease.",
          img: "https://i.pinimg.com/736x/83/50/e5/8350e590f77a630d5b04f5d69b26b47e.jpg"
        },
        {
          subtitle: "Gas Bills",
          description: "Convenient gas bill payments at your fingertips.",
          img: "https://i.pinimg.com/736x/8a/39/52/8a39526f65cea849f178e12d77d6ab75.jpg"
        },
       
      ]
    }
    ,
    choose: ["Best Prices","All in one place","Easy to Recharge","24/7 Support","Secure Payments","Exclusive Deals","Cashback Rewards"]
  }
]
const ourdata1 = [
  {
    bgimage: "",
    title: "Booking",
    services:
    {
      title: "Your Journey Begins Here",
      description: "Book your perfect trip with our comprehensive travel services.",
      subservices: [
        {
          subtitle: "Hotels",
          description: "Find the perfect stay from our curated selection of hotels.",
          img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000"
        },
        {
          subtitle: "Trains",
          description: "Book train tickets for a comfortable journey across the country.",
          img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1000"
        },
        {
          subtitle: "Buses",
          description: "Choose from thousands of bus routes to your destination.",
          img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000"
        },
        {
          subtitle: "Flights",
          description: "Find the best deals on flights to anywhere in the world.",
          img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000"
        }
      ]
    }
    ,
    choose: ["Best Prices", "Easy Booking", "24/7 Support", "Secure Payments", "Exclusive Deals", "Cashback Rewards"]
  }
]

const ourdata2= [
  {
    bgimage: "",
    title: "Financial & Tax",
    services:
    {
      title: "Protect What Matters Most",
      description: "Protect What Matters Most",
      subservices: [
        {
          subtitle: "Health Insurance",
          description: "Comprehensive health coverage for you and your family",
          img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
        },
        {
          subtitle: "Auto Insurance",
          description: "Protect your vehicle with our comprehensive coverage",
          img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2000"
        },
        {
          subtitle: "Home Insurance",
          description: "Choose from thousands of bus routes to your destination.",
          img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000"
        },
        {
          subtitle: "Life Insurance",
          description: "Ensure your family's future with our life insurance plans",
          img: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&q=80&w=2000"
        }
      ]
    }
    ,
    choose: ["Wide Network Coverage", "Quick Claim Settlement", "Flexible Payment Options", "Digital Policy Management", "No Paperwork Required", "Cashback Rewards"]
  }
]

const Ourservices = () => {

  const [status, setStatus] = React.useState('Bills');
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-12">
      <div className="w-11/12  mx-auto flex flex-col  gap-2">
        <div className="lg:px-12 mt-5">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Integrated suite of payments products
          </h2>
          <p className="text-gray-600 mb-6 lg:max-w-md w-full text-justify">
            Magnis id dictum vehicula laoreet scelerisque varius cubilia ornare,
            sociosqu massa semper habitasse nostra lobortis risus morbi platea.
          </p>
          <div className="flex lg:flex-row flex-col justify-between   ">
            <button className="bg-blue-600 py-3 px-6 border text-white  w-fit h-fit my-auto rounded-lg shadow-md">
              Download Now
            </button>
            <div className="flex lg:gap-x-10 gap-x-4 max-sm:mt-10 max-sm:text-sm  transition-all duration-200 ease-linear">
              <button className={`${status === "Bills" && " bg-gray-200 px-5 py-2 rounded-md text-blue-500 font-medium text-lg "} `} onClick={() => setStatus('Bills')}>Utility Bills</button>
              <button className={`${status === "Booking" && " bg-gray-200 px-5 py-2 rounded-md text-blue-500 font-medium text-lg"} `} onClick={() => setStatus('Booking')}>Booking</button>
              <button className={`${status === "Financial" && " bg-gray-200 px-5 py-2 rounded-md text-blue-500 font-medium text-lg"} `} onClick={() => setStatus('Financial')}>Financial & Tax</button>
            </div>
          </div>
        </div>
        <div>
          {
            status === 'Bills' && (ourdata.map((item, index) => (
              <div key={index} className="flex flex-col gap-8 w-full p-2 ">
                {/* Text Section */}
  
                {/* Image and Slider Section */}
                <div className=" relative flex flex-col md:flex-row  gap-x-6">
                  <div className="w-full flex flex-col md:w-1/3">
                    <img src={cashback} alt="" className="w-full" />
                    <div className="flex gap-x-5  mx-auto">
                         <img src={Android} alt="" width={200} className=" max-sm:w-[100px]" />
                         <img src={Apple} alt="" width={200} className=" max-sm:w-[100px]"/>
                    </div>
                  </div>
                  <Swiper 
                  navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                  }} 
                  modules={[Navigation]} 
                  className="w-full md:w-2/3 mySwiper"
                  >
                    <SwiperSlide >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 pb-10 w-full">
                        {item.services.subservices.map((service, idx) => (
                          <div className="flex flex-col gap-4 border rounded-lg shadow-md">
                            <div className=" w-full min-h-[150px] max-h-[250px] ">
                              <img src={service.img} alt="" className="w-full h-full  object-cover" />
                            </div>
                            <div className="p-4">
                              <h1 className="font-semibold text-xl">{service.subtitle}</h1>
                              <p className="max-w-lg text-gray-600 truncate">{service.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full flex  flex-col">
                        <h1 className=" text-4xl font-bold my-16">Why Choose Us</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-5 w-full">
                          {
                            item.choose.map((item, index) => (
                              <div key={index}>
                                <ul>
                                  <li className=" flex items-center gap-x-5 bg-blue-500/20 px-5 py-2 rounded-md"><IoIosArrowRoundForward color="blue" size={30} />{item}</li>
                                </ul>
                              </div>
                            ))
                          }
                        </div>
                        <div className="w-full items-center mx-auto flex lg:px-5">
                          <Whyswitch />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className=" absolute bottom-0 right-10 flex gap-x-3 z-[2] max-sm:hidden">
                      <span><FaRegArrowAltCircleLeft size={30} className="prev text-blue-500 cursor-pointer"/></span>
                      <span><FaRegArrowAltCircleRight size={30} className="next text-blue-500 cursor-pointer"/></span>
                  </div>
                </div>
              </div>
            )))
          }
          {
            status === 'Booking' && (ourdata1.map((item, index) => (
              <div key={index} className="flex flex-col gap-8 w-full ">
                {/* Text Section */}
  
                {/* Image and Slider Section */}
                <div className=" relative flex flex-col md:flex-row  gap-x-6">
                <div className="w-full flex flex-col md:w-1/3">
                    <img src={cashback} alt="" className="w-full" />
                    <div className="flex gap-x-5  mx-auto">
                         <img src={Android} alt="" width={200} className=" max-sm:w-[100px]" />
                         <img src={Apple} alt="" width={200} className=" max-sm:w-[100px]"/>
                    </div>
                  </div>
                  <Swiper  navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                  }} 
                  modules={[Navigation]}  className="w-full md:w-2/3 mySwiper">
                    <SwiperSlide >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 pb-10 w-full">
                        {item.services.subservices.map((service, idx) => (
                          <div className="flex flex-col gap-4 border rounded-lg shadow-md">
                            <div className=" w-full min-h-[150px] max-h-[250px] ">
                              <img src={service.img} alt="" className="w-full h-full  object-cover" />
                            </div>
                            <div className="p-4">
                              <h1 className="font-semibold text-xl">{service.subtitle}</h1>
                              <p className="max-w-lg text-gray-600 truncate">{service.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full flex  flex-col">
                        <h1 className=" text-4xl font-bold my-16">Why Choose Us</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 w-full">
                          {
                            item.choose.map((item, index) => (
                              <div key={index}>
                                <ul>
                                  <li className=" flex items-center gap-x-5 bg-blue-500/20 px-5 py-2 rounded-md"><IoIosArrowRoundForward color="blue" size={30} />{item}</li>
                                </ul>
                              </div>
                            ))
                          }
                        </div>
                        <div className="w-full items-center mx-auto flex px-5">
                          <Whyswitch />
                        </div>
                      </div>
                    </SwiperSlide>
                    <div className=" absolute bottom-0 right-10 flex gap-x-3 z-[2] max-sm:hidden">
                      <span><FaRegArrowAltCircleLeft size={30} className="prev text-blue-500 cursor-pointer"/></span>
                      <span><FaRegArrowAltCircleRight size={30} className="next text-blue-500 cursor-pointer"/></span>
                  </div>
                  </Swiper>
                </div>
              </div>
            )))
          }
           {
            status === 'Financial' && (ourdata2.map((item, index) => (
              <div key={index} className=" relative flex flex-col gap-8 w-full ">
                {/* Text Section */}
  
                {/* Image and Slider Section */}
                <div className="  flex flex-col md:flex-row  gap-x-6">
                <div className="w-full flex flex-col md:w-1/3">
                    <img src={cashback} alt="" className="w-full" />
                    <div className="flex gap-x-5  mx-auto">
                         <img src={Android} alt="" width={200} className=" max-sm:w-[100px]" />
                         <img src={Apple} alt="" width={200} className=" max-sm:w-[100px]"/>
                    </div>
                  </div>
                  <Swiper  navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                  }} 
                  modules={[Navigation]} className="w-full md:w-2/3 mySwiper">
                    <SwiperSlide >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 pb-10 w-full">
                        {item.services.subservices.map((service, idx) => (
                          <div className="flex flex-col gap-4 border rounded-lg shadow-md">
                            <div className=" w-full min-h-[150px] max-h-[250px] ">
                              <img src={service.img} alt="" className="w-full h-full  object-cover" />
                            </div>
                            <div className="p-4">
                              <h1 className="font-semibold text-xl">{service.subtitle}</h1>
                              <p className="max-w-lg text-gray-600 truncate">{service.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full flex  flex-col">
                        <h1 className=" text-4xl font-bold my-16">Why Choose Us</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 w-full">
                          {
                            item.choose.map((item, index) => (
                              <div key={index}>
                                <ul>
                                  <li className=" flex items-center gap-x-5 bg-blue-500/20 px-5 py-2 rounded-md"><IoIosArrowRoundForward color="blue" size={30} />{item}</li>
                                </ul>
                              </div>
                            ))
                          }
                        </div>
                        <div className="w-full items-center mx-auto flex px-5">
                          <Whyswitch />
                        </div>
                      </div>
                    </SwiperSlide>
                    <div className=" absolute bottom-0 right-10 flex gap-x-3 z-[2] max-sm:hidden">
                      <span><FaRegArrowAltCircleLeft size={30} className="prev text-blue-500 cursor-pointer"/></span>
                      <span><FaRegArrowAltCircleRight size={30} className="next text-blue-500 cursor-pointer"/></span>
                  </div>
                  </Swiper>
                </div>
              </div>
            )))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Ourservices
