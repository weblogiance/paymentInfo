
import React from "react";
import hero from '../../assets/Photos/cashback.png'
import hero1 from '../../assets/Photos/Android.svg'
import hero2 from '../../assets/Photos/Apple.svg'
import Fillbutton from "../../models/Fillbutton";

const Hero = () => {
  return (
    <div className="mt-20 w-full">
        <div className=" w-11/12 mx-auto flex justify-between px-10">
          
          <div className="  flex flex-col justify-center gap-y-10 ">
                <div className="flex flex-col gap-y-2">
                      <h1 className=" max-w-2xl leading-tight text-6xl font-bold ">Accept payments for your online business at <span className=" text-blue-500"> zero cost</span></h1>
                      <p className="text-lg font-semibold text-gray-500">Sign up to get up to 50% cashback.</p>
                </div>
                <Fillbutton text="Claim Now" />
          </div>
           <div className=" relative  rounded-3xl" style={{background:"rgb(215,226,238)",background:"radial-gradient(circle, rgba(215,226,238,1) 0%, rgba(17,57,103,1) 56%)"}}>
                <img src={hero} alt=""  className="w-[650px]" />
                <div className=" absolute bottom-0">
                      <img src={hero1} alt="" width={200} className=" relative -left-20 bottom-1 cursor-pointer"/>
                      <img src={hero2} alt="" width={200} className=" relative -left-10 -bottom-5 cursor-pointer"/>
                </div>
           </div>
        </div>
    </div>
  );
};

export default Hero;
