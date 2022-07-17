import React from "react";

import Emeka from "../../assets/Emeka.png";
import Jimmy from "../../assets/Jimmy.png";
import Usman from "../../assets/usman.jpg";

const TeamSection = () => {
  return (
    <div id="team" className="mx-auto ">
      <section class="relative pt-24 pb-32 bg-gray-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <h2 class="mb-5 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
            Team Members
          </h2>
          <p class="mb-16 text-base max-w-md mx-auto text-center text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div class="flex flex-wrap max-w-6xl mx-auto -m-7 justify-center">
            <div class="w-full md:w-1/2 xl:w-1/3 p-7">
              <div class="text-center p-16 bg-white transform hover:-translate-y-3 rounded-10 shadow-7xl transition ease-out duration-1000">
                <img
                  width="150px"
                  class=" mb-11 mx-auto rounded-lg"
                  src={Emeka}
                  alt="Emeka Osuocha"
                />
                <h3 class="mb-1 font-heading font-bold text-gray-900 text-lg">
                  Emeka Osuocha
                </h3>
                <p class="text-sm text-gray-500">Managing Director/CEO</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-7">
              <div class="xl:relative xl:top-16 text-center p-16 bg-white transform hover:-translate-y-3 rounded-10 shadow-7xl transition ease-out duration-1000">
                <img
                  width="150px"
                  class=" mb-11 mx-auto rounded-lg"
                  src={Jimmy}
                  alt="Jimmy Ogunnowo"
                />
                <h3 class="mb-1 font-heading font-bold text-gray-900 text-lg">
                  Jimmy Ogunnowo
                </h3>
                <p class="text-sm text-gray-500">Financial Director</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-7">
              <div class="text-center p-16 bg-white transform hover:-translate-y-3 rounded-10 shadow-7xl transition ease-out duration-1000">
                <img
                  width="150px"
                  class=" mb-11 mx-auto rounded-lg"
                  src={Usman}
                  alt="Usman Ayobami"
                />
                <h3 class="mb-1 font-heading font-bold text-gray-900 text-lg">
                  Usman Ayobami
                </h3>
                <p class="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 p-7">
              <div class="xl:relative xl:top-16 text-center p-16 bg-white transform hover:-translate-y-3 rounded-10 shadow-7xl transition ease-out duration-1000">
                <img width="150px" class=" mb-11 mx-auto" alt="Joseph Dele" />
                <h3 class="mb-1 font-heading font-bold text-gray-900 text-lg">
                  Joseph Dele
                </h3>
                <p class="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
