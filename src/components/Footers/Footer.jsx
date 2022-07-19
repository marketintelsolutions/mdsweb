import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <section class="py-10 bg-gray-900 relative text-left">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-8">
            <div class="w-full lg:w-1/3 xl:w-1/4 px-4 mb-8">
              <h4 class="text-white mb-5 text-xl font-bold">About</h4>
              <ul>
                <li class="mb-4">
                  <Link
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    to="/#team"
                  >
                    Creative Team
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    to="/about/#mission"
                  >
                    Our Mission
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    to="/about/#vision"
                  >
                    Our Vision
                  </Link>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-1/3 xl:w-1/4 px-4 mb-8">
              <h4 class="text-white mb-5 text-xl font-bold">Product</h4>
              <ul>
                <li class="mb-4">
                  <Link
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    to="/TechnologyDistribution"
                  >
                    Technology Distribution
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    to="/MediaEntertainment"
                  >
                    Media & Entertainment
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    to="/Fintech"
                  >
                    FINTECH
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    to="/ManagedTechnologyServices"
                  >
                    Managed Technology Services
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    to="/ProcurementAndDistribution"
                  >
                    Procurement And Distribution
                  </Link>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-1/3 xl:w-1/4 px-4 mb-8">
              <h4 class="text-white mb-5 text-xl font-bold">Follow</h4>
              <ul>
                <li class="mb-4">
                  <a
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    href="/#"
                  >
                    LinkedIn
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    href="/#"
                  >
                    Twitter
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    href="/#"
                  >
                    Snapchat
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    href="/#"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    href="/#"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div class="w-full lg:w-1/3 xl:w-1/4 px-4 mb-8">
              <h4 class="text-white mb-5 text-xl font-bold">Support</h4>
              <ul>
                <li class="mb-4">
                  <a
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    href="tel:+23412718630"
                  >
                    ☎ &nbsp; +234 (1) 271 8630
                  </a>
                </li>
                <li>
                  <a
                    class="inline-block text-white hover:text-gray-400 text-lg"
                    href="mailto:info@marketintelsolutions.com"
                  >
                    ✉️ &nbsp; info@marketintelsolutions.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex items-center justify-center mt-10 pt-10 border-t border-gray-700 ">
            <span class="text-white text-center">
              &copy; 2022 Marketintel Technology, Media & Digital Solutions
              Limited (MDS)
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
