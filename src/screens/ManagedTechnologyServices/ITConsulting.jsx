import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import itgif from "../../assets/itgif.gif";
import OrangeTextPlusImageRow from "../../components/Shared/OrangeTextPlusImageRow";

export default function ITConsulting() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const listItems = [
    "A Virtual CIO (vCIO) to evaluate your technology, IT infrastructure, and goals.",
    "Growth, Capacity, & Continuity Planning: Plan for the growth, expansion, and risks that may impact your business.",
    "Budget Planning: enable transparency, predictability, and manageability of IT expenses.",
    "Strategic Planning: Build an IT roadmap aligned with your goals to streamline operations and mitigate risk.",
    "Technology Summary: Perform assessments to help you understand your technology environment and identify gaps in your IT infrastructure.",
    "Priced as a flat per annum fee",
  ];
  return (
    <div className="lg:px-0  ">
      <div className="app-common-bg-not-fixed">
        <OrangeTextPlusImageRow
          header="IT Consulting"
          text="ZiltchOne helps your business operate more efficiently by
          recommending the best possible IT solutions for your unique
          setup. We will plan, budget, and leverage technology in ways
          that will change the way you do business forever."
          image={itgif}
        />
      </div>

      <div className=" lg:p-10 p-3 lg:mb-40">
        <div className="xl:max-w-[40%] container mx-auto   py-10  px-6  ">
          <h2 className="mb-10 text-3xl font-[900] ">Features:</h2>
          <div className="flex flex-wrap">
            {listItems.map((i, index) => (
              <div key={index} className="flex items-center my-3">
                <FaCheckCircle className="lg:w-10 w-5 lg:h-10 h-5" />
                <p className="mx-5 lg:text-2xl text-sm leading-8  lg:leading-10 text-[#888888] flex-1">
                  {i}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-5 mb-20 ">
        <Link to="/ManagedTechnologyServices">
          <button className=" rounded-full text-white p-4 px-10 bg-[#F26836]">
            Managed Technology Services
          </button>
        </Link>
      </div>
    </div>
  );
}
