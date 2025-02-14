import { useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Menu from '../components/menu';
import { MenuProvider } from '../context/menuContext';
import useLocoScroll from "../hooks/useLocoScroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


function Main() {

  useLocoScroll(true);
  const component = useRef(null);

  // GSAP logic for hero animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          // trigger: ".main",
          pin: true,
          start: '+=100 top',
          end: 'bottom +=3000px',
          markers: true,
          scrub: 2,
        }
      })

      tl.to(".nav_info", { duration: 12, opacity: 0, })
        .to(".videoTag", { duration: 6, opacity: 0 })

      ScrollTrigger.refresh();
    }, component);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const updateScrollBehavior = () => {
      const isDesktop = window.innerWidth > 768;
      document.body.style.overflowX = isDesktop ? "auto" : "hidden";
      document.body.style.overflowY = isDesktop ? "hidden" : "auto";
    };

    const handleWheelScroll = (event) => {
      if (window.innerWidth > 768) {
        event.preventDefault(); // Prevent default vertical scrolling
        document.documentElement.scrollLeft += event.deltaY; // Translate vertical scroll to horizontal
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

  return (
    <div ref={component} data-scroll-container className="main">
      <MenuProvider>
        <Navbar />
        <Menu />
        <div className='container flex flex-col md:flex-row'>
          <Hero />
          <Projects />
          <About />
        </div>
      </MenuProvider>
    </div>
  );
}

export default Main;
