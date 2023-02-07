import React from "react";

const GaslHome = ({
  header,
  subHeader,
  image,
  id,
  link,
  animeid,
  button,
  rounded,
  color,
  buttonColor,
}) => {
  return (
    <div
      className={`w-full xl:max-w-[73%] container mx-auto flex  flex-wrap p-6  items-center   justify-center xl:justify-${
        image ? "around" : "end"
      } `}
      id={id}
    >
      {image && (
        <div className="lg:w-5/12 w-full justify-center flex mb-10">
          <img
            src={image}
            alt=""
            className="lg:h-full lg:w-auto w-[169.91px]"
          />
        </div>
      )}

      <div className="lg:w-5/12 w-full xl:text-left  flex xl:justify-end bg-white">
        <div className="xl:max-w-[500px]">
          <h1
            className={`lg:text-[50px] leading-[107%] text-3xl font-[900] text-[${color}]`}
          >
            {header}{" "}
          </h1>
          <p className="lg:text-xl lg:leading-10 text-lg mt-5 text-[#727272] lg:my-10">
            {subHeader}
          </p>
          {button && (
            <a href={link || "/"} className="" target="_blank">
              <button
                className={`bg-[${buttonColor}] rounded-${rounded} text-white p-4 px-6 mt-4`}
              >
                {button}
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GaslHome;
