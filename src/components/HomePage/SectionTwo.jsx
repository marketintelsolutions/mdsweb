import React from "react";
import { Link } from "react-router-dom";
import man from "../../assets/Group 50.png";

const SectionTwo = ({ header, subHeader, image, id, size, link, animeid }) => {
  return (
    <div
      className="lg:max-w-[73%] mx-auto lg:px-40 xl:rounded-full  p-6 container lg:h-[668px] flex xl:my-20  flex-wrap items-center justify-around  xl:shadow-2xl  shadow-[#282c34] xl:max-w-[73%]  xl:bg-white"
      id={id}
    >
      <div className="w-5/12 lg:order-1 order-2">
        <img src={man} alt="" className=" w-[130%]" />
      </div>
      <div className="lg:w-4/12 w-1/2 xl:text-left flex xl:justify-end   lg:order-2 order-1">
        <div className="xl:max-w-[500px]">
          <h3 className="lg:text-5xl text-3xl w-full font-bold text-[#1233FF] ">
            {header}{" "}
          </h3>
          <p className="lg:text-lg text-[15px] lg:my-5 lg:leading-10 text-[#727272]">
            {subHeader}
          </p>
          <Link to={link || "/"} className="text-[#f1634d]">
            <button className="bg-[#F26836] rounded-full text-white lg:p-4 lg:px-6 p-2 mt-4">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
