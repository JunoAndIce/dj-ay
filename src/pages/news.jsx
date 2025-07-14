

import { MenuProvider } from '../context/menuProvider'; // adjust path if needed
import Hero from '../components/hero';
import Navbar from "../components/navbar";
import About from "../components/about";
import Menu from '../components/menu'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Bio from '../components/bio';
import Footer from '../components/footer';
import Social from '../components/social';
import Blog from '../components/blog';
// import 'bulma/css/bulma.css'

const News = () => {
    return (
        <>
            <MenuProvider>
                <div id="webApp">
                    <Navbar />
                    <Menu />
                    <Blog />
                    <Social />
                    <Footer />
                </div>
            </MenuProvider>

        </>
    );
};

export default News;
