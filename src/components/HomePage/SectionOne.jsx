import React from "react";
import DropBox from "../../assets/HP_Black_RGB_150_MD.png";
import Sophos from "../../assets/sophos.png";
import ETranzact from "../../assets/eTranzact Logo.47578ea7.png";
import Itex from "../../assets/itex.png";
import "./style.css";
import Lottie from "react-lottie";
import * as LottieFile from "../../assets/39610-design.json";

const SectionOne = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="min-h-[calc(80vh)]  max-w-[1300px] mx-auto ">
      <div className="container d-flex my-10 flex-wrap  items-center lg:py-10 pt-48 -mt-40 sm:pt-0 sm:mt-10 first-section sm:shadow-lg  pl-10 sm:rounded-2xl relative">
        <div className="w-full md:w-1/2  lg:pr-20 md:text-left mb-10">
          <h1 className="text-6xl font-bold">
            Building digital products, brands & experience
          </h1>
          <p className="text-3xl mt-10 ">
            Technology solutions to improve lives
          </p>
          <button className="app-btn text-white py-3 px-10 mt-10">
            Contact Us
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-end ">
          <div className="bg-opacity-70 absolute -bottom-16 -right-16  w-[600px] h-[600px] rounded-full bg-red-200 flex justify-center items-center">
            <Lottie
              options={defaultOptions}
              isStopped={false}
              isPaused={false}
              className="z-10"
            />
          </div>
        </div>
      </div>
      <p className="text-3xl text-center text-gray-500 mb-10">Our Partners</p>
      <div className="rounded-3xl w-9/12 min-h-[86px] bg-[#F6F6F6] mx-auto  flex justify-center items-center flex-wrap mb-20">
        <img
          src={ETranzact}
          alt=""
          width="163px"
          height="48px"
          className="m-10 grayscale"
        />
        <img src={Sophos} alt="" height="48px" className="m-10 grayscale" />
        <img src={DropBox} alt="" width="83px" className="m-10 grayscale" />
        <img
          src={Itex}
          alt=""
          width="163px"
          height="48px"
          className="m-10 grayscale"
        />
      </div>
    </div>
  );
};

export default SectionOne;
