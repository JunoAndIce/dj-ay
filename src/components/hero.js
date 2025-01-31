import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import video from "../assets/video/ek.mp4"
import Typed from 'typed.js';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


function Hero() {


    const component = useRef(null);
    const el = useRef(null);

    // GSAP logic for hero animations
    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hero",
                    pin: true,
                    start: '+=10 top',
                    end: 'bottom +=3000px',
                    markers: true,
                    scrub: 2,
                }
            })

            tl.to(".hero-center h1", { duration: 12, opacity: 0, })
                .to(".videoTag", { duration: 6, opacity: 0 })

            ScrollTrigger.refresh();
        }, component);

        return () => ctx.revert();
    }, []);

    // Typed logic for Hero SubT.
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>Creative Director</i>', '<i>Graphic Designer</i>',
                '<i>Photographer</i>', '<i>Videographer</i>', ' <i>Multidisciplinary</i>'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div ref={component} data-scroll-container className="hero relative flex justify-center min-h-screen min-w-[100vw] md:items-center ">
            
            {/* Video Background  */}
            <video className='videoTag fixed object-cover h-screen w-screen z-[-1000]' autoPlay muted loop playsInline>
                <source src={video} type='video/mp4' />
            </video>

            {/* Hero Title/SubT */}
            <div className="hero_ctn items-center justify-center flex flex-col gap-y-[250px] md:">

                <div className="flex flex-col items-center">
                    <h1 className="text-8xl">Ekdsgn</h1>
                    <div><span ref={el} className="typed"></span></div>
                </div>

                {/* <FontAwesomeIcon icon={faArrowDown} bounce /> */}


            </div>


        </div>
    );
}

export default Hero;