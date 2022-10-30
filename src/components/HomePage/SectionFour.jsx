import React from 'react'
import creative from '../../assets/creative.png'
import { Link } from "react-router-dom";

const SectionFour = ({ header, subHeader, image, id, link, animeid }) => {
  return (
      <div
          className="xl:max-w-[73%] container mx-auto flex justify-around xl:my-20 my-10 flex-wrap  items-center xl:pt-20 xl:py-24 py-10 justify-center xl:justify-around "
          id={id}
      >

          <div className="w-5/12">
              <img src={creative} alt="" className='w-full' />
          </div>

          <div className="w-72 xl:text-left  flex xl:justify-start bg-white">
              <div className="xl:max-w-[500px]">
                  <h1 className="text-3xl font-bold text-[#1233FF]">{header} </h1>
                  <p className="text-[16px] leading-7 mt-5 text-[#727272]">{subHeader}</p>
                  <Link to={link || "/"} className="text-[#f1634d] bg-[#F26836] rounded-full p-3 ">
                      <button className="text-white py-3 px-8 mt-5">
                          Read More
                      </button>
                  </Link>
              </div>
          </div>

      </div>
  )
}

export default SectionFour