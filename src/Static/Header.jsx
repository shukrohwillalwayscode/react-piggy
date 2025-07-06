import { LuChevronDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Button from "../Component/Reausable/Button";
import { useState } from "react";
import Sidebar from "../Static/Sidebar";
import dollar from "../assets/dollar.png";
import house from "../assets/house.svg";
import lock from "../assets/lock.png";
import sheild from "../assets/sheild.png";
import target from "../assets/Targets.png";
import wallet from "../assets/wallet.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <header className=" h-24  fixed top-0 right-0 left-0 z-30 bg-white">
        <div className=" max-w-[1280px] px-16  mx-auto flex h-full items-center justify-between max-mobile:px-4">
          <section className=" flex">
            <main>
              <Link onClick={handleToggle} to="/">
                <img src="./logo.svg" className="max-mobile:w-[150px]" alt="" />
              </Link>
            </main>

            <main className=" flex  mx-12 gap-9 items-center font-medium max-[990px]:hidden">
              <Link>
                <div className="relative group inline-block text-left">
                  <div className="flex items-center gap-1 cursor-pointer text-gray-800 font-medium hover:text-blue-600">
                    <span>Save</span>
                    <LuChevronDown size={18} />
                  </div>

                  <div className="absolute left-0 mt-3 w-[520px] bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="grid grid-cols-2 gap-4 p-6 ">
                      <Link
                        to="/save/piggybank"
                        className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition "
                      >
                        <img
                          src={sheild}
                          alt="Piggybank"
                          className="w-10 h-10 bg-gray-100 p-1.5 rounded-md"
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            Piggybank
                          </h3>
                          <p className="text-xs text-gray-500">
                            Automated Savings
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/save/safelock"
                        className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
                      >
                        <img
                          src={lock}
                          alt="Safelock"
                          className="w-10 h-10 bg-blue-100 p-1.5 rounded-md"
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            Safelock
                          </h3>
                          <p className="text-xs text-gray-500">Fixed Savings</p>
                        </div>
                      </Link>

                      <Link
                        to="/save/target"
                        className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
                      >
                        <img
                          src={target}
                          alt="Target"
                          className="w-10 h-10 bg-green-100 p-1.5 rounded-md"
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            Target Savings
                          </h3>
                          <p className="text-xs text-gray-500">
                            Goal-oriented Savings
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/save/flex-naira"
                        className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
                      >
                        <img
                          src={wallet}
                          alt="Flex Naira"
                          className="w-10 h-10 bg-pink-100 p-1.5 rounded-md"
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            Flex Naira
                          </h3>
                          <p className="text-xs text-gray-500">
                            Flexible Savings
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/save/flex-dollar"
                        className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
                      >
                        <img
                          src={dollar}
                          alt="Flex Dollar"
                          className="w-10 h-10 bg-gray-100 p-1.5 rounded-md"
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            Flex Dollar
                          </h3>
                          <p className="text-xs text-gray-500">
                            Dollar Savings
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/save/house-money"
                        className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
                      >
                        <img
                          src={house}
                          alt="House Money"
                          className="w-10 h-10 bg-orange-100 p-1.5 rounded-md"
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            House Money
                          </h3>
                          <p className="text-xs text-gray-500">
                            Semi Strict Wallet
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="Invest">
                <nav>Invest</nav>
              </Link>

              <Link to="Stories">
                <nav>Stories</nav>
              </Link>
              <Link to="FAQs">
                <nav>FAQs</nav>
              </Link>
              <Link to="Resources">
                <nav className=" flex items-center gap-0.5">
                  <span>Resources</span>
                  <span>
                    <LuChevronDown />
                  </span>
                </nav>
              </Link>
              <Link to="store">
                <nav>Store</nav>
              </Link>
            </main>
          </section>
          <section className=" flex gap-2 max-[990px]:hidden">
            <Button title="Sign In" borderColor="#122231" />
            <Button title="Create free Account" bg="#122231" textColor="#fff" />
          </section>
          <section className=" hidden max-[990px]:block">
            {toggle ? (
              <RxCross1 size={35} onClick={handleToggle} />
            ) : (
              <RxHamburgerMenu size={35} onClick={handleToggle} />
            )}
          </section>
        </div>
      </header>
      <div>{toggle && <Sidebar handleToggle={handleToggle} />}</div>
    </>
  );
};

export default Header;
