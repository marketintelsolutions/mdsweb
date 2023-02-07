import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import Chris from "../assets/ChrisP.png";
import Emeka from "../assets/EmekaP.png";
import Eric from "../assets/EricP.png";
import Jimmy from "../assets/JimmyP.png";
import Sina from "../assets/SinaP.png";
import joseph from "../assets/joseph.png";
import ademola from "../assets/ademola.png";
import oluwole from "../assets/oluwole.png";
import profileuser1 from "../assets/profile-user1.png";
import { Link } from "react-router-dom";

export default function Team() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const profiles = [
    {
      name: "Emeka Osuocha",
      link: "Emeka Osuocha",
      image: Emeka,
      description: "MD/CEO",
    },
    {
      name: "Jimmy Ogunnowo",
      link: "Jimmy Ogunnowo",
      image: Jimmy,
      description: "Chief Commercial Officer",
    },
    {
      name: "Joseph Dele",
      link: "Joseph Dele",
      image: joseph,
      description: "Senior Developer",
    },
    // {
    //   name: "Usman Ayobami",
    //   image: profileuser1,
    //   description: "Software Engineer",
    // },
    {
      name: "Ademola Olusesan",
      image: ademola,
      link: "Ademola Olusesan",
      description: "Account/Operation",
    },
    {
      name: "Ayomide Oluwole",
      link: "Ayomide Oluwole",
      image: oluwole,
      description: "Creative Director",
    },
  ];
  return (
    <div className="xl:max-w-[73%] container mx-auto   lg:my-0  lg:p-0 p-6  ">
      <div className="flex justify-center">
        <button className=" rounded-full bg-white   p-10 shadow-2xl lg:mb-20">
          <span className="text-4xl font-black text-[#F26836] ">TEAM</span>
        </button>
      </div>
      <div className=" grid grid-cols-[1fr_1fr_1fr]  items-center   xl:justify-around my-20 mb-40 gap-20 ">
        {profiles.map((i, index) => (
          <div
            key={index}
            className="profile-card shadow-lg  h-[438px] rounded-xl overflow-hidden relative flex flex-col items-center justify-center "
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
                {i.link ? (
                  <Link
                    to={`/profile?name=${i.link}`}
                    className="font-black text-white text-sm"
                  >
                    Read more...
                  </Link>
                ) : (
                  <p className="font-black text-white text-sm">Read more...</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
