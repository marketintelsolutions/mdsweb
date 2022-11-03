import React from "react";
import { Link } from "react-router-dom";
import illustration from "../../assets/illustration.png";

const SectionThree = ({ header, subHeader, image, id, link, animeid }) => {
  return (
    <div
      className="xl:max-w-[70%] container mx-auto flex  xl:my-20 my-10 flex-wrap p-5  items-center xl:pt-20 xl:py-24 py-10 justify-b xl:justify-around "
      id={id}
    >
      <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2">
        <div className="xl:max-w-[500px]">
          <h1 className="lg:text-5xl text-3xl font-[900] text-[#FF3B00] ">
            {header}{" "}
          </h1>
          <p className="text-lg leading-7 mt-5 text-[#727272] lg:my-10">
            {subHeader}
          </p>
          <Link to={link || "/"} className=" ">
            <button className="bg-[#F26836] rounded-full text-white p-4 px-6 mt-4">
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:w-5/12 w-full lg:order-2 order-1">
        <img src={illustration} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default SectionThree;
