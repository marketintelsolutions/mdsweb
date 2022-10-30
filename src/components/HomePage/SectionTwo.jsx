import React from "react";
import Arrow from "../../assets/Arrow 1.png";
import { Link } from "react-router-dom";
// import lottie from "lottie-web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import man from '../../assets/man.png'

const SectionTwo = ({ header, subHeader, image, id, size, link, animeid }) => {
  // React.useEffect(() => {
  //   const instance = lottie.loadAnimation({
  //     container: document.querySelector(`#${animeid}`),
  //     animationData: image,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   });
  //   return () => instance.destroy();
  // }, []);
  return (
    <div
      className="lg:max-w-[73%] mx-auto px-10 rounded-full p-5 container flex xl:my-20 my-10 flex-wrap items-center justify-around xl:shadow-2xl shadow-[#282c34] xl:max-w-[73%]  xl:bg-white"
      id={id}
    >
      <div className="w-5/12">
        <img src={man} alt="" className='w-full' />
      </div>
      <div className="xl:w-1/4 xl:text-left flex xl:justify-end bg-white">
        <div className="xl:max-w-[500px]">
          <h3 className="text-2xl font-bold text-[#1233FF]">{header} </h3>
          <p className="text-[17px] mt-4 text-[#727272]">{subHeader}</p>
          <Link to={link || "/"} className="text-[#f1634d]">
            <button className="bg-[#F26836] rounded-full text-white py-3 px-10 mt-4">
              Read More
            </button>
          </Link>
        </div>
      </div>

     
    </div>
  );
};

export default SectionTwo;
