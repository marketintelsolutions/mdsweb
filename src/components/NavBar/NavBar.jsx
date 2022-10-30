import React, { useState } from "react";
import "./style.css";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useRoutes } from "react-router-dom";
import { FaHome, FaEnvelope, FaPhoneAlt, FaChevronDown } from 'react-icons/fa'

const NavBar = () => {
  const { pathname } = useLocation();
  const [showStaff, setShowStaff] = useState(false);
  const [showDirectors, setShowDirectors] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white ">
      <div className=" w-full border-b py-1 bg-blue-700 text-white">
        <div className="container-fluid xl:max-w-[100%] w-full h-full flex flex-wrap items-center justify-around lg:justify-around">
          <div className="flex items-center m-2 ">
            <FaPhoneAlt />
            <a
              href="tel:+23412718630"
              className="text-xs ml-1 mr-10 font-medium text-white"
            >
              +234 (1) 271 8630
            </a>
            <FaHome />
            <a
              href="https://goo.gl/maps/YQkx4EsJdUSinavS8"
              className="text-xs mx-3 font-medium text-white"
            >
              9 Elsie Femi Pearse St, Victoria Island 106104, Lagos
            </a>
          </div>
          <div className="flex items-center m-2">
            <a
              href="https://www.tiktok.com/@mdstech2?lang=en"
              className="text-xs font-medium text-white mx-3"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="https://twitter.com/MDSTech3"
              className="text-xs font-medium text-white mx-3"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/mds-tech-950666242/"
              className="text-xs font-medium text-white ml-3"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>



      {/* <nav className="px-2 bg-white shadow-lg">
        <div className="container flex flex-wrap justify-around items-center w-full">
          <a href="#" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex flex-row justify-around gap-5 p-2 mt-4 rounded-lg ">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
              </li>
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                
                <div id="dropdownNavbar" className="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
                      <div id="doubleDropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="right-start" style={{position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate(10px, 408px)"}}>
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My downloads</a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
      </nav> */}


      <div className="flex justify-around shadow-lg p-5 w-full">
        <div className="w-24 h-10">
          <img src={Logo} alt="" className="w-auto" />
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <a href="#">Home</a>

          {/* start of the dropdown */}
          <div class="group inline-block">
            <button
              class="outline-none focus:outline-none bg-white rounded-sm px-3 py-1 flex items-center min-w-32"
            >
              <span class="font-semibold flex-1">About</span>
              <span>
                <svg
                  class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </span>
            </button>
            <ul
              class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
            >
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Directors</li>
              <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button
                  class="w-full text-left flex items-center outline-none focus:outline-none"
                >
                  <span class="pr-1 flex-1">Directors</span>
                  <span class="mr-auto">
                    <svg
                      class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </span>
                </button>
                <ul
                  class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                >

                  <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button
                      class="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span class="pr-1 flex-1">Directors</span>
                      <span class="mr-auto">
                        <svg
                          class="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      class="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                    >
                      <li class="px-3 py-1 hover:bg-gray-100">Chris Oshiafi</li>
                      <li class="px-3 py-1 hover:bg-gray-100">Sina Alimi</li>
                      <li class="px-3 py-1 hover:bg-gray-100">Eric Okoruwa</li>
                    </ul>
                  </li>
                  <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button
                      class="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span class="pr-1 flex-1">Our Team</span>
                      <span class="mr-auto">
                        <svg
                          class="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      class="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                    >
                      <li class="px-3 py-1 hover:bg-gray-100">Emeka Osuocha</li>
                      <li class="px-3 py-1 hover:bg-gray-100">Jimmy Ogunnowo</li>
                      <li class="px-3 py-1 hover:bg-gray-100">Joseph Dele</li>
                      <li class="px-3 py-1 hover:bg-gray-100">Usman Ayobami</li>
                      <li class="px-3 py-1 hover:bg-gray-100">Ademola Olusesan</li>
                      <li className="px-3 py-1 hover:bg-gray-100">DSP Ayomide Oluwole</li>
                    </ul>
                  </li>

                </ul>
              </li>
            </ul>
          </div>
          {/* end of a dropdown */}

          <div class="group inline-block">
            <button
              class="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
            >
              <span class="pr-1 font-semibold flex-1">Products</span>
              <span>
                <svg
                  class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </span>
            </button>
            <ul
              class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
            >
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Fintech</li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Managed Technology Sevices</li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Smart Creative</li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Technology Distribution</li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Media & Entertainment</li>
            </ul>
          </div>

          {/* end of a dropdown */}

          <a href="mailto:info@marketintelsolutions.com" className="flex items-center gap-1">
            <FaEnvelope />
            <span>info@marketintelsolutions.com</span>
          </a>



        </div>

      </div>

      {/* <nav className="navbar navbar-expand-lg container py-1 app-container  ">
        <div className="container-fluid ">
          <a className="navbar-brand text-2xl font-bold" href="/#">
            <img src={Logo} alt="" className="w-[100px] xl:w-100px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-black" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item lg:mx-4 relative ">
                <Link
                  className="nav-link text-[#031759] font-medium text-base add-app-red-to-nav "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>


              <li className="nav-item lg:mx-4 relative">
                <div className="btn-group">
                  <a
                    className="nav-link text-[#031759] font-medium text-base add-app-red-to-nav "
                    aria-current="page"
                    href="/about"
                  >
                    About
                  </a>
                  <a
                    className="nav-link text-[#031759] font-medium text-base add-app-red-to-nav dropdown-toggle"
                    href="/about"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >&nbsp;</a>
                  <ul
                    className="dropdown-menu bg-[#F6F6F6]"
                    aria-labelledby="navbarDropdown"
                  ><li>
                  <a
                    className="dropdown-item relative"
                    href="/profile?name=Chris Oshiafi"
                    onMouseOver={() => setShowDirectors(true)}
                    onMouseLeave={() => setShowDirectors(false)}
                  >
                    Directors
                    {showDirectors && (
                      <div className="absolute bg-[#F6F6F6] border rounded-lg left-[101%] top-0 overflow-hidden">
                        <ul className=" bg-[#F6F6F6]">
                          <li>
                            <a
                              className="dropdown-item"
                              href="/profile?name=Chris Oshiafi"
                            >
                              Chris Oshiafi
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/profile?name=Sina Alimi"
                            >
                              Sina Alimi
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/profile?name=Eric Okoruwa"
                            >
                              Eric Okoruwa
                            </a>
                          </li>
                         
                        </ul>
                      </div>
                    )}
                  </a>
                </li>
                <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item relative"
                        href="/profile?name=Emeka Osuocha"
                        onMouseOver={() => setShowStaff(true)}
                        onMouseLeave={() => setShowStaff(false)}
                      >
                        Management Staff
                        {showStaff && (
                          <div className="absolute bg-[#F6F6F6] border rounded-lg left-[101%] top-0">
                            <ul className=" bg-[#F6F6F6]">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/profile?name=Emeka Osuocha"
                                >
                                  Emeka Osuocha
                                </a>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/profile?name=Jimmy Ogunnowo"
                                >
                                  Jimmy Ogunnowo
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </a>
                    </li>
                    
                    
                  </ul>
                </div>
              </li>
              <li className="nav-item lg:mx-4 relative ">
                <div className="btn-group">
                  <a
                    className="nav-link text-[#031759] font-medium text-base add-app-red-to-nav "
                    aria-current="page"
                    href={
                      pathname === "/"
                        ? "/#Technology Distribution"
                        : "/TechnologyDistribution"
                    }
                  >
                    Products
                  </a>
                  <a
                    className="nav-link text-[#031759] font-medium text-base add-app-red-to-nav dropdown-toggle"
                    href={
                      pathname === "/"
                        ? "/#Technology Distribution"
                        : "/TechnologyDistribution"
                    }
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></a>
                  <ul
                    className="dropdown-menu bg-[#F6F6F6]"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href={
                          pathname === "/"
                            ? "/#Technology Distribution"
                            : "/TechnologyDistribution"
                        }
                      >
                        Technology Distribution
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href={
                          pathname === "/"
                            ? "/#Media & Entertainment"
                            : "/MediaEntertainment"
                        }
                      >
                        Media & Entertainment
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href={pathname === "/" ? "/#FINTECH" : "/FINTECH"}
                      >
                        FINTECH
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href={
                          pathname === "/"
                            ? "/#Managed Technology Services"
                            : "/ManagedTechnologyServices"
                        }
                      >
                        Managed Technology Services
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href={
                          pathname === "/"
                            ? "/#ProcurementAndDistribution"
                            : "/ProcurementAndDistribution"
                        }
                      >
                        Procurement And Distribution
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

             

              <li className="nav-item lg:mx-4">
                <a
                  className="nav-link text-[#031759] font-medium text-base"
                  href="mailto:info@marketintelsolutions.com"
                >
                  ✉️ info@marketintelsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default NavBar;