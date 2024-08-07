import React from "react";
import { Link } from "react-router-dom";
import rocket from "../../assets/rocket.png";

const SectionSeven = ({
  header,
  subHeader,
  image,
  id,
  size,
  link,
  animeid,
}) => {
  return (
    <div
      className="lg:max-w-[73%] mx-auto lg:px-40 rounded-full p-6 container lg:h-[668px] flex xl:my-10 my-10 flex-wrap items-center justify-around xl:shadow-2xl shadow-[#282c34] xl:max-w-[73%]  xl:bg-white "
      id={id}
    >
      <img
        src={rocket}
        alt=""
        className="2xl:block hidden absolute left-[10%]"
      />

      <div className="lg:w-5/12 w-full">
        <img src={rocket} alt="" className="2xl:hidden" />
      </div>
      <div className="lg:w-5/12 w-full xl:text-left flex xl:justify-end bg-white">
        <div className="xl:max-w-[500px]">
          <h3 className="lg:text-5xl text-3xl font-bold lg:text-[#f1634d] text-[#1233FF] ">
            {header}{" "}
          </h3>
          <p className="text-lg lg:my-10 text-[#727272]">{subHeader}</p>
          <Link to={link || "/"} className="text-[#f1634d]">
            <button className="bg-[#F26836] rounded-full text-white p-4 px-6 mt-4">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
