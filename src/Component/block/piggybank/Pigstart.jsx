import React from "react";
import start from "../../../assets/imageB.png";
const Pigstart = () => {
  return (
    <div className="flex max-tablet:flex-col">
      <div className=" bg-blue-600 w-full h-[450px] mx-auto flex items-center ">
        <main className="max-w-[600px] mx-auto pl-9  max-tablet:flex max-tablet:flex-col max-tablet:items-center">
          <h1 className="text-white text-5xl font-bold max-tablet:text-center">
            Build your savings small small!
          </h1>
          <p className="w-[80%] text-white mt-7  max-tablet:text-center">
            With Piggybank, you can save periodically, automatically or
            manually. You can also save as you go, on your own terms. You’re the
            boss of your savings, choose how you want to save.
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

export default Pigstart;
