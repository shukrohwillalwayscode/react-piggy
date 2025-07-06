import React from "react";
import start from "../../../assets/Sup.png";
const Dollarp = () => {
  return (
    <div className="flex max-tablet:flex-col">
      <div className=" bg-[#0c1826] w-full h-[450px] mx-auto flex items-center ">
        <main className="max-w-[600px] mx-auto pl-9">
          <h1 className="text-white text-5xl font-bold max-tablet:text-center">
            Preserve the value of your money
          </h1>
          <p className="w-[80%] text-white mt-7  max-tablet:text-center">
            One of the key elements in wealth management is preserving (and
            growing) the value of your savings. In simple terms, this means not
            losing value on your savings. Saving in foreign currencies like
            Dollars helps to hedge against that.
          </p>
        </main>
      </div>

      <div>
        <main className="flex justify-end">
          <img
            src={start}
            className="w-[950px] h-[450px] max-tablet:object-cover "
            alt=""
          />
        </main>
      </div>
    </div>
  );
};

export default Dollarp;
