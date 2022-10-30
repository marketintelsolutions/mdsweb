import React, { useState } from "react";
import hp from "../../assets/hp.png";
import Sophos from "../../assets/sophos.png";
import ETranzact from "../../assets/tranzact.png";
import Itex from "../../assets/itex.png";
import "./style.css";
import LottieFile from "../../assets/39610-design.json";
import monitor from '../../assets/monitor.png'
// import lottie from "lottie-web";

const SectionOne = () => {
  // React.useEffect(() => {
  //   const instance = lottie.loadAnimation({
  //     container: document.querySelector("#react-logo-now"),
  //     animationData: LottieFile,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //   });
  //   return () => instance.destroy();
  // }, []);
  return (
    <div className="min-h-[calc(90vh)]  w-full pt-12 xl:bg-white">
      <div className="flex justify-between lg:max-w-[73%] mx-auto bg-[#FF3B00] p-10 mb-10 opacity-70 rounded-3xl h-auto">
          <div className="text-white w-8/12">
              <h2 className="font-bold text-4xl mb-3 tracking-wider">Building digital products, brands & experience</h2>
              <p className='mb-14'>Technology solutions to improve lives</p>

              <button className="rounded-2xl bg-white text-black p-2">Contact Us</button>
          </div>

        <div className='w-6/12'>
            <img src={monitor} alt="" className='w-full' />
          </div>
      </div>
      {/* <div className="container h-[450px] text-left d-flex my-10 flex-wrap  items-center xl:py-10 pt-48 -mt-40 sm:pt-0 sm:mt-10 first-section xl:shadow-lg  pl-10 xl:rounded-2xl relative">
        <div className="w-full xl:w-1/2  xl:pr-20    mb-10">
          <h1 className="text-4xl font-bold add-app-red text-white">
            Building digital products, brands & experience
          </h1>
          <p className="text-xl mt-10 text-white">
            Technology solutions to improve lives
          </p>
          <a href="tel:+23412718630">
            <button className="app-btn text-white bg-white py-3 px-10 mt-10">
              Contact Us
            </button>
          </a>
        </div>
        <div className="w-full xl:w-1/2 flex xl:justify-end justify-center">
          <div className=" xl:absolute -bottom-16 -right-16  xl:w-[500px] w-[50%]  xl:h-[500px] rounded-full bg-red-200 flex justify-center items-center">
            <div id="react-logo-now" />
          </div>
        </div>
      </div> */}
      <p className="text-3xl text-center mb-10">Our Partners</p>
      <div className="w-full min-h-[86px] bg-[#F6F6F6] mx-auto  flex justify-center items-center flex-wrap mb-20">
        <img
          src={hp}
          alt=""
          width="83px"
          height="40px"
          className="m-10 grayscale"
        />
        <img
          src={Sophos}
          alt=""
          width="163px"
          height="48px"
          className="m-10 grayscale"
        />

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
