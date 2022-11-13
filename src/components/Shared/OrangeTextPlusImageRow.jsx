import React from "react";

export default function OrangeTextPlusImageRow({ image, header, text }) {
  return (
    <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
      <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
        <div className="xl:max-w-[500px]">
          <h1 className="lg:text-6xl text-3xl leading-[107%] font-[900] text-[#F26836] ">
            {header}
          </h1>
          <p className="lg:text-xl text-sm leading-8 lg:font-[500]   lg:leading-10 mt-5 text-[#727272] my-10">
            {text}
          </p>
        </div>
      </div>
      <img src={image} alt="" className="lg:w-1/2 w-full lg:order-2 order-1" />
    </div>
  );
}
