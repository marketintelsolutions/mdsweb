import React from "react";
import Footer from "../components/Footers/Footer";
import CTASection from "../components/HomePage/CTASection";
import SectionOne from "../components/HomePage/SectionOne";
import SectionThree from "../components/HomePage/SectionThree";
import SectionTwo from "../components/HomePage/SectionTwo";
import SecondImage from "../assets/managed technology services.jpg";
import FourthImage from "../assets/png-media-removebg-preview.png";
import ThirdImage from "../assets/fin_tech-removebg-preview.png";
import FifthImage from "../assets/Technology_Dist-removebg-preview.png";
import TeamSection from "../components/HomePage/TeamSection";
import * as TechVR from "../assets/72266-vr-learning.json";
import * as TechOne from "../assets/76220-technology.json";
import * as TechTwo from "../assets/60586-developer-isometric-people-working-with-technology.json";
import * as Technology from "../assets/82661-technology.json";
import * as MediaOne from "../assets/11526-social-media.json";
import * as FinTechOne from "../assets/95405-cash-flow-explainer.json";
import * as FinTechTwo from "../assets/95397-dashboard-explainer-of-accounting-interface.json";
import * as FinTechThree from "../assets/31639-fintech-services.json";

const Homepage = () => {
  return (
    <div>
      <div className="mx-auto">
        <SectionOne />
        <SectionTwo
          id="Technology Distribution"
          header="Technology Distribution"
          subHeader="Development of User-Friendly Applications, Platforms and Solutions, to meet Customer needs & Expectations"
          image={TechTwo}
          link="/TechnologyDistribution"
        />
        <SectionThree
          id="Media & Entertainment"
          header="Media & Entertainment"
          subHeader="MDS is a key player in Media infrastructure and creative Content Development to promote Africa and Global Culture"
          image={MediaOne}
          link="/MediaEntertainment"
        />
        <SectionTwo
          id="FINTECH"
          header="FINTECH"
          subHeader="Providing technology and innovation for financial service delivery"
          image={FinTechThree}
          link="/Fintech"
        />
        <SectionThree
          id="Managed Technology Services"
          header="Managed Technology Services"
          subHeader="We are managed service provider (MSP) deliverIng network, application, infrastructure and security through ongoing and regular support. Our team of experts with over 50 years combined experience are eager to help you solve that Technology challenge."
          image={Technology}
          link="/ManagedTechnologyServices"
        />
        <TeamSection />
        <CTASection />
      </div>
    </div>
  );
};

export default Homepage;
