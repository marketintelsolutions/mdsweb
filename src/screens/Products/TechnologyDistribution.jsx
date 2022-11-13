import React, { useEffect } from "react";
import imageOne from "../../assets/71676-ui-and-ux-design-isometric-animation 1.png";
import mobile_and_web from "../../assets/mobile_and_web.png";

const TechnologyDistribution = () => {
  const missionElements = [
    {
      description:
        "Distribution and Payment Platforms for Multinationals, FMCGs, Public and Private organisations",
    },
    {
      description: `Mobile/Internet Business to Business  (B2B) and Business to Consumer (B2C) Services
      Consumer Hardware/Software Sales & Services
      `,
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <div className="app-common-bg  ">
        <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
          <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
            <div className="xl:max-w-[500px]">
              <h1 className="lg:text-6xl text-3xl leading-[107%] font-[900] text-[#0D229E] ">
                Technology Distribution{" "}
              </h1>
              <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
                Distribution and Payment Platforms for Multinationals, FMCGs,
                Public and Private organizations
              </p>
            </div>
          </div>
          <img
            src={imageOne}
            alt=""
            className="lg:w-1/2 w-full lg:order-2 order-1 mb-5"
          />
        </div>
      </div>

      <div className="techdistbg lg:h-[745px] w-full flex justify-center items-center p-6 py-20">
        <div className="lg:w-[45%]">
          <p className="techdisttext">
            At Ziltch1 we develop systems that provide a simple, secure, and
            flexible platform with practical automation tools that streamline
            operations and increase security and visibility into your overall
            business operations. We can easily integrate payment platforms into
            the most popular Enterprise Resource Planning (ERP) systems and
            improve payment transaction management. Whether you need solutions
            for multiple departments, locations, or users, we reduce risk and
            losses due to fraud, allowing your business to accept more orders.
            Your customers can choose how to pay, whether it is online, via
            mobile device, or at your place of business.
          </p>
          <p className="techdisttext mt-10">
            We simplify payments so you can focus on running your manufacturing,
            or wholesale distribution company.{" "}
          </p>
        </div>
      </div>

      <div className="xl:max-w-[73%] container mx-auto flex lg:my-40 flex-wrap  items-center  p-6  xl:justify-between ">
        <div className="lg:w-1/2 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
          <div className=" ">
            <h1 className="lg:text-6xl text-3xl leading-[107%] font-[900] text-[#F26836] ">
              Mobile/web Business to Business (B2B) and Business to Consumer
              (B2C) Services{" "}
            </h1>
            <p className="lg:text-xl text-sm leading-8 lg:font-[500]   lg:leading-10 mt-5 text-[#727272] my-10">
              We design and develop different types of B2B and B2C mobile/web
              applications for B2B/B2C companies and brands to streamline
              in-house B2B processes.
            </p>
            <p className="lg:text-xl text-sm leading-8 lg:font-[500]   lg:leading-10 mt-5 text-[#727272] my-10">
              Attracting new business, manage finances, track leads, monitor
              sales, and sales activities are everyday challenges faced by
              C-Suite executives. With day-to-day business meetings, it is
              impossible to keep track of everything that is going on with your
              business. However, B2B/B2C applications, be it mobile or web, are
              the perfect solution to run your business efficiently.{" "}
            </p>
          </div>
        </div>

        <img
          src={mobile_and_web}
          alt=""
          className="lg:w-1/2 w-full lg:order-2 order-1"
        />
      </div>
    </div>
  );
};

export default TechnologyDistribution;
