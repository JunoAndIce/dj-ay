import { useEffect } from "react";
import gsap from "gsap";

const useMenuAnimations = (menuRef, listItemsRef, aboutRef, socialListRef, isMenuOpen) => {
  useEffect(() => {
    if (!menuRef?.current) return;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling

      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "expo.out",
        display: "block",
      });

      gsap.from(listItemsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      });

      gsap.from(aboutRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(socialListRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.3,
      });

    } else {
      document.body.style.overflow = ""; // Re-enable scrolling

      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: "expo.in",
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = "none";
        },
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
};

export default useMenuAnimations;
