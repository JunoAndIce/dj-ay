import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const useVanillaTilt = (options = {}) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const defaultOptions = {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
      ...options, // Merge default options with any custom ones
    };

    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, defaultOptions);
    }

    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return tiltRef;
};

export default useVanillaTilt;