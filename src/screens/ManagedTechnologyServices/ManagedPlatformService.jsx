import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import mps from "../../assets/mps.gif";

export default function ManagedPlatformService() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const listItems = [
    "Translating your business needs into cutting-edge technology with the management of the overall IT estate.",
    "Implementing protection, policies and analyzing risk that will ensure your IT network is in accordance with modern security standards while enabling protection against unwanted access.",
    "Allowing you to work seamlessly from anywhere in the world just as if you were in the office.",
    "Meeting the underlying global financial regulatory requirements while reducing your total IT compliance headaches.",
    "Priced as a flat per annum fee inclusive of all unlimited 24/7 support.",
  ];
  return (
    <div className="lg:px-0  ">
      <div className="app-common-bg-not-fixed px-6">
        <div className="xl:max-w-[70%] container mx-auto flex lg:my-10 flex-wrap  items-center  py-10  justify-b xl:justify-around ">
          <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
            <div className="xl:max-w-[500px]">
              <h1 className="lg:text-6xl text-3xl leading-[107%] font-[900] text-[#F26836] ">
                Managed Platform Service
              </h1>
              <p className="lg:text-xl text-sm leading-8 lg:font-[500]   lg:leading-10 mt-5 text-[#727272] my-10">
                Our Managed Platform Service is a technology solution that
                provides customers with a single outsourced technology service
                encompassing all aspects of the financial sector technology. The
                service can be delivered with a particular focus on key
                technology centers across the globe. Leveraging our vast years
                of experience, the Managed Platform Service blends security,
                compliance and engineering best practices with the latest
                advances in cloud, desktop and mobile technology. The solution
                is fully managed with a 24×7 support desk.
              </p>
            </div>
          </div>

          <img
            src={mps}
            alt=""
            className="lg:w-1/2 w-full lg:order-2 order-1"
          />
        </div>
      </div>

      <div className="bg-[#0000ff0d]  lg:p-10 p-6 lg:mb-40">
        <div className="xl:max-w-[70%] container mx-auto lg:my-10  lg:py-10   ">
          <h2 className="mb-10 text-3xl font-[900] ">
            {" "}
            The Managed Platform Service fulfils the following client needs:{" "}
          </h2>
          <div className="flex flex-wrap">
            {listItems.map((i, index) => (
              <div key={index} className="flex items-center lg:my-3">
                <FaCheckCircle className="lg:w-10 w-5 lg:h-10 h-5" />{" "}
                <p className="mx-5 lg:text-2xl text-sm leading-8  lg:leading-10 text-[#888888] flex-1">
                  {i}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-5 mb-20 px-6">
        <Link to="/ManagedTechnologyServices">
          <button className=" rounded-full text-white p-4 px-10 bg-[#F26836]">
            Managed Technology Services
          </button>
        </Link>
      </div>
    </div>
  );
}
