"use client";

import { AnimatePresence, Spring, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = () => {
  let pathname = usePathname();

  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname}>
        <motion.div
          style={{
            backgroundColor: "#ecedf1",
            position: "fixed",
            width: "100vw",
            zIndex: 1000,
            bottom: 0,
          }}
          transition={transitionSpringPhysics}
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
        />
        <motion.div
          style={{
            backgroundColor: "#ecedf1",
            position: "fixed",
            width: "100vw",
            zIndex: 1000,
            top: 0,
          }}
          transition={transitionSpringPhysics}
          initial={{ height: "100vh" }}
          animate={{ height: "0vh", transition: { delay: 0.2 } }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
