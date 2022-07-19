import React from "react";
const ShowBox = ({ i }) => (
  <div className="w-full lg:w-2/5 bg-[#031759] text-center  rounded-2xl hover:bg-opacity-80 hover:text-black text-white shadow-lg m-3 flex-col flex items-center justify-center p-3">
    {i.title && <h1 className="text-3xl mb-3 font-bold ">{i.title}</h1>}
    <p className="text-lg  ">{i.description}</p>
  </div>
);

export default ShowBox;
