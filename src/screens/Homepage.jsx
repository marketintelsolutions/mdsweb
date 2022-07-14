import React from "react";
import CTASection from "../components/HomePage/CTASection";
import SectionOne from "../components/HomePage/SectionOne";
import SectionThree from "../components/HomePage/SectionThree";
import SectionTwo from "../components/HomePage/SectionTwo";
import TeamSection from "../components/HomePage/TeamSection";
import * as TechTwo from "../assets/60586-developer-isometric-people-working-with-technology.json";
import * as Technology from "../assets/82661-technology.json";
import * as MediaOne from "../assets/11526-social-media.json";
import * as FinTechThree from "../assets/31639-fintech-services.json";
import * as DistriButeJSON from "../assets/81760-shipping-around-the-world.json";

const Homepage = () => {
  return (
    <div className="">
      <div className="mx-auto ">
        <div className="one-bg">
          <SectionOne />
        </div>

        <div className="tech-bg">
          <SectionTwo
            animeid="TechnologyDistribution"
            id="Technology Distribution"
            header="Technology Distribution"
            subHeader="Development of User-Friendly Applications, Platforms and Solutions, to meet Customer needs & Expectations"
            image={TechTwo}
            link="/TechnologyDistribution"
          />
        </div>
        <div className="mandd-bg">
          <SectionThree
            animeid="MediaEntertainment"
            id="Media & Entertainment"
            header="Media & Entertainment"
            subHeader="MDS is a key player in Media infrastructure and creative Content Development to promote Africa and Global Culture"
            image={MediaOne}
            link="/MediaEntertainment"
          />
        </div>
        <div className="lg-bg">
          <SectionTwo
            animeid="FINTECHAnime"
            id="FINTECH"
            header="FINTECH"
            subHeader="Providing technology and innovation for financial service delivery"
            image={FinTechThree}
            link="/Fintech"
          />
        </div>
        <div className="tech-bg">
          <SectionThree
            animeid="ManagedTechnologyServices"
            id="Managed Technology Services"
            header="Managed Technology Services"
            subHeader="We are managed service provider (MSP) deliverIng network, application, infrastructure and security through ongoing and regular support. Our team of experts with over 50 years combined experience are eager to help you solve that Technology challenge."
            image={Technology}
            link="/ManagedTechnologyServices"
          />
        </div>
        <div className="pandd-bg">
          <SectionTwo
            animeid="ProcurementAndDistributionAnime"
            id="ProcurementAndDistribution"
            header="Procurement And Distribution"
            subHeader="Procurment and Distribution of Electronic Hardwares and consumables around the world."
            image={DistriButeJSON}
            link="/ProcurementAndDistribution"
          />
        </div>
        <TeamSection />
        <CTASection />
      </div>
    </div>
  );
};

export default Homepage;
