import logo from '../logo.svg';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import useLocoScroll from "../hooks/useLocoScroll";

function Main() {

  useLocoScroll(true);

  return (
    <div data-scroll-container className="main">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Main;
