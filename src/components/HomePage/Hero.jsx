
import React from "react";
import hero from '../../assets/Photos/cashback.png'
import hero1 from '../../assets/Photos/Android.svg'
import hero2 from '../../assets/Photos/Apple.svg'
import Fillbutton from "../../models/Fillbutton";

const Hero = () => {
  return (
    <div className="mt-16 w-full" style={{background:"url('https://png.pngtree.com/thumb_back/fh260/back_our/20200701/ourmid/pngtree-cash-back-5-yuan-background-material-image_344250.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
        <div className=" w-11/12 mx-auto flex justify-between   px-10">
          
          <div className="  flex flex-col justify-center items-start gap-y-10 ">
                <div className="flex flex-col gap-y-2">
                      <h1 className=" max-w-2xl leading-[5.5rem] text-6xl font-bold">Accept payments for your online business at <span className=" text-blue-500 flex px-2 bg-white rounded-r-full text-[3rem] pr-10"> zero cost And Cashback</span></h1>
                      <p className="text-lg font-semibold text-red-900">Sign up to get up to 50% cashback.</p>
                </div>
                <Fillbutton text="Claim Now" />
          </div>
         
           <div className=" relative w-[50%] items-center flex justify-center mx-auto rounded-3xl">
                <img src={hero} alt=""  className="w-[750px]  relative -top-24 left-32" />
                <div className=" absolute bottom-24 left-32  flex justify-center items-center gap-10">
                      <img src={hero1} alt="" width={200} className=" cursor-pointer"/>
                      <img src={hero2} alt="" width={200} className=" cursor-pointer"/>
                </div>
           </div>
        </div>
    </div>
  );
};

export default Hero;
