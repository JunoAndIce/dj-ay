import { useEffect, useLayoutEffect } from 'react';
import { MenuProvider } from '../context/menuContext'; // adjust path if needed
import Navbar from "../components/navbar";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Music from '../components/music';
import Mixes from '../components/mixes';

const MyMusic = () => {
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
                    <Music />
                    <Mixes />
                    <Footer />
                </div>
            </MenuProvider>

        </>
    );
};

export default MyMusic;
