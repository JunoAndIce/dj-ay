import { useEffect, useLayoutEffect } from 'react';
import { MenuProvider } from '../context/menuContext'; // adjust path if needed
import Hero from '../components/hero';
import Navbar from "../components/navbar";
import About from "../components/about";
import Menu from "../components/menu";
import Music from "../components/music";
import Footer from "../components/footer";
import Testimonials from '../components/testimonial';
import HeroPC from '../components/hero_pc';
import Mixes from '../components/mixes';

const Home = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    useEffect(() => {
            document.title = "DJ A.Y. Official | Home"
        }, []);
    return (
        <>
            <MenuProvider>
                <div id="webApp">
                    <Navbar />
                    <Menu />
                    <Hero />
                    <HeroPC />
                    <About />
                    <Testimonials />
                    <Music />
                    <Mixes />
                    <Footer />
                </div>
            </MenuProvider>

        </>
    );
};

export default Home;
