
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Founder from '../components/founder';
import Menu from '../components/menu';
import { MenuProvider } from '../context/menuContext';
import useLocoScroll from "../hooks/useLocoScroll";
import useScrollBehavior from "../hooks/useScrollBehavior";

function Main() {
  useLocoScroll(true);
  useScrollBehavior();

  return (
    <div  data-scroll-container className="main">
      <MenuProvider>
        <Navbar />
        <Menu />
        <div className='container flex flex-col md:flex-row'>
          <Hero />
          <About />
          <Founder />
          <Projects />

        </div>
      </MenuProvider>
    </div>
  );
}

export default Main;
