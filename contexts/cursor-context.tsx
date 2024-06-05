"use client";

import { createContext, useState } from "react";

interface CursorContextObject {
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export const CursorContext = createContext<CursorContextObject>({
  isHovered: false,
  onHover: () => {},
  onLeave: () => {},
});

export const CursorContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onHover = () => {
    setIsHovered(true);
  };

  const onLeave = () => {
    setIsHovered(false);
  };

  const cursorContextValue = {
    isHovered,
    onHover,
    onLeave,
  };

  return <CursorContext.Provider value={cursorContextValue}>{children}</CursorContext.Provider>;
};
