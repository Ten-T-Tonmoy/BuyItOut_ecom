import React from "react";

//icons nd pics
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import { IoCartOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

import { FaRegHeart } from "react-icons/fa";
import BelowNav from "./BelowNav";

const NavBar = () => {
  return (
    <>
      <div className="w-[100vw items-center  py-5 border border-gray-300/80 flex justify-between px-4 sm:px-[5vw]">
        <div className="text-[1.5rem] font-extrabold">BuyItOut</div>
        <div className="w-[50%] relative sm:w-[70%]">
          <input
            placeholder="Search for products ..."
            type="text"
            className="border focus:border-gray-400
          outline-none py-[6px] px-3 rounded-md w-full border-gray-300/80 "
          />
          <IoSearchOutline
            className="absolute top-[13px] cursor-pointer
          hover:scale-125 right-3"
          />
        </div>
        <div className="hidden text-[1.4rem] sm:flex gap-4">
          <FaRegHeart className="cursor-pointer" />
          <FiShoppingBag className="cursor-pointer" />
          <FaRegUserCircle className="cursor-pointer" />
        </div>
      </div>
      <BelowNav />
    </>
  );
};

export default NavBar;
