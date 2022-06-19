import React from "react";
import Arrow from "../../assets/Arrow 1.png";
import Lottie from "react-lottie";

const SectionThree = ({ header, subHeader, image, id }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="max-w-[1300px] container d-flex lg:my-20 my-10 flex-wrap  items-center lg:pt-20 lg:py-24 py-10 justify-between"
      id={id}
    >
      <div className="w-full md:w-1/2 lg:pr-20 md:text-left flex lg:justify-start">
        <div className="max-w-[500px]">
          <h1 className="text-6xl font-bold">{header} </h1>
          <p className="text-3xl mt-10 ">{subHeader}</p>
          <button className="text-3xl py-3 mt-10 flex items-center">
            Read more &nbsp;&nbsp; <img src={Arrow} alt="" width="22.23px" />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex lg:justify-end bg-red-200 rounded-full ">
        {/* <img src={image} alt={header} width="700px" height="700px" /> */}
        <Lottie
          options={defaultOptions}
          isStopped={false}
          isPaused={false}
          className="z-10"
          // width={500}
          // height={400}
        />
      </div>
    </div>
  );
};

export default SectionThree;
