import Button from "../../Reausable/Button";
import iphone from "../../../assets/purp.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
const Dollarhero = () => {
  return (
    <div>
      <div className="min-h-[100vh] bg-[#0c1826]  ">
        <div className=" max-w-[1280px] h-full px-25 mx-auto flex justify-between items-center pt-50 max-tablet:flex-col ">
          <main className=" max-w-[400px] mt-10 max-tablet:flex max-tablet:flex-col max-tablet:items-center  ">
            <h1 className="text-white text-5xl font-bold tracking-tight mb-5">
              Flex Dollar
            </h1>
            <p className="bg-white rounded-full w-fit px-8 py-3 text-[#0c1826] text-xl mb-7">
              Dollar Savings
            </p>
            <p className="w-[86%] text-white text-xl">
              Save and grow your money in foreign currencies such as Dollars.
            </p>
            <div className="flex gap-3 mt-7">
              <Button
                title="Get on iphone"
                icon={<FaApple color="black" />}
                bg="white"
                textColor="black"
              />
              <Button
                title="Get on android"
                icon={<FaGooglePlay color="black" />}
                bg="white"
                textColor="black"
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

export default Dollarhero;
