import Introduce from "components/components-home/Introduce/Introduce";
import React from "react";

import Advantages from "components/components-home/Advantages/Advantages";
import Line from "components/components-home/Line/Line";

const Home = () => {
  return (
    <div className="w-full">
      <Introduce />
      <Line />
      <Advantages />
    </div>
  );
};

export default Home;
