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
      className="xl:max-w-[73%] container d-flex xl:my-20 my-10 flex-wrap  items-center xl:pt-20 xl:py-24 py-10 justify-center xl:justify-between "
      id={id}
    >
      <div className="w-full xl:w-1/2  xl:text-left  flex xl:justify-start bg-white">
        <div className="xl:max-w-[500px]">
          <h1 className="text-6xl font-bold add-app-red">{header} </h1>
          <p className="text-[23px] mt-10 text-[#727272]">{subHeader}</p>
          <Link to={link || "/"} className="text-[#f1634d]">
            <button className="app-btn text-white py-3 px-10 mt-10">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[300px] xl:w-1/2 flex mx-auto my-5 xl:justify-end app-light-red rounded-full xl:h-full h-[300px] xl:min-h-[700px] justify-center items-center">
        <div id={animeid} className="w-full h-full" />
      </div>
    </div>
  );
};

export default SectionThree;
