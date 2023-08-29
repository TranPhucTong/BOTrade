import React from "react";
import HorizontalHexagonButton from "../CustomButton/CustomButton ";
import { Button } from "@mantine/core";
import chartIntro from "../../../images/Introduce/Chart.svg";
import netProfit from "../../../images/Introduce/Net Profit.svg";
import amount from "../../../images/Introduce/Amount.svg";

const Introduce = () => {
  return (
    <div className="w-full h-auto px-[50px] py-[60px] gap-8 flex justify-center items-center">
      <div className="flex flex-col gap-10 items-start w-[35%]">
        <div>
          <h1 className="font-bold text-left text-[70px] leading-[70px]">
            Earn <br />
            <span className="text-primary">Unlimited</span> <br />
            <span className="text-primary">Income</span> <br />
            In Minutes
          </h1>
        </div>
        <div>
          <p className="font-medium text-left text-[20px] leading-[26px]">
            AdTrade is committed to providing our customers with the best
            trading experience.
          </p>
        </div>
        <div>
          <Button className="border border-primary" size="xs">
            <div className="text-base font-bold">Get Started for Free</div>
          </Button>
        </div>
        <div className="flex gap-4 justify-start items-center text-left w-full">
          <div className="flex flex-col text gap-2">
            <p className="font-bold text-xl">10 Years</p>
            <p className="font-normal text-base">Trading Experience</p>
          </div>
          <div className="flex flex-col text gap-2">
            <p className="font-bold text-xl">24/7</p>
            <p className="font-normal text-base">Online Support</p>
          </div>
          <div className="flex flex-col text gap-2">
            <p className="font-bold text-xl">25k+</p>
            <p className="font-normal text-base">Satisfied Custumers</p>
          </div>
        </div>
      </div>
      <div className="w-[65%] relative">
        <img
          className="w-[90%] h-auto object-cover"
          src={chartIntro}
          alt="ChartIntroduce.png"
        />
        <img
          className="absolute w-auto h-auto -top-16 right-0 object-cover"
          src={netProfit}
          alt="netProfit.png"
        />
        <img
          className="absolute w-auto h-auto -bottom-[110px] right-0 object-cover"
          src={amount}
          alt="amount.png"
        />
      </div>
    </div>
  );
};

export default Introduce;
