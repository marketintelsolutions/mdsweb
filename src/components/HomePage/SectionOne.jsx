import React from "react";
import FirstImage from "../../assets/business-people-discussing-business-idea.png";
import DropBox from "../../assets/dropbox.png";
import Slack from "../../assets/slack.png";
import Spotify from "../../assets/spotify.png";
import Zoom from "../../assets/zoom.png";

const SectionOne = () => {
  return (
    <div className="min-h-[calc(80vh)]">
      <div className="container d-flex lg:my-20 my-10 flex-wrap  items-start lg:pt-20">
        <div className="w-full md:w-1/2  lg:pr-20 md:text-left">
          <h1 className="text-6xl font-bold">
            Building digital products, brands & experience
          </h1>
          <p className="text-xl mt-10 ">
            Technology solutions to improve lives
          </p>
          <button className="app-btn bg-app-color text-white py-3 px-10 mt-10">
            Contact Us
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <img src={FirstImage} alt="" width="450px" height="450px" />
        </div>
      </div>
      <p className="text-center text-gray-500">Trusted by companies</p>
      <div className="w-9/12 min-h-[86px] bg-[#F6F6F6] mx-auto my-10 flex justify-center items-center flex-wrap">
        <img
          src={Spotify}
          alt=""
          width="163px"
          height="48px"
          className="m-10"
        />
        <img src={Slack} alt="" width="163px" height="48px" className="m-10" />
        <img
          src={DropBox}
          alt=""
          width="163px"
          height="48px"
          className="m-10"
        />
        <img src={Zoom} alt="" width="163px" height="48px" className="m-10" />
      </div>
    </div>
  );
};

export default SectionOne;
