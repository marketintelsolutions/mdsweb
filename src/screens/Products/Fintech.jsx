import React, { useEffect } from "react";
import imageOne from "../../assets/Group 85.png";
import iphone from "../../assets/GroupNew.png";

const Fintech = () => {
  // console.log(iphone, imageOne);
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
    <div className="">
      <div className="xl:max-w-[73%] container mx-auto flex  xl:my-20 lg:my-10 flex-wrap  items-center relative  py-28  p-6 justify-b xl:justify-between ">
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-[50px] leading-[130%] text-3xl font-[900] text-[#0D229E] ">
              FINTECH
            </h1>
            <p className="text-xl leading-10 mt-5 text-[#727272] lg:my-10">
              We Provide technology and innovation for financial service
              delivery. At Ziltch1 we integrate technology into offering
              financial services to improve uses and delivery to consumers. Some
              of the FINTECH applications we deal with are payments apps,
              peer-to-peer (P2P) lending apps, investment apps, and crypto apps,
              among others.  
            </p>
            <span className="text-xl leading-10 mt-5 text-[#727272] my-10">
              One of our leading FINTECH products in the market is{" "}
            </span>
            <span className="text-[#FAA724]">
              <a
                href="https://www.paysharpng.com"
                className="text-xl leading-10  underline"
                target="_blank"
              >
                PAYSHARP
              </a>
            </span>
            <span className="text-xl leading-10 text-[#727272]">
              , which allows non-banking individuals and institutions to carry
              out financial services outside conventional bank branches, using a
              non-banking agent(s) or a licensed deposit financial institution.
            </span>
          </div>
        </div>
        <img
          src={iphone}
          alt=""
          className=" absolute -right-20    max-h-[931px] max-w-1/2  2xl:block hidden"
        />
        <div className="lg:w-5/12 w-full  lg:order-2 order-1">
          <img src={iphone} alt="" className="w-full 2xl:hidden block " />
        </div>
      </div>
      <div className="finbg  w-full flex items-center lg:mb-60 py-10 flex-wrap justify-center lg:gap-20 gap-10  lg:p-40 p-10">
        {missionElements.map((i, index) => {
          return (
            <div
              key={index}
              className="detailbox  p98638 transition duration-150 ease-in-out origin-top lg:w-[617px] w-full lg:h-[339px]  flex justify-center items-center flex-col p-6 lg:px-10 rounded-xl"
            >
              {i.title && (
                <h1 className="lg:text-4xl text-2xl mb-3 font-[900]    text-center">
                  {i.title}
                </h1>
              )}
              {i.title === "Financial Inclusion" ? (
                <div className="">
                  <span className="text-[#FAA724]  text-xl">
                    <a
                      href="https://www.paysharpng.com"
                      className=" underline"
                      target="_blank"
                    >
                      PAYSHARP
                    </a>
                  </span>
                  <span className="text-white text-center text-xl">
                    {" "}
                    (Agent Banking Platform) - Technology powered Agent Banking
                    outfit with a penetration strategy to support the Federal
                    Policy on Financial inclusion across Nigeria.{" "}
                  </span>
                </div>
              ) : (
                <p className=" text-center">{i.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fintech;
