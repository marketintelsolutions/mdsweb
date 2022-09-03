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

const NavBar = () => {
  const { pathname } = useLocation();
  const [showStaff, setShowStaff] = useState(false);
  const [showDirectors, setShowDirectors] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white ">
      <div className=" w-full border-b py-2 bg-[#031759] text-white">
        <div class="container-fluid xl:max-w-[73%] w-full h-full flex flex-wrap items-center justify-center lg:justify-between">
          <div className="flex items-center m-2 ">
            <a
              href="tel:+23412718630"
              className="text-xs mr-3 font-medium text-white"
            >
              📞 +234 (1) 271 8630
            </a>
            <a
              href="https://goo.gl/maps/YQkx4EsJdUSinavS8"
              className="text-xs mx-3 font-medium text-white"
            >
              🌎 9 Elsie Femi Pearse St, Victoria Island 106104, Lagos
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
      <nav class="navbar navbar-expand-lg container py-1 app-container  ">
        <div class="container-fluid ">
          <a class="navbar-brand text-2xl font-bold" href="/#">
            <img src={Logo} alt="" className="w-[100px] xl:w-[200px]" />
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
              <li class="nav-item lg:mx-4 relative ">
                <Link
                  class="nav-link text-[#031759] font-medium text-lg add-app-red-to-nav "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item lg:mx-4 relative ">
                <div class="btn-group">
                  <a
                    class="nav-link text-[#031759] font-medium text-lg add-app-red-to-nav "
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
                    class="nav-link text-[#031759] font-medium text-lg add-app-red-to-nav dropdown-toggle"
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
                    class="dropdown-menu bg-[#F6F6F6]"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        class="dropdown-item"
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
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
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
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href={pathname === "/" ? "/#FINTECH" : "/FINTECH"}
                      >
                        FINTECH
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
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
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
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

              <li class="nav-item lg:mx-4 relative">
                <div class="btn-group">
                  <a
                    class="nav-link text-[#031759] font-medium text-lg add-app-red-to-nav "
                    aria-current="page"
                    href="/about"
                  >
                    About
                  </a>
                  <a
                    class="nav-link text-[#031759] font-medium text-lg add-app-red-to-nav dropdown-toggle"
                    href="/about"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></a>
                  <ul
                    class="dropdown-menu bg-[#F6F6F6]"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        class="dropdown-item relative"
                        href="/profile?name=Emeka Osuocha"
                        onMouseOver={() => setShowStaff(true)}
                        onMouseLeave={() => setShowStaff(false)}
                      >
                        Management Staff
                        {showStaff && (
                          <div className="absolute bg-[#F6F6F6] border rounded-lg left-[101%] top-0">
                            <ul class=" bg-[#F6F6F6]">
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="/profile?name=Emeka Osuocha"
                                >
                                  Emeka Osuocha
                                </a>
                              </li>
                              <li>
                                <hr class="dropdown-divider" />
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
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
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        class="dropdown-item relative"
                        href="/profile?name=Chris Oshiafi"
                        onMouseOver={() => setShowDirectors(true)}
                        onMouseLeave={() => setShowDirectors(false)}
                      >
                        Directors
                        {showDirectors && (
                          <div className="absolute bg-[#F6F6F6] border rounded-lg left-[101%] top-0 overflow-hidden">
                            <ul class=" bg-[#F6F6F6]">
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="/profile?name=Chris Oshiafi"
                                >
                                  Chris Oshiafi
                                </a>
                              </li>
                              <li>
                                <hr class="dropdown-divider" />
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="/profile?name=Sina Alimi"
                                >
                                  Sina Alimi
                                </a>
                              </li>
                              <li>
                                <hr class="dropdown-divider" />
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="/profile?name=Eric Okoruwa"
                                >
                                  Eric Okoruwa
                                </a>
                              </li>
                              <li>
                                <hr class="dropdown-divider" />
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="/profile?name=Dele Ige"
                                >
                                  Dele Ige
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

              <li class="nav-item lg:mx-4">
                <a
                  class="nav-link text-[#031759] font-medium text-lg"
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
