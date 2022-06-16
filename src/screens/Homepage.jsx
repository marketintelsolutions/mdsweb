import React from "react";
import Footer from "../components/Footers/Footer";
import CTASection from "../components/HomePage/CTASection";
import SectionOne from "../components/HomePage/SectionOne";
import SectionThree from "../components/HomePage/SectionThree";
import SectionTwo from "../components/HomePage/SectionTwo";
import SecondImage from "../assets/business-3d-tech-support.png";
import FourthImage from "../assets/business-3d-woman-receiving-a-music-message.png";
import ThirdImage from "../assets/business-3d-laptop-at-workplace-showing-growth-chart.png";
import FifthImage from "../assets/business-3d-e-wallet-in-a-phone-with-bank-card-stack-of-coins-and-leather-wallet.png";
import TeamSection from "../components/HomePage/TeamSection";

const Homepage = () => {
  return (
    <div>
      <div className="mx-auto">
        <SectionOne />
        <SectionTwo
          id="Technology Distribution"
          header="Technology Distribution"
          subHeader="Development of User-Friendly Applications, Platforms and Solutions, to meet Customer needs & Expectations"
          image={ThirdImage}
        />
        <SectionThree
          id="Media & Entertainment"
          header="Media & Entertainment"
          subHeader="MDS is a key player in Media infrastructure and creative Content Development to promote Africa and Global Culture"
          image={FourthImage}
        />
        <SectionTwo
          id="FINTECH"
          header="FINTECH"
          subHeader="Providing technology and innovation for financial service delivery"
          image={FifthImage}
        />
        <SectionThree
          id="Managed Technology Services"
          header="Managed Technology Services"
          subHeader="We are managed service provider (MSP) deliverIng network, application, infrastructure and security through ongoing and regular support. Our team of experts with over 50 years combined experience are eager to help you solve that Technology challenge."
          image={SecondImage}
        />
        <TeamSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
