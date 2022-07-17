import React from "react";
import FirstImage from "../../assets/customer-support.png";
import "./style.css";

const CTASection = () => {
  return (
    <div className="cta container d-flex xl:my-20 mt-10 flex-wrap  xl:py-20 py-10  min-h-[450.43px] xl:rounded-2xl px-16 items-center xl:max-w-[73%] ">
      <div className="w-full xl:w-1/2 flex justify-center">
        <img src={FirstImage} alt="" width="450px" height="450.43px" />
      </div>
      <div className="w-full xl:w-1/2 xl:text-left">
        <div className="xl:max-w-[500px]">
          <h1 className="text-6xl font-bold">
            Be a part of the next big thing{" "}
          </h1>
          <p className="text-3xl mt-10 ">
            We work with Brands, Startups, to SMEs. Colaborate for more impact
            and growt
          </p>
          <a href="tel:+23412718630">
            <button className="app-btn  text-white py-3 px-10 mt-10">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
