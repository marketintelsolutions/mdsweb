import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="flex flex-wrap items-start text-gray-400 mx-auto bg-[#3E3E3E] px-8 py-40 border-t-8 border-[#FF3B00] w-full justify-around"
      id="footerSection"
    >
      <section className="text-sm mb-5">
        <h4 className="mb-10 text-bold text-2xl font-semibold text-white">
          About
        </h4>
        <li>Our Team</li>
        <li>Our Mission</li>
        <li>Our Vision</li>
      </section>

      <section className="text-sm mb-5">
        <h4 className="mb-10 text-bold text-2xl font-semibold text-white">
          Product
        </h4>
        <ul>
          <li>Technology Distribution</li>
          <li>Media & Entertainment</li>
          <li>FINTECH</li>
          <li>Managed Technology Services</li>
          <li>Procurement and distribution</li>
          <li>Smart Creatives</li>
        </ul>
      </section>

      <section className="text-sm mb-5">
        <h4 className="mb-10 text-bold text-2xl font-semibold text-white">
          Follow
        </h4>
        <li className="flex text-lg justify-between mb-4">
          <FaLinkedin />
          <FaTwitter />
        </li>
        <li className="flex justify-between text-lg">
          <FaInstagram />
          <FaFacebook />
        </li>
      </section>

      <section className="text-sm mb-5">
        <h4 className="mb-10 text-bold text-2xl font-semibold text-white">
          Support
        </h4>
        <li>+234(1)2718630</li>
        <li>
          <a href="mailto:info@marketintelsolutions.com">
            info@marketintelsolutions.com
          </a>
        </li>
      </section>
    </div>
  );
};

export default Footer;
