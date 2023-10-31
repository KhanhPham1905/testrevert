import React, { createContext, useContext, useState } from "react";

const OpenContext = createContext(false);

export default function OpenContextComponent({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenContext.Provider>
  );
}

export function useOpenNavBarComponent() {
  return useContext(OpenContext);
};
