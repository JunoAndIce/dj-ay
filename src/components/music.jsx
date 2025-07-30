
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faSpotify } from '@fortawesome/free-brands-svg-icons';
import Mix1 from '../assets/images/IMG_9211.webp'
import Mix2 from '../assets/images/mix2.webp'
import festival from '../assets/images/Festival.webp'
import SpotifyT from '../assets/images/spotifyw.png'
import Apple from '../assets/images/apple-w.png'


const Music = () => {
    
    const divStyle = {
            backgroundImage: 'url(' + Mix1 + ')',
            backgroundSize: 'cover',       // ensures the image covers the container
            backgroundPosition: '50% 55%',  // centers the image
            backgroundRepeat: 'no-repeat', // prevents tiling // applies grayscale filter
    };

    return (
        <section className='section'>
            <div className='mt-20'>
                <p className='md:text-[3rem] text-xl font-extrabold mb-2'>MY MUSIC</p>
                <div className="h-[1px] w-full bg-divider-primary"></div>
                {/* <p className=''>ANYWHERE</p> */}
            </div>
            <div className="flex w-full flex-col gap-8 rounded-lg mt-5">
                {/* <p className="type-headline-sm" href='https://youtu.be/Tae95nkZj_o'>DJ A.Y. | CRAZE INTERLUDE</p> */}


                <div className='flex flex-col gap-5'>
                    <div className="relative">

                        <div className='brightness-35 h-125 md:h-250' style={divStyle}>
                        </div>

                        <div className='absolute bottom-3 left-0 px-3 '>
                            <div className='flex flex-col md:w-200 md:p-20 gap-2'>
                                <div className='flex flex-col items-center'>

                                    <figure className='image is-hidden-mobile'>
                                        <img className='' src={SpotifyT} />
                                    </figure>
                                    <figure className='image is-hidden-tablet'>
                                        <img className='!h-10' src={SpotifyT} />
                                    </figure>

                                
                                    <div className='font-extrabold text-7xl is-hidden-mobile'>
                                        X
                                    </div>
                                    <div className='font-extrabold text-3xl is-hidden-tablet'>
                                        X
                                    </div>

                                    <figure className='image is-hidden-mobile'>
                                        <img className='' src={Apple} />
                                    </figure>
                                    <figure className='image is-hidden-tablet'>
                                        <img className='!h-10' src={Apple} />
                                    </figure>

                                </div>
                                <div className='mt-3'>
                                    <p className="type-body-md-special text-white mb-4">Experience DJ A.Y’s electrifying Afro‑Rhythm Universe on Spotify: dynamic, high‑energy mixes that pulse with the heart of Afrobeat. His playlists weave together chart‑toppers from stars like Burna Boy, Wizkid, and Omah Lay with fresh underground tunes and deeper cuts. Whether it’s mid-tempo grooves or bass‑driven Nigerians club classics, DJ A.Y curates a seamless journey through the sounds dominating dancefloors across Africa and the diaspora.</p>
                                    <div className='mt-10 buttons field is-grouped is-hidden-mobile'>
                                        <a className='button is-large is-halfwidth'>
                                            <span className="icon">
                                                <FontAwesomeIcon icon={faSpotify} />
                                            </span>
                                            <Link className='!text-white' to='https://open.spotify.com/artist/5JWt6rXnRhaGhP16v71xxg?si=8s7lfRo6SxCEthQ0aGMsPw'>View on Spotify</Link>
                                        </a>
                                        <a className=' button is-large is-halfwidth'>
                                            <span className="icon">
                                                <FontAwesomeIcon icon={faApple} />
                                            </span>
                                            <Link to='https://music.apple.com/us/artist/dj-a-y/1102499691' className='!text-white'>View on Apple Music</Link>
                                        </a>
                                    </div>
                                    <div className='mt-10 buttons field is-grouped is-hidden-tablet'>
                                        <a className='button is-small is-halfwidth'>
                                            <span className="icon">
                                                <FontAwesomeIcon icon={faSpotify} />
                                            </span>
                                            <Link className='!text-white' to='https://open.spotify.com/artist/5JWt6rXnRhaGhP16v71xxg?si=8s7lfRo6SxCEthQ0aGMsPw'>View on Spotify</Link>
                                        </a>
                                        <a className=' button is-small is-halfwidth'>
                                            <span className="icon">
                                                <FontAwesomeIcon icon={faApple} />
                                            </span>
                                            <Link to='https://music.apple.com/us/artist/dj-a-y/1102499691' className='!text-white'>View on Apple Music</Link>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Music;
