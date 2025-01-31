import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const useVanillaTilt = (options) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options);
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