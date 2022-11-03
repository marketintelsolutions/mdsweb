import React, { useEffect } from "react";
import pmds from "../../assets/pmds.png";
import { Link } from "react-router-dom";

export default function ProductMerchandiseDesignServices() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="lg:px-0 px-5 ">
      <div className="app-common-bg-not-fixed">
        <div className=" xl:max-w-[70%] container mx-auto flex  xl:my-20 flex-wrap  items-center   py-10  justify-b xl:justify-around ">
          <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
            <div className="xl:max-w-[500px]">
              <h1 className="lg:text-5xl text-3xl font-[900] text-[#1233FE] ">
                Product & Merchandise Design Services
              </h1>
              <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
                Need some walking advertising? A little promotional gear for the
                team manning the tradeshow booth? Get custom apparel, mugs, or
                caps from our professional designers.
              </p>
              <ul>
                <li className="styledListItem">T-shirt Design</li>
                <li className="styledListItem">Packaging Design </li>
                <li className="styledListItem">Bag and Tote Design</li>
                <li className="styledListItem">Cup and Mug Design</li>
                <li className="styledListItem">Apparel Design</li>
                <li className="styledListItem">Merchandise Design</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-5/12 w-full lg:order-2 order-1">
            <img src={pmds} alt="" className="w-full" />
          </div>
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
