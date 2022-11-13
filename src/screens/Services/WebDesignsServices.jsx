import React, { useEffect } from "react";
import webdesign1 from "../../assets/webdesign1.png";
import wd1 from "../../assets/wd1.png";
import { Link } from "react-router-dom";
import SmartCreativeButton from "../../components/Shared/SmartCreativeButton";
import BlueTextPlusImageRow from "../../components/Shared/BlueTextPlusImageRow";

export default function WebDesignsServices() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="lg:px-0  ">
      <div className="app-common-bg-not-fixed">
        <BlueTextPlusImageRow
          header="Web Designs Services"
          text="We can design and build a bespoke website for you to match your
          branding style, allowing you to present your business online in
          a professional way. Whether you are an established business or
          just starting out, we can provide a website design solution for
          all budgets."
          image={webdesign1}
        />
      </div>

      <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 my-10 flex-wrap  justify-between items-center xl:pt-20 xl:py-24 lg:py-10 gap-5 lg:gap-y-20 p-6">
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
          <SmartCreativeButton />
        </Link>
      </div>
    </div>
  );
}
