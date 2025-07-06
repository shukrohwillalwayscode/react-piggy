import React from "react";

const Button = ({ title, bg, textColor, borderColor, icon }) => {
  return (
    <button
      style={{
        backgroundColor: `${bg}`,
        color: `${textColor}`,
        border: `1px solid ${borderColor}`,
      }}
      className="px-5 py-3 rounded-lg flex items-center w-max"
    >
      <span>{icon}</span>
      <span>{title}</span>
    </button>
  );
};

export default Button;
