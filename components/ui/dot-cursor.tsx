"use client";

import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
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

  const cursorSize = isHovered ? (cursorCtx.isCard ? 96 : 56) : 12;

  return (
    <>
      <motion.span
        animate={{
          x: mousePos.x - cursorSize / 2,
          y: mousePos.y - cursorSize / 2,
          backgroundColor: isHovered ? "#00000020" : "#000000",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          x: { duration: 0 },
          y: { duration: 0 },
        }}
        style={{
          width: cursorSize,
          height: cursorSize,
          transition: "width 0.4s, height 0.4s, transform 0.08s",
          transformOrigin: "bottom bottom",
        }}
        className={cn(
          "bg-black hidden lg:block rounded-full fixed z-[100] pointer-events-none",
          cursorCtx.isCard && "backdrop-blur-sm",
          isHovered ? "bg-black/20" : "bg-black"
        )}>
        {cursorCtx.isCard && (
          <p className="text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">OPEN</p>
        )}
      </motion.span>
    </>
  );
};

export default DotCursor;
