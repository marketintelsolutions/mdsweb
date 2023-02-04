import React from "react";
import phoneIcon from "../../assets/phoneIcon.svg";
import PaysharpItem from "./PaysharpItem";
import electricity from "../../assets/icons/electricity.svg";
import computer from "../../assets/icons/round-computer.svg";
import cash from "../../assets/icons/mdi_cash.svg";
import moneyTransfer from "../../assets/icons/money-bill-transfer.svg";
import rectangles from "../../assets/icons/rectangle-stack.svg";

const PaysharpSectionTwo = () => {
  return (
    <div className="flex flex-col gap-10 w-full items-center justify-center mb-20">
      <div className="flex gap-1 flex-col items-center justify-center">
        <p className="text-[#192640] text-xl font-normal leading-10">
          A Single Platform With Endless Possibilities
        </p>
        <h1 className="text-[#192640] font-black text-5xl text-center">
          Paysharp Services
        </h1>
      </div>
      <div className="grid xl:grid-cols-[300.33px_300.33px_300.33px] gap-5 gap-x-5  grid-cols-[300.33px]">
        {/* ITEM */}
        <PaysharpItem image={phoneIcon} text="Airtime Vending" />
        {/* ITEM */}
        <PaysharpItem image={cash} text="Cash Withdrawal" />
        {/* ITEM */}
        <PaysharpItem image={rectangles} text="Cash Deposit" />
        {/* ITEM */}
        <PaysharpItem image={electricity} text="Prepaid Meter" />
        {/* ITEM */}
        <PaysharpItem image={moneyTransfer} text="Money Transfer" />
        {/* ITEM */}
        <PaysharpItem image={computer} text="Cable Subscription" />
      </div>
    </div>
  );
};

export default PaysharpSectionTwo;
