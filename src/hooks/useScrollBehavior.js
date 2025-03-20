import { useEffect } from "react";

const useScrollBehavior = () => {
  useEffect(() => {
    const updateScrollBehavior = () => {
      const isDesktop = window.innerWidth > 768;
      document.body.style.overflowX = isDesktop ? "auto" : "hidden";
      document.body.style.overflowY = isDesktop ? "hidden" : "auto";
    };

    const handleWheelScroll = (event) => {
      if (window.innerWidth > 768) {
        event.preventDefault();
        document.documentElement.scrollLeft += event.deltaY;
      }
    };

    updateScrollBehavior();
    window.addEventListener("resize", updateScrollBehavior);
    window.addEventListener("wheel", handleWheelScroll, { passive: false });

    return () => {
      window.removeEventListener("resize", updateScrollBehavior);
      window.removeEventListener("wheel", handleWheelScroll);
    };
  }, []);
};

export default useScrollBehavior;
