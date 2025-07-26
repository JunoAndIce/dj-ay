import { faChevronDown, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import HeroWebp from '../assets/images/hero.webp'
import mix1 from '../assets/images/mix1.webp'
import mix2 from '../assets/images/mix2.webp'

const Music = () => {
    return (
        <>
            <section className='section mb-20 is-hidden-tablet mt-15'>

                <div className='md:px-15 lg:px-35'>
                    <div className=''>
                        <p className='md:text-[3rem] text-xl font-extrabold mb-5'>MY MUSIC</p>
                        {/* <div className="h-[1px] w-full bg-divider-primary"></div> */}
                        {/* <p className=''>ANYWHERE</p> */}
                    </div>

                    <div className="flex w-full flex-col gap-8 rounded-lg mt-5 border-t border-divider-primary !p-5">
                        <p className="type-emphasis-lg" href='https://youtu.be/Tae95nkZj_o'>DJ A.Y. | CRAZE INTERLUDE</p>
                        <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/album/1O2fGCZ87j0G2gcrtYj9BK?utm_source=generator&theme=0" width="100%" height="472" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="338" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/craze-interlude-ep/1764941995"></iframe>
                        {/* <Spotify link='https://open.spotify.com/album/1O2fGCZ87j0G2gcrtYj9BK?si=DKnDJyw-SVOKSPfA_MBqPQ' /> */}
                    </div>
                    <div className='m-auto fixed-grid has-5-cols-tablet has-1-cols-mobile overflow-hidden'>
                        <div className='mt-12'>
                            <p className='md:text-[3rem] text-xl font-extrabold mb-3 '>MIXES</p>
                            <div className="h-[1px] w-full bg-divider-primary"></div>
                            {/* <p className=''>ANYWHERE</p> */}
                        </div>
                        <div className='grid is-gap-5 mt-5'>

                            <a className='flex flex-col cell cursor-pointer' href='https://youtu.be/Tae95nkZj_o'>
                                <div className='mb-2 aspect-3/2'>
                                    <img className='!h-full w-full rounded-md object-cover' src={mix1} alt='Thumbnail of Afrobeats vs Dancehall mix.' />

                                </div>
                                <p className="type-emphasis-lg">Afrobeats vs Dancehall Mix</p>
                                <p className="type-body-sm">True Colors: Houston</p>
                            </a>

                            <a className='flex flex-col cell cursor-pointer' href='https://youtu.be/U7MXgvYQ2h0'>
                                <div className='mb-2 aspect-3/2'>
                                    <img className='!h-full w-full rounded-md object-cover' src={mix2} alt='Thumbnail of DJ A.Y. Versatile mix.' />

                                </div>
                                <p className="type-emphasis-lg">DJ A.Y. VERSATILE </p>
                                <p className="type-body-sm">Jaiye Room Mix</p>
                            </a>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Music;