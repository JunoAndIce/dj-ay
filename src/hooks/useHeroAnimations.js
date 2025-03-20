import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHeroAnimations = (componentRef) => {
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         pin: true,
  //         start: '+=100 top',
  //         end: 'bottom +=5000px',
  //         markers: true,
  //         scrub: 2,
  //       }
  //     });

  //     tl.to(".nav_info", { duration: 12, opacity: 0 })
  //       .to(".videoTag", { duration: 6, opacity: 0 });

  //     ScrollTrigger.refresh();
  //   }, componentRef);

  //   return () => ctx.revert();
  // }, [componentRef]);
};

export default useHeroAnimations;
