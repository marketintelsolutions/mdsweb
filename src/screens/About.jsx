import React, { useEffect } from "react";
import mobiledevice from "../assets/91310-mobile-device-tech.gif";
import visionImage from "../assets/8598-target.gif";
import aboutgif from "../assets/aboutgif.gif";
import missionImage from "../assets/25898-rocket-launched-into-space.gif";
import ke1 from "../assets/ke1.png";
import kem1 from "../assets/kem1.png";
import ke2 from "../assets/ke2.png";
import kem2 from "../assets/kem2.png";
import ke3 from "../assets/ke3.png";
import kem3 from "../assets/kem3.png";
import ke4 from "../assets/ke4.png";
import kem4 from "../assets/kem4.png";
import ke5 from "../assets/ke5.png";
import kem5 from "../assets/kem5.png";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className=" p-3">
      <div className="app-common-bg-not-fixed">
        <div className=" xl:max-w-[73%] mx-auto lg:pb-96 lg:py-20">
          <div className={`  flex  flex-wrap lg:flex-nowrap`}>
            <div className="lg:w-1/2 w-full lg:order-1 order-2   lg:m-4  text-left grow ">
              <div>
                <h1 className="lg:text-6xl text-3xl font-bold text-[#F26836;]">
                  Ziltch1 Technology, Media & Digital Solutions Limited{" "}
                </h1>
                <p className="text-lg mt-10 ">
                  Marketintel Digital Solutions Limited (MDS) is a consolidated
                  Technology, Communications, Media and Entertainment business
                  service provider in Nigeria. A member of PanAfrican Capital
                  Holdings Limited.
                </p>
                <p className="text-lg mt-10 ">
                  Marketintel has a bouquet of budding Local and International
                  partnerships and licenses within its portfolio. Marketintel
                  offers a wide range of services to consumers, corporates and
                  public institutions.
                </p>
                <p className="text-lg mt-10 ">
                  Marketintel has operating and non-operating interests in
                  businesses across ICT, Media and Entertainment.
                </p>
              </div>
            </div>
            <div
              className={`lg:w-1/2 w-full  lg:order-2 order-1 min-h-[400px] lg:h-[400px]  lg:m-4 `}
            >
              <img src={mobiledevice} alt="loading..." />
            </div>
          </div>
        </div>
      </div>
      <div className=" xl:max-w-[73%] mx-auto pb-96 lg:py-20">
        <div
          className={`flex flex-wrap xl:flex-nowrap justify-between items-center lg:my-20 `}
          id="vision"
        >
          <div
            className={`lg:w-[685px] overflow-hidden lg:h-[685px]  lg:m-4 rounded-full shadow-lg `}
          >
            <img src={visionImage} alt="loading..." />
          </div>
          <div className="lg:w-[40%] w-full   text-left  ">
            <div>
              <h1 className="lg:text-6xl text-3xl font-bold  mx-auto  lg:mb-12 text-[#1233FF;]">
                Vision
              </h1>
              <p className="text-lg lg:mt-10 mt-5 ">
                To be the foremost Technology solutions provider in our chosen
                markets and create value for all our stakeholders
              </p>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-wrap xl:flex-nowrap justify-between items-center lg:my-20 `}
          id="mission"
        >
          <div className="lg:w-[40%] w-full lg:order-1 order-2  lg:m-4 text-left grow ">
            <div>
              <h1
                className="lg:text-6xl text-3xl font-bold mx-auto  lg:mb-12 text-[#F26836;]"
                id="mission"
              >
                Mission
              </h1>
              <p className="text-lg lg:mt-10 mt-5 ">
                To enrich lives using technology-driven products and services
              </p>
            </div>
          </div>
          <div
            className={`lg:w-[685px] w-full lg:order-2 order-1 overflow-hidden lg:h-[685px]  m-4 rounded-full shadow-lg `}
          >
            <img src={missionImage} alt="loading..." />
          </div>
        </div>

        <h1 className="lg:text-5xl text-3xl font-bold lg:w-[40%] mx-auto text-center text-[#1233FF] my-12">
          The three key elements to Our vision statement
        </h1>
        <div className="lg:block hidden h-[482px]">
          <div className="w-full bg-gray-200 border-[15px] border-white rounded-full h-16 shadow-lg relative ">
            <div className="flex -top-10 absolute w-full justify-around ">
              <img src={ke1} alt="" />
              <img src={ke2} alt="" />
              <img src={ke3} alt="" />
            </div>
          </div>
        </div>
        <div className="lg:hidden    flex justify-center flex-wrap gap-y-5">
          <img src={kem1} alt="" className=" " />
          <img src={kem2} alt="" />
          <img src={kem3} alt="" />
        </div>

        <h1 className="lg:text-5xl text-3xl font-bold lg:w-[40%] mx-auto  text-center my-12 lg:mt-32">
          The two key elements to the mission statement
        </h1>
        <div className=" lg:flex hidden w-full justify-center mb-32">
          <img src={ke4} alt="" />
          <img src={ke5} alt="" />
        </div>
        <div className="lg:hidden flex-wrap gap-y-5  flex w-full justify-center ">
          <img src={kem4} alt="" />
          <img src={kem5} alt="" />
        </div>

        <p className="text-lg mt-10 text-center ">
          Our principal aim is to deliver increased productivity, greater
          customer engagement and top-line results n frontier and emerging
          markets, beckoned on world class standard through investments in our
          chosen markets.{" "}
        </p>
        <p className="text-lg mt-10 text-center">
          MDS seeks to develop products and solutions based on emerging and
          futuristic outlook in the business and lifestyle environment, infusing
          new ways, forms and ideas for overall improvement. Ensuring productive
          & mutually beneficial partnerships to attain business objectives
        </p>

        <div
          className={`flex flex-wrap lg:flex-nowrap mt-40 items-center lg:h-auto h-[400px]`}
        >
          <div className="lg:w-1/2 w-full lg:order-1 order-2  m-4 text-left grow ">
            <div>
              <h1 className="lg:text-6xl text-3xl font-bold text-[#F26836] mb-10">
                Core Values
              </h1>
              <ul>
                <li className="styledListItem">Service with Passion</li>
                <li className="styledListItem">Professionalism</li>
                <li className="styledListItem">Integrity</li>
                <li className="styledListItem">Respect for individual</li>
                <li className="styledListItem">Innovation</li>
              </ul>
            </div>
          </div>
          <div className={`lg:w-1/2  lg:order-2 order-1    m-4 `}>
            {/* <div id="aboutImage" style={{ width: "100%", height: "100%" }} /> */}
            <img src={aboutgif} alt="loading..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
