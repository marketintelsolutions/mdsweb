import React, { useEffect } from "react";
import printdesign1 from "../../assets/printdesign1.png";
import pd1 from "../../assets/pd1.png";
import pd2 from "../../assets/pd2.png";
import pd3 from "../../assets/pd3.png";
import pd4 from "../../assets/pd4.png";
import { Link } from "react-router-dom";
import SmartCreativeButton from "../../components/Shared/SmartCreativeButton";

export default function PrintDesignServices() {
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
                Print Design Services
              </h1>
              <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
                Sending something to print can be so final! Don't make the
                mistake of having a mistake - get the design right the first
                time, whether it's a flyer, poster, or sticker.
              </p>
              <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
                We are committed to ensuring that your printing is delivered to
                you in good condition and in a timely manner.
              </p>
            </div>
          </div>
          <img
            src={printdesign1}
            alt=""
            className="lg:w-1/2 w-full lg:order-2 order-1 mb-5"
          />
        </div>
      </div>

      <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 my-10 flex-wrap  justify-between items-center xl:pt-20 xl:py-24 lg:py-10 gap-5 lg:gap-y-20 p-6">
        <div className="lg:w-2/5 w-full">
          <img src={pd1} alt="" className="w-full" />
          <h1 className="lg:text-3xl text-3xl font-bold mt-10 mb-5">
            Folded Leaflets
          </h1>
          {/* <p>Logo Design, Business Card Design, and Brand Identity</p> */}
        </div>
        <div className="lg:w-2/5 w-full">
          <img src={pd2} alt="" className="w-full" />
          <h1 className="lg:text-3xl text-3xl font-bold mt-10 mb-5">
            Loyalty Cards
          </h1>
          {/* <p>Logo Design, Business Card Design, and Brand Identity</p> */}
        </div>
        <div className="lg:w-2/5 w-full">
          <img src={pd3} alt="" className="w-full" />
          <h1 className="lg:text-3xl text-3xl font-bold mt-10 mb-5">
            Exhibition Materials
          </h1>
          <p>
            Reception desk, pull-up banners, leaflets, business cards,
            promotional mugs, promotional pens… all staples of brand consistency
            when exhibiting.
          </p>
        </div>
        <div className="lg:w-2/5 w-full">
          <img src={pd4} alt="" className="w-full" />
          <h1 className="lg:text-3xl text-3xl font-bold mt-10 mb-5">Menu</h1>
          {/* <p>Logo Design, Business Card Design, and Brand Identity</p> */}
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