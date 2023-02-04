import React from "react";
import { Link } from "react-router-dom";

const GaslSectionFive = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-7 mb-40">
      <h1 className="text-[#88BD27] font-black text-6xl ">
        Company Secretarial Services
      </h1>
      <p className="font-normal text-xl text-[#727272]">
        Company Secretarial Services for both Start-Ups and Established Entities
      </p>
      <Link to="/">
        <button className="bg-[#88BD27] rounded w-[186px] h-[69px] text-white">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default GaslSectionFive;
