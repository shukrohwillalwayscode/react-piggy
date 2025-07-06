import React, { useEffect } from "react";
import Button from "../Component/Reausable/Button";
import { Link } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";
import dollar from "../assets/dollar.png";
import house from "../assets/house.svg";
import lock from "../assets/lock.png";
import sheild from "../assets/sheild.png";
import target from "../assets/Targets.png";
import wallet from "../assets/wallet.png";

const Sidebar = ({ handleToggle }) => {
  // Prevent body scroll when Sidebar mounts
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  // Map icon names to actual imports instead of using eval
  const icons = { sheild, lock, target, wallet, dollar, house };

  const links = [
    {
      to: "/save/piggybank",
      icon: "sheild",
      name: "Piggybank",
      desc: "Automated Savings",
      color: "bg-gray-100",
    },
    {
      to: "/save/safelock",
      icon: "lock",
      name: "Safelock",
      desc: "Fixed Savings",
      color: "bg-blue-100",
    },
    {
      to: "/save/target",
      icon: "target",
      name: "Target Savings",
      desc: "Goal-oriented Savings",
      color: "bg-green-100",
    },
    {
      to: "/save/flex-naira",
      icon: "wallet",
      name: "Flex Naira",
      desc: "Flexible Savings",
      color: "bg-pink-100",
    },
    {
      to: "/save/flex-dollar",
      icon: "dollar",
      name: "Flex Dollar",
      desc: "Dollar Savings",
      color: "bg-gray-100",
    },
    {
      to: "/save/house-money",
      icon: "house",
      name: "House Money",
      desc: "Semi Strict Wallet",
      color: "bg-orange-100",
    },
  ];

  return (
    <div className="fixed top-[90px] left-0 right-0 bottom-0 bg-[#f2f7f8] z-40 overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 py-10 w-full max-w-[600px]">
        <div className="relative group inline-block text-left">
          <div className="flex items-center gap-1 cursor-pointer text-gray-800 font-medium hover:text-blue-600">
            <span>Save</span>
            <LuChevronDown size={18} />
          </div>

          <div className="absolute left-0 mt-3 w-[300px] bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 max-mobile:w-[200px]">
            <div className="grid grid-cols-1 gap-4 p-6">
              {links.map((item, index) => (
                <Link
                  onClick={handleToggle}
                  to={item.to}
                  key={index}
                  className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
                >
                  <img
                    src={icons[item.icon]}
                    alt={item.name}
                    className={`w-10 h-10 ${item.color} p-1.5 rounded-md`}
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link onClick={handleToggle} to="Invest">
          <nav className="hover:text-blue-600 transition">Invest</nav>
        </Link>

        <Link onClick={handleToggle} to="Stories">
          <nav className="hover:text-blue-600 transition">Stories</nav>
        </Link>

        <Link onClick={handleToggle} to="FAQs">
          <nav className="hover:text-blue-600 transition">FAQs</nav>
        </Link>

        <Link onClick={handleToggle} to="Resources">
          <nav className="flex items-center gap-0.5 hover:text-blue-600 transition">
            <span>Resources</span>
            <LuChevronDown />
          </nav>
        </Link>

        <Button borderColor="#122231" title="Sign In " />
        <Button title="Create free account" bg="#122231" textColor="#fff" />
      </div>
    </div>
  );
};

export default Sidebar;
