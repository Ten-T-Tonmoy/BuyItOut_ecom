import React from "react";

const BelowNav = () => {
  return (
    <div>
      <ul
        className=" hidden py-2  w-full text-[.8rem] font-bold text-gray-800/70 md:flex
       justify-center gap-4"
      >
        <li className="hover:after:bg-amber-400 ">HOME</li>                         
        <li>CATEGORIES</li>
        <li>MEN'S</li>
        <li>WOMEN'S</li>
        <li>JWELERY</li>
        <li>PERFUME</li>
        <li>BLOG</li>
        <li>HOT OFFERS</li>
      </ul>
    </div>
  );
};

export default BelowNav;
