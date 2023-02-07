import React from "react";
import { Link } from "react-router-dom";
import robot from "../../assets/robot.png";

const SectionFive = ({ header, subHeader, image, id, size, link, animeid }) => {
  return (
    <div
      className="lg:max-w-[73%] mx-auto lg:px-40 rounded-full p-6 container flex xl:my-10 my-10 flex-wrap items-center justify-around xl:shadow-2xl lg:shadow-[#282c34] xl:max-w-[73%]  xl:bg-white "
      id={id}
    >
      <div className="lg:w-4/12 w-full xl:text-left flex xl:justify-end bg-white lg:order-1 order-2">
        <div className="">
          <h3 className="lg:text-[50px] leading-[107%] text-3xl font-[900] text-[#1233FF] mb-5">
            {header}{" "}
          </h3>
          <p className="lg:text-xl lg:leading-10 text-lg  lg:my-5 text-[#727272]">
            {subHeader}
          </p>
          <Link to={link || "/"} className="">
            <button className="bg-[#F26836] rounded-full text-white p-4 px-6 mt-4">
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:w-5/12 w-full lg:order-2 order-1">
        <img src={robot} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default SectionFive;
