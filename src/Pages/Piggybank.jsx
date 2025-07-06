import React from "react";
import PiggybankHero from "../Component/block/piggybank/PiggybankHero";
import PiggyBnkCard from "../Component/block/piggybank/PiggyBnkCard";
import Pigstart from "../Component/block/piggybank/Pigstart";
import Pigtest from "../Component/block/piggybank/Pigtest";

const Piggybank = () => {
  return (
    <div>
      <PiggybankHero />
      <PiggyBnkCard />
      <Pigstart />
      <Pigtest />
    </div>
  );
};

export default Piggybank;
