import React from "react";
import start from "../../../assets/mecho.png";
const Flexs = () => {
  return (
    <div className="flex max-tablet:flex-col">
      <div className=" bg-pink-600 w-full h-[450px] mx-auto flex items-center ">
        <main className="max-w-[600px] mx-auto pl-9">
          <h1 className="text-white text-5xl font-bold max-tablet:text-center">
            Stay prepared for life's emergencies Avoid temptations & lock your
            money.
          </h1>
          <p className="w-[80%] text-white mt-7  max-tablet:text-center">
            Give your emergency funds a boost! We know that emergencies can
            happen anytime. Building an emergency fund in Flex Naira helps you
            to stay ahead, so you can avoid borrowing or extra financial burden
            when there is a crisis. Best of all, you earn interests.
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

export default Flexs;
