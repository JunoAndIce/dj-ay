import { faChevronDown, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import HeroWebp from '../assets/images/hero.webp'
import logo from '../assets/images/logo.webp'
import { Link } from 'react-router-dom';
const Hero = () => {

    const divStyle = {
        backgroundImage: 'url(' + HeroWebp + ')',
        backgroundSize: 'cover',       // ensures the image covers the container
        backgroundPosition: '50% 20%',  // centers the image
        backgroundRepeat: 'no-repeat', // prevents tiling 
        filter: 'grayscale(100%)' // applies grayscale filter
    };
    return (
        <>
            <section className='hero is-fullheight relative is-hidden-tablet'>
                <div className="hero-body" style={divStyle}>
                </div>
                <div className='flex flex-col items-center gap-8 text-center h-[50%] p-12 bg-black/95 absolute bottom-0 w-full'>
                    <div className=''>
                        <img className='' src={logo} alt='DJ A.Y. Main Logo'></img>
                        {/* <p className='md:text-[3rem] text-xl font-extrabold mb-5'>AYO</p> */}
                    </div>

                    <div className=''>
                        <p className='font-extrabold'>There's only one way to spice up the function.</p>
                        <p className='text-xs mt-5'>Based in Houston, TX</p>
                    </div>


                    <div className='buttons field is-grouped'>
                        <div className=' button is-small is-fullwidth'>
                            <span className="icon">
                                <FontAwesomeIcon icon={faClipboard} />
                            </span>
                            <Link className='!text-white' onClick={() => window.location.href = 'mailto:dja.yofficial2@gmail.com'}>Book Now</Link>
                        </div>
                        <div className=' button is-small is-fullwidth'>
                            <span className="icon">
                                <FontAwesomeIcon icon={faMusic} />
                            </span>
                            <Link to='/dj-ay/my-music' className='!text-white'>View Music</Link>
                        </div>
                    </div>

                    <FontAwesomeIcon icon={faChevronDown} className='text-xs text-white' bounce />
                </div>
            </section>
        </>
    )
}

export default Hero;