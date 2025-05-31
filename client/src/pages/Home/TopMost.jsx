import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const TopMost = () => {
  return (
    <div className="p-1 sm:px-8 flex justify-between items-center text-gray-400">
      <div className="flex gap-2 text-[1.2rem]">
        <FaFacebook className="text-blue-600" />
        <FaInstagram className="text-pink-400" />
        <FaTwitter className="text-cyan-400" />
        <FaLinkedin className="text-blue-400" />
      </div>
      <div className="text-[.7rem] md:inline-block hidden ">
        ! FREE SHIPPING THIS WEEK OVER 100$
      </div>
      <div className="text-[.9rem] p-1 rounded-md ">
        <select className="text-[.9rem] px-1 rounded-md " name="language" id="">
          <option>USD$</option>
          <option>BDT</option>
          <option>MYR</option>
        </select>
        <select className="text-[.9rem] px-2 rounded-md " name="language" id="">
          <option>English</option>
          <option>Arabic</option>
          <option>Espanol</option>
        </select>
      </div>
    </div>
  );
};

export default TopMost;
