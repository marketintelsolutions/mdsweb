import React from "react";
import "./style.css";
import Logo from "../../assets/Revised_Market_Intel_Logo_-_2019-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white ">
      <div className=" w-full border-b py-2">
        <div class="container-fluid max-w-[1300px] w-full h-full flex flex-wrap items-center justify-center lg:justify-between">
          <div className="flex items-center m-2 ">
            <span className="text-xs mr-3 font-medium text-gray-500">
              📞 + (234) 8035019716
            </span>
            <span className="text-xs mx-3 font-medium text-gray-500">
              🌎 9 Elsie Femi Pearse St, Victoria Island 106104, Lagos
            </span>
          </div>
          <div className="flex items-center m-2">
            <span className="text-xs font-medium text-gray-500 mx-3">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span className="text-xs font-medium text-gray-500 mx-3">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className="text-xs font-medium text-gray-500 ml-3">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg container py-1 app-container  ">
        <div class="container-fluid max-w-[1300px]">
          <a class="navbar-brand text-2xl font-bold" href="/#">
            <img src={Logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item lg:mx-4">
                <Link
                  class="nav-link text-[#212529] font-medium text-lg active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item lg:mx-4 dropdown">
                <a
                  class="nav-link text-[#212529] font-medium text-lg dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/#Technology Distribution">
                      Technology Distribution
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#Media & Entertainment">
                      Media & Entertainment
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#FINTECH">
                      FINTECH
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="/#Managed Technology Services"
                    >
                      Managed Technology Services
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item lg:mx-4">
                <Link
                  class="nav-link text-[#212529] font-medium text-lg"
                  to="/about"
                >
                  About
                </Link>
              </li>
              {/* <li class="nav-item lg:mx-4">
              <a class="nav-link text-[#212529] font-medium text-lg">Testimonials</a>
            </li> */}
              <li class="nav-item lg:mx-4">
                <a
                  class="nav-link text-[#212529] font-medium text-lg"
                  href="mailto:info@marketintelsolutions.com"
                >
                  ✉️ info@marketintelsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
