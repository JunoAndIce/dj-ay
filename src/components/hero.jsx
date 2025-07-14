import { faChevronDown, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import HeroWebp from '../assets/images/hero.webp'
import logo from '../assets/images/logo.webp'
const Hero = () => {

    const divStyle = {
        backgroundImage: 'url(' + HeroWebp + ')',
        backgroundSize: 'cover',       // ensures the image covers the container
        backgroundPosition: 'center',  // centers the image
        backgroundRepeat: 'no-repeat', // prevents tiling
    };
    return (
        <>
            <section className='hero is-fullheight relative'>
                <div className="hero-body" style={divStyle}>
                </div>
                <div className='flex flex-col items-center gap-8 text-center h-[50%] p-12 bg-black/95 absolute bottom-0 w-full'>
                    <div className=''>
                        <img className='' src={logo} alt='DJ A.Y Main Logo'></img>
                    </div>

                    <div className=''>
                        <p className='font-extrabold'>There's only one way to spice up the function.</p>
                        <p className='text-xs mt-5'>Based in Houston, TX</p>
                    </div>


                    <div className='buttons field is-grouped'>
                        <a className=' button is-small is-fullwidth'>
                            <span className="icon">
                                <FontAwesomeIcon icon={faClipboard} />
                            </span>
                            <button className=''>Book Now</button>
                        </a>
                        <a className=' button is-small is-fullwidth'>
                            <span className="icon">
                                <FontAwesomeIcon icon={faMusic} />
                            </span>
                            <button className=''>View Music</button>
                        </a>
                    </div>

                    <FontAwesomeIcon icon={faChevronDown} className='text-xs text-white' bounce />
                </div>
            </section>
        </>
    )
}

export default Hero;