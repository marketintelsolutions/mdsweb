import React from "react";
import { Link } from "react-router-dom";
import man from "../../assets/Group 50.png";

const SectionTwo = ({ header, subHeader, image, id, size, link, animeid }) => {
  return (
    <div
      className="lg:max-w-[73%] mx-auto lg:px-40 rounded-full p-5 container lg:h-[668px] flex xl:my-20 my-10 flex-wrap items-center justify-around xl:shadow-2xl shadow-[#282c34] xl:max-w-[73%]  xl:bg-white"
      id={id}
    >
      <div className="lg:w-5/12 w-full">
        <img src={man} alt="" className=" " />
      </div>
      <div className="lg:w-5/12 w-full xl:text-left flex xl:justify-end bg-white">
        <div className="xl:max-w-[500px]">
          <h3 className="lg:text-5xl text-3xl font-bold text-[#1233FF] ">
            {header}{" "}
          </h3>
          <p className="text-lg lg:my-10 text-[#727272]">{subHeader}</p>
          <Link to={link || "/"} className="text-[#f1634d]">
            <button className="bg-[#F26836] rounded-full text-white p-4 px-6 mt-4">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
