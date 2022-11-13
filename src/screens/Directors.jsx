import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Chris from "../assets/ChrisP.png";
import Eric from "../assets/EricP.png";
import Sina from "../assets/SinaP.png";

export default function Directors() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const profiles = [
    {
      name: "Chris Oshiafi",
      image: Chris,
      description:
        "Member of Board of Directors for PAC ZiltchOne Digital Solution",
    },
    {
      name: "Sina Alimi",
      image: Sina,
      description:
        "Member of Board of Directors for PAC ZiltchOne Digital Solution",
    },
    {
      name: "Eric Okoruwa",
      image: Eric,
      description:
        "Member of Board of Directors for PAC ZiltchOne Digital Solution",
    },
  ];
  return (
    <div className="xl:max-w-[73%] container mx-auto   lg:my-0  lg:p-0 p-6  ">
      <div className="flex justify-center">
        <button className=" rounded-full bg-white   p-10 shadow-2xl lg:mb-20 uppercase">
          <span className="text-4xl font-black text-[#F26836] ">Directors</span>
        </button>
      </div>
      <div className=" flex flex-wrap  items-center   xl:justify-around my-20 mb-40 gap-20 ">
        {profiles.map((i, index) => (
          <div
            key={index}
            className="profile-card shadow-lg w-[346px] h-[438px] rounded-xl overflow-hidden relative flex flex-col items-center justify-center"
          >
            {i.image ? (
              <div className="w-[215px] h-[215px] bg-[#D9D9D9] border-[10px] border-white rounded-full absolute top-[30px] overflow-hidden flex justify-center">
                <img src={i.image} />
              </div>
            ) : (
              <div className="w-[215px] h-[215px] bg-[#3e3e3e] border-[10px] border-white rounded-full absolute top-[30px] overflow-hidden flex justify-center items-center">
                <FaUser color="white" size={150} />
              </div>
            )}
            <div className="w-[346px] h-[161px]  pink-section"></div>
            <div className="w-[346px] h-[277px]   flex flex-col  justify-end p-10 dark-section">
              <div className="text-center">
                <h1 className="text-2xl leading-[107%]  font-black">
                  {i.name}
                </h1>
                <p className="font-light  text-sm my-3">{i.description}</p>
                <Link to={`/profile?name=${i.name}`}>
                  <p className="font-black  text-sm">Read more...</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
