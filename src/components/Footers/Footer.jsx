import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./footer.css";
import {
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div
        className=" lg:flex hidden flex-wrap items-start text-gray-400 mx-auto bg-[#F26836] px-8 py-20   w-full justify-around border"
        id="footerSection"
      >
        <section className="text-sm mb-5">
          <h4 className="mb-10 text-bold text-2xl font-[900] text-white">
            About
          </h4>

          <Link to="/team">
            <li className="mb-5 text-xl font-normal ">Our Team</li>
          </Link>
          <Link to="/about#mission">
            <li className="mb-5 text-xl font-normal ">Our Mission</li>
          </Link>
          <Link to="/about#vision">
            <li className="mb-5 text-xl font-normal ">Our Vision</li>
          </Link>
        </section>
        <section className="text-sm mb-5">
          <h4 className="mb-10 text-bold text-2xl font-[900] text-white">
            Product
          </h4>
          <ul>
            <Link to={"/Fintech"}>
              <li className="mb-5 text-xl font-normal ">Fintech</li>
            </Link>
            <Link to={"/ManagedTechnologyServices"}>
              <li className="mb-5 text-xl font-normal ">
                Managed Technology Sevices
              </li>
            </Link>
            <Link to={"/SmartCreative"}>
              <li className="mb-5 text-xl font-normal ">Smart Creative</li>
            </Link>
            <Link to={"/TechnologyDistribution"}>
              <li className="mb-5 text-xl font-normal ">
                Technology Distribution
              </li>
            </Link>
            <Link to={"/MediaEntertainment"}>
              <li className="mb-5 text-xl font-normal ">
                Media & Entertainment
              </li>
            </Link>
          </ul>
        </section>
        <section className="text-sm mb-5">
          <h4 className="mb-10 text-bold text-2xl font-[900] text-white">
            Follow
          </h4>
          <li className="flex text-lg justify-between mb-4 gap-10">
            <a
              href="https://www.linkedin.com/in/mds-tech-950666242/"
              className=" text-white  "
            >
              <FaLinkedin size={34} />
            </a>
            <a href="https://twitter.com/MDSTech3" className=" text-white ">
              <FaTwitter size={34} />
            </a>
          </li>
          <li className="flex justify-between text-lg">
            <a
              href="https://www.tiktok.com/@mdstech2?lang=en"
              className="  text-white "
            >
              <FaTiktok size={34} />
            </a>
          </li>
        </section>
        <section className="text-sm mb-5">
          <h4 className="mb-10 text-bold text-2xl font-[900] text-white">
            Support
          </h4>
          <li className="font-normal text-xl mb-5 flex items-center">
            <FaPhoneAlt className="mr-3" />
            <a href="tel:+23412718630" className=" ">
              +234 (1) 271 8630
            </a>
          </li>
          <li className="font-normal text-xl mb-5 flex items-center">
            <FaEnvelope className="mr-3" />
            <a href="mailto:info@ziltchone.com">info@ziltchone.com</a>
          </li>
        </section>
      </div>
      <div
        className="lg:hidden  text-gray-400 mx-auto bg-[#3E3E3E] p-8 py-20 border-t-8 border-[#FF3B00]"
        id="footerSection"
      >
        <Link to="/">
          <li className="text-2xl font-medium mb-5">Home</li>
        </Link>
        <Link to="/about">
          <li className="text-2xl font-medium mb-5">About</li>
        </Link>
        <Link to="/profile?name=Emeka Osuocha">
          <li className="text-2xl font-medium mb-5">Our Team</li>
        </Link>
        <section className="text-sm mb-5 mt-10">
          <h4 className="mb-5 font-light text-2xl text-white">Follow</h4>
          <li className="flex text-lg justify-start mb-4 gap-x-5">
            <a
              href="https://www.tiktok.com/@mdstech2?lang=en"
              className="  text-white "
            >
              <FaTiktok size={34} />
            </a>
            <a href="https://twitter.com/MDSTech3" className=" text-white ">
              <FaTwitter size={34} />
            </a>
            <a
              href="https://www.linkedin.com/in/mds-tech-950666242/"
              className=" text-white  "
            >
              <FaLinkedin size={34} />
            </a>
          </li>
        </section>
        <section className="text-[15px] mb-5 mt-10">
          <li className="font-normal flex items-center text-sm mb-5 underline">
            <FaEnvelope className="mr-3" />
            <a href="mailto:info@ziltchone.com">info@ziltchone.com</a>
          </li>
          <li className="font-normal flex items-center text-sm mb-5">
            <FaPhoneAlt className="mr-3" />
            <a href="tel:+23412718630" className=" ">
              +234 (1) 271 8630
            </a>
          </li>
        </section>
      </div>
    </div>
  );
};

export default Footer;
