import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom"; // Thay thế bằng thư viện routing bạn đang sử dụng
import logoSvg from "../../../images/Logo.svg";
import { SwitchToggle } from "../SwitchToggle/SwitchToggle";
import CustomButton from "../CustomButton/CustomButton ";
import HexagonalButton from "../CustomButton/CustomButton ";

const HeaderHome = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <header className="header flex w-full justify-between items-center bg-gray-900 px-[50px]">
      <div className="header-left flex gap-6 justify-center items-center">
        <SwitchToggle />
        <select className="h-[24px] w-[88px] bg-transparent">
          <option value="en">English</option>
          <option value="vn">VietNam</option>
        </select>
      </div>
      <div className="header-center cursor-pointer">
        <img src={logoSvg} alt="Company Logo" />
      </div>
      <div className="header-right flex justify-center items-center gap-8">
        <Button size="xs">
          <p className="text-base font-bold">Sign In</p>
        </Button>
        <Button size="xs">
          <p className="text-base font-bold">Sign In</p>
        </Button>
      </div>
    </header>
  );
};

export default HeaderHome;
