import React, { useEffect } from "react";
import ShowBox from "../../components/Shared/ShowBox";

const ManagedTechnologyServices = () => {
  const missionElements = [
    {
      title: "Business Applications",
    },
    {
      title: `Secured Services`,
    },
    {
      title: `Outsourced IT services`,
    },
    {
      title: `Platform Development`,
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bg-gray-50 text-center app-common-bg">
      <div className=" max-w-[73%] mx-auto  pb-10">
        <h1 className="text-5xl font-bold lg:w-2/3 mx-auto  my-12">
          Managed Technology Services
        </h1>
        <p className="text-3xl mt-10 ">
          We are managed service provider (MSP) deliverIng network, application,
          infrastructure and security through ongoing and regular support. Our
          team of experts with over 50 years combined experience are eager to
          help you solve that Technology challenge.
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

export default ManagedTechnologyServices;
