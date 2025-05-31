import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import Typewriter from "typewriter-effect";
import BentoGrid from "../BentoGrid/BentoGrid";
import HeroSlider from "./Hero";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <BentoGrid />
    </div>
  );
};

export default Home;

const SlideIn = () => {
  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        ease: "easeInOut",
        duration: 20,
      }}
    >
      <p className="py-2">Type shii and get Started! </p>
    </motion.div>
  );
};
