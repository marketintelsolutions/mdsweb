import React, { useEffect } from "react";
import imageOne from "../../assets/72927-social-media.gif";

const MediaEntertainment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
      <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
        <div className="xl:max-w-[500px]">
          <h1 className="lg:text-6xl text-3xl leading-[107%] font-[900] text-[#0D229E] ">
            Media & Entertainment
          </h1>
          <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
            Our investment and partnership interests span across.
          </p>
          <ul>
            <li className="styledListItem">Content Distribution</li>
            <li className="styledListItem">Alternative Channels </li>
            <li className="styledListItem">Sport and Entertainment</li>
            <li className="styledListItem">Media Broadcast Infrastructure</li>
          </ul>
          <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
            Our aim is to continue developing innovative solutions in all
            verticals of the media industry in order to meet the challenges
            faced by businesses in this ever-changing technology environment.
          </p>
        </div>
      </div>
      <img
        src={imageOne}
        alt=""
        className="lg:w-1/2 w-full lg:order-2 order-1 mb-5"
      />
    </div>
  );
};

export default MediaEntertainment;
