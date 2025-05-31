import React from "react";
import { categories } from "../../utils/productDB";

const LeftLayer = () => {
  return (
    <div>
      <Category />
    </div>
  );
};

export default LeftLayer;

const Category = () => {
  const categs = categories;
  return (
    <div className="justify-self-center ">
      {categs.map((el, key) => {
        <div key={key}>{el.name}</div>;
      })}
    </div>
  );
};
const BestSeller = () => {
  return <div></div>;
};
