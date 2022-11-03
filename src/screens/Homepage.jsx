import React, { useEffect } from "react";
import SectionOne from "../components/HomePage/SectionOne";
import SectionThree from "../components/HomePage/SectionThree";
import SectionTwo from "../components/HomePage/SectionTwo";
import SectionFour from "../components/HomePage/SectionFour";
import SectionFive from "../components/HomePage/SectionFive";
import SectionSeven from "../components/HomePage/SectionSeven";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="">
      <div className="mx-auto lg:mb-[400px]">
        <div className="">
          <SectionOne />
        </div>

        <div className="">
          <SectionTwo
            animeid="FINTECH"
            id="Fintech"
            header="FINTECH"
            subHeader="Providing technology and innovation for financial service delivery"
            link="/Fintech"
          />
        </div>
        <div className="">
          <SectionThree
            animeid="Managed Technology Services"
            id="Managed Technology Services"
            header={`Managed \n Technology Services`}
            subHeader="We are managed service provider (MSP) deliverIng network, application, infrastructure and security through ongoing and regular support. Our team of experts with over 50 years combined experience are eager to help you solve that Technology challenge."
            link="/ManagedTechnologyServices"
          />
        </div>
        <div className="">
          <SectionFour
            animeid="SmartCreative"
            id="Smart Creative"
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
            animeid="MediaEntertainment"
            id="MediaEntertainment"
            header="Media & Entertainment"
            subHeader="Ziltch is a key player in Media infrastructure and creative Content Development to promote Africa and Global Culture
."
            link="/MediaEntertainment"
          />
        </div>
        <div className="">
          <SectionSeven
            animeid="CTA"
            id="CTA"
            header="Be a part of the next big thing"
            subHeader="We work with Brands, Startups, to SMEs. Colaborate for more impact and growth"
            link="/ContactUs"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
