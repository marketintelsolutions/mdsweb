import React from "react";
import Arrow from "../../assets/Arrow 1.png";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

const SectionThree = ({ header, subHeader, image, id, link, animeid }) => {
  React.useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector(`#${animeid}`),
      animationData: image,
      renderer: "svg",
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
    return () => instance.destroy();
  }, []);

  return (
    <div
      className="max-w-[1300px] container d-flex lg:my-20 my-10 flex-wrap  items-center lg:pt-20 lg:py-24 py-10 justify-between"
      id={id}
    >
      <div className="w-full md:w-1/2 lg:pr-20 md:text-left flex lg:justify-start">
        <div className="max-w-[500px]">
          <h1 className="text-6xl font-bold">{header} </h1>
          <p className="text-3xl mt-10 ">{subHeader}</p>
          <Link to={link || "/"}>
            <button className="text-3xl py-3 mt-10 text-left flex items-center">
              Read more &nbsp;&nbsp; <img src={Arrow} alt="" width="22.23px" />
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex lg:justify-end bg-[#1a2a6c] rounded-full h-full">
        <div id={animeid} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

export default SectionThree;
