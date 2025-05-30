import React from "react";
import LeftLayer from "./LeftLayer";
import TrippleGrid from "./TrippleGrid";

const BentoGrid = () => {
  return (
    <div className="sm:grid-cols-2 grid grid-cols-1">
      <LeftLayer />
      <TrippleGrid />
    </div>
  );
};

export default BentoGrid;
