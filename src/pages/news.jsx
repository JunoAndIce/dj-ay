
import { useEffect, useLayoutEffect } from 'react';
import { MenuProvider } from '../context/menuContext'; // adjust path if needed
import Navbar from "../components/navbar";
import Menu from '../components/menu'
import Footer from '../components/footer';
import Blog from '../components/blog';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
// import 'bulma/css/bulma.css'

const News = () => {
    
    useEffect(() => {
            document.title = "DJ A.Y. Official | News"
        }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <MenuProvider>
                <div id="webApp">
                    <Navbar />
                    <Menu />
                    <Blog />
                    <Footer />
                </div>
            </MenuProvider>

        </>
    );
};

export default News;
