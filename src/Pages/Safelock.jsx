import React from "react";
import SafelockHero from "../Component/block/safelock/SafelockHero";
import Safecard from "../Component/block/safelock/Safecard";
import Tempt from "../Component/block/safelock/Tempt";
import Safetest from "../Component/block/safelock/Safetest";

const Safelock = () => {
  return (
    <div>
      <SafelockHero />
      <Safecard />
      <Tempt />
      <Safetest />
    </div>
  );
};

export default Safelock;
