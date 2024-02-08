import React from "react";
import PortfolioItem from "../components/Portfolio/PortfolioItem";
import { portfolioData } from "../utils/data";

const Portfolio = () => {
  return (
    <section className="px-12">
      <h1 className="font-medium text-[100px] mx-auto text-center leading-[130px]">
        Ziltch1 designs & builds <br /> digital experiences
      </h1>
      <p className="font-light text-[25px] leading-10 text-center mt-[34px]">
        We design, build and launch websites and products that are <br />{" "}
        simple, beautiful and helps businesses grow.
      </p>
      <div className="mt-[130px] grid grid-cols-2 mx-auto w-full max-w-[80%] gap-5 gap-y-[113px]">
        {portfolioData.map((item, index) => (
          <PortfolioItem {...item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
