import React, { useEffect } from "react";
import Locations from "../../assets/Locations 1.png";
import { Link } from "react-router-dom";
import illustration from "../../assets/illustration.png";

const ManagedTechnologyServices = () => {
  const missionElements = [
    {
      title: "CompleteCare",
      link: "/CompleteCare",
      description: `A comprehensive plan for businesses looking for around-the-clock on-premise and remote support`,
    },
    {
      title: `Managed Platform Service`,
      link: `/ManagedPlatformService`,
      description: `Our Managed Platform Service is a technology solution that provides customers with a single outsourced `,
    },
    {
      title: `Security Service`,
      link: `/ManagedSecurityService`,
      description: `As organizations move to the cloud to find efficiencies and agility, security becomes more complex `,
    },
    {
      title: `IT Consulting`,
      link: `/ITConsulting`,
      description: `ZiltchOne helps your business operate more efficiently by recommending the best possible `,
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    // <div className="bg-gray-50 text-center app-common-bg">
    //   <div className=" max-w-[73%] mx-auto  pb-10">
    //     <h1 className="text-5xl font-bold lg:w-2/3 mx-auto  my-12">
    //       Managed Technology Services
    //     </h1>
    //     <p className="text-3xl mt-10 ">
    //       We are managed service provider (MSP) deliverIng network, application,
    //       infrastructure and security through ongoing and regular support. Our
    //       team of experts with over 50 years combined experience are eager to
    //       help you solve that Technology challenge.
    //     </p>

    //     <div className="my-16 flex justify-around flex-wrap">
    //       {missionElements.map((i, index) => (
    //         <ShowBox i={i} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 lg:my-10 flex-wrap  items-center xl:pt-20 xl:py-24 lg:py-10 p-3 justify-b xl:justify-around ">
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 ">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-5xl text-3xl font-[900] text-[#1233FE] ">
              Managed Technology Services
            </h1>
            <p className="text-lg lg:leading-7 mt-5 text-[#727272] my-10">
              ZILTCHONE is a consolidated technology services company that
              offers a bouquet of Managed IT Services. Our team of world-class
              talents genuinely care about the relationships we build. They
              understand that response and precision are key to a successful
              partnership.
            </p>
            <p className="text-lg lg:leading-7 mt-5 text-[#727272] my-10">
              Some of the FINTECH applications we deal with are payments apps,
              peer-to-peer (P2P) lending apps, investment apps, and crypto apps,
              among others.
            </p>
          </div>
        </div>
        <div className="lg:w-5/12 w-full lg:order-2 order-1 ">
          <img src={illustration} alt="" className="w-full" />
        </div>
      </div>

      <div className="bg-gray-100  w-full flex items-center lg:mb-60 py-10 flex-wrap justify-center lg:gap-10 gap-5 lg:p-40 p-3">
        {missionElements.map((i, index) => (
          <div
            key={index}
            className="detailbox lg:w-[617px] w-full lg:h-[339px] bg-[#F26836] flex justify-center items-center flex-col p-6 rounded-xl"
          >
            {i.title && (
              <h1 className="lg:text-4xl text-2xl mb-3 font-[900] text-white text-center">
                {i.title}
              </h1>
            )}
            <p className="">{i.description}</p>
          </div>
        ))}
      </div>
      <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 lg:my-10 flex-wrap  items-center xl:pt-20 xl:py-24 lg:py-10 p-3 justify-b xl:justify-around ">
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 ">
          <div className="xl:max-w-[600px]">
            <h1 className="lg:text-5xl text-3xl font-[900] text-[#FF3B00] ">
              Procurement And Distribution
            </h1>
            <p className="text-lg lg:leading-7 mt-5 text-[#727272] my-10">
              We understand that every client has specific needs, and requires
              different hardware and software to meet their requirements. Our
              Engineers can assist with locating and securing any infrastructure
              or systems to your exact specifications.
            </p>
            <p className="text-lg lg:leading-7 mt-5 text-[#727272] my-10">
              We have extensive strategic relationships with several OEMs that
              our clients are able to leverage to receive competitive and
              discounted rates that helps them save money. In addition, clients
              also benefit from single-source billing, making the process
              relatively simple and hassle-free.
            </p>
            <p className="text-lg lg:leading-7 mt-5 text-[#727272] my-10">
              We source and procure servers, networking equipment, cabling,
              desktops, laptops, peripherals, phone systems, and all other
              assets needed to run optimally. Ziltch Technologies will manage
              the entire process so that you and your team can focus on your
              business. We deliver all quotes and estimates so that there are no
              surprises and everything is kept transparent, with prior
              approval. 
            </p>
            <Link to={"/"} className="">
              <button className="bg-[#F26836] rounded-full text-white p-4 px-6 mt-4">
                Send Us A Request
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-5/12 w-full lg:order-2 order-1 py-5">
          <img src={Locations} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ManagedTechnologyServices;
