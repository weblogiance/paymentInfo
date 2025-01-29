import React from "react";
import hero from '../../assets/Photos/Home screen.png';
import hero1 from '../../assets/Photos/Android.svg';
import hero2 from '../../assets/Photos/Apple.svg';
import Fillbutton from "../../models/Fillbutton";
import Hero2 from "../../assets/Photos/wallet-removebg-preview.png" 

const Hero = () => {
  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/your-app', '_blank');
  };

  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/your-app', '_blank');
  };
  return (
    <div
      className="mt-16 w-full"
      style={{
        background: "url('https://i.pinimg.com/736x/46/da/81/46da81f877b6521253542a5204379475.jpg')",
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
              <span className="text-white flex px-2 lg:py-5 bg-blue-500 rounded-r-full text-2xl lg:text-[3rem] pr-5 lg:pr-10">
                zero cost And Cashback
              </span>
            </h1>
            <p className="text-base lg:text-lg font-semibold text-red-900">
              Download to get up to 50% cashback.
            </p>
          </div>
          <Fillbutton text="Download Now" />
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden w-full lg:w-[50%] flex justify-center items-center mt-10 lg:mt-0">
         <div className=" w-[155px] lg:w-[355px] mb-5">
            <img
                src={Hero2}
                alt="Cashback"
                className="w-[90%] z-[2] sm:w-[600px] lg:w-[650px] relative  lg:left-32"
              />
              <img
                src={hero}
                alt="Cashback"
                className=" absolute w-[120px]  top-10 left-[200px] sm:w-[600px] lg:w-[355px]   lg:left-32"
              />
         </div>
          <div className="absolute bottom-2  sm:bottom-24 lg:bottom-20 z-[2] lg:right-10 flex lg:flex-col justify-center items-center gap-5 sm:gap-10">
            <img
              src={hero1}
              alt="Android"
              width={150}
              onClick={handlePlayStoreClick}
              className="cursor-pointer"
            />
            <img
              src={hero2}
              alt="Apple"
              width={150}
              onClick={handleAppStoreClick}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
