import React from "react";
import start from "../../../assets/Start.png";
const Starting = () => {
  return (
    <div className="flex max-tablet:flex-col">
      <div className=" bg-purple-700 w-full h-[450px] mx-auto flex items-center ">
        <main className="max-w-[600px] mx-auto pl-9">
          <h1 className="text-white text-5xl font-bold max-tablet:text-center">
            We’ve made it easier for anyone to get started.
          </h1>
          <p className="w-[80%] text-white mt-7  max-tablet:text-center">
            Finally, you can access pre-vetted low-medium risk primary and
            secondary investment opportunities easily with any amount you have.
            No hidden fees/charges. Thorough due diligence and pre-vetting on
            all investments are carried out for maximum safety.
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

export default Starting;
