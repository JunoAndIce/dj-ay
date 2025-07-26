import { faChevronDown, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import HeroWebp from '../assets/images/hero.webp'
import logo from '../assets/images/bazaartw.webp'
import { Link } from 'react-router-dom';

const HeroPC = () => {

    const divStyle = {
        backgroundImage: 'url(' + HeroWebp + ')',
        backgroundSize: 'contain',       // ensures the image covers the container
        backgroundPosition: '100% 20%',  // centers the image
        backgroundRepeat: 'no-repeat', // prevents tiling // applies grayscale filter
        filter: 'grayscale(100%)' // applies grayscale filter
    };
    return (
        <>
            <section className="hero is-fullheight relative is-hidden-mobile">
                <div className="hero-body !p-0 h-full w-full relative">
                    {/* Background Image */}
                    <img
                        src={HeroWebp}
                        className="absolute top-0 left-0 !w-[100vw] !h-[100vh] object-cover object-[20%_15%] grayscale-100 z-0"
                    />

                    {/* Radial Black Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.9)_100%)]" />

                    {/* Foreground Content */}
                    <div className="flex flex-col gap-8 p-12 absolute bottom-20 left-20 z-20">
                        <div>
                            <img className="w-250" src={logo} alt="DJ A.Y Main Logo" />
                        </div>

                        <div>
                            <p className="md:text-[5rem] text-xl font-extrabold mb-5 text-white">
                                
                            </p>
                            <p className="subtitle is-9 type-body-sm">Based in Houston, TX</p>
                        </div>

                        <div className="buttons field is-grouped">
                            <a className="button is-large">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faClipboard} />
                                </span>
                                <Link className='!text-white' onClick={() => window.location.href = 'mailto:dja.yofficial2@gmail.com'}>Book Now</Link>
                            </a>
                            <a className="button is-large is">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faMusic} />
                                </span>
                                <Link className='!text-white' to='/mixes'>View Music</Link>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HeroPC;