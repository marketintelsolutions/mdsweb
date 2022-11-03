import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import completecare from "../../assets/completecare.gif";

export default function CompleteCare() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const listItems = [
    "24/7 Unlimited Helpdesk Support",
    "Unlimited Remote Support",
    "Unlimited Chat Support",
    "Unlimited On-site Support",
    "How-to-Questions",
    "Emergency Response",
    "24/7 Monitoring & Alerting",
    "24/7 Security & Patch Update",
    "Full Antivirus/Antispam Protection",
    "Network Health Reporting",
    "Scheduled On-site Visits",
    "Technology Checklist",
    "Security Policy & Procedure Review",
    "Network Documentation",
    "Inventory & Asset Management",
    "Monthly Performance Reporting",
    "Quarterly IT Meetings & Consulting",
    "Technology Review & Recommendation",
    "Budget Planning",
    "Regulatory Compliance Consulting",
    "Business Risk Identification",
  ];
  return (
    <div className="lg:px-0 px-5 ">
      <div className="app-common-bg-not-fixed">
        <div className="xl:max-w-[70%] container mx-auto flex my-10 flex-wrap  items-center  py-10  justify-b xl:justify-around ">
          <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
            <div className="xl:max-w-[500px]">
              <h1 className="lg:text-6xl text-3xl font-[900] text-[#F26836] ">
                CompleteCare
              </h1>
              <p className="text-2xl font-[500] leading-10 mt-5 text-[#727272] my-10">
                A comprehensive plan for businesses looking for around-the-clock
                on-premise and remote support, robust security protection and
                strategic advisory sessions. ZILTCHONE CompleteCare delivers
                peace of mind I.T by reducing cost, increasing efficiency and
                revenue by our enterprise-level IT management and unlimited
                support at a low, fixed per user monthly fee.
              </p>
            </div>
          </div>
          <div className="lg:w-5/12 w-full lg:order-2 order-1">
            <img src={completecare} alt="" className="w-full" />
          </div>
        </div>
      </div>

      <div className="ccbg lg:h-[706.25px]  flex flex-col justify-end items-center p-3">
        <div className="lg:w-1/2 w-full leading-10  lg:my-40 text-white text-2xl text-center">
          <p>
            ZILTCHONE CompleteCare is an end-to-end IT management and support
            package that offers protections BEFORE any problems arises,
            preventative solution IF anything should go wrong, and peace of mind
            AFTER the issue is resolved. It is our proactive approach to create
            an enterprise-level IT department for small to mid-sized businesses
            at an affordable fixed per user monthly fee.
          </p>
        </div>
      </div>

      <div className="xl:max-w-[70%] container mx-auto my-10  py-10   ">
        <h2 className="mb-10 text-3xl font-[900] ">Features: </h2>
        <div className="flex flex-wrap">
          {listItems.map((i, index) => (
            <div key={index} className="flex items-center lg:w-1/2 w-full my-3">
              <FaCheckCircle className="w-10 h-10" />
              <p className="mx-5 text-2xl leading-10 text-[#888888] flex-1">
                {i}
              </p>
            </div>
          ))}
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
