import React from "react";
import start from "../../../assets/SA.png";
const Tempt = () => {
  return (
    <div className="flex max-tablet:flex-col">
      <div className=" bg-blue-400 w-full h-[450px] mx-auto flex items-center ">
        <main className="max-w-[600px] mx-auto pl-9">
          <h1 className="text-white text-5xl font-bold max-tablet:text-center">
            Avoid temptations & lock your money.
          </h1>
          <p className="w-[80%] text-white mt-7  max-tablet:text-center">
            Safelock allows you to set money aside for a fixed period of time
            without having access to it until maturity. It’s like having your
            own custom fixed deposit.
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

export default Tempt;
