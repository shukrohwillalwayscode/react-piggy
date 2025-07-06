import React from "react";
import Button from "../../Reausable/Button";
import heropic from "../../../assets/storiesheader.png";

const Storieshero = () => {
  return (
    <div className="mt-52">
      <div className="max-w-[1280px]  px-16  mx-auto flex items-center justify-between max-tablet:flex-col  ">
        <main className="max-tablet:items-center ">
          <h1 className="text-5xl font-bold w-sm max-tablet:text-center ">
            Loved by our Customers
          </h1>
          <p className=" w-lg text-xl mt-3 mb-4 max-tablet:text-center max-tablet:w-sm">
            Stories of happy savers who Piggyvest has helped or is helping save
            for what truly matters to them.
          </p>
          <div className="max-tablet:text-center">
            <Button title="Add your story" bg="#122332" textColor="#ffff" />
          </div>
        </main>
        <main>
          <img src={heropic} className="w-[572px]" alt="" />
        </main>
      </div>
    </div>
  );
};

export default Storieshero;
