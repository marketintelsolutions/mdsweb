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

const Homepage = () => {
  return (
    <div className="app-common-bg">
      <div className="mx-auto ">
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
            link="/TechnologyDistribution"
          />
        </div>
        <div className="">
          <SectionThree
            animeid="Managed Technology Services"
            id="Managed Technology Services"
            header="Managed Technology Services"
            subHeader="We are managed service provider (MSP) deliverIng network, application, infrastructure and security through ongoing and regular support. Our team of experts with over 50 years combined experience are eager to help you solve that Technology challenge."
            image={MediaOne}
            link="/MediaEntertainment"
          />
        </div>
        <div className="">
          <SectionFour
            animeid="SmartCreative"
            id="Smart-Creative"
            header="Smart Creative"
            subHeader="There's no limit to what you can get designed at Ziltch1 Smart Designs. Whether you're looking for a spectacular new logo or some stunning flyers or an amazing animation, our talented designers at Ziltch1 Technologies can make it happen. Click on the button below to see our wide range of design services. "
            link="/Fintech"
          />
        </div>
        <div className="">
          <SectionFive
            animeid="TechnologyDistribution"
            id="Technology Distribution"
            header="Technology Distribution"
            subHeader="Development of User-Friendly Applications, Platforms and Solutions, to meet Customer needs & Expectations."
            link="/ManagedTechnologyServices"
          />
        </div>
        <div className="">
          <SectionThree
            animeid="ProcurementAndDistributionAnime"
            id="ProcurementAndDistribution"
            header="Media & Entertainment"
            subHeader="Ziltch is a key player in Media infrastructure and creative Content Development to promote Africa and Global Culture
."
            image={DistriButeJSON}
            link="/ProcurementAndDistribution"
          />
        </div>
        <CTASection />
      </div>
    </div>
  );
};

export default Homepage;
