import React, { useEffect } from "react";
import imageOne from "../../assets/72927-social-media.gif";

const MediaEntertainment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 lg:my-10 flex-wrap  items-center xl:pt-20 xl:py-24 lg:py-10 p-3 justify-b xl:justify-around ">
      <div className="lg:w-5/12 w-full lg:order-1 order-2 xl:text-left  flex xl:justify-start bg-white">
        <div className="xl:max-w-[500px]">
          <h1 className="lg:text-5xl text-3xl font-[900] text-[#1233FE] ">
            Media & Entertainment
          </h1>
          <p className="text-lg lg:leading-7 mt-5 text-[#727272] my-10">
            Our investment and partnership interests span across.
          </p>
          <ul>
            <li className="styledListItem">Content Distribution</li>
            <li className="styledListItem">Alternative Channels </li>
            <li className="styledListItem">Sport and Entertainment</li>
            <li className="styledListItem">Media Broadcast Infrastructure</li>
          </ul>
          <p className="text-lg lg:leading-7 mt-5 text-[#727272] my-10">
            Our aim is to continue developing innovative solutions in all
            verticals of the media industry in order to meet the challenges
            faced by businesses in this ever-changing technology environment.
          </p>
        </div>
      </div>
      <div className="lg:w-5/12 w-full lg:order-2 order-1">
        <img src={imageOne} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default MediaEntertainment;
