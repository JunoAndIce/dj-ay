import { useEffect, useLayoutEffect } from 'react';
import { MenuProvider } from "../context/menuProvider"; // adjust path if needed
import Hero from '../components/hero';
import Navbar from "../components/navbar";
import About from "../components/about";
import Menu from "../components/menu";
import Music from "../components/music";
import Footer from "../components/footer";
import Social from "../components/social";
import Testimonials from '../components/testimonial';
import HeroPC from '../components/hero_pc';
import MusicPC from '../components/music_pc';

const Mixes = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    useEffect(() => {
            document.title = "DJ A.Y. Official | Music"
        }, []);
    return (
        <>
            <MenuProvider>
                <div id="webApp">
                    <Navbar />
                    <Menu />
                    <MusicPC />
                    <Music />
                    <Footer />
                </div>
            </MenuProvider>

        </>
    );
};

export default Mixes;
