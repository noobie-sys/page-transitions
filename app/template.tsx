"use client";

import React, { Children } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence key={"wait"}>
      {children}
    </AnimatePresence>
  );
};

export default Template;
