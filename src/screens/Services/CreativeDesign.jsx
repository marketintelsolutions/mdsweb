import React, { useEffect } from "react";
import creative from "../../assets/creativedesign2.png";
import cd1 from "../../assets/cd1.png";
import cd2 from "../../assets/cd2.png";
import cd3 from "../../assets/cd3.png";
import cd4 from "../../assets/cd4.png";
import cd5 from "../../assets/cd5.png";
import cd6 from "../../assets/cd6.png";
import { Link } from "react-router-dom";
import BlueTextPlusImageRow from "../../components/Shared/BlueTextPlusImageRow";
import SmartCreativeButton from "../../components/Shared/SmartCreativeButton";

export default function CreativeDesign() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="lg:px-0  ">
      <div className=" ">
        <BlueTextPlusImageRow
          header={`Creative Design`}
          text=" We provide a full graphic design service to help you communicate
          your message using colour, style, typography, illustration, and
          creative ideas. We can either work with your existing branding
          or we can create a new brand for you."
          image={creative}
        />
      </div>

      <div className="xl:max-w-[70%] container mx-auto flex  xl:my-20 my-10 flex-wrap  justify-between items-center xl:pt-20 xl:py-24 lg:py-10 gap-5 lg:gap-y-20 p-6">
        <div className="lg:w-2/5 w-full">
          <img src={cd1} alt="" className="w-full" />
          <h1 className="lg:text-3xl text-3xl font-bold mt-10 mb-5">
            Logo & Branding
          </h1>
          <p>Logo Design, Business Card Design, and Brand Identity</p>
          <p>Letter-Headed Paper, Compliment Slips, Business Cards, Folders</p>
        </div>
        <div className="lg:w-2/5 w-full">
          <img src={cd2} alt="" className="w-full" />
          <h1 className="lg:text-3xl text-3xl font-bold mt-10 mb-5">
            Exhibition Materials
          </h1>
          <p>Pull-Up Banners, Vinyl Banners</p>
        </div>
        <div className="lg:w-2/5 w-full">
          <img src={cd3} alt="" className="w-full" />
          <h1 className="lg:text-3xl text-3xl font-bold mt-10 mb-5">
            Business Documentation
          </h1>
          <p>Invoices, Reports, and Presentations</p>
        </div>
        <div className="lg:w-2/5 w-full">
          <img src={cd4} alt="" className="w-full" />
          <h1 className="lg:text-3xl text-3xl font-bold mt-10 mb-5">
            Vehicle Graphics
          </h1>
          <p>Full Wraps, Typography</p>
        </div>
        <div className="lg:w-2/5 w-full">
          <img src={cd5} alt="" className="w-full" />
          <h1 className="lg:text-3xl text-3xl font-bold mt-10 mb-5">
            Promotional Marketing
          </h1>
          <p>
            Brochures, Posters, Leaflets, Flyers, Greeting, Posters, Banner,
            Poster Card, Brochure, Catalogues, Magazines, Menu, Advertisement,
            Sticker
          </p>
        </div>
        <div className="lg:w-2/5 w-full">
          <img src={cd6} alt="" className="w-full" />
          <h1 className="lg:text-3xl text-3xl font-bold mt-10 mb-5">Others</h1>
          <p>Billboard Design, Signage Design, and Trade Show Booth</p>
        </div>
      </div>
      <div className="w-full flex justify-center my-5 mb-20 ">
        <Link to="/SmartCreative">
          <SmartCreativeButton />
        </Link>
      </div>
    </div>
  );
}
