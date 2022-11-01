import React, { useEffect } from "react";
import ShowBox from "../../components/Shared/ShowBox";
import imageOne from "../../assets/71676-ui-and-ux-design-isometric-animation 1.png";

const MediaEntertainment = () => {
  const missionElements = [
    { title: "Content Distribution" },
    { title: `Alternative Channels` },
    { title: `Sports and Entertainment` },
    { title: `Media Broadcast Infrastructure` },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 my-10 flex-wrap  items-center xl:pt-20 xl:py-24 py-10 justify-b xl:justify-around ">
      <div className="w-5/12 xl:text-left  flex xl:justify-start bg-white">
        <div className="xl:max-w-[500px]">
          <h1 className="text-5xl font-[900] text-[#1233FE] ">
            Media & Entertainment
          </h1>
          <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
            Our investment and partnership interests span across.
          </p>
          <ul>
            <li className="styledListItem">Content Distribution</li>
            <li className="styledListItem">Alternative Channels </li>
            <li className="styledListItem">Sport and Entertainment</li>
            <li className="styledListItem">Media Broadcast Infrastructure</li>
          </ul>
          <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
            Our aim is to continue developing innovative solutions in all
            verticals of the media industry in order to meet the challenges
            faced by businesses in this ever-changing technology environment.
          </p>
        </div>
      </div>
      <div className="w-5/12">
        <img src={imageOne} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default MediaEntertainment;
