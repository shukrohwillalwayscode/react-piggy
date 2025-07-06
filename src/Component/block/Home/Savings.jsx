import React from "react";
import image1 from "../../../assets/PB1.png";
import image2 from "../../../assets/SL22.png";
import image3 from "../../../assets/GB2.avif";
import image4 from "../../../assets/pp1.avif";
import image5 from "../../../assets/dbb.avif";
import image6 from "../../../assets/OR1.png";
import { Link } from "react-router-dom";
const Savings = () => {
  const piggyCard = [
    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "text-blue-700",
      image: image1,
      link: "/save/piggybank",
      
    },
    {
      title: "Fixed Savings",
      desc: "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
      btnTitle: "Safe Lock",
      color: "text-blue-400",
      image: image2,
      link: "/save/safelock",
    },
    {
      title: "Goal-oriented Savings",
      desc: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      btnTitle: "Target Savings",
      color: "text-green-500",
      image: image3,
      link: "/save/target",
    },
    {
      title: "Flex Naira",
      desc: "Save, transfer, manage, organise, and withdraw your money at any time.",
      btnTitle: "Flex Naira",
      color: "text-pink-500",
      image: image4,
      link: "/save/flex-naira",
    },
    {
      title: "Flex Dollar",
      desc: "Save and grow your money in foreign currencies such as Dollars.",
      btnTitle: "Flex Dollar",
      color: "text-black",
      image: image5,
      link: "/save/flex-dollar",
    },
    {
      title: "HouseMoney",
      desc: "Plan for your rent and household expenses",
      btnTitle: "HouseMoney",
      color: "text-orange-500",
      image: image6,
      link: "/save/house-money",
    },
  ];

  const hover = [
    " hover:bg-blue-700 transition duration-300 hover:text-white",
    " hover:bg-blue-400 transition duration-300 hover:text-white",
    " hover:bg-green-500 transition duration-300 hover:text-white",
    " hover:bg-pink-500 transition duration-300 hover:text-white",
    " hover:bg-black transition duration-300 hover:text-white",
    " hover:bg-orange-500 transition duration-300 hover:text-white",
  ];

  return (
    <div className=" my-20 flex flex-col items-center ">
      <section className=" text-center">
        <h1 className=" font-bold text-5xl mb-4">
          Many ways to build your savings
        </h1>
        <p className=" text-2xl">
          Earn 12%-20% when you save with any of these Piggyvest plans.
        </p>
      </section>
      <section className=" card max-w-[1200px] grid grid-cols-2 max-tablet:grid-cols-1">
        {piggyCard?.map((data, i) => (
          <Link to={data.link} key={i}>
            <main
              className={` group bg-white relative h-[430px] w-[480px] m-6 p-6 rounded-xl shadow-md max-mobile:w-[90%] max-mobile:h-[500px] ${hover[i]}`}
            >
              <h1
                className={`font-bold text-3xl duration-300 ${data.color} group-hover:text-white max-mobile:text-center`}
              >
                {" "}
                {data.title}{" "}
              </h1>
              <p className="w-[270px] mt-6 text-lg max-mobile:text-center">
                {data.desc}
              </p>
              <button className="absolute bottom-6"> {data.btnTitle} </button>

              <img
                src={data.image}
                alt=""
                className="hidden group-hover:block w-60 absolute right-1 bottom-1 transition-all ease-in-out "
              />
            </main>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Savings;
