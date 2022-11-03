import React, { useState } from "react";
import hp from "../../assets/hp.png";
import Sophos from "../../assets/sophos.png";
import ETranzact from "../../assets/tranzact.png";
import Itex from "../../assets/itex.png";
import "./style.css";
import monitor from "../../assets/monitor.png";

import { Link } from "react-router-dom";
const SectionOne = () => {
  return (
    <div className="min-h-[calc(90vh)]  w-full lg:pt-12 xl:bg-white">
      <div className="flex flex-wrap lg:flex-nowrap justify-between lg:max-w-[73%] mx-auto bg-[#FF3B00] lg:p-16 p-3 mb-10 opacity-70 lg:rounded-[59px] lg:h-[526px] lg:mt-16 relative">
        <div className="text-white w-full flex flex-col justify-start items-start lg:order-1 order-2">
          <h2 className="font-[900] lg:text-6xl text-3xl lg:mb-6 tracking-wider">
            Building digital products, brands & experience
          </h2>
          <p className="mb-14 lg:text-[32px] text-[15px] ">
            Technology solutions to improve lives
          </p>

          <Link to="/ContactUs" className="mt-auto">
            <button className="rounded-full bg-white text-black p-4 text-2xl  px-6 pb-3">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="lg:w-6/12 lg:order-2 order-1">
          <img
            src={monitor}
            alt=""
            className=" lg:absolute lg:h-[130%] h-full bottom-0 "
          />
        </div>
      </div>

      <p className="text-3xl text-center mb-10">Our Partners</p>
      <div className="w-full min-h-[86px] bg-[#F6F6F6] mx-auto  lg:flex grid  lg:grid-cols-none grid-cols-2 justify-center items-center flex-wrap mb-20">
        <img
          src={hp}
          alt=""
          className="m-10 grayscale  col-span-1 lg:w-[83px] lg:h-[40px] w-1/2"
        />
        <img
          src={Sophos}
          alt=""
          className="m-10 grayscale lg:w-[163px] lg:h-[48px] w-1/2"
        />

        <img
          src={Itex}
          alt=""
          className="m-10 grayscale lg:w-[163px] lg:h-[48px] w-1/2"
        />
        <img
          src={ETranzact}
          alt=""
          className="m-10 grayscale lg:w-[163px] lg:h-[48px]  w-1/2"
        />
      </div>
    </div>
  );
};

export default SectionOne;
