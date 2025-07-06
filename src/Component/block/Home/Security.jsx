import React from "react";
import padlock from "../../../assets/padlock.svg";
import black from "../../../assets/blackArrrow.png";
const Security = () => {
  return (
    <div className="py-20">
      <div className="max-w-[1280px] px-16  mx-auto  flex items-center gap-6 max-tablet:flex-col">
        <main>
          <img src={padlock} alt="" />
        </main>
        <main className="max-tablet:flex flex-col items-center">
          <h1 className="text-2xl  font-bold mb-5 max-tablet:text-center">
            Your security is our priority
          </h1>
          <p className="max-w-[630px] mb-5  text-md max-tablet:text-center max-tablet:max-w[200px]">
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is completely protected from fraud.
          </p>
          <div className="flex">
            <span>
              <img src={black} alt="" />
            </span>
            <span>
              <h3 className="text-md font-medium hover:underline cursor-pointer">
                More on our security measures
              </h3>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Security;
