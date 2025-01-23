import React from "react";
import hero from '../../assets/Photos/cashback.png';
import hero1 from '../../assets/Photos/Android.svg';
import hero2 from '../../assets/Photos/Apple.svg';
import Fillbutton from "../../models/Fillbutton";

const Hero = () => {
  return (
    <div
      className="mt-16 w-full"
      style={{
        background: "url('https://png.pngtree.com/thumb_back/fh260/back_our/20200701/ourmid/pngtree-cash-back-5-yuan-background-material-image_344250.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center px-5 lg:px-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center lg:items-start items-center gap-y-8 lg:gap-y-10 text-center lg:text-left">
          <div className="flex flex-col gap-y-4 max-sm:mt-3">
            <h1 className="max-w-2xl leading-tight lg:leading-[5.5rem] text-3xl lg:text-6xl font-bold">
              Accept payments for your online business at{" "}
              <span className="text-blue-500 flex px-2 lg:py-5 bg-white rounded-r-full text-2xl lg:text-[3rem] pr-5 lg:pr-10">
                zero cost And Cashback
              </span>
            </h1>
            <p className="text-base lg:text-lg font-semibold text-red-900">
              Sign up to get up to 50% cashback.
            </p>
          </div>
          <Fillbutton text="Claim Now" />
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-[50%] flex justify-center items-center mt-10 lg:mt-0">
          <img
            src={hero}
            alt="Cashback"
            className="w-[90%] sm:w-[600px] lg:w-[750px] relative -top-12 lg:-top-24 lg:left-32"
          />
          <div className="absolute bottom-10 sm:bottom-24 lg:bottom-24 lg:left-32 flex justify-center items-center gap-5 sm:gap-10">
            <img
              src={hero1}
              alt="Android"
              width={150}
              className="cursor-pointer"
            />
            <img
              src={hero2}
              alt="Apple"
              width={150}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
