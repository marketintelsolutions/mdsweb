import React, { useEffect } from "react";
import pmds from "../../assets/uiuximg.png";
import UIUX2 from "../../assets/UIUX2.png";
import UIUX1 from "../../assets/UIUX1.png";
import { Link } from "react-router-dom";
import SmartCreativeButton from "../../components/Shared/SmartCreativeButton";

export default function UIUXDesign() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="lg:px-0   ">
      <div className="app-common-bg-not-fixed">
        <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
          <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
            <div className="xl:max-w-[500px]">
              <h1 className="lg:text-6xl text-3xl leading-[107%] font-[900] text-[#1233FE] ">
                UI/UX Design
              </h1>
              <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
                We bring peace to UI/UX design. Whether you need an app designed
                from scratch or an upgrade for an existing interface, Ziltch1
                Technologies ensures that project objectives are met. We choose
                the best set of tools and techniques and apply many-year
                expertise in UI and UX services for the project’s desired
                outcomes.
              </p>
              <ul>
                <li className="styledListItem"> High-Fidelity Prototype </li>
                <li className="styledListItem">Wireframes</li>
                <li className="styledListItem">
                  Mobile and Web User Interface Design{" "}
                </li>
                <li className="styledListItem">
                  Cross-Platform Compatibility{" "}
                </li>
                <li className="styledListItem">Technical Design </li>
                <li className="styledListItem">Software Redesign </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-5/12 w-full lg:order-2 order-1">
            <img src={pmds} alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className=" xl:max-w-[70%] container mx-auto flex  xl:my-20 flex-wrap  items-center   py-10  justify-b xl:justify-around  p-6">
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-2 order-1 lg:mt-0 mt-5">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-3xl text-3xl font-[400] text-[#FF3B00] mb-5">
              Our approach to providing UI/UX Design Services
            </h1>

            <ul>
              <li className="styledListItem">High-Fidelity Prototype </li>
              <li className="styledListItem">Wireframes</li>
              <li className="styledListItem">
                Mobile and Web User Interface Design{" "}
              </li>
              <li className="styledListItem">Cross-Platform Compatibility </li>
              <li className="styledListItem">Technical Design </li>
              <li className="styledListItem">Software Redesign </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-5/12 w-full lg:order-1 order-2">
          <img src={UIUX1} alt="" className="w-full" />
        </div>
      </div>
      <div className=" xl:max-w-[70%] container mx-auto flex  xl:my-20 flex-wrap  items-center   py-10  justify-b xl:justify-around  p-6">
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-3xl text-3xl font-[400] text-[#FF3B00] mb-5">
              We create UI/UX Designs for Emerging Technologies Blockchain
              Technology
            </h1>

            <ul>
              <li className="styledListItem">Blockchain Technology</li>
              <li className="styledListItem">Artificial Intelligence </li>
              <li className="styledListItem">Augmented Reality </li>
              <li className="styledListItem">Mobile and Web Apps </li>
              <li className="styledListItem">Internet of Things</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-5/12 w-full lg:order-2 order-1">
          <img src={UIUX2} alt="" className="w-full" />
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
