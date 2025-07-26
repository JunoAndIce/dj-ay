import { useEffect, useRef } from 'react';
import { useMenu } from '../context/menuProvider';
import gsap from 'gsap';
import Mix1 from '../assets/images/mix1.webp'
import Mix2 from '../assets/images/mix2.webp'
import { Link } from 'react-router-dom';

const MusicPC = () => {

    return (
        <section className='section is-hidden-mobile !h-[100vh]'>
            <div className='mt-12'>
                <p className='md:text-[3rem] text-xl font-extrabold mb-5 '>MY MIXES</p>
                {/* <div className="h-[1px] w-full bg-divider-primary"></div> */}
                {/* <p className=''>ANYWHERE</p> */}
            </div>
            <div className="flex w-full flex-col gap-8 rounded-lg sm:flex-row mt-15 border-t border-divider-primary !p-5">
                <Link className="w-full flex-shrink-0 sm:min-w-[50%] sm:max-w-[50%] md:w-[344px] md:min-w-[344px] lg:w-[408px] lg:min-w-[808px]" to='https://youtu.be/Tae95nkZj_o'>
                    <img alt="Lucky Zhang" loading="lazy" width="1224" height="1224" decoding="async" data-nimg="1" className="h-full w-full rounded-lg object-cover" src={Mix1} style={{ color: 'transparent' }} />
                </Link>
                <div className="flex flex-col gap-3 sm:flex-1">
                    <a className="type-headline-sm" href='https://youtu.be/Tae95nkZj_o'>DJ AY | True Colors: Houston | Afrobeats vs Dancehall Mix.</a>
                    <div className="type-body-md max-w-[600px]">
                        <div className="rich-text">
                            <p className="type-body-md mb-4">
                                DJ AY took us on an Afrobeats vs Dancehall journey in an installation of our True Colors series. 
                                True Colors is a boiler room type of event that pushes the creative boundaries of performers and attendees alike. 
                                A curated space made by and for music lovers to let loose and vibe to their favourite musicians. 
                                You can find us on Instagram and tiktok  for more updates on upcoming events.
                            </p>
                            <p className="type-body-md mb-4">
                                <strong className="font-bold">@truecolors.x<br />
                                    <a className="underline" href="https://www.hwy6studios.com" target="_blank" rel="noopener noreferrer">
                                    </a>
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col gap-8 rounded-lg sm:flex-row mt-15 border-t border-divider-primary !p-5">
                <Link className="w-full flex-shrink-0 sm:min-w-[50%] sm:max-w-[50%] md:w-[344px] md:min-w-[344px] lg:w-[408px] lg:min-w-[808px]" to='https://youtu.be/U7MXgvYQ2h0'>
                    <img alt="Lucky Zhang" loading="lazy" width="1224" height="1224" decoding="async" data-nimg="1" className="h-full w-full rounded-lg object-cover" src={Mix2} style={{ color: 'transparent' }} />
                </Link>
                <div className="flex flex-col gap-3 sm:flex-1">
                    <a className="type-headline-sm" href='https://youtu.be/U7MXgvYQ2h0'>DJ A.Y. VERSATILE JAIYE ROOM MIX</a>
                    <div className="type-body-md max-w-[600px]">
                        <div className="rich-text">
                            <p className="type-body-md mb-4">
                                DJ A.Y. MISSION WAS TO GET EVERYONE OFF THE WALL AND TO THE DANCE FLOOR AND HE DID JUST THAT!
                            </p>
                            <p className="type-body-md mb-4">
                                <strong className="font-bold"><br />
                                    <a className="underline" href="https://www.hwy6studios.com" target="_blank" rel="noopener noreferrer">
                                    </a>
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MusicPC;
