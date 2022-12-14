import React, { useState } from "react";
import "./style.css";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaPhoneAlt,
  FaBars,
  FaAngleDown,
} from "react-icons/fa";

const NavBar = () => {
  const { pathname } = useLocation();

  const [showNav, setShowNav] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showExcos, setShowExcos] = useState(false);
  const toggle = () => {
    setShowNav(!showNav);
  };
  const toggleExcos = () => {
    setShowExcos(!showExcos);
  };
  const toggleTeam = () => {
    setShowTeam(!showTeam);
  };
  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };
  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className="mb-16">
      <div className="lg:block fixed hidden top-0 left-0 right-0 z-10 bg-white ">
        <div className=" w-full border-b py-1 bg-blue-700 text-white">
          <div className=" lg:max-w-[73%] mx-auto w-full h-full flex flex-wrap items-center justify-around lg:justify-between">
            <div className="flex items-center m-2 ">
              <FaPhoneAlt />
              <a
                href="tel:+23412718630"
                className="text-xs ml-1 mr-10 font-normal text-white"
              >
                +234 (1) 271 8630
              </a>
              <FaHome />
              <a
                href="https://goo.gl/maps/YQkx4EsJdUSinavS8"
                className="text-xs mx-3 font-normal text-white"
              >
                9 Elsie Femi Pearse St, Victoria Island 106104, Lagos
              </a>
            </div>
            <div className="flex items-center m-2">
              <a
                href="https://www.tiktok.com/@mdstech2?lang=en"
                className="text-xs font-normal text-white mx-3"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a
                href="https://twitter.com/MDSTech3"
                className="text-xs font-normal text-white mx-3"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/in/mds-tech-950666242/"
                className="text-xs font-normal text-white ml-3"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex lg:max-w-[73%] mx-auto lg:justify-between  py-5 w-full text-[#888888]">
          <div className="w-24 h-10">
            <Link to="/">
              <img src={Logo} alt="" className="w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-10 font-normal">
            <Link to="/">Home</Link>
            <span class="ml-5">
              <Link to="about">About Us</Link>
            </span>

            <div class="group inline-block">
              <button class="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                <span class="pr-1 font-normal flex-1">Products</span>
                <span>
                  <svg
                    class="fill-current h-4 w-4 transform group-hover:-rotate-180
          transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                class="bg-white  rounded-sm transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top min-w-32 shadow-sm"
              >
                <Link to={"/Fintech"}>
                  <li className="rounded-sm w-[250px] min-h-[70px] hover:bg-[#F26836] text-[#888888] hover:text-white py-5 px-4 text-xl leading-10 border-b">
                    Fintech
                  </li>
                </Link>
                <Link to={"/ManagedTechnologyServices"}>
                  <li class="rounded-sm w-[250px] min-h-[70px] hover:bg-[#F26836] text-[#888888] hover:text-white py-5 px-4 text-xl leading-10 border-b">
                    Managed <br /> Technology <br /> Sevices
                  </li>
                </Link>
                <Link to={"/SmartCreative"}>
                  <li class="rounded-sm w-[250px] min-h-[70px] hover:bg-[#F26836] text-[#888888] hover:text-white py-5 px-4 text-xl leading-10 border-b">
                    Smart Creative
                  </li>
                </Link>
                <Link to={"/TechnologyDistribution"}>
                  <li class="rounded-sm w-[250px] min-h-[70px] hover:bg-[#F26836] text-[#888888] hover:text-white py-5 px-4 text-xl leading-10 border-b">
                    Technology <br /> Distribution
                  </li>
                </Link>
                <Link to={"/MediaEntertainment"}>
                  <li class="rounded-sm w-[250px] min-h-[70px] hover:bg-[#F26836] text-[#888888] hover:text-white py-5 px-4 text-xl leading-10 border-b">
                    Media & <br />
                    Entertainment
                  </li>
                </Link>
              </ul>
            </div>
            {/* end of a dropdown */}
            <a
              href="mailto:info@ziltchone.com"
              className="flex items-center gap-1 underline"
            >
              <FaEnvelope />
              <span>info@ziltchone.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className=" lg:hidden fixed  top-0 left-0 right-0 z-10 bg-[rgba(255,255,255,0.52)]  ">
        <div className="bg-[rgba(255,255,255,0.52)] p-3 flex justify-between items-center border-b-8 border-[#0000FF] ">
          <div className="w-24 h-10">
            <Link to="/">
              <img src={Logo} alt="" className="w-auto" />
            </Link>
          </div>
          <FaBars color="#0000FF" size={30} onClick={toggle} />
        </div>
        {showNav && (
          <div className="h-screen w-screen fixed z-10 top-0 bg-[#F26836] overflow-y-scroll p-3 rounded-b-3xl pb-10">
            <div className="flex justify-end ">
              <FaBars
                color="white"
                size={30}
                onClick={toggle}
                className="rotate-90"
              />
            </div>
            <div className="mt-20">
              <ul>
                <Link to="/">
                  <li
                    className="text-white font-[900] text-3xl my-6"
                    onClick={toggle}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/About">
                  <li
                    className="text-white font-[900] text-3xl my-6 flex items-center"
                    onClick={toggle}
                  >
                    About{" "}
                  </li>
                </Link>
                {/* <li className="text-white font-[900] text-3xl my-6 flex items-center">
                  About{" "}
                  <FaAngleDown
                    color="white"
                    size={30}
                    className={`${showAbout && "rotate-180"}`}
                    onClick={toggleAbout}
                  />
                </li> */}
                {showAbout && (
                  <div>
                    <li className="text-white font-[400] text-xl ml-3 my-6 flex items-center">
                      Directors
                      <FaAngleDown
                        color="white"
                        size={30}
                        onClick={toggleExcos}
                        className={`${showExcos && "rotate-180"}`}
                      />
                    </li>
                    {showExcos && (
                      <div>
                        <ul class="min-w-32">
                          <Link to="/profile?name=Chris Oshiafi">
                            <li
                              class="px-3 py-1 my-6 hover:bg-gray-100 text-[#ffffff]"
                              onClick={toggle}
                            >
                              Chris Oshiafi
                            </li>
                          </Link>
                          <Link to="/profile?name=Sina Alimi">
                            <li
                              class="px-3 py-1 my-6 hover:bg-gray-100 text-[#ffffff]"
                              onClick={toggle}
                            >
                              Sina Alimi
                            </li>
                          </Link>
                          <Link to="/profile?name=Eric Okoruwa">
                            <li
                              class="px-3 py-1 my-6 hover:bg-gray-100 text-[#ffffff]"
                              onClick={toggle}
                            >
                              Eric Okoruwa
                            </li>
                          </Link>
                        </ul>
                      </div>
                    )}
                    <li className="text-white font-[400] text-xl ml-3 my-6 flex items-center">
                      Our Team
                      <FaAngleDown
                        color="white"
                        size={30}
                        onClick={toggleTeam}
                        className={`${showTeam && "rotate-180"}`}
                      />
                    </li>
                    {showTeam && (
                      <div>
                        <ul class="min-w-32">
                          <Link to="profile?name=Emeka Osuocha">
                            <li
                              class="px-3 py-1 my-6 hover:bg-gray-100 text-[#ffffff]"
                              onClick={toggle}
                            >
                              Emeka Osuocha
                            </li>
                          </Link>
                          <Link to="profile?name=Jimmy Ogunnowo">
                            <li
                              class="px-3 py-1 my-6 hover:bg-gray-100 text-[#ffffff]"
                              onClick={toggle}
                            >
                              Jimmy Ogunnowo
                            </li>
                          </Link>
                          {/* <Link to="profile?name=Joseph Dele">
                          <li class="px-3 py-1 hover:bg-gray-100 text-[#ffffff]" onClick={toggle} >
                            Joseph Dele
                          </li>
                        </Link>
                        <Link to="profile?name=Usman Ayobami">
                          <li class="px-3 py-1 hover:bg-gray-100 text-[#888888]">
                            Usman Ayobami
                          </li>
                        </Link>
                        <Link to="profile?name=Ademola Olusesan">
                          <li class="px-3 py-1 hover:bg-gray-100 text-[#888888]">
                            Ademola Olusesan
                          </li>
                        </Link>
                        <Link to="profile?name=DSP Ayomide Oluwole">
                          <li className="px-3 py-1 hover:bg-gray-100 text-[#888888]">
                            DSP Ayomide Oluwole
                          </li>
                        </Link> */}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                <Link to="/Products">
                  <li
                    className="text-white font-[900] text-3xl my-6 flex items-center"
                    onClick={toggle}
                  >
                    Products{" "}
                  </li>
                </Link>
                {/* {showProducts && (
                  <ul class=" min-w-32">
                    <Link to={pathname === "/" ? "/#Fintech" : "/Fintech"}>
                      <li
                        onClick={toggle}
                        className="rounded-sm px-3 my-6 py-1 hover:bg-gray-100 text-[#ffffff]"
                      >
                        Fintech
                      </li>
                    </Link>
                    <Link
                      to={
                        pathname === "/"
                          ? "/#Managed Technology Services"
                          : "/ManagedTechnologyServices"
                      }
                    >
                      <li
                        onClick={toggle}
                        class="rounded-sm px-3 my-6 py-1 hover:bg-gray-100 text-[#ffffff]"
                      >
                        Managed Technology Sevices
                      </li>
                    </Link>
                    <Link
                      to={
                        pathname === "/" ? "/#Smart Creative" : "/SmartCreative"
                      }
                    >
                      <li
                        onClick={toggle}
                        class="rounded-sm px-3 my-6 py-1 hover:bg-gray-100 text-[#ffffff]"
                      >
                        Smart Creative
                      </li>
                    </Link>
                    <Link
                      to={
                        pathname === "/"
                          ? "/#Technology Distribution"
                          : "/TechnologyDistribution"
                      }
                    >
                      <li
                        onClick={toggle}
                        class="rounded-sm px-3 my-6 py-1 hover:bg-gray-100 text-[#ffffff]"
                      >
                        Technology Distribution
                      </li>
                    </Link>
                    <Link
                      to={
                        pathname === "/"
                          ? "/#Media & Entertainment"
                          : "/MediaEntertainment"
                      }
                    >
                      <li
                        onClick={toggle}
                        class="rounded-sm px-3 my-6 py-1 hover:bg-gray-100 text-[#ffffff]"
                      >
                        Media & Entertainment
                      </li>
                    </Link>
                  </ul>
                )} */}
                <Link to="/ContactUs">
                  <li
                    className="text-white font-[900] text-3xl my-6"
                    onClick={toggle}
                  >
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
