import React, { useEffect } from "react";
import pmds from "../../assets/bag-mockup 1.png";
import { Link } from "react-router-dom";
import SmartCreativeButton from "../../components/Shared/SmartCreativeButton";

export default function ProductMerchandiseDesignServices() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="lg:px-0  ">
      <div className="app-common-bg-not-fixed">
        <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
          <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
            <div className="xl:max-w-[500px]">
              <h1 className="lg:text-6xl text-3xl leading-[107%] font-[900] text-[#1233FE] ">
                Product & Merchandise Design Services
              </h1>
              <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
                Need some walking advertising? A little promotional gear for the
                team manning the tradeshow booth?
              </p>
              <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
                Get custom apparel, mugs, or caps from our professional
                designers.
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
          <img
            src={pmds}
            alt=""
            className="lg:w-1/2 w-full lg:order-2 order-1 mb-5"
          />
        </div>
      </div>

      <div className="w-full flex justify-center my-5 mb-20 ">
        <Link to="/SmartCreative">
          <SmartCreativeButton />
        </Link>
      </div>
    </div>
  );
}
