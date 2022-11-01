import React, { useEffect } from "react";
import ShowBox from "../../components/Shared/ShowBox";
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
      <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 my-10 flex-wrap  items-center xl:pt-20 xl:py-24 py-10 justify-b xl:justify-around ">
        <div className="w-5/12 xl:text-left  flex xl:justify-start bg-white">
          <div className="xl:max-w-[500px]">
            <h1 className="text-5xl font-[900] text-[#1233FE] ">
              Technology Distribution{" "}
            </h1>
            <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
              Development of User-Friendly Applications, Platforms and
              Solutions, to meet Customer needs & Expectations
            </p>
          </div>
        </div>
        <div className="w-5/12">
          <img src={imageOne} alt="" className="w-full" />
        </div>
      </div>
      <div className="techdistbg h-[745px] w-full flex justify-center items-center">
        <div className="w-[45%]">
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

      <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 my-10 flex-wrap  items-center xl:pt-20 xl:py-24 py-10 justify-b xl:justify-around ">
        <div className="w-5/12 xl:text-left  flex xl:justify-start bg-white">
          <div className="xl:max-w-[500px]">
            <h1 className="text-5xl font-[900] text-[#FF3B00] ">
              Mobile/web Business to Business (B2B) and Business to Consumer
              (B2C) Services{" "}
            </h1>
            <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
              We design and develop different types of B2B and B2C mobile/web
              applications for B2B/B2C companies and brands to streamline
              in-house B2B processes.
            </p>
            <p className="text-lg leading-7 mt-5 text-[#727272] my-10">
              Attracting new business, manage finances, track leads, monitor
              sales, and sales activities are everyday challenges faced by
              C-Suite executives. With day-to-day business meetings, it is
              impossible to keep track of everything that is going on with your
              business. However, B2B/B2C applications, be it mobile or web, are
              the perfect solution to run your business efficiently.{" "}
            </p>
          </div>
        </div>

        <div className="w-5/12">
          <img src={mobile_and_web} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default TechnologyDistribution;
