import React, { useState } from "react";
import hp from "../../assets/hp.png";
import Sophos from "../../assets/sophos.png";
import ETranzact from "../../assets/tranzact.png";
import Itex from "../../assets/itex.png";
import "./style.css";
import LottieFile from "../../assets/39610-design.json";
import monitor from "../../assets/monitor.png";

const SectionOne = () => {
  return (
    <div className="min-h-[calc(90vh)]  w-full pt-12 xl:bg-white">
      <div className="flex justify-between lg:max-w-[73%] mx-auto bg-[#FF3B00] p-16 mb-10 opacity-70 rounded-[59px] h-[526px] mt-16 relative">
        <div className="text-white w-full flex flex-col justify-start items-start">
          <h2 className="font-[900] text-6xl mb-6 tracking-wider">
            Building digital products, brands & experience
          </h2>
          <p className="mb-14 text-[32px]">
            Technology solutions to improve lives
          </p>

          <button className="rounded-full bg-white text-black p-4 text-2xl mt-auto px-6">
            Contact Us
          </button>
        </div>

        <div className="w-6/12">
          <img src={monitor} alt="" className=" absolute h-[130%] bottom-0 " />
        </div>
      </div>

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
