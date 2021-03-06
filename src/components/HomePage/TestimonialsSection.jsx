import React from "react";
import AvatarOne from "../../assets/asian-woman-4975939-4159825 1.png";
import AvatarTwo from "../../assets/black-woman-4975941-4159827 1.png";
import AvatarThree from "../../assets/western-man-4975942-4159828 1.png";

const TestimonialCard = ({ image, name, details }) => {
  return (
    <div className="w-[345px] lg:w-[30%] h-[334px] bg-[#DEDCDB80] rounded-2xl m-4 flex flex-col items-center p-8">
      <div className="w-32 h-32 rounded-full bg-[#DEDCDB80] shadow-sm overflow-hidden">
        <img
          src={image}
          alt=""
          width="100%"
          height="100%"
          className="self-center"
        />
      </div>
      <p className="text-lg">{name}</p>
      <p className="mt-auto">{details}</p>
    </div>
  );
};
const TestimonialsSection = () => {
  return (
    <div>
      <div className="lg:max-w-[500px] mx-auto my-10">
        <p className="text-xl mt-10 ">TESTIMONIALS</p>

        <h1 className="text-5xl font-bold mt-4">
          Read What Other have to Say{" "}
        </h1>
      </div>
      <div className="flex my-10 justify-center flex-wrap">
        <TestimonialCard
          image={AvatarOne}
          name="Andrew Rathore"
          details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        ullamcorper scelerisque mi, in malesuada felis malesuada vel."
        />
        <TestimonialCard
          image={AvatarTwo}
          name="Andrew Rathore"
          details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        ullamcorper scelerisque mi, in malesuada felis malesuada vel."
        />
        <TestimonialCard
          image={AvatarThree}
          name="Andrew Rathore"
          details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        ullamcorper scelerisque mi, in malesuada felis malesuada vel."
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;
