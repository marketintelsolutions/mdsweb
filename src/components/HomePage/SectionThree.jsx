import React from "react";
import Arrow from "../../assets/Arrow 1.png";
import FirstImage from "../../assets/businessman-analyzing-data.png";
import DropBox from "../../assets/dropbox.png";
const SectionThree = ({ header, subHeader, image, id }) => {
  return (
    <div
      className="container d-flex lg:my-20 my-10 flex-wrap  items-center lg:pt-20 lg:py-24 py-10 justify-between"
      id={id}
    >
      <div className="w-full md:w-1/2  lg:pr-20 md:text-left flex justify-center">
        <div className="max-w-[500px]">
          <h1 className="text-6xl font-bold">{header} </h1>
          <p className="text-xl mt-10 ">{subHeader}</p>
          <button className=" py-3 mt-10 text-left flex items-center">
            Read more &nbsp;&nbsp; <img src={Arrow} alt="" width="22.23px" />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={image} alt={header} width="450px" height="450px" />
      </div>
    </div>
  );
};

export default SectionThree;
