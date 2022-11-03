import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import illustration from "../assets/contactgif.gif";

export default function ContactUs() {
  const [showForm, setShowForm] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <div className="xl:max-w-[80%] container mx-auto flex    flex-wrap  items-center xl:pt-20 xl:py-24 lg:py-10 p-3 justify-b xl:justify-around ">
        <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-start bg-white lg:order-1 order-2 ">
          <div className="xl:max-w-[500px]">
            <h1 className="lg:text-9xl text-3xl font-[900] text-[#1233FE] flex">
              Contact <span className="text-[#F26836] ml-2"> Us</span>
            </h1>
          </div>
        </div>
        <div className="lg:w-5/12 w-full lg:order-2 order-1 ">
          <img src={illustration} alt="" className="w-full" />
        </div>
      </div>
      <div className="xl:max-w-[50%] container mx-auto flex   text-center flex-wrap  items-center xl:pt-20 xl:py-24 lg:py-10 p-3 justify-b xl:justify-around ">
        <h1 className="text-3xl font-[900] text-[#F26836] flex mb-5">
          Get in Touch
        </h1>
        <p>
          Do you want to make an enquiry, a complaint or do you just want to
          know more about us? Then you’re on the right page. Send us a message
          right here or contact us on any of the channels listed below
        </p>
      </div>

      <div className="xl:max-w-[70%] container mx-auto flex flex-wrap  items-start xl:pt-20 xl:py-24 lg:py-10 p-3 justify-b xl:justify-around ">
        <div className="w-[40%] bg-white shadow-lg p-5 rounded-lg">
          <h1 className="text-3xl font-[900] text-[#888888] flex mb-5">
            Send Us A Message
          </h1>
          <form
            className="container  mx-auto my-5"
            onSubmit={async (e) => {
              e.preventDefault();
              setSendingRequest(true);
              // await addRequest({ type, text, email, phone });

              setSendingRequest(false);
              setShowForm(false);
              setShow(true);
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-left">Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder=""
              className="w-full  bg-gray-100 text-lg p-3 my-3 rounded-lg"
            />
            <p className="text-left">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder=""
              className="w-full  bg-gray-100 text-lg p-3 my-3 rounded-lg"
            />
            <p className="text-left">Subject</p>
            <input
              onChange={(e) => setSubject(e.target.value)}
              required
              type="text"
              placeholder=""
              className="w-full  bg-gray-100 text-lg p-3 my-3 rounded-lg"
            />
            <p className="text-left">Message</p>
            <textarea
              required
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder=""
              className="w-full  bg-gray-100 text-lg p-3 my-3 rounded-lg"
              rows={10}
            />

            <button
              className="py-3 text-white mt-3 bg-red-600 px-10 "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-[40%] bg-white shadow-lg p-5 rounded-lg">
          <h1 className="text-3xl font-[900] text-[#1233FE] flex mb-5">
            Contact Info
          </h1>

          <div className="flex items-center my-10">
            <FaMapMarkerAlt size={30} color="#888888" />
            <div className="ml-5 ">
              <p className="text-2xl font-[400] text-[#F26836]">
                Our Location{" "}
              </p>
              <p>9 Elsie Femi Pearse St, Victoria Island 106104, Lagos</p>
            </div>
          </div>

          <div className="flex items-center my-10">
            <FaPhoneAlt size={30} color="#888888" />
            <div className="ml-5 ">
              <p className="text-2xl font-[400] text-[#F26836]">Call Us</p>
              <a href="tel:+23412718630" className=" ">
                +234 (1) 271 8630
              </a>
            </div>
          </div>

          <div className="flex items-center my-10">
            <FaEnvelope size={30} color="#888888" />
            <div className="ml-5 ">
              <p className="text-2xl font-[400] text-[#F26836]">Our Email</p>
              <a href="mailto:info@marketintelsolutions.com">
                info@marketintelsolutions.com
              </a>
            </div>
          </div>
          <div className="my-10">
            <p className="text-3xl font-[700] text-[#F26836]">Follow Us</p>
            <li className="flex text-lg justify-start mb-4 gap-x-4 mt-5">
              <a
                href="https://www.tiktok.com/@mdstech2?lang=en"
                className="  text-white "
              >
                <FaTiktok size={30} color="#888888" />
              </a>
              <a href="https://twitter.com/MDSTech3" className=" text-white ">
                <FaTwitter size={30} color="#888888" />
              </a>
              <a
                href="https://www.linkedin.com/in/mds-tech-950666242/"
                className=" text-white  "
              >
                <FaLinkedin size={30} color="#888888" />
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
