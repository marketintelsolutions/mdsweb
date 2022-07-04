import React from "react";
import Arrow from "../../assets/Arrow 1.png";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      className="max-w-[73%] container d-flex lg:my-20 my-10 flex-wrap  items-center lg:pt-20 lg:py-24 py-10 justify-between "
      id={id}
    >
      <div className="w-full md:w-1/2 lg:pr-20 md:text-left flex lg:justify-start bg-white">
        <div className="max-w-[500px]">
          <h1 className="text-6xl font-bold add-app-red">{header} </h1>
          <p className="text-[23px] mt-10 text-[#727272]">{subHeader}</p>
          <Link to={link || "/"} className="text-[#f1634d]">
            <button className="app-btn text-white py-3 px-10 mt-10">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex lg:justify-end app-light-red rounded-full h-full min-h-[700px] justify-center items-center">
        <div id={animeid} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

export default SectionThree;
