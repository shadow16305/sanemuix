"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main variants={variants} initial="hidden" animate="enter" transition={{ type: "linear", delay: 0.2 }}>
      {children}
    </motion.main>
  );
};

export default Template;
