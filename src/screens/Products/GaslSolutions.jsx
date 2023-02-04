import React from "react";
import SectionFour from "../../components/HomePage/SectionFour";
import SectionThree from "../../components/HomePage/SectionThree";
import gaslDocs from "../../assets/gasl-docs.svg";
import GaslSectionFive from "../../components/Gasl/GaslSectionFive";

const GaslSolutions = () => {
  return (
    <div>
      <SectionThree
        animeid="We Care. We Connect. We Create."
        id="We Care. We Connect. We Create."
        header={`We Care. \n We Connect. \n We Create.`}
        subHeader="We are the next generation of the Solutions. Giving you more for less!"
        link="/paysharp"
        button="Learn More"
        color="#88BD27"
        rounded="md"
        image={false}
        ourPatners={false}
        buttonText="white"
      />
      <SectionFour
        animeid="enjoy borderless banking"
        id="enjoy borderless banking"
        header={`Enjoy Borderless Banking`}
        subHeader="Paysharp service has made financial inclusion easy by providing banking services without the fore-walls of a bank"
        image={gaslDocs}
        button={false}
        rounded="md"
        color="#88BD27"
      />
      <SectionThree
        animeid="Real Estate Management"
        id="Real Estate Management"
        header={`Real Estate Management`}
        subHeader="ProptyPlus – One of the leading Real Estate Software platform providing the
 ultimate property search experience and property management"
        link="/paysharp"
        button="Learn More"
        color="#88BD27"
        rounded="md"
        image={false}
        ourPatners={false}
        buttonText="white"
      />
      <SectionFour
        animeid="Document Management"
        id="Document Management"
        header={`Document Management`}
        subHeader="Store Physical & Electronic Documents with our Simple. Secure. &
Affordable Document Management Solutions."
        image={false}
        button={false}
        rounded="md"
        color="#88BD27"
      />
      <GaslSectionFive />
    </div>
  );
};

export default GaslSolutions;
