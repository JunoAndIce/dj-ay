import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAboutAnimations = (componentRef) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: '11% top',
          end: '13% top',
          // markers: true,
          scrub: 2,
        }
      });

      tl.to(".img_ctn", { duration: 24, y: -575, opacity: 1 })
        .to(".text_ctn", { duration: 12, y: -750, opacity: 1 });

      ScrollTrigger.refresh();
    }, componentRef);

    return () => ctx.revert();
  }, [componentRef]);
};

export default useAboutAnimations;
