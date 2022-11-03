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
        className=" lg:flex hidden flex-wrap items-start text-gray-400 mx-auto bg-[#3E3E3E] px-8 py-40 border-t-8 border-[#FF3B00] w-full justify-around"
        id="footerSection"
      >
        <section className="text-sm mb-5">
          <h4 className="mb-10 text-bold text-2xl font-semibold text-white">
            About
          </h4>

          <NavLink to="/profile?name=Emeka Osuocha">
            <li>Our Team</li>
          </NavLink>
          <NavLink to="/about#mission">
            <li>Our Mission</li>
          </NavLink>
          <NavLink to="/about#vision">
            <li>Our Vision</li>
          </NavLink>
        </section>
        <section className="text-sm mb-5">
          <h4 className="mb-10 text-bold text-2xl font-semibold text-white">
            Product
          </h4>
          <ul>
            <Link to={pathname === "/" ? "/#Fintech" : "/Fintech"}>
              <li>Fintech</li>
            </Link>
            <Link
              to={
                pathname === "/"
                  ? "/#Managed Technology Services"
                  : "/ManagedTechnologyServices"
              }
            >
              <li>Managed Technology Sevices</li>
            </Link>
            <Link to={pathname === "/" ? "/#Smart Creative" : "/SmartCreative"}>
              <li>Smart Creative</li>
            </Link>
            <Link
              to={
                pathname === "/"
                  ? "/#Technology Distribution"
                  : "/TechnologyDistribution"
              }
            >
              <li>Technology Distribution</li>
            </Link>
            <Link
              to={
                pathname === "/"
                  ? "/#Media & Entertainment"
                  : "/MediaEntertainment"
              }
            >
              <li>Media & Entertainment</li>
            </Link>
          </ul>
        </section>
        <section className="text-sm mb-5">
          <h4 className="mb-10 text-bold text-2xl font-semibold text-white">
            Follow
          </h4>
          <li className="flex text-lg justify-between mb-4">
            <a href="https://twitter.com/MDSTech3" className=" text-white ">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mds-tech-950666242/"
              className=" text-white  "
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="flex justify-between text-lg">
            <a
              href="https://www.tiktok.com/@mdstech2?lang=en"
              className="  text-white "
            >
              <FaTiktok />
            </a>
          </li>
        </section>
        <section className="text-sm mb-5">
          <h4 className="mb-10 text-bold text-2xl font-semibold text-white">
            Support
          </h4>
          <li className="">
            <a href="tel:+23412718630" className=" ">
              +234 (1) 271 8630
            </a>
          </li>
          <li className="">
            <a href="mailto:info@marketintelsolutions.com">
              info@marketintelsolutions.com
            </a>
          </li>
        </section>
      </div>
      <div
        className="lg:hidden  text-gray-400 mx-auto bg-[#3E3E3E] p-8 py-20 border-t-8 border-[#FF3B00]"
        id="footerSection"
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/profile?name=Emeka Osuocha">
          <li>Our Team</li>
        </Link>
        <section className="text-sm mb-5 mt-10">
          <h4 className="mb-5 font-thin text-2xl text-white">Follow</h4>
          <li className="flex text-lg justify-start mb-4 gap-x-4">
            <a
              href="https://www.tiktok.com/@mdstech2?lang=en"
              className="  text-white "
            >
              <FaTiktok />
            </a>
            <a href="https://twitter.com/MDSTech3" className=" text-white ">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mds-tech-950666242/"
              className=" text-white  "
            >
              <FaLinkedin />
            </a>
          </li>
        </section>
        <section className="text-sm mb-5 mt-10">
          <li className="font-thin flex items-center">
            <FaEnvelope className="mr-3" />
            <a href="mailto:info@marketintelsolutions.com">
              info@marketintelsolutions.com
            </a>
          </li>
          <li className="font-thin flex items-center">
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
