import Button from "../../Reausable/Button";
import iphone from "../../../assets/SL22.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
const SafelockHero = () => {
  return (
    <div>
      <div className="min-h-[100vh] bg-blue-400  ">
        <div className=" max-w-[1280px] h-full px-25 mx-auto flex justify-between items-center pt-50 max-tablet:flex-col ">
          <main className=" max-w-[400px] mt-10 max-tablet:flex max-tablet:flex-col max-tablet:items-center  ">
            <h1 className="text-white text-5xl font-bold tracking-tight mb-5">
              Safelock
            </h1>
            <p className="bg-white rounded-full w-fit px-8 py-3 text-blue-400 text-xl mb-7">
              Fixed Savings
            </p>
            <p className="max-w-[86%]  text-white  text-lg max-tablet:items-center">
              Lock funds away for a fixed period of time to avoid spending
              temptation. Earn up to 20% p.a. paid upfront.
            </p>
            <div className="flex gap-3 mt-7">
              <Button
                title="Get on iphone"
                icon={<FaApple color="#ffff" />}
                bg="#122231"
                textColor="white"
              />
              <Button
                title="Get on android"
                icon={<FaGooglePlay color="#ffff" />}
                bg="#122231"
                textColor="white"
              />
            </div>
          </main>
          <main className="flex ">
            <img
              src={iphone}
              className="w-[570px] h-[80vh] object-contain max-mobile:w-[300px] max-mobile:bottom-0  "
              alt=""
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default SafelockHero;
