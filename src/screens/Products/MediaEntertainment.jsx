import React, { useEffect } from "react";
import ShowBox from "../../components/Shared/ShowBox";

const MediaEntertainment = () => {
  const missionElements = [
    { title: "Content Distribution" },
    { title: `Alternative Channels` },
    { title: `Sports and Entertainment` },
    { title: `Media Broadcast Infrastructure` },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="bg-gray-50 text-center app-common-bg">
        <div className=" max-w-[73%] mx-auto  pb-10">
        <h1 className="text-5xl font-bold lg:w-2/3 mx-auto  my-12">
          Media & Entertainment
        </h1>
        <p className="text-3xl mt-10 ">
          MDS is a key player in Media infrastructure and creative Content
          Development to promote Africa and Global Culture
        </p>

        <div className="my-16 flex justify-around flex-wrap">
          {missionElements.map((i, index) => (
            <div className="w-2/5  bg-[#031759] rounded-2xl hover:bg-opacity-80 hover:text-black text-white shadow-lg m-3 flex-col flex items-center justify-center p-3">
              {i.title && <h1 className="text-3xl  font-bold ">{i.title}</h1>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaEntertainment;
