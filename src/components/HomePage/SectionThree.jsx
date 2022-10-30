import React from "react";
import Arrow from "../../assets/Arrow 1.png";
import { Link } from "react-router-dom";
// import lottie from "lottie-web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import illustration from '../../assets/illustration.png'

const SectionThree = ({ header, subHeader, image, id, link, animeid }) => {
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
      className="xl:max-w-[73%] container mx-auto flex justify-around xl:my-20 my-10 flex-wrap  items-center xl:pt-20 xl:py-24 py-10 justify-center xl:justify-around "
      id={id}
    >
      <div className="w-72 xl:text-left  flex xl:justify-start bg-white">
        <div className="xl:max-w-[500px]">
          <h1 className="text-3xl font-bold text-[#FF3B00]">{header} </h1>
          <p className="text-[16px] leading-7 mt-5 text-[#727272]">{subHeader}</p>
          <Link to={link || "/"} className="text-[#f1634d] bg-[#F26836] rounded-full p-3 ">
            <button className="text-white py-3 px-8 mt-5">
              Read More
            </button>
          </Link>
        </div>
      </div>
     
      <div className="w-5/12">
        <img src={illustration} alt="" className='w-full' />
      </div>

    </div>
  );
};

export default SectionThree;
