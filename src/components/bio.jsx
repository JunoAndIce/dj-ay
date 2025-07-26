import { Suspense } from 'react';
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { Canvas } from '@react-three/fiber';
import { faChevronDown, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import Scene from '../scene';
import heroImg from '../assets/images/AYO.webp'
import party from '../assets/images/party.webp'
import stand from '../assets/images/stand.webp'
import festival from '../assets/images/festival.webp'
import action from '../assets/images/action.webp'
import clubs from '../assets/images/Clubs.webp'
import { Link } from 'react-router-dom';

const Bio = () => {

    return (
        <>
            <section className='section !p-0 relative'>
                <figure className='image !mt-20 absolute brightness-35'>
                    <img
                        src={heroImg}
                        className='aspect-3/1 md:aspect-6/1 w-full h-full object-cover object-[center_45%]'
                    />
                </figure>
                <div className='absolute bottom-2 pl-4'>
                    <p className='subtitle is-6 type-body-sm'>Who is...</p>
                    <h1 className='title is-1'>DJ A.Y?</h1>
                </div>

            </section>

            <section className='section'>
                <div className='container'>
                    <div className='is-primary'>
                        <p>
                            <strong>Hailing from Houston, Texas,</strong> DJ A.Y. is one of the most versatile and rising DJs in the Texas music scene,
                            gaining recognition for his high-energy sets and seamless genre-blending—especially within Afrobeats.
                            Inspired by his DJ friends and the energy they brought to every crowd, <strong>DJ A.Y. began his journey on May 8, 2022, </strong>
                            and has since taken stages across Texas by storm.
                        </p>

                        <p className='mt-5'>
                            As a proud student of Texas State University
                            and winner of the Performing Artist of the Year award, DJ A.Y. has become a household name among college audiences,
                            igniting dance floors in cities like <strong>Houston, San Marcos, Austin, San Antonio, Dallas, Lubbock, and College Station. </strong>
                            His resume includes performances alongside some of Afrobeats’ biggest stars,
                            including <strong>Davido, Ruger, Adekunle Gold, Victony, DJ Tunez, Bnxn, Oxlade, Mayorkun, Spinall, Shallipopi, and Odumodublvck. </strong>
                        </p>

                        <p className='mt-5'>
                            Now featured in Collective Club’s Exclusive Guest Selections,
                            DJ A.Y. continues to share the sounds that fuel his creativity and shape his electrifying performances.
                            Driven by passion and purpose, <strong>his mission is simple: to connect, inspire, and create unforgettable experiences—one crowd at a time.</strong>
                        </p>


                        <a className='p-4 button is-fullwidth is-warning is-medium is-responsive mt-5'>
                            <span className="icon">
                                <FontAwesomeIcon icon={faClipboard} />
                            </span>
                            <Link onClick={() => window.location.href = 'mailto:dja.yofficial2@gmail.com'} className='!text-black'>Let's start working!</Link>
                        </a>
                    </div>

                    <div className='m-auto fixed-grid has-5-cols-tablet has-1-cols-mobile !mt-10'>
                        <div className='grid is-gap-5'>

                            <div className='flex flex-col cell'>
                                <div className='mb-2 aspect-2/3'>
                                    <img className='!h-full w-full rounded-md object-cover' src={party} />
                                </div>
                            </div>

                            <div className='flex flex-col cell'>
                                <div className='mb-2 aspect-2/3'>
                                    <img className='!h-full w-full rounded-md object-cover' src={stand} />
                                </div>
                            </div>

                            <div className='flex flex-col cell'>
                                <div className='mb-2 aspect-2/3'>
                                    <img className='!h-full w-full rounded-md object-cover' src={festival} />
                                </div>
                            </div>

                            <div className='flex flex-col cell'>
                                <div className='mb-2 aspect-2/3'>
                                    <img className='!h-full w-full rounded-md object-cover' src={action} />
                                </div>
                            </div>

                            <div className='flex flex-col cell'>
                                <div className='mb-2 aspect-2/3'>
                                    <img className='!h-full w-full rounded-md object-cover' src={clubs} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Bio;