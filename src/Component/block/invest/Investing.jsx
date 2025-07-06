import React from "react";
import img1 from "../../../assets/investimg1.png";
import img2 from "../../../assets/investimg2.png";
import img3 from "../../../assets/investimg3.png";
const Investing = () => {
  const info = [
    {
      title: "Investments simplified",
      desc: "With minimum investments starting as low as N5,000, investment is no longer out of reach. Everyone is welcome.",
      image: img1,
    },
    {
      title: "Invest confidently",
      desc: "We work with leading licensed investment houses such as ARM, AIICO and Stanbic.",
      image: img2,
    },
    {
      title: "Diversify your portfolio",
      desc: "Invest in various industries such as fixed income instruments, agriculture, transportation, etc.",
      image: img3,
    },
  ];
  return (
    <div className="max-w-[1280px]  px-16 py-20 mx-auto ">
      <main>
        <h1 className="text-center text-5xl font-semibold">
          Simple investments with great returns
        </h1>
        <p className="text-center mt-3">
          Investments are made readily accessible to everyone
        </p>
      </main>
      <main className="flex flex-wrap gap-4 mt-10 ">
        {info?.map((data, i) => (
          <main
            className={`bg-white h-[550px] w-[350px] mx-[auto] px-10 pt-10 rounded-2xl shadow-md flex flex-col justify-between max-mobile:w-[97%]`}
            key={i}
          >
            <h1 className="text-purple-700 text-4xl font-bold mb-3 max-mobile:text-2xl  max-mobile:text-center">
              {" "}
              {data.title}{" "}
            </h1>
            <p className="max-w-[270px] text-gray-600 mb-3 max-mobile:max-w-[220px] max-mobile:items-center max-mobile:mx-auto">
              {data.desc}
            </p>
            <img src={data.image} className="w-[280px] mt-20" alt="" />
          </main>
        ))}
      </main>
    </div>
  );
};

export default Investing;
