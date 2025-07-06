import React from "react";
import bodyimg from "../../../assets/stories.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import Button from "../../Reausable/Button";

const FaqInvest = () => {
  return (
    <div className="bg-[#f2f7f8]">
      <div className="flex items-center gap-24 mx-auto max-w-[1200px] pt-[17%] pb-[10%] max-tablet:flex-col-reverse">
        <div className="w-[450px]">
          <img src={bodyimg} alt="faqimg" />
        </div>
        <div>
          <div className="w-[500px] mb-[20px]">
            <h1 className=" text-[35px] font-bold tracking-tighter leading-10 max-tablet:items-center">
              Join 5+ million people who save and invest with us
            </h1>
          </div>
          <div className="flex gap-2">
            <Button
              title="Get on iPhone"
              icon={<FaApple />}
              borderColor="#000"
              textColor="#0c0e1b"
              bgColorlor="#f2f7f8"
            />
            <Button
              title="Get on Android"
              iconTitle={<BiLogoPlayStore />}
              borderColor="#000"
              textColor="#0c0e1b"
              bgColor="#f2f7f8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqInvest;
