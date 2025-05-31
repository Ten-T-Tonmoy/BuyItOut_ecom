import React from "react";
import LeftLayer from "./LeftLayer";
import TrippleGrid from "./TrippleGrid";
import DealDay from "./DealDay";

const BentoGrid = () => {
  return (
    <div className=" md:grid-cols-[26%_74%] md:p-[5vw] grid grid-cols-1">
      <LeftLayer />
      <div className="w-[100vw] md:w-[64vw]">
        <TrippleGrid />
        <DealDay />
      </div>
    </div>
  );
};

export default BentoGrid;
