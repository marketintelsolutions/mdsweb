import React from "react";
import "./style.css";
import Logo from "../../assets/Revised_Market_Intel_Logo_-_2019-removebg-preview.png";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg container py-4 app-container ">
      <div class="container-fluid max-w-[1300px]">
        <a class="navbar-brand text-2xl font-bold" href="#">
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
              <a
                class="nav-link text-[#212529] font-medium text-lg active"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li class="nav-item lg:mx-4 dropdown">
              <a
                class="nav-link text-[#212529] font-medium text-lg dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#Technology Distribution">
                    Technology Distribution
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#Media & Entertainment">
                    Media & Entertainment
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#FINTECH">
                    FINTECH
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#Managed Technology Services">
                    Managed Technology Services
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item lg:mx-4">
              <a
                class="nav-link text-[#212529] font-medium text-lg"
                href="#team"
              >
                About
              </a>
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
            <li class="nav-item lg:mx-4">
              <a
                class="nav-link text-[#212529] font-medium text-lg"
                href="tel:+23436137042"
              >
                ☎ +2348035019716
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
