import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import completecare from "../../assets/completecare.gif";
import OrangeTextPlusImageRow from "../../components/Shared/OrangeTextPlusImageRow";

export default function CompleteCare() {
  useEffect(() => {
    // window.scrollTo({ top: 0 });
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
    <div className="lg:px-0 ">
      <div className="app-common-bg-not-fixed  ">
        <OrangeTextPlusImageRow
          header="CompleteCare"
          text="A comprehensive plan for businesses looking for around-the-clock
          on-premise and remote support, robust security protection and
          strategic advisory sessions. ZILTCHONE CompleteCare delivers
          peace of mind I.T by reducing cost, increasing efficiency and
          revenue by our enterprise-level IT management and unlimited
          support at a low, fixed per user monthly fee."
          image={completecare}
        />
      </div>

      {/* <div className="hfgjhkj lg:h-[706.25px]  flex flex-col justify-end items-center p-6"></div> */}
      <div className="ccbg xl:h-[706.25px] h-[456.3px]  flex flex-col justify-end items-center p-6">
        <div className="xl:w-1/2 w-full  xl:my-40 text-white lg:text-2xl text-sm text-center leading-8    lg:leading-10">
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

      <div className="xl:max-w-[70%] container mx-auto my-10  py-10  px-6  ">
        <h2 className="lg:mb-10 mb-5 text-3xl font-[900] ">Features: </h2>
        <div className="flex flex-wrap">
          {listItems.map((i, index) => (
            <div
              key={index}
              className="flex items-center lg:w-1/2 w-full lg:my-3"
            >
              <FaCheckCircle className="lg:w-10 w-5 lg:h-10 h-5" />
              <p className="mx-5 lg:text-2xl text-sm leading-8  lg:leading-10 text-[#888888] flex-1">
                {i}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center my-5 mb-20 px-6 ">
        <Link to="/ManagedTechnologyServices">
          <button className=" rounded-full text-white p-4 px-10 bg-[#F26836]">
            Managed Technology Services
          </button>
        </Link>
      </div>
    </div>
  );
}
