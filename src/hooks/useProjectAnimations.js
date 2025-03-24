import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useProjectAnimations = (componentRef) => {
    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".card_ctn");

            cards.forEach((card, index) => {
                gsap.fromTo(card, 
                    { opacity: 0, y: 100 }, // Initial state
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 1, 
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "-110% 20%", // Starts animation when 80% of card is in view
                            end: "top 20%", 
                            scrub: false,
                            // markers: true,
                            toggleActions: "play none none none", // Play once when it enters
                        }
                    }
                );
            });

            ScrollTrigger.refresh();
        }, componentRef);

        return () => ctx.revert();
    }, [componentRef]);
};

export default useProjectAnimations;
