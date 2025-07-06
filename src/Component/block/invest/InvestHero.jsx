import React from "react";
import Button from "../../Reausable/Button";
import iphone from "../../../assets/invest2.png";
import yellow from "../../../assets/yellow.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const InvestHero = () => {
  return (
    <div className="min-h-[100vh] bg-purple-700 relative  ">
      <div className=" max-w-[1280px] h-full px-16 mx-auto flex justify-between items-center pt-72 ">
        <main className=" max-w-[400px] mt-10   max-tablet:hidden">
          <h1 className="text-white text-5xl font-bold tracking-tight mb-5">
            Invest on the go
          </h1>
          <p className="bg-white rounded-full w-fit px-8 py-3 text-purple-700 text-xl mb-7">
            Up to 35% returns
          </p>
          <p className="w-[86%] text-white text-lg">
            Invest securely and confidently on the go. Up to 35% returns, 6-12
            month duration.
          </p>
          <div className="flex gap-3 mt-7">
            <Button
              title="Get on iphone"
              icon={<FaApple color="#ffff" />}
              bg="#122231"
              textColor="white"
            />
            <Button
              title="Get on android"
              icon={<FaGooglePlay color="#ffff" />}
              bg="#122231"
              textColor="white"
            />
          </div>
        </main>
        <main className="flex ">
          <img
            src={iphone}
            className="w-[570px] h-[80vh] object-contain absolute right-25 z-10 bottom-0  max-mobile:w-[300px] max-mobile:bottom-0  "
            alt=""
          />
          <img src={yellow} className="w-sm absolute right-0 bottom-0" alt="" />
        </main>
      </div>
    </div>
  );
};

export default InvestHero;
