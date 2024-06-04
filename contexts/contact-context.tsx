"use client";

import { createContext, useState } from "react";

interface ContactContextObject {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ContactContext = createContext<ContactContextObject>({
  open: false,
  onOpen: () => {},
  onClose: () => {},
});

export const ContactContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openFormHandler = () => {
    setIsOpen(true);
  };

  const closeFormHandler = () => {
    setIsOpen(false);
  };

  const contextValue = {
    open: isOpen,
    onOpen: openFormHandler,
    onClose: closeFormHandler,
  };

  return <ContactContext.Provider value={contextValue}>{children}</ContactContext.Provider>;
};
