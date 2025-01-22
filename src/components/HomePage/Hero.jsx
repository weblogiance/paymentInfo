
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination ,Autoplay } from 'swiper/modules';

const Hero = () => {
  return (
    <div className="mt-16 w-full">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay
        speed={3000}
        loop ="true"
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className=" relative w-full border">
          <div className=" absolute w-full h-[60vh] bg-blue-900/50"></div>
           <div className="flex border w-full max-h-[60vh] overflow-hidden  ">
                <img src="https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-payments-link.png" alt="" className="w-full" />
           </div>
          <div className=" absolute flex flex-col  top-[50%] left-[30%] -translate-x-[50%] -translate-y-[50%] ">
                <div className="flex flex-col gap-y-3">
                      <h1 className=" max-w-xl text-4xl font-bold text-[#3e9c7d]">Accept payments for your online business at zero cost</h1>
                      <p className="text-lg text-green-800 font-semibold">Sign up to get up to 50% cashback.</p>
                </div>
                <button className=" text-start mt-5 text-white bg-blue-500 py-2 px-5 rounded-md w-fit tracking-wide capitalize font-bold">claim Now</button>  
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative w-full border">
          <div className=" absolute w-full h-[60vh] bg-blue-900/50"></div>
           <div className="flex border w-full max-h-[60vh] overflow-hidden  ">
                <img src="https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-payments-link.png" alt="" className="w-full" />
           </div>
          <div className=" absolute flex flex-col  top-[50%] left-[30%] -translate-x-[50%] -translate-y-[50%] ">
                <div className="flex flex-col gap-y-3">
                      <h1 className=" max-w-xl text-4xl font-bold text-[#3e9c7d]">Accept payments for your online business at zero cost</h1>
                      <p className="text-lg text-green-800 font-semibold">Sign up to get up to 50% cashback.</p>
                </div>
                <button className=" text-start mt-5 text-white bg-blue-500 py-2 px-5 rounded-md w-fit tracking-wide capitalize font-bold">claim Now</button>  
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative w-full border">
          <div className=" absolute w-full h-[60vh] bg-blue-900/50"></div>
           <div className="flex border w-full max-h-[60vh] overflow-hidden  ">
                <img src="https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-payments-link.png" alt="" className="w-full" />
           </div>
          <div className=" absolute flex flex-col  top-[50%] left-[30%] -translate-x-[50%] -translate-y-[50%] ">
                <div className="flex flex-col gap-y-3">
                      <h1 className=" max-w-xl text-4xl font-bold text-[#3e9c7d]">Accept payments for your online business at zero cost</h1>
                      <p className="text-lg text-green-800 font-semibold">Sign up to get up to 50% cashback.</p>
                </div>
                <button className=" text-start mt-5 text-white bg-blue-500 py-2 px-5 rounded-md w-fit tracking-wide capitalize font-bold">claim Now</button>  
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
     
    </div>
  );
};

export default Hero;
