import React, { useEffect } from "react";
import ani1 from "../../assets/ani1.gif";
import ani2 from "../../assets/ani2.gif";
import ani3 from "../../assets/ani3.gif";
import ani4 from "../../assets/ani4.gif";
import ani5 from "../../assets/ani5.gif";
import ani6 from "../../assets/ani6.gif";
import ani7 from "../../assets/ani7.png";
import { Link } from "react-router-dom";
import SmartCreativeButton from "../../components/Shared/SmartCreativeButton";

export default function Animation() {
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
                Animations
              </h1>
              <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
                At Ziltch1 Technologies, we offer a host of custom animation
                products that propel your brand to the forefront of industry
                conversations — all made by our animation expert team. Our
                expansive video marketing capabilities mean we can approach your
                next video project with any type of animation technique that
                suits your needs best.
              </p>
              <ul>
                <li className="styledListItem">Animated Logo </li>
                <li className="styledListItem">Character Animation</li>
                <li className="styledListItem">Product Promotions </li>
                <li className="styledListItem">3D Animation</li>
                <li className="styledListItem">Whiteboard Animation</li>
                <li className="styledListItem">Animated Web Demos</li>
                <li className="styledListItem">2D Animation</li>
                <li className="styledListItem">Feature Film Animation</li>
                <li className="styledListItem">Explainer Video</li>
                <li className="styledListItem">TV Commercial Animation</li>
              </ul>
            </div>
          </div>
          <img
            src={ani1}
            alt=""
            className="lg:w-1/2 w-full lg:order-2 order-1 mb-5"
          />
        </div>
      </div>
      <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1  order-2 lg:mt-0 mt-5">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-3xl text-3xl font-medium mb-5">
              Animated Logo
            </h1>

            <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
              Your logo is a cornerstone of your brand. Bringing together
              kinetic typography, 3D animation styles, and sound effects into a
              brief yet memorable animated logo promotes brand recall and
              provides consistent branding across all of your marketing videos.
              Whether you want to add some motion to your current logo or need a
              new logo designed, animated, and rolled into your branded assets,
              we can help.
            </p>
          </div>
        </div>
        <div className="lg:w-5/12 w-full lg:order-2 order-1">
          <img src={ani2} alt="" className="w-full" />
        </div>
      </div>

      <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
        <div className="lg:w-5/12 w-full ">
          <img src={ani3} alt="" className="w-full" />
        </div>
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:mt-0 mt-5">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-3xl text-3xl font-medium mb-5">
              Character Animation
            </h1>

            <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
              We use high-quality animation software, 2D animation, and 3D
              modeling to bring personality, emotion, and expression into
              animated characters.
            </p>
          </div>
        </div>
      </div>

      <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1  order-2 lg:mt-0 mt-5">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-3xl text-3xl font-medium mb-5">
              Product Promotions
            </h1>

            <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
              Showcase your products and services in the best possible light.
              Our product animation services give you the opportunity to reach
              your audience in a way that’s often more effective than speaking
              directly with a sales rep. The best part of product promotion
              videos? They can yield shorter conversion timelines for prospects.
              We build out your animations to highlight functionalities,
              integrations, top features, and key differentiators for greater
              branding and market positioning.
            </p>
          </div>
        </div>
        <div className="lg:w-5/12 w-full lg:order-2 order-1">
          <img src={ani4} alt="" className="w-full" />
        </div>
      </div>

      <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
        <div className="lg:w-5/12 w-full ">
          <img src={ani5} alt="" className="w-full" />
        </div>
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:mt-0 mt-5">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-3xl text-3xl font-medium mb-5">
              3D Animation
            </h1>

            <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
              Starting from product animation, 3D visualization, and stop motion
              animation to 3D realistic renderings, our plethora of 3D animation
              services offers high-quality video animations based on your custom
              script or concept.
            </p>
          </div>
        </div>
      </div>

      <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1  order-2 lg:mt-0 mt-5">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-3xl text-3xl font-medium mb-5">
              Animated Web Demos
            </h1>

            <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
              Web demos are great sales tools to show during meetings and to
              host on core landing pages. Animated demos take viewers through
              the intricacies of your physical product or software and are
              perfect mediums for showing step-by-step processes. Have a complex
              portal, tool, or digital asset that's hard to define at point of
              sale? Animated web demos are the way to go.
            </p>
          </div>
        </div>
        <div className="lg:w-5/12 w-full lg:order-2 order-1">
          <img src={ani6} alt="" className="w-full" />
        </div>
      </div>

      <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
        <div className="lg:w-5/12 w-full ">
          <img src={ani7} alt="" className="w-full" />
        </div>
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:mt-0 mt-5">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-3xl text-3xl font-medium mb-5">
              Explainer Video
            </h1>

            <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
              We’ve found explainers turn abstract concepts like software and
              data into consumable content with ease. They’re also great at
              communicating important messages about your company: Its goals,
              mission, values, differentiators, and more.
            </p>
          </div>
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
