import React, { useEffect } from "react";
import ShowBox from "../../components/Shared/ShowBox";

const Fintech = () => {
  const missionElements = [
    {
      title: "Value Added Services",
    },
    {
      title: `Financial Technology Services`,
    },
    {
      title: `Telecom Infrastructure & Services`,
    },
    {
      title: `Financial Inclusion`,
      description: `PAYSHARP (Agent Banking Platform) - Technology powered Agent Banking outfit with penetration strategy to support the Federal Policy on Financial inclusion across Nigeria
      `,
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bg-gray-50">
      <div className=" max-w-[73%] mx-auto pb-96 pt-10">
        <h1 className="text-6xl font-bold lg:w-2/3 mx-auto  my-12">FINTECH</h1>
        <p className="text-3xl mt-10 ">
          Providing technology and innovation for financial service delivery
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

export default Fintech;
