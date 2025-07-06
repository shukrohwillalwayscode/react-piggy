import React from "react";
import start from "../../../assets/Sup.png";
const TargetSave = () => {
  return (
    <div className="flex max-tablet:flex-col">
      <div className=" bg-green-600 w-full h-[450px] mx-auto flex items-center ">
        <main className="max-w-[600px] mx-auto pl-9">
          <h1 className="text-white text-5xl font-bold max-tablet:text-center">
            Saving ‘just because’ is great, but saving for something special is
            a lot of fun.
          </h1>
          <p className="w-[80%] text-white mt-7  max-tablet:text-center">
            Got a savings goal in mind? We’ll help you reach it! Saving for a
            new phone? Check. Dad’s surprise birthday? Check. A new car, special
            vacation? Check and check. Target Savings helps you reach all your
            savings goals easily and faster.
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

export default TargetSave;
