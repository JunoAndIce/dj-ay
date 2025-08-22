import { useContext } from "react";
import MenuContext from "./menuContext";

// Custom hook to access menu state
export const useMenu = () => useContext(MenuContext);