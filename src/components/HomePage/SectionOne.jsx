import React, { useState } from "react";

import "./style.css";
import monitor from "../../assets/monitor.png";

import { Link } from "react-router-dom";
const SectionOne = () => {
  return (
    <div className="xl:min-h-[calc(90vh)]  w-full xl:pt-12 mb-10 ">
      <div className="xl:max-w-[73%]  xl:h-[526px] min-h-[70vh] mx-auto relative  ">
        <div className="flex flex-wrap text-white xl:w-[90%] xl:justify-start justify-center  xl:bg-[rgba(255,59,0,0.7)] bg-[#F26836] xl:px-20 xl:py-16 p-3 pt-0 mb-10  rounded-[59px] xl:h-[526px]   relative">
          <div className="xl:w-[75%] w-full h-full flex flex-col justify-start items-start xl:order-1 order-2 p-6 xl:p-0 pt-0">
            <h2 className="font-[900] 2xl:text-6xl xl:text-5xl text-3xl xl:mb-6 mb-3 tracking-wider">
              Building digital products, brands & experience
            </h2>
            <p className="lg:mb-14 mb-3 2xl:text-[32px] xl:text-[20px] text-[15px] ">
              Technology solutions to improve lives
            </p>
            <Link to="/ContactUs" className="lg:mt-auto">
              <button className="rounded-md bg-white text-black p-4 lg:text-2xl  px-6 pb-3">
                Contact Us
              </button>
            </Link>
          </div>

          <img
            src={monitor}
            alt=""
            className="xl:order-2 order-1 xl:w-[800px] xl:h-[800px] xl:absolute  xl:-bottom-[110px]  xl:-right-[290px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
