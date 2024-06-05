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
          "hidden lg:block rounded-full fixed -top-4 -left-5 z-[100] pointer-events-none p-2 backdrop-blur-sm",
          isHovered ? "bg-black/10" : "bg-white"
        )}
        animate={{
          x: isHovered ? mousePos.x - 32 : mousePos.x,
          y: isHovered ? mousePos.y - 32 : mousePos.y,
          width: isHovered ? "80px" : "24px",
          height: isHovered ? "80px" : "24px",
        }}
        transition={{
          type: "tween",
          x: { duration: 0 },
          y: { duration: 0 },
          width: { duration: 0.6, type: "spring" },
          height: { duration: 0.6, type: "spring" },
        }}>
        <span
          className={cn(
            "absolute size-3 -translate-x-1/2 bg-black -translate-y-1/2 rounded-full left-1/2 top-1/2",
            isHovered ? "bg-transparent" : "bg-black"
          )}
        />
      </motion.span>
    </>
  );
};

export default DotCursor;
