import React from "react";
import cio from "../assets/cio.svg";
import pym from "../assets/pym.svg";
import fast from "../assets/fast.svg";
import tc from "../assets/techcabal.png";
import techc from "../assets/techcrunch.png";
import cnbc from "../assets/cnbc.png";
import { Link } from "react-router-dom";

import qr from "../assets/qr.avif";
import { LiaFacebookF, LiaInstagram, LiaTwitter } from "react-icons/lia";
import { IoLogoTiktok } from "react-icons/io5";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1280px] px-16 mx-auto pt-30">
        <main>
          <h1 className="text-center text-4xl font-bold">As featured in</h1>
          <div className="flex justify-between items-center flex-wrap mt-5">
            <img src={tc} className="h-[40px]" alt="" />
            <img src={cnbc} className="h-[50px]" alt="" />
            <img src={techc} className="h-[30px]" alt="" />
            <img src={pym} className="h-[50px]" alt="" />
            <img src={fast} className="h-[80px]" alt="" />
            <img src={cio} className="h-[40px]" alt="" />
          </div>
        </main>

        <main className=" foot flex flex-col lg:flex-row justify-between gap-20 px-6 py-10 text-sm text-gray-700 mt-20">
          <div className="flex flex-col items-start space-y-4">
            <Link to="/">
              <img
                src="./logo.svg"
                className="w-[160px]"
                alt="Piggyvest Logo"
              />
            </Link>
            <img src={qr} className="w-[120px]" alt="NDPR QR Code" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 flex-1">
            <div>
              <h4 className="font-semibold text-base mb-3">Products</h4>
              <ul className="space-y-2">
                <li>Piggybank</li>
                <li>Invest</li>
                <li>Safelock</li>
                <li>Target Savings</li>
                <li>Flex Naira</li>
                <li>Flex Dollar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-3">Company</h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Security</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col  items-start lg:items-end text-sm  ">
            <div className="flex gap-4 text-xl text-gray-700 mb-6">
              <LiaFacebookF />
              <LiaInstagram />
              <LiaTwitter />
              <IoLogoTiktok />
              <TbBrandYoutubeFilled />
            </div>
            <p className="text-right mb-4">
              Tesmot house, Abdulrahman Okene close, <br />
              Victoria Island, Lagos, Nigeria.
            </p>
            <p className="text-right mb-4">contact@piggyvest.com</p>
            <p className="text-right">+2347009339339</p>
          </div>
        </main>

        <main className="border-t border-gray-200 pt-10">
          <p className=" text-[12px] text-gray-500 w-[700px] leading-5 max-tablet:w-fit">
            Piggyvest (formerly piggybank.ng) is the leading online savings &
            investing platform in Nigeria. For over 9 years, our customers have
            saved and invested billions of Naira that they would normally be
            tempted to spend.
          </p>

          <p className="text-[12px] text-blue-900 mt-8">
            2016 - 2025 PiggyTech Global Limited - RC 1405222
          </p>
        </main>
      </div>
    </div>
  );
};

export default Footer;
