"use client";

import { createContext, useState } from "react";

interface CursorContextObject {
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  isCard: boolean;
  onEnterCard: () => void;
  onLeaveCard: () => void;
}

export const CursorContext = createContext<CursorContextObject>({
  isHovered: false,
  onHover: () => {},
  onLeave: () => {},
  isCard: false,
  onEnterCard: () => {},
  onLeaveCard: () => {},
});

export const CursorContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCard, setIsCard] = useState(false);

  const cursorContextValue = {
    isHovered,
    onHover: () => setIsHovered(true),
    onLeave: () => setIsHovered(false),
    isCard,
    onEnterCard: () => setIsCard(true),
    onLeaveCard: () => setIsCard(false),
  };

  return <CursorContext.Provider value={cursorContextValue}>{children}</CursorContext.Provider>;
};
