import React, { ReactNode } from "react";
import HeaderHome from "../../components/components-home/Header/HeaderHome";
import FooterHome from "../../components/components-home/Footer/FooterHome";

type LayoutHomeProps = {
  children: ReactNode;
};
const LayoutHome = ({ children }: LayoutHomeProps) => {
  return (
    <div>
      <HeaderHome />
      <div className="">{children}</div>
      <FooterHome />
    </div>
  );
};

export default LayoutHome;
