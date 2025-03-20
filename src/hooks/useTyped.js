import { useEffect, useRef } from "react";
import Typed from "typed.js";

const useTypedText = (strings, options = {}) => {
  const typedRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const defaultOptions = {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      ...options, // Merge default options with any custom options
    };

    typedRef.current = new Typed(elementRef.current, defaultOptions);

    return () => {
      typedRef.current.destroy();
    };
  }, [strings, options]);

  return elementRef;
};

export default useTypedText;
