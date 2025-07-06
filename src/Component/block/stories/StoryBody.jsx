import React from "react";
import Button from "../../Reausable/Button";
import bodyimg from "../../../assets/stories.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Body = () => {
  return (
    <div className="max-w-[1280px]  px-16 py-36 mx-auto mt-36 flex items-center gap-10 max-tablet:flex-col-reverse">
      <main>
        <img src={bodyimg} alt="" />
      </main>
      <main>
        <h1 className="text-3xl font-semibold max-tablet:text-center">
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

export default Body;
