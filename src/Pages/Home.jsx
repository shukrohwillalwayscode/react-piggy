import React from "react";
import Hero from "../Component/block/Home/Hero";
import Security from "../Component/block/Home/Security";
import Savings from "../Component/block/Home/Savings";
import Invest from "../Component/block/Home/Invest";
import Youtube from "../Component/block/Home/Youtube";
import Testimony from "../Component/block/Home/Testimony";

const Home = () => {
  return (
    <div>
      <Hero />
      <Security />
      <Savings />
      <Invest />
      <Youtube />
      <Testimony />
    </div>
  );
};

export default Home;
