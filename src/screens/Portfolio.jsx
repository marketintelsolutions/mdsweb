import React, { useState } from "react";
import PortfolioItem from "../components/Portfolio/PortfolioItem";
import { portfolioData } from "../utils/data";

const Portfolio = () => {
  const [selected, setSelected] = useState({});
  const [isModal, setIsModal] = useState(false);

  console.log(selected);

  return (
    <section className="px-12 relative">
      {/* modal */}
      {isModal && (
        <div
          className="fixed h-full w-[100%] top-0 left-0 bg-[rgba(217,217,217,0.8)] modal-container"
          onClick={(e) => {
            if (e.target.className.includes("modal-container"))
              setIsModal(false);
          }}
        >
          <div className="bg-white h-[480px] min-w-[50%] max-w-[60%] mt-[200px] mx-auto flex gap-4 p-[20px]">
            <div className="flex w-full  flex-col gap-5">
              <img
                src={selected.image}
                alt={selected.heading}
                className="object-cover h-[85%]"
              />
              <h2 className="font-bold text-[22px]">{selected.heading}</h2>
            </div>
            <div>
              <p className="text-[20px] font-light">
                We design, build and launch websites and products that are
                simple, beautiful and helps businesses grow.
              </p>
            </div>
          </div>
        </div>
      )}

      <h1 className="font-medium text-[100px] mx-auto text-center leading-[130px]">
        Ziltch1 designs & builds <br /> digital experiences
      </h1>
      <p className="font-light text-[25px] leading-10 text-center mt-[34px]">
        We design, build and launch websites and products that are <br />{" "}
        simple, beautiful and helps businesses grow.
      </p>
      <div className="mt-[130px] grid grid-cols-2 mx-auto w-full max-w-[80%] gap-5 gap-y-[113px]">
        {portfolioData.map((item, index) => (
          <PortfolioItem
            {...item}
            key={index}
            setSelected={setSelected}
            setIsModal={setIsModal}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
