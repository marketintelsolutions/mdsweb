import React, { useEffect, useState } from "react";
import Locations from "../../assets/Locations 1.png";
import { Link } from "react-router-dom";
import illustration from "../../assets/illustration.png";
import { addRequest } from "../../firebase";
import BlueTextPlusImageRow from "../../components/Shared/BlueTextPlusImageRow";

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

  const [showForm, setShowForm] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [type, setType] = useState("Hardware");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(false);
  const ToastShow = ({ visible, close, text }) => {
    useEffect(() => {
      setTimeout(() => {
        close();
      }, 2000);
    }, [visible]);
    if (!visible) return null;

    return (
      <div class="bg-green-500 z-20 fixed bottom-0 end-0 p-3 w-1/2 h-14 flex items-center ">
        <small onClick={close} className="cursor-pointer">
          Close
        </small>
        <div className="w-full">{text}</div>
      </div>
    );
  };
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
      {/* <BlueTextPlusImageRow
        header={`Managed \n Technology Services`}
        text={`ZILTCHONE is a consolidated technology services company that
          offers a bouquet of Managed IT Services. Our team of world-class
          talents genuinely care about the relationships we build.\n They
          understand that response and precision are key to a successful
          partnership.`}
        image={illustration}
      /> */}
      <div className="xl:max-w-[73%] container mx-auto flex lg:my-0 flex-wrap  items-center lg:p-0 p-6  xl:justify-between ">
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-6xl text-3xl leading-[107%] font-[900] text-[#0D229E] ">
              Managed Technology Services
            </h1>
            <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
              ZILTCHONE is a consolidated technology services company that
              offers a bouquet of Managed IT Services. Our team of world-class
              talents genuinely care about the relationships we build.
            </p>
            <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
              They understand that response and precision are key to a
              successful partnership.
            </p>
          </div>
        </div>
        <img
          src={illustration}
          alt=""
          className="lg:w-1/2 w-full lg:order-2 order-1 mb-5"
        />
      </div>

      <div className="bg-[#FAFAFA] lg:p-20 p-10">
        <h3 className="lg:mb-20  mb-10 text-center lg:text-3xl text-2xl font-medium text-[#888888]">
          Our Managed Technology Services are
        </h3>
        <div className="  w-full flex items-center     flex-wrap justify-center lg:gap-20 gap-10  ">
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
              <p
                className="lg:text-xl text-sm
        leading-8    lg:leading-10"
              >
                {i.description}
              </p>
              <Link to={i.link}>Read more...</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:max-w-[73%] container mx-auto flex    items-center lg:p-0 p-6  xl:justify-between xl:my-20 lg:my-10 flex-wrap    xl:pt-0 lg:mb-40 xl:py-24 lg:py-10  ">
        <div className="lg:w-1/2 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 lg:mt-0 mt-5">
          <div className="">
            <h1 className="lg:text-6xl text-3xl leading-[107%] font-[900] text-[#0D229E] ">
              Procurement And Distribution
            </h1>
            <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
              We understand that every client has specific needs, and requires
              different hardware and software to meet their requirements. Our
              Engineers can assist with locating and securing any infrastructure
              or systems to your exact specifications.
            </p>
            <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
              We have extensive strategic relationships with several OEMs that
              our clients are able to leverage to receive competitive and
              discounted rates that helps them save money. In addition, clients
              also benefit from single-source billing, making the process
              relatively simple and hassle-free.
            </p>
            <p className="lg:text-xl text-sm leading-8    lg:leading-10 mt-5 text-[#727272] my-10">
              We source and procure servers, networking equipment, cabling,
              desktops, laptops, peripherals, phone systems, and all other
              assets needed to run optimally. Ziltch Technologies will manage
              the entire process so that you and your team can focus on your
              business. We deliver all quotes and estimates so that there are no
              surprises and everything is kept transparent, with prior
              approval. 
            </p>

            {!showForm && (
              <button
                onClick={() => {
                  setShowForm(true);
                }}
                className="bg-[#F26836] rounded-full text-white p-4 px-6 mt-4"
              >
                Send Us A Request
              </button>
            )}
          </div>
        </div>
        <img
          src={Locations}
          alt=""
          className="lg:w-1/2 w-full lg:order-2 order-1 p-5"
        />
      </div>

      {showForm && (
        <form
          className="container lg:w-[40%] p-6   mx-auto mb-20"
          onSubmit={async (e) => {
            e.preventDefault();
            setSendingRequest(true);
            await addRequest({ type, text, email, phone });

            setSendingRequest(false);
            setShowForm(false);
            setShow(true);
            // window.scrollTo(0, 0);
          }}
        >
          <p className="text-left">Select Type</p>
          <select
            className="w-full h-14 bg-gray-100 text-lg p-3 my-3 rounded-lg"
            required
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Hardware">
              Hardware (Laptop, Printers, Accesories e.t.c.)
            </option>
            <option value="Licenses">Licenses</option>
            <option value="Consumables">Consumables</option>
          </select>
          <p className="text-left">Enter details of your request.</p>
          <textarea
            required
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="E.g. I need a HP Pro-Book with 256GB SSD and 16GB RAM."
            className="w-full  bg-gray-100 text-lg p-3 my-3 rounded-lg"
            rows={10}
          />
          <p className="text-left">Your Email.</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="johndoe@email.com"
            className="w-full  bg-gray-100 text-lg p-3 my-3 rounded-lg"
          />
          <p className="text-left">Your Phone Number.</p>
          <input
            onChange={(e) => setPhone(e.target.value)}
            required
            type="text"
            placeholder="+234 000 000 000"
            className="w-full  bg-gray-100 text-lg p-3 my-3 rounded-lg"
          />
          <div className="flex justify-around">
            <button
              className="bg-[#393939] rounded-full text-white p-2 px-10 mt-4"
              onClick={() => {
                setShowForm(false);
              }}
              type="button"
            >
              Cancel
            </button>
            <button
              className="bg-[#F26836] rounded-full text-white p-2 px-10 mt-4"
              onClick={() => {}}
              type="submit"
            >
              {sendingRequest ? "Sending Request..." : "Send Request"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ManagedTechnologyServices;
