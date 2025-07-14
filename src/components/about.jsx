import { faChevronDown, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';
import party from '../assets/images/party.webp'
import festival from '../assets/images/festival.webp'
import clubs from '../assets/images/Clubs.webp'


gsap.registerPlugin(ScrollTrigger);

const About = () => {

    // useGSAP(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".page-2",
    //             start: "top center",
    //             end: "125% center",
    //             scrub: true,
    //             // markers: true, // 🔍 enable to debug scroll area
    //         }
    //     });
    // }, []);

    return (
        <>
            <section className='section'>

                <div className='mt-5 '>
                    <div className=''>


                        <div className='flex flex-col gap-10'>

                            <div className='text-base '>
                                <p className='md:w-300 md:text-[3rem] text-xl font-extrabold'> <span className='bg-gradient-to-r from-amber-500 to-red-400 bg-clip-text text-transparent'> Hailing from Houston, Texas: </span><br /> DJ A.Y is one of the most versatile and rising DJs in the Texas music scene, gaining recognition for his high-energy sets and seamless genre-blending — especially within Afrobeats. </p>
                                <div className='mt-4'>
                                    <Link className='p-2 button is-fullwidth is-small is-warning is-outlined mt-5' to='about-me'>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className=''>
                                <p className='md:text-[3rem] text-xl font-extrabold mb-5'>ANYTIME, ANYWHERE</p>
                                <div className="h-[1px] w-full bg-divider-primary"></div>
                                {/* <p className=''>ANYWHERE</p> */}
                            </div>



                        </div>


                        <div>

                        </div>
                        <div className='card_ctn mt-5 flex flex-col md:flex-row justify-center items-center gap-6'>
                            <div className='text-black flex aspect-2/3 h-full w-full flex-col justify-end rounded-xl bg-background-surface px-6 pb-11 relative min-h-[320px] overflow-hidden'>
                                <div className='absolute inset-0 h-full w-full'>
                                    <img className='card_img h-full w-full object-cover absolute ' src={party} />
                                </div>
                                <div className="card_bg absolute bottom-0 left-0 right-0 h-1/2"></div>
                                <div className="flex h-full w-full items-center justify-center"><div className="flex h-full w-full items-center justify-center p-10"></div></div>
                                <div className="z-10 flex w-full flex-col items-center justify-center text-center">
                                    <span className="type-label-md mb-1">Parties</span>
                                    <h3 className="type-headline-xxs mb-3">From Birthdays to Weddings</h3>
                                    <p className="type-body-sm">No matter the occasion, DJ A.Y. is here to bring life to the party.</p>
                                </div>
                            </div>

                            <div className='text-black flex aspect-2/3 h-full w-full flex-col justify-end rounded-xl bg-background-surface px-6 pb-11 relative min-h-[320px] overflow-hidden'>
                                <div className='absolute inset-0 h-full w-full'>
                                    <img className='card_img h-full w-full object-cover absolute ' src={clubs} />
                                </div>
                                <div className="card_bg absolute bottom-0 left-0 right-0 h-1/2"></div>
                                <div className="flex h-full w-full items-center justify-center"><div className="flex h-full w-full items-center justify-center p-10"></div></div>
                                <div className="z-10 flex w-full flex-col items-center justify-center text-center">
                                    <span className="type-label-md mb-1">CLUBS</span>
                                    <h3 className="type-headline-xxs mb-3">Bringing the Energy</h3>
                                    <p className="type-body-sm">All your favorite songs, all through the night. Right here in Houston, Texas.</p>
                                </div>
                            </div>

                            <div className='text-black flex aspect-2/3 h-full w-full flex-col justify-end rounded-xl bg-background-surface px-6 pb-11 relative min-h-[320px] overflow-hidden'>
                                <div className='absolute inset-0 h-full w-full'>
                                    <img className='card_img h-full w-full object-cover absolute ' src={festival} />
                                </div>
                                <div className="card_bg absolute bottom-0 left-0 right-0 h-1/2"></div>
                                <div className="flex h-full w-full items-center justify-center"><div className="flex h-full w-full items-center justify-center p-10"></div></div>
                                <div className="z-10 flex w-full flex-col items-center justify-center text-center">
                                    <span className="type-label-md mb-1">FESTIVALS</span>
                                    <h3 className="type-headline-xxs mb-3">The Sky is the Limit</h3>
                                    <p className="type-body-sm">No stage is too big for DJ A.Y. We've got all kinds of heat, anywhere you want. </p>
                                </div>
                            </div>

                        </div>
                        <div className="h-[1px] w-full bg-divider-primary"></div>

                        <div className='mt-5'>

                            <a className='p-4 button is-fullwidth is-warning is-medium is-responsive'>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faClipboard} />
                                </span>
                                <button className=''>Book Now!</button>
                            </a>
                        </div>


                    </div>

                </div>

            </section>
        </>
    )
}

export default About;