"use client";

import Link from "next/link";
import DesktopNavlinks from "./desktop-navlinks";
import Hamburger from "./hamburger";
import { useState } from "react";
import MobileMenu from "./mobile-menu";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/libs/utils";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full md:py-6 max-w-[95%] flex justify-between items-center bg-[#f5f5f5] lg:bg-transparent z-50 fixed left-1/2 -translate-x-1/2">
        <div className="flex flex-col pt-2 lg:pt-0">
          <Link href="/" className="lg:text-sm font-semibold text-[#333333]">
            Sanemuix
          </Link>
          <span className="text-xs text-grey-40">Toronto,ON</span>
        </div>
        <DesktopNavlinks />
        <div className="flex-col items-end hidden lg:flex">
          <span className="text-xs text-grey-40">Social:</span>
          <a
            href="https://www.linkedin.com/in/sanem-korkmaz/"
            data-after="LINKEDIN"
            className="text-xs font-semibold text-[#333333] pseudo-text-effect">
            <span>LINKEDIN</span>
          </a>
        </div>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              exit={{ y: -1000 }}
              transition={{ duration: 0.8 }}
              className={cn("fixed left-0 top-0 w-full h-screen -translate-x-1/2 overflow-hidden bg-[#f5f5f5] z-40")}>
              <MobileMenu />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNavigation;
