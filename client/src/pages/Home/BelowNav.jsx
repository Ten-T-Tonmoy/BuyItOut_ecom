import React from "react";

const BelowNav = () => {
  const afterBarAnimation = `relative after:absolute after:left-0 after:-bottom-1 after:h-[4px]
          after:bg-blue-500 after:transition-all after:duration-300 after:transform 
          after:origin-left hover:text-blue-500 after:scale-x-0 hover:after:scale-x-100 after:w-full cursor-pointer           
          `;
  return (
    <div>
      <ul
        className=" hidden py-3  w-full text-[.8rem] font-bold text-gray-800/80 md:flex
       justify-between px-[10vw] lg:px-[17vw] "
      >
        <li className={`${afterBarAnimation}`}>HOME</li>
        <li className={`${afterBarAnimation}`}>CATEGORIES</li>
        <li className={`${afterBarAnimation}`}>MEN'S</li>
        <li className={`${afterBarAnimation}`}>WOMEN'S</li>
        <li className={`${afterBarAnimation}`}>JWELERY</li>
        <li className={`${afterBarAnimation}`}>PERFUME</li>
        <li className={`${afterBarAnimation}`}>BLOG</li>
        <li className={`${afterBarAnimation}`}>HOT OFFERS</li>
      </ul>
    </div>
  );
};

export default BelowNav;
