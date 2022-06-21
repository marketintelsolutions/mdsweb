import React from "react";

const TextImageRow = ({ children, imageClassName, reverse, className }) => {
  return (
    <div className={`flex ${className} `}>
      <div
        className={`w-1/2 bg-red-200 min-h-[400px] h-auto m-4 rounded-[60px] shadow-lg   ${
          reverse && "order-1"
        } ${imageClassName}`}
      ></div>
      <div className="lg:w-1/2 w-full  m-4 text-left grow ">{children}</div>
    </div>
  );
};

export default TextImageRow;
