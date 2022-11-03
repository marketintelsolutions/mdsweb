import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Chris from "../assets/Chris.png";
import Dele from "../assets/Dele.jpeg";
import Emeka from "../assets/Emeka.png";
import Eric from "../assets/Eric.png";
import Jimmy from "../assets/Jimmy.png";
import Sina from "../assets/sina.png";
import imgbg from "../assets/imgbg.gif";

export default function Profile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [profile, setProfile] = useState(null);

  const profiles = [
    {
      name: "Emeka Osuocha",
      image: Emeka,
      description: (
        <div>
          <p className="mb-3 leading-8">
            Emeka is a consummate IT professional with genuine interest in
            solving business challenges using Information Technology and
            Engineering knowledge with focus on usability, performance, and
            security. He has deep and rich knowledge of IT Management, New
            Product/Service Deployment, Business Analysis, Datacentre &
            Infrastructure Management, IT Project Management, Information
            Systems Administration/Security, Applications/Systems Migrations,
            Document Management Systems, Network and Communication Management,
            SLA’s and Change Management.
          </p>

          <p className="mb-3 leading-8">
            He holds a Bachelor of Engineering degree in Electrical/Electronic
            Engineering from Federal University of Technology, Owerri, Post
            Graduate Certificate in Information Technology from The Robert
            Gordon University, Aberdeen, Master’s degree in Information
            Technology Management from Obafemi Awolowo University, Ile-Ife and
            other professional certifications.
          </p>
        </div>
      ),
    },
    {
      name: "Jimmy Ogunnowo",
      image: Jimmy,
      description: (
        <div>
          <p className="mb-3 leading-8">
            Jimmy Ogunnowo holds a Bachelor’s degree and MBA from Obafemi
            Awolowo University, ile-ife, Nigeria
          </p>

          <p className="mb-3 leading-8">
            He has over 15 years post-graduation experience in FMCG and Banking
            and He is highly experienced in electronic Banking and e-platform
            Services to aid businesses and facilitate processes.
          </p>

          <p className="mb-3 leading-8">
            A member of the Nigeria Institute of Management, Jimmy has
            competencies in Technology Services, Business Development,
            Relationship management and Customer service.
          </p>

          <p className="mb-3 leading-8">
            He consolidated is Banking career in creating and supporting
            technology platforms to Corporates, Governments and Mass Market. He
            is involved in the management of strategic alliances with mandate
            owners in public and Private sectors.
          </p>
        </div>
      ),
    },
    {
      name: "Chris Oshiafi",
      image: Chris,
      description: (
        <div>
          <p className="mb-3 leading-8">
            Mr. Oshiafi has over two decades of experience in Structured
            Finance, Consulting, Investment Banking and Venture Capital/Private
            Equity. He holds a 2nd Class (Upper Division) in Accounting &
            Finance from the University of London and Master of Business
            Administration degree from the Universisty of Lagos.
          </p>

          <p className="mb-3 leading-8">
            He is a Fellow of the Institute of Chartered Accountants of Nigeria
            (ICAN), an Associate of the Chartered Insurance Institute of London,
            (ACII) UK and Chartered Institute of Taxation of Nigeria (ACIT). He
            also attended various programmes at the prestigious Columbia
            Business School, New York, United States and INSEAD Business School,
            Fontainebleau, France, the IESE Business School in Barcelona, Spain
            and the Chief Executive Programme (CEP 17) Class of the Lagos
            Business School.
          </p>

          <p className="mb-3 leading-8">
            He was the Pioneer Managing Director/CEO of Truebond Investments &
            Capital Limited, a Company with diverse interests in Oil & Gas,
            Telecommunications, Power and the Capital Markets. He has also
            worked with the firm of Damitop Consulting Limited as Managing
            Partner where he worked on number of World Bank projects for the
            Federal and several State Governments. He served as Executive
            Director (Investment Banking) of Citizens International Bank (now
            Enterprise Bank Limited) until his appointment as the pioneer Chief
            Executive Officer of PanAfrican Capital Plc.
          </p>
        </div>
      ),
    },
    {
      name: "Sina Alimi",
      image: Sina,
      description: (
        <div>
          <p className="mb-3 leading-8">
            Sina is the Deputy Chief Executive Officer of PanAfrican Capital
            Holdings, a Proprietary Investment Company with presence in Lagos,
            Accra, Nairobi and Mauritius. He also serves is a member of the
            Board of Directors for several companies within the Group. Acquiring
            a Chartered Accountant status in 1991 charted a course for his
            entire career that spans over twenty-five (25) years cutting across
            Deal Structuring, Project Finance, Mergers & Acquisitions,
            Privatization and Asset Management.
          </p>

          <p className="mb-3 leading-8">
            Having worked with Diamond Bank Limited where he started his banking
            career in Audit and Banking Operations, Sina later joined the
            Investment Banking Division of Fountain Trust Bank Plc in 1997 and
            subsequently served as Group Head, Corporate Finance and Head,
            Investment Banking Group. While in Corporate Finance, Sina was
            actively involved in high profile projects and advisory mandates in
            the private sector as well as the privatization programme of the
            Federal Government of Nigeria.
          </p>

          <p className="mb-3 leading-8">
            The alumnus of Lagos Business School (LBS) and IESE Business School
            Barcelona, Spain is a graduate of Accounting from the prestigious
            University of Lagos, where he graduated as one of the best in his
            class. Sina is a Fellow of the Institute of Chartered Accountants of
            Nigeria (ICAN) and Chartered Institute of Taxation of Nigeria
            (CITN). He is also an alumnus of Lagos Business School (LBS) and
            IESE Business School Barcelona, Spain.
          </p>
        </div>
      ),
    },
    {
      name: "Eric Okoruwa",
      image: Eric,
      description: (
        <div>
          <p className="mb-3 leading-8">
            Eric Okoruwa is the Group Executive Director of PanAfrican Capital
            Holdings with over 20 years’ experience in investment banking and
            financial advisory.
          </p>

          <p className="mb-3 leading-8">
            Eric has been involved in various high-profile transactions, raising
            over $5 billion and N300 billion from both foreign and local
            financial institution and capital markets across diverse sector.
            While at Fountain Trust bank Plc, he worked on a number of
            high-profile private sector advisory transactions as well as the
            Federal Government privatization program of the Federal Government
            of Nigeria.
          </p>

          <p className="mb-3 leading-8">
            He holds a Bachelor of Science Degree in Business Administration
            from the University of Lagos and a Master’s degree in Marketing from
            the University of Lagos. He has attended a number of Executive
            courses, Advanced Manager’s Programme (AMP) from the Lagos Business
            School, “Leading Organizational Change” – Whatrton University of
            Pennsylvania and the Lagos Business School Global Chief Executive
            Officer (GCEO) programme for Africa in conjunction with Strathmore
            University Business School and IESE Business School Navarra, New
            York.
          </p>

          <p className="mb-3 leading-8">
            He also attended various international and local courses on company
            Valuation and Issues Pricing, Factoring, Mergers & Acquisitions,
            Bonds & Derivatives, Asset Backed Securities, Structured Finance and
            International Trade Finance.
          </p>
        </div>
      ),
    },
    {
      name: "Dele Ige",
      image: Dele,
      description: (
        <div>
          <p className="mb-3 leading-8">
            Dele holds an MBA in Finance (University of Mysore, India) he is
            also an Associate of Institute of Chartered Accounts of Nigeria
            (ICAN).
          </p>

          <p className="mb-3 leading-8">
            He has more than 13 years working experience in Asset/Investment
            Management, having worked as an Investment Advisor, Equity Analyst,
            Credit Analyst, Fixed Income Trader, Portfolio Manager and Client
            Relationship Manager.
          </p>

          <p className="mb-3 leading-8">
            He joined PAC Asset Management Limited in 2011 as the company was in
            infancy. His tireless efforts has seen the set up and licensing of
            PAC Asset Management Limited (PACAM) and the floating of Five mutual
            funds including PACAM Balanced Fund, PACAM Money Market Fund, PACAM
            Fixed Income Fund, PACAM Equity Fund and PACAM Eurobond Fund. Dele
            facilitated the setup of a fixed income trading unit to complement
            the firm's funds management mandate.
          </p>

          <p className="mb-3 leading-8">
            He has also acquired fixed income trading experience. Before joining
            PAC Asset Management, he had worked with Xerox H.S. (Nigeria)
            Limited and Financial Derivatives Company Limited (FDC) as
            Equity/Fixed Income Analyst and subsequently as Portfolio Manager.
          </p>

          <p className="mb-3 leading-8">
            His responsibilities covered equity research, Equity/Fixed Income
            portfolio management both in local and foreign currency instruments.
          </p>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const conttt = profiles.find((i) => i.name === searchParams.get("name"));
    setProfile(conttt);
  }, [searchParams.get("name")]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section class="lg:my-24">
      <div class="container px-4 mx-auto mb-12 lg:mb-24 app-common-bg-not-fixed">
        <div class="flex flex-wrap -mx-4 items-start mb-40 min-h-screen">
          <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 lg:order-1 order-2 ">
            <div class="flex items-center">
              <div class="text-left">
                <h2 class="mb-6 lg:text-6xl text-3xl text-[#1233FE] font-[900] font-heading">
                  {profile?.name}
                </h2>
                <h3 class="mb-2 lg:text-2xl  text-black font-[500] font-heading">
                  Member of Board of Directors for PAC Market Intel Digital
                  Solution
                </h3>

                <div class="max-w-2xl  mt-4">{profile?.description}</div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 lg:px-4 relative lg:h-auto h-[400px] lg:order-2 order-1">
            <img class="w-full absolute top-0 " src={profile?.image} alt="" />
            <img
              class="lg:w-[150%] w-full absolute top-0 -z-10"
              src={imgbg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="container px-4 mx-auto z-10"></div>
    </section>
  );
}
