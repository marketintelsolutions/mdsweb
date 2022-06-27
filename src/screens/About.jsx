import React from "react";
import ShowBox from "../components/Shared/ShowBox";
import TextImageRow from "../components/Shared/TextImageRow";
import lottie from "lottie-web";
import * as DistriButeJSON from "../assets/81760-shipping-around-the-world.json";
import * as MissionJSON from "../assets/25898-rocket-launched-into-space.json";
import * as VisionJSON from "../assets/63002-artemis-vision-rocket.json";
const About = () => {
  React.useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector(`#aboutImage`),
      animationData: DistriButeJSON,
      renderer: "svg",
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
    const missionInstance = lottie.loadAnimation({
      container: document.querySelector(`#missionImage`),
      animationData: MissionJSON,
      renderer: "svg",
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
    const visionInstance = lottie.loadAnimation({
      container: document.querySelector(`#visionImage`),
      animationData: VisionJSON,
      renderer: "svg",
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
    return () => {
      instance.destroy();
      missionInstance.destroy();
      visionInstance.destroy();
    };
  }, []);
  const visionElements = [
    {
      title: "Solution provider",
      description:
        "This is to reinforce that  MDS is particularly set up to provide solutions using technology.",
    },
    {
      title: "Chosen markets",
      description:
        "MDS has identified certain niche areas in which it intends to play during the tenure of this plan.",
    },
    {
      title: "Create value",
      description:
        "In all its chosen market sectors, it shall create value for all stakeholders.",
    },
  ];
  const missionElements = [
    {
      title: "Enriching lives",
      description:
        "Whilst MDS provides solutions, our objective is to improve lives",
    },
    {
      title: "Technology driven",
      description: "MDS’ solutions will be driven by technology",
    },
  ];

  return (
    <div className=" max-w-[73%] mx-auto pb-96">
      <div className={`flex my-20`}>
        <div
          className={`w-1/2 bg-[#031759] min-h-[400px] h-auto m-4 rounded-[60px] shadow-lg `}
        >
          <div id="aboutImage" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="lg:w-1/2 w-full  m-4 text-left grow ">
          <div>
            <h1 className="text-6xl font-bold">
              Marketintel Technology, Media & Digital Solutions Limited (MDS)
            </h1>
            <p className="text-3xl mt-10 ">
              Marketintel Digital Solutions Limited (MDS) is a consolidated
              Technology, Communications, Media and Entertainment business
              service provider in Nigeria. A member of PanAfrican Capital
              Holdings Limited.
            </p>
            <p className="text-3xl mt-10 ">
              Marketintel has a bouquet of budding Local and International
              partnerships and licenses within its portfolio. Marketintel offers
              a wide range of services to consumers, corporates and public
              institutions.
            </p>
            <p className="text-3xl mt-10 ">
              Marketintel has operating and non-operating interests in
              businesses across ICT, Media and Entertainment, with specific
              activities in:
            </p>
          </div>
        </div>
      </div>
      <div className={`flex items-center my-20`}>
        <div className="lg:w-1/2 w-full  m-4 text-left grow ">
          <div>
            <h1 className="text-6xl font-bold  mx-auto  mb-12" id="vision">
              Vision
            </h1>
            <p className="text-3xl mt-10 ">
              To be the foremost Technology solutions provider in our chosen
              markets and create value for all our stakeholders
            </p>
          </div>
        </div>
        <div
          className={`w-1/2 bg-red-200 min-h-[300px] h-auto m-4 rounded-[60px] shadow-lg `}
        >
          <div id="missionImage" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
      <div className={`flex items-center my-20`}>
        <div
          className={`w-1/2 bg-[#031759] min-h-[300px] h-auto m-4 rounded-[60px] shadow-lg `}
        >
          <div id="visionImage" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="lg:w-1/2 w-full  m-4 text-left grow ">
          <div>
            <h1 className="text-6xl font-bold mx-auto  mb-12" id="vision">
              Mission
            </h1>
            <p className="text-3xl mt-10 ">
              To enrich lives using technology-driven products and services
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-6xl font-bold lg:w-2/3 mx-auto  my-12">
        The three key elements to Our vision statement
      </h1>
      <div className="my-16 flex justify-around flex-wrap">
        {visionElements.map((i, index) => (
          <ShowBox i={i} />
        ))}
      </div>

      <h1 className="text-6xl font-bold lg:w-2/3 mx-auto  my-12">
        The two key elements to the mission statement
      </h1>
      <div className="my-16 flex justify-around flex-wrap">
        {missionElements.map((i, index) => (
          <ShowBox i={i} />
        ))}
      </div>
      <p className="text-3xl mt-10 ">
        Our principal aim is to deliver increased productivity, greater customer
        engagement and top-line results n frontier and emerging markets,
        beckoned on world class standard through investments in our chosen
        markets.{" "}
      </p>
      <p className="text-3xl mt-10 ">
        MDS seeks to develop products and solutions based on emerging and
        futuristic outlook in the business and lifestyle environment, infusing
        new ways, forms and ideas for overall improvement. Ensuring productive &
        mutually beneficial partnerships to attain business objectives
      </p>
      <h1 className="text-6xl font-bold lg:w-2/3 mx-auto  my-12">
        Core values{" "}
      </h1>
      <div class="flex justify-center  p-4 w-2/3 mx-auto flex-wrap">
        <div class=" bg-[#031759] p-3 m-3 text-white rounded-2xl">
          {/* <img src={AvatarThree} alt="" loading="lazy" /> */}
          <h1 className="text-3xl  font-bold">Service with Passion</h1>
        </div>
        <div class=" shadow-lg rounded-2xl bg-[#031759] p-3 m-3 text-white  ">
          {/* <img src={AvatarThree} alt="" loading="lazy" /> */}
          <h1 className="text-3xl  font-bold">Professionalism</h1>
        </div>
        <div class=" bg-[#031759] p-3 m-3 text-white rounded-2xl ">
          {/* <img src={AvatarThree} alt="" loading="lazy" /> */}
          <h1 className="text-3xl  font-bold">Integrity </h1>
        </div>
        <div class=" bg-[#031759] p-3 m-3 text-white rounded-2xl">
          {/* <img src={AvatarThree} alt="" loading="lazy" /> */}
          <h1 className="text-3xl  font-bold">Respect for individual</h1>
        </div>
        <div class=" shadow-lg rounded-2xl bg-[#031759] p-3 m-3 text-white  ">
          {/* <img src={AvatarThree} alt="" loading="lazy" /> */}
          <h1 className="text-3xl  font-bold">Innovation</h1>
        </div>
        <div class=" shadow-lg rounded-2xl bg-[#031759] p-3 m-3 text-white ">
          {/* <img src={AvatarThree} alt="" loading="lazy" /> */}
          <h1 className="text-3xl  font-bold">Innovation</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
