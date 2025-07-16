
import { useLayoutEffect } from 'react';
import { MenuProvider } from '../context/menuProvider'; // adjust path if needed
import Hero from '../components/hero';
import Navbar from "../components/navbar";
import About from "../components/about";
import Menu from '../components/menu'
import Bio from '../components/bio';
import Footer from '../components/footer';
import Social from '../components/social';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
// import 'bulma/css/bulma.css'

const AboutMe = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <MenuProvider>
                <div id="webApp">
                    <Navbar />
                    <Menu />
                    <Bio />
                    {/* <Social /> */}
                    <Footer />
                </div>
            </MenuProvider>

        </>
    );
};

export default AboutMe;
