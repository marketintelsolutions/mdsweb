import React from "react";
import CTASection from "../components/HomePage/CTASection";
import SectionOne from "../components/HomePage/SectionOne";
import SectionThree from "../components/HomePage/SectionThree";
import SectionTwo from "../components/HomePage/SectionTwo";
import SectionFour from "../components/HomePage/SectionFour";
import SectionFive from "../components/HomePage/SectionFive";
import TeamSection from "../components/HomePage/TeamSection";
import * as TechTwo from "../assets/60586-developer-isometric-people-working-with-technology.json";
import * as Technology from "../assets/82661-technology.json";
import * as MediaOne from "../assets/11526-social-media.json";
import * as FinTechThree from "../assets/31639-fintech-services.json";
import * as DistriButeJSON from "../assets/81760-shipping-around-the-world.json";
import SectionSeven from "../components/HomePage/SectionSeven";

const Homepage = () => {
  return (
    <div className="">
      <div className="mx-auto mb-[400px]">
        <div className="">
          <SectionOne />
        </div>

        <div className="">
          <SectionTwo
            animeid="FINTECH"
            id="fintech"
            header="FINTECH"
            subHeader="Providing technology and innovation for financial service delivery"
            image={TechTwo}
            link="/Fintech"
          />
        </div>
        <div className="">
          <SectionThree
            animeid="Managed Technology Services"
            id="Managed Technology Services"
            header={`Managed \n Technology Services`}
            subHeader="We are managed service provider (MSP) deliverIng network, application, infrastructure and security through ongoing and regular support. Our team of experts with over 50 years combined experience are eager to help you solve that Technology challenge."
            image={MediaOne}
            link="/ManagedTechnologyServices"
          />
        </div>
        <div className="">
          <SectionFour
            animeid="SmartCreative"
            id="Smart-Creative"
            header="Smart Creative"
            subHeader="There's no limit to what you can get designed at Ziltch1 Smart Designs. Whether you're looking for a spectacular new logo or some stunning flyers or an amazing animation, our talented designers at Ziltch1 Technologies can make it happen. Click on the button below to see our wide range of design services. "
            link="/SmartCreative"
          />
        </div>
        <div className="">
          <SectionFive
            animeid="TechnologyDistribution"
            id="Technology Distribution"
            header="Technology Distribution"
            subHeader="Development of User-Friendly Applications, Platforms and Solutions, to meet Customer needs & Expectations."
            link="/TechnologyDistribution"
          />
        </div>
        <div className="">
          <SectionThree
            animeid="MediaAndEntertainment"
            id="MediaAndEntertainment"
            header="Media & Entertainment"
            subHeader="Ziltch is a key player in Media infrastructure and creative Content Development to promote Africa and Global Culture
."
            image={DistriButeJSON}
            link="/MediaAndEntertainment"
          />
        </div>
        <div className="">
          <SectionSeven
            animeid="CTA"
            id="CTA"
            header="Be a part of the next big thing"
            subHeader="We work with Brands, Startups, to SMEs. Colaborate for more impact and growth"
            image={TechTwo}
            link="/CTA"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
