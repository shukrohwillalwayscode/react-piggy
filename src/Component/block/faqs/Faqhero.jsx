import React from "react";

const Faqhero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center max-h-[70vh] bg-[#f9f9f9] pt-[150px] pb-[15%]">
        <h1 className="text-5xl font-bold mb-[30px]">
          Frequently Asked Questions (FAQs)
        </h1>
        <div>
          <input
            type="text"
            placeholder="Search for a question"
            className="w-[800px] h-[67px] border rounded-[10px] bg-[#fff] pl-[30px] text-[#cabebe] text-[18px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Faqhero;
