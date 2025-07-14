import { createContext, useContext, useState } from "react";

// 1. Create context
const MenuContext = createContext();

// 2. Provider component
export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// 3. Custom hook for usage
export const useMenu = () => useContext(MenuContext);
