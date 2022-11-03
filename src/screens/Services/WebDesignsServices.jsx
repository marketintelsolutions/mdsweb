import React, { useEffect } from "react";
import webdesign1 from "../../assets/webdesign1.png";
import wd1 from "../../assets/wd1.png";
import { Link } from "react-router-dom";

export default function WebDesignsServices() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="lg:px-0 px-5 ">
      <div className="app-common-bg-not-fixed">
        <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 my-10 flex-wrap  items-center  py-10  justify-b xl:justify-around ">
          <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
            <div className="xl:max-w-[500px]">
              <h1 className="lg:text-5xl text-3xl font-[900] text-[#1233FE] ">
                Web Designs Services
              </h1>
              <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
                We can design and build a bespoke website for you to match your
                branding style, allowing you to present your business online in
                a professional way. Whether you are an established business or
                just starting out, we can provide a website design solution for
                all budgets.
              </p>
            </div>
          </div>
          <div className="lg:w-5/12 w-full lg:order-2 order-1">
            <img src={webdesign1} alt="" className="w-full" />
          </div>
        </div>
      </div>

      <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 my-10 flex-wrap  justify-between items-center xl:pt-20 xl:py-24 lg:py-10 gap-5 lg:gap-y-20">
        <div className=" w-full">
          <img src={wd1} alt="" className="w-full" />
          <h1 className="lg:text-3xl text-3xl font-bold mt-10 mb-5">
            Web Design
          </h1>
          <p>
            WooCommerce Design, Wix Design, Landing Page Design, WordPress
            Design, Banner Ad Design, Newsletter Design , Icon Design and Email
            Marketing Design
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center my-5 mb-20 ">
        <Link to="/SmartCreative">
          <button className=" rounded-full text-blue-700 p-4 px-10 border border-black">
            Smart Creative
          </button>
        </Link>
      </div>
    </div>
  );
}
