import React from "react";
const ShowBox = ({ i }) => (
  <div className="w-2/5 bg-[#031759] text-center  rounded-2xl hover:bg-opacity-80 hover:text-black text-white shadow-lg m-5 flex-col flex items-center justify-center p-5">
    {i.title && <h1 className="text-6xl mb-5 font-bold ">{i.title}</h1>}
    <p className="text-3xl  ">{i.description}</p>
  </div>
);

export default ShowBox;
