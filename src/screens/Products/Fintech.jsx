import React, { useEffect } from "react";
import imageOne from "../../assets/Group 50.png";

const Fintech = () => {
  const missionElements = [
    {
      title: "Value Added Services",
      description: `Our Company is embedding financial services into non-financial channels for Lifestyle and a Variety of Services e.g. Subscriptions, buy-now-pay-later, insurance, healthcare, etc,   `,
    },
    {
      title: `Financial Services`,
      description: `We drive technology integration for financial Product & service offerings with enhanced security, speed, convenience, coverage, and customer experience `,
    },
    {
      title: `Telecom Infrastructure and Services`,
      description: `We have partnerships with Major Telcos to offer Satellite and Mobile technology products & Services.`,
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
    <div className="app-common-bg">
      <div className="xl:max-w-[73%] container mx-auto flex  xl:my-20 lg:my-10 flex-wrap  items-center relative  py-28  p-6 justify-b xl:justify-between ">
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-[50px] leading-[130%] text-3xl font-[900] text-[#0D229E] ">
              FINTECH
            </h1>
            <p className="text-xl leading-10 mt-5 text-[#727272] lg:my-10">
              We Provide technology and innovation for financial service
              delivery. At Ziltch1 we integrate technology into offering
              financial services in order to improve uses and delivery to
              consumers.
            </p>
            <p className="text-xl leading-10 mt-5 text-[#727272] my-10">
              Some of the FINTECH applications we deal with are payments apps,
              peer-to-peer (P2P) lending apps, investment apps, and crypto apps,
              among others.
            </p>
          </div>
        </div>
        <img
          src={imageOne}
          alt=""
          className=" absolute right-0 xl:h-full 2xl:h-auto  2xl:block hidden"
        />
        <div className="lg:w-5/12 w-full  lg:order-2 order-1">
          <img src={imageOne} alt="" className="w-full 2xl:hidden block " />
        </div>
      </div>
      <div className="finbg  w-full flex items-center lg:mb-60 py-10 flex-wrap justify-center gap-10  lg:p-40 p-10">
        {missionElements.map((i, index) => (
          <div
            key={index}
            className="detailbox  p98638 transition duration-150 ease-in-out origin-top lg:w-[617px] w-full lg:h-[339px]  flex justify-center items-center flex-col p-6 rounded-xl"
          >
            {i.title && (
              <h1 className="lg:text-4xl text-2xl mb-3 font-[900]    text-center">
                {i.title}
              </h1>
            )}
            <p className="">{i.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fintech;
