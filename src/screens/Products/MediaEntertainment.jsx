import React, { useEffect } from "react";
import ShowBox from "../../components/Shared/ShowBox";

const MediaEntertainment = () => {
  const missionElements = [
    {
      title: "Content Distribution",
    },
    {
      title: `Alternative Channels`,
    },
    {
      title: `Sports and Entertainment`,
    },
    {
      title: `Media Broadcast Infrastructure`,
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className=" max-w-[1300px] mx-auto pb-96">
      <h1 className="text-6xl font-bold lg:w-2/3 mx-auto  my-12">
        Media & Entertainment
      </h1>
      <p className="text-3xl mt-10 ">
        MDS is a key player in Media infrastructure and creative Content
        Development to promote Africa and Global Culture
      </p>

      <div className="my-16 flex justify-around flex-wrap">
        {missionElements.map((i, index) => (
          <ShowBox i={i} />
        ))}
      </div>
    </div>
  );
};

export default MediaEntertainment;
