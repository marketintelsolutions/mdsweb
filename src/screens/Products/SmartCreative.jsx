import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import creative from "../../assets/creative2.png";

export default function SmartCreative() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const services = [
    { text: "Creative Design", link: "/CreativeDesign" },
    { text: "Web Designs Services", link: "/WebDesignsServices" },
    { text: "Print Design Services", link: "/PrintDesignServices" },
    {
      text: "Product & Merchandise Design Services",
      link: "/ProductMerchandiseDesignServices",
    },
    { text: "UI/UX Design", link: "/UIUXDesign" },
    { text: "Animation", link: "/Animation" },
  ];
  return (
    <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 my-10 flex-wrap  items-center  lg:py-10 justify-b xl:justify-around lg:p-0 p-5">
      <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2">
        <div className="xl:max-w-[500px]">
          <h1 className="lg:text-5xl text-3xl font-[900] text-[#1233FE] ">
            Smart Creative
          </h1>
          <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
            There's no limit to what you can get designed at Ziltch1 Smart
            Designs. Whether you're looking for a spectacular new logo or some
            stunning flyers or an amazing animation, our talented designers at
            Ziltch1 Technologies can make it happen. Click on the button below
            to see our wide range of design services.{" "}
          </p>

          <div class="group inline-block text-[#888888]">
            <button class="bg-[#F26836] rounded-lg text-white p-4 px-6 mt-4 flex items-center">
              <span class="font-normal flex-1">Services</span>
              <span className="ml-3">
                <svg
                  class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul
              class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32 text-[#888888] mt-2"
            >
              {services.map((i, index) => (
                <Link key={index} to={i.link}>
                  <li class="rounded-sm px-3 py-1 hover:bg-gray-100 text-[#888888] cursor-pointer">
                    {i.text}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:w-5/12 w-full lg:order-2 order-1">
        <img src={creative} alt="" className="w-full" />
      </div>
    </div>
  );
}
