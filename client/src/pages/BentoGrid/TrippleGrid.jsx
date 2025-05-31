import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TrippleGrid = () => {
  return (
    <div
      className="grid grid-cols-1 text-[.9rem] sm:grid-cols-2 lg:grid-cols-3  
    justify-self-center "
    >
      <NewArrival />
      <Trending />
      <TopRated />
    </div>
  );
};

export default TrippleGrid;

const NewArrival = () => {
  return (
    <div className="p-2 justify-self-center w-full ">
      <h1 className="py-1 my-2 border-b border-gray-300/60 font-bold">
        New Arrival
      </h1>

      <div
        className="overflow-x-auto w-[380px] md:w-full  scrollbar-thin 
      scrollbar-thumb-blue-400"
      >
        <div className="flex gap-2">
          <div className="flex flex-col gap-1 min-w-fit pr-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="flex flex-col gap-1 min-w-fit">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

const Trending = () => {
  return (
    <div className="p-2 justify-self-center w-full ">
      <h1 className="py-1 my-2 border-b border-gray-300/60 font-bold">
        Trending
      </h1>

      <div
        className="overflow-x-auto w-[380px] md:w-full  scrollbar-thin 
      scrollbar-thumb-blue-400"
      >
        <div className="flex gap-2">
          <div className="flex flex-col gap-1 min-w-fit pr-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="flex flex-col gap-1 min-w-fit">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
const TopRated = () => {
  return (
    <div className="p-2 justify-self-center w-full ">
      <h1 className="py-1 my-2 border-b border-gray-300/60 font-bold">
        Top Rated
      </h1>

      <div
        className="overflow-x-auto w-[380px] md:w-full  scrollbar-thin 
      scrollbar-thumb-blue-400"
      >
        <div className="flex gap-2">
          <div className="flex flex-col gap-1 min-w-fit pr-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="flex flex-col gap-1 min-w-fit">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ name, descreption, price, originalPrice, image, category }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className=" h-24 w-[380px] md:w-full my-2  border rounded-lg border-gray-300/60 p-2  py-1 overflow-hidden
    flex items-center justify-start
    "
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={
        inView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.9, y: 30 }
      }
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.img
        src="/products/sports-1.jpg"
        alt="icon"
        className="h-24  object-contain"
      />
      <div className="flex flex-col gap-1 text-[.8rem]  px-3">
        <h1
          className="font-bold text-md  md:text-overflow:ellipsis 
          md:truncate whitespace-nowrap
        overflow-hidden md:w-[130px] text-gray-700 "
        >
          Ps5 Dual Sense Controller
        </h1>
        <p className="text-gray-600">Electronics</p>
        <p className="flex gap-4">
          <span className="text-blue-600 font-bold ">20$</span>
          <span className="text-gray-400 line-through font-[500]">25$</span>
        </p>
      </div>
    </motion.div>
  );
};
