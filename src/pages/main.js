import logo from '../logo.svg';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import useLocoScroll from "../hooks/useLocoScroll";
import Menu from "../components/menu";
import { MenuProvider } from '../context/menuContext';
import { useEffect } from 'react';

function Main() {

  useLocoScroll(true);

  useEffect(() => {
    const updateScrollDirection = () => {
      if (window.innerWidth > 768) {
        document.body.style.overflowX = "auto";
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";
      }
    };

    updateScrollDirection(); // Run on load
    window.addEventListener("resize", updateScrollDirection);
    
    return () => window.removeEventListener("resize", updateScrollDirection);
  }, []);

  return (
    <div data-scroll-container className="main">
      <MenuProvider>
        <Navbar />
        <Menu />
        <div className='container flex flex-col md:flex-row'>
          <Hero />
        </div>
      </MenuProvider>
    </div>
  );
}

export default Main;
