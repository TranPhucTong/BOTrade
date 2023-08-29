import React from "react";
import quotation from "../../../images/Advan/“.svg";
import noMoney from "../../../images/Advan/no-money 2.svg";
import fund from "../../../images/Advan/fund 1.svg";
import candlestick from "../../../images/Advan/candlestick-chart 1.svg";
import moneyExchange from "../../../images/Advan/money-exchange-2 2.svg";
import time from "../../../images/Advan/24-7 1.svg";

interface CardInfo {
  image: string;
  title: string;
  content: string;
}

const Advantages = () => {
  const cardData: CardInfo[] = [
    {
      image: noMoney,
      title: "Demo account 10.000USD",
      content: "Test your investment strategy with a demo account.",
    },
    {
      image: fund,
      title: "Start with numbers small capital from 5$",
      content: "You can start trading when you deposit from 5$ or more.",
    },
    {
      image: moneyExchange,
      title: "Transaction value from 1$",
      content:
        "With an investment of just $1 per trade, you can make a profit in the market.",
    },
    {
      image: candlestick,
      title: "Transaction unlimited",
      content:
        "Unlimited number of trades offers unique experiences and helps to achieve the best profits.",
    },
    {
      image: time,
      title: "Trade every day of the week",
      content:
        "Take advantage of every potential trading opportunity on a daily basis with a 24/7 trading platform.",
    },
  ];
  return (
    <div className="w-full h-auto px-[50px] py-[60px] gap-16 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col gap-6 justify-center items-center">
        <img
          className=" object-cover w-auto h-auto bg-transparent"
          src={quotation}
          alt="quotation"
        />
        <h1 className="text-[40px] leading-[52px] text-center font-bold">
          Advantages when dealing <br />
          with AdTrade
        </h1>
        <div className="border-t-[3px] w-[136px] border-primary"></div>
      </div>
      <div className="flex justify-between w-full">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="w-[250px] h-[330px] rounded-[40px] cursor-pointer bg-bgColorBox hover:bg-primary hover:text-black"
          >
            <div className="p-8 text-left flex flex-col gap-4">
              <div className="w-[80px] h-[80px] flex justify-center items-center  rounded-xl bg-bgColorIcon">
                <img className="object-cover p-4" src={item.image} alt="" />
              </div>
              <h2 className="font-bold text-[20px] leading-[26px]">
                {item.title}
              </h2>
              <p className="font-normal text-base leading-[20px]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
