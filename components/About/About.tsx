'use client'
import React from "react";
import { motion } from "framer-motion";

const Abouts = () => {
  return (
      <motion.div initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 1 , delay : 0.7}} className="w-full h-screen flex justify-center bg-slate-200 items-center text-black">
        <motion.h1 initial={{opacity : 0 , translateY: -100}}
        animate={{opacity : 1 , translateY:0}}
        transition={{duration : 1.1 , delay : 0.7}}
        className="text-[7vw] uppercase font-serif">Hey , I am Aman Gupta</motion.h1>
      </motion.div>
  );
};

export default Abouts;
