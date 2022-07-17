import React, { useState } from "react";
import DropBox from "../../assets/HP_Black_RGB_150_MD.png";
import Sophos from "../../assets/sophos.png";
import ETranzact from "../../assets/eTranzact Logo.47578ea7.png";
import Itex from "../../assets/itex.png";
import "./style.css";
import LottieFile from "../../assets/39610-design.json";
import lottie from "lottie-web";

const SectionOne = () => {
  React.useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector("#react-logo-now"),
      animationData: LottieFile,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
    return () => instance.destroy();
  }, []);
  return (
    <div className="min-h-[calc(90vh)]  lg:max-w-[73%] mx-auto pt-12 xl:bg-white">
      <div className="container text-left d-flex my-10 flex-wrap  items-center xl:py-10 pt-48 -mt-40 sm:pt-0 sm:mt-10 first-section xl:shadow-lg  pl-10 xl:rounded-2xl relative">
        <div className="w-full xl:w-1/2  xl:pr-20    mb-10">
          <h1 className="text-6xl font-bold add-app-red text-[#031759]">
            Building digital products, brands & experience
          </h1>
          <p className="text-3xl mt-10 text-[#031759] ">
            Technology solutions to improve lives
          </p>
          <a href="tel:+23412718630">
            <button className="app-btn text-white py-3 px-10 mt-10">
              Contact Us
            </button>
          </a>
        </div>
        <div className="w-full xl:w-1/2 flex xl:justify-end justify-center">
          <div className=" xl:absolute -bottom-16 -right-16  xl:w-[600px] w-[50%]  xl:h-[600px] rounded-full bg-red-200 flex justify-center items-center">
            <div id="react-logo-now" />
          </div>
        </div>
      </div>
      <p className="text-3xl text-center mb-10">Our Partners</p>
      <div className="rounded-3xl w-9/12 min-h-[86px] bg-[#F6F6F6] mx-auto  flex justify-center items-center flex-wrap mb-20">
        <img src={DropBox} alt="" width="83px" className="m-10 grayscale" />
        <img src={Sophos} alt="" height="48px" className="m-10 grayscale" />
        <img
          src={Itex}
          alt=""
          width="163px"
          height="48px"
          className="m-10 grayscale"
        />
        <img
          src={ETranzact}
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
