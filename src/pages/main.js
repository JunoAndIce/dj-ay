import { useRef } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Menu from '../components/menu';
import { MenuProvider } from '../context/menuContext';
import useLocoScroll from "../hooks/useLocoScroll";
import useHeroAnimations from "../hooks/useHeroAnimations";
import useScrollBehavior from "../hooks/useScrollBehavior";

function Main() {
  useLocoScroll(true);
  const componentRef = useRef(null);

  useHeroAnimations(componentRef);
  useScrollBehavior();

  return (
    <div ref={componentRef} data-scroll-container className="main">
      <MenuProvider>
        <Navbar />
        <Menu />
        <div className='container flex flex-col md:flex-row'>
          {/* <Hero /> */}
          {/* <About /> */}
          <Projects />
        </div>
      </MenuProvider>
    </div>
  );
}

export default Main;
