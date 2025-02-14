import { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useLocoScroll = (start) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector(".main");

    const isHorizontal = window.innerWidth > 768; // Enable horizontal scroll on large screens

    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 0.6,
      direction: isHorizontal ? "horizontal" : "vertical" // Switch direction based on screen size
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.x; // Get horizontal scroll position
        }
        return null;
      },
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.y; // Get vertical scroll position
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed"
    });

    const updateLocoScroll = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.defaults({
      scroller:
        document.documentElement.classList.contains("has-scroll-smooth") &&
        scrollEl
    });

    ScrollTrigger.addEventListener("refresh", updateLocoScroll);
    
    // Update Locomotive Scroll when resizing
    const handleResize = () => {
      const newDirection = window.innerWidth > 768 ? "horizontal" : "vertical";
      locoScroll.destroy(); // Destroy previous instance
      locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 0.6,
        direction: newDirection
      });
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    console.log("Loco-scroll initiated.");

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", updateLocoScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [start]);
};

export default useLocoScroll;
