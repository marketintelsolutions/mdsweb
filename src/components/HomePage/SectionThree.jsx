import React from "react";
import { Link } from "react-router-dom";
import illustration from "../../assets/illustration.png";
import hp from "../../assets/hp.png";
import Sophos from "../../assets/sophos.png";
import ETranzact from "../../assets/tranzact.png";
import Itex from "../../assets/itex.png";

const SectionThree = ({
  header,
  subHeader,
  image,
  id,
  link,
  animeid,
  ourPatners,
  button,
  color,
  rounded,
}) => {
  return (
    <div>
      <div
        className="xl:max-w-[70%] container mx-auto flex  xl:my-40  flex-wrap p-6  items-center xl:pt-20 xl:py-24 py-10 justify-b xl:justify-around "
        id={id}
      >
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2">
          <div className="xl:max-w-[500px] lg:mt-0 mt-10">
            <h1
              className={`lg:text-[50px] leading-[107%] text-3xl    font-[900] text-[${color}] `}
            >
              {header}{" "}
            </h1>
            <p className="lg:text-xl lg:leading-10 text-lg  mt-5 text-[#727272] lg:my-10">
              {subHeader}
            </p>
            <Link to={link || "/"} className=" ">
              <button
                className={`bg-[#F26836] rounded-${rounded} text-white p-4 px-6 mt-4`}
              >
                {button}
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-5/12 w-full lg:order-2 order-1">
          <img src={image} alt="" className="w-full" />
        </div>
      </div>
      {ourPatners && (
        <>
          <p className="lg:text-4xl text-xl font-light text-center lg:mb-20 mb-10 ">
            Our Partners
          </p>
          <div className="w-full  bg-[#F6F6F6]    ">
            <div className="lg:w-[73%] mx-auto min-h-[320px] lg:flex grid lg:gap-x-10 lg:grid-cols-none grid-cols-2 justify-center items-center">
              <img
                src={hp}
                alt=""
                className="m-10   col-span-1 lg:w-[116px] lg:h-[116px] w-1/2 justify-center"
              />
              <img
                src={Sophos}
                alt=""
                className="m-10 col-span-1   lg:w-auto w-1/2 "
              />

              <img
                src={Itex}
                alt=""
                className="m-10 col-span-1  lg:w-auto w-1/2  "
              />
              <img
                src={ETranzact}
                alt=""
                className="m-10  col-span-1 lg:w-auto w-1/2"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SectionThree;
