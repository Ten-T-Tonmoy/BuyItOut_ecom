import React from "react";
import LeftLayer from "./LeftLayer";
import TrippleGrid from "./TrippleGrid";

const BentoGrid = () => {
  return (
    <div className="md:grid-cols-[26%_74%] md:p-[5vw] grid grid-cols-1">
      <LeftLayer />
      <TrippleGrid />
    </div>
  );
};

export default BentoGrid;
