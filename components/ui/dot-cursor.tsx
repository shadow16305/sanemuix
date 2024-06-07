"use client";

import { useState, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CursorContext } from "@/contexts/cursor-context";
import { cn } from "@/lib/utils";

interface MousePosition {
  x: number;
  y: number;
}

const DotCursor = () => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });

  const cursorCtx = useContext(CursorContext);

  const isHovered = cursorCtx.isHovered;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.span
        className={cn(
          "hidden lg:block rounded-full fixed -top-4 -left-5 z-[100] pointer-events-none p-2",
          isHovered ? "bg-black/10" : "bg-white",
          cursorCtx.isCard && "backdrop-blur-sm"
        )}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          width: isHovered ? (cursorCtx.isCard ? "96px" : "56px") : "24px",
          height: isHovered ? (cursorCtx.isCard ? "96px" : "56px") : "24px",
        }}
        transition={{
          type: "spring",
          x: { duration: 0 },
          y: { duration: 0 },
          width: { duration: 0.8, type: "spring" },
          height: { duration: 0.8, type: "spring" },
        }}>
        {!isHovered && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={cn("absolute size-3 -translate-x-1/2 bg-black -translate-y-1/2 rounded-full left-1/2 top-1/2")}
          />
        )}
        {cursorCtx.isCard && (
          <p className="text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">OPEN</p>
        )}
      </motion.span>
    </>
  );
};

export default DotCursor;
