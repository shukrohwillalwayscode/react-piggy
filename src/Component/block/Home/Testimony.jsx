import React from "react";
import fall from "../../../assets/fallback.png";
import Button from "../../Reausable/Button";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Testimony = () => {
  return (
    <div className="max-w-[1280px] px-16 mx-auto flex items-center gap-8 max-tablet:flex-col-reverse">
      <main>
        <img src={fall} className="w-lg" alt="" />
      </main>
      <main className="max-tablet:flex max-tablet:flex-col max-tablet:text-center">
        <h1 className="text-3xl font-semibold ">
          Join 5+ million people who save <br />
          and invest with us
        </h1>
        <div className="flex gap-3 mt-6 max-tablet:justify-center">
          <Button
            title="Get on iphone "
            borderColor="black"
            icon={<FaApple />}
          />
          <Button
            title="Get on android"
            borderColor="black"
            icon={<FaGooglePlay />}
          />
        </div>
      </main>
    </div>
  );
};

export default Testimony;
