import React from "react";

const PaysharpItem = ({ image, text }) => {
  return (
    <div className="bg-white shadow-[4px_4px_12px_-5px_rgba(96,95,95,0.25)] rounded flex flex-col justify-center items-center  h-[141px]">
      <img src={image} alt="phoneIcon" className="w-[50px] h-[50px]" />
      <p className="text-[#FAA724]  text-sm ">{text}</p>
    </div>
  );
};

export default PaysharpItem;
