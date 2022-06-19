import React from "react";
import AvatarThree from "../assets/western-man-4975942-4159828 1.png";

const About = () => {
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

  const ShowBox = ({ i }) => (
    <div className="w-2/5 h-[400px] bg-[#031759]  rounded-2xl hover:bg-opacity-80 hover:text-black text-white shadow-lg m-5 flex-col flex items-center justify-center p-5">
      <h1 className="text-6xl font-bold ">{i.title}</h1>
      <p className="text-3xl mt-5  ">{i.description}</p>
    </div>
  );
  return (
    <div className=" max-w-[1300px] mx-auto pb-96">
      <h1 className="text-6xl font-bold lg:w-2/3 mx-auto  my-12">
        Marketintel Technology, Media & Digital Solutions Limited (MDS)
      </h1>
      <p className="text-3xl mt-10 ">
        Marketintel Digital Solutions Limited (MDS) is a consolidated
        Technology, Communications, Media and Entertainment business service
        provider in Nigeria. A member of PanAfrican Capital Holdings Limited.
      </p>
      <p className="text-3xl mt-10 ">
        Marketintel has a bouquet of budding Local and International
        partnerships and licenses within its portfolio. Marketintel offers a
        wide range of services to consumers, corporates and public institutions.
      </p>
      <p className="text-3xl mt-10 ">
        Marketintel has operating and non-operating interests in businesses
        across ICT, Media and Entertainment, with specific activities in:
      </p>

      <h1 className="text-6xl font-bold lg:w-2/3 mx-auto  my-12">Vision</h1>
      <p className="text-3xl mt-10 ">
        To be the foremost Technology solutions provider in our chosen markets
        and create value for all our stakeholders
      </p>
      <h1 className="text-6xl font-bold lg:w-2/3 mx-auto  my-12">
        The three key elements to Our vision statement
      </h1>
      <div className="my-16 flex justify-around flex-wrap">
        {visionElements.map((i, index) => (
          <ShowBox i={i} />
        ))}
      </div>
      <h1 className="text-6xl font-bold lg:w-2/3 mx-auto  my-12">Mission</h1>
      <p className="text-3xl mt-10 ">
        To enrich lives using technology-driven products and services
      </p>
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
