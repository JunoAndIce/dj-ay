
import { useEffect, useLayoutEffect } from 'react';
import { MenuProvider } from '../context/menuProvider'; // adjust path if needed
import Hero from '../components/hero';
import Navbar from "../components/navbar";
import About from "../components/about";
import Menu from '../components/menu'
import Bio from '../components/bio';
import Footer from '../components/footer';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const AboutMe = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        document.title = "DJ A.Y. Official | About Me"
    }, []);

    return (
        <>
            <MenuProvider>
                <div id="webApp">
                    <Navbar />
                    <Menu />
                    <Bio />
                    <Footer />
                </div>
            </MenuProvider>

        </>
    );
};

export default AboutMe;
