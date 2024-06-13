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
        {/* <motion.div
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
        /> */}
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
          animate={{ height: "0vh", transition: { delay: 0.6, duration: 1 } }}>
          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.1, delay: 0.6 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-4xl">
            Sanem Korkmaz
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
