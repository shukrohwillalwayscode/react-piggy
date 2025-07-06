import React from "react";
import purple from "../../../assets/iphoneInvest.avif";
import black from "../../../assets/blackArrrow.png";
import { Link } from "react-router-dom";

const Invest = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1280px] px-16 mx-auto pt-36 pb-36 ">
        <main className="leading-10 ">
          <h1 className="text-5xl font-semibold text-center">
            Diverse ways to Invest
          </h1>
          <p className="text-center text-2xl mt-4">
            Grow your money and invest for your future confidently.
          </p>
        </main>
        <main className="flex max-w-[100%] bg-purple-700 rounded-3xl px-20 pt-15 justify-between mt-10 max-tablet:flex-col max-tablet:text-center">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Earn Up to 35% returns
            </h1>
            <p className="w-80 text-xl text-purple-200 font-medium mt-8  max-tablet:w-fit">
              Invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment <br />
              opportunities.
            </p>
            <Link to="Invest">
              <span className="flex mt-30 max-tablet:mt-5 max-tablet:justify-center">
                <img src={black} alt="" className="filter invert cover " />
                <p className="text-white hover:underline cursor-pointer text-l font-medium">
                  Learn about investments
                </p>
              </span>
            </Link>
          </div>
          <div className="flex justify-center">
            <img src={purple} className="w-[400px]" alt="" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Invest;
