import React from "react";
import creative from "../../assets/creative.png";
import { Link } from "react-router-dom";

const SectionFour = ({ header, subHeader, image, id, link, animeid }) => {
  return (
    <div
      className="xl:max-w-[73%] container mx-auto flex xl:my-20 my-10 flex-wrap p-6  items-center xl:pt-20 xl:py-24 py-10 justify-center xl:justify-around "
      id={id}
    >
      <div className="lg:w-5/12 w-full justify-center flex mb-10">
        <img
          src={creative}
          alt=""
          className="lg:h-full lg:w-auto w-[169.91px]"
        />
      </div>

      <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white">
        <div className="xl:max-w-[500px]">
          <h1 className="lg:text-[50px] leading-[107%] text-3xl font-[900] text-[#1233FF]">
            {header}{" "}
          </h1>
          <p className="lg:text-xl lg:leading-10 text-lg mt-5 text-[#727272] lg:my-10">
            {subHeader}
          </p>
          <Link to={link || "/"} className="">
            <button className="bg-[#F26836] rounded-full text-white p-4 px-6 mt-4">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
