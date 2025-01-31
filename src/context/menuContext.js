import { createContext, useContext, useState } from "react";

// Create the context
const MenuContext = createContext();

// Custom hook for easier access
export const useMenu = () => useContext(MenuContext);

// Provider component
export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
