import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import mss from "../../assets/mss.gif";
import OrangeTextPlusImageRow from "../../components/Shared/OrangeTextPlusImageRow";

export default function ManagedSecurityService() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const listItems = [
    "Security framework built with NIST and CIS to protect your network and data.",
    "Assisting in meeting compliance standards for your business.",
    "Enjoy peace of mind that comes with the protection of your IT systems from cybersecurity threats.",
    "Prevent, Monitor 24/7/365, Predict and Report Cybersecurity Threats",
    "Reducing risks by ensuring your company's technology is covered by our foundational cybersecurity measures",
    "Endpoint Encryption",
    "Security Awareness Training",
    "Priced as a flat per annum fee inclusive of all unlimited 24/7/365 support",
  ];
  return (
    <div className="lg:px-0">
      <div className="app-common-bg-not-fixed">
        <OrangeTextPlusImageRow
          header="Managed Security Service"
          text="As organizations move to the cloud to find efficiencies and
                agility, security becomes more complex and challenging. They
                need end-to-end products and services that will protect them
                against an ever-expanding attack surface that today incorporates
                both in-office and remote work environments."
          image={mss}
        />
      </div>
      <div className="mssbg lg:h-[706.25px]  flex flex-col justify-end items-center p-6">
        <div className="xl:w-1/2 w-full  xl:my-40 text-white lg:text-2xl text-sm text-center leading-8    lg:leading-10">
          <p className="mb-5">
            Many IT teams today are incapable of keeping pace with evolving
            threats due to the specialized skills required. The Managed Security
            Services is designed to protect the business, secure the data and
            educate people on their role in security.
          </p>
          <p>
            Using the latest threat detection, intelligence and remediations
            solutions, this service helps lower the risk of cyber-attacks on the
            network. With more people working outside the core office, this
            service will deploy workstations solutions that reduce targeted
            end-point attacks.
          </p>
        </div>
      </div>

      <div className="xl:max-w-[40%] container mx-auto my-10  py-10  px-6  ">
        <h2 className="mb-10 text-3xl font-[900] ">Features include: </h2>
        <div className="flex flex-wrap">
          {listItems.map((i, index) => (
            <div key={index} className="flex items-center w-full my-3">
              <FaCheckCircle className="lg:w-10 w-5 lg:h-10 h-5" />
              <p className="mx-5 lg:text-2xl text-sm leading-8  lg:leading-10 text-[#888888] flex-1">
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
