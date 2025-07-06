import React from "react";
import InvestHero from "../Component/block/invest/InvestHero";
import Investing from "../Component/block/invest/Investing";
import Starting from "../Component/block/invest/Starting";


const Invest = () => {
  return (
    <div>
      <InvestHero />
      <Investing />
      <Starting />
    </div>
  );
};

export default Invest;
