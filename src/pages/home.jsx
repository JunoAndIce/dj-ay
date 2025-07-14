
import { MenuProvider } from "../context/menuProvider"; // adjust path if needed
import Hero from '../components/hero';
import Navbar from "../components/navbar";
import About from "../components/about";
import Menu from "../components/menu";
import Music from "../components/music";
import Footer from "../components/footer";
import Social from "../components/social";

const Home = () => {
    return (
        <>
            <MenuProvider>
                <div id="webApp">
                    <Navbar />
                    <Menu />
                    <Hero />
                    <About />
                    <Music />
                    <Social />
                    <Footer />
                </div>
            </MenuProvider>

        </>
    );
};

export default Home;
