import React from "react";

import Emeka from "../../assets/Emeka.png";
import Jimmy from "../../assets/Jimmy.png";
import Usman from "../../assets/usman.jpg";

const TeamSection = () => {
  return (
    <section id="team" class="py-44 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center -m-6">
          <div class="w-full md:w-1/2 p-6">
            <div class="max-w-lg">
              <p class="mb-9 max-w-max text-transparent bg-clip-text bg-gradient-cyan font-heading text-xs uppercase font-semibold tracking-px">
                The team that made us successful
              </p>
              <h2 class="mb-7 font-heading font-semibold text-5xl sm:text-7xl text-gray-900">
                Our mission is making the customers lives easier now.
              </h2>
              <p class="text-xl text-gray-900">
                Highly professional and capable of running your business across
                all digital channels.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-6">
            <div class="flex flex-wrap justify-center -m-6">
              <div class="w-full lg:w-auto p-6">
                <div class="max-w-max mx-auto">
                  <div class="mb-5 bg-gradient-orange">
                    <img src={Emeka} width="250px" alt="Emeka Osuocha" />
                  </div>
                  <h3 class="mb-1 font-heading font-bold text-xl text-gray-900">
                    Emeka Osuocha
                  </h3>
                  <p class="text-xs text-gray-600">Managing Director/CEO</p>
                </div>
              </div>
              <div class="w-full lg:w-auto p-6">
                <div class="xl:mt-24 max-w-max mx-auto">
                  <div class="mb-5 bg-gradient-green">
                    <img src={Jimmy} width="250px" alt="Jimmy Ogunnowo" />
                  </div>
                  <h3 class="mb-1 font-heading font-bold text-xl text-gray-900">
                    Jimmy Ogunnowo
                  </h3>
                  <p class="text-xs text-gray-600">Financial Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
