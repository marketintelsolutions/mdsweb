import React, { useEffect } from "react";
import ShowBox from "../../components/Shared/ShowBox";

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
    <div className="bg-gray-50 text-center app-common-bg">
      <div className=" max-w-[73%] mx-auto  pb-10">
        <h1 className="text-5xl font-bold lg:w-2/3 mx-auto  my-12">
          Technology Distribution
        </h1>
        <p className="text-3xl mt-10 ">
          Development of User-Friendly Applications, Platforms and Solutions, to
          meet Customer needs & Expectations
        </p>

        <div className="my-16 flex justify-around flex-wrap">
          {missionElements.map((i, index) => (
            <ShowBox i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyDistribution;
