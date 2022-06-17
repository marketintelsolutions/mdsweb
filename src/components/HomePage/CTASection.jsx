import React from "react";
import FirstImage from "../../assets/customer-support.png";
import "./style.css";

const CTASection = () => {
  return (
    <div className="cta container d-flex lg:my-20 my-10 flex-wrap  lg:py-20 py-10  min-h-[450.43px] rounded-2xl px-16 items-center max-w-[1300px] ">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={FirstImage} alt="" width="450px" height="450.43px" />
      </div>
      <div className="w-full md:w-1/2 md:text-left">
        <div className="max-w-[500px]">
          <h1 className="text-6xl font-bold">
            Be a part of the next big thing{" "}
          </h1>
          <p className="text-xl mt-10 ">
            We work with Brands, Startups, to SMEs. Colaborate for more impact
            and growt
          </p>
          <button className="app-btn  text-white py-3 px-10 mt-10">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
