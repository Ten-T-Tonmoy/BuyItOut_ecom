import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";

import { IoCartOutline } from "react-icons/io5";

const DealDay = () => {
  const deals = ["/products/jewllery-1.jpg"];
  return (
    <div>
      <h1
        className="py-1 my-2 w-[92%] lg:w-full justify-self-center
       border-b border-gray-300/60 font-bold"
      >
        Deal Of The Day
      </h1>
      <div className="overflow-x-auto flex justify-self-center gap-8 p-[4%] lg:p-0 w-full lg:w-full">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default DealDay;

const Card = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div
      className=" border my-6 shrink-0 rounded-lg w-full lg:w-full justify-self-center
      p-4 flex flex-col sm:flex-row border-gray-300/60 "
    >
      <motion.img
        src="/products/jewellery-1.jpg"
        alt="icon"
        className="sm:min-w-[50%]  object-contain"
      />
      <div ref={ref} className=" flex flex-col gap-2 text-stone-900 my-auto">
        <div>stars</div>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="font-black"
        >
          ROSE GOLD DIAMONDS EARRING
        </motion.h1>
        <p>
          just whatever stipid ass info here to fill the container incase i dont
          wanna make it look empty now can i
        </p>
        <p className="flex gap-4 text-[1.2rem]">
          <span className="text-blue-600 font-bold ">20$</span>
          <span className="text-gray-400 line-through font-[500]">25$</span>
        </p>
        <motion.div
          className="py-4 "
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-md p-2
          font-black flex justify-center items-center text-white hover:scale-105 transition-all duration-300 hover:shadow-purple-500/20 shadow-xl cursor-pointer"
          >
            Add to cart
            <IoCartOutline className="scale-125 mx-3" />
          </button>
        </motion.div>
        <div className="flex text-[.9rem]  justify-between pr-10">
          <p>
            Already sold : <strong>125</strong>{" "}
          </p>
          <p>
            Available : <strong> 75</strong>
          </p>
        </div>
        <h1 className="font-black mt-2 text-[.9rem]">Offer Ends in : </h1>
        <CountDown minutes={"200"} />
      </div>
    </div>
  );
};

//nah i will send plain minutes
const CountDown = ({
  minutes,
  rating,
  image,
  title,
  descreption,
  sold,
  left,
  price,
  originalPrice,
}) => {
  const [timeLeft, setTimeLeft] = useState(parseInt(minutes) * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const timeFormat = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return { days, hours, mins, secs };
  };

  const { days, hours, mins, secs } = timeFormat(timeLeft);
  return (
    <div className="flex justify-between py-2">
      <div
        className="bg-gray-200 py-2 px-4 rounded-md shadow-xl text-blue-500 
      flex flex-col justify-center items-center"
      >
        <div className="text-2xl font-bold">
          {String(days).padStart(2, "0")}
        </div>
        <p className="font-black text-black">Days</p>
      </div>
      <div
        className="bg-gray-200 py-2 px-4 rounded-md shadow-xl text-blue-500 
      flex flex-col justify-center items-center"
      >
        <div className="text-2xl font-bold">
          {String(hours).padStart(2, "0")}
        </div>
        <p className="font-black text-black">Hours</p>
      </div>
      <div
        className="bg-gray-200 py-2 px-4 rounded-md shadow-xl text-blue-500 
      flex flex-col justify-center items-center"
      >
        <div className="text-2xl font-bold">
          {String(mins).padStart(2, "0")}
        </div>

        <p className="font-black hidden lg:block  text-black">Minutes</p>
        <p className="font-black lg:hidden text-black">Mins</p>
      </div>
      <div
        className="bg-gray-200 py-2 px-4 rounded-md shadow-xl text-blue-500 
      flex flex-col justify-center items-center"
      >
        <div className="text-2xl font-bold">
          {String(secs).padStart(2, "0")}
        </div>
        <p className="font-black hidden lg:block  text-black">Seconds</p>
        <p className="font-black lg:hidden text-black">Secs</p>
      </div>
    </div>
  );
};

const CountdownTimer = ({ minutes }) => {
  const [timeLeft, setTimeLeft] = useState(parseInt(minutes) * 60); // convert to seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return { days, hours, mins, secs };
  };

  const { days, hours, mins, secs } = formatTime(timeLeft);

  const boxClass =
    "bg-gray-200 text-blue-500 px-4 py-2 rounded-lg text-center shadow-xl";

  return (
    <div className="flex gap-4 justify-center">
      <div className={boxClass}>
        <div className="text-2xl font-bold">
          {String(days).padStart(2, "0")}
        </div>
        <div className="text-sm">Days</div>
      </div>
      <div className={boxClass}>
        <div className="text-2xl font-bold">
          {String(hours).padStart(2, "0")}
        </div>
        <div className="text-sm">Hours</div>
      </div>
      <div className={boxClass}>
        <div className="text-2xl font-bold">
          {String(mins).padStart(2, "0")}
        </div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className={boxClass}>
        <div className="text-2xl font-bold">
          {String(secs).padStart(2, "0")}
        </div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  );
};
