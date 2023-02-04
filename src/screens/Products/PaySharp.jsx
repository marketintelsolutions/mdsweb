import React from "react";
import SectionThree from "../../components/HomePage/SectionThree";
import paystackHomepage from "../../assets/paystackHomepage.svg";
import paysharpPerson from "../../assets/paysharpPerson.svg";
import paysharpAgent from "../../assets/paysharpAgent.svg";
import paysharpBorderless from "../../assets/paysharpBorderless.svg";
import SectionFour from "../../components/HomePage/SectionFour";
import PaysharpSectionTwo from "../../components/Paysharp/PaysharpSectionTwo";

const PaySharp = () => {
  return (
    <div>
      <SectionThree
        animeid="paysharp"
        id="paysharp"
        header={`Do More With \n Paysharp`}
        subHeader="Enjoy the ease of conducting financial transactions such as Airtime Vending, Cash Deposit and Withdrawals Bill Payment and many more services"
        link="/paysharp"
        button="Learn More"
        color="#FAA724"
        rounded="md"
        buttonColor="#FAA724"
        image={paystackHomepage}
        ourPatners={false}
        buttonText="black"
      />
      {/* PAYSHARP SERVICES */}
      <PaysharpSectionTwo />
      {/* GET UNLIMITED ADVANTAGE */}
      <SectionFour
        animeid="get unlimited advantage"
        id="get unlimited advantage"
        header={`Get Unlimited Advantage`}
        subHeader="Enjoy attractive commission rates access to a wide range of products and services and accessibility on all platforms"
        image={paysharpPerson}
        button={false}
        rounded="md"
        color="#FAA724"
      />
      {/* BECOME A PAYSHARP AGENT */}
      <SectionThree
        animeid="paysharp agent"
        id="paysharp agent"
        header={`Become a Paysharp Agent`}
        subHeader="Join the team, become a Paysharp agent today with the simpliest of requirements, you can sign up to be a Paysharp Agent"
        link="/paysharp"
        button="Sign up"
        color="#FAA724"
        rounded="md"
        buttonColor="#FAA724"
        image={paysharpAgent}
        ourPatners={false}
        buttonText="black"
      />
      {/* ENJOY BORDERLESS BANKING */}
      <SectionFour
        animeid="enjoy borderless banking"
        id="enjoy borderless banking"
        header={`Enjoy Borderless Banking`}
        subHeader="Paysharp service has made financial inclusion easy by providing banking services without the fore-walls of a bank"
        image={paysharpBorderless}
        button={false}
        rounded="md"
        color="#FAA724"
      />
    </div>
  );
};

export default PaySharp;
