"use client";

import Link from "next/link";
import DesktopNavlinks from "./desktop-navlinks";
import Hamburger from "./hamburger";
import { useContext, useState } from "react";
import MobileMenu from "./mobile-menu";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/libs/utils";
import { useIsDesktop } from "@/hooks/useIsDektop";
import { CursorContext } from "@/contexts/cursor-context";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cursorCtx = useContext(CursorContext);

  const { scrollY } = useScroll();

  const isDesktop = useIsDesktop();
  const opacityNav = useTransform(scrollY, [0, 100, 200], [1, 0.5, 0]);

  return (
    <>
      <nav className=" bg-[#f5f5f5] lg:bg-transparent z-50 fixed w-full mx-auto">
        <div className="w-full md:py-6 max-w-[95%] mx-auto flex justify-between items-center">
          <motion.div className="flex flex-col py-2 lg:pt-0" style={isDesktop ? { opacity: opacityNav } : {}}>
            <Link
              href="/"
              onMouseEnter={cursorCtx.onHover}
              onMouseLeave={cursorCtx.onLeave}
              className="lg:text-sm font-semibold text-[#333333] hover:text-neutral-600">
              Sanemuix
            </Link>
            <span className="text-xs text-grey-40">Toronto,ON</span>
          </motion.div>
          <DesktopNavlinks />
          <motion.div className="flex-col items-end hidden lg:flex" style={isDesktop ? { opacity: opacityNav } : {}}>
            <span className="text-xs text-grey-40">Social:</span>
            <a
              href="https://www.linkedin.com/in/sanem-korkmaz/"
              data-after="LINKEDIN"
              onMouseEnter={cursorCtx.onHover}
              onMouseLeave={cursorCtx.onLeave}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-[#333333] pseudo-text-effect">
              <span>LINKEDIN</span>
            </a>
          </motion.div>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
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
              <MobileMenu toggleOpen={() => setIsOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNavigation;
